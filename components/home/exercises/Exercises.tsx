import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { mealsAndExerciseStyles } from '../styles/styles';
import CaloriesBurned from './CaloriesBurned';
import LatestExercise from './LatestExercise';
import PlusBtn from '@/assets/svg/shapes/PlusBtn';

export default function Exercises({
  exerciseData,
}: {
  exerciseData: {
    id: number;
    dayId: number | null;
    exerciseType: string;
    duration: number;
    caloriesBurned: number;
  }[];
}) {
  return (
    <View style={mealsAndExerciseStyles.container}>
      <Text style={mealsAndExerciseStyles.header}>Exercises</Text>
      <CaloriesBurned
        caloriesBurned={exerciseData
          .map((data) => data.caloriesBurned)
          .reduce((acc, curr) => acc + curr, 0)}
      />
      {exerciseData.length > 1 ? (
        <LatestExercise />
      ) : (
        <Text>No Exercises Logged!</Text>
      )}
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
  );
}
