import { Field } from '@/types/types';
import { Dispatch, useState } from 'react';
import { TextInput } from 'react-native';
import slideStyles from '../styles/styles';
import { getValue, setValue } from '../functions/asyncStorage';

export default function InputComponent({
  field,
  enablePace,
  setEnablePace,
}: {
  field: Field;
  enablePace: boolean;
  setEnablePace: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [fieldValue, setFieldValue] = useState('');
  return (
    <TextInput
      value={fieldValue}
      placeholderTextColor={'#fff'}
      onChangeText={setFieldValue}
      placeholder={field.text}
      keyboardType={
        field.text === 'Current Weight' || field.text === 'Target Weight'
          ? 'number-pad'
          : 'default'
      }
      style={slideStyles.formTextInput}
      onEndEditing={async () => {
        if (fieldValue === '') return;
        await setValue(field.text, fieldValue);
        if (enablePace) setEnablePace(false);
        // console.log(await getValue(field.text));
        if (field.text === 'Current Weight' || field.text === 'Target Weight') {
          await getValue('current_weight');
          await getValue('target_weight');
        }
      }}
    />
  );
}
