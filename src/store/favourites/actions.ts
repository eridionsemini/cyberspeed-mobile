import {createAction} from '@reduxjs/toolkit';

import {Movie} from 'general-types';

export const addMovieToFavourites = createAction<Movie>('addMovieToFavourites');
export const removeMovieFromFavourites = createAction<Movie>('removeMovieFromFavourites');
