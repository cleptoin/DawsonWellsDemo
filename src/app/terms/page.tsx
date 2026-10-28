import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle, Scale, Shield } from 'lucide-react';
import styles from '../privacy/privacy.module.css';

export const metadata = {
  title: 'Collector Acquisition Terms & Provenance Guarantee | Dawson Wells Gallery',
  description: 'Terms of acquisition, authenticity certification, museum loans, and archival transport standards.',
};

export default function TermsPage() {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.headerArea}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>Collector Terms</span>
          </div>
          <span className="gallery-label">Legal &amp; Provenance Protocol</span>
          <h1 className={styles.title}>Collector Acquisition Terms &amp; Provenance Guarantee</h1>
          <p className={styles.lastUpdated}>Dawson Wells Gallery Directorate • New York &amp; London</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>1. Scope &amp; Authenticity Guarantee</h2>
              <p>
                Every original artwork and limited master print acquired directly through Dawson Wells Gallery or authorized private viewing salons is guaranteed authentic and cataloged in the Dawson Wells Gallery Master Catalog Raisonné. Each work is accompanied by an embossed, serialized Certificate of Authenticity signed by Mr. Dawson Wells and countersigned by the Curatorial Directorate.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Museum-Grade Conservation &amp; Framing</h2>
              <p>
                Unless explicitly acquired unframed for institutional integration, all works on paper and photographs are framed in accordance with strict international conservation protocols:
              </p>
              <ul>
                <li>Optium Museum Acrylic® providing 99% UV filtration, anti-reflective optical coating, and shatter resistance.</li>
                <li>100% cotton rag acid-free mounting boards and reversible Japanese wheat-starch hinge corners.</li>
                <li>Hand-milled American walnut or rift-sawn white oak frames sealed with archival vapor barriers.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. White-Glove Global Art Transit &amp; Insurance</h2>
              <p>
                Acquisitions are shipped globally via specialized fine art couriers (climate-controlled, air-ride suspension transit with full declared-value transit insurance). For monumental canvases and wood-fired ceramics exceeding 100 kg, the Gallery coordinates on-site installation supervision and architectural load-bearing consultations.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Institutional Loans &amp; Retrospectives</h2>
              <p>
                To support the artist&rsquo;s scholarship and museum presence, collectors are cordially invited to participate in periodic public museum retrospectives and biennale surveys. Loan requests undergo rigorous condition checks, courier escort, and borrower immunity from seizure arrangements.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Direct Inquiries</h2>
              <p>
                For private acquisition agreements, secondary market resale notifications, or loan requests:
              </p>
              <div className={styles.contactBox}>
                <strong>Dawson Wells Gallery — Private Client Liaison</strong><br />
                Email: <a href="mailto:acquisitions@dawsonwellsgallery.com">acquisitions@dawsonwellsgallery.com</a><br />
                Chelsea Flagship: +1 (212) 589-4200 • Mayfair Salon: +44 (0)20 7946 0880
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.cardHeader}>
                <Award size={18} className={styles.goldIcon} />
                <h3>Acquisition Guarantees</h3>
              </div>
              <ul className={styles.cardList}>
                <li>Embossed Certificate of Authenticity</li>
                <li>Catalog Raisonné registration</li>
                <li>Optium Museum Acrylic standard</li>
                <li>Insured fine art courier delivery</li>
              </ul>
              <Link href="/artworks" className={styles.sidebarBtn}>View Master Works</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
