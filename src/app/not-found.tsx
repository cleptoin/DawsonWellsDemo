import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Eye, Mail } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Curatorial Holding Not Found (404) | Dawson Wells Gallery',
  description: 'The requested artwork record or exhibition salon is temporarily unavailable or relocated.',
};

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.inner}>
        <span className={styles.codeBadge}>Catalog Reference 404 • Relocated</span>
        
        <h1 className={styles.heading}>
          Curatorial Holding<br />
          <em>Not Located</em>
        </h1>

        <p className={styles.lead}>
          The artwork record, curatorial monograph, or exhibition salon you requested is either in private accession, undergoing archival re-cataloging, or has moved within the gallery archive.
        </p>

        <div className={styles.actionsGrid}>
          <Link href="/" className={styles.btnPrimary}>
            <ArrowLeft size={14} />
            <span>Return to Gallery</span>
          </Link>
          <Link href="/artworks" className={styles.btnSecondary}>
            <Compass size={14} />
            <span>Explore Collection</span>
          </Link>
          <Link href="/viewing-rooms" className={styles.btnSecondary}>
            <Eye size={14} />
            <span>Online Viewing Room</span>
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            <Mail size={14} />
            <span>Contact Directorate</span>
          </Link>
        </div>

        <div className={styles.directLinks}>
          <Link href="/artworks/photography" className={styles.directLink}>Photography</Link>
          <Link href="/artworks/paintings" className={styles.directLink}>Paintings</Link>
          <Link href="/artworks/drawings" className={styles.directLink}>Drawings</Link>
          <Link href="/artworks/ceramics" className={styles.directLink}>Ceramics</Link>
          <Link href="/artworks/prints" className={styles.directLink}>Master Prints</Link>
          <Link href="/about" className={styles.directLink}>About Dawson Wells</Link>
        </div>
      </div>
    </div>
  );
}
