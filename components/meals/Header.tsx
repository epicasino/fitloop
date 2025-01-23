import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../home/styles/styles';

export default function Header({ date }: { date: string }) {
  return (
    <View style={{}}>
      <Text style={headerStyles.text}>Meals</Text>
      <Text style={headerStyles.date}>
        {new Date(date).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        })}
      </Text>
    </View>
  );
}
