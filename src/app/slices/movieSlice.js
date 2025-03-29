import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  movieDetails: {},
  movieCredits: {},
  movieSimilar: {},
  isLoading: false,
  isError: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrendingMovies: (state, action) => {
      state.trending = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    setMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
    setMovieSimilar: (state, action) => {
      state.movieSimilar = action.payload;
    },
  },
});

export const {
  setTrendingMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieDetails,
  setMovieCredits,
  setMovieSimilar,
} = movieSlice.actions;

export default movieSlice.reducer;
