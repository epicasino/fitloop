import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { mealsPageStyles } from './styles/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function getIcon(mealType: string) {
  const color = '#fff';
  const size = 45;
  switch (mealType) {
    case 'breakfast':
      return <MaterialIcons name="egg-alt" size={size} color={color} />;
    case 'lunch':
      return (
        <MaterialCommunityIcons name="hamburger" size={size} color={color} />
      );
    case 'dinner':
      return (
        <MaterialCommunityIcons name="food-steak" size={size} color={color} />
      );
    case 'other':
      return (
        <MaterialCommunityIcons name="food-apple" size={size} color={color} />
      );
  }
}

export default function LoggedMeals({
  mealsData,
  setEditMealData,
  setModal,
}: {
  mealsData: {
    id: number;
    title: string;
    time: string;
    calories: number;
    notes: string | null;
    dayId: number;
  }[];
  setEditMealData: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          title: string;
          time: string;
          calories: number;
          notes: string | null;
          dayId: number;
        }
      | undefined
    >
  >;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View style={mealsPageStyles.loggedMealsContainer}>
      <Text style={mealsPageStyles.loggedMealsHeaderText}>Logged Meals</Text>
      <ScrollView contentContainerStyle={{ gap: 20 }}>
        {mealsData.map((meal) => {
          return (
            <Pressable
              style={mealsPageStyles.loggedMealsCard}
              key={meal.id}
              onPress={() => {
                setEditMealData(meal);
                setModal(true);
              }}
            >
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 25 }}
              >
                {getIcon(meal.title)}
                <Text style={{ color: '#fff', fontSize: 24 }}>
                  {meal.title
                    .charAt(0)
                    .toUpperCase()
                    .concat(meal.title.slice(1, meal.title.length))}
                </Text>
              </View>
              <Text style={{ color: '#fff', fontSize: 24 }}>
                {meal.calories} kCal
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
