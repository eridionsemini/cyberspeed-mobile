import React, {FC, ReactElement} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {NavigationBar} from 'components/';
import {useGetMoviesQuery} from 'store/movies';

import commonStyles from 'assets/styles/common';

export const Movies: FC = (): ReactElement => {
  const {data, isLoading, error, isFetching} = useGetMoviesQuery({s: 'movies'});
  console.log('data', {data, isFetching, isLoading, error});
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar title="Movies" />
      <Text>Movies</Text>
    </SafeAreaView>
  );
};
