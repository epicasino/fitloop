import React from 'react';
import { Text, View } from 'react-native';

export default function LatestMeal({
  meal,
}: {
  meal:
    | {
        id: number;
        time: string;
        calories: number;
        title: string;
        notes: string | null;
        dayId: number;
      }
    | undefined;
}) {
  return (
    meal && (
      <View>
        <Text>Latest Meal Info.</Text>
        <Text>
          {meal.title
            .charAt(0)
            .toUpperCase()
            .concat(meal.title.slice(1, meal.title.length))}
          : {meal.calories} kCal
        </Text>
      </View>
    )
  );
}
