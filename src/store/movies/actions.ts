import {createAction} from '@reduxjs/toolkit';
import api from 'api';

import {createAppAsyncThunk, ThunkConfig} from '../helpers';
import {MoviesSearchResponse, MoviesSearchQueryParams, ThunkName, RequestConfig} from './types';

const moviesAsyncThunk = (thunkName: ThunkName, requestConfig: RequestConfig) => {
  return createAppAsyncThunk<MoviesSearchResponse, MoviesSearchQueryParams, ThunkConfig>(
    thunkName,
    async ({s, page}, thunkAPI) => {
      const req = requestConfig(s, page);
      try {
        return await api.get<MoviesSearchQueryParams, MoviesSearchResponse>(req);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    },
  );
};

const movieRequestConfig: RequestConfig = (s, page) => `&page=${page}&s=${s}`;

export const getMoviesList = moviesAsyncThunk('getMoviesList', movieRequestConfig);

export const loadMoreMovies = moviesAsyncThunk('loadMoreMovies', movieRequestConfig);

export const refreshMoviesList = moviesAsyncThunk('refreshMoviesList', movieRequestConfig);

export const resetMoviesListPage = createAction<void>('resetMoviesListPage');
export const incrementMoviesListPage = createAction<void>('incrementMoviesListPage');
