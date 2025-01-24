import React from 'react';
import { Text, Pressable } from 'react-native';
import { mealsPageStyles } from './styles/styles';
import PlusBtn from '@/assets/svg/shapes/PlusBtn';

export default function NewMealBtn({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Pressable
      style={mealsPageStyles.newMealBtnContainer}
      onPress={() => {
        setModal(true);
      }}
    >
      <PlusBtn size={62} />
      <Text style={{ color: '#fff', fontWeight: '600' }}>New Meal</Text>
    </Pressable>
  );
}
