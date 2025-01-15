import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import slideStyles from './styles';
import { getAllValues } from './asyncStorage';
import { iRegisterCarousel, iUserData } from '@/types/types';

export default function PaceAndConfirm({ data }: { data: iRegisterCarousel }) {
  const [userData, setUserData] = useState<iUserData>();

  useEffect(() => {
    const fetchValues = async () => {
      const {
        birthday,
        gender,
        current_weight,
        exercise_level,
        feet,
        inch,
        name,
        target_weight,
      } = await getAllValues();

      const cutOrBulk = parseInt(current_weight!) > parseInt(target_weight!);

      setUserData({
        birthday,
        gender: gender === 'false' ? false : true,
        currentWeight: parseInt(current_weight!),
        targetWeight: parseInt(target_weight!),
        exerciseLevel: parseInt(exercise_level!),
        height: parseInt(feet!) * 12 + parseInt(inch!),
        name,
        pace: null,
        cutOrBulk,
      });
    };
    fetchValues();
  }, []);

  // console.log(data);

  return (
    <View style={slideStyles.header}>
      <Text
        style={{
          color: '#fff',
          fontSize: 32,
          textAlign: 'center',
          position: 'absolute',
          top: 120,
        }}
      >
        {data.text}
      </Text>
      {/* {userData?.cutOrBulk } */}
    </View>
  );
}

{
  /* <RNPickerSelect
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
      /> */
}
