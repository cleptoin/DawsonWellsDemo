import { Metadata } from 'next';
import MediumCategoryView from '@/components/MediumCategoryView';

export const metadata: Metadata = {
  title: 'Fine Art Prints & Editions | Dawson Wells Gallery',
  description: 'Limited edition spit-bite aquatints, multi-block pear woodcuts on washi paper, and hand-pulled stone lithographs from Bavarian limestone.',
};

export default function PrintsPage() {
  return <MediumCategoryView category="Prints" />;
}
