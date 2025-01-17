import { useState } from 'react';
import { Text, View } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Field } from '@/types/types';
import { setValue } from '../functions/asyncStorage';

export default function DateComponent({ field }: { field: Field }) {
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
