import { Field } from "@/types/types";
import { useState } from "react";
import { Text, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select'
import { setValue } from "../functions/asyncStorage";

export default function HeightComponent({ field }: { field: Field }) {
  const [feet, setFeet] = useState('');
  const [inch, setInch] = useState('');

  return (
    <View
      style={{
        flexDirection: 'row',
        width: 200,
        borderBottomColor: '#fff',
        borderBottomWidth: 5,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 24 }}>{field.text}</Text>
      <RNPickerSelect
        placeholder={{ label: "ft '", value: '' }}
        items={
          field!.ft?.map((num) => {
            return { label: `${num.toString()} '`, value: num.toString() };
          }) || []
        }
        value={feet}
        style={{
          inputIOS: {
            fontSize: 24,
            width: 50,
            height: 'auto',
            color: '#fff',
            textAlign: 'center',
          },
          placeholder: {
            opacity: 1,
            color: '#fff',
          },
        }}
        onValueChange={async (value) => {
          setFeet(value);
          await setValue('feet', feet);
        }}
        key={'feet'}
        darkTheme
        textInputProps={{ pointerEvents: 'none' }}
      />
      <RNPickerSelect
        placeholder={{ label: 'in "', value: '' }}
        items={
          field!.in?.map((num) => {
            return { label: `${num.toString()} "`, value: num.toString() };
          }) || []
        }
        value={inch}
        style={{
          inputIOS: {
            fontSize: 24,
            width: 50,
            height: 'auto',
            color: '#fff',
            textAlign: 'center',
          },
          placeholder: {
            opacity: 1,
            color: '#fff',
          },
        }}
        onValueChange={async (value) => {
          setInch(value);
          await setValue('inch', inch);
        }}
        key={'inch'}
        darkTheme
        textInputProps={{ pointerEvents: 'none' }}
      />
    </View>
  );
}