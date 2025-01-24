import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { mealsPageStyles } from './styles/styles';

export default function ModalContent({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <View>
          
        </View>
        <Pressable onPress={() => setModal(false)}>
          <Text style={{ color: '#fff' }}>Close Modal</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
