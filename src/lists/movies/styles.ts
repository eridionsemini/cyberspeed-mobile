import {StyleSheet} from 'react-native';

import {colors, spacing} from 'cons/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  movieCard: {
    borderRadius: spacing.sm,
    overflow: 'hidden',
    flexDirection: 'row',
    position: 'relative',
  },
  image: {
    width: wp('100%') - spacing.md,
    height: 200,
    borderRadius: spacing.sm,
  },
  titleWrapper: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    zIndex: 10,
    padding: spacing.sm,
    borderRadius: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
  },
  title: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '900',
    color: colors.PURPLE_800,
    shadowColor: colors.PURPLE_200,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  yearWrapper: {
    position: 'absolute',
    bottom: spacing.md,
    left: spacing.md,
    zIndex: 10,
    padding: spacing.sm,
    borderRadius: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
  },
  movieYear: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '900',
    textTransform: 'capitalize',
    color: colors.PURPLE_800,
  },
});

export default styles;
