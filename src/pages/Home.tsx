import React from 'react'

import { HomeSection } from '@/components/Sections/HomeSection'
import { AboutSection } from '@/components/Sections/AboutSection'
import { ServiceSection } from '@/components/Sections/ServiceSection'
import { ContactSection } from '@/components/Sections/ContactSection'

const Home = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </>
  )
}

export default Home
