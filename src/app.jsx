import React from 'react'
import './globalStyles.css'
import { FlexCol, FlexRow } from './utils.jsx'
import { CaseStudyCard } from './components/CaseStudyCard.jsx'

// Mock data for the case studies
const caseStudies = [
  {
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    clientLogo: 'client1',
    title: 'E-commerce Platform Redesign',
    description: 'Redesigned the user experience for a major retail brand, focusing on conversion optimization and mobile responsiveness.',
    impact: '32% increase in mobile conversion rate',
    technologies: ['React', 'Node.js', 'Figma', 'Firebase']
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    clientLogo: 'client2',
    title: 'Financial Dashboard App',
    description: 'Developed an intuitive financial dashboard that visualizes complex data in real-time for investment professionals.',
    impact: 'Reduced decision time by 40%',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB']
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    clientLogo: 'client3',
    title: 'Healthcare Scheduling System',
    description: 'Built a HIPAA-compliant scheduling system that streamlines appointment booking and management for healthcare providers.',
    impact: 'Saved staff 15+ hours per week',
    technologies: ['React Native', 'GraphQL', 'AWS', 'TypeScript']
  }
];

// Responsive container component
const Container = ({ children, style = {}, ...props }) => {
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
  );
};

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        minHeight: '100%',
        background: '#f7f9fc',
      }}
    >
      {/* Header Section */}
      <FlexCol style={{ 
        width: '100%',
        backgroundColor: '#1A202C',
        padding: '64px 0',
        marginBottom: 64,
      }}>
        <Container>
          <FlexCol style={{ 
            alignItems: 'flex-start', 
            textAlign: 'left',
          }}>
            <h1 style={{ 
              fontSize: 'var(--heading-font-size-xl, 3rem)',
              fontWeight: 700, 
              color: 'white',
              marginBottom: 16,
              lineHeight: 1.2,
            }}>
              Welcome to my Portfolio!
            </h1>
            
            <div style={{ 
              width: 80, 
              height: 4, 
              backgroundColor: '#00E1FF', 
              marginBottom: 32,
            }} />
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: 1.6, 
              color: '#E2E8F0',
              maxWidth: 800,
              marginBottom: 32,
            }}>
              I'm a passionate designer and developer specializing in creating beautiful, 
              functional digital experiences. With expertise in both UX design and 
              front-end development, I build solutions that look great and perform exceptionally.
            </p>
          </FlexCol>
        </Container>
      </FlexCol>
      
      {/* About Section */}
      <Container style={{ marginBottom: 64 }}>
        <FlexCol style={{ 
          backgroundColor: 'white',
          borderRadius: 16,
          padding: 'var(--card-padding, 32px)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        }}>
          <h2 style={{ 
            fontSize: 'var(--heading-font-size-lg, 2rem)',
            fontWeight: 600, 
            color: '#1A202C',
            marginBottom: 24,
          }}>
            About Me
          </h2>
          
          <p style={{ 
            fontSize: '1.125rem', 
            lineHeight: 1.7, 
            color: '#4A5568',
            marginBottom: 24,
          }}>
            With over 7 years of experience in the digital industry, I've worked with clients 
            ranging from startups to Fortune 500 companies. My approach combines strategic thinking 
            with technical expertise to deliver solutions that exceed expectations.
          </p>
          
          <p style={{ 
            fontSize: '1.125rem', 
            lineHeight: 1.7, 
            color: '#4A5568',
          }}>
            I believe in user-centered design principles and writing clean, maintainable code. 
            When I'm not designing or coding, you can find me exploring new technologies, 
            contributing to open-source projects, or hiking in the mountains.
          </p>
        </FlexCol>
      </Container>
      
      {/* Case Studies Section */}
      <Container style={{ marginBottom: 80 }}>
        <h2 style={{ 
          fontSize: 'var(--heading-font-size-lg, 2rem)',
          fontWeight: 600, 
          color: '#1A202C',
          marginBottom: 32,
        }}>
          Recent Projects
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', 
          gap: 32,
        }}>
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={index}
              image={caseStudy.image}
              clientLogo={caseStudy.clientLogo}
              title={caseStudy.title}
              description={caseStudy.description}
              impact={caseStudy.impact}
              technologies={caseStudy.technologies}
            />
          ))}
        </div>
      </Container>
      
      {/* Footer */}
      <FlexCol style={{ 
        backgroundColor: '#1A202C',
        padding: '48px 0 32px',
        marginTop: 'auto',
      }}>
        <Container>
          <FlexRow style={{ 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}>
            <FlexCol style={{ maxWidth: '400px' }}>
              <h3 style={{ 
                color: 'white', 
                fontSize: 'var(--heading-font-size-lg, 1.5rem)', 
                fontWeight: 600, 
                marginBottom: 16 
              }}>
                Get in Touch
              </h3>
              <p style={{ color: '#A0AEC0', lineHeight: 1.6, marginBottom: 24 }}>
                Interested in working together? Feel free to reach out to discuss your project.
              </p>
              <a href="mailto:hello@example.com" style={{ 
                color: '#00E1FF', 
                fontSize: '1.125rem', 
                textDecoration: 'none',
                fontWeight: 500,
              }}>
                hello@example.com
              </a>
            </FlexCol>
            
            <FlexCol style={{ alignItems: 'flex-end' }}>
              <div style={{ 
                width: 64, 
                height: 64, 
                backgroundColor: '#00E1FF', 
                borderRadius: '50%',
                marginBottom: 16,
              }} />
              <p style={{ color: '#A0AEC0' }}>
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
              </p>
            </FlexCol>
          </FlexRow>
        </Container>
      </FlexCol>
    </FlexCol>
  )
}
