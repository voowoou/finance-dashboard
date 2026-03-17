import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { TransactionType } from '../../model/types/transaction';
import { transactionButtonContent } from '../../model/consts/transactionButtonContent';
import s from './TransactionButtons.module.css';

interface TransactionButtonProps {
  transactionType: TransactionType;
}

const TransactionButton = (props: TransactionButtonProps) => {
  const { transactionType } = props;

  const content = transactionButtonContent[transactionType];

  return (
    <Button className={s.button}>
      <div className={clsx(s.iconContainer, s[transactionType])}>
        {content.icon}
      </div>
      <div className={s.textContainer}>
        <span className={s.title}>{content.title}</span>
        <span>{content.descr}</span>
      </div>
    </Button>
  );
};

export const TransactionButtons = () => {
  const transactionTypes = Object.values(TransactionType);

  return (
    <div className={s.buttonsContainer}>
      {transactionTypes.map((type) => (
        <TransactionButton key={type} transactionType={type} />
      ))}
    </div>
  );
};
