import React, {FC, ReactElement, useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {SDKContext} from '__root/src/context';
import {useAppDispatch, useAppSelector} from 'hooks';
import {MoviesList} from 'lists';
import {getMargins} from 'utils';

import {FavouriteMoviesListEmptyComponent} from 'components/';

import {Movie} from 'general-types';

import styles from './styles';
import {FavouritesProps} from './types';

import commonStyles from 'assets/styles/common';

export const Favourites: FC<FavouritesProps> = ({navigation}): ReactElement => {
  const {getActions, getSelectors} = useContext(SDKContext);
  const {favouritesSelector} = getSelectors();
  const {removeMovieFromFavourites, getMovieDetails} = getActions();
  const dispatch = useAppDispatch();
  const {data: fav} = useAppSelector(favouritesSelector);

  const handleHeartPress = (movie: Movie) => dispatch(removeMovieFromFavourites(movie));

  const handleItemPress = (v: string) => {
    navigation.navigate('movieDetails', {id: v});
    dispatch(getMovieDetails({i: v}));
  };

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <Text style={[styles.title, getMargins({top: 'sm', bottom: 'sm'})]}>Favourites movies</Text>
      <MoviesList
        data={fav}
        fav={fav}
        handleItemPress={handleItemPress}
        handleHeartPress={handleHeartPress}
        ListEmptyComponent={FavouriteMoviesListEmptyComponent}
      />
    </SafeAreaView>
  );
};
