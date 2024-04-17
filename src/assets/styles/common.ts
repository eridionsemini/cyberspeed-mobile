import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { colors } from 'cons/';

const commonStyles = StyleSheet.create({
    input: {
        height: 48,
        borderColor: colors.GREEN_300,
    },
    container: {
        flex: 1,
        width: wp('100%') - 32,
        marginHorizontal: 16,
    },
    flexRow: {
        flexDirection: 'row',
    },
    itemsCenter: {
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
});

export default commonStyles;
