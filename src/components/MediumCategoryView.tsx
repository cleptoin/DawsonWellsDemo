'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, Grid3X3, List, ArrowRight, Sparkles } from 'lucide-react';
import { Artwork, ARTWORKS_DATA, MEDIUM_CURATORIAL_OVERVIEWS } from '@/data/artworks';
import ArtworkCard from '@/components/ArtworkCard';
import { useInquiry } from '@/context/InquiryContext';
import styles from './MediumCategoryView.module.css';

interface MediumCategoryViewProps {
  category: Artwork['category'];
}

export default function MediumCategoryView({ category }: MediumCategoryViewProps) {
  const { openInquiry } = useInquiry();
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'list'>('grid');

  const curatorial = MEDIUM_CURATORIAL_OVERVIEWS[category];
  const artworks = ARTWORKS_DATA.filter(a => a.category === category);
  const otherCategories = (['Photography', 'Paintings', 'Drawings', 'Ceramics', 'Prints'] as const).filter(
    c => c !== category
  );

  return (
    <div className={styles.categoryPage}>
      {/* Editorial Header */}
      <div className={styles.headerArea}>
        <div className="container-wide">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/artworks" className={styles.breadLink}>Artworks</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>{category}</span>
          </div>

          <div className={styles.headerGrid}>
            <div className={styles.headerLeft}>
              <span className="gallery-label">Discipline Showcase</span>
              <h1 className={styles.categoryTitle}>{category}</h1>
              <p className={styles.headline}>{curatorial.headline}</p>
              <p className={styles.description}>{curatorial.description}</p>
            </div>

            <div className={styles.headerRight}>
              <blockquote className={styles.quoteBox}>
                <p>&ldquo;{curatorial.quote}&rdquo;</p>
                <cite>— {curatorial.quoteAuthor}</cite>
              </blockquote>

              <div className={styles.techniquesBox}>
                <span className="gallery-label">Master Studio Techniques:</span>
                <ul className={styles.techniquesList}>
                  {curatorial.techniques.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and View Bar */}
      <div className={styles.viewBar}>
        <div className={`container-wide ${styles.viewBarInner}`}>
          <div className={styles.countText}>
            Showing <strong>{artworks.length}</strong> works in {category} collection
          </div>

          <div className={styles.viewControls}>
            <button
              className="btn-secondary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.72rem' }}
              onClick={() => openInquiry(null, 'viewing')}
            >
              Inquire on {category}
            </button>

            <div className={styles.viewButtons}>
              <button
                className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.activeViewBtn : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                className={`${styles.viewBtn} ${viewMode === 'masonry' ? styles.activeViewBtn : ''}`}
                onClick={() => setViewMode('masonry')}
                title="Masonry View"
              >
                <Grid3X3 size={15} />
              </button>
              <button
                className={`${styles.viewBtn} ${viewMode === 'list' ? styles.activeViewBtn : ''}`}
                onClick={() => setViewMode('list')}
                title="Catalog List View"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Artworks Presentation Grid */}
      <div className={`container-wide ${styles.artworksGridSection}`}>
        <div
          className={
            viewMode === 'list'
              ? styles.listView
              : viewMode === 'masonry'
              ? styles.masonryView
              : styles.gridView
          }
        >
          {artworks.map((artwork, idx) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              viewMode={viewMode}
              priority={idx < 3}
            />
          ))}
        </div>
      </div>

      {/* Curatorial Essay Section */}
      <section className={styles.curatorialEssaySection}>
        <div className="container">
          <div className={styles.essayContainer}>
            <span className="gallery-label">Curatorial Commentary</span>
            <h2 className={styles.essayTitle}>On the Philosophy of {category}</h2>
            <div className={styles.essayBody}>
              <p>{curatorial.curatorialEssay}</p>
            </div>
            <div className={styles.essayAuthor}>
              <strong>Dawson Wells Gallery Curatorial Archives</strong>
              <span>New York Flagship & London Mayfair</span>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Disciplines */}
      <div className={styles.otherDisciplinesSection}>
        <div className="container-wide">
          <div className={styles.otherHeader}>
            <span className="gallery-label">Continue Exploring the Collection</span>
            <h3>Other Artistic Disciplines</h3>
          </div>

          <div className={styles.otherCategoriesGrid}>
            {otherCategories.map(cat => (
              <Link
                key={cat}
                href={`/artworks/${cat.toLowerCase()}`}
                className={styles.otherCategoryCard}
              >
                <span className="gallery-label">Discipline</span>
                <h4>{cat}</h4>
                <p>{MEDIUM_CURATORIAL_OVERVIEWS[cat].headline}</p>
                <span className={styles.exploreLink}>
                  Explore {cat} <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
