import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: Platform.OS === 'ios' ? 16 : 0,
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
