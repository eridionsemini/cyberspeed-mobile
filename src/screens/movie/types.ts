import {RouteProp} from '@react-navigation/native';

import {MoviesStackParamList, MoviesStackProps} from 'navi/types';

export interface MovieProps {
  navigation: MoviesStackProps;
  route: RouteProp<MoviesStackParamList, 'movieDetails'>;
}
