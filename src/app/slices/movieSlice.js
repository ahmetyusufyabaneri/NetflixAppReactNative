import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  isLoading: false,
  isError: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const {setTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;
