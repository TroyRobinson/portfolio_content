import React, { useState, useEffect, useMemo } from 'react'
import {
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  CloudIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid'

const iconList = [
  AdjustmentsHorizontalIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  CloudIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  BeakerIcon, // final overlapping icon
]

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const icons = useMemo(
    () =>
      iconList.map((Icon) => ({
        Icon,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
      })),
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight
      const scrolled = window.scrollY
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#1A202C' }}
    >
      {icons.map(({ Icon, initialX, initialY }, index) => {
        const left = initialX + (50 - initialX) * scrollProgress
        const top = initialY + (50 - initialY) * scrollProgress
        return (
          <Icon
            key={index}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              width: '50px',
              height: '50px',
              color: '#00E1FF',
              transform: 'translate(-50%, -50%)',
              zIndex: index,
              transition: 'left 0.2s ease-out, top 0.2s ease-out',
            }}
          />
        )
      })}
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          zIndex: iconList.length + 1,
        }}
      >
        Cut through the noise
      </h1>
    </section>
  )
}

export default HeroSection
