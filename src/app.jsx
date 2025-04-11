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
          <CaseStudyCard 
            image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            clientLogo="client1"
            title="E-commerce Platform Redesign"
            description="Redesigned the user experience for a major retail brand, focusing on conversion optimization and mobile responsiveness."
            impact="32% increase in mobile conversion rate"
            technologies={['React', 'Node.js', 'Figma', 'Firebase']}
          />
          
          <CaseStudyCard 
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            clientLogo="client2"
            title="Financial Dashboard App"
            description="Developed an intuitive financial dashboard that visualizes complex data in real-time for investment professionals."
            impact="Reduced decision time by 40%"
            technologies={['Vue.js', 'D3.js', 'Express', 'MongoDB']}
          />
          
          <CaseStudyCard 
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            clientLogo="client3"
            title="Healthcare Scheduling System"
            description="Built a HIPAA-compliant scheduling system that streamlines appointment booking and management for healthcare providers."
            impact="Saved staff 15+ hours per week"
            technologies={['React Native', 'GraphQL', 'AWS', 'TypeScript']}
          />
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
              
              <FlexCol style={{ gap: 12 }}>
                {/* Email contact */}
                <FlexRow style={{ alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: '#00E1FF', width: 20, height: 20, marginRight: 8 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:hello@example.com" style={{ 
                    color: '#E2E8F0', 
                    fontSize: '1rem', 
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}>
                    hello@example.com
                  </a>
                </FlexRow>
                
                {/* Phone contact */}
                <FlexRow style={{ alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: '#00E1FF', width: 20, height: 20, marginRight: 8 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+1234567890" style={{ 
                    color: '#E2E8F0', 
                    fontSize: '1rem', 
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}>
                    (123) 456-7890
                  </a>
                </FlexRow>
                
                {/* Website */}
                <FlexRow style={{ alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: '#00E1FF', width: 20, height: 20, marginRight: 8 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ 
                    color: '#E2E8F0', 
                    fontSize: '1rem', 
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}>
                    www.example.com
                  </a>
                </FlexRow>
              </FlexCol>
            </FlexCol>
            
            <FlexCol style={{ alignItems: 'flex-end' }}>
              <div style={{ 
                width: 64, 
                height: 64, 
                backgroundColor: '#00E1FF', 
                borderRadius: '50%',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style={{ color: '#1A202C' }}>
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
              </div>
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
