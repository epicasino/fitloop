import React from 'react';
import { Text, View } from 'react-native';
import { mealsAndExerciseStyles } from '../styles/styles';

export default function CurrentCalories({
  calorieTarget,
  calorieIntake,
}: {
  calorieTarget: number;
  calorieIntake: number;
}) {
  return (
    <View>
      <Text style={mealsAndExerciseStyles.currentCalories}>
        Current Calories:
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={mealsAndExerciseStyles.calorieIntake}>
          {calorieIntake}
        </Text>
        <Text> kCal</Text>
      </View>
      <Text>/ {calorieTarget} kCal</Text>
    </View>
  );
}
