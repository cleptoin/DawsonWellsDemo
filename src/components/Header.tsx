'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import SearchOverlay from '@/components/SearchOverlay';
import DWLogo from '@/components/DWLogo';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const { openInquiry } = useInquiry();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [artworksDropdownOpen, setArtworksDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
    setArtworksDropdownOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      >
        <div className={`container-wide ${styles.navWrapper}`}>
          {/* Brand Logo */}
          <Link href="/" className={styles.brand}>
            <DWLogo size={34} />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {/* Artworks Dropdown */}
            <div
              className={styles.navItemWithDropdown}
              onMouseEnter={() => setArtworksDropdownOpen(true)}
              onMouseLeave={() => setArtworksDropdownOpen(false)}
            >
              <Link
                href="/artworks"
                className={`${styles.navLink} ${pathname.startsWith('/artworks') ? styles.activeNavLink : ''}`}
              >
                <span>Artworks</span>
                <ChevronDown size={12} className={styles.chevron} />
              </Link>

              {artworksDropdownOpen && (
                <div className={styles.megaDropdown}>
                  <div className={styles.dropdownInner}>
                    <div className={styles.dropdownCol}>
                      <span className="gallery-label">Collection Overview</span>
                      <Link href="/artworks" className={styles.dropdownMainLink}>
                        All Artworks Index
                        <ArrowUpRight size={13} />
                      </Link>
                      <p className={styles.dropdownDescription}>
                        Explore the permanent Dawson Wells collection across five core artistic disciplines.
                      </p>
                    </div>

                    <div className={styles.dropdownDivider}></div>

                    <div className={styles.dropdownCol}>
                      <span className="gallery-label">Browse by Medium</span>
                      <div className={styles.categoryGrid}>
                        <Link href="/artworks/photography" className={styles.categoryLink}>
                          <span>Photography</span>
                          <span className={styles.catCount}>Platinum & Pigment</span>
                        </Link>
                        <Link href="/artworks/paintings" className={styles.categoryLink}>
                          <span>Paintings</span>
                          <span className={styles.catCount}>Monochromes & Linen</span>
                        </Link>
                        <Link href="/artworks/drawings" className={styles.categoryLink}>
                          <span>Drawings</span>
                          <span className={styles.catCount}>Graphite & Silverpoint</span>
                        </Link>
                        <Link href="/artworks/ceramics" className={styles.categoryLink}>
                          <span>Ceramics</span>
                          <span className={styles.catCount}>Wood-Fired Stoneware</span>
                        </Link>
                        <Link href="/artworks/prints" className={styles.categoryLink}>
                          <span>Prints</span>
                          <span className={styles.catCount}>Aquatint & Woodcut</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Viewing Rooms */}
            <Link
              href="/viewing-rooms"
              className={`${styles.navLink} ${pathname.startsWith('/viewing-rooms') ? styles.activeNavLink : ''}`}
            >
              <span>Viewing Rooms</span>
            </Link>

            {/* News & Exhibitions */}
            <Link
              href="/news"
              className={`${styles.navLink} ${pathname.startsWith('/news') ? styles.activeNavLink : ''}`}
            >
              <span>Exhibitions & News</span>
            </Link>

            {/* About Dropdown */}
            <div
              className={styles.navItemWithDropdown}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link
                href="/about"
                className={`${styles.navLink} ${pathname.startsWith('/about') ? styles.activeNavLink : ''}`}
              >
                <span>About</span>
                <ChevronDown size={12} className={styles.chevron} />
              </Link>

              {aboutDropdownOpen && (
                <div className={styles.simpleDropdown}>
                  <Link href="/about" className={styles.dropdownItem}>
                    Gallery Overview & Heritage
                  </Link>
                  <Link href="/mission-vision" className={styles.dropdownItem}>
                    Mission & Vision
                  </Link>
                  <Link href="/company-overview" className={styles.dropdownItem}>
                    Company Overview & Directorate
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`${styles.navLink} ${pathname === '/contact' ? styles.activeNavLink : ''}`}
            >
              <span>Contact & Visit</span>
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className={styles.actionControls}>
            <button
              className={styles.searchButton}
              onClick={() => setSearchOpen(true)}
              aria-label="Search collection"
            >
              <Search size={18} />
              <span className={styles.searchButtonText}>Search</span>
            </button>

            <button
              className={styles.inquireBtn}
              onClick={() => openInquiry(null, 'general')}
            >
              Inquire
            </button>

            {/* Mobile Hamburger */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Editorial Drawer */}
        {mobileMenuOpen && (
          <div className={styles.mobileDrawer}>
            <div className={styles.mobileDrawerInner}>
              <div className={styles.mobileNavSection}>
                <span className="gallery-label" style={{ marginBottom: '0.25rem' }}>Curatorial Directory</span>
                <Link href="/" className={styles.mobileNavLink}>
                  <span className={styles.mobileNavNum}>01</span>
                  <span>Home</span>
                </Link>
                <Link href="/artworks" className={styles.mobileNavLink}>
                  <span className={styles.mobileNavNum}>02</span>
                  <span>Artworks Collection</span>
                </Link>
                <div className={styles.mobileDisciplinesPills}>
                  <Link href="/artworks/photography" className={styles.mobileDisciplinePill}>
                    Photography
                  </Link>
                  <Link href="/artworks/paintings" className={styles.mobileDisciplinePill}>
                    Paintings
                  </Link>
                  <Link href="/artworks/drawings" className={styles.mobileDisciplinePill}>
                    Drawings
                  </Link>
                  <Link href="/artworks/ceramics" className={styles.mobileDisciplinePill}>
                    Ceramics
                  </Link>
                  <Link href="/artworks/prints" className={styles.mobileDisciplinePill}>
                    Prints
                  </Link>
                </div>
                <Link href="/viewing-rooms" className={styles.mobileNavLink}>
                  <span className={styles.mobileNavNum}>03</span>
                  <span>Online Viewing Rooms</span>
                </Link>
                <Link href="/news" className={styles.mobileNavLink}>
                  <span className={styles.mobileNavNum}>04</span>
                  <span>Exhibitions &amp; Dispatches</span>
                </Link>
                <Link href="/about" className={styles.mobileNavLink}>
                  <span className={styles.mobileNavNum}>05</span>
                  <span>About Dawson Wells</span>
                </Link>
                <div className={styles.mobileDisciplinesPills}>
                  <Link href="/mission-vision" className={styles.mobileDisciplinePill}>
                    Mission &amp; Vision
                  </Link>
                  <Link href="/company-overview" className={styles.mobileDisciplinePill}>
                    Company Overview
                  </Link>
                </div>
                <Link href="/contact" className={styles.mobileNavLink}>
                  <span className={styles.mobileNavNum}>06</span>
                  <span>Contact &amp; Flagships</span>
                </Link>
              </div>

              <div className={styles.mobileDrawerFooter}>
                <button
                  className="btn-primary"
                  style={{ width: '100%', marginBottom: '1rem' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openInquiry(null, 'general');
                  }}
                >
                  Schedule Private Viewing / Inquire
                </button>
                <div className={styles.mobileFooterLocations}>
                  <p><strong>New York:</strong> 524 W 24th St, Chelsea</p>
                  <p><strong>London:</strong> 14 Old Bond St, Mayfair</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
