import React, {FC, ReactElement, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import {useAppDispatch, useAppSelector} from 'hooks';
import {MoviesList} from 'lists';
import {
  addMovieToFavourites,
  favouritesSelector,
  removeMovieFromFavourites,
} from 'store/favourites';
import {getMovieDetails} from 'store/movie';
import {
  getMoviesList,
  incrementMoviesListPage,
  loadMoreMovies,
  moviesSelector,
  refreshMoviesList,
  resetMoviesListPage,
  setFilterValue,
} from 'store/movies';
import {debounce, isFavourite} from 'utils';

import {InputText} from 'components/';

import {Movie} from 'general-types';

import {MoviesProps} from './types';

import commonStyles from 'assets/styles/common';

export const Movies: FC<MoviesProps> = ({navigation}): ReactElement => {
  const [fetched, setFetched] = useState<boolean>(false);
  const {
    data,
    loading,
    refreshing,
    hasMore,
    page,
    filter: {s},
  } = useAppSelector(moviesSelector);

  const {data: fav} = useAppSelector(favouritesSelector);

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
    dispatch(getMovieDetails({i: v}));
  };

  const handleHeartPress = (movie: Movie) => {
    const isFav = isFavourite(fav, movie.imdbID);
    if (isFav) {
      dispatch(removeMovieFromFavourites(movie));
      return;
    }
    dispatch(addMovieToFavourites(movie));
  };
  const handleDebouncedInputChange = debounce((value: string) => {
    dispatch(getMoviesList({page, s: value}));
  }, 1000);

  const handleInputChange = (txt: string) => {
    dispatch(setFilterValue({key: 's', value: txt}));
    handleDebouncedInputChange(txt);
  };

  useEffect(() => {
    if (!loading && data && data.length === 0 && !fetched) {
      dispatch(getMoviesList({s: 'movie', page: 1}));
      setFetched(true);
    }
  }, [data, dispatch, loading, page, fetched]);

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <InputText
        value={s}
        underlineColorAndroid="transparent"
        onChangeText={handleInputChange}
        placeholder="Search"
        autoCapitalize="none"
      />
      <MoviesList
        data={data ?? []}
        fav={fav}
        onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={refreshing}
        handleItemPress={handleItemPress}
        handleHeartPress={handleHeartPress}
      />
    </SafeAreaView>
  );
};
