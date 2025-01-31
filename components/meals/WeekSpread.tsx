import CircleSvg from '@/assets/svg/shapes/Circle';
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { mealsPageStyles } from './styles/styles';
import useWeekColors from '@/hooks/useWeekColors';

export default function WeekSpread({
  selectedDate,
  setSelectedDate,
  modal,
}: {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  modal: boolean;
}) {
  const week = useWeekColors(selectedDate, modal);

  // console.log(week);

  return (
    <View style={mealsPageStyles.weekSpreadContainer}>
      {week.map((dateObj) => {
        // selectColor(date);
        // console.log(selectedDate);
        return (
          <Pressable
            key={dateObj.date}
            style={{ alignItems: 'center', gap: 5 }}
            onPress={() => {
              setSelectedDate(dateObj.date);
            }}
          >
            <View style={{ opacity: dateObj.date === selectedDate ? 1 : 0.2 }}>
              <CircleSvg
                size={dateObj.date === selectedDate ? 50 : 40}
                color={dateObj.colors}
              />
            </View>
            <Text style={{ color: '#fff' }}>
              {new Date(dateObj.date).getDate()}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
