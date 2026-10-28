import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, Eye, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_OVERVIEW } from '@/data/gallery';
import styles from './mission-vision.module.css';

export const metadata: Metadata = {
  title: 'Mission & Vision | Dawson Wells Gallery',
  description: 'Our institutional mission: creating transcendent physical encounters with contemporary art dedicated to material autonomy, timeless form, and architectural presence.',
};

export default function MissionVisionPage() {
  return (
    <div className={styles.page}>
      {/* Editorial Breadcrumbs */}
      <div className={styles.topBar}>
        <div className="container-wide">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/about" className={styles.breadLink}>About</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>Mission & Vision</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="gallery-label">Institutional Manifesto</span>
            <h1 className={styles.pageTitle}>Mission & Vision</h1>
            <p className={styles.leadStatement}>
              We exist to create quiet sanctuaries of physical contemplation in an accelerated world — preserving the irreplaceable authority of natural materials, master craftsmanship, and architectural dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Two Pillars: Mission vs Vision */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.splitContainer}>
            <div className={styles.card}>
              <div className={styles.iconWrap}>
                <Compass size={28} />
              </div>
              <span className="gallery-label">Our Sacred Mandate</span>
              <h2>The Mission</h2>
              <p className={styles.cardBody}>
                {GALLERY_OVERVIEW.mission}
              </p>
              <div className={styles.tenetList}>
                <div className={styles.tenet}>
                  <strong>Permanent Craftsmanship:</strong> Rejecting ephemeral, mass-produced digital tokens in favor of objects that require hundreds of hours of manual labor.
                </div>
                <div className={styles.tenet}>
                  <strong>Material Autonomy:</strong> Honoring the chemical and tactile truth of raw limestone, charred wood, unprimed linen, and pure platinum salts.
                </div>
                <div className={styles.tenet}>
                  <strong>Acoustic Calm:</strong> Providing gallery spaces in New York and London free from commercial frenzy, optimized for deep aesthetic contemplation.
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrap}>
                <Eye size={28} />
              </div>
              <span className="gallery-label">Global Aspiration</span>
              <h2>The Vision</h2>
              <p className={styles.cardBody}>
                {GALLERY_OVERVIEW.vision}
              </p>
              <div className={styles.tenetList}>
                <div className={styles.tenet}>
                  <strong>International Institutional Stature:</strong> Partnering with premier museums globally (Whitney, SFMOMA, Tate Modern, Fondation Beyeler) for scholarly retrospectives.
                </div>
                <div className={styles.tenet}>
                  <strong>Architectural Integration:</strong> Working directly with leading world architects to create site-specific monumental works conceived as load-bearing spiritual anchors.
                </div>
                <div className={styles.tenet}>
                  <strong>Enduring Provenance:</strong> Maintaining an exhaustive Catalog Raisonné archive ensuring generational value and historic scholarship.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Covenants */}
      <section className={styles.covenantSection}>
        <div className="container">
          <div className={styles.covenantInner}>
            <span className="gallery-label">Institutional Covenants</span>
            <h2 className={styles.covenantTitle}>Our Guiding Precepts</h2>

            <div className={styles.preceptsGrid}>
              <div className={styles.preceptItem}>
                <span className={styles.preceptNum}>01</span>
                <h3>The Primacy of the Physical Object</h3>
                <p>Art does not achieve its ultimate resonance through a screen. True art demands the physical interplay of daylight, room volume, human scale, and surface texture.</p>
              </div>

              <div className={styles.preceptItem}>
                <span className={styles.preceptNum}>02</span>
                <h3>Conservation Without Compromise</h3>
                <p>Every artwork leaving our studios is crafted using archival museum-grade substrates, UV-filtering Tru-Vue Optium glazing, and acid-free rag papers formulated to survive centuries.</p>
              </div>

              <div className={styles.preceptItem}>
                <span className={styles.preceptNum}>03</span>
                <h3>Exclusivity of Collection</h3>
                <p>We do not operate as an open commercial market. The works presented are exclusively from the Dawson Wells collection, ensuring unified aesthetic rigor and provenance purity.</p>
              </div>

              <div className={styles.preceptItem}>
                <span className={styles.preceptNum}>04</span>
                <h3>Discreet Private Stewardship</h3>
                <p>We forge lifelong relationships with private collectors and foundations, offering confidential private viewing salons and tailored collection management.</p>
              </div>
            </div>

            <div className={styles.nextActions}>
              <Link href="/about/overview" className="btn-primary">
                <span>Company Overview & Leadership</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/artworks" className="btn-secondary">
                <span>Explore the Collection</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
