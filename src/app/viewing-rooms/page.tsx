'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Lock,
  Check,
  ShieldCheck,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { ARTWORKS_DATA } from '@/data/artworks';
import { useInquiry } from '@/context/InquiryContext';
import ArtworkCard from '@/components/ArtworkCard';
import styles from './viewing-rooms.module.css';

export default function ViewingRoomsPage() {
  const { openInquiry } = useInquiry();
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [passcodeUnlocked, setPasscodeUnlocked] = useState(false);

  // Selected works for this curated viewing room sequence
  const viewingRoomWorks = ARTWORKS_DATA.filter(a =>
    [
      'photography-breakwater-in-atlantic-mist-study-i',
      'painting-mineral-field-bone-umber',
      'ceramic-folded-stoneware-vessel-ash-glaze-i',
      'drawing-orbit-study-charcoal-pure-graphite-i',
      'print-counterform-woodblock-architectural-relief-i',
      'photography-luminescence-no-07-atmospheric-gradient',
    ].includes(a.slug)
  );

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toUpperCase() === 'WELLS2025' || passcode.trim().length > 3) {
      setPasscodeUnlocked(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  return (
    <div className={styles.viewingRoomsPage}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackdrop}>
          <Image
            src="/images/artworks/gallery-interior.jpg"
            alt="Dawson Wells Gallery Online Viewing Room Context"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroGradient}></div>

        <div className={`container-wide ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.liveDot}></span>
            <span>Online Viewing Room • Optional Future Feature Concept</span>
          </div>

          <h1 className={styles.heroTitle}>
            The Architecture of Silence:<br />
            <em>Monoliths & Atlantic Mist</em>
          </h1>

          <p className={styles.heroLead}>
            A focused curatorial presentation pairing Dawson Wells’ large-format platinum coastal exposures with monumental mineral canvases and wood-fired stoneware vessels. Conceived as a quiet digital salon for sustained contemplation and private collector acquisition.
          </p>

          <div className={styles.heroMetaStrip}>
            <div className={styles.heroMetaItem}>
              <span>Curated by:</span>
              <strong>Dawson Wells Curatorial Directorate</strong>
            </div>
            <div className={styles.heroMetaItem}>
              <span>Presentation Window:</span>
              <strong>October 2024 – February 2025</strong>
            </div>
            <div className={styles.heroMetaItem}>
              <span>Works Included:</span>
              <strong>6 Curated Holding Records</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ROOM OVERVIEW */}
      <section className={styles.featuredRoomSection}>
        <div className="container-wide">
          <div className={styles.roomCardFeatured}>
            <div className={styles.roomImageWrap}>
              <Image
                src="/images/artworks/photo-01.jpg"
                alt="The Architecture of Silence Exhibition"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 55vw"
                className={styles.roomFeaturedImg}
              />
              <div className={styles.roomImageOverlay}>
                <span className={styles.roomWorksCount}>
                  <Eye size={13} />
                  <span>Curated Digital Salon</span>
                </span>
              </div>
            </div>

            <div className={styles.roomBody}>
              <span className={styles.roomDates}>Curatorial Presentation • Optional Future Feature Concept</span>
              <h2 className={styles.roomTitle}>The Architecture of Silence</h2>
              <span className={styles.roomCurator}>Essay & Installation Concept by Senior Curatorial Directorate (Placeholder)</span>

              <p className={styles.roomEssayPreview}>
                &ldquo;Where does solid stone end and oceanic vapor begin? In this curated salon, Dawson Wells isolates the precise threshold where structural geometry meets elemental flux. The silver gelatin surfaces of the coastal breakwaters converse directly with the mineral-crusted impasto of the canvases, creating an optical resonance of stillness.&rdquo;
              </p>

              <div className={styles.roomActions}>
                <button
                  className="btn-primary"
                  onClick={() => openInquiry(null, 'viewing')}
                >
                  <span>Request Private Viewing Room Dossier</span>
                  <ArrowRight size={14} />
                </button>
                <Link href="#sequence" className="btn-secondary">
                  <span>Explore Curated Sequence</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURATED SEQUENCE OF ARTWORKS */}
      <section id="sequence" className={styles.worksSequenceSection}>
        <div className="container-wide">
          <div className={styles.sectionHeadingRow}>
            <div>
              <span className="gallery-label">Exhibition Sequence</span>
              <h2 className={styles.sectionHeadingTitle}>Works in this Presentation</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              6 Select Master Works • Accompanied by Complete Provenance & Conservation Dossiers
            </p>
          </div>

          <div className={styles.worksGridSequence}>
            {viewingRoomWorks.map(artwork => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                viewMode="grid"
              />
            ))}
          </div>

          {/* 4. PRIVATE VIP PORTAL SECTION */}
          <div className={styles.privatePortalSection}>
            <div className={styles.privatePortalText}>
              <span className="gallery-label">Private Client Access</span>
              <h3>Bespoke Collector Presentations</h3>
              <p>
                Dawson Wells Gallery curates private, time-limited viewing rooms for institutional curators, foundation trustees, and private collectors acquiring across multiple disciplines.
              </p>
              <ul className={styles.vipPerksList}>
                <li>
                  <ShieldCheck size={16} color="var(--accent-gold)" />
                  <span>Confidential acquisition terms & collector condition reports</span>
                </li>
                <li>
                  <Check size={16} color="var(--accent-gold)" />
                  <span>Uncompressed multi-gigapixel conservation zoom captures</span>
                </li>
                <li>
                  <Sparkles size={16} color="var(--accent-gold)" />
                  <span>Direct consultation with Mr. Dawson Wells & Senior Curators</span>
                </li>
              </ul>
            </div>

            <div className={styles.privateFormBox}>
              <h4>Access Private Presentation</h4>
              <p>Enter your assigned collector VIP access code or request an invitation.</p>

              {passcodeUnlocked ? (
                <div style={{ padding: '1rem', background: 'rgba(85, 212, 131, 0.1)', border: '1px solid #55D483' }}>
                  <span style={{ color: '#2E8540', fontSize: '0.85rem', fontWeight: 600 }}>
                    ✓ VIP Access Granted. Full Collector Dossiers Unlocked.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleUnlock}>
                  <input
                    type="text"
                    placeholder="Enter Private Passcode (e.g. WELLS2025)"
                    className={styles.portalInput}
                    value={passcode}
                    onChange={e => setPasscode(e.target.value)}
                  />
                  {passcodeError && (
                    <span style={{ color: '#C93B2B', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>
                      Invalid access code. Please request credentials below.
                    </span>
                  )}
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginBottom: '0.75rem' }}>
                    <Lock size={13} />
                    <span>Unlock Presentation</span>
                  </button>
                  <button
                    type="button"
                    className="btn-link"
                    style={{ fontSize: '0.75rem', width: '100%', textAlign: 'center' }}
                    onClick={() => openInquiry(null, 'general')}
                  >
                    <span>Request VIP Collector Invitation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
