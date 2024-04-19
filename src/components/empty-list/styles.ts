import {StyleSheet} from 'react-native';

import {colors} from 'cons/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: wp('50%'),
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.GRAY_800,
    fontWeight: '700',
  },
  info: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.GRAY_800,
    fontWeight: '500',
  },
});

export default styles;
