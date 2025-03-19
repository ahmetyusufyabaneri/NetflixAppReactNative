import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  isLoading: false,
  isError: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
