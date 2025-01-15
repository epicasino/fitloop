import { Dispatch, useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import slideStyles from './styles';
import { Field, iRegisterCarousel } from '@/types/types';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { getValue, setValue } from './asyncStorage';

function InputComponent({
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

function PickerComponent({ field }: { field: Field }) {
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

function DateComponent({ field }: { field: Field }) {
  const [date, setDate] = useState(new Date());

  return (
    <View
      style={{
        alignItems: 'center',
        width: 200,
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 5,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 24 }}>{field.text}</Text>
      <DateTimePicker
        mode="date"
        value={date}
        onChange={async (
          event: DateTimePickerEvent,
          date: Date | undefined
        ) => {
          if (date) {
            setDate(date);
            await setValue(
              field.text,
              date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })
            );
            // console.log(await getValue(field.text));
          }
        }}
      />
    </View>
  );
}

function HeightComponent({ field }: { field: Field }) {
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
