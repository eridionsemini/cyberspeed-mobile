import {StyleSheet} from 'react-native';

import {colors, spacing} from 'cons/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  image: {
    width: wp('100%') - spacing.xl,
    height: 400,
    borderRadius: spacing.sm,
    position: 'relative',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '900',
    color: colors.PURPLE_800,
  },
  plot: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.GRAY_500,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  infoWrapper: {
    width: wp('30%'),
  },
  infoTitle: {
    fontSize: 14,
    lineHeight: 18,
    color: 'black',
    fontWeight: '700',
  },
  infoText: {
    fontSize: 10,
    lineHeight: 14,
    color: colors.GRAY_500,
    fontWeight: '500',
  },
  rating: {
    fontSize: 11,
    lineHeight: 15,
    color: colors.GRAY_800,
    fontWeight: '700',
  },
});

export default styles;
