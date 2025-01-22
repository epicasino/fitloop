import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { mealsAndExerciseStyles } from '../styles/styles';
import CurrentCalories from './CurrentCalories';
import LatestMeal from './LatestMeal';
import { DayContext } from '../contexts';
import PlusBtn from '@/assets/svg/shapes/PlusBtn';

export default function Meals({
  mealsData,
}: {
  mealsData: {
    id: number;
    time: string;
    calories: number;
    notes: string | null;
    dayId: number | null;
  }[];
}) {
  const dayId = useContext(DayContext);
  return (
    dayId && (
      <View style={mealsAndExerciseStyles.container}>
        <Text style={mealsAndExerciseStyles.header}>Meals</Text>
        <CurrentCalories
          calorieIntake={dayId.calorieIntake}
          calorieTarget={Math.floor(dayId.calorieTarget)}
        />
        {mealsData.length > 1 ? <LatestMeal /> : <Text>No Meals Logged!</Text>}
        <Pressable
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
        >
          <PlusBtn size={35} />
        </Pressable>
      </View>
    )
  );
}
