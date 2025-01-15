import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import slideStyles from './styles';
import { getAllValues } from './asyncStorage';
import { iUserData } from '@/types/types';

export default function PaceAndConfirm() {
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

  return <View style={slideStyles.header}></View>;
}
