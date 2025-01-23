import { calculateBmr } from '@/functions/calculations';
import { createDay } from '@/db/mutations/mutations';
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
import createNewDay from '@/db/mutations/createNewDay';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function Index() {
  // const [reset, setReset] = useState(false);

  const today = new Date().toDateString();
  const userData = useLiveQuery(db.select().from(user)).data[0];
  const dayData = useLiveQuery(
    db.select().from(day).where(eq(day.date, today)).limit(1)
  ).data[0];
  const mealsData = useLiveQuery(
    db.select().from(meal).where(eq(day.date, today))
  ).data;
  const exerciseData = useLiveQuery(
    db.select().from(exercise).where(eq(day.date, today))
  ).data;

  // console.log(mealsData);

  if (!dayData && userData) {
    createNewDay(userData, today);
  }
  // console.log(dayData);
  // console.log(userData);
  if (userData && dayData && mealsData && exerciseData) {
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
          {/* <Pressable
          style={{ backgroundColor: 'grey', padding: 15 }}
          onPress={async () => {
            await db.delete(day);
            await db.delete(user);
            setReset(true);
          }}
        >
          <Text style={{ color: '#fff' }}>Delete Data</Text>
        </Pressable>
        {reset && <Redirect href={'/'} />} */}
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
