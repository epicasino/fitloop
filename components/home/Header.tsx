import React from 'react';
import { Text, View, Pressable, Alert } from 'react-native';
import { headerStyles } from './styles/styles';
import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { day, user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Redirect } from 'expo-router';
import { calculateBmr } from '@/functions/calculations';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });

const db = drizzle(expo);

const showPrompt = (
  dayData: {
    date: string;
    id: number;
    calorieTarget: number;
    calorieIntake: number;
    weight: number | null;
    userId: number;
  },
  userData: {
    id: number;
    name: string;
    gender: boolean;
    birthday: string;
    exerciseLevel: number;
    height: number;
    cutOrBulk: boolean;
    currentWeight: number;
    targetWeight: number;
    pace: number;
  }
) => {
  Alert.prompt(
    'Input your current weight.',
    'In lbs.',
    (text: string) => {
      if (text === '') return;

      const weight = parseInt(text);
      const bmr = calculateBmr(
        userData.gender,
        weight,
        userData.height,
        userData.birthday
      );
      const tdee = bmr * userData.exerciseLevel;
      // true is bulk, false is cut
      const calorieTarget = userData.cutOrBulk
        ? tdee * userData.pace
        : tdee - userData.pace;

      // console.log(text);
      (async () => {
        const updatedDayWeight = await db
          .update(day)
          .set({ weight })
          .where(eq(day.id, dayData.id))
          .returning({ weight: day.weight })
          .then((data) => data[0]);
        const updatedDayCalorieTarget = await db
          .update(day)
          .set({ calorieTarget })
          .where(eq(day.id, dayData.id))
          .returning({ calorieTarget: day.calorieTarget })
          .then((data) => data[0]);
        const updatedUserWeight = await db
          .update(user)
          .set({ currentWeight: weight })
          .returning({ currentWeight: user.currentWeight })
          .then((data) => data[0]);
        // console.log(updatedDayWeight);
        // console.log(updatedUserWeight);
        if (
          updatedDayWeight.weight &&
          updatedUserWeight.currentWeight &&
          updatedDayCalorieTarget
        ) {
          return;
        }
      })();
    },
    'plain-text',
    dayData.weight?.toString() ?? '',
    'number-pad'
  );
};

export default function Header({
  userData,
  dayData,
}: {
  userData: {
    id: number;
    name: string;
    gender: boolean;
    birthday: string;
    exerciseLevel: number;
    height: number;
    cutOrBulk: boolean;
    currentWeight: number;
    targetWeight: number;
    pace: number;
  };
  dayData: {
    date: string;
    id: number;
    calorieTarget: number;
    calorieIntake: number;
    weight: number | null;
    userId: number;
  };
}) {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Hello {userData.name} 👋</Text>
      <Text style={headerStyles.date}>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        })}
      </Text>
      <Pressable
        onPress={() => {
          showPrompt(dayData, userData);
        }}
      >
        <Text
          style={[
            headerStyles.date,
            { textDecorationLine: dayData.weight ? 'none' : 'underline' },
          ]}
        >
          {dayData.weight ? `${dayData.weight} lbs →` : "Log Today's Weight →"}
        </Text>
      </Pressable>
    </View>
  );
}
