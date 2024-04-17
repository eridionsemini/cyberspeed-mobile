import {createNavigationContainerRef} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  moviesList: undefined;
  movieDetails: {id: number | null};
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
