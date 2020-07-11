import axios from '../plugin/axios';

export const login = () => {
  return axios.post('/login?ismock=1');
};

export const getUsers = () => {
  return axios.get('/users?ismock=1');
};
