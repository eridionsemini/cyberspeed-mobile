import React, {FC, ReactElement, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {MoviesList} from 'lists';
import {useAppDispatch, useAppSelector} from '../hooks';

import {NavigationBar} from 'components/';

import commonStyles from 'assets/styles/common';
import {
  moviesSelector,
  getMoviesList,
  refreshMoviesList,
  incrementMoviesListPage,
  loadMoreMovies,
  resetMoviesListPage,
} from 'store/movies';

export const Movies: FC = (): ReactElement => {
  const {
    data,
    loading,
    refreshing,
    hasMore,
    page,
    filter: {s},
  } = useAppSelector(moviesSelector);
  const dispatch = useAppDispatch();

  const onRefresh = () => {
    dispatch(refreshMoviesList({page: 1, s}));
    dispatch(resetMoviesListPage());
  };

  const onEndReached = () => {
    if (hasMore) {
      dispatch(loadMoreMovies({page: page + 1, s}));
      dispatch(incrementMoviesListPage());
    }
  };

  useEffect(() => {
    if (!loading && data.length === 0) {
      dispatch(getMoviesList({s: 'movie', page: 1}));
    }
  }, [data.length, dispatch, loading, page]);

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar title="Movies" />
      <MoviesList
        data={data}
        onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};
