import { StyleSheet } from 'react-native';

export const mealsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    paddingTop: 75,
    gap: 20,
  },
  weekSpreadContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressBarContainer: {
    width: '100%',
    height: 30,
    backgroundColor: '#333333',
    borderRadius: 15,
  },
});
