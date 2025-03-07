import {lazy} from 'react';
import { paths } from './paths';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../views/home/Home')),
    exact: true
  },
  {
    path: paths.LOGIN,
    component: lazy(() => import('../views/auth/Login')),
    exact: true
  },
  {
    path: paths.REGISTER,
    component: lazy(() => import('../views/auth/Register')),
    exact: true
  },
  {
    path: `${paths.REGISTER}?verify=true`,
    component: lazy(() => import('../views/auth/Register')),
    exact: true
  },
  ]

  export default routes;