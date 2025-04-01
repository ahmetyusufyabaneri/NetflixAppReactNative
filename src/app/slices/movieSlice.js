import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  movieDetails: {},
  movieCredits: {},
  similarMovies: {},
  actorDetails: {},
  actorMovieCredits: {},
  searchedMovies: {},
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
    setSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    setActorDetails: (state, action) => {
      state.actorDetails = action.payload;
    },
    setActorMovieCredits: (state, action) => {
      state.actorMovieCredits = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const {
  setTrendingMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieDetails,
  setMovieCredits,
  setSimilarMovies,
  setActorDetails,
  setActorMovieCredits,
  setSearchedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
