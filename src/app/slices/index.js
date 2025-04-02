import {combineReducers} from "@reduxjs/toolkit";
import MovieReducer from "./movieSlice";
import FavouriteReducer from "./favouriteSlice";

export const rootReducer = combineReducers({
  movie: MovieReducer,
  favourite: FavouriteReducer,
});
