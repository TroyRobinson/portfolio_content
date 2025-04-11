import React, { useState } from 'react'
import { FlexCol, FlexRow } from '../utils.jsx'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

// Simple SVG client logos
const ClientLogos = {
  client1: () => (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#4299E1"/>
      <path d="M14 16H24M24 16L20 12M24 16L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 12H40V20H32V12Z" stroke="white" strokeWidth="2"/>
      <circle cx="56" cy="16" r="4" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  client2: () => (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#48BB78"/>
      <path d="M21 12L26 20L31 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="40" y="12" width="8" height="8" stroke="white" strokeWidth="2"/>
      <circle cx="56" cy="16" r="4" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  client3: () => (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="32" rx="4" fill="#ED8936"/>
      <circle cx="20" cy="16" r="4" stroke="white" strokeWidth="2"/>
      <rect x="32" y="12" width="16" height="8" rx="4" stroke="white" strokeWidth="2"/>
      <path d="M56 12V20M60 12V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
};

export const CaseStudyCard = ({ 
  image, 
  clientLogo, 
  title, 
  description, 
  impact, 
  technologies 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <FlexCol 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        width: '100%', 
        padding: 'var(--card-padding, 32px)', 
        backgroundColor: '#ffffff', 
        borderRadius: 16, 
        boxShadow: isHovered 
          ? '0px 12px 32px rgba(0, 0, 0, 0.12)'
          : '0px 8px 24px rgba(0, 0, 0, 0.08)',
        height: '100%',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-4px)' : 'none',
      }}
    >
      {/* Project Image */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: 'min(240px, 30vw)', 
        marginBottom: 24 
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            borderRadius: 12,
          }} 
        />
        
        {/* Client Logo */}
        <div style={{ 
          position: 'absolute', 
          bottom: 16, 
          right: 16, 
          backgroundColor: 'white', 
          padding: 8, 
          borderRadius: 8,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {clientLogo === 'client1' && <ClientLogos.client1 />}
          {clientLogo === 'client2' && <ClientLogos.client2 />}
          {clientLogo === 'client3' && <ClientLogos.client3 />}
        </div>
      </div>
      
      {/* Title */}
      <h3 style={{ 
        fontSize: 'var(--heading-font-size-lg, 24px)', 
        fontWeight: 600, 
        marginBottom: 16,
        color: '#1A202C',
      }}>
        {title}
      </h3>
      
      {/* Description */}
      <p style={{ 
        fontSize: 16, 
        color: '#4A5568', 
        marginBottom: 24, 
        lineHeight: 1.6,
      }}>
        {description}
      </p>
      
      {/* Impact */}
      <FlexRow style={{ 
        alignItems: 'center', 
        marginBottom: 24,
        flexWrap: 'wrap',
      }}>
        <div style={{ 
          fontWeight: 700, 
          fontSize: 16, 
          color: '#1A202C',
          marginRight: 8, 
        }}>
          Impact:
        </div>
        <div style={{ 
          fontSize: 16, 
          color: '#4A5568',
          fontWeight: 500,
        }}>
          {impact}
        </div>
      </FlexRow>
      
      {/* Technologies */}
      <FlexRow style={{ flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {technologies.map((tech, index) => (
          <div key={index} style={{ 
            backgroundColor: '#EDF2F7', 
            color: '#4A5568',
            padding: '8px 12px', 
            borderRadius: 8, 
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 8,
          }}>
            {tech}
          </div>
        ))}
      </FlexRow>
      
      {/* View project link */}
      <FlexRow style={{ 
        marginTop: 'auto', 
        paddingTop: 16,
        alignItems: 'center',
        alignSelf: 'flex-start',
        color: '#0077FF',
        fontWeight: 600,
        fontSize: 16,
        cursor: 'pointer',
      }}>
        View Project 
        <ExternalLinkIcon style={{ marginLeft: 8, width: 16, height: 16 }} />
      </FlexRow>
    </FlexCol>
  )
} 