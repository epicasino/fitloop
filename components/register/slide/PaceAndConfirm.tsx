import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import slideStyles from './styles/styles';
import { getAllValues } from './functions/asyncStorage';
import { iRegisterCarousel, iUserData } from '@/types/types';
import RNPickerSelect from 'react-native-picker-select';

function SelectorComponent({
  cutOrBulk,
  data,
  userData,
  setUserData,
}: {
  data: iRegisterCarousel;
  userData?: iUserData;
  cutOrBulk: boolean;
  setUserData: React.Dispatch<React.SetStateAction<iUserData | undefined>>;
}) {
  const [fieldValue, setFieldValue] = useState<number>();

  const parsedOptions = data.paces![cutOrBulk ? 1 : 0].options.map((option) => {
    return { label: option.type, value: option.value };
  });

  // console.log(pickerText);

  return (
    <RNPickerSelect
      placeholder={{
        label: 'Select Pace',
      }}
      items={parsedOptions}
      value={fieldValue}
      style={{
        inputIOS: {
          fontSize: 24,
          width: 250,
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
      onValueChange={async (value: number) => {
        if (value === null) return;
        setFieldValue(value);
        setUserData({ ...userData!, pace: value });
        // console.log(userData)
      }}
      darkTheme
      textInputProps={{ pointerEvents: 'none' }}
    />
  );
}

export default function PaceAndConfirm({
  data,
  index,
}: {
  data: iRegisterCarousel;
  index: number;
}) {
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
      const cutOrBulk = parseInt(current_weight!) < parseInt(target_weight!);
      const parsedData: iUserData = {
        birthday,
        gender: gender === 'false' ? false : true,
        currentWeight: parseInt(current_weight!),
        targetWeight: parseInt(target_weight!),
        exerciseLevel: parseInt(exercise_level!),
        height: parseInt(feet!) * 12 + parseInt(inch!),
        name,
        pace: null,
        cutOrBulk,
      };
      setUserData(parsedData);
    };
    fetchValues();
    // console.log(userData);
  }, [index]);

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
        }}
      >
        <View style={{ alignItems: 'center', gap: 5 }}>
          <Text style={{ color: '#fff' }}>
            {userData?.cutOrBulk === true ? 'Gain' : 'Loss'} Pace
          </Text>
          <SelectorComponent
            cutOrBulk={userData?.cutOrBulk === true}
            data={data}
            userData={userData}
            setUserData={setUserData}
          />
        </View>
        <Pressable
          style={{
            width: 200,
            height: 50,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            opacity: !userData?.pace ? 0.5 : 1,
          }}
          disabled={!userData?.pace ? true : false}
        >
          <Text
            style={{
              color: '#fff',
              width: '100%',
              textAlign: 'center',
              fontSize: 20,
            }}
          >
            Confirm And Start!
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
