// Categories of expenses
export const Category = {
  HOUSE: 'house',
  CARD: 'credit_card',
  TRANSPORTATION: 'transportation',
  GROCERIES: 'groceries',
  SHOPPING: 'shopping',
  RESTAURANTS: 'restaurants',
  ENTERTAINMENT: 'entertainment',
} as const;

export type Category = (typeof Category)[keyof typeof Category];

// Type of transaction
export const TransactionType = {
  INCOME: 'income',
  EXPENSE: 'expense',
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export interface Transaction {
  id: string;
  amount: number;
  category: Category;
  type: TransactionType;
  // ISO 8601 time format
  date: string;
  description: string | null;
}
