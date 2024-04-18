import {createAction} from '@reduxjs/toolkit';
import api from 'api';

import {MovieDetails} from 'general-types';

import {createAppAsyncThunk, ThunkConfig} from '../helpers';
import {MovieDetailsParams, RequestConfig, ThunkName} from './types';

const movieAsyncThunk = (thunkName: ThunkName, requestConfig: RequestConfig) => {
  return createAppAsyncThunk<MovieDetails, MovieDetailsParams, ThunkConfig>(
    thunkName,
    async ({i}, thunkAPI) => {
      const req = requestConfig(i);
      try {
        return await api.get<MovieDetailsParams, MovieDetails>(req);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    },
  );
};

const movieRequestConfig: RequestConfig = i => `?apiKey=400fbde2&i=${i}`;

export const getMovieDetails = movieAsyncThunk('getMovieDetails', movieRequestConfig);

export const refreshMovieDetails = movieAsyncThunk('refreshMovieDetails', movieRequestConfig);

export const clearMovieDetails = createAction<void>('clearMovieDetails');
