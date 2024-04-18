import {MovieDetails} from 'general-types';

export interface MovieReducer {
  details: MovieDetails | null;
  loading: boolean;
  refreshing: boolean;
}
export type ThunkName = 'getMovieDetails' | 'refreshMovieDetails';

export type RequestConfig = (i: string) => string;

export interface MovieDetailsParams {
  i: string;
}
