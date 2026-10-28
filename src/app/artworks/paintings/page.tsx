import { Metadata } from 'next';
import MediumCategoryView from '@/components/MediumCategoryView';

export const metadata: Metadata = {
  title: 'Paintings Collection | Dawson Wells Gallery',
  description: 'Monumental monochrome paintings in oil, Carrara marble dust, cold beeswax, and natural indigo on raw Belgian linen.',
};

export default function PaintingsPage() {
  return <MediumCategoryView category="Paintings" />;
}
