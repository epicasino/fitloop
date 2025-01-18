import React from 'react';
import { Text, View } from 'react-native';

export default function CurrentCalories({
  calorieTarget,
  calorieIntake,
}: {
  calorieTarget: number;
  calorieIntake: number;
}) {
  return (
    <View>
      <Text>Current Calories:</Text>
      <Text>{calorieIntake}</Text>
      <Text>{calorieTarget}</Text>
    </View>
  );
}
