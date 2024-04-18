import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    incrementMoviesListPage,
    refreshMoviesList,
    resetMoviesListPage,
    getMoviesList,
    loadMoreMovies,
} from './actions';
import { MoviesReducer, MoviesSearchResponse } from './types';
import { RootState } from '../helpers';

const initialState: MoviesReducer = {
    data: [],
    loading: false,
    refreshing: false,
    totalResults: '',
    hasMore: true,
};

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getMoviesList.pending, state => {
                state.loading = true;
            })
            .addCase(getMoviesList.rejected, state => {
                state.loading = false;
            })
            .addCase(getMoviesList.fulfilled, (state, action: PayloadAction<MoviesSearchResponse>) => {
                state.loading = false;
                state.data = action.payload.Search;
                state.hasMore = Number(action.payload.totalResults) > 10;
            })
            .addCase(refreshMoviesList.pending, state => {
                state.refreshing = true;
            })
            .addCase(refreshMoviesList.rejected, state => {
                state.refreshing = false;
            })
            .addCase(
                refreshMoviesList.fulfilled,
                (state, action: PayloadAction<MoviesSearchResponse>) => {
                    state.refreshing = false;
                    state.data = action.payload.Search;
                    state.hasMore = Number(action.payload.totalResults) > 10;
                },
            )
            .addCase(loadMoreMovies.pending, state => {
                state.loading = true;
            })
            .addCase(loadMoreMovies.rejected, state => {
                state.loading = false;
            })
            .addCase(
                loadMoreMovies.fulfilled,
                (state, action: PayloadAction<MoviesSearchResponse>) => {
                    state.refreshing = false;
                    state.data = state.data.concat(action.payload.Search);
                    state.hasMore = Number(action.payload.totalResults) > 10;
                },
            );
    },
});
export {
    getMoviesList,
    loadMoreMovies,
    refreshMoviesList,
    incrementMoviesListPage,
    resetMoviesListPage,
};

export const { reducer: moviesReducer } = moviesSlice;

export const moviesSelector = (state: RootState): MoviesReducer => state.movies;
