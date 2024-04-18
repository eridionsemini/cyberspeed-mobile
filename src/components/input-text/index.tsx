import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {colors, mediumHitSlop} from 'cons/';

import styles from './styles';
import {InputTextProps} from './types';

export const InputText: FC<InputTextProps> = ({
  error,
  label,
  labelIcon,
  onPressLabelActionIcon,
  labelActionIcon,
  placeholderTextColor,
  style,
  ...textInputProps
}) => {
  const labelMargin = {
    marginLeft: labelIcon ? 8 : 0,
  };
  return (
    <View style={style}>
      <View style={styles.labelWrapper}>
        <View style={styles.labelContentLeft}>
          {labelIcon}
          {label ? <Text style={[styles.label, labelMargin]}>{label}</Text> : null}
        </View>
        <TouchableOpacity hitSlop={mediumHitSlop} onPress={onPressLabelActionIcon}>
          {labelActionIcon}
        </TouchableOpacity>
      </View>

      <TextInput
        {...textInputProps}
        placeholderTextColor={placeholderTextColor || colors.GRAY_200}
        style={[styles.input, !!error && styles.inputError]}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};
