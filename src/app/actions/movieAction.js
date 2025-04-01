import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  getActorDetails,
  getActorMovieCredits,
  getMovieCredits,
  getMovieDetails,
  getSimilarMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../../api";
import {
  setActorDetails,
  setActorMovieCredits,
  setMovieCredits,
  setMovieDetails,
  setSimilarMovies,
  setTopRatedMovies,
  setTrendingMovies,
  setUpcomingMovies,
} from "../slices/movieSlice";

export const getTrendingMoviesAction = createAsyncThunk(
  "movie/getTrendingMovies",
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();
    dispatch(setTrendingMovies(response.results));
  },
);

export const getTopRatedMoviesAction = createAsyncThunk(
  "movie/getTopRatedMovies",
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();
    dispatch(setTopRatedMovies(response.results));
  },
);

export const getUpcomingMoviesAction = createAsyncThunk(
  "movie/getUpcomingMovies",
  async (_, {dispatch}) => {
    const response = await getUpcomingMovies();
    dispatch(setUpcomingMovies(response.results));
  },
);

export const getMovieDetailsAction = createAsyncThunk(
  "movie/getMovieDetails",
  async (id, {dispatch}) => {
    const response = await getMovieDetails(id);
    dispatch(setMovieDetails(response));
  },
);

export const getMovieCreditsAction = createAsyncThunk(
  "movie/getMovieCredits",
  async (id, {dispatch}) => {
    const response = await getMovieCredits(id);
    dispatch(setMovieCredits(response.cast));
  },
);

export const getSimilarMoviesAction = createAsyncThunk(
  "movie/getSimilarMovies",
  async (id, {dispatch}) => {
    const response = await getSimilarMovies(id);
    dispatch(setSimilarMovies(response.results));
  },
);

export const getActorDetailsAction = createAsyncThunk(
  "movie/getActorDetails",
  async (id, {dispatch}) => {
    const response = await getActorDetails(id);
    dispatch(setActorDetails(response));
  },
);

export const getActorMovieCreditsAction = createAsyncThunk(
  "movie/getActorMovieCredits",
  async (id, {dispatch}) => {
    const response = await getActorMovieCredits(id);
    dispatch(setActorMovieCredits(response.cast));
  },
);
