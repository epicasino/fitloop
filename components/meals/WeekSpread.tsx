import CircleSvg from '@/assets/svg/shapes/Circle';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { mealsPageStyles } from '../home/styles/styles';
import useWeekColors from '@/hooks/useWeekColors';

export default function WeekSpread({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}) {
  const week = useWeekColors(selectedDate);

  console.log(week);

  return (
    <View style={mealsPageStyles.weekSpreadContainer}>
      {week.map((dateObj) => {
        // selectColor(date);
        // console.log(selectedDate);
        return (
          <View key={dateObj.date} style={{ alignItems: 'center', gap: 5 }}>
            <View style={{ opacity: dateObj.date === selectedDate ? 1 : 0.2 }}>
              <CircleSvg
                size={dateObj.date === selectedDate ? 50 : 40}
                color="#fff"
              />
            </View>
            <Text style={{ color: '#fff' }}>
              {new Date(dateObj.date).getDate()}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
