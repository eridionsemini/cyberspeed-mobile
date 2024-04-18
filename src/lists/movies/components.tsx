import React, {FC, memo, ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';

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
    </TouchableOpacity>
  );
});
