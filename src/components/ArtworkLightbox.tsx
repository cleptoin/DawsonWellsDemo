'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Artwork } from '@/data/artworks';
import styles from './ArtworkLightbox.module.css';

interface ArtworkLightboxProps {
  artwork: Artwork;
  activeImageIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function ArtworkLightbox({
  artwork,
  activeImageIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: ArtworkLightboxProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setZoomLevel(1);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeImageIndex]);

  if (!isOpen) return null;

  const currentImage = artwork.images[activeImageIndex] || {
    url: artwork.primaryImage,
    caption: artwork.title,
    type: 'frontal',
  };

  const handleNext = () => {
    onSelectIndex((activeImageIndex + 1) % artwork.images.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    onSelectIndex((activeImageIndex - 1 + artwork.images.length) % artwork.images.length);
    setZoomLevel(1);
  };

  const toggleZoom = () => {
    setZoomLevel(prev => (prev === 1 ? 2 : prev === 2 ? 3 : 1));
  };

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.topBar} onClick={e => e.stopPropagation()}>
        <div className={styles.artworkInfo}>
          <span className="gallery-label">{artwork.category}</span>
          <h2 className={styles.title}>{artwork.title} ({artwork.year})</h2>
          <span className={styles.caption}>{currentImage.caption}</span>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            onClick={toggleZoom}
            title={zoomLevel > 1 ? 'Reset Zoom' : 'Zoom In'}
          >
            {zoomLevel > 1 ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            <span>{zoomLevel}x</span>
          </button>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close inspection view"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      <div className={styles.imageStage} onClick={e => e.stopPropagation()}>
        {artwork.images.length > 1 && (
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <div
          className={styles.imageWrapper}
          style={{
            cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in',
          }}
          onClick={toggleZoom}
        >
          <div
            className={styles.zoomContainer}
            style={{
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <Image
              src={currentImage.url}
              alt={currentImage.caption || artwork.title}
              width={1800}
              height={1350}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
              priority
            />
            {/* Museum Watermark Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(8, 8, 8, 0.65)',
                backdropFilter: 'blur(6px)',
                padding: '0.35rem 0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                pointerEvents: 'none',
              }}
            >
              <Image
                src="/images/brand/dw-logo.png"
                alt="DW"
                width={16}
                height={16}
                style={{ filter: 'brightness(100)' }}
              />
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                }}
              >
                DAWSON WELLS GALLERY • PROVENANCE VERIFIED
              </span>
            </div>
          </div>
        </div>

        {artwork.images.length > 1 && (
          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {artwork.images.length > 1 && (
        <div className={styles.thumbnailsBar} onClick={e => e.stopPropagation()}>
          {artwork.images.map((img, idx) => (
            <button
              key={idx}
              className={`${styles.thumbBtn} ${idx === activeImageIndex ? styles.activeThumb : ''}`}
              onClick={() => {
                onSelectIndex(idx);
                setZoomLevel(1);
              }}
            >
              <Image
                src={img.url}
                alt={img.caption}
                width={60}
                height={45}
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
