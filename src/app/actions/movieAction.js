import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTopRatedMovies, getTrendingMovies} from "../../api";
import {setTopRatedMovies, setTrendingMovies} from "../slices/movieSlice";

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
