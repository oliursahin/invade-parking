'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useRef, useEffect, useState, useMemo } from 'react';

// Breakpoint constants for responsive design
const BREAKPOINTS = {
  SMALL_MOBILE: 390,    // iPhone 12 mini, iPhone SE
  MOBILE: 768,          // Standard mobile breakpoint
  TABLET: 1024,         // iPad and tablet devices
} as const;

// Type definitions
type ViewportState = {
  isMobile: boolean;
  isLargeMobile: boolean;
  isTablet: boolean;
};

// Style helper functions for responsive design
const getResponsiveValue = (
  mobile: string | number, 
  largeMobile: string | number, 
  tablet: string | number, 
  desktop: string | number, 
  viewport: ViewportState
): string | number => {
  if (viewport.isMobile) {
    return viewport.isLargeMobile ? largeMobile : mobile;
  }
  return viewport.isTablet ? tablet : desktop;
};

const createResponsiveStyles = (viewport: ViewportState) => ({
  // Hero section styles
  heroContainer: {
    padding: getResponsiveValue('0 16px', '0 16px', '0 0 0 40px', '0 0 0 80px', viewport),
    marginTop: getResponsiveValue(80, 100, 120, 150, viewport),
    marginBottom: 0,
  },

  heroTitle: {
    fontFamily: '"IBM Plex Sans Condensed", sans-serif',
    fontWeight: 500,
    fontSize: getResponsiveValue(24, 32, 42, 36, viewport),
    lineHeight: 1.13,
    margin: 0,
    letterSpacing: '-0.03em',
    color: '#F7F8F8',
    marginBottom: 8,
    textAlign: 'left' as const,
    maxWidth: getResponsiveValue('calc(100% - 32px)', 'calc(100% - 32px)', 800, 650, viewport),
    wordWrap: 'break-word' as const,
    overflowWrap: 'break-word' as const,
  },

  heroSubtitle: {
    fontFamily: '"IBM Plex Sans Condensed", sans-serif',
    fontWeight: 500,
    fontSize: getResponsiveValue(14, 16, 18, 16, viewport),
    color: '#B5B6B6',
    marginBottom: getResponsiveValue(16, 20, 28, 24, viewport),
    maxWidth: getResponsiveValue('calc(100% - 32px)', 'calc(100% - 32px)', 800, 650, viewport),
    textAlign: 'left' as const,
    lineHeight: 1.6,
    wordWrap: 'break-word' as const,
    overflowWrap: 'break-word' as const,
  },

  ctaContainer: {
    display: 'flex',
    gap: getResponsiveValue(12, 16, 20, 18, viewport),
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    flexWrap: 'wrap' as const,
  },

  ctaButton: {
    background: 'none',
    color: '#fff',
    border: 'none',
    padding: 0,
    fontFamily: '"IBM Plex Sans Condensed", sans-serif',
    fontWeight: 500,
    fontSize: getResponsiveValue(13, 15, 16, 15, viewport),
    cursor: 'pointer',
    boxShadow: 'none',
    transition: 'color 0.18s',
    textDecoration: 'underline',
  },

  // Section spacing
  sectionSpacing: {
    width: '100%',
    marginTop: getResponsiveValue(-300, -300, -50, -100, viewport),
  },

  // Steps section styles
  stepsSection: {
    width: '100%',
    minHeight: getResponsiveValue('80vh', '80vh', '100vh', '100vh', viewport),
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: getResponsiveValue('0px 0 64px 0', '0px 0 64px 0', '40px 0 80px 0', '0px 0 64px 0', viewport),
    background: '#08090A',
    position: 'relative' as const,
  },

  stepsContainer: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: getResponsiveValue(900, 900, 1000, 900, viewport),
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 0,
  },

  stepItem: (isFirst: boolean, viewport: ViewportState) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: isFirst 
      ? getResponsiveValue('0 0 40px 0', '0 0 48px 0', '0 0 100px 0', '0 0 80px 0', viewport)
      : getResponsiveValue('40px 0', '48px 0', '100px 0', '80px 0', viewport),
    position: 'relative' as const,
    zIndex: 1,
  }),

  stepContent: (isLeft: boolean, viewport: ViewportState) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: isLeft ? 'flex-end' : 'flex-start',
    justifyContent: 'center',
    textAlign: isLeft ? 'right' as const : 'left' as const,
    paddingRight: isLeft ? getResponsiveValue(20, 24, 50, 40, viewport) : 0,
    paddingLeft: isLeft ? 0 : getResponsiveValue(20, 24, 50, 40, viewport),
  }),

  stepNumber: (isActive: boolean, viewport: ViewportState) => ({
    fontFamily: '"IBM Plex Sans Condensed", sans-serif',
    fontWeight: 400,
    fontSize: getResponsiveValue(13, 14, 16, 15, viewport),
    color: isActive ? '#fff' : '#B5B6B6',
    marginBottom: 6,
    opacity: 0.9,
    transition: 'color 0.3s',
  }),

  stepText: (isActive: boolean, viewport: ViewportState) => ({
    fontFamily: '"IBM Plex Sans Condensed", sans-serif',
    fontWeight: 500,
    fontSize: getResponsiveValue(14, 16, 18, 16, viewport),
    color: isActive ? '#fff' : '#B5B6B6',
    opacity: 1,
    maxWidth: getResponsiveValue(250, 300, 400, 320, viewport),
    transition: 'color 0.3s',
  }),

  // Footer styles
  footer: (viewport: ViewportState) => ({
    textAlign: 'center' as const,
    padding: getResponsiveValue('80px 0 60px 0', '100px 0 80px 0', '80px 0 60px 0', '32px 0 16px 0', viewport),
    color: '#6b7280',
    fontSize: '0.92rem',
    fontWeight: 400,
    background: '#08090A',
    marginTop: getResponsiveValue('60px', '80px', '80px', '32px', viewport),
    minHeight: getResponsiveValue('200px', '240px', '220px', 'auto', viewport),
  }),

  footerBrandContainer: (viewport: ViewportState) => ({
    textAlign: 'center' as const,
    position: 'relative' as const,
    height: getResponsiveValue('120px', '140px', '140px', '120px', viewport),
    overflow: 'hidden' as const,
  }),

  footerBrandText: (viewport: ViewportState) => ({
    fontSize: getResponsiveValue('3rem', '4rem', '6rem', '8rem', viewport),
    fontWeight: '900',
    color: getResponsiveValue('#1A1B1E', '#1A1B1E', '#2A2B2E', '#1A1B1E', viewport),
    margin: 0,
    lineHeight: '1',
    letterSpacing: '-0.05em',
    userSelect: 'none' as const,
    position: 'relative' as const,
    top: getResponsiveValue('10px', '15px', '15px', '20px', viewport),
    opacity: '1',
  }),

  footerGradient: (viewport: ViewportState) => ({
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: getResponsiveValue('20px', '30px', '35px', '40px', viewport),
    background: 'linear-gradient(to bottom, transparent 0%, #08090A 100%)',
    pointerEvents: 'none' as const,
  }),
});

