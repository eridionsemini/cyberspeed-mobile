import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {NavigationBar} from 'components/';

import commonStyles from 'assets/styles/common';

export const Movies: FC = (): ReactElement => {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar title="Movies" />
      <Text>Movies</Text>
    </SafeAreaView>
  );
};
