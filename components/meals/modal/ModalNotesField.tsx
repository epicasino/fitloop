import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { mealsPageStyles } from '../styles/styles';

export default function ModalNotesField({
  notes,
  setNotes,
}: {
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <View style={{ alignItems: 'center', gap: 10, width: '100%' }}>
      <Text style={mealsPageStyles.modalHeaderText}>Notes</Text>
      <TextInput
        multiline={true}
        value={notes}
        onChangeText={setNotes}
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 80,
          fontSize: 24,
          paddingTop: 10,
          paddingBottom: 10,
          textAlign: 'center',
          borderRadius: 15,
        }}
      />
    </View>
  );
}
