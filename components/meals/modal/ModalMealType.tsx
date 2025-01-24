import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { mealsPageStyles } from '../styles/styles';

export default function ModalMealType({
  mealType,
  setMealType,
}: {
  mealType: string;
  setMealType: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <View style={{ flexDirection: 'column', gap: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 30,
        }}
      >
        <Pressable
          style={[
            mealsPageStyles.modalBtn,
            {
              backgroundColor: mealType === 'breakfast' ? '#1e1e1e' : '#444444',
            },
          ]}
          onPress={() => {
            setMealType('breakfast');
          }}
        >
          <Text style={mealsPageStyles.modalBtnText}>🍳 Breakfast</Text>
        </Pressable>
        <Pressable
          style={[
            mealsPageStyles.modalBtn,
            {
              backgroundColor: mealType === 'lunch' ? '#1e1e1e' : '#444444',
            },
          ]}
          onPress={() => {
            setMealType('lunch');
          }}
        >
          <Text style={mealsPageStyles.modalBtnText}>🥪 Lunch</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 30,
        }}
      >
        <Pressable
          style={[
            mealsPageStyles.modalBtn,
            {
              backgroundColor: mealType === 'dinner' ? '#1e1e1e' : '#444444',
            },
          ]}
          onPress={() => {
            setMealType('dinner');
          }}
        >
          <Text style={mealsPageStyles.modalBtnText}>🍝 Dinner</Text>
        </Pressable>
        <Pressable
          style={[
            mealsPageStyles.modalBtn,
            {
              backgroundColor: mealType === 'other' ? '#1e1e1e' : '#444444',
            },
          ]}
          onPress={() => {
            setMealType('other');
          }}
        >
          <Text style={mealsPageStyles.modalBtnText}>🍦 Other</Text>
        </Pressable>
      </View>
    </View>
  );
}
