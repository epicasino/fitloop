import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
// import { useEffect, useState } from 'react';
import { user } from '../db/schema';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import backgroundImg from '../assets/images/first_visit/mitch_barrie_climbing_gym_1981.jpg';
import FitloopLogo from '@/assets/svg/logo/FitloopLogo';
import { Redirect } from 'expo-router';
import ArrowSvg from '@/assets/svg/shapes/Arrow';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function App() {
  const { success, error } = useMigrations(db, migrations);
  const { data } = useLiveQuery(db.select().from(user));

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  // console.log(data);

  if (data[0]) {
    return <Redirect href={'/home'} />;
  }

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
