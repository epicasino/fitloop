import { homeStyles, mealsPageStyles } from '@/components/home/styles/styles';
import Header from '@/components/meals/Header';
import WeekSpread from '@/components/meals/WeekSpread';
import { day, meal } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import React, { useState } from 'react';
import { View } from 'react-native';

const expo = openDatabaseSync('db.db');

const db = drizzle(expo);

export default function MealsPage() {
  const today = new Date().toDateString();
  const [selectedDate, setSelectedDate] = useState(today);

  const mealsData = useLiveQuery(
    db.select().from(meal).where(eq(day.date, selectedDate))
  ).data;
  const dayData = useLiveQuery(
    db.select().from(day).where(eq(day.date, selectedDate)).limit(1)
  ).data[0];

  if (dayData && mealsData) {
    // console.log(dayData.date);
    // console.log(dayData);
    return (
      <View style={mealsPageStyles.container}>
        <Header date={dayData.date} />
        <WeekSpread
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
    );
  } else return <View style={homeStyles.container}></View>;
}
