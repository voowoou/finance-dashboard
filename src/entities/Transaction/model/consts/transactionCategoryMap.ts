import { Category } from '../types/transaction';

export const categoryMap: Record<Category, string> = {
  [Category.CARD]: 'Credit card',
  [Category.ENTERTAINMENT]: 'Entertainment',
  [Category.GROCERIES]: 'Groceries',
  [Category.HOUSE]: 'House',
  [Category.RESTAURANTS]: 'Restaurants',
  [Category.SHOPPING]: 'Shopping',
  [Category.TRANSPORTATION]: 'Transportation',
};
