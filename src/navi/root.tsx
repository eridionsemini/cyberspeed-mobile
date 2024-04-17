import React, {FC} from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Movie, Movies} from 'screens/';

import {headerOptions, navigationRef, RootStackParamList} from './types';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavi = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        gestureEnabled: true,
        animationEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="moviesList" options={headerOptions} component={Movies} />
      <Stack.Screen
        name="movieDetails"
        options={headerOptions}
        initialParams={{id: null}}
        component={Movie}
      />
    </Stack.Navigator>
  );
};

const RootNavi: FC = () => (
  <NavigationContainer theme={theme} ref={navigationRef}>
    <RootStackNavi />
  </NavigationContainer>
);

export default RootNavi;
