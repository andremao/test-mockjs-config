import axios from '../plugin/axios';

export const login = data => {
  return axios.post('/login?ismock=1', data);
};

export const getUsers = () => {
  return axios.get('/users?ismock=1');
};
