import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { day, meal, user } from '../db/schema';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';
import { Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { openDatabaseSync } from 'expo-sqlite';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });

const db = drizzle(expo);

// async function clearData() {
// await db.delete(user);
// await db.delete(day);
// await db.delete(meal);
// }

export default function App() {
  // clearData();
  const { success, error } = useMigrations(db, migrations);
  const { data } = useLiveQuery(db.select().from(user));
  useDrizzleStudio(expo);

  if (error) {
    return (
      <View>
        <Text style={{ color: '#fff', fontSize: 64, textAlign: 'center' }}>
          Migration error: {error.message}
        </Text>
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
