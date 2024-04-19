import {Platform, StyleSheet} from 'react-native';

import {spacing} from '__root/src/cons';

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: Platform.OS === 'ios' ? spacing.md : 0,
    marginTop: spacing.sm,
  },
  tabItem: {
    display: 'flex',
    alignItems: 'center',
  },
  tabItemText: {
    fontSize: 12,
    lineHeight: 20,
    color: 'black',
    letterSpacing: -0.2,
    textTransform: 'capitalize',
  },
  tabItemTextFocused: {
    fontSize: 12,
    lineHeight: 20,
    color: 'blue',
    letterSpacing: -0.2,
    textTransform: 'capitalize',
  },
  avatar: {
    width: 18,
    height: 18,
    borderRadius: 12,
  },
});

export default styles;
