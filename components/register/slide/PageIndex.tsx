import CircleSvg from '@/assets/svg/shapes/Circle';
import { iRegisterCarousel } from '@/types/types';
import React from 'react';
import { View } from 'react-native';

export default function PageIndex({
  index,
  registerData,
}: {
  index: number;
  registerData: iRegisterCarousel[];
}) {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 10,
      }}
    >
      <CircleSvg size={10} color={index === 0 ? 'white' : 'grey'} />
      <CircleSvg size={10} color={index === 1 ? 'white' : 'grey'} />
      <CircleSvg size={10} color={index === 2 ? 'white' : 'grey'} />
      {registerData.length === 4 && (
        <CircleSvg size={10} color={index === 3 ? 'white' : 'grey'} />
      )}
    </View>
  );
}
