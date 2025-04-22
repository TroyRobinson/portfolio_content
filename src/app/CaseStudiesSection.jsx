import React from 'react'
import { Container } from '../app.jsx'
import { FlexCol } from '../utils.jsx'
import { CaseStudyCard } from '../components/CaseStudyCard.jsx'

export default function CaseStudiesSection({ caseStudies }) {
  return (
    <Container style={{ marginBottom: 80 }}>
      <h2
        style={{
          fontSize: 'var(--heading-font-size-lg, 2rem)',
          fontWeight: 600,
          color: '#1A202C',
          marginBottom: 32,
        }}
      >
        Recent Projects
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
          gap: 32,
        }}
      >
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            image={study.image}
            clientLogo={study.clientLogo}
            title={study.title}
            description={study.description}
            impact={study.impact}
            technologies={study.technologies}
          />
        ))}
      </div>
    </Container>
  )
}
