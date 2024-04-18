import {GestureResponderEvent} from 'react-native';

export interface HeartProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isFavourite: boolean;
  top?: number;
  right?: number;
}
