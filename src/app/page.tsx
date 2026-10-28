'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ArrowRight,
  Eye,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Compass,
  Award,
  BookOpen,
} from 'lucide-react';
import { ARTWORKS_DATA } from '@/data/artworks';
import { NEWS_DATA } from '@/data/news';
import { GALLERY_LOCATIONS, GALLERY_OVERVIEW } from '@/data/gallery';
import { useInquiry } from '@/context/InquiryContext';
import ArtworkCard from '@/components/ArtworkCard';
import HorizontalExhibitionPanorama from '@/components/HorizontalExhibitionPanorama';
import styles from './page.module.css';

export default function HomePage() {
  const { openInquiry } = useInquiry();
  const [activeMediumTab, setActiveMediumTab] = useState<'Photography' | 'Paintings' | 'Drawings' | 'Ceramics' | 'Prints'>('Photography');

  // Featured artworks for showcase
  const featuredArtworks = ARTWORKS_DATA.filter(a => a.featured);
  const currentExhibition = NEWS_DATA[0];

  const mediumData = {
    Photography: {
      title: 'Photography',
      tagline: 'Light as Physical Architecture',
      description: 'Captured with large-format 8×10 monorail view cameras and hand-coated platinum-palladium emulsions on Japanese gampi paper. Dawson Wells isolates the subtle, load-bearing geometry of atmospheric mist, oceanic breakwaters, and brutalist concrete.',
      image: '/images/artworks/photo-01.jpg',
      link: '/artworks/photography',
      stat: 'Platinum & Selenium Fiber Prints',
      curatorialQuote: '“Photography in its purest form does not record the world; it isolates the unseen cadence that runs beneath stone, shadow, and sky.”',
    },
    Paintings: {
      title: 'Paintings',
      tagline: 'Sediment, Surface & Mineral Transmutations',
      description: 'Monumental canvases executing ancient fresco techniques on unprimed Belgian linen. Ground Carrara marble dust, purified beeswax, cold-pressed walnut oil, and natural Japanese indigo combine to form surfaces of physical authority.',
      image: '/images/artworks/painting-01.jpg',
      link: '/artworks/paintings',
      stat: 'Unique Monumental Linen Canvases',
      curatorialQuote: '“The canvas is not a window into illusion, but a freestanding architectural plane bearing the accumulated physical weight of earth, oil, and silence.”',
    },
    Drawings: {
      title: 'Drawings',
      tagline: 'The Gravity of the Solitary Line',
      description: 'Intimate draftsmanship on heavy 640gsm deckled Arches rag. Utilizing 15th-century silverpoint on calcified bone-ash gesso, pure burnished graphite, and vintage Nara sumi ink gestures capturing decisive physiological presence.',
      image: '/images/artworks/drawing-01.jpg',
      link: '/artworks/drawings',
      stat: 'Works on Heavy 640gsm Paper',
      curatorialQuote: '“Drawing is the most vulnerable and decisive mark an artist can make. Once graphite touches the tooth of the paper, time is forever captured.”',
    },
    Ceramics: {
      title: 'Ceramics',
      tagline: 'Forms from Earth, Wood & Flame',
      description: 'Hand-built and slab-folded coarse refractory stoneware vessels fired continuously for 96 hours in wood-burning anagama kilns in the Hudson Valley, where volatile oak embers melt into raw volcanic ash glazes.',
      image: '/images/artworks/ceramic-01.jpg',
      link: '/artworks/ceramics',
      stat: '96-Hour Wood-Fired Sculptural Vessels',
      curatorialQuote: '“In the kiln, the artist surrenders control to the flame. What emerges is not merely a vessel, but a geological relic born of earth and fire.”',
    },
    Prints: {
      title: 'Prints',
      tagline: 'The Master Press & Inscribed Plate',
      description: 'Multi-block woodcuts carved from seasoned pear wood, spit-bite aquatints, and hand-pulled Bavarian limestone lithographs pulled under colossal tonnage on antique industrial cylinder rolling presses.',
      image: '/images/artworks/print-01.jpg',
      link: '/artworks/prints',
      stat: 'Hand-Pulled Master Editions',
      curatorialQuote: '“The print is an exacting collaboration between steel pressure, virgin rag, and the chemical bite of the acid plate.”',
    },
  };

  return (
    <div className={styles.home}>
      {/* 1. MONUMENTAL HERO: Current Exhibition Showcase */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/artworks/gallery-interior.jpg"
            alt="Dawson Wells Gallery Interior Architecture"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroGradient}></div>
        </div>

        <div className={`container-wide ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span className="gallery-label" style={{ color: '#E8E5DD' }}>
              Current Flagship Presentation • Chelsea, New York
            </span>
          </div>

          <h1 className={styles.heroTitle}>
            Dawson Wells<br />
            <em>The Material of Light</em>
          </h1>

          <p className={styles.heroMeta}>
            October 15, 2024 – January 18, 2025 • 524 West 24th Street, New York
          </p>

          <p className={styles.heroThesis}>
            A comprehensive institutional presentation occupying both floors of our Chelsea flagship. Bringing together monumental monochrome paintings in pulverized marble dust and unprecedented 8×10 platinum contact prints, the exhibition investigates the load-bearing optical presence of physical materials in the post-digital era.
          </p>

          <div className={styles.heroActions}>
            <Link href="/news#the-material-of-light-exhibition" className="btn-primary">
              <span>Explore Exhibition Dossier</span>
              <ArrowUpRight size={14} />
            </Link>
            <button
              className="btn-secondary"
              style={{ color: '#FAF9F6', borderColor: 'rgba(255, 255, 255, 0.35)' }}
              onClick={() => openInquiry(null, 'viewing')}
            >
              <span>Schedule Private Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CURATORIAL STATEMENT STRIP */}
      <section className={styles.statementStrip}>
        <div className={`container ${styles.statementInner}`}>
          <span className="gallery-label">Institutional Philosophy</span>
          <blockquote className={styles.statementQuote}>
            &ldquo;In an accelerated digital world, Dawson Wells Gallery champions the slow, profound physical resonance of objects crafted to endure across generations.&rdquo;
          </blockquote>
          <div className={styles.statementFooter}>
            <span className={styles.authorTitle}>Dawson Wells Gallery Curatorial Board</span>
            <span className={styles.dividerDot}>•</span>
            <span className={styles.authorLocation}>New York & London</span>
          </div>
        </div>
      </section>

      {/* 3. THE FIVE CORE MEDIUMS (Interactive Medium Explorer) */}
      <section className={styles.mediumsSection}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div>
              <span className="gallery-label">The Dawson Wells Collection</span>
              <h2 className={styles.sectionTitle}>Five Disciplines. A Singular Vision.</h2>
            </div>
            <Link href="/artworks" className="btn-link">
              <span>View All 100 Artworks Index</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Medium Selector Tabs */}
          <div className={styles.mediumTabs}>
            {(['Photography', 'Paintings', 'Drawings', 'Ceramics', 'Prints'] as const).map(medium => (
              <button
                key={medium}
                className={`${styles.mediumTabBtn} ${activeMediumTab === medium ? styles.activeMediumTab : ''}`}
                onClick={() => setActiveMediumTab(medium)}
              >
                <span className={styles.tabNumber}>
                  0{['Photography', 'Paintings', 'Drawings', 'Ceramics', 'Prints'].indexOf(medium) + 1}
                </span>
                <span className={styles.tabLabel}>{medium}</span>
              </button>
            ))}
          </div>

          {/* Active Medium Feature Box */}
          <div className={styles.mediumShowcaseCard}>
            <div className={styles.mediumShowcaseImageWrap}>
              <Image
                src={mediumData[activeMediumTab].image}
                alt={mediumData[activeMediumTab].title}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.mediumShowcaseImg}
              />
              <div className={styles.mediumImgOverlay}>
                <span className={styles.statPill}>{mediumData[activeMediumTab].stat}</span>
              </div>
            </div>

            <div className={styles.mediumShowcaseText}>
              <span className="gallery-label">{mediumData[activeMediumTab].title} Collection</span>
              <h3 className={styles.mediumHeadline}>{mediumData[activeMediumTab].tagline}</h3>
              <p className={styles.mediumDescription}>
                {mediumData[activeMediumTab].description}
              </p>

              <blockquote className={styles.showcaseQuote}>
                {mediumData[activeMediumTab].curatorialQuote}
              </blockquote>

              <div className={styles.mediumActions}>
                <Link href={mediumData[activeMediumTab].link} className="btn-primary">
                  <span>Explore {mediumData[activeMediumTab].title} Collection</span>
                  <ArrowRight size={14} />
                </Link>
                <button
                  className="btn-secondary"
                  onClick={() => openInquiry(null, 'artwork')}
                >
                  <span>Inquire on Discipline</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. HORIZONTAL EXHIBITION PANORAMA */}
      <HorizontalExhibitionPanorama
        artworks={ARTWORKS_DATA}
        curatorialTitle="Curatorial Movement & Archive Panorama"
        curatorialSubtitle="A continuous horizontal panorama across five decades of Dawson Wells's material archive. Navigate via scroll, drag, or touch swipe."
      />

      {/* 4. SELECTED HIGHLIGHTS FROM THE COLLECTION */}
      <section className={styles.collectionHighlights}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div>
              <span className="gallery-label">Permanent Holdings</span>
              <h2 className={styles.sectionTitle}>Curator&apos;s Selected Highlights</h2>
            </div>
            <Link href="/artworks" className="btn-link">
              <span>Filter & Search Collection</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className={styles.artworksGrid}>
            {featuredArtworks.slice(0, 6).map(artwork => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                viewMode="grid"
              />
            ))}
          </div>

          <div className={styles.collectionBanner}>
            <div className={styles.bannerText}>
              <span className="gallery-label">Catalog Raisonné & Provenance</span>
              <h3>Representing Over 100 Works in Permanent Collection</h3>
              <p>
                Browse comprehensive technical dossiers, museum conservation reports, and high-resolution multi-angle photography across all holdings.
              </p>
            </div>
            <Link href="/artworks" className="btn-primary">
              <span>Enter Artworks Directory</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Online Viewing Room Spotlight */}
          <div className={styles.ovrTeaserBanner}>
            <div className={styles.ovrTeaserContent}>
              <div className={styles.ovrBadge}>
                <span className={styles.ovrDot}></span>
                <span>Active Online Viewing Room</span>
              </div>
              <h3>The Architecture of Silence: Monoliths & Atlantic Mist</h3>
              <p>
                A quiet, curated digital salon pairing Dawson Wells&apos; large-format platinum coastal exposures with monumental mineral canvases and wood-fired ceramics. Private acquisition dossiers and architectural scale views now open.
              </p>
            </div>
            <div className={styles.ovrTeaserActions}>
              <Link href="/viewing-rooms" className="btn-primary">
                <span>Enter Viewing Room</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURATORIAL ESSAY: MATERIAL PRESENCE IN THE POST-DIGITAL AGE */}
      <section className={styles.curatorialFeatureSection}>
        <div className="container">
          <div className={styles.essayBox}>
            <span className="gallery-label">Scholarly Essay</span>
            <h2 className={styles.essayHeading}>The Poetics of Surface & Form</h2>
            <div className={styles.essayTextGrid}>
              <p>
                In a cultural landscape inundated with ephemeral pixels, Dawson Wells Gallery asserts the irreplaceable authority of physical matter. Each work—whether an 8×10 platinum contact print on Japanese gampi paper, a monumental canvas encrusted with cold-pressed beeswax and Carrara marble dust, or a wood-fired stoneware vessel bearing the scorch marks of 96 hours in an anagama kiln—operates as a sanctuary of acoustic and optical calm.
              </p>
              <p>
                Wells approaches materiality not as a passive medium for narrative illustration, but as an autonomous, expressive protagonist. The natural texture of unprimed linen, the volatile migration of wood ash across refractory fireclay, and the microscopic tooth of 640gsm rag paper are invited into active collaboration with the artist’s hand.
              </p>
              <p>
                Conceived for architectural environments of refined minimalism, these works do not shout for attention; rather, they transform the ambient daylight and acoustic volume of a room, rewarding prolonged, quiet contemplation.
              </p>
            </div>

            <div className={styles.essayCitation}>
              <strong>Dr. Evelyn Sterling</strong>
              <span>Chief Curator & Director of Exhibitions • Dawson Wells Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. MEET DAWSON WELLS: ARTIST & FOUNDER HIGHLIGHT */}
      <section className={styles.homeArtistSection}>
        <div className="container-wide">
          <div className={styles.homeArtistCard}>
            <div className={styles.homeArtistPortraitWrap}>
              <div className={styles.homePortraitCircle}>
                <Image
                  src="/images/artist/dawson-wells.jpg"
                  alt="Mr. Dawson Wells"
                  width={240}
                  height={240}
                  priority
                  className={styles.homePortraitImg}
                />
              </div>
              <div className={styles.homeArtistNameplate}>
                <strong>Dawson Wells</strong>
                <span>Artist & Founder</span>
                <span className={styles.homeArtistAlma}>University of Tennessee, Knoxville</span>
              </div>
            </div>

            <div className={styles.homeArtistStory}>
              <span className="gallery-label">The Visionary</span>
              <h2 className={styles.homeArtistTitle}>Purpose, Storytelling & Material Truth</h2>
              <blockquote className={styles.homeArtistQuote}>
                &ldquo;Whether designing for legendary American brands or creating contemplative gallery works, my goal is to use creativity with purpose to tell stories, inspire others, and glorify God through the gifts He has given me.&rdquo;
              </blockquote>
              <p className={styles.homeArtistPara}>
                Studying Journalism and Electronic Media at the University of Tennessee, Knoxville, Dawson Wells built a celebrated visual portfolio trusted by premier institutions—including the historic firearms manufacturer <strong>Smith &amp; Wesson</strong>, <strong>151 Creative</strong> of the UT Athletic Department, <strong>MLB Draft 2025</strong>, and the <strong>Tennessee Golf x Masters</strong> series. Dawson Wells Gallery represents the culmination of his vision, presenting exclusive, museum-grade holdings across large-format photography, monumental monochrome painting, intimate draftsmanship, wood-fired ceramics, and master prints.
              </p>
              <div className={styles.homeArtistActions}>
                <Link href="/about" className="btn-primary">
                  <span>Read Full Artist Biography</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/artworks" className="btn-secondary">
                  <span>Explore The 100-Artwork Collection</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ARCHITECTURAL SANCTUARY: New York & London Spaces */}
      <section className={styles.spacesSection}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div>
              <span className="gallery-label">Physical Encounters</span>
              <h2 className={styles.sectionTitle}>Gallery Architecture & Salons</h2>
            </div>
            <p className={styles.sectionSubtitle}>
              Conceived as acoustic and architectural sanctuaries, our gallery spaces in Chelsea and Mayfair invite unhurried engagement with contemporary art.
            </p>
          </div>

          <div className={styles.spacesGrid}>
            {GALLERY_LOCATIONS.map(location => (
              <div key={location.id} className={styles.spaceCard}>
                <div className={styles.spaceImageWrap}>
                  <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.spaceImg}
                  />
                  <div className={styles.spaceCityBadge}>
                    <span>{location.city}</span>
                  </div>
                </div>

                <div className={styles.spaceBody}>
                  <span className="gallery-label">{location.neighborhood}</span>
                  <h3 className={styles.spaceName}>{location.title}</h3>
                  <p className={styles.spaceAddress}>{location.address}, {location.postalCode}</p>

                  <div className={styles.hoursBox}>
                    <Calendar size={13} className={styles.hoursIcon} />
                    <div>
                      {location.hours.map((h, i) => (
                        <div key={i} className={styles.hourLine}>
                          <strong>{h.days}:</strong> {h.time}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className={styles.appointmentNote}>{location.appointmentNote}</p>

                  <div className={styles.spaceCardFooter}>
                    <button
                      className="btn-primary"
                      style={{ padding: '0.75rem 1.4rem' }}
                      onClick={() => openInquiry(null, 'viewing')}
                    >
                      <span>Book Viewing</span>
                    </button>
                    <Link href="/contact" className="btn-link">
                      <span>Location Guide & Map</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWS, PRESS & DISPATCHES */}
      <section className={styles.newsSection}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div>
              <span className="gallery-label">Editorial & Dispatches</span>
              <h2 className={styles.sectionTitle}>Exhibitions, Fairs & Scholarly Reviews</h2>
            </div>
            <Link href="/news" className="btn-link">
              <span>All News & Updates</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className={styles.newsGrid}>
            {NEWS_DATA.slice(0, 3).map(news => (
              <Link
                key={news.id}
                href={`/news#${news.slug}`}
                className={styles.newsCard}
              >
                <div className={styles.newsImageWrapper}>
                  <Image
                    src={news.coverImage}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.newsImg}
                  />
                  <span className={styles.newsTypeBadge}>{news.type}</span>
                </div>

                <div className={styles.newsMetaRow}>
                  <span className={styles.newsDate}>{news.displayDate}</span>
                  <span className={styles.newsLocation}>{news.location}</span>
                </div>

                <h3 className={styles.newsCardTitle}>{news.title}</h3>
                <p className={styles.newsCardExcerpt}>{news.excerpt}</p>

                <div className={styles.newsReadMore}>
                  <span>Read Curatorial Dossier</span>
                  <ArrowUpRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRIVATE CLIENT INVITATION CALLOUT */}
      <section className={styles.privateAdvisoryCallout}>
        <div className="container">
          <div className={styles.advisoryInner}>
            <span className="gallery-label">Private Client Advisory</span>
            <h2 className={styles.advisoryTitle}>
              Acquisitions, Curatorial Walkthroughs & Museum Loans
            </h2>
            <p className={styles.advisoryText}>
              Dawson Wells Gallery provides discreet, bespoke advisory for private collectors, foundation trustees, and architectural clients globally. Contact our Curatorial Office in New York or London to schedule a private salon encounter or discuss site-specific commissions.
            </p>
            <div className={styles.advisoryActions}>
              <button
                className="btn-primary"
                onClick={() => openInquiry(null, 'general')}
              >
                <span>Initiate Curatorial Consultation</span>
                <ArrowRight size={14} />
              </button>
              <Link href="/contact" className="btn-secondary">
                <span>View Gallery Contacts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
