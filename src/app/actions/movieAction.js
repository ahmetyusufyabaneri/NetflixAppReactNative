import {createAsyncThunk} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../../api';
import {setTopRatedState} from '../slices/movieSlice';

export const getTopRatedMoviesAction = createAsyncThunk(
  'movie/getTopRatedMovies',
  async dispatch => {
    const response = await getTopRatedMovies();
    dispatch(setTopRatedState(response.results));
  },
);
