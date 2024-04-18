import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Movie} from 'general-types';

import {RootState} from '../helpers';
import {addMovieToFavourites, removeMovieFromFavourites} from './actions';
import {FavouritesSliceReducer} from './types';

const initialState: FavouritesSliceReducer = {
  data: [],
};

const favouriteMoviesSlice = createSlice({
  name: 'favouriteMoviesSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addMovieToFavourites.type, (state, action: PayloadAction<Movie>) => {
        state.data = state.data.concat(action.payload);
      })
      .addCase(removeMovieFromFavourites.type, (state, action: PayloadAction<Movie>) => {
        state.data = state.data.filter(d => d.imdbID !== action.payload.imdbID);
      });
  },
});

export {addMovieToFavourites, removeMovieFromFavourites};

export const favouritesSelector = (state: RootState): FavouritesSliceReducer => state.favourites;

export const {reducer: favouriteMoviesReducer} = favouriteMoviesSlice;
