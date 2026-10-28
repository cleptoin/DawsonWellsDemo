import React from 'react';
import Image from 'next/image';

interface DWLogoProps {
  size?: number;
  className?: string;
  variant?: 'light' | 'dark' | 'mark-only';
  showText?: boolean;
}

export default function DWLogo({
  size = 32,
  className = '',
  variant = 'light',
  showText = true,
}: DWLogoProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/brand/dw-logo.png"
          alt="Dawson Wells Logo"
          width={size}
          height={size}
          style={{
            objectFit: 'contain',
            filter: variant === 'dark' ? 'invert(1)' : 'none',
          }}
          priority
        />
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: `${Math.max(14, size * 0.44)}px`,
              letterSpacing: '0.14em',
              fontWeight: 400,
              color: variant === 'dark' ? '#FAF9F6' : '#111111',
            }}
          >
            DAWSON WELLS
          </span>
          <span
            style={{
              fontSize: `${Math.max(8, size * 0.22)}px`,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#8E8A82',
              marginTop: '2px',
            }}
          >
            GALLERY • NYC / LDN
          </span>
        </div>
      )}
    </div>
  );
}
