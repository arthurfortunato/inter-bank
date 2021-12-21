import { ContainerStatement } from './styles';
import { StatementItem } from '../../../components/StatementItem';
import { useEffect, useState } from 'react';
import { transactions } from '../../../services/resources/pix';
interface IStatementItem {
  user: {
    firstName: string;
    lastName: string;
  },
  value: number;
  type: 'paid' | 'received';
  updated_at: Date;
}

export const Statement = () => {
  const [statements, setStatements] = useState<IStatementItem[]>([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data.transactions);
  }

  useEffect(() => {
    getAllTransactions();
  }, [])

  return (
    <ContainerStatement>
      {statements.length > 0 && statements?.map(statement => <StatementItem {...statement} />)}
    </ContainerStatement>
  )
}