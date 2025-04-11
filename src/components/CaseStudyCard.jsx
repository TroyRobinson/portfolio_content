import React, { useState } from 'react'
import { FlexCol, FlexRow } from '../utils.jsx'
// Removed import from Hero Icons npm package

// Client logos using Hero Icons
const ClientLogos = {
  client1: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '4px 8px',
      backgroundColor: '#4299E1',
      borderRadius: 4,
      color: 'white',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l.97-.97H5.25a.75.75 0 0 1 0-1.5h1.97l-.97-.97a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0-1.06-1.06l-2.25 2.25a.75.75 0 1 0 1.06 1.06l.97-.97h1.97a.75.75 0 0 0 0-1.5H10.3l.97-.97Z" clipRule="evenodd" />
      </svg>
      <span style={{ marginLeft: 8, fontWeight: 600, fontSize: 14 }}>Client A</span>
    </div>
  ),
  client2: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '4px 8px',
      backgroundColor: '#48BB78',
      borderRadius: 4,
      color: 'white',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
      </svg>
      <span style={{ marginLeft: 8, fontWeight: 600, fontSize: 14 }}>Client B</span>
    </div>
  ),
  client3: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '4px 8px',
      backgroundColor: '#ED8936',
      borderRadius: 4,
      color: 'white',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
      </svg>
      <span style={{ marginLeft: 8, fontWeight: 600, fontSize: 14 }}>Client C</span>
    </div>
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
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor"
          style={{ marginLeft: 8, width: 18, height: 18, color: '#0077FF' }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
          />
        </svg>
      </FlexRow>
    </FlexCol>
  )
} 