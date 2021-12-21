import {
    Container,
    BodyContainer,
    InlineTitle,
    InlineContainer
} from './styles';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export const Dashboard = () => {

    return (
        <Container>
            <Header />
            <BodyContainer>
                <div>

                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className='wallet'>
                              R$ 666
                            </h3>
                        </InlineContainer>
                    </Card>

                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input
                                style={{ flex: 1 }}

                                placeholder='Valor'
                            />
                            <Button>Gerar Codigo</Button>
                        </InlineContainer>

                        {<>
                            <p className='primary-color'>Pix copia e cola</p>
                            <p className='primary-color'>515614564641sdfdsfdsfdsfsdf</p>
                        </>
                        }
                    </Card>

                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input
                                style={{ flex: 1 }}
                                placeholder='Insira a chave'
                            />
                            <Button>Pagar PIX</Button>
                        </InlineContainer>
                    </Card>

                </div>
                <div>
                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Extrato da Conta</h2>
                        </InlineTitle>
                    </Card>
                </div>
            </BodyContainer>
        </Container>
    );
}