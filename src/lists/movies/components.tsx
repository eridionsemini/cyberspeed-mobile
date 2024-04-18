import React, {FC, memo, ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FastImage from 'react-native-fast-image';

import {getMargins} from 'utils';

import {Heart} from 'components/';

import styles from './styles';
import {MovieItemProps} from './types';

export const Movie: FC<MovieItemProps> = memo(
  ({handleItemPress, handleHeartPress, movie, isFavourite}): ReactElement => {
    return (
      <TouchableOpacity
        onPress={() => handleItemPress && handleItemPress(movie.imdbID)}
        style={[styles.movieCard, getMargins({top: 'sm', bottom: 'sm'})]}>
        <FastImage
          style={styles.image}
          source={{
            uri: movie.Poster,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {movie.Title}
          </Text>
        </View>
        <View style={styles.yearWrapper}>
          <Text style={[styles.movieYear]}>{movie.Year}</Text>
        </View>
        <Heart isFavourite={isFavourite} onPress={() => handleHeartPress(movie)} />
      </TouchableOpacity>
    );
  },
);
