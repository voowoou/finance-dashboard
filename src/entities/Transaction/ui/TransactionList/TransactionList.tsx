import { useGetTransactionsQuery } from '../../api/transactionApi';
import { TransactionCard } from '../TransactionCard/TransactionCard';
import c from './TransactionList.module.css';

export const TransactionList = () => {
  const { data: transactions, isLoading, isError } = useGetTransactionsQuery();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при загрузке данных</div>;
  }

  return (
    <div className={c['list-container']}>
      {transactions ? (
        transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <span>Данных о транзакциях пока нет</span>
      )}
    </div>
  );
};
