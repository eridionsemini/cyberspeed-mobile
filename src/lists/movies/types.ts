import {Movie} from 'general-types';

export interface MoviesListProps {
  data: Array<Movie>;
  initialNumToRender?: number | undefined;
  showsVerticalScrollIndicator?: boolean | undefined;
  onEndReached?: () => void;
  onEndReachedThreshold?: number | undefined;
  onRefresh?: () => void;
  refreshing?: boolean | undefined;
  handleItemPress?: (v: string) => void;
}

export interface ListItem {
  item: Movie;
  index: number;
}

export interface MovieItemProps {
  movie: Movie;
  handleItemPress?: (title: string) => void;
}
