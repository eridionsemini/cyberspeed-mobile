import {StyleSheet} from 'react-native';

import {colors, spacing} from 'cons/';

const styles = StyleSheet.create({
  input: {
    height: 48,
    backgroundColor: 'white',
    color: colors.GRAY_800,
    paddingHorizontal: spacing.md,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    overflow: 'hidden',
    fontSize: 16,
    lineHeight: 24,
  },
  inputError: {
    borderColor: colors.RED_500,
  },
  error: {
    color: colors.RED_500,
    fontSize: 14,
    lineHeight: 18,
    marginVertical: 8,
    fontWeight: '500',
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: colors.PURPLE_500,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  labelContentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContentRight: {},
});

export default styles;
