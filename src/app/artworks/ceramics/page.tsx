import { Metadata } from 'next';
import MediumCategoryView from '@/components/MediumCategoryView';

export const metadata: Metadata = {
  title: 'Ceramic Sculptures | Dawson Wells Gallery',
  description: 'Monumental hand-coiled stoneware vessels and monolithic slab totems fired in wood-burning anagama kilns for 96 hours with volcanic ash glazes.',
};

export default function CeramicsPage() {
  return <MediumCategoryView category="Ceramics" />;
}
