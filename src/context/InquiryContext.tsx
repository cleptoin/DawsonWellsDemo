'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Artwork } from '@/data/artworks';

interface InquiryContextType {
  isOpen: boolean;
  selectedArtwork: Artwork | null;
  inquiryType: 'artwork' | 'viewing' | 'general';
  openInquiry: (artwork?: Artwork | null, type?: 'artwork' | 'viewing' | 'general') => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [inquiryType, setInquiryType] = useState<'artwork' | 'viewing' | 'general'>('general');

  const openInquiry = (artwork?: Artwork | null, type: 'artwork' | 'viewing' | 'general' = 'artwork') => {
    setSelectedArtwork(artwork || null);
    setInquiryType(type);
    setIsOpen(true);
  };

  const closeInquiry = () => {
    setIsOpen(false);
    // keep selectedArtwork briefly for smooth close animation
  };

  return (
    <InquiryContext.Provider
      value={{
        isOpen,
        selectedArtwork,
        inquiryType,
        openInquiry,
        closeInquiry,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
