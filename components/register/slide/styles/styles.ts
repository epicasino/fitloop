import { StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const slideStyles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
    gap: 60,
  },
  headerText: {
    color: '#fff',
    fontSize: 64,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
  },
  formTextHeader: {
    color: '#fff',
    fontSize: 32,
    textAlign: 'center',
    position: 'absolute',
    top: 120,
  },
  formTextInput: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    width: 200,
    borderBottomColor: '#fff',
    borderBottomWidth: 5,
  },
  logo: {
    width: 200,
    height: 100,
  },
});

export default slideStyles;
