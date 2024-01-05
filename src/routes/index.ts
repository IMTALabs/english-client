
import { lazy } from 'react';
import QuizzListening from 'src/pages/protected/listening/quizz';
import ResultListening from 'src/pages/protected/listening/result';

const Welcome = lazy(() => import('src/pages/protected/welcome'))

const Page404 = lazy(() => import('src/pages/protected/404'))

const ProfileSetting = lazy(() => import('src/pages/protected/profile-setting'))

const Listening = lazy(() => import('src/pages/protected/listening'))

const Writing = lazy(() => import('src/pages/protected/writing'))

const Reading = lazy(() => import('src/pages/protected/reading'))

const routes = [
  {
    path: "/welcome",
    component: Welcome,
    exact: true,
  },
  {
    path: "/settings-profile",
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
    component: Reading,
    exact: true,
  },
  {
    path: "/writing",
    component: Writing,
    exact: true,
  },
  {
    path: "/speaking",
    component: Page404,
    exact: true,
  },
  {
    path: "/listening/quizz",
    component: QuizzListening,
    exact: true,
  },
  {
    path: "/listening/result",
    component: ResultListening,
    exact: true,
  },
];

export default routes;