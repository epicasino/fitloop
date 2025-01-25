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
  newMealBtnContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#2B2B2B',
    borderRadius: 15,
    gap: 5,
  },
  modalContainer: {
    width: '95%',
    height: 620,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
    borderRadius: 15,
    padding: 20,
    gap: 20,
  },
  modalHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  modalBtn: {
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  modalBtnText: {
    color: '#fff',
    fontSize: 22,
  },
});
