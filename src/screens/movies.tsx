import React, {FC, ReactElement, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {MoviesList} from 'lists';
import {useGetMoviesQuery} from 'store/movies';

import {NavigationBar} from 'components/';

import commonStyles from 'assets/styles/common';

export const Movies: FC = (): ReactElement => {
  const [page, setPage] = useState<number>(1);
  const {data, isLoading, error} = useGetMoviesQuery({s: 'movie', page});
  const onEndReached = () => {
    console.log('on end reached');
    setPage(page + 1);
  };
  if (isLoading || error) {
    return <Text>Loading</Text>;
  }
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar title="Movies" />
      <MoviesList data={data && data.Search ? data.Search : []} onEndReached={onEndReached} />
    </SafeAreaView>
  );
};
