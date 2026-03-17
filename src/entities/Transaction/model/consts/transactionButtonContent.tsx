import {
  ArrowLeftRightIcon,
  DashCircleIcon,
  PlusCircleIcon,
} from '@/shared/assets';
import { TransactionType } from '../types/transaction';

interface ButtonContent {
  title: string;
  descr: string;
  icon: React.ReactNode;
}

export const transactionButtonContent: Record<TransactionType, ButtonContent> =
  {
    [TransactionType.INCOME]: {
      title: 'Add income',
      descr: 'Create an income manually',
      icon: <PlusCircleIcon />,
    },
    [TransactionType.EXPENSE]: {
      title: 'Add expense',
      descr: 'Create an expense manually',
      icon: <DashCircleIcon />,
    },
    [TransactionType.TRANSFER]: {
      title: 'Transfer money',
      descr: 'Select the amount and make a transfer',
      icon: <ArrowLeftRightIcon />,
    },
  };
