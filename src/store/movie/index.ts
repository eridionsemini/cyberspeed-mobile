import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MovieDetails} from 'general-types';

import {RootState} from '../helpers';
import {clearMovieDetails, getMovieDetails, refreshMovieDetails} from './actions';
import {MovieReducer} from './types';

const initialState: MovieReducer = {
  details: null,
  loading: false,
  refreshing: false,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetailsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMovieDetails.pending, state => {
        state.loading = true;
      })
      .addCase(getMovieDetails.rejected, state => {
        state.loading = false;
      })
      .addCase(getMovieDetails.fulfilled, (state, action: PayloadAction<MovieDetails>) => {
        state.details = action.payload;
        state.loading = false;
      })
      .addCase(refreshMovieDetails.pending, state => {
        state.refreshing = true;
      })
      .addCase(refreshMovieDetails.rejected, state => {
        state.refreshing = false;
      })
      .addCase(refreshMovieDetails.fulfilled, (state, action: PayloadAction<MovieDetails>) => {
        state.details = action.payload;
        state.refreshing = false;
      })
      .addCase(clearMovieDetails.type, state => {
        state.details = null;
      });
  },
});

export {getMovieDetails, refreshMovieDetails, clearMovieDetails};

export const movieDetailsSelector = (state: RootState): MovieReducer => state.movie;

export const {reducer: movieReducer} = movieDetailsSlice;
