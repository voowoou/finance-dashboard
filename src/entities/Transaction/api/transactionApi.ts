import { baseApi } from '@/shared/api';
import type { Transaction } from '../model/types/transaction';

const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTransactions: build.query<Transaction[], void>({
      query: () => '/transactions',
      providesTags: ['Transactions'],
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionApi;
