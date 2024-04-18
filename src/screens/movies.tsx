import React, {FC, ReactElement, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {MoviesList} from 'lists';

import {NavigationBar} from 'components/';

import commonStyles from 'assets/styles/common';

export const Movies: FC = (): ReactElement => {
  const [page, setPage] = useState<number>(1);
  const onEndReached = () => {
    console.log('on end reached');
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar title="Movies" />
      <MoviesList data={[]} onEndReached={onEndReached} />
    </SafeAreaView>
  );
};
