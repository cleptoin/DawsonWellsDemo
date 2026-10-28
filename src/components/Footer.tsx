'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Check, Compass, ShieldCheck } from 'lucide-react';
import DWLogo from '@/components/DWLogo';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Newsletter Signup Strip - Optional Future Feature */}
      <div className={styles.newsletterStrip}>
        <div className={`container-wide ${styles.newsletterContainer}`}>
          <div className={styles.newsletterLeft}>
            <span className="gallery-label">The Dawson Wells Chronicle • Optional Future Feature</span>
            <h3 className={styles.newsletterTitle}>
              Receive Private Salon Invitations & Curatorial Monographs
            </h3>
            <p className={styles.newsletterText}>
              Subscribers receive advance invitations to gallery previews in New York and London, scholarly essays on contemporary materiality, and newly cataloged acquisitions.
            </p>
          </div>

          <div className={styles.newsletterRight}>
            {subscribed ? (
              <div className={styles.subscribedBox}>
                <Check size={20} className={styles.checkIcon} />
                <span>You are now registered for Dawson Wells Gallery curatorial dispatches (Demo Submission).</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                <input
                  type="email"
                  required
                  className={styles.subscribeInput}
                  placeholder="Enter collector email address..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </form>
            )}
            <span className={styles.privacyNote}>
              Demonstration concept. Submissions are illustrative and do not send automated external emails.
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className={`container-wide ${styles.mainFooter}`}>
        <div className={styles.columnsGrid}>
          {/* Brand & Mission column */}
          <div className={styles.brandCol}>
            <DWLogo size={36} />
            <p className={styles.brandStatement} style={{ marginTop: '1rem' }}>
              An enduring sanctuary dedicated to material mastery, timeless form, and architectural presence. Representing exclusive collections across photography, painting, ceramics, drawings, and master prints.
            </p>
            <div className={styles.monogram}>EST. 2018 • NEW YORK & LONDON</div>
          </div>

          {/* New York Flagship */}
          <div className={styles.locationCol}>
            <span className="gallery-label">New York Flagship</span>
            <p className={styles.locationTitle}>Chelsea Arts District</p>
            <p className={styles.locationAddress}>
              524 West 24th Street<br />
              New York, NY 10011<br />
              United States
            </p>
            <p className={styles.locationHours}>
              Tuesday – Saturday: 10am – 6pm<br />
              Sunday – Monday: By Appointment
            </p>
            <div className={styles.contactItem}>
              <Phone size={12} />
              <span>+1 (000) 000-0000</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={12} />
              <span>newyork@yourgallery.com</span>
            </div>
          </div>

          {/* London Gallery */}
          <div className={styles.locationCol}>
            <span className="gallery-label">London Gallery</span>
            <p className={styles.locationTitle}>Mayfair</p>
            <p className={styles.locationAddress}>
              14 Old Bond Street<br />
              London W1S 4PP<br />
              United Kingdom
            </p>
            <p className={styles.locationHours}>
              Tuesday – Friday: 10am – 6pm<br />
              Saturday: 11am – 5pm
            </p>
            <div className={styles.contactItem}>
              <Phone size={12} />
              <span>+44 (0)00 0000 0000</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={12} />
              <span>london@yourgallery.com</span>
            </div>
          </div>

          {/* Mediums & Pages */}
          <div className={styles.linksCol}>
            <span className="gallery-label">The Collection</span>
            <ul className={styles.linksList}>
              <li>
                <Link href="/artworks/photography">Photography</Link>
              </li>
              <li>
                <Link href="/artworks/paintings">Paintings</Link>
              </li>
              <li>
                <Link href="/artworks/drawings">Drawings</Link>
              </li>
              <li>
                <Link href="/artworks/ceramics">Ceramics</Link>
              </li>
              <li>
                <Link href="/artworks/prints">Prints</Link>
              </li>
              <li>
                <Link href="/artworks" className={styles.boldLink}>
                  All 100 Artworks Index
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & Information */}
          <div className={styles.linksCol}>
            <span className="gallery-label">Institutional</span>
            <ul className={styles.linksList}>
              <li>
                <Link href="/about">Gallery Overview</Link>
              </li>
              <li>
                <Link href="/mission-vision">Mission & Vision</Link>
              </li>
              <li>
                <Link href="/company-overview">Company Overview & Directorate</Link>
              </li>
              <li>
                <Link href="/news">Exhibitions & Dispatches</Link>
              </li>
              <li>
                <Link href="/viewing-rooms">
                  Online Viewing Rooms <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold)' }}>(Optional Feature)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">Private Viewing Appointments</Link>
              </li>
              <li>
                <Link href="/inquire">Collector Acquisition Inquiries</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Illustrative Demo Content Disclaimer */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1rem 1.25rem',
          border: '1px solid var(--border-medium)',
          backgroundColor: 'rgba(158, 130, 86, 0.04)',
          fontSize: '0.75rem',
          lineHeight: '1.6',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <Compass size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
          <span>
            <strong>Illustrative Demo Notice:</strong> This digital gallery is an illustrative concept prototype prepared for demonstration and design evaluation. Artwork listings, exhibition schedules, and curatorial roles represent concept demonstration content.
          </span>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Dawson Wells Gallery LLC. All rights reserved. Works curated for the Dawson Wells collection showcase.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy &amp; Confidentiality</Link>
            <span className={styles.dot}>•</span>
            <Link href="/terms">Collector Terms</Link>
            <span className={styles.dot}>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
            <span className={styles.dot}>•</span>
            <a href="/feed.xml" target="_blank" rel="noopener noreferrer">RSS Feed</a>
            <span className={styles.dot}>•</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer">AI Context (LLMs)</a>
            <span className={styles.dot}>•</span>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* Clepto Digital Architecture Master Showcase Banner */}
      <section className={styles.cleptoMasterBanner} aria-label="Clepto Digital Showcase Notice">
        <div className={`container-wide ${styles.cleptoBannerContainer}`}>
          <div className={styles.cleptoHeaderStrip}>
            <div className={styles.cleptoLiveBadge}>
              <span className={styles.cleptoPulse}></span>
              <span>Concept Prototype • Architected by Clepto</span>
            </div>
            <span className={styles.cleptoClientTag}>Curated Exclusively for Dawson Wells Gallery</span>
          </div>

          <div className={styles.cleptoMainGrid}>
            <div className={styles.cleptoStatementCol}>
              <h2 className={styles.cleptoHeading}>
                Concept prepared for Dawson Wells Gallery by Clepto
              </h2>
              <p className={styles.cleptoParagraph}>
                This digital gallery is a concept prototype designed and developed by <strong>Clepto</strong>. We architect bespoke museum-grade websites, high-resolution viewing rooms, and luxury digital portfolios for visionary artists, premier galleries, and global institutions.
              </p>
              <div className={styles.cleptoTrustPills}>
                <span className={styles.trustPill}>✓ Next.js App Router Architecture</span>
                <span className={styles.trustPill}>✓ Museum-Grade Editorial Typography</span>
                <span className={styles.trustPill}>✓ GSAP Smooth Scroll &amp; Touch-Optimized</span>
              </div>
            </div>

            <div className={styles.cleptoActionCol}>
              <div className={styles.cleptoActionCard}>
                <span className={styles.actionCardLabel}>Direct Commissioning &amp; Inquiries</span>
                <p className={styles.actionCardDesc}>
                  Connect directly with the Clepto studio team for custom digital experiences:
                </p>
                <div className={styles.actionButtonsRow}>
                  <a
                    href="https://www.clepto.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cleptoPrimaryBtn}
                  >
                    <span>Visit www.clepto.in</span>
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="mailto:contact@clepto.in?subject=Inquiry%20regarding%20Dawson%20Wells%20Gallery%20Showcase"
                    className={styles.cleptoSecondaryBtn}
                  >
                    <Mail size={14} />
                    <span>contact@clepto.in</span>
                  </a>
                </div>
                <span className={styles.cleptoResponseTime}>
                  Rapid response within 24 business hours • Worldwide client advisory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
