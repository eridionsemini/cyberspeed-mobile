import React, {FC, ReactElement, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {useAppDispatch, useAppSelector} from 'hooks';
import {MoviesList} from 'lists';
import {
  getMoviesList,
  incrementMoviesListPage,
  loadMoreMovies,
  moviesSelector,
  refreshMoviesList,
  resetMoviesListPage,
} from 'store/movies';

import {NavigationBar} from 'components/';

import {MoviesProps} from './types';

import commonStyles from 'assets/styles/common';

export const Movies: FC<MoviesProps> = ({navigation}): ReactElement => {
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

  const handleItemPress = (v: string) => {
    navigation.navigate('movieDetails', {id: v});
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
        handleItemPress={handleItemPress}
      />
    </SafeAreaView>
  );
};
