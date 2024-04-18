import React, { FC, ReactElement, useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { MoviesList } from 'lists';
import { useAppDispatch, useAppSelector } from '../hooks';

import { NavigationBar } from 'components/';

import commonStyles from 'assets/styles/common';
import { moviesSelector, getMoviesList } from 'store/movies';

export const Movies: FC = (): ReactElement => {
  const [page, setPage] = useState<number>(1);
  const { data, loading, refreshing } = useAppSelector(moviesSelector);
  const dispatch = useAppDispatch();
  const onEndReached = () => {
    console.log('on end reached');
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getMoviesList({ page: 1, s: 'movie' }))
  }, [])

  return (
    <SafeAreaView style={[commonStyles.container]}>
      <NavigationBar title="Movies" />
      <MoviesList data={data} onEndReached={onEndReached} />
    </SafeAreaView>
  );
};
