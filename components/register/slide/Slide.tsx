import { iRegisterCarousel, iUserData } from '@/types/types';
import Header from './Header';
import slideStyles from './styles';
import Form from './Form';
import { View } from 'react-native';

export default function Slide({ data }: { data: iRegisterCarousel }) {
  if (data.type === 'header') return <Header />;

  if (data.type === 'register') return <Form data={data} />;

  return <View style={slideStyles.form}></View>;
}
