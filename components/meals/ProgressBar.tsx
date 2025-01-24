import React from 'react';
import { Text, View } from 'react-native';
import { mealsPageStyles } from './styles/styles';

export default function ProgressBar({
  calorieIntake,
  calorieTarget,
  cutOrBulk,
  meals,
}: {
  calorieIntake: number;
  calorieTarget: number;
  cutOrBulk: boolean;
  meals: number;
}) {
  const progress = calorieIntake / calorieTarget;
  const color = cutOrBulk
    ? progress <= 1
      ? '#DE2154'
      : '#29FF52'
    : progress <= 1
    ? '#29FF52'
    : '#DE2154';
  const barWidth = progress * 100 >= 115 ? 100 : (progress * 100) / 1.15;

  const message =
    meals > 0
      ? cutOrBulk
        ? progress <= 1
          ? 'You Got This! 💪'
          : 'Good Work! 🔥'
        : progress <= 1
        ? 'Keep It Up! 🔥'
        : '😬'
      : 'Lets Start Logging!';

  return (
    <View style={{ alignItems: 'center', gap: 10 }}>
      <View style={mealsPageStyles.progressBarContainer}>
        <View
          style={{
            width: `${barWidth}%`,
            height: '100%',
            backgroundColor: color,
            borderRadius: barWidth === 100 ? 15 : 0,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        ></View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            width: `15%`,
            height: '100%',
            backgroundColor: '#fff',
            opacity: 0.2,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        ></View>
      </View>
      <View style={{ alignItems: 'center', gap: 5 }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          {calorieIntake} / {Math.round(calorieTarget)} kCal
        </Text>
        <Text style={{ color: '#fff', fontSize: 20 }}>{message}</Text>
      </View>
    </View>
  );
}

// userData.cutOrBulk
//                   ? dayData!.calorieIntake >= dayData!.calorieTarget
//                     ? '#29FF52'
//                     : '#DE2154'
//                   : dayData!.calorieIntake <= dayData!.calorieTarget
//                   ? '#29FF52'
//                   : '#DE2154'
