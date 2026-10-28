'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Artwork } from '@/data/artworks';
import styles from './KineticArtworkStream.module.css';

interface KineticArtworkStreamProps {
  artworks: Artwork[];
  title?: string;
  subtitle?: string;
}

export default function KineticArtworkStream({
  artworks,
  title = "Curatorial Movement & Archive Highlights",
  subtitle = "Dynamic visual dialogue across disciplines. Scroll vertically to navigate alternating horizontal streams."
}: KineticArtworkStreamProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Divide artworks into two curated alternating streams
  const rowOneItems = artworks.slice(0, 10);
  const rowTwoItems = artworks.slice(10, 20).length > 0 ? artworks.slice(10, 20) : artworks.slice(0, 10);

  // Duplicate for seamless flow
  const streamOne = [...rowOneItems, ...rowOneItems];
  const streamTwo = [...rowTwoItems, ...rowTwoItems];

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if near viewport
      if (rect.bottom >= -200 && rect.top <= windowHeight + 200) {
        // Calculate normalized offset
        const offset = window.scrollY;
        setScrollProgress(offset);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Compute translation offsets: Row 1 moves left-to-right, Row 2 moves right-to-left
  const rowOneTranslate = -(scrollProgress * 0.35) % 1600;
  const rowTwoTranslate = -1200 + (scrollProgress * 0.35) % 1600;

  return (
    <section
      ref={containerRef}
      className={styles.streamSection}
      aria-label="Kinetic Artwork Stream"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-wide">
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className="gallery-label">Interactive Archive Experience</span>
            <h2 className={styles.heading}>
              Dynamic Archive <em>Streams</em>
            </h2>
            <p className={styles.subtext}>{subtitle}</p>
          </div>

          <div className={styles.scrollIndicator}>
            <span className={styles.scrollPulseDot}></span>
            <span>Scroll Page to Glide Streams</span>
          </div>
        </div>
      </div>

      <div className={styles.streamsStage}>
        {/* Track 1: Glides Left on downward scroll */}
        <div className={styles.trackWrapper}>
          <div
            className={styles.trackRow}
            style={{
              transform: `translate3d(${rowOneTranslate}px, 0, 0)`,
            }}
          >
            {streamOne.map((art, idx) => (
              <Link
                key={`row1-${art.id}-${idx}`}
                href={`/artworks/${art.slug}`}
                className={styles.streamCard}
              >
                <div className={styles.imageFrame}>
                  <Image
                    src={art.primaryImage}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 270px, 320px"
                    className={styles.cardImage}
                  />
                  <span className={styles.cardCategoryBadge}>{art.category}</span>
                  <span className={styles.cardStatusPill}>{art.status}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{art.title}</h3>
                  <p className={styles.cardMedium}>{art.medium}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardYear}>{art.year} • {art.dimensionsImperial}</span>
                    <span className={styles.cardCta}>
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Track 2: Glides Right on downward scroll (Opposite direction) */}
        <div className={styles.trackWrapper}>
          <div
            className={styles.trackRow}
            style={{
              transform: `translate3d(${rowTwoTranslate}px, 0, 0)`,
            }}
          >
            {streamTwo.map((art, idx) => (
              <Link
                key={`row2-${art.id}-${idx}`}
                href={`/artworks/${art.slug}`}
                className={styles.streamCard}
              >
                <div className={styles.imageFrame}>
                  <Image
                    src={art.primaryImage}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 270px, 320px"
                    className={styles.cardImage}
                  />
                  <span className={styles.cardCategoryBadge}>{art.category}</span>
                  <span className={styles.cardStatusPill}>{art.status}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{art.title}</h3>
                  <p className={styles.cardMedium}>{art.medium}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardYear}>{art.year} • {art.dimensionsImperial}</span>
                    <span className={styles.cardCta}>
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
