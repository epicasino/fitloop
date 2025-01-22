import React from 'react';
import { Text, View } from 'react-native';
import { mealsAndExerciseStyles } from '../styles/styles';

export default function CaloriesBurned({
  caloriesBurned,
}: {
  caloriesBurned: number;
}) {
  return (
    <View>
      <Text style={mealsAndExerciseStyles.currentCalories}>
        Calories Burned:
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={mealsAndExerciseStyles.calorieIntake}>
          {caloriesBurned}
        </Text>
        <Text> kCal</Text>
      </View>
    </View>
  );
}
