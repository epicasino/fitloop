import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export default function PlusBtn({ size }: { size: number }) {
  return (
    <Svg height={size} width={size} viewBox="0 0 31 31" fill="none">
      <Path
        d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z"
        fill="black"
      />
      <Path
        d="M17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5V14H8.5C7.67157 14 7 14.6716 7 15.5C7 16.3284 7.67157 17 8.5 17H14V22.5C14 23.3284 14.6716 24 15.5 24C16.3284 24 17 23.3284 17 22.5V17H22.5C23.3284 17 24 16.3284 24 15.5C24 14.6716 23.3284 14 22.5 14H17V8.5Z"
        fill="white"
      />
    </Svg>
  );
}
