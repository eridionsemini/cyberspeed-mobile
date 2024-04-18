import {StyleSheet} from 'react-native';

import {spacing} from 'cons/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  movieCard: {
    borderRadius: spacing.sm,
    overflow: 'hidden',
  },
  image: {
    width: wp('100%') - 32,
    height: 200,
  },
});

export default styles;
