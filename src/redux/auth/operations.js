const { createAsyncThunk } = require('@reduxjs/toolkit');
const { signUp, logIn, logOut, refresh } = require('api/fetchAuth');

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await signUp(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      return await logIn(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await logOut();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) return thunkAPI.rejectWithValue();

    try {
      return await refresh(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
