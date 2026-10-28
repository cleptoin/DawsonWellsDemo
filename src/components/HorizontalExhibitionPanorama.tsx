'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Eye, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Artwork } from '@/data/artworks';
import { useInquiry } from '@/context/InquiryContext';
import styles from './HorizontalExhibitionPanorama.module.css';

interface HorizontalExhibitionPanoramaProps {
  artworks: Artwork[];
  curatorialTitle?: string;
  curatorialSubtitle?: string;
}

export default function HorizontalExhibitionPanorama({
  artworks,
  curatorialTitle = 'Curatorial Movement & Archive Panorama',
  curatorialSubtitle = 'A continuous spatial dialogue across photography, painting, ceramics, drawing, and master relief prints. Navigate horizontally via scroll, drag, or touch swipe.',
}: HorizontalExhibitionPanoramaProps) {
  const { openInquiry } = useInquiry();

  // Curate 8-10 diverse, stunning works across all disciplines
  const displayArtworks = useMemo(() => {
    if (!artworks || artworks.length === 0) return [];
    
    // Pick diverse highlighted artworks from each category
    const byCategory: { [key: string]: Artwork[] } = {};
    artworks.forEach((art) => {
      if (!byCategory[art.category]) byCategory[art.category] = [];
      byCategory[art.category].push(art);
    });

    const curated: Artwork[] = [];
    const categories = ['Photography', 'Paintings', 'Ceramics', 'Drawings', 'Prints'];
    
    // Interleave diverse disciplines
    for (let i = 0; i < 2; i++) {
      categories.forEach((cat) => {
        if (byCategory[cat] && byCategory[cat][i]) {
          curated.push(byCategory[cat][i]);
        }
      });
    }

    return curated.length >= 6 ? curated.slice(0, 8) : artworks.slice(0, 8);
  }, [artworks]);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  // Check device width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP ScrollTrigger for Desktop (Pinned Horizontal Scroll)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const getScrollDistance = () => {
          return track.scrollWidth - window.innerWidth + 120;
        };

        const horizontalTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            id: 'panorama-scroll',
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = Math.max(0, Math.min(1, self.progress));
              setScrollProgress(p);
              const totalItems = displayArtworks.length;
              const idx = Math.min(totalItems - 1, Math.floor(p * totalItems));
              setCurrentIndex(idx);
            },
          },
        });

        // Store active trigger ref for button navigation
        triggerRef.current = horizontalTween.scrollTrigger || null;

        // Visual Parallax on Artwork Images inside frames
        const images = track.querySelectorAll<HTMLImageElement>(`.${styles.cardParallaxImg}`);
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: 12 },
            {
              xPercent: -12,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                scrub: 1,
                start: 'top top',
                end: () => `+=${getScrollDistance()}`,
              },
            }
          );
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => {
      ctx.revert();
      triggerRef.current = null;
    };
  }, [displayArtworks]);

  // Mobile Native Scroll Handler for Touch
  const handleMobileScroll = useCallback(() => {
    if (!trackRef.current || !isMobile) return;
    const track = trackRef.current;
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(progress);

    // Calculate active slide index based on card width
    const firstCard = track.querySelector<HTMLDivElement>(`.${styles.panoramaCard}`);
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24; // width + gap
      const activeIdx = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(displayArtworks.length - 1, activeIdx)));
    }
  }, [isMobile, displayArtworks.length]);

  // Trackpad horizontal swipe listener on desktop
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 8) {
        window.scrollBy({ top: e.deltaX * 1.1, behavior: 'auto' });
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: true });
    return () => section.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  // Navigation: Go to slide index (Smoothly works for both desktop pinned and mobile)
  const navigateTo = (targetIdx: number) => {
    const safeIdx = Math.max(0, Math.min(displayArtworks.length - 1, targetIdx));
    setCurrentIndex(safeIdx);

    if (isMobile && trackRef.current) {
      const firstCard = trackRef.current.querySelector<HTMLDivElement>(`.${styles.panoramaCard}`);
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24;
        trackRef.current.scrollTo({
          left: safeIdx * cardWidth,
          behavior: 'smooth',
        });
      }
    } else if (triggerRef.current) {
      const st = triggerRef.current;
      const targetScroll = st.start + (safeIdx / (displayArtworks.length - 1)) * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => navigateTo(currentIndex - 1);
  const handleNext = () => navigateTo(currentIndex + 1);

  // Desktop Mouse Drag to Scrub
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScroll.current = window.scrollY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMobile) return;
    const deltaX = e.clientX - dragStartX.current;
    // Drag left moves scroll forward
    window.scrollTo({
      top: dragStartScroll.current - deltaX * 2,
      behavior: 'auto',
    });
  };

  const handleMouseUp = () => {
    if (isDragging) setIsDragging(false);
  };

  if (displayArtworks.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className={styles.panoramaSection}
      aria-label="Horizontal Curatorial Panorama"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.innerStickyStage}>
        {/* Curatorial Header & Interactive Navigation Toolbar */}
        <div className={styles.topToolbar}>
          <div className="container-wide">
            <div className={styles.toolbarFlex}>
              <div className={styles.titleArea}>
                <div className={styles.badgeLine}>
                  <span className={styles.archivalBadge}>
                    <Compass size={12} />
                    EXHIBITION SUITE // HORIZONTAL PANORAMA
                  </span>
                  <span className={styles.curatedCount}>
                    {displayArtworks.length} Masterworks
                  </span>
                </div>
                <h2 className={styles.panoramaHeading}>
                  Curatorial Movement & <em>Archive Panorama</em>
                </h2>
                <p className={styles.panoramaDesc}>{curatorialSubtitle}</p>
              </div>

              {/* Controls: Active Slide Counter, Progress Line & Arrow Buttons */}
              <div className={styles.controlsArea}>
                <div className={styles.interactionNotice}>
                  <span className={styles.pulseDot} />
                  <span>
                    {isMobile
                      ? 'Swipe horizontal with thumb'
                      : 'Scroll down or drag ← → to glide'}
                  </span>
                </div>

                <div className={styles.navRow}>
                  {/* Plate Counter */}
                  <div className={styles.plateCounter}>
                    <span className={styles.currentNum}>
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.counterDivider}>/</span>
                    <span className={styles.totalNum}>
                      {String(displayArtworks.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Progress Hairline */}
                  <div className={styles.progressBarTrack}>
                    <div
                      className={styles.progressBarFill}
                      style={{ transform: `scaleX(${Math.max(0.05, scrollProgress)})` }}
                    />
                  </div>

                  {/* Tactile Arrow Buttons */}
                  <div className={styles.buttonGroup}>
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className={styles.navBtn}
                      aria-label="Previous Artwork"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={currentIndex === displayArtworks.length - 1}
                      className={styles.navBtn}
                      aria-label="Next Artwork"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Horizontal Exhibition Track */}
        <div
          ref={trackRef}
          className={`${styles.panoramaTrack} ${isDragging ? styles.isDragging : ''}`}
          onScroll={handleMobileScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          {displayArtworks.map((art, idx) => {
            const isActive = idx === currentIndex;
            return (
              <article
                key={`pano-${art.id}-${idx}`}
                className={`${styles.panoramaCard} ${isActive ? styles.activeCard : ''}`}
              >
                {/* Visual Artwork Frame with Museum Lighting */}
                <div className={styles.cardFrame}>
                  <div className={styles.imageOverflowMask}>
                    <div className={styles.imageInnerParallax}>
                      <Image
                        src={art.primaryImage}
                        alt={`${art.title} by Dawson Wells`}
                        fill
                        sizes="(max-width: 768px) 85vw, 480px"
                        className={styles.cardParallaxImg}
                        priority={idx < 2}
                      />
                    </div>
                  </div>

                  {/* Floating Curatorial Badges */}
                  <div className={styles.frameBadges}>
                    <span className={styles.plateTag}>
                      PLATE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.categoryPill}>{art.category}</span>
                  </div>

                  <span className={styles.statusPill}>
                    {art.status === 'Available' ? 'Acquisition Eligible' : art.status}
                  </span>
                </div>

                {/* Museum Exhibition Placard & Metadata */}
                <div className={styles.cardPlacard}>
                  <div className={styles.placardTop}>
                    <div className={styles.placardSeries}>
                      <span>{art.series || 'The Dawson Wells Archive'}</span>
                      <span className={styles.dotSep}>•</span>
                      <span>{art.year}</span>
                    </div>
                    <h3 className={styles.placardTitle}>
                      <Link href={`/artworks/${art.slug}`}>{art.title}</Link>
                    </h3>
                    <p className={styles.placardMedium}>{art.medium}</p>
                    <p className={styles.placardDims}>
                      {art.dimensionsImperial} ({art.dimensionsMetric})
                    </p>
                  </div>

                  {/* Curatorial Essay Excerpt */}
                  <blockquote className={styles.curatorialExcerpt}>
                    &ldquo;{art.curatorialNote.slice(0, 140)}...&rdquo;
                  </blockquote>

                  {/* Actions: View Details and Inquire */}
                  <div className={styles.placardActions}>
                    <Link
                      href={`/artworks/${art.slug}`}
                      className={styles.viewDetailBtn}
                    >
                      <span>Examine Work</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => openInquiry(art, 'artwork')}
                      className={styles.inquireBtn}
                    >
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Pagination Dot Indicator */}
        <div className={styles.mobilePagination}>
          {displayArtworks.map((_, dotIdx) => (
            <button
              key={`dot-${dotIdx}`}
              type="button"
              className={`${styles.pageDot} ${dotIdx === currentIndex ? styles.activeDot : ''}`}
              onClick={() => navigateTo(dotIdx)}
              aria-label={`Jump to artwork ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
