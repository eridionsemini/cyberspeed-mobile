import {apiSlice} from '../api';
import {MoviesSearchQueryParams, MoviesSearchResponse} from './types';

export const moviesSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getMovies: build.query<MoviesSearchResponse, MoviesSearchQueryParams>({
      query: ({s, page}) => ({url: `?apikey=400fbde2&s=${s}&page=${page}`}),
      serializeQueryArgs: ({endpointName, queryArgs}) => {
        return {
          endpointName,
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.Search) {
          currentCache.Search.push(...newItems.Search);
        }
        return newItems;
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {useGetMoviesQuery} = moviesSlice;
