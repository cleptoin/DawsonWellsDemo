import { Metadata } from 'next';
import MediumCategoryView from '@/components/MediumCategoryView';

export const metadata: Metadata = {
  title: 'Drawings & Works on Paper | Dawson Wells Gallery',
  description: 'Pure burnished graphite, 15th-century silverpoint on bone gesso, and aged Nara sumi ink on heavy deckled Arches rag paper.',
};

export default function DrawingsPage() {
  return <MediumCategoryView category="Drawings" />;
}
