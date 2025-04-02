import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  favouriteMovies: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(
        movie => movie.id !== action.payload.id,
      );
    },
  },
});

export const {addFavourite, removeFavourite} = favouriteSlice.actions;

export default favouriteSlice.reducer;
