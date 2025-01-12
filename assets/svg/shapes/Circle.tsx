import Svg, { Circle } from 'react-native-svg';

export default function CircleSvg({
  size,
  color,
}: {
  size: number;
  color: string;
}) {
  return (
    <Svg height={size} width={size}>
      <Circle r={'45%'} cx={size / 2} cy={size / 2} fill={color} />
    </Svg>
  );
}
