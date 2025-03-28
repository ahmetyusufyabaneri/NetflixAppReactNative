import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../../api";
import {
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
