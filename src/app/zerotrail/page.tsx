'use client';

import React from 'react';

export default function ZerotrailPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000000', 
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000000',
        zIndex: 50,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Empty left space */}
        <div></div>

        {/* Logo - Center */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: '#ffffff',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.875rem',
            color: '#000000',
            fontWeight: '600'
          }}>
            ( )
          </div>
        </div>

        {/* Right Login Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <button style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            border: '1px solid #374151',
            borderRadius: '8px',
            padding: '8px 16px',
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Headline */}
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#ffffff',
          letterSpacing: '-0.025em',
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px'
        }}>
          Autonomous Developer Security
        </h1>
        
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#9ca3af',
          letterSpacing: '-0.025em',
          marginBottom: '32px',
          maxWidth: '900px',
          margin: '0 auto 32px'
        }}>
          for Modern Teams
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '0.875rem',
          lineHeight: '1.6',
          color: '#9ca3af',
          fontWeight: '400',
          marginBottom: '48px',
          maxWidth: '700px',
          margin: '0 auto 48px'
        }}>
          Ship secure code faster with AI-powered security analysis that integrates seamlessly into your development workflow. Catch vulnerabilities before they reach production.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '64px'
        }}>
          <button style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}>
            Connect with Github
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </button>
          
          <button style={{
            backgroundColor: 'transparent',
            color: '#9ca3af',
            border: '1px solid #333333',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Founder
          </button>
        </div>

        {/* Free Trial Text */}
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          14 days free no creds required
        </p>
      </section>

      {/* Product Showcase */}
      <section style={{
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Dashboard Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src="/PNG image.png" 
            alt="Zerotrail Security Analysis Dashboard"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '0px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid #1f2937'
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingTop: '80px',
        paddingBottom: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 25px 50px -12px rgba(0, 0, 0, 0.6)'
      }}>
        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            margin: 0
          }}>
            © 2025 zerotrail. All rights reserved.{' '}
            <a href="#terms" style={{
              color: '#9ca3af',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}>
              Terms
            </a>
          </p>
        </div>

        {/* Large Brand Text */}
        <div style={{
          textAlign: 'center',
          position: 'relative',
          height: '120px',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: '8rem',
            fontWeight: '900',
            color: '#202124',
            margin: 0,
            lineHeight: '1',
            letterSpacing: '-0.05em',
            userSelect: 'none',
            position: 'relative',
            top: '20px',
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
            height: '40px',
            background: 'linear-gradient(to bottom, transparent 0%, #000000 100%)',
            pointerEvents: 'none'
          }}></div>
        </div>
      </footer>
    </div>
  );
} 