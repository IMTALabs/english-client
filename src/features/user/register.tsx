import { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from './landing-intro';
import InputText from 'src/components/input/input-text';
import ErrorText from 'src/components/typo/error';
import authenticationApi, { postLoginPayload } from '../services/authentication/authentication-api';
import { useAppDispatch } from 'src/app/store';
import { setLoginInfo, setUserInfo } from '../common/user-slice';
import { showNotification } from '../common/header-slice';

function Register() {
  const INITIAL_REGISTER_OBJ = {
    full_name: '',
    password: '',
    email: '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [registerObj, setRegisterObj] = useState<postLoginPayload>(INITIAL_REGISTER_OBJ);

  const dispatch = useAppDispatch()

  const submitForm = async (e: any) => {
    e.preventDefault();
    setErrorMessage('');

    if (registerObj.full_name?.trim() === '')
      return setErrorMessage('Name is required! (use any value)');
    if (registerObj.email?.trim() === '')
      return setErrorMessage('Email Id is required! (use any value)');
    if (registerObj.password?.trim() === '')
      return setErrorMessage('Password is required! (use any value)');
    else {
      try {
        setLoading(true);
        // Call API to check user credentials and save token in localstorage
        const response = await authenticationApi.postRegister(registerObj)
        if (response?.data?.user && response?.data?.data?.accessToken) {
          dispatch(setUserInfo(response?.data?.data?.user));
          dispatch(setLoginInfo({ isLoggedIn: true, accessToken: response.data.data.accessToken }));
        }
        dispatch(showNotification({ message: "Register success", status: 1 }))
        localStorage.setItem('token', response?.data?.data?.accessToken);
        window.location.href = '/welcome';
      } catch (error: any) {
        dispatch(showNotification({ message: error.response.data.errors.email[0], status: 0 }))
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
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl border">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
            <form onSubmit={e => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  defaultValue={registerObj.full_name}
                  updateType="full_name"
                  containerStyle="mt-4"
                  labelTitle="Name"
                  updateFormValue={updateFormValue}
                  placeholder="Student"
                />

                <InputText
                  defaultValue={registerObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Email"
                  updateFormValue={updateFormValue}
                  placeholder="student@demo.com"
                />

                <InputText
                  defaultValue={registerObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                  placeholder="********"
                />
              </div>

              <ErrorText className="mt-8 text-sm">{errorMessage}</ErrorText>
              <button type="submit" className={'btn mt-2 w-full btn-primary'} disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : null}
                Register
              </button>

              <div className="text-center mt-4">
                Already have an account?{' '}
                <Link to="/login">
                  <span className="inline-block underline hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
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

export default Register;
