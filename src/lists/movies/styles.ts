import {StyleSheet} from 'react-native';

import {colors, spacing} from 'cons/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  movieCard: {
    borderRadius: spacing.sm,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {
    width: wp('50%') - 16,
    height: 200,
    borderRadius: spacing.sm,
  },
  infoCard: {
    width: wp('50%') - 16,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.CYAN_500,
  },
  movieType: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.GRAY_500,
  },
  movieYear: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.GRAY_500,
  },
});

export default styles;
