import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { mealsPageStyles } from '../styles/styles';
import ModalMealType from './ModalMealType';
import ModalCaloriesField from './ModalCaloriesField';
import ModalNotesField from './ModalNotesField';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { day, meal } from '@/db/schema';
import { eq } from 'drizzle-orm';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });

const db = drizzle(expo);

export default function ModalContent({
  setModal,
  dayData,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  dayData: {
    date: string;
    id: number;
    calorieTarget: number;
    calorieIntake: number;
    userId: number | null;
  };
}) {
  const parsedDate = new Date(dayData.date)
    .toLocaleDateString('en-US')
    .split('/')
    .map((num) => parseInt(num));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [mealType, setMealType] = useState('');
  const [calories, setCalories] = useState('');
  const [notes, setNotes] = useState('');
  const [time, setTime] = useState(
    new Date(
      new Date().setUTCFullYear(parsedDate[2], parsedDate[0] - 1, parsedDate[1])
    )
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onTouchStart={(e) => {
        if (e.currentTarget === e.target) {
          setModal(false);
        }
        Keyboard.dismiss();
      }}
    >
      <View style={mealsPageStyles.modalContainer}>
        <Text style={mealsPageStyles.modalHeaderText}>Meal Type</Text>
        <ModalMealType mealType={mealType} setMealType={setMealType} />
        <ModalCaloriesField calories={calories} setCalories={setCalories} />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          <Text style={mealsPageStyles.modalHeaderText}>Time:</Text>
          <DateTimePicker
            mode="time"
            value={time}
            style={{
              marginLeft: -10,
            }}
            onChange={async (
              event: DateTimePickerEvent,
              date: Date | undefined
            ) => {
              if (date) {
                setTime(date);
              }
            }}
          />
        </View>
        <ModalNotesField notes={notes} setNotes={setNotes} />
        <Pressable
          onPress={() => {
            setLoading(true);
            setTimeout(async () => {
              try {
                if (mealType === '') {
                  Alert.alert('Select A Meal Type.');
                  throw 'Select A Meal Type.';
                }
                if (calories === '') {
                  Alert.alert('Calories Field is Empty.');
                  throw 'Calories Field is Empty.';
                }
                const parsedTime = new Date(time).toTimeString().split(' ')[0];
                const newMeal = await db
                  .insert(meal)
                  .values({
                    title: mealType,
                    time: parsedTime,
                    calories: parseInt(calories),
                    notes,
                    dayId: dayData.id,
                  })
                  .returning()
                  .then((data) => data[0]);
                const updatedCalorieIntake = await db
                  .update(day)
                  .set({
                    calorieIntake: dayData.calorieIntake + parseInt(calories),
                  })
                  .where(eq(day.id, newMeal.dayId));
                if (newMeal && updatedCalorieIntake) {
                  console.log(newMeal);
                  setError(false);
                  setSuccess(true);
                }
              } catch (e) {
                setLoading(false);
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 3000);
                // console.error(e);
              }
            }, 3000);
          }}
        >
          {!error ? (
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                backgroundColor: '#444444',
                padding: 10,
                paddingHorizontal: 30,
                borderRadius: 15,
              }}
            >
              {loading ? (
                success ? (
                  'Success! ✅'
                ) : (
                  <ActivityIndicator />
                )
              ) : (
                'Save Meal'
              )}
            </Text>
          ) : (
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                backgroundColor: '#444444',
                padding: 10,
                paddingHorizontal: 30,
                borderRadius: 15,
              }}
            >
              Something Went Wrong...
            </Text>
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
