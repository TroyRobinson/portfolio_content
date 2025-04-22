import React, { useState, useEffect, useMemo } from 'react'
import * as SolidIcons from '@heroicons/react/24/solid'

// Dynamically select the first 25 icons from Heroicons solid
const iconList = Object.values(SolidIcons).slice(0, 25)

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // dynamic hero height range in vh units
  const minHeight = 100
  const maxHeight = 150

  // swirl settings for icon spiral
  const swirlRevs = 1
  const swirlAngleMax = 2 * Math.PI * swirlRevs

  const shrinkRange = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 0
  const dynamicHeight = maxHeight - (maxHeight - minHeight) * scrollProgress
  const dynamicHeightPx = typeof window !== 'undefined' ? (dynamicHeight * window.innerHeight) / 100 : 0
  const overscrollRaw = scrollY - shrinkRange
  const overscrollPx = scrollProgress < 1 ? 0 : Math.min(Math.max(overscrollRaw, 0), dynamicHeightPx)

  const icons = useMemo(() => iconList.map((Icon) => {
    const initialX = Math.random() * 100
    const initialY = Math.random() * 100
    const dx = initialX - 50
    const dy = initialY - 50
    const initialAngle = Math.atan2(dy, dx)
    const initialRadius = Math.sqrt(dx * dx + dy * dy)
    return { Icon, initialAngle, initialRadius }
  }), [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY
          const progress = Math.min(scrolled / shrinkRange, 1)
          setScrollProgress(progress)
          setScrollY(scrolled)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      style={{
        position: 'sticky',
        top: 0,
        willChange: 'transform, height',
        transform: overscrollPx ? `translateY(-${overscrollPx}px)` : undefined,
        height: `${dynamicHeight}vh`,
        overflow: 'hidden',
        backgroundColor: '#1A202C'
      }}
    >
      {icons.map(({ Icon, initialAngle, initialRadius }, index) => {
        const angle = initialAngle + scrollProgress * swirlAngleMax
        const radius = initialRadius * (1 - scrollProgress)
        const left = 50 + radius * Math.cos(angle)
        const top = 50 + radius * Math.sin(angle)
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
