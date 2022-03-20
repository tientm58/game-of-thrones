import axios from 'axios';
import queryString from 'query-string';
import { SESSION_STORAGE_KEY } from '../constants/user.constants';
import { ENDPOINTS } from '../constants/endpoints.contants';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request config` for the full list of configs
const axiosClient = axios.create({
  baseURL: ENDPOINTS.ICE_AND_FIRE_BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem(
      SESSION_STORAGE_KEY.PERSONA_TOKEN,
    )}`,
    'Auth-Persona':
      sessionStorage.getItem(SESSION_STORAGE_KEY.PERSONA_TOKEN) || '',
  },
  paramsSerializer: params => queryString.stringify(params),
});

export const axiosClientFormData = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'multipart/form-data',
    Authorization: `Bearer ${sessionStorage.getItem(
      SESSION_STORAGE_KEY.PERSONA_TOKEN,
    )}`,
    'Auth-Persona': `${sessionStorage.getItem(
      SESSION_STORAGE_KEY.PERSONA_TOKEN,
    )}`,
  },
  paramsSerializer: params => queryString.stringify(params),
});

// axiosClient.interceptors.request.use(
//   async config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// axiosClient.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     throw error;
//   },
// );

export default axiosClient;
