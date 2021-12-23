import { getRepository } from "typeorm";
import { Pix } from "../entities/Pix";
import { User } from "../entities/User";
import { AppError } from "../error/AppError";
import { decodeKey, encodeKey } from "../utils/pix";

export class PixService {

  async request(value: number, user: Partial<User>) {
    const pixRepository = getRepository(Pix);
    const userRepository = getRepository(User);

    const currentUser = await userRepository.findOne({ where: { id: user.id } })

    const requestData = {
      requestingUser: currentUser,
      value: value,
      status: 'open',
    }

    const register = await pixRepository.save(requestData)

    const key = encodeKey(user.id || '', value, register.id)

    return key
  }

  async pay(key: string, user: Partial<User>) {
    const keyDecoded = decodeKey(key);

    if (keyDecoded.userId === user.id) {
      throw new AppError("Não é possível receber pix do mesmo usuário")
    }

    const pixRepository = getRepository(Pix);
    const userRepository = getRepository(User);

    //Para quem vai receber
    const requestingUser = await userRepository
      .findOne({ where: { id: keyDecoded.userId } })

    //Quem vai realizar o pagamento
    const payingUser = await userRepository
      .findOne({ where: { id: user.id } })

    if (payingUser?.wallet && payingUser.wallet < Number(keyDecoded.value)) {
      throw new AppError("Não há saldo suficiente para fazer o pagamento", 401)
    }
    if (!requestingUser || !payingUser) {
      throw new AppError("Não encontramos os clientes da transação, gere uma nova chave", 401)
    }

    requestingUser.wallet = Number(requestingUser?.wallet) + Number(keyDecoded.value);
    await userRepository.save(requestingUser)

    payingUser.wallet = Number(payingUser?.wallet) - Number(keyDecoded.value);
    await userRepository.save(payingUser);

    const pixTransaction = await pixRepository
      .findOne({ where: { id: keyDecoded.registerId, status: 'open' } });

    if (!pixTransaction) {
      throw new AppError('Chave inválida para pagamento', 401)
    }

    pixTransaction.status = 'close';
    pixTransaction.payingUser = payingUser

    await pixRepository.save(pixTransaction)

    return { msg: 'Pagamento efetuado com sucesso' }
  }

  async transactions(user: Partial<User>) {
    const pixRepository = getRepository(Pix);

    const pixReceived = await pixRepository
      .find({ where: { requestingUser: user.id, status: 'close' }, relations: ['payingUser'] });

    const pixPaying = await pixRepository
      .find({ where: { payingUser: user.id, status: 'close' }, relations: ['requestingUser'] })

    const received = pixReceived
      .map(transaction => ({
        value: transaction.value,
        user: {
          firstName: transaction.payingUser.firstName,
          lastName: transaction.payingUser.lastName
        },
        updated_at: transaction.updated_at,
        type: 'received'
      }))

    const paying = pixPaying
      .map(transaction => ({
        value: transaction.value,
        user: {
          firstName: transaction.requestingUser.firstName,
          lastName: transaction.requestingUser.lastName
        },
        updated_at: transaction.updated_at,
        type: 'paid'
      }));

    const allTransactions = received.concat(paying);

    allTransactions.sort((a, b) => {
      const dateA = new Date(a.updated_at).getTime();
      const dateB = new Date(b.updated_at).getTime();
      return dateA < dateB ? 1 : -1
    });

    return allTransactions;
  }
}