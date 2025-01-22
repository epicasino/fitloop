import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 75,
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'light',
  },
});

export const messageStyles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 32,
    width: '100%',
    fontWeight: 'bold',
    position: 'absolute',
    top: 200,
  },
});

export const mealsAndExerciseStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '50%',
    height: 230,
    borderRadius: 15,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10,
  },
  currentCalories: {
    fontSize: 18,
    fontWeight: '500',
  },
  calorieIntake: {
    fontSize: 32,
    fontWeight: '500',
  },
});
