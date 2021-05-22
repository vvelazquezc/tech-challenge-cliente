import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const api = axios.create({
  baseURL,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});
