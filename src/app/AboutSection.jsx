import React from 'react'
import { Container } from '../app.jsx'
import { FlexCol } from '../utils.jsx'

export default function AboutSection() {
  return (
    <Container style={{ marginBottom: 64 }}>
      <FlexCol
        style={{
          backgroundColor: 'white',
          borderRadius: 16,
          padding: 'var(--card-padding, 32px)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
          maxWidth: '680px',
        }}
      >
        <h2
          style={{
            fontSize: 'var(--heading-font-size-lg, 2rem)',
            fontWeight: 600,
            color: '#1A202C',
            marginBottom: 24,
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: '#4A5568',
            marginBottom: 24,
          }}
        >
          With over 7 years of experience in the digital
          industry, I've worked with clients ranging from
          startups to Fortune 500 companies. My approach
          combines strategic thinking with technical
          expertise to deliver solutions that exceed
          expectations.
        </p>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: '#4A5568',
          }}
        >
          I believe in user-centered design principles and
          writing clean, maintainable code. When I'm not
          designing or coding, you can find me exploring
          new technologies, contributing to open-source
          projects, or hiking in the mountains.
        </p>
      </FlexCol>
    </Container>
  )
}
