'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import styles from './InquiryModal.module.css';

export default function InquiryModal() {
  const { isOpen, selectedArtwork, inquiryType, closeInquiry } = useInquiry();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'New York Flagship',
    intent: 'Acquisition Inquiry',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (inquiryType === 'viewing') {
      setFormData(prev => ({ ...prev, intent: 'Schedule Private Viewing' }));
    } else if (selectedArtwork) {
      setFormData(prev => ({ ...prev, intent: 'Acquisition Inquiry' }));
    }
  }, [inquiryType, selectedArtwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeInquiry();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeInquiry]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `DWG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(generatedId);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    closeInquiry();
  };

  return (
    <div className={styles.overlay} onClick={closeInquiry} data-lenis-prevent>
      <div className={styles.modalCard} onClick={e => e.stopPropagation()} data-lenis-prevent>
        <button
          className={styles.closeBtn}
          onClick={closeInquiry}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className={styles.successView}>
            <div className={styles.successIcon}>
              <Check size={26} />
            </div>
            <span className="gallery-label">Inquiry Dispatched</span>
            <h2 className={styles.successTitle}>Inquiry Registered</h2>
            <p className={styles.successDesc}>
              Thank you, <strong>{formData.name}</strong>. Your dossier has been logged with the Dawson Wells Gallery Curatorial Office. A Senior Specialist will respond within 24 business hours.
            </p>
            <div className={styles.referenceBadge}>
              <span>Reference Number:</span>
              <strong>{referenceId}</strong>
            </div>
            <button className="btn-primary" onClick={resetAndClose} style={{ marginTop: '0.5rem' }}>
              Return to Gallery
            </button>
          </div>
        ) : (
          <div className={styles.formContainer}>
            {/* Header Strip */}
            <div className={styles.modalHeader}>
              <div className={styles.headerTitleGroup}>
                <span className="gallery-label">Curatorial & Collector Inquiries</span>
                <h2 className={styles.modalTitle}>
                  {selectedArtwork ? 'Artwork Acquisition & Provenance' : 'Private Viewing & Inquiry'}
                </h2>
              </div>
            </div>

            {/* Attached Artwork Mini Pill (Compact) */}
            {selectedArtwork && (
              <div className={styles.attachedArtworkPill}>
                <div className={styles.artworkPillThumb}>
                  <Image
                    src={selectedArtwork.primaryImage}
                    alt={selectedArtwork.title}
                    width={48}
                    height={48}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.artworkPillMeta}>
                  <strong className={styles.pillTitle}>{selectedArtwork.title}</strong>
                  <span className={styles.pillSpec}>
                    {selectedArtwork.year} • {selectedArtwork.category} • {selectedArtwork.dimensionsImperial}
                  </span>
                </div>
                <span className={styles.pillStatus}>{selectedArtwork.status}</span>
              </div>
            )}

            {/* Compact Form (Single Screen, No Scroll) */}
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.rowTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.compactLabel}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Katherine Thorne"
                    className={styles.compactInput}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.compactLabel}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="katherine@thornecollection.org"
                    className={styles.compactInput}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.rowTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.compactLabel}>Telephone</label>
                  <input
                    type="tel"
                    placeholder="+1 (212) 555-0144"
                    className={styles.compactInput}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.compactLabel}>Preferred Location</label>
                  <select
                    className={styles.compactSelect}
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="New York Flagship">New York Flagship (Chelsea)</option>
                    <option value="London Mayfair">London Gallery (Mayfair)</option>
                    <option value="Private Digital Salon">Private Digital Viewing Salon</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.compactLabel}>Inquiry Intent</label>
                <select
                  className={styles.compactSelect}
                  value={formData.intent}
                  onChange={e => setFormData({ ...formData, intent: e.target.value })}
                >
                  <option value="Acquisition Inquiry">Artwork Acquisition & Provenance Dossier</option>
                  <option value="Schedule Private Viewing">Schedule Private Viewing Walkthrough</option>
                  <option value="Museum Loan & Curatorial Collaboration">Museum Loan & Curatorial Collaboration</option>
                  <option value="Architectural Commission">Architectural Commission Consultation</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.compactLabel}>Curatorial Notes or Questions</label>
                <textarea
                  rows={2}
                  placeholder="Specify viewing dates, framing preferences, or collection details..."
                  className={styles.compactTextarea}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className={styles.formBottomBar}>
                <div className={styles.confidentialNote}>
                  <ShieldCheck size={14} className={styles.shieldIcon} />
                  <span>Strictly confidential under Dawson Wells Gallery covenants.</span>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.6rem' }}>
                  <span>Submit Inquiry</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
