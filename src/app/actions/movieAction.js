import {createAsyncThunk} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../../api';

export const getTopRatedMoviesAction = createAsyncThunk(
  'movie/getTopRatedMovies',
  async () => {
    const response = await getTopRatedMovies();
    console.log(response);
  },
);
