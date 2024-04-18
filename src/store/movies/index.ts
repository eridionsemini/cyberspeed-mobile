import {apiSlice} from '../api';
import {MoviesSearchQueryParams, MoviesSearchResponse} from './types';

export const moviesSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getMovies: build.query<MoviesSearchResponse, MoviesSearchQueryParams>({
      query: s => ({url: `s=${s}`}),
    }),
  }),
});

export const {useGetMoviesQuery} = moviesSlice;
