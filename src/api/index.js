import {requests} from "../utils/requests";

export const getTrendingMovies = () => requests.get("/trending/all/day");

export const getTopRatedMovies = () => requests.get("/movie/top_rated");

export const getUpcomingMovies = () => requests.get("/movie/upcoming");

export const getMovieDetails = id => requests.get(`/movie/${id}`);

export const getMovieCredits = id => requests.get(`/movie/${id}/credits`);

export const getSimilarMovies = id => requests.get(`/movie/${id}/similar`);
