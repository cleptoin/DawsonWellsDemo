'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, ArrowUpRight, ArrowRight, BookOpen, X, Share2, Check } from 'lucide-react';
import { NEWS_DATA, NewsItem } from '@/data/news';
import { useInquiry } from '@/context/InquiryContext';
import styles from './news.module.css';

export default function NewsPage() {
  const { openInquiry } = useInquiry();
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Exhibition' | 'Art Fair' | 'Press' | 'Publication'>('All');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  const filteredNews = NEWS_DATA.filter(item => {
    if (selectedFilter === 'All') return true;
    return item.type === selectedFilter;
  });

  const handleShareArticle = (item: NewsItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  return (
    <div className={styles.newsPage}>
      {/* Editorial Header */}
      <section className={styles.headerArea}>
        <div className="container-wide">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>News & Updates</span>
          </div>

          <div className={styles.headerTop}>
            <span className="gallery-label">Exhibitions, Press & Dispatches</span>
            <span className={styles.dispatchPill}>Vol. VII • 2026–2027 Season</span>
          </div>

          <h1 className={styles.pageTitle}>News & Exhibitions</h1>
          <p className={styles.pageLead}>
            Curatorial announcements, institutional presentations, publications from Dawson Wells Editions, and prototype concepts for international exhibitions.
          </p>

          {/* Filter Pills */}
          <div className={styles.filterPills}>
            {(['All', 'Exhibition', 'Art Fair', 'Press', 'Publication'] as const).map(type => (
              <button
                key={type}
                className={`${styles.filterPill} ${selectedFilter === type ? styles.activeFilterPill : ''}`}
                onClick={() => setSelectedFilter(type)}
              >
                {type === 'All' ? 'All Dispatches' : type === 'Art Fair' ? 'Art Fairs (Optional Concept)' : `${type}s`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Current Presentation Spotlight */}
      <section className={styles.spotlightSection}>
        <div className="container-wide">
          <div className={styles.spotlightCard}>
            <div className={styles.spotlightImageWrapper}>
              <Image
                src={NEWS_DATA[0].coverImage}
                alt={NEWS_DATA[0].title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 60vw"
                className={styles.spotlightImg}
              />
              <span className={styles.statusBadge}>Current Presentation</span>
            </div>

            <div className={styles.spotlightContent}>
              <div className={styles.spotlightMeta}>
                <span className="gallery-label">{NEWS_DATA[0].type}</span>
                <span className={styles.spotlightDate}>{NEWS_DATA[0].displayDate}</span>
              </div>

              <h2 className={styles.spotlightTitle}>{NEWS_DATA[0].title}</h2>
              <p className={styles.spotlightSubtitle}>{NEWS_DATA[0].subtitle}</p>

              <div className={styles.locationStrip}>
                <MapPin size={13} className={styles.pinIcon} />
                <span>{NEWS_DATA[0].location}</span>
              </div>

              <p className={styles.spotlightExcerpt}>{NEWS_DATA[0].excerpt}</p>

              <div className={styles.spotlightActions}>
                <button
                  className="btn-primary"
                  onClick={() => setActiveArticle(NEWS_DATA[0])}
                >
                  <BookOpen size={14} />
                  <span>Read Curatorial Dossier</span>
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => openInquiry(null, 'viewing')}
                >
                  <span>Book Private Walkthrough</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className={styles.gridSection}>
        <div className="container-wide">
          <div className={styles.newsGrid}>
            {filteredNews.map(item => (
              <article
                key={item.id}
                id={item.slug}
                className={styles.articleCard}
                onClick={() => setActiveArticle(item)}
              >
                <div className={styles.imageBox}>
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImg}
                  />
                  <span className={styles.cardTypeBadge}>{item.type}</span>
                  {item.status && (
                    <span className={`${styles.cardStatusBadge} ${styles[item.status.toLowerCase()]}`}>
                      {item.status}
                    </span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardDate}>{item.displayDate}</span>
                    <span className={styles.cardLoc}>{item.location}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                  <p className={styles.cardExcerpt}>{item.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.readLink}>
                      Read Full Dossier <ArrowUpRight size={13} />
                    </span>
                    {item.curator && (
                      <span className={styles.curatorText}>{item.curator}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal Reader */}
      {activeArticle && (
        <div className={styles.articleOverlay} onClick={() => setActiveArticle(null)}>
          <div className={styles.articleModal} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeModalBtn}
              onClick={() => setActiveArticle(null)}
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            <div className={styles.modalHeaderImg}>
              <Image
                src={activeArticle.coverImage}
                alt={activeArticle.title}
                fill
                sizes="(max-width: 900px) 100vw, 800px"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.modalImgGradient}></div>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.modalTopMeta}>
                <span className="gallery-label">{activeArticle.type}</span>
                <span className={styles.modalDate}>{activeArticle.displayDate}</span>
              </div>

              <h2 className={styles.modalTitle}>{activeArticle.title}</h2>
              <p className={styles.modalSubtitle}>{activeArticle.subtitle}</p>

              <div className={styles.modalLocationRow}>
                <MapPin size={13} />
                <span>{activeArticle.location}</span>
                {activeArticle.curator && (
                  <>
                    <span className={styles.bullet}>•</span>
                    <span>{activeArticle.curator}</span>
                  </>
                )}
              </div>

              <div className={styles.modalBodyText}>
                {activeArticle.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.modalFooterActions}>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setActiveArticle(null);
                    openInquiry(null, activeArticle.type === 'Exhibition' ? 'viewing' : 'general');
                  }}
                >
                  <span>Inquire Regarding Exhibition</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  className={styles.modalShareBtn}
                  onClick={() => handleShareArticle(activeArticle)}
                >
                  {shareCopied ? <Check size={14} /> : <Share2 size={14} />}
                  <span>{shareCopied ? 'Link Copied' : 'Share Article'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
