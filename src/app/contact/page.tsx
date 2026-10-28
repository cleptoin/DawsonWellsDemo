'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  Check,
  ShieldCheck,
  Navigation,
  Compass,
} from 'lucide-react';
import { GALLERY_LOCATIONS, GALLERY_OVERVIEW } from '@/data/gallery';
import { ARTWORKS_DATA } from '@/data/artworks';
import styles from './contact.module.css';

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState<'nyc-flagship' | 'london-mayfair'>('nyc-flagship');

  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'New York Flagship (Chelsea)',
    subject: 'Schedule Private Viewing',
    artworkInterest: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dossierNumber, setDossierNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `DWG-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setDossierNumber(ref);
    setFormSubmitted(true);
  };

  const selectedLocData = GALLERY_LOCATIONS.find(l => l.id === activeLocation) || GALLERY_LOCATIONS[0];

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={styles.headerArea}>
        <div className="container-wide">
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadActive}>Contact & Gallery Visit</span>
          </div>

          <div className={styles.headerTop}>
            <span className="gallery-label">Physical Salons & Curatorial Inquiries</span>
            <span className={styles.flagshipPill}>New York • London</span>
          </div>

          <h1 className={styles.pageTitle}>Contact & Visit</h1>
          <p className={styles.pageLead}>
            We welcome collectors, museum scholars, and architectural patrons to experience the Dawson Wells collection in person at our Chelsea flagship or Mayfair gallery.
          </p>
        </div>
      </section>

      {/* Flagship Locations Showcase */}
      <section className={styles.locationsSection}>
        <div className="container-wide">
          {/* Location Toggle Tabs */}
          <div className={styles.locationTabs}>
            {GALLERY_LOCATIONS.map(loc => (
              <button
                key={loc.id}
                className={`${styles.locTab} ${activeLocation === loc.id ? styles.activeLocTab : ''}`}
                onClick={() => setActiveLocation(loc.id as any)}
              >
                <span className={styles.locTabCity}>{loc.city}</span>
                <span className={styles.locTabNeigh}>{loc.neighborhood}</span>
              </button>
            ))}
          </div>

          {/* Active Location Detail Panel */}
          <div className={styles.activeLocationCard}>
            <div className={styles.locImageWrapper}>
              <Image
                src={selectedLocData.image}
                alt={selectedLocData.title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.locImage}
              />
              <div className={styles.locImageBadge}>
                <MapPin size={14} />
                <span>{selectedLocData.neighborhood}, {selectedLocData.city}</span>
              </div>
            </div>

            <div className={styles.locContent}>
              <span className="gallery-label">Flagship Salon</span>
              <h2 className={styles.locTitle}>{selectedLocData.title}</h2>
              <p className={styles.locAddress}>
                {selectedLocData.address}<br />
                {selectedLocData.city}, {selectedLocData.postalCode}<br />
                {selectedLocData.country}
              </p>

              <div className={styles.infoBlock}>
                <div className={styles.infoRow}>
                  <Clock size={16} className={styles.infoIcon} />
                  <div>
                    <strong>Public Gallery Hours:</strong>
                    {selectedLocData.hours.map((h, i) => (
                      <p key={i}>{h.days}: {h.time}</p>
                    ))}
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <Calendar size={16} className={styles.infoIcon} />
                  <div>
                    <strong>Private Appointments:</strong>
                    <p>{selectedLocData.appointmentNote}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <Navigation size={16} className={styles.infoIcon} />
                  <div>
                    <strong>Transit & Directions:</strong>
                    <p>{selectedLocData.directions}</p>
                  </div>
                </div>
              </div>

              <div className={styles.locContactMethods}>
                <a href={`tel:${selectedLocData.phone.replace(/[^0-9+]/g, '')}`} className={styles.contactMethod}>
                  <Phone size={14} />
                  <span>{selectedLocData.phone}</span>
                </a>
                <a href={`mailto:${selectedLocData.email}`} className={styles.contactMethod}>
                  <Mail size={14} />
                  <span>{selectedLocData.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Inquiry & Contact Form Section */}
      <section className={styles.formSection} id="inquiry-form">
        <div className="container">
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <span className="gallery-label">Direct Communication</span>
              <h2 className={styles.formTitle}>Initiate a Curatorial Inquiry</h2>
              <p className={styles.formSub}>
                Whether inquiring regarding artwork acquisitions, requesting an exhibition loan, or scheduling a private viewing walkthrough, our Curatorial Office provides discreet assistance.
              </p>
            </div>

            {formSubmitted ? (
              <div className={styles.successBox}>
                <div className={styles.successCheck}>
                  <Check size={28} />
                </div>
                <span className="gallery-label">Inquiry Dispatched</span>
                <h3>Dossier Registered Successfully</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your communication has been dispatched to the Dawson Wells Gallery Curatorial Office. A Senior Specialist will respond within 24 business hours.
                </p>
                <div className={styles.refTag}>
                  <span>Inquiry Reference ID:</span>
                  <strong>{dossierNumber}</strong>
                </div>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      location: 'New York Flagship (Chelsea)',
                      subject: 'Schedule Private Viewing',
                      artworkInterest: '',
                      message: '',
                    });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.gridTwo}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Katherine Thorne"
                      className={styles.input}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="katherine@thornecollection.org"
                      className={styles.input}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.gridTwo}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Telephone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (212) 555-0144"
                      className={styles.input}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Preferred Gallery Location</label>
                    <select
                      className={styles.select}
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                    >
                      <option value="New York Flagship (Chelsea)">New York Flagship (Chelsea)</option>
                      <option value="London (Mayfair)">London (Mayfair)</option>
                      <option value="Digital / Private Virtual Viewing">Digital / Private Virtual Viewing</option>
                    </select>
                  </div>
                </div>

                <div className={styles.gridTwo}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Inquiry Subject</label>
                    <select
                      className={styles.select}
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Schedule Private Viewing">Schedule Private Viewing Walkthrough</option>
                      <option value="Artwork Acquisition & Provenance">Artwork Acquisition & Provenance Dossier</option>
                      <option value="Museum Loan & Exhibition">Museum Loan & Curatorial Collaboration</option>
                      <option value="Architectural Commission">Architectural Commission Consultation</option>
                      <option value="Press & Monograph Inquiries">Press & Monograph Inquiries</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Specific Artwork of Interest (Optional)</label>
                    <select
                      className={styles.select}
                      value={formData.artworkInterest}
                      onChange={e => setFormData({ ...formData, artworkInterest: e.target.value })}
                    >
                      <option value="">General Collection Inquiry</option>
                      {ARTWORKS_DATA.map(art => (
                        <option key={art.id} value={art.title}>
                          {art.title} ({art.year} • {art.category})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Curatorial Message or Special Request *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please include details regarding preferred viewing dates, collection context, or framing and shipping requirements..."
                    className={styles.textarea}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className={styles.formFooter}>
                  <div className={styles.privacyAssurance}>
                    <ShieldCheck size={16} className={styles.shield} />
                    <span>All client communications are strictly confidential under Dawson Wells Gallery privacy covenants.</span>
                  </div>

                  <button type="submit" className="btn-primary">
                    <span>Submit Inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Curatorial & Advisory Department Contacts */}
      <section className={styles.directorySection} id="advisory">
        <div className="container-wide">
          <div className={styles.directoryHeader}>
            <span className="gallery-label">Specialist Directory</span>
            <h2>Departmental Contacts</h2>
          </div>

          <div className={styles.departmentsGrid}>
            <div className={styles.deptCard}>
              <span className="gallery-label">Directorate</span>
              <h3>Private Client Advisory</h3>
              <p>Advising private patrons, foundation directors, and family offices on collection acquisition, conservation, and estate placement.</p>
              <a href="mailto:advisory@yourgallery.com" className={styles.deptEmail}>
                advisory@yourgallery.com
              </a>
            </div>

            <div className={styles.deptCard}>
              <span className="gallery-label">Institutional</span>
              <h3>Museum Loans & Exhibitions</h3>
              <p>Facilitating scholarly museum loans, biennial presentations, and academic catalog raisonné research inquiries.</p>
              <a href="mailto:curatorial@yourgallery.com" className={styles.deptEmail}>
                curatorial@yourgallery.com
              </a>
            </div>

            <div className={styles.deptCard}>
              <span className="gallery-label">Editorial</span>
              <h3>Press & Monograph Publications</h3>
              <p>High-resolution press image requests, monograph distribution, and curatorial interview inquiries.</p>
              <a href="mailto:press@yourgallery.com" className={styles.deptEmail}>
                press@yourgallery.com
              </a>
            </div>

            <div className={styles.deptCard}>
              <span className="gallery-label">Registrar</span>
              <h3>Registrar & Archival Framing</h3>
              <p>Inquiries regarding museum crating, international climate-controlled art transit, and custom timber framing.</p>
              <a href="mailto:registrar@yourgallery.com" className={styles.deptEmail}>
                registrar@yourgallery.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
