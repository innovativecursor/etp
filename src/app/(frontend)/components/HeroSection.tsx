'use client'
import React from 'react'
import Image from 'next/image'
import heroImage from '../public/assets/HeroAssets/hero_section_image.png'

const HeroSection = () => {
  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center justify-between h-full relative z-10">
        {/* Left side text */}
        <div className="w-full lg:w-1/2 px-4 md:px-10 text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-wix-madefor tracking-wide font-bold leading-tight">
            Building Your <br />
            <span className="text-[#FEBC5D] ">Dream Home</span> <br />
            Starts Here
          </h1>
          <p className="text-[#A3A3A3] tracking-wide leading-8 font-light text-sm sm:text-base md:text-lg lg:text-[18px]">
            Easily TAP into professional guidance for all your <br />
            architectural and engineering needs.
          </p>
          <a
            href="https://www.facebook.com/messages/e2ee/t/9401150536657301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FEBC5D] text-black mt-8 px-10 text-[14px] font-light tracking-wide py-3 border-2 hover:border-2 hover:border-white hover:bg-transparent hover:text-[#fff] hover:ease-in-out transition">
              Start Your Project Now
            </button>
          </a>
        </div>
      </div>

      {/* Desktop Image (hidden on small devices) */}
      <div className="hidden lg:block absolute top-0 right-0 h-full min-h-[700px] w-[53%]">
        <Image src={heroImage} alt="Modern Home" fill className="object-cover" priority />
      </div>

      {/* Mobile/Tablet Image (visible on sm/md) */}
      <div className="block sm:hidden md:hidden lg:hidden absolute bottom-0 right-0 w-72 h-72 opacity-80">
        <Image
          src={heroImage}
          alt="Modern Home Mobile"
          fill
          className="object-cover shadow-md"
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection
