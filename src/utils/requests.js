import {axiosOptions} from '../libraries/axios';

export const requests = {
  get: (url, params = {}) =>
    axiosOptions
      .get(url, params)
      .then(res => res.data)
      .catch(err => console.log(err)),
};
