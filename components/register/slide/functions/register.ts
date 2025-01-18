import { user } from '@/db/schema';
import { iUserData } from '@/types/types';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';

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
  const expo = openDatabaseSync('db.db');
  const db = drizzle(expo);

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
