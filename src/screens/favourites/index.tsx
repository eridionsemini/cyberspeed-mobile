import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {getMargins} from '__root/src/utils';

import {useAppDispatch, useAppSelector} from 'hooks';
import {MoviesList} from 'lists';
import {favouritesSelector, removeMovieFromFavourites} from 'store/favourites';

import {Movie} from 'general-types';

import styles from './styles';

import commonStyles from 'assets/styles/common';
export const Favourites: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {data: fav} = useAppSelector(favouritesSelector);

  const handleHeartPress = (movie: Movie) => dispatch(removeMovieFromFavourites(movie));

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <Text style={[styles.title, getMargins({top: 'sm', bottom: 'sm'})]}>Favourites movies</Text>
      <MoviesList data={fav} fav={fav} handleHeartPress={handleHeartPress} />
    </SafeAreaView>
  );
};
