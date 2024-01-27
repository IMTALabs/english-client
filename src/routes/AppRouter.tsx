import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { lazy, useLayoutEffect } from 'react';
import checkAuth from 'src/app/auth';

const Layout = lazy(() => import('src/containers/layout'));
const Login = lazy(() => import('src/pages/public/login'));
const ForgotPassword = lazy(() => import('src/pages/public/forgot-password'));
const Register = lazy(() => import('src/pages/public/register'));

import { useAppDispatch, useAppSelector } from 'src/app/store';
import { setUserInfo } from 'src/features/common/user-slice';
import userApi from 'src/features/services/user/user-api';
import historyApi from 'src/features/services/history/history-api';
import { setHistory, setRecommended } from 'src/features/common/history-slice';
import { showNotification } from 'src/features/common/header-slice';
import listeningApi from 'src/features/services/listening/listening-api';

const AppRouter = () => {
  const token = checkAuth();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(x => x.user);

  const getUser = async () => {
    try {
      const response = await userApi.getInfoUser();
      dispatch(setUserInfo(response.data.data));
    } catch (error) {
      dispatch(setUserInfo({}));
      dispatch(showNotification({ message: error, status: 0 }));
    }
  };

  const alreadyHaveInfo = token && Object.keys(user).length > 0;

  const getHistory = async () => {
    try {
      const response = await historyApi.getHistory(5);
      dispatch(setHistory(response.data.data));
    } catch (error) {
      dispatch(showNotification({ message: error, status: 0 }));
    }
  };

  const getYoutubeRecommenedVideo = async () => {
    try {
      const response = await listeningApi.getRandomVideoListening(
        'listening',
        10,
      );
      dispatch(setRecommended(response.data));
    } catch (error) {
      dispatch(showNotification({ message: error, status: 0 }));
    }
  };

  useLayoutEffect(() => {
    if (token) {
      getUser();
      getHistory();
      getYoutubeRecommenedVideo();
    }
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />
          <Route
            path="*"
            element={
              <Navigate
                to={alreadyHaveInfo ? '/app/welcome' : '/login'}
                replace
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
