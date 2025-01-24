import { mealsPageStyles } from '@/components/meals/styles/styles';
import Header from '@/components/meals/Header';
import WeekSpread from '@/components/meals/WeekSpread';
import { day, meal, user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ProgressBar from '@/components/meals/ProgressBar';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });

const db = drizzle(expo);

export default function MealsPage() {
  const userData = useLiveQuery(db.select().from(user)).data[0];
  // console.log(cutOrBulk)
  const today = new Date().toDateString();
  const [selectedDate, setSelectedDate] = useState(today);
  const [dayData, setDayData] = useState<{
    date: string;
    id: number;
    calorieTarget: number;
    calorieIntake: number;
    userId: number | null;
  }>();

  useEffect(() => {
    const generateDayData = async () => {
      const fetchedDay = await db
        .select()
        .from(day)
        .where(eq(day.date, selectedDate))
        .then((data) => data[0]);
      setDayData(fetchedDay);
    };
    generateDayData();
  }, [selectedDate]);

  const mealsData = useLiveQuery(
    db.select().from(meal).where(eq(day.date, selectedDate))
  ).data;

  if (dayData && mealsData && userData) {
    // console.log(dayData.date);
    // console.log(dayData);
    return (
      <View style={mealsPageStyles.container}>
        <Header date={selectedDate} />
        <WeekSpread
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <ProgressBar
          calorieIntake={dayData.calorieIntake}
          calorieTarget={dayData.calorieTarget}
          cutOrBulk={userData.cutOrBulk}
          meals={mealsData.length}
        />
        <Text style={{ color: '#fff' }}>{dayData.date}</Text>
      </View>
    );
  } else return <View style={mealsPageStyles.container}></View>;
}
