import { createBrowserRouter, Navigate } from 'react-router-dom';
import { OverviewPage } from '@/pages/OverviewPage';
import { MainLayout } from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview" replace />,
      },
      {
        path: '/overview',
        element: <OverviewPage />,
      },
      {
        path: '/transactions',
        element: <div />,
      },
    ],
  },
]);
