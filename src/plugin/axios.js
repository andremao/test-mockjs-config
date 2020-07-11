import axios from 'axios';

const request = axios.create({
  baseURL: 'http://api.itcast.cn/',
});

request.interceptors.request.use(cfg => {
  if (cfg.url.includes('ismock=1')) {
    cfg.baseURL = 'http://localhost:8080/';
  }
  return cfg;
});

export default request;
