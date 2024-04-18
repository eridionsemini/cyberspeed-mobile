export interface MoviesSearchQueryParams {
  s: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
