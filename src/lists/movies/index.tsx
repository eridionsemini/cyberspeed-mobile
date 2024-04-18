import React, {FC, ReactElement} from 'react';
import {VirtualizedList} from 'react-native';

import {getItem, getItemCount, keyExtractor} from 'utils';

import {Movie} from './components';
import {ListItem, MoviesListProps} from './types';

export const MoviesList: FC<MoviesListProps> = ({
  data = [],
  onEndReached,
  onEndReachedThreshold = 0.9,
  refreshing = false,
  initialNumToRender = 20,
  showsVerticalScrollIndicator = false,
  onRefresh,
  handleItemPress,
}): ReactElement => {
  const renderItem = ({item}: ListItem) => <Movie handleItemPress={handleItemPress} movie={item} />;

  return (
    <VirtualizedList
      data={data}
      onEndReachedThreshold={onEndReachedThreshold}
      initialNumToRender={initialNumToRender}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      onEndReached={onEndReached}
      refreshing={refreshing}
      keyExtractor={keyExtractor}
      getItem={getItem}
      renderItem={renderItem}
      getItemCount={getItemCount}
      onRefresh={onRefresh}
    />
  );
};
