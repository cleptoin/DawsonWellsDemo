'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { LayoutGrid, Grid3X3, List, Search, Filter, RotateCcw, ArrowUpRight } from 'lucide-react';
import { ARTWORKS_DATA, CATEGORIES, CategoryType, Artwork } from '@/data/artworks';
import ArtworkCard from '@/components/ArtworkCard';
import styles from './artworks.module.css';

export default function ArtworksPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All Works');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Available' | 'In Private Collection' | 'Museum Loan'>('All');
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc' | 'title-asc'>('year-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'list'>('grid');

  const filteredArtworks = useMemo(() => {
    return ARTWORKS_DATA.filter(artwork => {
      // Category filter
      if (selectedCategory !== 'All Works' && artwork.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (statusFilter !== 'All' && artwork.status !== statusFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = artwork.title.toLowerCase().includes(q);
        const matchesMedium = artwork.medium.toLowerCase().includes(q);
        const matchesSeries = artwork.series.toLowerCase().includes(q);
        const matchesYear = artwork.year.toString().includes(q);
        if (!matchesTitle && !matchesMedium && !matchesSeries && !matchesYear) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [selectedCategory, searchQuery, statusFilter, sortBy]);

  const hasActiveFilters = selectedCategory !== 'All Works' || searchQuery !== '' || statusFilter !== 'All';

  const resetFilters = () => {
    setSelectedCategory('All Works');
    setSearchQuery('');
    setStatusFilter('All');
    setSortBy('year-desc');
  };

  return (
    <div className={styles.page}>
      {/* Editorial Header */}
      <div className={styles.headerArea}>
        <div className="container-wide">
          <div className={styles.headerTop}>
            <span className="gallery-label">Dawson Wells Gallery Permanent Holdings</span>
            <span className={styles.countBadge}>100 Artworks Collection</span>
          </div>

          <h1 className={styles.pageTitle}>The Collection</h1>
          <p className={styles.pageIntro}>
            All artworks presented on the website are exclusively from the Dawson Wells Gallery collection. Browse across large-format photography, monumental paintings, drawings, ceramics, and master prints.
          </p>

          {/* Category Tabs */}
          <div className={styles.categoryTabs}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`${styles.categoryTab} ${selectedCategory === category ? styles.activeCategoryTab : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
                {category !== 'All Works' && (
                  <span className={styles.tabCount}>
                    {ARTWORKS_DATA.filter(a => a.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and View Bar */}
      <div className={styles.filterBar}>
        <div className={`container-wide ${styles.filterBarInner}`}>
          <div className={styles.leftControls}>
            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <Search size={15} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Filter by title, medium, series..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value as any)}
              className={styles.selectControl}
            >
              <option value="All">All Acquisition Statuses</option>
              <option value="Available">Available for Acquisition</option>
              <option value="In Private Collection">In Private Collection</option>
              <option value="Museum Loan">Museum Loan</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className={styles.selectControl}
            >
              <option value="year-desc">Sort: Newest First</option>
              <option value="year-asc">Sort: Earliest First</option>
              <option value="title-asc">Sort: Title (A–Z)</option>
            </select>

            {hasActiveFilters && (
              <button className={styles.resetBtn} onClick={resetFilters}>
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className={styles.rightControls}>
            <span className={styles.resultsCount}>
              Showing <strong>{filteredArtworks.length}</strong> of {ARTWORKS_DATA.length} Works
            </span>

            {/* Layout View Mode Switcher */}
            <div className={styles.viewModeGroup}>
              <button
                className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.activeViewBtn : ''}`}
                onClick={() => setViewMode('grid')}
                title="Editorial Grid View"
                aria-label="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                className={`${styles.viewBtn} ${viewMode === 'masonry' ? styles.activeViewBtn : ''}`}
                onClick={() => setViewMode('masonry')}
                title="Curatorial Masonry View"
                aria-label="Masonry view"
              >
                <Grid3X3 size={16} />
              </button>
              <button
                className={`${styles.viewBtn} ${viewMode === 'list' ? styles.activeViewBtn : ''}`}
                onClick={() => setViewMode('list')}
                title="Archival List View"
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Artworks Display Area */}
      <div className={`container-wide ${styles.artworksDisplayArea}`}>
        {filteredArtworks.length > 0 ? (
          <div
            className={
              viewMode === 'list'
                ? styles.listViewContainer
                : viewMode === 'masonry'
                ? styles.masonryViewContainer
                : styles.gridViewContainer
            }
          >
            {viewMode === 'list' && (
              <div className={styles.listHeaderRow}>
                <span>Artwork</span>
                <span>Title & Medium</span>
                <span>Year & Scale</span>
                <span>Status</span>
                <span style={{ textAlign: 'right' }}>Actions</span>
              </div>
            )}

            {filteredArtworks.map((artwork, idx) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                viewMode={viewMode}
                priority={idx < 4}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>No Artworks Match Your Selection</p>
            <p className={styles.emptyText}>
              Try clearing your search query or switching to &ldquo;All Works&rdquo; to browse the complete Dawson Wells collection.
            </p>
            <button className="btn-secondary" onClick={resetFilters}>
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Medium Quick Jump Bar */}
      <div className={styles.mediumJumpBar}>
        <div className={`container-wide ${styles.jumpBarInner}`}>
          <span className="gallery-label">Dedicated Medium Curatorial Portals:</span>
          <div className={styles.jumpLinks}>
            <Link href="/artworks/photography" className={styles.jumpLink}>
              Photography &rarr;
            </Link>
            <Link href="/artworks/paintings" className={styles.jumpLink}>
              Paintings &rarr;
            </Link>
            <Link href="/artworks/drawings" className={styles.jumpLink}>
              Drawings &rarr;
            </Link>
            <Link href="/artworks/ceramics" className={styles.jumpLink}>
              Ceramics &rarr;
            </Link>
            <Link href="/artworks/prints" className={styles.jumpLink}>
              Prints &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
