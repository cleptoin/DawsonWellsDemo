import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Building2, Users, FileText } from 'lucide-react';
import { GALLERY_OVERVIEW, GALLERY_LOCATIONS } from '@/data/gallery';
import styles from './overview.module.css';

export const metadata: Metadata = {
  title: 'Company Overview & Leadership | Dawson Wells Gallery',
  description: 'Learn about the organizational structure, curatorial leadership team, and global operations of Dawson Wells Gallery.',
};

export default function CompanyOverviewPage() {
  return (
    <div className={styles.page}>
      {/* Top Breadcrumb */}
      <div className={styles.topBar}>
        <div className="container-wide">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <Link href="/about" className={styles.breadLink}>About</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>Company Overview</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container-wide">
          <span className="gallery-label">Organizational Governance</span>
          <h1 className={styles.pageTitle}>Company Overview</h1>
          <p className={styles.pageLead}>
            Dawson Wells Gallery operates as an independent, privately held international art institution headquartered in New York City with European operations anchored in London.
          </p>
        </div>
      </section>

      {/* Institutional Statistics */}
      <section className={styles.statsSection}>
        <div className="container-wide">
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>2018</span>
              <span className={styles.statLabel}>Founded in New York</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Artworks in Permanent Holdings</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Flagship International Spaces (Chelsea & Mayfair)</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Master Studio Disciplines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Narrative */}
      <section className={styles.narrativeSection}>
        <div className="container">
          <div className={styles.narrativeInner}>
            <span className="gallery-label">Corporate & Curatorial Architecture</span>
            <h2>A Pure Digital and Physical Model</h2>
            <div className={styles.prose}>
              <p>
                Dawson Wells Gallery was established to pioneer a modern, highly refined approach to contemporary art presentation. Eschewing the conventional high-volume retail gallery model, our structure is organized around three dedicated divisions:
              </p>
              <div className={styles.divisionItem}>
                <strong>1. The Curatorial & Archival Division:</strong> Responsible for Catalog Raisonné documentation, institutional loan stewardship, academic publishing, and conservation research.
              </div>
              <div className={styles.divisionItem}>
                <strong>2. The Master Studios:</strong> Housing large-format photographic darkrooms, anagama wood-kiln kilns in Upstate New York, printmaking rolling presses, and painting ateliers.
              </div>
              <div className={styles.divisionItem}>
                <strong>3. Private Client & Architectural Advisory:</strong> Managing confidential acquisitions, estate placements, museum gifts, and bespoke architectural site commissions globally.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Bios */}
      <section className={styles.teamSection}>
        <div className="container-wide">
          <div className={styles.teamHeader}>
            <span className="gallery-label">Curatorial Leadership</span>
            <h2>Curatorial Advisory & Directorate (Placeholder Roles)</h2>
            <p className={styles.teamSub}>
              Our executive leadership brings decades of scholarship, museum directorship, and international art advisory experience.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {GALLERY_OVERVIEW.team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.avatarWrap}>
                  {i === 0 ? (
                    <Image
                      src="/images/artist/dawson-wells.jpg"
                      alt={member.name}
                      width={64}
                      height={64}
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                  ) : (
                    <span className={styles.memberInitials}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.memberRole}>{member.role}</span>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagships Architecture */}
      <section className={styles.locationsSection}>
        <div className="container-wide">
          <div className={styles.locationsHeader}>
            <span className="gallery-label">International Presence</span>
            <h2>Our Physical Galleries</h2>
          </div>

          <div className={styles.locationsGrid}>
            {GALLERY_LOCATIONS.map(loc => (
              <div key={loc.id} className={styles.locCard}>
                <div className={styles.locImageWrap}>
                  <Image
                    src={loc.image}
                    alt={loc.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.locImg}
                  />
                  <span className={styles.locCity}>{loc.city}</span>
                </div>
                <div className={styles.locDetails}>
                  <h3>{loc.title}</h3>
                  <p className={styles.locAddress}>{loc.address}, {loc.postalCode}, {loc.country}</p>
                  <p className={styles.locDirections}>{loc.directions}</p>
                  <div className={styles.locActions}>
                    <Link href="/contact" className="btn-link">
                      <span>Full Visitor Information & Hours</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
