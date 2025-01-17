import { useState } from 'react';
import { View, Text } from 'react-native';
import slideStyles from './styles/styles';
import { iRegisterCarousel } from '@/types/types';
import InputComponent from './fields/InputComponent';
import PickerComponent from './fields/PickerComponent';
import DateComponent from './fields/DateComponent';
import HeightComponent from './fields/HeightComponent';

export default function Form({ data }: { data: iRegisterCarousel }) {
  const [enablePace, setEnablePace] = useState(false);

  return (
    <View style={slideStyles.form}>
      <Text style={slideStyles.formTextHeader}>{data.text}</Text>
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
            <InputComponent
              field={field}
              key={field.text}
              setEnablePace={setEnablePace}
              enablePace={enablePace}
            />
          ) : field.type === 'dropdown' ? (
            <PickerComponent field={field} key={field.text} />
          ) : field.type === 'birthday' ? (
            <DateComponent field={field} key={field.text} />
          ) : (
            <HeightComponent field={field} key={field.text} />
          );
        })}
      </View>
    </View>
  );
}
