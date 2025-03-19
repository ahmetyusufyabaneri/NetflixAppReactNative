import axios from 'axios';
import {apiKey, token} from '../constants';

export const axiosOptions = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    apiKey,
    language: 'en-US',
  },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
