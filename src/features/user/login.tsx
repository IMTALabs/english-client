import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingIntro from './landing-intro';
import ErrorText from 'src/components/typo/error';
import InputText from 'src/components/input/input-text';
import authenticationApi from 'src/features/services/authentication/authentication-api';
import { useAppDispatch } from 'src/app/store';
import {
  setUserInfo,
  setLoginInfo,
  UserState,
} from 'src/features/common/user-slice';
import { showNotification } from '../common/header-slice';

function Login() {
  const INITIAL_LOGIN_OBJ = {
    email: '',
    password: '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const dispatch = useAppDispatch();
  const submitForm = async (e: any) => {
    e.preventDefault();
    setErrorMessage('');

    if (loginObj.email.trim() === '')
      return setErrorMessage('Email is required! (use any value)');
    if (loginObj.password.trim() === '')
      return setErrorMessage('Password is required! (use any value)');
    else {
      setLoading(true);
      try {
        const response = await authenticationApi.postLogin(loginObj);
        if (response.data) {
          const { isLoggedIn, user, accessToken } = response.data.data as UserState;
          dispatch(setUserInfo(user));
          dispatch(setLoginInfo({ isLoggedIn, accessToken }));
          dispatch(showNotification({ message: 'Login success', status: 1 }));
          window.location.href = '/welcome';
        }
      } catch (error: any) {
        dispatch(showNotification({ message: error.response.data.message, status: 0 }));
      } finally {
        setLoading(false);
      }
    }
  };

  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: any;
  }) => {
    setErrorMessage('');
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl border">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={e => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  type="email"
                  defaultValue={loginObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Email"
                  updateFormValue={updateFormValue}
                  placeholder="student@demo.com"
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                  placeholder="********"
                />
              </div>

              <ErrorText className="mt-8 text-sm text-red-500">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={'btn mt-2 w-full btn-primary'}
                disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : null}
                Login
              </button>

              <div className="text-center mt-4">
                Don't have an account yet?{' '}
                <Link to="/register">
                  <span className="inline-block underline hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
