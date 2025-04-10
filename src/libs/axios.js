import axios from "axios";
import {apiKey, token} from "../constants";

const baseURL = "https://api.themoviedb.org/3";

export const axiosOptions = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
    language: "en-US",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});
