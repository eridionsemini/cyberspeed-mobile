import React, {FC, ReactElement} from 'react';
import {VirtualizedList} from 'react-native';

import {getItem, getItemCount, isFavourite, keyExtractor} from 'utils';

import {Movie} from './components';
import {ListItem, MoviesListProps} from './types';

export const MoviesList: FC<MoviesListProps> = ({
  data = [],
  fav = [],
  onEndReached,
  onEndReachedThreshold = 0.9,
  refreshing = false,
  initialNumToRender = 20,
  showsVerticalScrollIndicator = false,
  onRefresh,
  handleItemPress,
  handleHeartPress,
  ListEmptyComponent,
}): ReactElement => {
  const renderItem = ({item}: ListItem) => (
    <Movie
      handleItemPress={handleItemPress}
      isFavourite={isFavourite(fav, item.imdbID)}
      handleHeartPress={handleHeartPress}
      movie={item}
    />
  );

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
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};
