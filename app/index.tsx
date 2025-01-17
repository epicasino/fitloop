import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import { user } from '../db/schema';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Redirect } from 'expo-router';
import { clearValues } from '@/components/register/slide/functions/asyncStorage';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function App() {
  const { success, error } = useMigrations(db, migrations);
  const { data } = useLiveQuery(db.select().from(user));

  if (error) {
    return (
      <View>
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

  return <Redirect href={'/register'} />;
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
