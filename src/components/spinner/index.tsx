import React, {FC, ReactElement} from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';

import {colors} from 'cons/';

import {getMargins} from 'utils';

import {SpinnerProps} from './types';

export const Spinner: FC<SpinnerProps> = ({
  absCenter = false,
  size = 'small',
  color = colors.PURPLE_500,
}): ReactElement => {
  const centered: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <ActivityIndicator
      size={size}
      color={color}
      style={[absCenter && centered, getMargins({top: 'md', bottom: 'md'})]}
    />
  );
};
