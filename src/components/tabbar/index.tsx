import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';

import {BottomTabNaviParams} from 'navi/types';

import styles from './styles';

export type RouteNamePropsUser = keyof BottomTabNaviParams;

const handleIconDisplay = (tab: string) => {
  switch (tab) {
    case 'movies':
      return '';
    case 'favourites':
      return '';
    default:
      return null;
  }
};

export const TabBar: React.FC<BottomTabBarProps> = ({navigation}) => {
  const state = navigation.getState();

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index: number) => {
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            style={styles.tabItem}
            key={index.toString()}
            accessibilityRole="button"
            onPress={onPress}>
            {handleIconDisplay(route.name)}
            <Text style={isFocused ? styles.tabItemTextFocused : styles.tabItemText}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