// Custom hook for viewport detection
function useViewport() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeMobile, setIsLargeMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width <= BREAKPOINTS.MOBILE);
      setIsLargeMobile(width > BREAKPOINTS.SMALL_MOBILE && width <= BREAKPOINTS.MOBILE);
      setIsTablet(width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET);
    };
    
    // Debounce function to limit resize event frequency
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const debouncedCheckViewport = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(checkViewport, 150); // 150ms debounce delay
    };
    
    // Initial check
    checkViewport();
    
    // Add debounced resize listener
    window.addEventListener('resize', debouncedCheckViewport);
    
    return () => {
      window.removeEventListener('resize', debouncedCheckViewport);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return { isMobile, isLargeMobile, isTablet };
}

export default function Home() {
  const viewport = useViewport();
  const styles = useMemo(() => createResponsiveStyles(viewport), [viewport]);

  return (
    <>
      <div style={{ 
        minHeight: '100vh', 
        width: '100%', 
        background: '#08090A', 
        display: 'flex', 
        flexDirection: 'column', 
        marginTop: 0, 
        overflowX: 'hidden'
      }}>
        <main style={{
          width: '100%',
          background: '#08090A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          padding: '0 16px',
          marginTop: 0,
          marginBottom: 0,
          height: 'auto',
        }}>
          <div style={{
            maxWidth: 900,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            ...styles.heroContainer,
          }}>
            <h1 style={styles.heroTitle}>
              ai security engineer that never sleeps.
            </h1>
            <div style={styles.heroSubtitle}>
              reviews every pull request, finds real vulnerabilities, produces poc exploits, and writes patches — automatically.
            </div>
            <div style={styles.ctaContainer}>
              <a
                href="https://app.zerotrail.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.ctaButton,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <FaGithub size={viewport.isTablet ? 18 : 16} style={{ marginRight: 4 }} />
                connect with github
              </a>
              <a
                href="imessage://oliursahin@gmail.com"
                style={styles.ctaButton}
              >
                talk to founder
              </a>
            </div>
          </div>
        </main>
        {/* Main content ends here. Add a clear separation before the scroll feature section. */}
      </div>
      {/* Separate page section for scroll feature section */}
      <div style={styles.sectionSpacing}>
        <ScrollFeatureSection />
      </div>
      <ZerotrailFooter />
    </>
  );
}

