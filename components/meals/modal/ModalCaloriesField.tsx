import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { mealsPageStyles } from '../styles/styles';

export default function ModalCaloriesField({
  calories,
  setCalories,
}: {
  calories: string;
  setCalories: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <Text style={mealsPageStyles.modalHeaderText}>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={setCalories}
        keyboardType="number-pad"
        style={{
          backgroundColor: '#fff',
          width: 150,
          fontSize: 32,
          paddingTop: 10,
          paddingBottom: 10,
          textAlign: 'center',
          borderRadius: 15,
        }}
      />
    </View>
  );
}
