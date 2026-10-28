import { Metadata } from 'next';
import MediumCategoryView from '@/components/MediumCategoryView';

export const metadata: Metadata = {
  title: 'Photography Collection | Dawson Wells Gallery',
  description: 'Explore large-format 8×10 photography, hand-coated platinum contact prints, and archival silver gelatin studies from the Dawson Wells collection.',
};

export default function PhotographyPage() {
  return <MediumCategoryView category="Photography" />;
}
