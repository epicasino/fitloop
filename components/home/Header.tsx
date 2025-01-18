import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from './styles/styles';

export default function Header({ name }: { name: string }) {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Hello {name} 👋</Text>
      <Text style={headerStyles.date}>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        })}
      </Text>
    </View>
  );
}
