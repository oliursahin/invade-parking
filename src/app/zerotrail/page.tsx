'use client';

import React, { useState } from 'react';
import { SiGoogledocs, SiLinear, SiNotion } from 'react-icons/si';
import { SiJira, SiGithub, SiSlack, SiBitbucket } from 'react-icons/si';
import { VscGitPullRequest } from 'react-icons/vsc';
import { SiSnyk, SiCheckmarx } from 'react-icons/si';
import { FaBug } from 'react-icons/fa';

export default function ZerotrailPage() {
  const [activeFeature, setActiveFeature] = useState(0);

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
          transform: 'translateX(-50%)',
          marginTop: '8px'
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            background: '#ffffff',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
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
          marginBottom: '0px'
        }}>
          14 days free no creds required
        </p>
        </div>
      </section>

      {/* Technical Architecture Diagram - MINIMAL BLUEPRINT STYLE */}
      <section style={{
        padding: '0',
        margin: '0 auto 32px',
        maxWidth: '950px',
        minHeight: '340px',
        position: 'relative',
        background: '#060707',
        borderRadius: '12px',
        boxShadow: '0 2px 18px 0 #000a',
        overflow: 'hidden',
      }}>
        {/* Faint grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'linear-gradient(to right, #23272F 1px, transparent 1px), linear-gradient(to bottom, #23272F 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.13,
          pointerEvents: 'none',
        }} />
        {/* SVG lines/arrows - minimal, blueprint style */}
        <svg width="100%" height="340" viewBox="0 0 950 340" style={{ position: 'absolute', left: 0, top: 0, zIndex: 1, pointerEvents: 'none' }}>
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
        <div style={{ position: 'absolute', left: 60, top: 60, width: 140, zIndex: 2 }}>
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
        <div style={{ position: 'absolute', left: 60, top: 180, width: 140, zIndex: 2 }}>
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
        <div style={{ position: 'absolute', left: 750, top: 70, width: 180, zIndex: 2 }}>
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
        <div style={{ position: 'absolute', left: 720, top: 180, width: 100, zIndex: 2 }}>
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
      </section>


      {/* Features Section - Modernized Card UI */}
      <section style={{
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '80px',
        paddingTop: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Headline */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 400,
            lineHeight: '1.1',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            marginBottom: '24px',
            maxWidth: '900px',
            margin: '0 auto 24px'
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
          flexDirection: 'row',
          gap: '64px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          {/* Left: Feature Titles */}
          <div style={{ minWidth: 260, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {['Identify risky changes', 'Analyze every change', 'Automate secure development'].map((title, idx) => (
              <div
                key={title}
                onClick={() => setActiveFeature(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '18px 0 18px 0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.18rem',
                  color: activeFeature === idx ? '#fff' : '#6b7280',
                  fontWeight: 500,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  transition: 'color 0.18s',
                }}
              >
                <div style={{
                  width: 4,
                  height: 28,
                  borderRadius: 6,
                  background: activeFeature === idx ? '#22c55e' : '#23272F',
                  marginRight: 18,
                  transition: 'background 0.18s',
                }} />
                {title}
              </div>
            ))}
          </div>
          {/* Right: Dynamic Feature Card */}
          <div style={{ minWidth: 320, maxWidth: 420, flex: 1, display: 'flex', justifyContent: 'center' }}>
            {activeFeature === 0 && (
              <div style={{
                background: '#101214',
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
                  background: '#181A20',
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
                  background: '#181A20',
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
                background: '#181A20',
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
                  background: '#181A20',
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
                background: '#101214',
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
                  background: '#181A20',
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
                  background: '#181A20',
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
          padding: '24px 0 16px 0',
          marginTop: '0px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0 18px',
            maxWidth: '900px',
            margin: '0 auto',
            alignItems: 'flex-start'
          }}>
            {/* Card 1: Connect Zerotrail to GitHub */}
            <div style={{
              background: '#101214',
              borderRadius: '18px',
              border: '1px solid #23272F',
              padding: '32px 24px 28px 24px',
              minHeight: 260,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 2px 12px 0 #0004',
              justifyContent: 'flex-end',
            }}>
              {/* Visual: CI/CD Integration */}
              <div style={{
                background: '#181A20',
                borderRadius: '10px',
                border: '1px solid #23272F',
                padding: '10px 10px 6px 10px',
                marginBottom: 14,
                width: '100%',
                minHeight: 48,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                boxShadow: '0 1px 4px 0 #0002',
              }}>
                <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.78rem', color: '#bdbdbd', fontWeight: 600, marginBottom: 4 }}>
                  <svg width="16" height="16" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4, verticalAlign: 'middle' }}><path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10"/><path d="M12 12v4"/><path d="M8 16h8"/></svg>
                  GitHub · GitLab · Bitbucket
                </span>
                <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#6b7280', fontWeight: 400 }}>
                  CI/CD Integration
                </span>
              </div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.98rem', marginBottom: 4, marginTop: 6, textAlign: 'center' }}>Connect Zerotrail to GitHub</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.88rem', fontWeight: 400, lineHeight: 1.5, textAlign: 'center' }}>
                Get set up in under 2 minutes. Zerotrail integrates smoothly with your CI/CD workflow and supports GitHub, GitLab, and Bitbucket.
              </div>
            </div>
            {/* Card 2: Detect Critical Issues Early */}
            <div style={{
              background: '#101214',
              borderRadius: '18px',
              border: '1px solid #23272F',
              padding: '32px 24px 28px 24px',
              minHeight: 260,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 2px 12px 0 #0004',
              justifyContent: 'flex-end',
            }}>
              {/* Visual: Code/Alert */}
              <div style={{
                background: '#181A20',
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
                <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.78rem', color: '#bdbdbd', fontWeight: 600, marginBottom: 4 }}>
                  <svg width="16" height="16" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 4, verticalAlign: 'middle' }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><circle cx="12" cy="16" r="1"/></svg>
                  Critical Issue Detected
                </span>
                <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#6b7280', fontWeight: 400 }}>
                  Broken authentication, logic flaws
                </span>
              </div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.98rem', marginBottom: 4, marginTop: 6, textAlign: 'center' }}>Detect Critical Issues Early</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.88rem', fontWeight: 400, lineHeight: 1.5, textAlign: 'center' }}>
                Zerotrail uncovers more real vulnerabilities — like broken authentication and logic flaws — with fewer false positives than traditional tools.
              </div>
            </div>
            {/* Card 3: Merge Verified Fixes, Not Just Reports */}
            <div style={{
              background: '#101214',
              borderRadius: '18px',
              border: '1px solid #23272F',
              padding: '32px 24px 28px 24px',
              minHeight: 260,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 2px 12px 0 #0004',
              justifyContent: 'flex-end',
            }}>
              {/* Visual: PR/Fix Suggestion */}
              <div style={{
                background: '#181A20',
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
                <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.78rem', color: '#bdbdbd', fontWeight: 600, marginBottom: 4 }}>
                  <VscGitPullRequest size={16} color="#bdbdbd" style={{ marginRight: 4, verticalAlign: 'middle' }} />
                  PR Patch Ready
                </span>
                <span style={{ fontFamily: 'Menlo, monospace', fontSize: '0.7rem', color: '#6b7280', fontWeight: 400 }}>
                  Automated Fix Suggestion
                </span>
              </div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.98rem', marginBottom: 4, marginTop: 6, textAlign: 'center' }}>Merge Verified Fixes, Not Just Reports</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.88rem', fontWeight: 400, lineHeight: 1.5, textAlign: 'center' }}>
                When confident a change is safe, Zerotrail skips the alert fatigue and opens a pull request with the fix — ready for your review.
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* DAST Integration Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
        padding: '80px 24px 40px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, margin: '0 auto', paddingLeft: 80 }}>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: '#9ca3af', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.04em' }}>
              Under the hood
            </span>
          </div>
          <h2 style={{
            fontSize: '1.8rem',
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
            fontSize: '1.1rem',
            maxWidth: 500,
            fontWeight: 400,
            marginBottom: 0,
          }}>
            Zerotrail connects to your favorite DAST tools, triages real vulnerabilities in a secure sandbox, and writes production-ready patches as pull requests.
          </p>
        </div>
        {/* Right: SVG Diagram */}
        <div style={{ flex: 1.2, minWidth: 380, position: 'relative', height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          <div style={{ position: 'absolute', left: 60, top: 55, width: 40, display: 'flex', flexDirection: 'column', gap: 18, zIndex: 2 }}>
            <ToolBoxGrey icon={<SiSnyk size={18} color="#bdbdbd" />} />
            <ToolBoxGrey icon={<FaBug size={16} color="#bdbdbd" />} />
            <ToolBoxGrey icon={<SiCheckmarx size={18} color="#bdbdbd" />} />
            <ToolBoxGrey icon={<svg width="18" height="18" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8"/><path d="M8 12h8"/></svg>} />
            <ToolBoxGrey icon={<svg width="18" height="18" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22"/></svg>} />
            <ToolBoxGrey icon={<SiGithub size={18} color="#bdbdbd" />} />
          </div>
          {/* Zerotrail Node (center) */}
          <div style={{ position: 'absolute', left: 210, top: 150, width: 90, zIndex: 2 }}>
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
          <div style={{ position: 'absolute', left: 380, top: 150, width: 180, zIndex: 2 }}>
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
      </section>

      {/* Pricing Section */}
      <section style={{
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '80px',
        paddingTop: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Headline */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            marginBottom: '20px'
          }}>
            Simple pricing
          </h2>
          <p style={{
            fontSize: '1rem',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px',
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