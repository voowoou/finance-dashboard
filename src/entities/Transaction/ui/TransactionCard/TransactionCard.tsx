import { memo } from 'react';
import { formatDate } from '@/shared/lib';
import { categoryMap } from '../../model/consts/transactionCategoryMap';
import type { Transaction } from '../../model/types/transaction';
import s from './TranactionCard.module.css';

interface TransactionCardProps {
  transaction: Transaction;
  cardFormat?: 'full' | 'mini';
}

const TransactionCard = memo(function TransactionCard(
  props: TransactionCardProps
) {
  const {
    transaction,
    // cardFormat = 'full',
  } = props;

  const amountSign = transaction.type === 'income' ? '+' : '-';

  return (
    <div className={s.card}>
      <span className={s.description}>{transaction.description}</span>
      <span className={s.category}>{categoryMap[transaction.category]}</span>
      <span className={s.date}>{formatDate(transaction.date, 'short')}</span>
      <span className={s.amount}>{`${amountSign}$${transaction.amount}`}</span>
    </div>
  );
});

export { TransactionCard };
