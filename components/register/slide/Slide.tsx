import { iRegisterCarousel } from '@/types/types';
import Header from './Header';
import Form from './Form';
import PaceAndConfirm from './PaceAndConfirm';

export default function Slide({ data }: { data: iRegisterCarousel }) {
  if (data.type === 'header') return <Header />;

  if (data.type === 'register') return <Form data={data} />;

  return <PaceAndConfirm />;
}
