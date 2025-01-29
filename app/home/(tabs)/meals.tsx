import { mealsPageStyles } from '@/components/meals/styles/styles';
import Header from '@/components/meals/Header';
import WeekSpread from '@/components/meals/WeekSpread';
import { day, meal, user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';
import ProgressBar from '@/components/meals/ProgressBar';
import NewMealBtn from '@/components/meals/NewMealBtn';
import ModalContent from '@/components/meals/modal/ModalContent';
import LoggedMeals from '@/components/meals/LoggedMeals';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });

const db = drizzle(expo);

export default function MealsPage() {
  const userData = useLiveQuery(db.select().from(user)).data[0];
  const today = new Date().toDateString();
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);
  const [editMealData, setEditMealData] = useState<{
    id: number;
    title: string;
    time: string;
    calories: number;
    notes: string | null;
    dayId: number;
  }>();
  const [dayData, setDayData] = useState<{
    date: string;
    id: number;
    calorieTarget: number;
    calorieIntake: number;
    userId: number | null;
  }>();
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

  useEffect(() => {
    const generateDayData = async () => {
      const fetchedDay = await db
        .select()
        .from(day)
        .where(eq(day.date, selectedDate))
        .then((data) => data[0]);
      // console.log(fetchedDay);
      setDayData(fetchedDay);
    };
    generateDayData();
  }, [selectedDate, modal]);

  useEffect(() => {
    const generateMealData = async () => {
      const fetchedMeals = await db
        .select()
        .from(meal)
        .where(eq(meal.dayId, dayData!.id));
      setMealsData(fetchedMeals);
    };
    generateMealData();
  }, [dayData, modal]);

  if (dayData && mealsData && userData) {
    // console.log(dayData.date);
    // console.log(dayData)
    // console.log(mealsData);

    return (
      <View style={mealsPageStyles.container}>
        <Modal
          visible={modal}
          animationType="slide"
          onRequestClose={() => {
            setModal(false);
          }}
          transparent={true}
        >
          <ModalContent
            setModal={setModal}
            dayData={dayData}
            editMealData={editMealData}
            setEditMealData={setEditMealData}
          />
        </Modal>
        <Header date={selectedDate} />
        <WeekSpread
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          modal={modal}
        />
        <ProgressBar
          calorieIntake={dayData.calorieIntake}
          calorieTarget={dayData.calorieTarget}
          cutOrBulk={userData.cutOrBulk}
          meals={mealsData.length}
        />
        <NewMealBtn setModal={setModal} />
        <LoggedMeals
          mealsData={mealsData}
          setEditMealData={setEditMealData}
          setModal={setModal}
        />
      </View>
    );
  } else return <View style={mealsPageStyles.container}></View>;
}
