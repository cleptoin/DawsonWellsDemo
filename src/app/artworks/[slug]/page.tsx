import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ARTWORKS_DATA } from '@/data/artworks';
import ArtworkDetailClient from './ArtworkDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTWORKS_DATA.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = ARTWORKS_DATA.find((a) => a.slug === slug);

  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : null)
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || 'https://dawsonwellsdemo.vercel.app';
  const artworkUrl = `${siteUrl}/artworks/${artwork.slug}`;
  const imageUrl = `${siteUrl}${artwork.primaryImage}`;

  return {
    title: `${artwork.title} (${artwork.year}) — ${artwork.category}`,
    description: `${artwork.title} (${artwork.year}) by Dawson Wells. ${artwork.medium}, ${artwork.dimensionsImperial} (${artwork.dimensionsMetric}). ${artwork.series}. Dawson Wells Gallery Archive.`,
    alternates: {
      canonical: artworkUrl,
    },
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: `${artwork.title} | Dawson Wells Gallery`,
      description: artwork.curatorialNote,
      url: artworkUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1400,
          height: 1050,
          alt: `${artwork.title} by Dawson Wells`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artwork.title} | Dawson Wells Gallery`,
      description: artwork.curatorialNote,
      images: [imageUrl],
    },
  };
}

export default async function ArtworkDetailPage({ params }: Props) {
  const { slug } = await params;
  const artworkIndex = ARTWORKS_DATA.findIndex((a) => a.slug === slug);

  if (artworkIndex === -1) {
    notFound();
  }

  const artwork = ARTWORKS_DATA[artworkIndex];
  const prevArtwork = ARTWORKS_DATA[(artworkIndex - 1 + ARTWORKS_DATA.length) % ARTWORKS_DATA.length];
  const nextArtwork = ARTWORKS_DATA[(artworkIndex + 1) % ARTWORKS_DATA.length];

  const relatedArtworks = ARTWORKS_DATA.filter(
    (a) => a.category === artwork.category && a.id !== artwork.id
  ).slice(0, 3);

  return (
    <ArtworkDetailClient
      artwork={artwork}
      prevArtwork={prevArtwork}
      nextArtwork={nextArtwork}
      relatedArtworks={relatedArtworks}
    />
  );
}
