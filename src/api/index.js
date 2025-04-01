import {requests} from "../utils/requests";

export const getTrendingMovies = () => requests.get("/trending/movie/day");

export const getTopRatedMovies = () => requests.get("/movie/top_rated");

export const getUpcomingMovies = () => requests.get("/movie/upcoming");

export const getMovieDetails = id => requests.get(`/movie/${id}`);

export const getMovieCredits = id => requests.get(`/movie/${id}/credits`);

export const getSimilarMovies = id => requests.get(`/movie/${id}/similar`);

export const getActorDetails = id => requests.get(`/person/${id}`);

export const getActorMovieCredits = id =>
  requests.get(`/person/${id}/movie_credits`);

export const getSearchedMovies = query =>
  requests.get(`/search/movie?query=${query}`);
