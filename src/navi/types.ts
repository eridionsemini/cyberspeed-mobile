import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {createNavigationContainerRef} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

/// movie stack types
export type MoviesStackParamList = {
  moviesList: undefined;
  movieDetails: {id: string};
};

export type MoviesStackProps = NativeStackNavigationProp<MoviesStackParamList>;

// favourite stack types
export type FavouriteMoviesStackParamsList = {
  favouriteMovies: undefined;
};

export type FavouriteMoviesStackProps = NativeStackNavigationProp<FavouriteMoviesStackParamsList>;

/// bottom navi types
export type BottomTabNaviParams = {
  movies: {
    screen?: keyof MoviesStackParamList;
  };
  favourites: {
    screen?: keyof FavouriteMoviesStackParamsList;
  };
};

export type BottomProps = BottomTabNavigationProp<BottomTabNaviParams>;

/// root navi types
export type RootStackParamList = {
  bottomNavi: BottomTabNaviParams;
};

export type RootStackProps = StackScreenProps<RootStackParamList>;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type HeaderOptions = {
  headerShown: boolean;
  animationEnabled: boolean;
};

export const headerOptions: HeaderOptions = {
  headerShown: false,
  animationEnabled: true,
};
