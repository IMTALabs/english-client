import {  createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  user: User;
  accessToken: string;
}

export interface User {
  id?: number;
  username?: string;
  email?: string;
  avatar?: string;
  phoneNumber?: string;
  about?: string | any;
  language?: string;
  timezone?: string;
  accounting_charge?: number;
  created_at?: string;
  deleted_at?: string | any;
  updated_at?: string | any;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {},
  accessToken: '',
};




const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.user = action.payload;
    },
    setLoginInfo(state, action) {
      localStorage.setItem('token', action.payload.accessToken);
      state.isLoggedIn = action.payload.isLoggedIn;
      state.accessToken = action.payload.accessToken;
    },
    logout() {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const { setUserInfo, logout, setLoginInfo } = userSlice.actions;

export default userSlice.reducer;
