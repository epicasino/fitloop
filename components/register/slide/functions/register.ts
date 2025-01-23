import { user } from '@/db/schema';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';

const expo = openDatabaseSync('db.db');
const db = drizzle(expo);

export default async function register(userData: any) {
  const {
    name,
    gender,
    birthday,
    exerciseLevel,
    height,
    cutOrBulk,
    currentWeight,
    targetWeight,
    pace,
  } = userData;

  // console.log(birthday);

  const newUser = await db
    .insert(user)
    .values({
      name,
      gender,
      birthday,
      exerciseLevel,
      height,
      cutOrBulk,
      currentWeight,
      targetWeight,
      pace,
    })
    .returning();
  // console.log(newUser);
  if (newUser) {
    return newUser;
  }
  // await db.delete(user);
  // console.log(await db.select().from(user));
}
