'use client';

import React from 'react';
import { SiGoogledrive, SiGooglesheets, SiConfluence, SiSlack, SiNotion, SiLinear } from 'react-icons/si';

export default function DeckPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#ffffff', 
      color: '#1a202c',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{ 
        maxWidth: '1152px', 
        margin: '0 auto', 
        padding: '128px 24px 80px', 
        textAlign: 'center' 
      }}>
        {/* Main Headline - Line 1 */}
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          lineHeight: '1.1', 
          color: '#1a202c',
          letterSpacing: '-0.025em',
          marginBottom: '16px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        }}>
          Product Security,
        </h1>
        
        {/* Main Headline - Line 2 with light orange accent */}
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '600', 
          lineHeight: '1.1', 
          color: '#ED4B56',
          letterSpacing: '-0.025em',
          marginBottom: '48px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        }}>
          By Design.
        </h1>
        
        {/* Subtitle */}
        <p style={{ 
          fontSize: '1.25rem', 
          lineHeight: '1.6', 
          color: '#6b7280',
          fontWeight: '400',
          marginBottom: '64px',
          maxWidth: '800px',
          margin: '0 auto 64px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        }}>
          Integrate security into the earliest stages of your product development life-cycle, boost visibility into feature planning and design, automate secure design reviews, and empower developers to build with security in mind.
        </p>

        {/* Integration Illustration */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto 80px',
          position: 'relative',
          height: '400px',
          transform: 'perspective(1000px) rotateX(45deg) rotateZ(-45deg)',
          transformStyle: 'preserve-3d'
        }}>
          {/* Top Platform - Google Drive */}
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SiGoogledrive size={32} color="#1a73e8" />
          </div>

          {/* Top Right Platform - Google Sheets */}
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            transform: 'translate(0, -50%)',
            width: '80px',
            height: '80px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SiGooglesheets size={32} color="#0F9D58" />
          </div>

          {/* Bottom Right Platform - Confluence */}
          <div style={{
            position: 'absolute',
            bottom: '30%',
            right: '20%',
            transform: 'translate(0, 50%)',
            width: '80px',
            height: '80px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SiConfluence size={32} color="#2684FF" />
          </div>

          {/* Bottom Platform - Linear */}
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
            width: '80px',
            height: '80px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SiLinear size={32} color="#5E6AD2" />
          </div>

          {/* Bottom Left Platform - Slack */}
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '20%',
            transform: 'translate(0, 50%)',
            width: '80px',
            height: '80px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SiSlack size={32} color="#E01E5A" />
          </div>

          {/* Top Left Platform - Notion */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            transform: 'translate(0, -50%)',
            width: '80px',
            height: '80px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SiNotion size={32} color="#000000" />
          </div>

          {/* Center Platform */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 8px 8px 0 -2px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              fontSize: '20px',
              fontWeight: '500',
              color: '#ED4B56'
            }}>
              or
            </div>
          </div>

          {/* Connecting Lines */}
          <svg style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '-1',
            transform: 'translateZ(-10px)'
          }} viewBox="0 0 700 400">
            <path d="M350 100 L350 175" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
            <path d="M350 275 L350 350" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
            <path d="M230 150 L300 225" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
            <path d="M230 300 L300 225" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
            <path d="M470 150 L400 225" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
            <path d="M470 300 L400 225" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
          </svg>

          {/* Decorative Dots */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10B981'
          }}/>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10B981'
          }}/>
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '15%',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10B981'
          }}/>
        </div>
      </div>

      {/* Problems Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 24px',
        background: '#f9fafb',
        borderRadius: '16px',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Left Side */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingTop: '0'
          }}>
            {/* Badge - The Problem */}
            <div style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#6b7280',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '16px',
              marginTop: '-8px',
              border: '1px solid #e5e7eb'
            }}>
              The Problem
            </div>

            {/* Title */}
            <h2 style={{ 
              fontSize: '2.125rem',
              fontWeight: '700', 
              color: '#1a202c',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              marginBottom: '24px',
              maxWidth: '400px'
            }}>
              Design-stage security{' '}
              <span style={{ color: '#ED4B56' }}>doesn't scale.</span>
            </h2>

            {/* Minimal Illustration */}
            <div style={{
              width: '160px',
              height: '140px',
              background: '#ffffff',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              marginTop: '-8px',
              marginLeft: '24px'
            }}>
              <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Minimal puzzle pieces - adjusted for new size */}
                <path d="M20 50 L50 50 L60 40 L70 50 L90 50 L100 60 L90 70 L70 70 L60 80 L50 70 L20 70 L10 60 Z" 
                      fill="#ffffff" 
                      stroke="#d1d5db" 
                      strokeWidth="2"/>
                
                <path d="M100 60 L120 60 L130 50 L140 60 L160 60 L150 70 L140 80 L120 80 L110 70 L100 70 L90 60 Z" 
                      fill="#ffffff" 
                      stroke="#d1d5db" 
                      strokeWidth="2"/>

                {/* Single orange accent element */}
                <circle cx="100" cy="60" r="8" 
                        fill="#ED4B56" 
                        opacity="0.8"/>
                
                {/* Minimal connecting lines */}
                <path d="M50 60 L90 60" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
                <path d="M110 60 L150 60" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Problem statements */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            paddingTop: '12px'
          }}>
            {/* Problem 1 */}
            <div style={{ 
              marginBottom: '40px',
              paddingLeft: '20px',
              borderLeft: '3px solid #ED4B56'
            }}>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#1a202c',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.5',
                margin: 0
              }}>
                Security teams are understaffed and <strong>can't review every design</strong> or product change
              </p>
            </div>

            {/* Problem 2 */}
            <div style={{ 
              marginBottom: '40px',
              paddingLeft: '20px',
              borderLeft: '3px solid #ED4B56'
            }}>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#1a202c',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.5',
                margin: 0
              }}>
                Design flaws found late in development are <strong>costly and disruptive</strong>
              </p>
            </div>

            {/* Problem 3 */}
            <div style={{ 
              paddingLeft: '20px',
              borderLeft: '3px solid #ED4B56'
            }}>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#1a202c',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.5',
                margin: 0
              }}>
                Relying on developers to flag risks leads to <strong>blind spots and inconsistencies</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '120px 24px'
      }}>
        {/* Section Header */}
        <div style={{ marginBottom: '80px' }}>
          {/* Badge - The Solution */}
          <div style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#6b7280',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '24px',
            border: '1px solid #e5e7eb'
          }}>
            The Solution
          </div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1a202c',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.1',
            margin: 0
          }}>
            Catch Security Flaws{' '}
            <span style={{ 
              display: 'block',
              color: '#ED4B56',
              marginTop: '8px'
            }}>
              Before Writing a Single Line of Code.
            </span>
          </h2>
        </div>

        {/* Feature 1 - Identify */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px',
          alignItems: 'center',
          marginBottom: '120px'
        }}>
          {/* Left Column */}
          <div>
            <div style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#ED4B56',
              marginBottom: '24px',
              fontFamily: 'Inter, sans-serif'
            }}>
              01
            </div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1a202c',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              Identify risky changes
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              color: '#6b7280',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '400px'
            }}>
              Define your custom risk profile and identify risky changes before they happen, ensuring no critical changes go unnoticed during development.
            </p>
          </div>

          {/* Right Column - Clean Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
            maxWidth: '400px'
          }}>
            {/* Header */}
            <div style={{
              background: '#f9fafb',
              borderBottom: '1px solid #e5e7eb',
              padding: '12px 16px',
              fontWeight: '500',
              fontSize: '0.875rem',
              color: '#6b7280',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center'
            }}>
              Documents
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#6b7280'
                }}>
                  🛍️
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '2px'
                  }}>
                    AI Shopping Assistant
                  </h4>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <span style={{
                    background: '#fef3c7',
                    color: '#92400e',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    border: '1px solid #fbbf24'
                  }}>
                    MEDIUM
                  </span>
                  <span style={{
                    background: '#ED4B56',
                    color: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '500',
                    textTransform: 'uppercase'
                  }}>
                    HIGH
                  </span>
                </div>
              </div>

              <div style={{
                borderLeft: '3px solid #e5e7eb',
                paddingLeft: '12px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: '#6b7280',
                  fontFamily: 'Inter, sans-serif',
                  margin: 0
                }}>
                  This feature introduces a new virtual assistant experience in our shopping web portal by integrating an LLM-based virtual assistant.
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                <span style={{
                  background: '#f3f4f6',
                  color: '#6b7280',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Access control
                </span>
                <span style={{
                  background: '#f3f4f6',
                  color: '#6b7280',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  API Changes
                </span>
              </div>

              <div style={{
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: '#6b7280'
                }}>
                  📋
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 - Analyze */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px',
          alignItems: 'center',
          marginBottom: '120px'
        }}>
          {/* Left Column */}
          <div>
            <div style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#ED4B56',
              marginBottom: '24px',
              fontFamily: 'Inter, sans-serif'
            }}>
              02
            </div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1a202c',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              Analyze every change
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              color: '#6b7280',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '400px'
            }}>
              Instantly analyze every product change, gather planning information from multiple sources, and automate threat assessment with full context.
            </p>
          </div>

          {/* Right Column - Clean Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
            maxWidth: '400px'
          }}>
            <div style={{ padding: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <h4 style={{
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  margin: 0
                }}>
                  High Risk Threat Identified
                </h4>
                <span style={{
                  background: '#ef4444',
                  color: '#ffffff',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.6875rem',
                  fontWeight: '500',
                  textTransform: 'uppercase'
                }}>
                  HIGH
                </span>
              </div>
              
              <div style={{
                borderLeft: '3px solid #e5e7eb',
                paddingLeft: '12px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: '#6b7280',
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
                  background: '#f3f4f6',
                  color: '#6b7280',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Tampering
                </span>
                <span style={{
                  background: '#f3f4f6',
                  color: '#6b7280',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  CWE-73
                </span>
              </div>

              <div style={{
                marginBottom: '12px'
              }}>
                <h5 style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  What can you do about it
                </h5>
                <p style={{
                  fontSize: '0.8125rem',
                  lineHeight: '1.4',
                  color: '#9ca3af',
                  fontFamily: 'Inter, sans-serif',
                  margin: 0
                }}>
                  Implement strict file type validation for all contents of the ZIP file. Use a secure extraction library that doesn't automatically execute files.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 - Automate */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Column */}
          <div>
            <div style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#ED4B56',
              marginBottom: '24px',
              fontFamily: 'Inter, sans-serif'
            }}>
              03
            </div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1a202c',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              Automate secure development
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              color: '#6b7280',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '400px'
            }}>
              Automate security requirements, create customized paved roads, and align secure development best practices across your entire team.
            </p>
          </div>

          {/* Right Column - Clean Chat Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
            maxWidth: '400px'
          }}>
            <div style={{ padding: '16px' }}>
              {/* Bot Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: '#ED4B56',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: '#ffffff'
                }}>
                  or
                </div>
                <div>
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: '500',
                    color: '#1f2937',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    zerotrail bot
                  </div>
                  <div style={{
                    fontSize: '0.6875rem',
                    color: '#6b7280',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    8:44 AM, Today
                  </div>
                </div>
                <div style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: '#10b981',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6875rem',
                    color: '#ffffff'
                  }}>
                    ✓
                  </div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    📄
                  </div>
                </div>
              </div>

              {/* Chat Message */}
              <div style={{
                background: '#f9fafb',
                borderRadius: '8px',
                padding: '12px'
              }}>
                <p style={{
                  fontSize: '0.8125rem',
                  lineHeight: '1.4',
                  color: '#374151',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  Hey Jane 👋
                </p>
                
                <p style={{
                  fontSize: '0.8125rem',
                  lineHeight: '1.4',
                  color: '#374151',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  ⚠️ Please note the SendGrid API key must be stored securely.
                </p>
                
                <p style={{
                  fontSize: '0.8125rem',
                  lineHeight: '1.4',
                  color: '#374151',
                  fontFamily: 'Inter, sans-serif',
                  margin: '0'
                }}>
                  🔒 At ACME, we typically use the <span style={{ color: '#ED4B56', textDecoration: 'underline' }}>AWS Secret Manager</span> for this—it aligns with our security best practices and helps prevent risks associated with hard-coded credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 0',
        borderTop: '1px solid #e5e7eb',
        marginTop: '40px'
      }}>
        <p style={{ 
          fontSize: '0.875rem', 
          color: '#6b7280', 
          fontFamily: 'Inter, sans-serif',
          fontWeight: '400',
          margin: 0
        }}>
          zerotrail.ai Copyright © zerotrail Security, {'{'}{'}'} all rights reserved.
        </p>
      </div>
    </div>
  );
} 