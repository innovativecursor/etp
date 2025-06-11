'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import heroImage from '../public/assets/HeroAssets/hero_section_image.png'
import { fetchHeroSection } from '../utils/api' // Adjust the path if needed

const HeroSection = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchHeroSection()
        console.log('Hero Data:', res)
        if (res) {
          setData(res)
        }
      } catch (error) {
        console.error('Error loading hero section:', error)
      }
    }

    loadData()
  }, [])

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center justify-between h-full relative z-10">
        {/* Left side text */}
        <motion.div
          className="w-full lg:w-1/2 px-4 md:px-10 text-white space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-wix-madefor tracking-wide font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {data?.mainHeading || 'Building Your'} <br />
            <span className="text-[#FEBC5D]">{data?.highlightedText || 'Dream Home'}</span> <br />
            {data?.mainHeadingAfter || 'Starts Here'}
          </motion.h1>

          <div className="max-w-[580px]">
            <motion.p
              className="text-[#A3A3A3] tracking-wide leading-8 font-light text-sm sm:text-base md:text-lg lg:text-[18px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {data?.subText || (
                <>
                  Easily TAP into professional guidance for all your <br />
                  architectural and engineering needs.
                </>
              )}
            </motion.p>
          </div>
          {data?.buttonLink && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href={data?.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-[#FEBC5D] text-black mt-8 px-10 text-[14px] font-light tracking-wide py-3 border-2 hover:border-white hover:bg-transparent hover:text-white transition duration-300 relative z-30">
                  {data?.buttonText || 'Start Your Project Now'}
                </button>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Desktop Image */}
      <motion.div
        className="hidden lg:block absolute top-0 right-0 h-full min-h-[700px] w-[53%] overflow-visible max-w-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src={data?.desktopImage?.url || heroImage}
          alt="Modern Home"
          width={100}
          height={100}
          className="object-cover h-full"
          priority
        />
      </motion.div>

      {/* Mobile/Tablet Image */}
      <motion.div
        className="block sm:hidden md:hidden lg:hidden absolute bottom-0 right-0 w-72 h-72 opacity-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src={data?.desktopImage?.url || heroImage}
          alt="Modern Home Mobile"
          fill
          className="object-cover shadow-md"
          priority
        />
      </motion.div>
    </section>
  )
}

export default HeroSection
