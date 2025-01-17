import React from 'react';
import FitloopLogo from '@/assets/svg/logo/FitloopLogo';
import ArrowSvg from '@/assets/svg/shapes/Arrow';
import { View, Text } from 'react-native';
import slideStyles from './styles/styles';

export default function Header() {
  return (
    <View style={slideStyles.header}>
      <FitloopLogo width={350} />
      <Text style={slideStyles.headerText}>Let's Get Started!</Text>
      <ArrowSvg />
    </View>
  );
}
