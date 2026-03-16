export const NAV_ROUTES = {
  OVERVIEW: '/overview',
  TRANSACTIONS: '/transactions',
} as const;

export const ROUTES = {
  ...NAV_ROUTES,

  LOGIN: '/login',
} as const;

export type RoutesType = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTES_NAMES: Record<RoutesType, string> = {
  [ROUTES.OVERVIEW]: 'Overview',
  [ROUTES.TRANSACTIONS]: 'Transactions',
  [ROUTES.LOGIN]: 'Login',
};
