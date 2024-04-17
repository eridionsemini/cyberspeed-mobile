import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../helpers';
import {FavouritesSliceReducer} from './types';

const initialState: FavouritesSliceReducer = {
  list: [],
};

const favouriteMoviesSlice = createSlice({
  name: 'favouriteMoviesSlice',
  initialState,
  reducers: {},
});

export const usersSelector = (state: RootState): FavouritesSliceReducer => state.favourites;

export const {reducer: favouriteMoviesReducer} = favouriteMoviesSlice;
