import Header from '@/components/home/Header';
import Meals from '@/components/home/meals/Meals';
import StatusMessage from '@/components/home/StatusMessage';
import { homeStyles } from '@/components/home/styles/styles';
import { day, exercise, meal, user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import { View } from 'react-native';
import { DayContext } from '@/components/home/contexts';
import Exercises from '@/components/home/exercises/Exercises';
import { useEffect, useState } from 'react';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });

const db = drizzle(expo);

export default function Index() {
  const today = new Date().toDateString();
  const userData = useLiveQuery(db.select().from(user)).data[0];
  const dayData = useLiveQuery(db.select().from(day).where(eq(day.date, today)))
    .data[0];
  const [mealsData, setMealsData] = useState<
    {
      id: number;
      title: string;
      time: string;
      calories: number;
      notes: string | null;
      dayId: number;
    }[]
  >();
  const [exerciseData, setExerciseData] = useState<
    {
      id: number;
      dayId: number;
      exerciseType: string;
      duration: number;
      caloriesBurned: number;
    }[]
  >();
  useEffect(() => {
    if (dayData) {
      (async () => {
        const fetchedMeals = await db
          .select()
          .from(meal)
          .where(eq(meal.dayId, dayData.id));
        const fetchedExercises = await db
          .select()
          .from(exercise)
          .where(eq(exercise.dayId, dayData.id));
        setMealsData(fetchedMeals);
        setExerciseData(fetchedExercises);
      })();
    }
  }, [dayData]);

  if (userData && dayData && mealsData && exerciseData) {
    // console.log(mealsData);
    return (
      <DayContext.Provider value={dayData}>
        <View style={homeStyles.container}>
          <Header name={userData.name} />
          <StatusMessage />
          <View>
            <View style={{ width: '100%', flexDirection: 'row', gap: 20 }}>
              <Meals mealsData={mealsData} />
              <Exercises exerciseData={exerciseData} />
            </View>
          </View>
        </View>
      </DayContext.Provider>
    );
  } else {
    return <View></View>;
  }
}

// **Calorie Deficit = TDEE − Calories Consumed**

// Where:

// - TDEE: Total number of calories a body needs to maintain its current weight
// - Calories Consumed: Total number of calories you consume through any activity

// To calculate your total daily energy expenditure (TDEE), there is a following formula:

// **TDEE = BMR × Activity Factor**

// In the TDEE formula, BMR is the number of calories expended as your body performs the basic functions of life. For calculating BMR, try our [BMR calculator](https://calculator-online.net/bmr-calculator/) or just put values in the given Mifflin-St Jeor equations.

// **For Men:**

// - BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) − (5.677 × age in years)

// **For Women:**

// - BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) − (4.330 × age in years)

// Another term in the TDEE formula is the activity factor. This depends on your activity level:

// - Sedentary (little or no exercise): TDEE = BMR x 1.2
// - Lightly active (light exercise/sports 1-3 days/week): TDEE = BMR x 1.375
// - Moderately active (moderate exercise/sports 3-5 days/week): TDEE = BMR x 1.55
// - Very active (hard exercise/sports 6-7 days a week): TDEE = BMR x 1.725
// - Extra active (very hard exercise/sports & physical job or 2x training): TDEE = BMR x 1.9
