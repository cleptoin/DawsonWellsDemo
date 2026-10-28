'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { Artwork } from '@/data/artworks';
import { useInquiry } from '@/context/InquiryContext';
import styles from './ArtworkCard.module.css';

interface ArtworkCardProps {
  artwork: Artwork;
  viewMode?: 'grid' | 'masonry' | 'list';
  priority?: boolean;
}

export default function ArtworkCard({
  artwork,
  viewMode = 'grid',
  priority = false,
}: ArtworkCardProps) {
  const { openInquiry } = useInquiry();

  const handleInquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openInquiry(artwork, 'artwork');
  };

  if (viewMode === 'list') {
    return (
      <div className={styles.listRow}>
        <div className={styles.listImageWrap}>
          <Link href={`/artworks/${artwork.slug}`}>
            <Image
              src={artwork.primaryImage}
              alt={artwork.title}
              width={160}
              height={120}
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>

        <div className={styles.listDetails}>
          <span className={styles.listCategory}>{artwork.category}</span>
          <Link href={`/artworks/${artwork.slug}`} className={styles.listTitle}>
            {artwork.title}
          </Link>
          <span className={styles.listMedium}>{artwork.medium}</span>
        </div>

        <div className={styles.listMeta}>
          <span className={styles.listYear}>{artwork.year}</span>
          <span className={styles.listDimensions}>
            {artwork.dimensionsImperial}
          </span>
          <span className={styles.listDimensionsMetric}>
            {artwork.dimensionsMetric}
          </span>
        </div>

        <div className={styles.listStatus}>
          <span className={`${styles.statusBadge} ${styles[artwork.status.replace(/\s+/g, '')]}`}>
            {artwork.status}
          </span>
        </div>

        <div className={styles.listActions}>
          <button
            className={styles.inquireButtonList}
            onClick={handleInquireClick}
            title="Inquire about this artwork"
          >
            Inquire
          </button>
          <Link
            href={`/artworks/${artwork.slug}`}
            className={styles.viewLinkList}
            title="View artwork details"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  // Grid / Masonry card
  return (
    <div className={`${styles.card} ${viewMode === 'masonry' ? styles.cardMasonry : ''}`}>
      <Link href={`/artworks/${artwork.slug}`} className={styles.imageContainer}>
        <div className={styles.imageInner}>
          <Image
            src={artwork.primaryImage}
            alt={artwork.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.cardImage}
            priority={priority}
          />
        </div>

        {/* Subtle Luxury Gallery Watermark */}
        <div className={styles.watermarkOverlay}>
          <Image
            src="/images/brand/dw-logo.png"
            alt="DW"
            width={14}
            height={14}
            className={styles.watermarkLogo}
          />
          <span className={styles.watermarkText}>DAWSON WELLS ARCHIVE</span>
        </div>

        {/* Hover Quick Action */}
        <div className={styles.hoverOverlay}>
          <button
            className={styles.quickInquireBtn}
            onClick={handleInquireClick}
          >
            <MessageSquare size={13} />
            <span>Inquire</span>
          </button>
          <span className={styles.viewText}>
            View Artwork <ArrowUpRight size={13} />
          </span>
        </div>
      </Link>

      <div className={styles.infoArea}>
        <div className={styles.topMeta}>
          <span className={styles.category}>{artwork.category}</span>
          <span className={styles.year}>{artwork.year}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/artworks/${artwork.slug}`}>
            {artwork.title}
          </Link>
        </h3>

        <p className={styles.medium}>{artwork.medium}</p>

        <div className={styles.bottomMeta}>
          <span className={styles.dimensions}>
            {artwork.dimensionsImperial} ({artwork.dimensionsMetric})
          </span>
          <span className={styles.statusIndicator}>
            {artwork.status}
          </span>
        </div>
      </div>
    </div>
  );
}
