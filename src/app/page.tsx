'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#111',
      color: '#fff',
      fontFamily: '"IBM Plex Sans Condensed", sans-serif',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: '15px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Hero */}
      <main style={{
        flex: 1,
        width: '100%',
        background: '#08090A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        padding: '0 24px',
        marginTop: 0,
      }}>
        <div style={{
          maxWidth: 900,
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '12px 0 40px 0',
        }}>
          <h1 style={{
            fontFamily: '"IBM Plex Sans Condensed", sans-serif',
            fontWeight: 500,
            fontSize: 36,
            lineHeight: 1.13,
            margin: 0,
            letterSpacing: '-0.03em',
            color: '#F7F8F8',
            marginBottom: 24,
            textAlign: 'left',
            maxWidth: 650,
          }}>
            ai security engineer that never sleeps.
          </h1>
          <div style={{
            fontFamily: '"IBM Plex Sans Condensed", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#B5B6B6',
            marginBottom: 32,
            maxWidth: 650,
            textAlign: 'left',
            lineHeight: 1.6,
          }}>
            Integrates into your existing product development stack. Zerotrail detects, analyzes.
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 0 }}>
            <button style={{
              background: 'none',
              color: '#fff',
              border: 'none',
              padding: 0,
              fontFamily: '"IBM Plex Sans Condensed", sans-serif',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: 'none',
              transition: 'color 0.18s',
              textDecoration: 'underline',
            }}>
              <FaGithub size={16} style={{ marginRight: 4 }} />
              connect with github
            </button>
            <button style={{
              background: 'none',
              color: '#fff',
              border: 'none',
              padding: 0,
              fontFamily: '"IBM Plex Sans Condensed", sans-serif',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              boxShadow: 'none',
              transition: 'color 0.18s',
              textDecoration: 'underline',
            }}>
              talk to founder
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
