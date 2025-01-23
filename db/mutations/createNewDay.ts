import { createDay } from '@/db/mutations/mutations';
import { calculateBmr } from '@/functions/calculations';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

const createNewDay = async (
  userData: {
    gender: boolean;
    currentWeight: number;
    height: number;
    birthday: string;
    exerciseLevel: number;
    cutOrBulk: boolean;
    pace: number;
    id: number;
    name: string;
    targetWeight: number;
  },
  date: string
) => {
  const bmr = calculateBmr(
    userData.gender,
    userData.currentWeight,
    userData.height,
    userData.birthday
  );
  const tdee = bmr * userData.exerciseLevel;
  // true is bulk, false is cut
  const calorieTarget = userData.cutOrBulk
    ? tdee * userData.pace
    : tdee - userData.pace;
  const createdDay = await createDay({
    date,
    calorieTarget,
    userId: userData.id,
    db,
  }).then(data => data && data[0]);
  return createdDay;
};

export default createNewDay;
