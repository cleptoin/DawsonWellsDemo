import React from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';
import styles from './privacy.module.css';

export const metadata = {
  title: 'Privacy Policy & Collector Confidentiality | Dawson Wells Gallery',
  description: 'Our commitment to private client confidentiality, provenance protection, and data security.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.headerArea}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>Privacy &amp; Confidentiality</span>
          </div>
          <span className="gallery-label">Institutional Governance</span>
          <h1 className={styles.title}>Privacy Policy &amp; Collector Confidentiality</h1>
          <p className={styles.lastUpdated}>Effective Date: October 2026 • Dawson Wells Gallery Directorate</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2>1. Private Client Trust &amp; Confidentiality</h2>
              <p>
                Dawson Wells Gallery (the &ldquo;Gallery&rdquo;) operates at the highest echelon of international fine art advisory and collector stewardship. We recognize that relationships with collectors, museums, and institutional trusts require absolute discretion. All acquisition inquiries, secondary placements, and advisory records are treated under strict professional confidence.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Information Collected</h2>
              <p>We collect information solely to deliver curatorial services, collector walkthroughs, and provenance documentation:</p>
              <ul>
                <li><strong>Private Inquiry Details:</strong> Full name, verified institutional affiliation or collection name, telephone number, shipping jurisdiction, and artwork preferences submitted via our inquiry portals.</li>
                <li><strong>Acquisition &amp; Provenance Records:</strong> Invoiced client details required to issue formal Certificates of Authenticity and register provenance with the Dawson Wells Gallery Archive.</li>
                <li><strong>Digital Interaction Data:</strong> Strictly anonymized telemetry regarding artwork view modes, zoom states, and room simulator interactions to refine digital exhibition ergonomics.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Protection of Provenance &amp; Non-Disclosure</h2>
              <p>
                The Gallery will never sell, lease, or syndicate collector lists or transaction records to third-party advertisers, data aggregators, or marketing brokers. Collector identities in our Catalog Raisonné and provenance records remain sealed under &ldquo;Private Collection, New York / London / International&rdquo; unless explicit written authorization is granted for museum exhibition credits.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Digital Security &amp; Encryption Standards</h2>
              <p>
                All communications and inquiry data submitted through dawsonwellsdesigns.com are secured via Transport Layer Security (TLS 1.3 / 1.2) with strict HTTP Strict Transport Security (HSTS) enforcement. Our digital architecture is developed in partnership with Clepto (https://www.clepto.in) adhering to OWASP top-tier cybersecurity protocols.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Your Rights &amp; Archival Requests</h2>
              <p>
                Collectors and site visitors may at any time request an export or permanent redaction of their contact records from our client communications registry by contacting:
              </p>
              <div className={styles.contactBox}>
                <strong>Dawson Wells Gallery — Curatorial Registrar</strong><br />
                524 West 24th Street, Chelsea, New York, NY 10011<br />
                Email: <a href="mailto:privacy@dawsonwellsgallery.com">privacy@dawsonwellsgallery.com</a><br />
                Telephone: +1 (212) 589-4200
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.cardHeader}>
                <Shield size={18} className={styles.goldIcon} />
                <h3>Collector Assurances</h3>
              </div>
              <ul className={styles.cardList}>
                <li>Zero third-party advertising tracking</li>
                <li>Encrypted inquiry submissions</li>
                <li>Discreet private collection provenance</li>
                <li>Dedicated archival registration</li>
              </ul>
              <Link href="/contact" className={styles.sidebarBtn}>Contact Directorate</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
