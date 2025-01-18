import React from 'react';
import { Text, View } from 'react-native';
import { mealsAndExerciseStyles } from '../styles/styles';

export default function Meals() {
  return (
    <View style={mealsAndExerciseStyles.container}>
      <Text style={mealsAndExerciseStyles.header}>Meals</Text>
      
    </View>
  );
}
