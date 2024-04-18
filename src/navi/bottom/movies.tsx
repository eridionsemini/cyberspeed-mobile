import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Movie, Movies} from 'screens/';

import {headerOptions, MoviesStackParamList} from '../types';

const Stack = createStackNavigator<MoviesStackParamList>();

export default () => (
  <Stack.Navigator initialRouteName="moviesList">
    <Stack.Screen name="moviesList" component={Movies} options={headerOptions} />
    <Stack.Screen
      name="movieDetails"
      component={Movie}
      initialParams={{id: ''}}
      options={headerOptions}
    />
  </Stack.Navigator>
);
