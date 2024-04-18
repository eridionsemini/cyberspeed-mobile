import React, {ReactElement} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';

import {TabBar} from 'components/';

import {BottomTabNaviParams, headerOptions} from '../types';
import FavouritesNavi from './favourites';
import MoviesNavi from './movies';

const Tab = createBottomTabNavigator<BottomTabNaviParams>();

const BottomTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const BottomNavi: React.FC = (): ReactElement => (
  <Tab.Navigator initialRouteName="movies" tabBar={BottomTabBar}>
    <Tab.Screen name="movies" component={MoviesNavi} options={headerOptions} />
    <Tab.Screen name="favourites" component={FavouritesNavi} options={headerOptions} />
  </Tab.Navigator>
);

export default BottomNavi;
