import React, {FC, ReactElement} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import {mediumHitSlop, spacing} from 'cons/';

import {HeartProps} from './types';

import HeartRed from 'assets/svg/heart-red.svg';
import HeartWhite from 'assets/svg/heart-white.svg';

export const Heart: FC<HeartProps> = ({
  onPress,
  isFavourite,
  top = spacing.md,
  right = spacing.md,
}): ReactElement => {
  const style: StyleProp<ViewStyle> = {
    top,
    right,
    position: 'absolute',
    zIndex: 20,
  };

  return (
    <TouchableOpacity onPress={onPress} hitSlop={mediumHitSlop} style={style}>
      {isFavourite ? <HeartRed /> : <HeartWhite />}
    </TouchableOpacity>
  );
};