// Scroll-based Feature Section extracted as its own component
function ScrollFeatureSection() {
  const { isMobile, isLargeMobile, isTablet } = useViewport();

  const features = [
    {
      title: 'zerotrail understands your codebase and how your application works.',
    },
    {
      title: 'finds complex, multi-step vulnerabilities and tests your code like an attacker.',
    },
    {
      title: 'reviews every changes in your vibe codes.',
    },
    {
      title: 'generates patch without any human intervention.',
    }
  ];

  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const stepHeight = sectionHeight / features.length;
      let idx = Math.floor((scrollY - sectionTop) / stepHeight);
      idx = Math.max(0, Math.min(features.length - 1, idx));
      setActive(idx);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        minHeight: isMobile ? '80vh' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isTablet ? '40px 0 80px 0' : '0px 0 64px 0',
        background: '#08090A',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: isTablet ? 1000 : 900,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 0,
      }}>
        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          background: '#222',
          zIndex: 0,
        }} />
        {features.map((f, i) => {
          const isLeft = i % 2 === 0;
          const isActive = i === active;
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                alignItems: 'center',
                width: '100%',
                margin: i === 0 ? (isMobile ? (isLargeMobile ? '0 0 48px 0' : '0 0 40px 0') : (isTablet ? '0 0 100px 0' : '0 0 80px 0')) : (isMobile ? (isLargeMobile ? '48px 0' : '40px 0') : (isTablet ? '100px 0' : '80px 0')),
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Step content */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: isLeft ? 'flex-end' : 'flex-start',
                justifyContent: 'center',
                textAlign: isLeft ? 'right' : 'left',
                paddingRight: isLeft ? (isMobile ? (isLargeMobile ? 24 : 20) : (isTablet ? 50 : 40)) : 0,
                paddingLeft: isLeft ? 0 : (isMobile ? (isLargeMobile ? 24 : 20) : (isTablet ? 50 : 40)),
              }}>
                <div style={{
                  fontFamily: '"IBM Plex Sans Condensed", sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? (isLargeMobile ? 14 : 13) : (isTablet ? 16 : 15),
                  color: isActive ? '#fff' : '#B5B6B6',
                  marginBottom: 6,
                  opacity: 0.9,
                  transition: 'color 0.3s',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{
                  fontFamily: '"IBM Plex Sans Condensed", sans-serif',
                  fontWeight: 500,
                  fontSize: isMobile ? (isLargeMobile ? 16 : 14) : (isTablet ? 18 : 16),
                  color: isActive ? '#fff' : '#B5B6B6',
                  opacity: 1,
                  maxWidth: isMobile ? (isLargeMobile ? 300 : 250) : (isTablet ? 400 : 320),
                  transition: 'color 0.3s',
                }}>{f.title}</div>
              </div>
              {/* Spacer for symmetry */}
              <div style={{ flex: 1 }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Footer copied from zerotrail page
function ZerotrailFooter() {
  const { isMobile, isLargeMobile, isTablet } = useViewport();

  return (
    <footer style={{
      textAlign: 'center',
      padding: isMobile ? (isLargeMobile ? '100px 0 80px 0' : '80px 0 60px 0') : (isTablet ? '80px 0 60px 0' : '32px 0 16px 0'),
      color: '#6b7280',
      fontSize: '0.92rem',
      fontWeight: 400,
      background: '#08090A',
      marginTop: isMobile ? (isLargeMobile ? '80px' : '60px') : (isTablet ? '80px' : '32px'),
      minHeight: isMobile ? (isLargeMobile ? '240px' : '200px') : (isTablet ? '220px' : 'auto'),
    }}>
      {/* Large Brand Text */}
              <div style={{
          textAlign: 'center',
          position: 'relative',
          height: isMobile ? (isLargeMobile ? '140px' : '120px') : (isTablet ? '140px' : '120px'),
          overflow: 'hidden'
        }}>
        <h2 style={{
          fontSize: isMobile ? (isLargeMobile ? '4rem' : '3rem') : (isTablet ? '6rem' : '8rem'),
          fontWeight: '900',
          color: isTablet ? '#2A2B2E' : '#1A1B1E',
          margin: 0,
          lineHeight: '1',
          letterSpacing: '-0.05em',
          userSelect: 'none',
          position: 'relative',
          top: isMobile ? (isLargeMobile ? '15px' : '10px') : (isTablet ? '15px' : '20px'),
          opacity: '1'
        }}>
          zerotrail
        </h2>
        {/* Gradient overlay to create shadow effect */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? (isLargeMobile ? '30px' : '20px') : (isTablet ? '35px' : '40px'),
          background: 'linear-gradient(to bottom, transparent 0%, #08090A 100%)',
          pointerEvents: 'none'
        }}></div>
      </div>
    </footer>
  );
}
