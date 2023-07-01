import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  signUpThunk,
  userRefreshThunk,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const isPending = action =>
  action.type.endsWith('/pending') && action.type.includes('auth');
const isRejected = action =>
  action.type.endsWith('/rejected') && action.type.includes('auth');

const handlePending = state => {
  state.error = null;
  state.isRefreshing = true;
};

const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const handleRejected = state => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleRegisterFulfilled)
      .addCase(logInThunk.fulfilled, handleLogInFulfilled)
      .addCase(userRefreshThunk.fulfilled, handleRefreshFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled)
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
