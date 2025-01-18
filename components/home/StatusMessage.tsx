import React from 'react';
import { Text } from 'react-native';
import { messageStyles } from './styles/styles';

export default function StatusMessage() {
  return <Text style={messageStyles.text}>You're On Track! 🔥</Text>;
}
