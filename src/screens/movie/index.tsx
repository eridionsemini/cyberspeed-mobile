import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {CommonActions} from '@react-navigation/native';

import {NavigationBar} from 'components/';

import {MovieProps} from './types';

import commonStyles from 'assets/styles/common';

export const Movie: FC<MovieProps> = ({
  navigation,
  route: {
    params: {id},
  },
}): ReactElement => {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar handleLeftContentPress={() => navigation.dispatch(CommonActions.goBack())} />
      <Text>Movie details {id}</Text>
    </SafeAreaView>
  );
};
