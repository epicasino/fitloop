import { StyleSheet, ImageBackground } from 'react-native';
import backgroundImg from '@/assets/images/first_visit/mitch_barrie_climbing_gym_1981.jpg';
import RegisterCarousel from '@/components/register/RegisterCarousel';

export default function App() {
  return (
    <ImageBackground source={backgroundImg} style={styles.imageBackground}>
      <RegisterCarousel />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    gap: 60,
  },
  text: {
    color: '#fff',
    fontSize: 64,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
});
