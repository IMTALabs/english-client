import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  user: User;
  accessToken: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  about: string | any;
  language: string;
  timezone: string;
  created_at: string;
  deleted_at: string | any;
  updated_at: string | any;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {
    id: 0,
    username: '',
    email: '',
    avatar: '',
    phoneNumber: '',
    about: '',
    language: '',
    timezone: '',
    created_at: '',
    deleted_at: '',
    updated_at: '',
  },
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
        localStorage.setItem('token', action.payload.accessToken);
        state.isLoggedIn = action.payload.isLoggedIn;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
    },
    logout() {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const {setUser, logout} = userSlice.actions;

export default userSlice.reducer;
