import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Favourites, Movie} from 'screens/';

import {FavouriteMoviesStackParamsList, headerOptions} from '../types';

const Stack = createStackNavigator<FavouriteMoviesStackParamsList>();

export default () => (
  <Stack.Navigator initialRouteName="favouriteMovies">
    <Stack.Screen name="favouriteMovies" component={Favourites} options={headerOptions} />
    <Stack.Screen
      name="movieDetails"
      component={Movie}
      initialParams={{id: ''}}
      options={headerOptions}
    />
  </Stack.Navigator>
);
