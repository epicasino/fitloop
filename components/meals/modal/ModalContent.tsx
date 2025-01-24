import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { mealsPageStyles } from '../styles/styles';
import ModalMealType from './ModalMealType';

export default function ModalContent({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mealType, setMealType] = useState('');
  const [calories, setCalories] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      onPress={(e) => {
        if (e.currentTarget === e.target) {
          setModal(false);
        }
      }}
    >
      <View style={mealsPageStyles.modalContainer}>
        <Text style={mealsPageStyles.modalHeaderText}>Meal Type</Text>
        <ModalMealType mealType={mealType} setMealType={setMealType} />
        <View style={{ alignItems: 'center', gap: 10 }}>
          <Text style={mealsPageStyles.modalHeaderText}>Calories</Text>
          <TextInput
            value={calories}
            onChangeText={setCalories}
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
        <View style={{ alignItems: 'center', gap: 10, width: '100%' }}>
          <Text style={mealsPageStyles.modalHeaderText}>Notes</Text>
          <TextInput
            multiline={true}
            value={notes}
            onChangeText={setNotes}
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: 125,
              fontSize: 24,
              paddingTop: 10,
              paddingBottom: 10,
              textAlign: 'center',
              borderRadius: 15,
            }}
          />
        </View>
        <Pressable onPress={() => {}}>
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
            Save Meal
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
