import axios from '../plugin/axios';

export const getUsers = () => {
  return axios.get('/users?ismock=1');
};
