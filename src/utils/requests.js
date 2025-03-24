import {axiosOptions} from "../libraries/axios";

const responseBody = res => res.data;

const error = err => console.log(err);

export const requests = {
  get: (url, params = {}) =>
    axiosOptions.get(url, params).then(responseBody).catch(error),
};
