import {ComponentType} from 'react';

import {Movie} from 'movies-sdk';

export interface MoviesListProps {
  data: Array<Movie>;
  initialNumToRender?: number | undefined;
  showsVerticalScrollIndicator?: boolean | undefined;
  onEndReached?: () => void;
  onEndReachedThreshold?: number | undefined;
  onRefresh?: () => void;
  refreshing?: boolean | undefined;
  handleItemPress?: (v: string) => void;
  handleHeartPress: (v: Movie) => void;
  fav: Array<Movie>;
  ListEmptyComponent?: ComponentType<any>;
}

export interface ListItem {
  item: Movie;
  index: number;
}

export interface MovieItemProps {
  movie: Movie;
  handleItemPress?: (title: string) => void;
  handleHeartPress: (v: Movie) => void;
  isFavourite: boolean;
}
