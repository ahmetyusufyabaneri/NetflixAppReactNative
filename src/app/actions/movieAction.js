import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTopRatedMovies} from "../../api";
import {setTopRatedMovies} from "../slices/movieSlice";

export const getTopRatedMoviesAction = createAsyncThunk(
  "movie/getTopRatedMovies",
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();
    dispatch(setTopRatedMovies(response.results));
  },
);
