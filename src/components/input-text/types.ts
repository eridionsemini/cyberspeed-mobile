import {ReactElement} from 'react';
import {GestureResponderEvent, StyleProp, TextInputProps, ViewStyle} from 'react-native';

export interface InputTextProps extends TextInputProps {
  error?: string;
  label?: string | undefined;
  placeholderTextColor?: string;
  style?: StyleProp<ViewStyle> | undefined;
  labelIcon?: ReactElement | undefined;
  labelActionIcon?: ReactElement | undefined;
  onPressLabelActionIcon?: ((event: GestureResponderEvent) => void) | undefined;
}
