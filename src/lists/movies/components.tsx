import React, {FC, memo, ReactElement} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import FastImage from 'react-native-fast-image';

import styles from './styles';
import {MovieItemProps} from './types';
import {getMargins} from 'utils';

export const Movie: FC<MovieItemProps> = memo(({handleItemPress, movie}): ReactElement => {
  return (
    <TouchableOpacity
      onPress={() => handleItemPress && handleItemPress(movie.Title)}
      style={[styles.movieCard, getMargins({top: 'sm', bottom: 'sm'})]}>
      <FastImage
        style={styles.image}
        source={{
          uri: movie.Poster,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={[styles.infoCard, getMargins({left: 'md'})]}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {movie.Title}
        </Text>
        <Text style={[styles.movieType, getMargins({top: 'sm'})]}>Type : {movie.Type}</Text>
        <Text style={[styles.movieYear, getMargins({top: 'sm'})]}>Year {movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
});
