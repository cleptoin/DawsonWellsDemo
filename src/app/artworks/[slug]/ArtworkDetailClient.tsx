'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Maximize2,
  Share2,
  Printer,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Check,
  Eye,
} from 'lucide-react';
import { Artwork } from '@/data/artworks';
import { useInquiry } from '@/context/InquiryContext';
import ArtworkLightbox from '@/components/ArtworkLightbox';
import ArtworkCard from '@/components/ArtworkCard';
import styles from './artwork-detail.module.css';

interface ArtworkDetailClientProps {
  artwork: Artwork;
  prevArtwork: Artwork;
  nextArtwork: Artwork;
  relatedArtworks: Artwork[];
}

export default function ArtworkDetailClient({
  artwork,
  prevArtwork,
  nextArtwork,
  relatedArtworks,
}: ArtworkDetailClientProps) {
  const { openInquiry } = useInquiry();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [viewInRoom, setViewInRoom] = useState(false);
  const [activeTab, setActiveTab] = useState<'curatorial' | 'specs' | 'provenance'>('curatorial');
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const currentDisplayImage = artwork.images[activeImageIndex] || {
    url: artwork.primaryImage,
    caption: artwork.title,
    type: 'frontal',
  };

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dawson-wells-demo-delta.vercel.app';

  const artworkSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VisualArtwork',
        name: artwork.title,
        creator: {
          '@type': 'Person',
          name: 'Dawson Wells',
          sameAs: `${siteUrl}/about`,
        },
        artMedium: artwork.medium,
        artform: artwork.category,
        artworkSurface: artwork.medium,
        dateCreated: artwork.year,
        description: artwork.curatorialNote,
        image: `${siteUrl}${artwork.primaryImage}`,
        offers: {
          '@type': 'Offer',
          availability:
            artwork.status === 'Available'
              ? 'https://schema.org/InStock'
              : 'https://schema.org/SoldOut',
          priceCurrency: 'USD',
          url: `${siteUrl}/artworks/${artwork.slug}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Artworks',
            item: `${siteUrl}/artworks`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: artwork.category,
            item: `${siteUrl}/artworks/${artwork.category.toLowerCase()}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: artwork.title,
            item: `${siteUrl}/artworks/${artwork.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.detailPage}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkSchema) }}
      />

      {/* Breadcrumbs and Quick Nav */}
      <div className={styles.topNavStrip}>
        <div className={`container-wide ${styles.topNavInner}`}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadDivider}>/</span>
            <Link href="/artworks" className={styles.breadLink}>Artworks</Link>
            <span className={styles.breadDivider}>/</span>
            <Link href={`/artworks/${artwork.category.toLowerCase()}`} className={styles.breadLink}>
              {artwork.category}
            </Link>
            <span className={styles.breadDivider}>/</span>
            <span className={styles.breadActive}>{artwork.title}</span>
          </div>

          <div className={styles.prevNextNav}>
            <Link href={`/artworks/${prevArtwork.slug}`} className={styles.navArtworkLink} title={`Previous: ${prevArtwork.title}`}>
              <ChevronLeft size={16} />
              <span>Previous</span>
            </Link>
            <span className={styles.navSep}>|</span>
            <Link href={`/artworks/${nextArtwork.slug}`} className={styles.navArtworkLink} title={`Next: ${nextArtwork.title}`}>
              <span>Next</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Artwork Stage */}
      <div className={`container-wide ${styles.mainStage}`}>
        <div className={styles.stageGrid}>
          {/* Left: Gallery Image Stage & Multiple Angles */}
          <div className={styles.imageColumn}>
            {/* Primary Main Image Viewer */}
            <div className={styles.mainImageWrapper}>
              <div className={styles.imageActionIcons}>
                <button
                  className={`${styles.actionIconBtn} ${viewInRoom ? styles.activeActionBtn : ''}`}
                  onClick={() => setViewInRoom(!viewInRoom)}
                  title="Toggle Architectural Room Scale Perspective"
                >
                  <Eye size={15} />
                  <span>{viewInRoom ? 'Standard View' : 'View in Room'}</span>
                </button>
                <button
                  className={styles.actionIconBtn}
                  onClick={() => setLightboxOpen(true)}
                  title="Expand to Fullscreen Inspection"
                >
                  <Maximize2 size={15} />
                  <span>Inspect Detail</span>
                </button>
              </div>

              {viewInRoom ? (
                <div className={styles.roomScaleContainer}>
                  <div className={styles.roomDatumLine}>
                    <span className={styles.roomDatumLabel}>57&quot; / 145cm Museum Eye-Level Datum</span>
                  </div>
                  <div className={styles.artworkHangingFrame}>
                    <Image
                      src={currentDisplayImage.url}
                      alt={artwork.title}
                      width={1000}
                      height={750}
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className={styles.roomBenchSilhouette}></div>
                  <span className={styles.roomScaleLegend}>
                    Scale Reference: {artwork.dimensionsImperial} ({artwork.dimensionsMetric})
                  </span>
                </div>
              ) : (
                <div
                  className={styles.imageStageTarget}
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={currentDisplayImage.url}
                    alt={currentDisplayImage.caption || artwork.title}
                    width={1400}
                    height={1050}
                    priority
                    className={styles.artworkMainImg}
                  />
                </div>
              )}

              {currentDisplayImage.caption && !viewInRoom && (
                <div className={styles.imageCaptionBar}>
                  <span>{currentDisplayImage.caption}</span>
                  <span className={styles.viewTypeBadge}>{currentDisplayImage.type}</span>
                </div>
              )}
            </div>

            {/* Multi-Angle Thumbnails / Views Bar */}
            {artwork.images.length > 1 && (
              <div className={styles.multiAnglesBar}>
                <span className="gallery-label" style={{ marginBottom: '0.5rem', display: 'block' }}>
                  Multiple Curatorial Views ({artwork.images.length} Perspectives):
                </span>
                <div className={styles.thumbsRow}>
                  {artwork.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`${styles.thumbButton} ${idx === activeImageIndex ? styles.activeThumbButton : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <Image
                        src={img.url}
                        alt={img.caption}
                        width={90}
                        height={70}
                        style={{ objectFit: 'cover' }}
                      />
                      <span className={styles.thumbLabel}>{img.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Curatorial Specifications & Inquiry Actions */}
          <div className={styles.metadataColumn}>
            <div className={styles.metaHeader}>
              <div className={styles.categoryStatusRow}>
                <Link
                  href={`/artworks/${artwork.category.toLowerCase()}`}
                  className={styles.categoryBadge}
                >
                  {artwork.category}
                </Link>
                <span className={`${styles.statusPill} ${styles[artwork.status.replace(/\s+/g, '')]}`}>
                  {artwork.status}
                </span>
              </div>

              <h1 className={styles.artworkTitle}>{artwork.title}</h1>
              <p className={styles.artworkYear}>{artwork.year}</p>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className={styles.specsHighlightBox}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Medium:</span>
                <span className={styles.specValue}>{artwork.medium}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Dimensions:</span>
                <span className={styles.specValue}>
                  {artwork.dimensionsImperial} <span className={styles.metricVal}>({artwork.dimensionsMetric})</span>
                </span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Edition / Series:</span>
                <span className={styles.specValue}>{artwork.edition} • {artwork.series}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Framing:</span>
                <span className={styles.specValue}>{artwork.framing}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Current Location:</span>
                <span className={styles.specValue}>{artwork.location}</span>
              </div>
            </div>

            {/* Inquire & Engagement CTA Block */}
            <div className={styles.ctaCard}>
              <div className={styles.ctaHeader}>
                <span className="gallery-label">Acquisitions &amp; Viewings</span>
                <p className={styles.ctaPriceNote}>Pricing and technical provenance available upon private request.</p>
              </div>

              <div className={styles.ctaButtonsGroup}>
                <button
                  className="btn-primary"
                  style={{ width: '100%', padding: '1.1rem' }}
                  onClick={() => openInquiry(artwork, 'artwork')}
                >
                  <span>Inquire About This Artwork</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.95rem' }}
                  onClick={() => openInquiry(artwork, 'viewing')}
                >
                  <span>Schedule Private Viewing in Salon</span>
                </button>
              </div>

              <div className={styles.utilityActions}>
                <button className={styles.utilBtn} onClick={handleShare}>
                  {shareCopied ? <Check size={14} style={{ color: '#2E7D32' }} /> : <Share2 size={14} />}
                  <span>{shareCopied ? 'Link Copied to Dossier' : 'Share Artwork Link'}</span>
                </button>

                <button className={styles.utilBtn} onClick={handlePrint}>
                  <Printer size={14} />
                  <span>Curatorial Tear Sheet (Print)</span>
                </button>
              </div>
            </div>

            {/* Curatorial Tabs: Essay, Specifications, Provenance */}
            <div className={styles.tabsSection}>
              <div className={styles.tabHeaders}>
                <button
                  className={`${styles.tabBtn} ${activeTab === 'curatorial' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('curatorial')}
                >
                  Curatorial Note
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === 'specs' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Formal Analysis
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === 'provenance' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('provenance')}
                >
                  Provenance &amp; Exhibitions
                </button>
              </div>

              <div className={styles.tabContent}>
                {activeTab === 'curatorial' && (
                  <div className={styles.essayBody}>
                    <p>{artwork.curatorialNote}</p>
                    <div className={styles.authorBadge}>
                      <strong>Dawson Wells Gallery Curatorial Archives</strong>
                      <span>Catalog Raisonné Reference #{artwork.id.toUpperCase()}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className={styles.formalBody}>
                    <p>{artwork.formalAnalysis}</p>
                    <div className={styles.conservationNote}>
                      <ShieldCheck size={16} className={styles.shield} />
                      <div>
                        <strong>Conservation &amp; Archival Stability</strong>
                        <p>All materials are tested for archival pH neutrality and UV lightfastness under museum preservation standards.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'provenance' && (
                  <div className={styles.provBody}>
                    <div className={styles.provSection}>
                      <span className="gallery-label">Exhibition History</span>
                      <ul className={styles.provList}>
                        {artwork.exhibitionHistory.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.provSection} style={{ marginTop: '1.25rem' }}>
                      <span className="gallery-label">Provenance</span>
                      <ul className={styles.provList}>
                        {artwork.provenance.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Artworks from Dawson Wells Collection */}
      {relatedArtworks.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container-wide">
            <div className={styles.relatedHeader}>
              <div>
                <span className="gallery-label">Curatorial Dialogues</span>
                <h2 className={styles.relatedTitle}>Related {artwork.category} Works</h2>
              </div>
              <Link href={`/artworks/${artwork.category.toLowerCase()}`} className="btn-link">
                <span>View All {artwork.category}</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {relatedArtworks.map(rel => (
                <ArtworkCard
                  key={rel.id}
                  artwork={rel}
                  viewMode="grid"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Interactive Lightbox */}
      <ArtworkLightbox
        artwork={artwork}
        activeImageIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={idx => setActiveImageIndex(idx)}
      />
    </div>
  );
}
