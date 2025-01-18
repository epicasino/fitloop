import { day } from '@/db/schema';
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite';
import { SQLiteDatabase } from 'expo-sqlite';

export const createDay = async ({
  date,
  calorieTarget,
  userId,
  db,
}: {
  date: string;
  calorieTarget: number;
  userId: number;
  db: ExpoSQLiteDatabase<Record<string, never>> & {
    $client: SQLiteDatabase;
  };
}) => {
  const newDay = await db
    .insert(day)
    .values({
      date,
      calorieTarget,
      calorieIntake: 0,
      userId,
    })
    .returning();
  if (newDay) return newDay;
};
