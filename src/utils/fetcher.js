import axios from 'axios';
import { camelizeKeys, decamelizeKeys, decamelize } from 'humps';

import { BASE_URL } from '../config';

const responseInterceptor = response => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
};

const requestInterceptor = config => {
  const newConfig = { ...config };
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
    const oldFormData = config.data;
    const newFormData = new FormData();

    for (let field of oldFormData.entries()) {
      const [key, value] = field;
      newFormData.append(decamelize(key), value);
    }
    newConfig.data = newFormData;
    return newConfig;
  }

  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
};

const fetcher = () => {
  const inst = axios.create({
    baseURL: BASE_URL
  });

  inst.interceptors.response.use(responseInterceptor);
  inst.interceptors.request.use(requestInterceptor);

  return inst;
};

export default fetcher();
