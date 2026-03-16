import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { OverviewPage } from '@/pages/OverviewPage';
import { MainLayout } from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.OVERVIEW} replace />,
      },
      {
        path: ROUTES.OVERVIEW,
        element: <OverviewPage />,
      },
      {
        path: ROUTES.TRANSACTIONS,
        element: <div />,
      },
    ],
  },
]);
