import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import DesignBuildServices from '../components/DesignBuildServices'
import OurProjects from '../components/OurProjects'
import TestimonialSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <div className="min-h-dvh bg-gradient-to-r from-[#1f1c1c] to-[#1c1b1b] text-white">
        <Navbar />
        <HeroSection />
      </div>
      <AboutUs />
      <DesignBuildServices />
      <OurProjects />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}
