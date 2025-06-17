'use client';

import React, { useState, useEffect } from 'react';
import { SiLinear, SiNotion } from 'react-icons/si';
import { SiJira, SiGithub, SiSlack, SiBitbucket } from 'react-icons/si';
import { VscGitPullRequest } from 'react-icons/vsc';
import { SiSnyk, SiCheckmarx } from 'react-icons/si';
import { FaBug } from 'react-icons/fa';

export default function ZerotrailPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-10px, -5px) scale(1.02); }
          50% { transform: translate(5px, -10px) scale(0.98); }
          75% { transform: translate(-5px, 5px) scale(1.01); }
        }
      `}</style>
    <div style={{ 
      minHeight: '100vh', 
        background: '#060707', 
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#060707',
        zIndex: 50,
        padding: isMobile ? '0 16px' : '0 24px',
        height: isMobile ? '56px' : '64px',
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
          transform: 'translateX(-50%)',
          marginTop: isMobile ? '4px' : '8px'
        }}>
          <div style={{
            width: isMobile ? '24px' : '28px',
            height: isMobile ? '24px' : '28px',
            background: '#ffffff',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? '0.65rem' : '0.75rem',
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
            backgroundColor: '#101214',
            color: '#ffffff',
            border: '1px solid #374151',
            borderRadius: '8px',
            padding: isMobile ? '6px 12px' : '8px 16px',
            fontSize: isMobile ? '0.8rem' : '0.875rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        paddingTop: isMobile ? '80px' : '120px',
        paddingBottom: isMobile ? '40px' : '80px',
        paddingLeft: isMobile ? '16px' : '24px',
        paddingRight: isMobile ? '16px' : '24px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}>

        
        {/* Content wrapper with higher z-index */}
        <div style={{
          position: 'relative',
          zIndex: 2
      }}>
        {/* Main Headline */}
        <h1 style={{
          fontSize: isMobile ? '1.25rem' : '1.5rem',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#ffffff',
          letterSpacing: '-0.025em',
          marginBottom: isMobile ? '16px' : '24px',
          maxWidth: '900px',
          margin: isMobile ? '0 auto 16px' : '0 auto 24px'
        }}>
          Autonomous Developer Security
        </h1>
        
        <h1 style={{
          fontSize: isMobile ? '1.25rem' : '1.5rem',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#9ca3af',
          letterSpacing: '-0.025em',
          marginBottom: isMobile ? '24px' : '32px',
          maxWidth: '900px',
          margin: isMobile ? '0 auto 24px' : '0 auto 32px'
        }}>
          for Modern Teams
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: isMobile ? '0.8rem' : '0.875rem',
          lineHeight: '1.6',
          color: '#9ca3af',
          fontWeight: '400',
          marginBottom: isMobile ? '32px' : '48px',
          maxWidth: '700px',
          margin: isMobile ? '0 auto 32px' : '0 auto 48px'
        }}>
zerotrail integrates into existing product development stack as an ai security engineer. It detects, analyzes, and suggests mitigations for vulnerabilities at both the code and design levels — before they reach production.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '12px' : '16px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: isMobile ? '20px' : '32px'
        }}>
          <button style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '12px',
            padding: isMobile ? '10px 20px' : '12px 24px',
            fontSize: isMobile ? '0.8rem' : '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}>
            Connect with Github
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </button>
          
          <button style={{
            backgroundColor: 'transparent',
            color: '#9ca3af',
            border: '1px solid #333333',
            borderRadius: '12px',
            padding: isMobile ? '10px 20px' : '12px 24px',
            fontSize: isMobile ? '0.8rem' : '0.875rem',
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
          fontSize: isMobile ? '0.75rem' : '0.8rem',
          color: '#6b7280',
          fontWeight: '400',
          marginBottom: isMobile ? '8px' : '12px'
        }}>
          Start free trial — no credit card required
        </p>
        </div>
      </section>

      {/* Workflow Diagram - Hide on mobile */}
      {!isMobile && (
      <section style={{
        paddingTop: '0px',
        paddingBottom: '20px',
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        height: '280px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%',
          position: 'relative'
        }}>
          <svg width="960" height="280" viewBox="0 0 960 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto' }}>
          {/* Ingest to Zero Trust Engine - horizontal, no arrowhead */}
          <polyline points="200,90 420,90" stroke="#2d323c" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
          {/* Scan to Zero Trust Engine - horizontal, no arrowhead */}
          <polyline points="200,200 420,200" stroke="#2d323c" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
          {/* Zero Trust Engine to PR - upward diagonal, no arrowhead */}
          <polyline points="540,90 750,90" stroke="#2d323c" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
          {/* Zero Trust Engine to Alert - diagonal, no arrowhead */}
          <polyline points="540,200 720,200" stroke="#2d323c" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
          {/* Alert to PR - vertical, no arrowhead */}
          <polyline points="770,200 770,90" stroke="#2d323c" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="strokeWidth">
              <polygon points="0 0, 8 4, 0 8" fill="#2d323c" />
            </marker>
          </defs>
        </svg>
        {/* Ingest Product Spec Node */}
        <div style={{ position: 'absolute', left: 60, top: 40, width: 140, zIndex: 2 }}>
          <div style={{
            border: '1px solid #23272F',
            borderRadius: '8px',
            padding: '10px 12px 8px 12px',
            background: '#060707',
            boxShadow: '0 2px 8px 0 #0006',
            minWidth: 80,
            minHeight: 44,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 6,
          }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              <SiLinear size={14} color="#bdbdbd" />
              <SiNotion size={14} color="#bdbdbd" />
              <SiJira size={14} color="#bdbdbd" />
            </div>
            <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#bdbdbd', letterSpacing: '0.04em', fontWeight: 400, opacity: 0.85 }}>
              INGEST<br />PRODUCT SPEC
            </div>
          </div>
        </div>
        {/* Scan code on every PR Node */}
        <div style={{ position: 'absolute', left: 60, top: 160, width: 140, zIndex: 2 }}>
          <div style={{
            border: '1px solid #23272F',
            borderRadius: '8px',
            padding: '10px 12px 8px 12px',
            background: '#060707',
            boxShadow: '0 2px 8px 0 #0006',
            minWidth: 80,
            minHeight: 44,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 6,
          }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              <SiGithub size={14} color="#bdbdbd" />
              <SiBitbucket size={14} color="#bdbdbd" />
              <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#bdbdbd', fontWeight: 600, opacity: 0.7 }}>CI/CD</span>
            </div>
            <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#bdbdbd', letterSpacing: '0.04em', fontWeight: 400, opacity: 0.85 }}>
              SCAN CODE<br />ON EVERY PR
            </div>
          </div>
        </div>
        {/* Zero Trust Engine Node (center) */}
        <div style={{ position: 'absolute', left: 420, top: 80, width: 120, zIndex: 3 }}>
          <div style={{
            border: '1.5px solid #23272F',
            borderRadius: '10px',
            padding: '28px 0 22px 0',
            background: '#060707',
            boxShadow: '0 4px 18px 0 #000a',
            minWidth: 70,
            minHeight: 90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}>
            <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.95rem', color: '#bdbdbd', fontWeight: 600, letterSpacing: '0.04em', marginBottom: 4 }}>
              ( )
            </div>
            <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.8rem', color: '#bdbdbd', fontWeight: 600, letterSpacing: '0.04em', marginBottom: 1, textAlign: 'center', width: '100%' }}>
              ZERO TRUST<br />ENGINE
            </div>
          </div>
        </div>
        {/* Automated Patch Node - GitHub PR Card Style */}
        <div style={{ position: 'absolute', left: 750, top: 50, width: 180, zIndex: 2 }}>
          <div style={{
            border: '1px solid #23272F',
            borderRadius: '8px',
            padding: '10px 12px 8px 12px',
            background: '#060707',
            boxShadow: '0 2px 8px 0 #0006',
            minWidth: 120,
            minHeight: 44,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 5,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <VscGitPullRequest size={14} color="#bdbdbd" />
              <span style={{
                fontFamily: 'Menlo, monospace',
                fontSize: '0.8rem',
                color: '#e5e7eb',
                fontWeight: 600,
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 120
              }}>
                fix: XSS: Unsanitized SVG Upload..
              </span>
            </div>
            <div style={{
              fontFamily: 'Menlo, monospace',
              fontSize: '0.65rem',
              color: '#6b7280',
              fontWeight: 400,
              letterSpacing: '0.01em'
            }}>
              #1019 opened yesterday by zerotrail <span style={{
                background: '#23272F',
                color: '#bdbdbd',
                borderRadius: 8,
                padding: '1px 6px',
                fontSize: '0.7em',
                marginLeft: 4
              }}>bot</span>
            </div>
          </div>
        </div>
        {/* Alerts Node */}
        <div style={{ position: 'absolute', left: 720, top: 160, width: 100, zIndex: 2 }}>
          <div style={{
            border: '1px solid #23272F',
            borderRadius: '8px',
            padding: '10px 12px 8px 12px',
            background: '#060707',
            boxShadow: '0 2px 8px 0 #0006',
            minWidth: 70,
            minHeight: 44,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 5,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <SiSlack size={14} color="#bdbdbd" />
              <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#bdbdbd', fontWeight: 600, opacity: 0.8 }}>ALERT</span>
            </div>
            <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#bdbdbd', letterSpacing: '0.04em', fontWeight: 400, opacity: 0.85 }}>
              High risk: API key exposed
            </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Features Section - Modernized Card UI */}
      <section style={{
        paddingLeft: isMobile ? '16px' : '24px',
        paddingRight: isMobile ? '16px' : '24px',
        paddingBottom: isMobile ? '60px' : '80px',
        paddingTop: isMobile ? '60px' : '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Headline */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '64px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            fontWeight: 400,
            lineHeight: '1.1',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            marginBottom: isMobile ? '16px' : '24px',
            maxWidth: '900px',
            margin: isMobile ? '0 auto 16px' : '0 auto 24px'
          }}>
            Catch Security Flaws Before Writing a Single Line of Code.
          </h2>
          
          <a href="#example" style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            textDecoration: 'underline',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            See an example security review for React app →
          </a>
        </div>

        {/* Combined Features Section - Minimal, Interactive */}
        <section style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '32px' : '64px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          {/* Left: Feature Titles */}
          <div style={{ minWidth: isMobile ? 'auto' : 260, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {['Identify risky changes', 'Analyze every change', 'Automate secure development'].map((title, idx) => (
              <div
                key={title}
                onClick={() => setActiveFeature(idx)}
                style={{
                  padding: isMobile ? '12px 0 12px 0' : '18px 0 18px 0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: isMobile ? '1rem' : '1.18rem',
                  color: activeFeature === idx ? '#fff' : '#6b7280',
                  fontWeight: 500,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  transition: 'color 0.18s',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: 4,
                  height: isMobile ? 20 : 28,
                  borderRadius: 6,
                  background: activeFeature === idx ? '#22c55e' : '#23272F',
                  marginRight: isMobile ? 12 : 18,
                  transition: 'background 0.18s',
                }} />
                {title}
              </div>
            ))}
          </div>
          {/* Right: Dynamic Feature Card */}
          <div style={{ minWidth: isMobile ? 280 : 320, maxWidth: isMobile ? 380 : 420, flex: 1, display: 'flex', justifyContent: 'center' }}>
            {activeFeature === 0 && (
              <div style={{
                background: '#060707',
                border: '1px solid #23272F',
                borderRadius: '12px',
                boxShadow: 'none',
                padding: '24px 18px',
                minWidth: '320px',
                maxWidth: '420px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                position: 'relative',
              }}>
                {/* Background Document Card (dark) */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  right: '20px',
                  background: '#060707',
                  borderRadius: '8px',
                  border: '1px solid #23272F',
                  padding: '8px',
                  transform: 'rotate(-3deg)',
                  zIndex: 0,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.13)',
                  minHeight: '70px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        background: '#23272F',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #23272F',
                        color: '#4285F4'
                      }}>
                        <SiNotion size={14} color="#bdbdbd" />
                      </div>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#e5e7eb',
                        margin: 0
                      }}>
                        Document
                      </h4>
                    </div>
                    <span style={{
                      background: '#23272F',
                      color: '#facc15',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.625rem',
                      fontWeight: '500',
                      textTransform: 'uppercase'
                    }}>
                      MEDIUM
                    </span>
                  </div>
                  {/* Shadow text lines */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginTop: '12px'
                  }}>
                    <div style={{
                      height: '6px',
                      background: '#23272F',
                      borderRadius: '3px',
                      width: '85%'
                    }} />
                    <div style={{
                      height: '6px',
                      background: '#23272F',
                      borderRadius: '3px',
                      width: '65%'
                    }} />
                  </div>
                </div>
                {/* Main Card (Jira, dark) */}
                <div style={{
                  position: 'relative',
                  background: '#060707',
                  borderRadius: '8px',
                  border: '1px solid #23272F',
                  padding: '8px',
                  zIndex: 1,
                  marginTop: '24px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.13)'
                }}>
                  {/* Header row with icons and labels */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: '#23272F',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #23272F',
                      color: '#0052CC'
                    }}>
                      <SiLinear size={12} color="#bdbdbd" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#e5e7eb',
                        fontFamily: 'Inter, sans-serif',
                        margin: 0
                      }}>
                        AI Shopping Assistant
                      </h4>
                    </div>
                    <span style={{
                      background: '#23272F',
                      color: '#f87171',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.625rem',
                      fontWeight: '500',
                      textTransform: 'uppercase'
                    }}>
                      HIGH
                    </span>
                  </div>
                  {/* Description */}
                  <div style={{
                    borderLeft: '2px solid #22c55e',
                    paddingLeft: '10px',
                    marginBottom: '12px'
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      lineHeight: '1.35',
                      color: '#9ca3af',
                      fontFamily: 'Inter, sans-serif',
                      margin: 0
                    }}>
                      This feature introduces a new virtual assistant experience in our shopping web portal by integrating an LLM-based virtual assistant.
                    </p>
                  </div>
                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <span style={{
                      background: '#23272F',
                      color: '#a1a1aa',
                      padding: '3px 6px',
                      borderRadius: '4px',
                      fontSize: '0.688rem',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Access control
                    </span>
                    <span style={{
                      background: '#23272F',
                      color: '#a1a1aa',
                      padding: '3px 6px',
                      borderRadius: '4px',
                      fontSize: '0.688rem',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      API Changes
                    </span>
                  </div>
                </div>
              </div>
            )}
            {activeFeature === 1 && (
              <div style={{
                background: '#060707',
                borderRadius: '16px',
                border: '1.5px solid #23272F',
                padding: '18px 16px 14px 16px',
                marginBottom: 18,
                width: '100%',
                minHeight: 64,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                boxShadow: '0 4px 24px 0 #0008, 0 1.5px 0 #23272F inset',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Add a subtle glow/highlight overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 18,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(0,0,0,0) 100%)',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  pointerEvents: 'none',
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    margin: 0
                  }}>
                    High Risk Threat Identified
                  </h4>
                  <span style={{
                    background: '#23272F',
                    color: '#f87171',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.625rem',
                    fontWeight: '500',
                    textTransform: 'uppercase'
                  }}>
                    HIGH
                  </span>
                </div>
                <div style={{
                  borderLeft: '2px solid #22c55e',
                  paddingLeft: '12px',
                  marginBottom: '16px'
                }}>
                  <p style={{
                    fontSize: '0.75rem',
                    lineHeight: '1.4',
                    color: '#9ca3af',
                    fontFamily: 'Inter, sans-serif',
                    margin: 0
                  }}>
                    An attacker could upload a ZIP file containing malicious executable files that may be executed during the extraction process
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    background: '#23272F',
                    color: '#a1a1aa',
                    padding: '3px 6px',
                    borderRadius: '4px',
                    fontSize: '0.688rem',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Tampering
                  </span>
                  <span style={{
                    background: '#23272F',
                    color: '#a1a1aa',
                    padding: '3px 6px',
                    borderRadius: '4px',
                    fontSize: '0.688rem',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    CWE-73
                  </span>
                </div>
                <div style={{
                  background: '#060707',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #23272F',
                  opacity: '0.9',
                  color: '#a1a1aa',
                  marginTop: '8px'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#e5e7eb',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500',
                    marginBottom: '4px',
                    opacity: '0.9'
                  }}>
                    What can you do about it
                  </div>
                  <p style={{
                    fontSize: '0.688rem',
                    lineHeight: '1.4',
                    color: '#a1a1aa',
                    fontFamily: 'Inter, sans-serif',
                    margin: 0,
                    opacity: '0.8'
                  }}>
                    Implement strict file type validation for all contents of the ZIP file. Use a secure extraction library that doesn&apos;t automatically
                  </p>
                </div>
              </div>
            )}
            {activeFeature === 2 && (
              <div style={{
                background: '#060707',
                border: '1px solid #23272F',
                borderRadius: '12px',
                boxShadow: 'none',
                padding: '24px 18px',
                minWidth: '320px',
                maxWidth: '420px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                position: 'relative',
              }}>
                {/* Google Docs icon circle (dark) */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  background: '#060707',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #23272F',
                  zIndex: 2,
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}>
                  <SiNotion size={16} color="#bdbdbd" />
                </div>
                <div style={{
                  background: '#060707',
                  borderRadius: '8px',
                  border: '1px solid #23272F',
                  padding: '8px',
                  width: '100%'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: '#23272F',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      color: '#bdbdbd',
                      fontWeight: 700
                    }}>
                      ( )
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: '#e5e7eb',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        zerotrail bot
                      </div>
                      <div style={{
                        fontSize: '0.625rem',
                        color: '#a1a1aa',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        8:44 AM, Today
                      </div>
                    </div>
                  </div>
                  <div style={{
                    background: '#23272F',
                    borderRadius: '8px',
                    padding: '8px',
                    marginTop: '8px'
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      lineHeight: '1.35',
                      color: '#e5e7eb',
                      fontFamily: 'Inter, sans-serif',
                      margin: '0 0 4px 0'
                    }}>
                      Hey Jane 👋
                    </p>
                    <p style={{
                      fontSize: '0.688rem',
                      lineHeight: '1.4',
                      color: '#e5e7eb',
                      fontFamily: 'Inter, sans-serif',
                      margin: '0 0 6px 0'
                    }}>
                      ⚠️ Please note the SendGrid API key must be stored securely.
                    </p>
                    <p style={{
                      fontSize: '0.688rem',
                      lineHeight: '1.4',
                      color: '#e5e7eb',
                      fontFamily: 'Inter, sans-serif',
                      margin: '0'
                    }}>
                      🔒 At ACME, we typically use the <span style={{ color: '#bdbdbd', textDecoration: 'underline' }}>AWS Secret Manager</span> for this&mdash;it aligns with our security best practices and helps prevent risks associated with hard-coded credentials.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* Why Zerotrail Section */}
      <section style={{
        padding: '60px 16px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Separator Line */}
        <div style={{ borderTop: '1px solid #23272F', marginBottom: 32, width: '100%' }} />
        {/* Section Headline */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 400,
            lineHeight: '1.1',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            marginBottom: '8px',
            maxWidth: '900px',
            margin: '0 auto 8px'
          }}>
            AI security engineer that never sleeps
          </h2>
          </div>
        {/* Minimal Three-Column Feature Section (AI Never Sleeps) */}
        <section style={{
          background: '#060707',
          padding: isMobile ? '40px 0 40px 0' : '60px 0 60px 0',
          marginTop: '0px'
        }}>
        <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '40px' : '32px',
            maxWidth: isMobile ? '100%' : '1200px',
            margin: '0 auto',
            alignItems: 'stretch',
            padding: isMobile ? '0 16px' : '0 24px'
          }}>
                        {/* Card 1: Connect Zerotrail to GitHub */}
            <div style={{
              background: '#060707',
              borderRadius: '12px',
              padding: isMobile ? '20px 16px' : '24px 18px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Visual Mockup */}
              <div style={{
                background: '#0A0A0A',
                border: '1px solid #1A1A1A',
                borderRadius: '6px',
                padding: '16px',
                marginBottom: '16px',
                minHeight: '180px'
              }}>
                {/* Zerotrail + GitHub Connection */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  gap: '12px'
                }}>
                  {/* Zerotrail logo/brand */}
                  <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
                    gap: '4px'
          }}>
            <div style={{
                      width: '28px',
                      height: '28px',
                      background: '#111111',
                      border: '1px solid #2A2A2A',
                      borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
                      fontSize: '11px',
                      color: '#B5B6B6',
                      fontWeight: '500'
            }}>
                      ( )
            </div>
                    <span style={{ fontSize: '9px', color: '#6B6B6B' }}>zerotrail</span>
            </div>
                  
                  {/* Connection line */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    <div style={{ width: '8px', height: '1px', background: '#4A4A4A' }} />
                    <div style={{ width: '8px', height: '1px', background: '#4A4A4A' }} />
                    <div style={{ width: '8px', height: '1px', background: '#4A4A4A' }} />
            </div>
                  
                  {/* GitHub */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      background: '#111111',
                      border: '1px solid #2A2A2A',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <SiGithub size={14} color="#B5B6B6" />
          </div>
                    <span style={{ fontSize: '9px', color: '#6B6B6B' }}>GitHub</span>
                  </div>
                </div>
                
                {/* Repository info */}
                <div style={{
                  background: '#111111',
                  border: '1px solid #1A1A1A',
                  borderRadius: '4px',
                  padding: '8px',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '4px'
                  }}>
                    <span style={{ fontSize: '11px', color: '#E5E5E5', fontWeight: '500' }}>
                      company/payment-api
                    </span>
                    <span style={{
                      background: '#2A2A2A',
                      color: '#B5B6B6',
                      padding: '1px 6px',
                      borderRadius: '6px',
                      fontSize: '9px',
                      fontWeight: '500'
                    }}>
                      CONNECTED
                    </span>
                  </div>
                  <div style={{ fontSize: '9px', color: '#6B6B6B' }}>
                    Private • 47 commits • Last scan: 2 min ago
                  </div>
                </div>
                
                {/* Status indicators */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '9px',
                    color: '#8A8A8A'
                  }}>
                    <div style={{
                      width: '3px',
                      height: '3px',
                      background: '#8A8A8A',
                      borderRadius: '50%'
                    }} />
                    <span>Webhooks active</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '9px',
                    color: '#8A8A8A'
                  }}>
                    <div style={{
                      width: '3px',
                      height: '3px',
                      background: '#8A8A8A',
                      borderRadius: '50%'
                    }} />
                    <span>Auto-scanning enabled</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: '500',
                  color: '#ffffff',
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}>
                  Connect Zerotrail to GitHub
                </h3>
                <p style={{
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                  color: '#8A8A8A',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  Get set up in under 2 minutes. Integrates with GitHub, GitLab, and Bitbucket.
                </p>
              </div>
            </div>

                        {/* Card 2: Detect Critical Issues Early */}
            <div style={{
              background: '#060707',
              borderRadius: '12px',
              padding: isMobile ? '20px 16px' : '24px 18px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
                            {/* Visual Mockup */}
              <div style={{
                background: '#0A0A0A',
                border: '1px solid #1A1A1A',
                borderRadius: '6px',
                padding: '16px',
                marginBottom: '16px',
                minHeight: '180px'
              }}>
                {/* Vulnerability Card */}
                <div style={{
                  background: '#111111',
                  border: '1px solid #2A2A2A',
                  borderRadius: '6px',
                  padding: '10px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    display: 'flex',
            alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
                      gap: '6px'
                    }}>
                      <FaBug size={12} color="#B5B6B6" />
                      <span style={{ fontSize: '11px', color: '#E5E5E5', fontWeight: '500' }}>
                        SQL Injection
                      </span>
            </div>
                    <span style={{
                      background: '#2A2A2A',
                      color: '#B5B6B6',
                      padding: '1px 6px',
                      borderRadius: '6px',
                      fontSize: '8px',
                      fontWeight: '500'
                    }}>
                      CRITICAL
                    </span>
            </div>
                  <div style={{ fontSize: '9px', color: '#6B6B6B', marginBottom: '6px' }}>
                    /api/auth/login.ts:42
            </div>
                  <div style={{
                    background: '#0A0A0A',
                    border: '1px solid #1A1A1A',
                    borderRadius: '3px',
                    padding: '6px',
                    fontSize: '8px',
                    fontFamily: 'monospace',
                    color: '#B5B6B6'
                  }}>
                    <div style={{ color: '#8A8A8A' }}>- const query = `SELECT * FROM users WHERE email = '$&#123;email&#125;'`;</div>
                    <div style={{ color: '#8A8A8A' }}>+ const query = `SELECT * FROM users WHERE email = ?`;</div>
          </div>
                </div>
                
                {/* Severity Breakdown */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#111111',
                  border: '1px solid #1A1A1A',
                  borderRadius: '4px',
                  padding: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: '#6B6B6B',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '9px', color: '#B5B6B6' }}>1 Critical</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: '#6B6B6B',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '9px', color: '#B5B6B6' }}>2 High</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: '#4A4A4A',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '9px', color: '#6B6B6B' }}>5 Filtered</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: '500',
                  color: '#ffffff',
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}>
                  Detect Critical Issues Early
                </h3>
                <p style={{
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                  color: '#8A8A8A',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  Uncovers real vulnerabilities like broken authentication and logic flaws with fewer false positives.
                </p>
              </div>
            </div>

            {/* Card 3: Merge Verified Fixes, Not Just Reports */}
          <div style={{
            background: '#060707',
              borderRadius: '12px',
              padding: isMobile ? '20px 16px' : '24px 18px',
            width: '100%',
            display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Visual Mockup */}
              <div style={{
                background: '#0A0A0A',
                border: '1px solid #1A1A1A',
                borderRadius: '6px',
                padding: '16px',
                marginBottom: '16px',
                minHeight: '180px'
              }}>
                {/* Pull Request Header */}
                <div style={{
                  display: 'flex',
            alignItems: 'center',
                  gap: '6px',
                  marginBottom: '10px',
                  padding: '6px',
                  background: '#111111',
                  border: '1px solid #1A1A1A',
                  borderRadius: '4px'
                }}>
                  <VscGitPullRequest size={12} color="#B5B6B6" />
                  <span style={{ fontSize: '10px', color: '#B5B6B6', fontWeight: '500' }}>
                    zerotrail-bot wants to merge 1 commit
                  </span>
                </div>
                
                {/* PR Title & Status */}
                <div style={{
                  background: '#111111',
                  border: '1px solid #2A2A2A',
                  borderRadius: '6px',
                  padding: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}>
                    <span style={{ fontSize: '11px', color: '#E5E5E5', fontWeight: '500' }}>
                      Fix: SQL injection in auth endpoint
                    </span>
                    <span style={{
                      background: '#2A2A2A',
                      color: '#B5B6B6',
                      padding: '1px 6px',
                      borderRadius: '6px',
                      fontSize: '8px',
                      fontWeight: '500'
                    }}>
                      READY TO MERGE
                    </span>
                  </div>
                  <div style={{ fontSize: '9px', color: '#6B6B6B', marginBottom: '8px' }}>
                    #247 • zerotrail-bot • 2 minutes ago
                  </div>
                  
                  {/* Code diff preview */}
                  <div style={{
                    background: '#0A0A0A',
                    border: '1px solid #1A1A1A',
                    borderRadius: '3px',
                    padding: '6px',
                    fontSize: '8px',
                    fontFamily: 'monospace'
                  }}>
                    <div style={{ color: '#6B6B6B', marginBottom: '3px' }}>api/auth/login.ts</div>
                    <div style={{ color: '#8A8A8A' }}>- const query = `SELECT * FROM users WHERE email = '$&#123;email&#125;'`;</div>
                    <div style={{ color: '#8A8A8A' }}>+ const query = `SELECT * FROM users WHERE email = ?`;</div>
                  </div>
                </div>
                
                {/* PR Stats */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '9px',
                  color: '#6B6B6B'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ color: '#8A8A8A' }}>✓ All checks passed</span>
                    <span>+2 -1</span>
                  </div>
                  <span>Confidence: 98%</span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: '500',
                  color: '#ffffff',
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}>
                  Merge Verified Fixes, Not Just Reports
                </h3>
                <p style={{
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
                  color: '#8A8A8A',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  When confident a change is safe, opens a pull request with the fix — ready for review.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* DAST Integration Section */}
      <section style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '24px' : '32px',
        padding: isMobile ? '40px 16px 20px 16px' : '80px 24px 40px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: isMobile ? 'auto' : 320, maxWidth: isMobile ? 'none' : 420, margin: '0 auto', paddingLeft: isMobile ? 0 : 80 }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: '#9ca3af', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.04em' }}>
              Under the hood
            </span>
          </div>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '1.8rem',
            fontWeight: 400,
            color: '#fff',
            marginBottom: 18,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
          }}>
            Built for your security stack
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: 500,
            fontWeight: 400,
            marginBottom: isMobile ? '32px' : 0,
          }}>
            Zerotrail connects to your favorite DAST tools, triages real vulnerabilities in a secure sandbox, and writes production-ready patches as pull requests.
          </p>
        </div>
        {/* Right: Diagram - Simple on mobile, complex on desktop */}
        {isMobile ? (
          /* Mobile: Simple vertical flow */
            <div style={{
              width: '100%',
              display: 'flex',
            flexDirection: 'column',
              alignItems: 'center',
            gap: '20px',
            padding: '20px 0'
          }}>
            {/* DAST Tools Row */}
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <ToolBoxGrey icon={<SiSnyk size={16} color="#bdbdbd" />} />
              <ToolBoxGrey icon={<FaBug size={14} color="#bdbdbd" />} />
              <ToolBoxGrey icon={<SiCheckmarx size={16} color="#bdbdbd" />} />
              <ToolBoxGrey icon={<SiGithub size={16} color="#bdbdbd" />} />
            </div>
            
            {/* Arrow Down */}
            <div style={{ color: '#23272F', fontSize: '20px' }}>↓</div>
            
            {/* Zerotrail Sandbox */}
            <div style={{
              border: '2px solid #23272F',
              borderRadius: '10px',
              padding: '16px 20px 12px 20px',
              background: '#060707',
              boxShadow: '0 4px 18px 0 #000a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}>
              <div style={{ fontFamily: 'Menlo, monospace', fontSize: '1rem', color: '#bdbdbd', fontWeight: 700, letterSpacing: '0.04em', marginBottom: 2 }}>
                ( )
              </div>
              <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.75rem', color: '#bdbdbd', fontWeight: 600, letterSpacing: '0.04em', textAlign: 'center' }}>
                ZEROTRAIL<br />SANDBOX
              </div>
            </div>
            
            {/* Arrow Down */}
            <div style={{ color: '#23272F', fontSize: '20px' }}>↓</div>
            
            {/* PR Output */}
            <div style={{
              border: '1px solid #23272F',
              borderRadius: '8px',
              padding: '10px 12px 8px 12px',
              background: '#060707',
              boxShadow: '0 2px 8px 0 #0006',
              width: '280px',
              maxWidth: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 5,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <VscGitPullRequest size={14} color="#bdbdbd" />
                <span style={{
                  fontFamily: 'Menlo, monospace',
                  fontSize: '0.75rem',
                  color: '#e5e7eb',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: 200
                }}>
                  fix: XSS: Unsanitized SVG Upload..
                </span>
              </div>
              <div style={{
                fontFamily: 'Menlo, monospace',
                fontSize: '0.6rem',
                color: '#6b7280',
                fontWeight: 400,
                letterSpacing: '0.01em'
              }}>
                #1019 opened yesterday by zerotrail <span style={{
                  background: '#23272F',
                  color: '#bdbdbd',
                  borderRadius: 8,
                  padding: '1px 6px',
                  fontSize: '0.7em',
                  marginLeft: 4
                }}>bot</span>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: Complex SVG diagram */
          <div style={{ 
            flex: 1.2, 
            minWidth: 380, 
            position: 'relative', 
            height: '340px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <svg width="100%" height="340" viewBox="0 0 600 340" style={{ position: 'absolute', left: 0, top: 0, zIndex: 1, pointerEvents: 'none' }}>
              {/* DAST tools to Zerotrail ( ) */}
              <polyline points="80,70 210,170" stroke="#23272F" strokeWidth="1.2" fill="none" strokeDasharray="4,4" />
              <polyline points="80,110 210,170" stroke="#23272F" strokeWidth="1.2" fill="none" strokeDasharray="4,4" />
              <polyline points="80,150 210,170" stroke="#23272F" strokeWidth="1.2" fill="none" strokeDasharray="4,4" />
              <polyline points="80,190 210,170" stroke="#23272F" strokeWidth="1.2" fill="none" strokeDasharray="4,4" />
              <polyline points="80,230 210,170" stroke="#23272F" strokeWidth="1.2" fill="none" strokeDasharray="4,4" />
              <polyline points="80,270 210,170" stroke="#23272F" strokeWidth="1.2" fill="none" strokeDasharray="4,4" />
              {/* Zerotrail to PR - straight horizontal greyscale line */}
              <polyline points="300,170 380,170" stroke="#23272F" strokeWidth="1.5" fill="none" />
              </svg>
            {/* DAST Tool Icons - tightly grouped, no bg */}
            <div style={{ 
              position: 'absolute', 
              left: 60, 
              top: 55, 
              width: 40, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 18, 
              zIndex: 2 
            }}>
              <ToolBoxGrey icon={<SiSnyk size={18} color="#bdbdbd" />} />
              <ToolBoxGrey icon={<FaBug size={16} color="#bdbdbd" />} />
              <ToolBoxGrey icon={<SiCheckmarx size={18} color="#bdbdbd" />} />
              <ToolBoxGrey icon={<svg width="18" height="18" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8"/><path d="M8 12h8"/></svg>} />
              <ToolBoxGrey icon={<svg width="18" height="18" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22"/></svg>} />
              <ToolBoxGrey icon={<SiGithub size={18} color="#bdbdbd" />} />
            </div>
            {/* Zerotrail Node (center) */}
            <div style={{ 
              position: 'absolute', 
              left: 210, 
              top: 150, 
              width: 90, 
              zIndex: 2 
            }}>
              <div style={{
                border: '2px solid #23272F',
                borderRadius: '10px',
                padding: '18px 0 12px 0',
                background: '#060707',
                boxShadow: '0 4px 18px 0 #000a',
                minWidth: 70,
                minHeight: 60,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}>
                <div style={{ fontFamily: 'Menlo, monospace', fontSize: '1.05rem', color: '#bdbdbd', fontWeight: 700, letterSpacing: '0.04em', marginBottom: 2 }}>
                  ( )
            </div>
                <div style={{ fontFamily: 'Menlo, monospace', fontSize: '0.8rem', color: '#bdbdbd', fontWeight: 600, letterSpacing: '0.04em', marginBottom: 1, textAlign: 'center', width: '100%' }}>
                  ZEROTRAIL<br />SANDBOX
            </div>
          </div>
        </div>
            {/* PR Output Node - match hero section */}
            <div style={{ 
              position: 'absolute', 
              left: 380, 
              top: 150, 
              width: 180, 
              zIndex: 2 
            }}>
              <div style={{
                border: '1px solid #23272F',
                borderRadius: '8px',
                padding: '10px 12px 8px 12px',
                background: '#060707',
                boxShadow: '0 2px 8px 0 #0006',
                minWidth: 120,
                minHeight: 44,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 5,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  <VscGitPullRequest size={14} color="#bdbdbd" />
                  <span style={{
                    fontFamily: 'Menlo, monospace',
                    fontSize: '0.8rem',
                    color: '#e5e7eb',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: 120
                  }}>
                    fix: XSS: Unsanitized SVG Upload..
                  </span>
                </div>
                <div style={{
                  fontFamily: 'Menlo, monospace',
                  fontSize: '0.65rem',
                  color: '#6b7280',
                  fontWeight: 400,
                  letterSpacing: '0.01em'
                }}>
                  #1019 opened yesterday by zerotrail <span style={{
                    background: '#23272F',
                    color: '#bdbdbd',
                    borderRadius: 8,
                    padding: '1px 6px',
                    fontSize: '0.7em',
                    marginLeft: 4
                  }}>bot</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <section style={{
        paddingLeft: isMobile ? '16px' : '24px',
        paddingRight: isMobile ? '16px' : '24px',
        paddingBottom: isMobile ? '60px' : '80px',
        paddingTop: isMobile ? '60px' : '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Headline */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '64px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.2rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            marginBottom: '20px'
          }}>
            Simple pricing
          </h2>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#9ca3af',
            fontWeight: '400',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Teams that adopt zerotrail ship more secure code with faster security review cycles.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: isMobile ? '24px' : '32px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
                     {/* Free Plan */}
           <div style={{
             backgroundColor: '#08090B',
            borderRadius: '16px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative dots pattern */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '100px',
              height: '60px',
              backgroundImage: 'radial-gradient(circle, #333333 1px, transparent 1px)',
              backgroundSize: '8px 8px',
              opacity: 0.3
            }}></div>
            
            <div style={{
              marginBottom: '32px'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                Free
              </h3>
              <p style={{
                fontSize: '0.8rem',
                color: '#9ca3af',
                margin: 0
              }}>
                Free Open Beta
              </p>
            </div>

            {/* CTA Button */}
            <button style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '32px',
              transition: 'all 0.2s ease'
            }}>
              Try Now
            </button>

            <div style={{
              marginBottom: '32px'
            }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '16px'
              }}>
                Basic Plan
              </h4>
              
              {/* Feature List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Testing on up to 3 repositories
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Basic security AI engine
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Basic AI fixes & exploits
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Python, JS/TS language support
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Codebases &lt; 20K lines
                  </span>
                </div>
              </div>
            </div>
          </div>

                     {/* Enterprise Plan */}
           <div style={{
             backgroundColor: '#08090B',
            borderRadius: '16px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative dots pattern */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '100px',
              height: '60px',
              backgroundImage: 'radial-gradient(circle, #333333 1px, transparent 1px)',
              backgroundSize: '8px 8px',
              opacity: 0.3
            }}></div>
            
            <div style={{
              marginBottom: '32px'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                Enterprise
              </h3>
              <p style={{
                fontSize: '0.8rem',
                color: '#9ca3af',
                margin: 0
              }}>
                Essential for teams and businesses
              </p>
            </div>

            {/* CTA Button */}
            <button style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid #333333',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '32px',
              transition: 'all 0.2s ease'
            }}>
              Contact us
            </button>

            <div style={{
              marginBottom: '32px'
            }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '16px'
              }}>
                Enterprise Plan
              </h4>
              
              {/* Feature List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Testing on unlimited repos
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Advanced security AI engine
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Advanced AI fixes & exploits
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    Multi-repo scanning
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#ffffff'
                  }}>
                    GitHub Bot and CI/CD integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free for Open Source */}
        <div style={{
          textAlign: 'center',
          marginTop: '48px'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            zerotrail is 100% free for open source teams
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '32px 0 16px 0',
        color: '#6b7280',
        fontSize: '0.92rem',
        fontWeight: 400,
        background: '#060707',
        borderTop: '1px solid #23272F',
        marginTop: '32px'
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
    </>
  );
}

type ToolBoxGreyProps = { icon: React.ReactNode };
function ToolBoxGrey({ icon }: ToolBoxGreyProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'none',
      minWidth: 28,
      minHeight: 28,
      width: 28,
      height: 28,
      padding: 0,
      margin: 0,
    }}>
      {icon}
    </div>
  );
} 