import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { mealsAndExerciseStyles } from '../styles/styles';
import CurrentCalories from './CurrentCalories';
import LatestMeal from './LatestMeal';
import { DayContext } from '../contexts';
import PlusBtn from '@/assets/svg/shapes/PlusBtn';
import { useRouter } from 'expo-router';

export default function Meals({
  mealsData,
}: {
  mealsData: {
    id: number;
    time: string;
    calories: number;
    title: string;
    notes: string | null;
    dayId: number;
  }[];
}) {
  const dayData = useContext(DayContext);
  const router = useRouter();
  // console.log(mealsData);
  return (
    dayData && (
      <View style={mealsAndExerciseStyles.container}>
        <Text style={mealsAndExerciseStyles.header}>Meals</Text>
        <CurrentCalories
          calorieIntake={dayData.calorieIntake}
          calorieTarget={Math.floor(dayData.calorieTarget)}
        />
        {mealsData.length > 0 ? (
          <LatestMeal meal={mealsData.pop()} />
        ) : (
          <Text>No Meals Logged!</Text>
        )}
        <Pressable
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
          onPress={() => {
            router.push('/home/meals');
          }}
        >
          <PlusBtn size={35} />
        </Pressable>
      </View>
    )
  );
}
