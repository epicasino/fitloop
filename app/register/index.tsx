import { StyleSheet, ImageBackground } from 'react-native';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import { user } from '../../db/schema';
import backgroundImg from '@/assets/images/first_visit/mitch_barrie_climbing_gym_1981.jpg';
import RegisterCarousel from '@/components/register/RegisterCarousel';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function App() {
  const { data } = useLiveQuery(db.select().from(user));

  return (
    <ImageBackground source={backgroundImg} style={styles.imageBackground}>
      <RegisterCarousel />
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
