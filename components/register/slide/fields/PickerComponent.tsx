import { Field } from '@/types/types';
import RNPickerSelect from 'react-native-picker-select';
import { setValue } from '../functions/asyncStorage';
import { useState } from 'react';

export default function PickerComponent({ field }: { field: Field }) {
  const [fieldValue, setFieldValue] = useState<number | null>(null);

  const parsedOptions =
    (field.options &&
      field.options.map((option) => {
        return { label: option.text, value: option.value.toString() };
      })) ||
    [];

  // console.log(parsedOptions);

  return (
    <RNPickerSelect
      placeholder={{ label: field.text, value: '' }}
      items={parsedOptions}
      value={fieldValue}
      style={{
        inputIOS: {
          fontSize: 24,
          width: 200,
          height: 'auto',
          color: '#fff',
          borderBottomColor: '#fff',
          borderBottomWidth: 5,
          textAlign: 'center',
        },
        placeholder: {
          opacity: 1,
          color: '#fff',
        },
      }}
      onValueChange={async (value) => {
        setFieldValue(value);
        await setValue(field.text, fieldValue!.toString());
        // console.log(await getValue(field.text));
      }}
      key={field.text}
      darkTheme
      textInputProps={{ pointerEvents: 'none' }}
    />
  );
}
