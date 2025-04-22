import React from 'react'
import './globalStyles.css'
import { FlexCol, FlexRow } from './utils.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './app/AboutSection.jsx'
import CaseStudiesSection from './app/CaseStudiesSection.jsx'
import FooterSection from './app/FooterSection.jsx'

// Mock data for the case studies
const caseStudies = [
  {
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    clientLogo: 'client1',
    title: 'E-commerce Platform Redesign',
    description:
      'Redesigned the user experience for a major retail brand, focusing on conversion optimization and mobile responsiveness.',
    impact: '32% increase in mobile conversion rate',
    technologies: ['React', 'Node.js', 'Figma', 'Firebase'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    clientLogo: 'client2',
    title: 'Financial Dashboard App',
    description:
      'Developed an intuitive financial dashboard that visualizes complex data in real-time for investment professionals.',
    impact: 'Reduced decision time by 40%',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    clientLogo: 'client3',
    title: 'Healthcare Scheduling System',
    description:
      'Built a HIPAA-compliant scheduling system that streamlines appointment booking and management for healthcare providers.',
    impact: 'Saved staff 15+ hours per week',
    technologies: [
      'React Native',
      'GraphQL',
      'AWS',
      'TypeScript',
    ],
  },
]

// Responsive container component
export const Container = ({ children, style = {}, ...props }) => {
  return (
    <div
      {...props}
      style={{
        width: '100%',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 24px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export var App = () => {
  return (
    <FlexCol
      style={{ width: '100%', minHeight: '100%', background: '#f7f9fc' }}
    >
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <FooterSection />
    </FlexCol>
  )
}