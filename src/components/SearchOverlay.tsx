'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { ARTWORKS_DATA, Artwork } from '@/data/artworks';
import styles from './SearchOverlay.module.css';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Artwork[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = ARTWORKS_DATA.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.medium.toLowerCase().includes(q) ||
        item.series.toLowerCase().includes(q) ||
        item.year.toString().includes(q)
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.searchBar}>
            <Search size={22} className={styles.searchIcon} />
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder="Search by artwork title, medium, category, or year..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button
                className={styles.clearBtn}
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            ESC
          </button>
        </div>

        <div className={styles.quickFilters}>
          <span className="gallery-label">Browse Mediums:</span>
          {['Photography', 'Paintings', 'Drawings', 'Ceramics', 'Prints'].map(cat => (
            <button
              key={cat}
              className={styles.quickFilterBtn}
              onClick={() => setQuery(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.resultsArea}>
          {query.trim() === '' ? (
            <div className={styles.suggested}>
              <span className="gallery-label">Curator’s Selection</span>
              <div className={styles.grid}>
                {ARTWORKS_DATA.slice(0, 4).map(artwork => (
                  <Link
                    key={artwork.id}
                    href={`/artworks/${artwork.slug}`}
                    className={styles.resultCard}
                    onClick={onClose}
                  >
                    <div className={styles.imageWrap}>
                      <Image
                        src={artwork.primaryImage}
                        alt={artwork.title}
                        width={240}
                        height={180}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.cat}>{artwork.category}</span>
                      <h4 className={styles.title}>{artwork.title}</h4>
                      <p className={styles.details}>{artwork.year} • {artwork.medium.slice(0, 45)}...</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <div className={styles.resultCount}>
                <span>Found {results.length} {results.length === 1 ? 'artwork' : 'artworks'} matching &ldquo;{query}&rdquo;</span>
              </div>
              <div className={styles.grid}>
                {results.map(artwork => (
                  <Link
                    key={artwork.id}
                    href={`/artworks/${artwork.slug}`}
                    className={styles.resultCard}
                    onClick={onClose}
                  >
                    <div className={styles.imageWrap}>
                      <Image
                        src={artwork.primaryImage}
                        alt={artwork.title}
                        width={240}
                        height={180}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.cat}>{artwork.category}</span>
                      <h4 className={styles.title}>{artwork.title}</h4>
                      <p className={styles.details}>{artwork.year} • {artwork.dimensionsImperial}</p>
                    </div>
                    <ArrowUpRight size={16} className={styles.arrow} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No artworks found matching &ldquo;{query}&rdquo;.</p>
              <span>Try searching for &quot;Photography&quot;, &quot;Paintings&quot;, &quot;Ceramics&quot;, or &quot;2024&quot;.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
