import React, {FC, ReactElement, useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import {SDKContext} from '__root/src/context';
import {Movie} from 'movies-sdk';

import {useAppDispatch, useAppSelector} from 'hooks';
import {MoviesList} from 'lists';
import {debounce, isFavourite} from 'utils';

import {InputText, MoviesListEmptyComponent, Spinner} from 'components/';

import {MoviesProps} from './types';

import commonStyles from 'assets/styles/common';

export const Movies: FC<MoviesProps> = ({navigation}): ReactElement => {
  const [fetched, setFetched] = useState<boolean>(false);

  const {getActions, getSelectors, apiKey} = useContext(SDKContext);

  const {favouritesSelector, moviesSelector} = getSelectors();
  const {
    refreshMoviesList,
    resetMoviesListPage,
    getMoviesList,
    incrementMoviesListPage,
    loadMoreMovies,
    setFilterValue,
    addMovieToFavourites,
    removeMovieFromFavourites,
    getMovieDetails,
  } = getActions();

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
    dispatch(refreshMoviesList({page: 1, s, apiKey}));
    dispatch(resetMoviesListPage());
  };

  const onEndReached = () => {
    if (hasMore) {
      dispatch(loadMoreMovies({page: page + 1, s, apiKey}));
      dispatch(incrementMoviesListPage());
    }
  };

  const handleItemPress = (v: string) => {
    navigation.navigate('movieDetails', {id: v});
    dispatch(getMovieDetails({i: v, apiKey}));
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
    dispatch(getMoviesList({page, s: value, apiKey}));
  }, 1000);

  const handleInputChange = (txt: string) => {
    dispatch(setFilterValue({key: 's', value: txt}));
    handleDebouncedInputChange(txt);
  };

  useEffect(() => {
    if (!loading && data && data.length === 0 && !fetched) {
      dispatch(getMoviesList({s: 'movie', page: 1, apiKey}));
      setFetched(true);
    }
  }, [data, dispatch, loading, page, fetched, getMoviesList, apiKey]);

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
        ListEmptyComponent={MoviesListEmptyComponent}
      />
      {loading && <Spinner />}
    </SafeAreaView>
  );
};
