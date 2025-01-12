import { useState } from 'react';
import { View, Text, TextInput, Modal, Pressable } from 'react-native';
import slideStyles from './styles';
import { Field, iRegisterCarousel, iUserData } from '@/types/types';
import { getValue, setValue } from './asyncStorage';
import { Dropdown } from 'react-native-element-dropdown';

function InputComponent({ field }: { field: Field }) {
  const [fieldValue, setFieldValue] = useState('');
  return (
    <TextInput
      value={fieldValue}
      placeholderTextColor={'#fff'}
      onChangeText={setFieldValue}
      placeholder={field.text}
      style={slideStyles.formTextInput}
      onEndEditing={async () => {
        await setValue(field.text, fieldValue);
        // console.log(await getValue(field.text));
      }}
    />
  );
}

function PickerComponent({ field }: { field: Field }) {
  const [fieldValue, setFieldValue] = useState<number | null>(null);

  const parsedOptions =
    field.options &&
    field.options.map((option) => {
      return { label: option.text, value: option.value };
    });

  return (
    <View>
      <Dropdown
        style={slideStyles.formTextInput}
        placeholderStyle={{ color: '#fff', textAlign: 'center', fontSize: 24 }}
        selectedTextStyle={{ color: '#fff', textAlign: 'center', fontSize: 24 }}
        data={parsedOptions || []}
        labelField="label"
        valueField="value"
        placeholder={field.text}
        onChange={async (item) => {
          setFieldValue(item.value);
          await setValue(field.text, fieldValue!.toString());
        }}
        value={fieldValue}
      />
    </View>
  );
}

export default function Form({ data }: { data: iRegisterCarousel }) {
  return (
    <View style={slideStyles.form}>
      <Text style={slideStyles.formTextHeader}>
        First, let's start with some basic info.
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          gap: 32,
        }}
      >
        {data.fields?.map((field) => {
          return field.type === 'input' ? (
            <InputComponent field={field} key={field.text} />
          ) : field.type === 'dropdown' ? (
            <PickerComponent field={field} key={field.text} />
          ) : (
            <InputComponent field={field} key={field.text} />
          );
        })}
      </View>
    </View>
  );
}
