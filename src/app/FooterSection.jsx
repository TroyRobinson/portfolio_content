import React from 'react'
import { Container } from '../app.jsx'
import { FlexCol, FlexRow } from '../utils.jsx'

export default function FooterSection() {
  return (
    <FlexCol
      style={{
        backgroundColor: '#1A202C',
        padding: '48px 0 32px',
        marginTop: 'auto',
      }}
    >
      <Container>
        <FlexRow
          style={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <FlexCol style={{ maxWidth: '400px' }}>
            <h3
              style={{
                color: 'white',
                fontSize: 'var(--heading-font-size-lg,     1.5rem)',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Get in Touch
            </h3>
            <p
              style={{
                color: '#A0AEC0',
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Interested in working together? Feel free to
              reach out to discuss your project.
            </p>
            <FlexCol style={{ gap: 12 }}>
              <FlexRow style={{ alignItems: 'center' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{
                    color: '#00E1FF',
                    width: 20,
                    height: 20,
                    marginRight: 8,
                  }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
                <a href='mailto:hello@example.com' style={{ color: '#E2E8F0', fontSize: '1rem',
                    textDecoration: 'none', fontWeight: 500 }}>
                  hello@example.com
                </a>
              </FlexRow>
              <FlexRow style={{ alignItems: 'center' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{
                    color: '#00E1FF',
                    width: 20,
                    height: 20,
                    marginRight: 8,
                  }}
                />
                <a href='tel:+1234567890' style={{ color: '#E2E8F0',
                    fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}>
                  (123) 456-7890
                </a>
              </FlexRow>
              <FlexRow style={{ alignItems: 'center' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{
                    color: '#00E1FF',
                    width: 20,
                    height: 20,
                    marginRight: 8,
                  }}
                />
                <a href='https://example.com' target='_blank' rel='noopener noreferrer' style={{ color: '#E2E8F0',
                    fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}>
                  www.example.com
                </a>
              </FlexRow>
            </FlexCol>
          </FlexCol>
          <FlexCol style={{ alignItems: 'flex-end' }}>
            <div style={{ width: 64, height: 64, backgroundColor: '#00E1FF', borderRadius: '50%', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='32' height='32' style={{ color: '#1A202C' }}>
                <path fillRule='evenodd' d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z' clipRule='evenodd'/>
              </svg>
            </div>
            <p style={{ color: '#A0AEC0'}}>
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </FlexCol>
        </FlexRow>
      </Container>
    </FlexCol>
  )
}
