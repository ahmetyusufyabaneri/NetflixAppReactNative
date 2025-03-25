import {requests} from "../utils/requests";

export const getTrendingMovies = () => requests.get("/trending/all/day");

export const getTopRatedMovies = () => requests.get("/movie/top_rated");
