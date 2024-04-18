import {Movie} from 'general-types';

export interface MoviesSearchQueryParams {
  s: string;
  page: number;
}

export interface MoviesSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export type ThunkName = 'getMoviesList' | 'loadMoreMovies' | 'refreshMoviesList';

export type RequestConfig = (s: string, page: number) => string;

interface Filter {
  s: string;
}

export interface MoviesReducer {
  data: Movie[];
  totalResults: string;
  loading: boolean;
  refreshing: boolean;
  hasMore: boolean;
  page: number;
  filter: Filter;
}
