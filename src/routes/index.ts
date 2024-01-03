
import { lazy } from 'react';

const Welcome = lazy(() => import('src/pages/protected/welcome'))

const Page404 = lazy(() => import('src/pages/protected/404'))

const ProfileSetting = lazy(() => import('src/pages/protected/profile-setting'))

const Listening = lazy(() => import('src/pages/protected/listening'))

const routes = [
  {
    path: "/welcome",
    component: Welcome,
    exact: true,
  },
  {
    path: "/profile-setting",
    component: ProfileSetting,
    exact: true,
  },
  {
    path: "/404",
    component: Page404,
    exact: true,
  },
  {
    path: "/listening",
    component: Listening,
    exact: true,
  },
  {
    path: "/reading",
    component: Page404,
    exact: true,
  },
  {
    path: "/writing",
    component: Page404,
    exact: true,
  },
  {
    path: "/speaking",
    component: Page404,
    exact: true,
  },
];

export default routes;