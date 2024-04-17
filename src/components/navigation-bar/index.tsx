import React, {FC, ReactElement} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {mediumHitSlop} from 'cons/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {NavigationBarProps} from './types';

import BackArrow from 'assets/svg/back.svg';

export const Header: FC<NavigationBarProps> = ({
  composedTitleContent = null,
  title,
  leftContent = <BackArrow />,
  rightContent = null,
  handleLeftContentPress,
  bottomDivider = false,
}): ReactElement => {
  const headerText: StyleProp<TextStyle> = {
    fontSize: 16,
    color: 'black',
    letterSpacing: -0.3,
    lineHeight: 20,
    marginLeft: leftContent ? 24 : 0,
  };

  const navigationBar: StyleProp<ViewStyle> = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    backgroundColor: 'white',
    position: 'relative',
  };

  return (
    <View style={navigationBar}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={handleLeftContentPress} hitSlop={mediumHitSlop}>
          {leftContent}
        </TouchableOpacity>
        {composedTitleContent ? composedTitleContent : <Text style={headerText}>{title}</Text>}
      </View>
      <View>{rightContent}</View>
      {bottomDivider ? <View style={styles.bottomDivider} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomDivider: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: wp('100%') + 16,
    position: 'absolute',
    bottom: 0,
    marginLeft: -16,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
