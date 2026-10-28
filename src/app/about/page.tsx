'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Award, Shield, Compass, Landmark } from 'lucide-react';
import { GALLERY_OVERVIEW, GALLERY_LOCATIONS } from '@/data/gallery';
import { useInquiry } from '@/context/InquiryContext';
import styles from './about.module.css';

export default function AboutPage() {
  const { openInquiry } = useInquiry();

  return (
    <div className={styles.aboutPage}>
      {/* Editorial Header */}
      <section className={styles.heroSection}>
        <div className="container-wide">
          <div className={styles.heroTop}>
            <span className="gallery-label">Institution & Heritage</span>
            <span className={styles.yearBadge}>Est. {GALLERY_OVERVIEW.founded}</span>
          </div>

          <h1 className={styles.heroTitle}>Dawson Wells Gallery</h1>
          <p className={styles.heroTagline}>{GALLERY_OVERVIEW.tagline}</p>
        </div>
      </section>

      {/* Main Image Feature */}
      <section className={styles.featureImageSection}>
        <div className="container-wide">
          <div className={styles.imageBox}>
            <Image
              src="/images/artworks/gallery-interior.jpg"
              alt="Dawson Wells Gallery Interior Architecture"
              fill
              priority
              className={styles.featureImg}
            />
            <div className={styles.imageOverlayText}>
              <span className="gallery-label" style={{ color: '#E5E2DA' }}>
                Chelsea Flagship, West 24th Street, New York
              </span>
              <p>Designed as an acoustic haven and sensory sanctuary for material contemplation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET DAWSON WELLS: ARTIST & FOUNDER SPOTLIGHT */}
      <section className={styles.artistSpotlightSection}>
        <div className="container">
          <div className={styles.artistSpotlightGrid}>
            <div className={styles.artistPortraitCol}>
              <div className={styles.portraitFrame}>
                <Image
                  src="/images/artist/dawson-wells.jpg"
                  alt="Mr. Dawson Wells - Artist and Founder"
                  width={340}
                  height={340}
                  priority
                  className={styles.artistPortraitImg}
                />
              </div>
              <div className={styles.portraitCaption}>
                <strong>Dawson Wells</strong>
                <span>Founder & Principal Artist</span>
                <span className={styles.eduText}>University of Tennessee, Knoxville</span>
              </div>
            </div>

            <div className={styles.artistBioCol}>
              <span className="gallery-label">The Visionary Behind the Gallery</span>
              <h2 className={styles.artistHeading}>About Dawson Wells</h2>
              <blockquote className={styles.artistQuote}>
                &ldquo;Dedicated to material integrity, architectural presence, and the disciplined exploration of form across diverse creative disciplines.&rdquo;
              </blockquote>

              <div className={styles.bioProse}>
                <p>
                  Dawson Wells is an American artist, designer, and founder studying Journalism and Electronic Media at the University of Tennessee, Knoxville. Combining athletic design precision with fine art contemplation, Wells has cultivated a distinguished creative portfolio trusted by premier national institutions.
                </p>
                <p>
                  His work spans institutional creative direction, sports visual media, and fine art campaigns.
                </p>
                <p>
                  Alongside his commercial collaborations, Wells founded Dawson Wells Gallery as an enduring platform for fine art collection stewardship—bringing together large-format 8×10 photography, monumental limestone paintings, intimate carbon draftsmanship, wood-fired ceramics, and master relief prints. Grounded in disciplined craft, his work champions the slow, profound permanence of physical art in an accelerated digital age.
                </p>
              </div>

              {/* Milestones List */}
              <div className={styles.milestonesList}>
                <div className={styles.milestoneItem}>
                  <span className={styles.mYear}>University of Tennessee</span>
                  <p>Journalism &amp; Media studies; creative director for collegiate championship visual campaigns.</p>
                </div>
                <div className={styles.milestoneItem}>
                  <span className={styles.mYear}>Dawson Wells Gallery</span>
                  <p>Established permanent flagship representation across New York and London.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Narrative & Genesis */}
      <section className={styles.narrativeSection}>
        <div className="container">
          <div className={styles.narrativeInner}>
            <span className="gallery-label">The Gallery Genesis</span>
            <h2 className={styles.sectionHeading}>An Uncompromising Platform for Material Truth</h2>
            <div className={styles.prose}>
              <p>
                Founded in New York, Dawson Wells Gallery was born from a singular conviction: that in an increasingly ephemeral, digital culture, the physical presence of genuine material mastery possesses transcendent, irreplaceable power.
              </p>
              <p>
                Unlike conventional commercial galleries that churn through rapid cycles of market trends, Dawson Wells Gallery is dedicated exclusively to the rigorous presentation of the Dawson Wells collection. Across five core mediums — large-format photography, monumental monochrome painting, intimate draftsmanship, wood-fired ceramics, and master prints — every work reflects hundreds of hours of disciplined, uncompromising craft.
              </p>
              <p>
                Our spaces in New York&apos;s Chelsea Arts District and London&apos;s historic Mayfair are not retail shops; they are architectural sanctuaries calibrated to natural daylight, quiet proportions, and museum-grade contemplation.
              </p>
            </div>

            <div className={styles.subpageCardsRow}>
              <Link href="/about/mission-vision" className={styles.subpageCard}>
                <Compass size={24} className={styles.subpageIcon} />
                <h3>Mission & Vision</h3>
                <p>Explore our institutional covenants, material autonomy principles, and museum commitments.</p>
                <span className={styles.subpageLinkText}>
                  Read Mission Statement <ArrowRight size={13} />
                </span>
              </Link>

              <Link href="/about/overview" className={styles.subpageCard}>
                <Landmark size={24} className={styles.subpageIcon} />
                <h3>Company Overview & Team</h3>
                <p>Meet our Curatorial Advisory, Senior Directors, and international research specialists.</p>
                <span className={styles.subpageLinkText}>
                  View Leadership <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Grid */}
      <section className={styles.pillarsSection}>
        <div className="container-wide">
          <div className={styles.pillarsHeader}>
            <span className="gallery-label">Institutional Philosophy</span>
            <h2 className={styles.sectionHeading}>The Four Curatorial Pillars</h2>
          </div>

          <div className={styles.pillarsGrid}>
            {GALLERY_OVERVIEW.corePillars.map((pillar, index) => (
              <div key={index} className={styles.pillarCard}>
                <span className={styles.pillarIndex}>0{index + 1}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory & Collector Services */}
      <section className={styles.servicesSection}>
        <div className="container-wide">
          <div className={styles.servicesHeader}>
            <span className="gallery-label">Private Client Practice</span>
            <h2 className={styles.sectionHeading}>Institutional & Collector Services</h2>
          </div>

          <div className={styles.servicesGrid}>
            {GALLERY_OVERVIEW.services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceDot}></div>
                <div>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.serviceCta}>
            <button
              className="btn-primary"
              onClick={() => openInquiry(null, 'general')}
            >
              <span>Consult with Private Client Office</span>
              <ArrowRight size={14} />
            </button>
            <Link href="/contact" className="btn-secondary">
              <span>Visit Gallery Salons</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
