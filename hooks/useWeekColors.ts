import createNewDay from '@/db/mutations/createNewDay';
import { day, meal, user } from '@/db/schema';
import initializeWeek from '@/functions/initializeWeek';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import { useEffect, useState } from 'react';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function useWeekColors(selectedDate: string) {
  const weekStringArr = initializeWeek(selectedDate);
  const [week, setWeek] = useState<
    Array<{
      date: string;
      colors: string;
    }>
  >([]);

  useEffect(() => {
    const generateWeek = async () => {
      const userData = await db
        .select()
        .from(user)
        .then((data) => data[0]);
      const generatedWeek = await Promise.all(
        weekStringArr.map(async (dayStr) => {
          let dayData = await db
            .select()
            .from(day)
            .where(eq(day.date, dayStr))
            .then((data) => {
              return data[0] ? data[0] : undefined;
            });

          if (!dayData) {
            const userData = await db
              .select()
              .from(user)
              .then((data) => data[0]);
            dayData = await createNewDay(userData, dayStr);
          }
          // console.log(dayData);
          const mealData = await db
            .select()
            .from(meal)
            .where(eq(meal.dayId, dayData!.id));

          return {
            date: dayData!.date,
            colors:
              mealData.length !== 0
                ? userData.cutOrBulk
                  ? dayData!.calorieIntake >= dayData!.calorieTarget
                    ? '#29FF52'
                    : '#DE2154'
                  : dayData!.calorieIntake <= dayData!.calorieTarget
                  ? '#29FF52'
                  : '#DE2154'
                : '#fff',
          };
        })
      );
      return generatedWeek;
    };
    generateWeek().then((data) => setWeek(data));
  }, []);

  return week;
}
