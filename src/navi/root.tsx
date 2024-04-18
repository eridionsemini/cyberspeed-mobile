import React, {FC} from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavi from './bottom';
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
      <Stack.Screen name="bottomNavi" options={headerOptions} component={BottomNavi} />
    </Stack.Navigator>
  );
};

const RootNavi: FC = () => (
  <NavigationContainer theme={theme} ref={navigationRef}>
    <RootStackNavi />
  </NavigationContainer>
);

export default RootNavi;
