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
