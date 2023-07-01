import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
};

export const logIn = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
};

export const refresh = async persistedToken => {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
};
