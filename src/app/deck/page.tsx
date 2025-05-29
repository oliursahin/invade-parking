'use client';

import React, { useRef } from 'react';
import { SiGoogledrive, SiGooglesheets, SiConfluence, SiSlack, SiNotion, SiLinear, SiJira, SiGoogledocs } from 'react-icons/si';
import html2pdf from 'html2pdf.js';

export default function DeckPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    if (!element) return;

    const opt = {
      margin: [10, 10],
      filename: 'zerotrail-security.pdf',
      image: { 
        type: 'jpeg', 
        quality: 1.0
      },
      html2canvas: { 
        scale: 3,
        useCORS: true,
        letterRendering: true,
        logging: true,
        dpi: 300,
        windowWidth: 1200,
        backgroundColor: '#ffffff'
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: false,
        precision: 16
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      {/* Download Button - Fixed Position */}
      <button
        onClick={handleDownloadPDF}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#ED4B56',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'Inter, sans-serif',
          transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.backgroundColor = '#dc2626';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#ED4B56';
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download PDF
      </button>

      {/* Main Content */}
      <div ref={contentRef} style={{ 
        minHeight: '100vh', 
        background: '#ffffff', 
        color: '#1a202c',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility'
      }}>
        {/* Hero Section */}
        <div style={{ 
          maxWidth: '1152px', 
          margin: '0 auto', 
          padding: '96px 24px 40px',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Zerotrail Brand */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '48px'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              background: '#ED4B56',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              color: '#ffffff',
              fontWeight: '600',
              fontFamily: 'Inter, sans-serif'
            }}>
              or
            </div>
            <span style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1a202c',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.025em'
            }}>
              zerotrail
            </span>
          </div>

          {/* Main Headline - Line 1 */}
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '600', 
            lineHeight: '1.1', 
            color: '#1a202c',
            letterSpacing: '-0.025em',
            marginBottom: '8px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
          }}>
            Product Security,
          </h1>
          
          {/* Main Headline - Line 2 with light orange accent */}
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '600', 
            lineHeight: '1.1', 
            color: '#ED4B56',
            letterSpacing: '-0.025em',
            marginBottom: '24px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
          }}>
            By Design.
          </h1>
          
          {/* Subtitle */}
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.5', 
            color: '#6b7280',
            fontWeight: '400',
            marginBottom: '32px',
            maxWidth: '800px',
            margin: '0 auto 32px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
          }}>
            Integrate security into the earliest stages of your product development life-cycle, boost visibility into feature planning and design, automate secure design reviews, and empower developers to build with security in mind.
          </p>

          {/* Integration Illustration */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 12px',
            position: 'relative',
            height: '220px',
            transform: 'perspective(1000px) rotateX(45deg) rotateZ(-45deg)',
            transformStyle: 'preserve-3d'
          }}>
            {/* Top Platform - Google Drive */}
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SiGoogledrive size={24} color="#1a73e8" />
            </div>

            {/* Top Right Platform - Google Sheets */}
            <div style={{
              position: 'absolute',
              top: '30%',
              right: '20%',
              transform: 'translate(0, -50%)',
              width: '60px',
              height: '60px',
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SiGooglesheets size={24} color="#0F9D58" />
            </div>

            {/* Bottom Right Platform - Confluence */}
            <div style={{
              position: 'absolute',
              bottom: '30%',
              right: '20%',
              transform: 'translate(0, 50%)',
              width: '60px',
              height: '60px',
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SiConfluence size={24} color="#2684FF" />
            </div>

            {/* Bottom Platform - Linear */}
            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '50%',
              transform: 'translate(-50%, 50%)',
              width: '60px',
              height: '60px',
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SiLinear size={24} color="#5E6AD2" />
            </div>

            {/* Bottom Left Platform - Slack */}
            <div style={{
              position: 'absolute',
              bottom: '30%',
              left: '20%',
              transform: 'translate(0, 50%)',
              width: '60px',
              height: '60px',
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SiSlack size={24} color="#E01E5A" />
            </div>

            {/* Top Left Platform - Notion */}
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              transform: 'translate(0, -50%)',
              width: '60px',
              height: '60px',
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SiNotion size={24} color="#000000" />
            </div>

            {/* Center Platform */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              background: '#ffffff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 6px 6px 0 -2px rgba(0, 0, 0, 0.05)',
              border: '1.5px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                fontSize: '18px',
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
            }} viewBox="0 0 600 300">
              <path d="M300 75 L300 125" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M300 200 L300 250" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M200 125 L250 175" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M200 225 L250 175" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M400 125 L350 175" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M400 225 L350 175" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4"/>
            </svg>

            {/* Decorative Dots */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#10B981'
            }}/>
            <div style={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#10B981'
            }}/>
            <div style={{
              position: 'absolute',
              top: '30%',
              right: '15%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#10B981'
            }}/>
          </div>
        </div>

        {/* Problems Section */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '20px auto 80px',
          padding: '40px 24px',
          background: '#f9fafb',
          borderRadius: '16px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          WebkitPrintColorAdjust: 'exact',
          printColorAdjust: 'exact'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
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
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.75rem',
                fontWeight: '500',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '8px',
                marginTop: '-4px',
                border: '1px solid #e5e7eb'
              }}>
                The Problem
              </div>

              {/* Title */}
              <h2 style={{ 
                fontSize: '1.75rem',
                fontWeight: '700', 
                color: '#1a202c',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.2',
                marginBottom: '16px',
                maxWidth: '400px'
              }}>
                Design-stage security{' '}
                <span style={{ color: '#ED4B56' }}>doesn&apos;t scale.</span>
              </h2>

              {/* Minimal Illustration */}
              <div style={{
                width: '140px',
                height: '120px',
                background: '#f9fafb',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '-4px',
                marginLeft: '16px'
              }}>
                <svg width="120" height="100" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Minimal puzzle pieces - adjusted for new size */}
                  <path d="M20 50 L50 50 L60 40 L70 50 L90 50 L100 60 L90 70 L70 70 L60 80 L50 70 L20 70 L10 60 Z" 
                        fill="#f9fafb"
                        stroke="#d1d5db" 
                        strokeWidth="1.5"/>
                  
                  <path d="M100 60 L120 60 L130 50 L140 60 L160 60 L150 70 L140 80 L120 80 L110 70 L100 70 L90 60 Z" 
                        fill="#f9fafb"
                        stroke="#d1d5db" 
                        strokeWidth="1.5"/>

                  {/* Single orange accent element */}
                  <circle cx="100" cy="60" r="6" 
                          fill="#ED4B56" 
                          opacity="0.8"/>
                  
                  {/* Minimal connecting lines */}
                  <path d="M50 60 L90 60" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="3,3"/>
                  <path d="M110 60 L150 60" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="3,3"/>
                </svg>
              </div>
            </div>

            {/* Right Side - Problem statements */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              paddingTop: '8px'
            }}>
              {/* Problem 1 */}
              <div style={{ 
                marginBottom: '24px',
                paddingLeft: '16px',
                borderLeft: '2px solid #ED4B56'
              }}>
                <p style={{
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  color: '#1a202c',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  Security teams are understaffed and <strong>can&apos;t review every design</strong> or product change
                </p>
              </div>

              {/* Problem 2 */}
              <div style={{ 
                marginBottom: '24px',
                paddingLeft: '16px',
                borderLeft: '2px solid #ED4B56'
              }}>
                <p style={{
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  color: '#1a202c',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  Design flaws found late in development are <strong>costly and disruptive</strong>
                </p>
              </div>

              {/* Problem 3 */}
              <div style={{ 
                paddingLeft: '16px',
                borderLeft: '2px solid #ED4B56'
              }}>
                <p style={{
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  color: '#1a202c',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.4',
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
          margin: '80px auto 0', 
          padding: '0 24px 16px',
          pageBreakInside: 'avoid',
          WebkitPrintColorAdjust: 'exact',
          printColorAdjust: 'exact'
        }}>
          {/* Section Header */}
          <div style={{ 
            marginBottom: '20px',
            paddingTop: '8px',
            position: 'relative',
            pageBreakInside: 'avoid',
            pageBreakBefore: 'auto'
          }}>
            {/* Solution Badge */}
            <div style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#6b7280',
              padding: '4px 10px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '8px',
              border: '1px solid #e5e7eb'
            }}>
              The Solution
            </div>
            <div style={{ 
              marginTop: '4px'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1a202c',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.1',
                margin: 0,
                display: 'inline-block'
              }}>
                Catch Security Flaws{' '}
              </h2>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#ED4B56',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.1',
                margin: '4px 0 0 0',
                display: 'block'
              }}>
                Before Writing a Single Line of Code.
              </h2>
            </div>
          </div>

          {/* Features Grid */}
          {[1, 2, 3].map((featureNum) => (
            <div key={featureNum} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '20px',
              alignItems: 'start',
              marginBottom: featureNum === 3 ? 0 : '20px',
              pageBreakInside: 'avoid'
            }}>
              {/* Feature Content */}
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: '#ED4B56',
                  marginBottom: '8px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  0{featureNum}
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1a202c',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '8px',
                  lineHeight: '1.2'
                }}>
                  {featureNum === 1 ? 'Identify risky changes' :
                   featureNum === 2 ? 'Analyze every change' :
                   'Automate secure development'}
                </h3>
                <p style={{ 
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  color: '#6b7280',
                  fontFamily: 'Inter, sans-serif',
                  maxWidth: '380px',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  {featureNum === 1 ? 'Define your custom risk profile and identify risky changes before they happen, ensuring no critical changes go unnoticed during development.' :
                   featureNum === 2 ? 'Instantly analyze every product change, gather planning information from multiple sources, and automate threat assessment with full context.' :
                   'Automate security requirements, create customized paved roads, and align secure development best practices across your entire team.'}
                </p>
              </div>

              {/* Feature Card */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                maxWidth: '360px',
                WebkitPrintColorAdjust: 'exact',
                printColorAdjust: 'exact'
              }}>
                <div style={{ padding: '8px' }}>
                  {featureNum === 1 && (
                    <div style={{ padding: '8px', position: 'relative', minHeight: '160px' }}>
                      {/* Background Document Card */}
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '20px',
                        right: '20px',
                        background: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        padding: '8px',
                        transform: 'rotate(-3deg)',
                        zIndex: 0,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
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
                              background: '#f3f4f6',
                              borderRadius: '6px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: '1px solid #e5e7eb',
                              color: '#4285F4'
                            }}>
                              <SiGoogledocs size={14} />
                            </div>
                            <h4 style={{
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              color: '#111827',
                              margin: 0
                            }}>
                              Document
                            </h4>
                          </div>
                          <span style={{
                            background: '#FEF9C3',
                            color: '#854D0E',
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
                            background: '#E5E7EB',
                            borderRadius: '3px',
                            width: '85%'
                          }} />
                          <div style={{
                            height: '6px',
                            background: '#E5E7EB',
                            borderRadius: '3px',
                            width: '65%'
                          }} />
                        </div>
                      </div>

                      {/* Main Card (Jira) */}
                      <div style={{
                        position: 'relative',
                        background: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        padding: '8px',
                        zIndex: 1,
                        marginTop: '24px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
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
                            background: '#f3f4f6',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #e5e7eb',
                            color: '#0052CC'
                          }}>
                            <SiJira size={12} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h4 style={{
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              color: '#111827',
                              fontFamily: 'Inter, sans-serif',
                              margin: 0
                            }}>
                              AI Shopping Assistant
                            </h4>
                          </div>
                          <span style={{
                            background: '#FEE2E2',
                            color: '#991B1B',
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
                          borderLeft: '2px solid #ED4B56',
                          paddingLeft: '10px',
                          marginBottom: '12px'
                        }}>
                          <p style={{
                            fontSize: '0.75rem',
                            lineHeight: '1.35',
                            color: '#6B7280',
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
                            background: '#F3F4F6',
                            color: '#6B7280',
                            padding: '3px 6px',
                            borderRadius: '4px',
                            fontSize: '0.688rem',
                            fontFamily: 'Inter, sans-serif'
                          }}>
                            Access control
                          </span>
                          <span style={{
                            background: '#F3F4F6',
                            color: '#6B7280',
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
                  {featureNum === 2 && (
                    <div style={{ padding: '8px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}>
                        <h4 style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#111827',
                          fontFamily: 'Inter, sans-serif',
                          margin: 0
                        }}>
                          High Risk Threat Identified
                        </h4>
                        <span style={{
                          background: '#FEE2E2',
                          color: '#991B1B',
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
                        borderLeft: '2px solid #ED4B56',
                        paddingLeft: '12px',
                        marginBottom: '16px'
                      }}>
                        <p style={{
                          fontSize: '0.75rem',
                          lineHeight: '1.4',
                          color: '#6B7280',
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
                          background: '#F3F4F6',
                          color: '#6B7280',
                          padding: '3px 6px',
                          borderRadius: '4px',
                          fontSize: '0.688rem',
                          fontFamily: 'Inter, sans-serif'
                        }}>
                          Tampering
                        </span>
                        <span style={{
                          background: '#F3F4F6',
                          color: '#6B7280',
                          padding: '3px 6px',
                          borderRadius: '4px',
                          fontSize: '0.688rem',
                          fontFamily: 'Inter, sans-serif'
                        }}>
                          CWE-73
                        </span>
                      </div>
                      <div style={{
                        background: '#F9FAFB',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #E5E7EB',
                        opacity: '0.8',
                        filter: 'blur(0.2px)',
                        color: '#6B7280'
                      }}>
                        <div style={{
                          fontSize: '0.75rem',
                          color: 'inherit',
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
                          color: 'inherit',
                          fontFamily: 'Inter, sans-serif',
                          margin: 0,
                          opacity: '0.8'
                        }}>
                          Implement strict file type validation for all contents of the ZIP file. Use a secure extraction library that doesn&apos;t automatically
                        </p>
                      </div>
                    </div>
                  )}
                  {featureNum === 3 && (
                    <div style={{ padding: '8px', position: 'relative' }}>
                      {/* Google Docs icon circle */}
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        width: '32px',
                        height: '32px',
                        background: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #E5E7EB',
                        zIndex: 2,
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}>
                        <SiGoogledocs size={16} color="#4285F4" />
                      </div>

                      <div style={{
                        background: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        padding: '8px'
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
                            background: '#ED4B56',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.625rem',
                            color: '#ffffff'
                          }}>
                            or
                          </div>
                          <div>
                            <div style={{
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              color: '#1f2937',
                              fontFamily: 'Inter, sans-serif'
                            }}>
                              zerotrail bot
                            </div>
                            <div style={{
                              fontSize: '0.625rem',
                              color: '#6b7280',
                              fontFamily: 'Inter, sans-serif'
                            }}>
                              8:44 AM, Today
                            </div>
                          </div>
                        </div>

                        <div style={{
                          background: '#f9fafb',
                          borderRadius: '8px',
                          padding: '8px',
                          marginTop: '8px'
                        }}>
                          <p style={{
                            fontSize: '0.75rem',
                            lineHeight: '1.35',
                            color: '#374151',
                            fontFamily: 'Inter, sans-serif',
                            margin: '0 0 4px 0'
                          }}>
                            Hey Jane 👋
                          </p>
                          <p style={{
                            fontSize: '0.688rem',
                            lineHeight: '1.4',
                            color: '#374151',
                            fontFamily: 'Inter, sans-serif',
                            margin: '0 0 6px 0'
                          }}>
                            ⚠️ Please note the SendGrid API key must be stored securely.
                          </p>
                          <p style={{
                            fontSize: '0.688rem',
                            lineHeight: '1.4',
                            color: '#374151',
                            fontFamily: 'Inter, sans-serif',
                            margin: '0'
                          }}>
                            🔒 At ACME, we typically use the <span style={{ color: '#ED4B56', textDecoration: 'underline' }}>AWS Secret Manager</span> for this&mdash;it aligns with our security best practices and helps prevent risks associated with hard-coded credentials.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          padding: '16px 0',
          borderTop: '1px solid #e5e7eb',
          marginTop: '16px',
          marginBottom: 0,
          background: '#ffffff'
        }}>
          <p style={{ 
            fontSize: '0.75rem',
            color: '#6b7280', 
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            margin: 0,
            lineHeight: '1'
          }}>
            zerotrail (formerly invade) Copyright © zerotrail Security [ ], {new Date().getFullYear()} all rights reserved.
          </p>
        </div>
      </div>
    </>
  );
} 