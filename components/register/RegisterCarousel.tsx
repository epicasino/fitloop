import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import { user } from '../../db/schema';
import backgroundImg from '@/assets/images/first_visit/mitch_barrie_climbing_gym_1981.jpg';
import FitloopLogo from '@/assets/svg/logo/FitloopLogo';
import ArrowSvg from '@/assets/svg/shapes/Arrow';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function App() {
  const { data } = useLiveQuery(db.select().from(user));

  return (
    <ImageBackground source={backgroundImg} style={styles.imageBackground}>
      <FitloopLogo width={350} />
      <Text style={styles.text}>Let's Get Started!</Text>
      <ArrowSvg />
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
