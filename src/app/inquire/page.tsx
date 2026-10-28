import { Metadata } from 'next';
import Link from 'next/link';
import ContactPage from '../contact/page';

export const metadata: Metadata = {
  title: 'Inquiry & Private Acquisition | Dawson Wells Gallery',
  description: 'Initiate a curatorial inquiry, request artwork pricing and provenance dossiers, or schedule private viewing salons in New York and London.',
};

export default function InquirePage() {
  return <ContactPage />;
}
