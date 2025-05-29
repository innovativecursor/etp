import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import DesignBuildServices from '../components/DesignBuildServices'

export default function Home() {
  return (
    <>
      <div className="min-h-dvh bg-gradient-to-r from-[#1f1c1c] to-[#1c1b1b] text-white">
        <Navbar />
        <HeroSection />
      </div>
      <AboutUs />
      <DesignBuildServices />
      <Footer />
    </>
  )
}
