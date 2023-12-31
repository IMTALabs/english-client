
import {lazy} from 'react';

const Welcome = lazy(()=> import('src/pages/protected/welcome'))

const Page404 = lazy(()=> import('src/pages/protected/404'))

const ProfileSetting = lazy(()=> import('src/pages/protected/profile-setting'))



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
];

export default routes;