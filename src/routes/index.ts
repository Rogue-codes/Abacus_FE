import {lazy} from 'react';
import { paths } from './paths';

const routes = [
  {
    path: paths.DASHBOARD,
    component: lazy(() => import('../views/home/Home')),
    exact: true
  },
  {
    path: paths.INVOICE,
    component: lazy(() => import('../views/invoice/Invoice')),
    exact: true
  },
  {
    path: paths.INVENTORY,
    component: lazy(() => import('../views/inventory/Inventory')),
    exact: true
  },
  {
    path: paths.CUSTOMERS,
    component: lazy(() => import('../views/customers/Customers')),
    exact: true
  },
  {
    path: paths.REPORTING,
    component: lazy(() => import('../views/reporting/Reporting')),
    exact: true
  },
  {
    path: paths.WALLET,
    component: lazy(() => import('../views/wallet/Wallet')),
    exact: true
  },
  {
    path: paths.PROFILE,
    component: lazy(() => import('../views/profile/Profile')),
    exact: true
  },
  {
    path: paths.SETTINGS,
    component: lazy(() => import('../views/settings/Settings')),
    exact: true
  },
  ]

  export default routes;