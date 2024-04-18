import {Movie} from 'general-types';

export const isFavourite = (favourites: Array<Movie>, id: string) =>
  favourites.some(fav => fav.imdbID === id);
