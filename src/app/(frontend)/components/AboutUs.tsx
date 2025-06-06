'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import about1 from '../public/assets/AboutUsAssets/about_image_1.png'
import about2 from '../public/assets/AboutUsAssets/about_image_2.png'
import about3 from '../public/assets/AboutUsAssets/about_image_3.png'
import aboutbottom from '../public/assets/AboutUsAssets/about_bottom_image.png'
import checkIcon from '../public/assets/AboutUsAssets/tick_box.png'

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-28 px-6 xl:px-20 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(270.29deg, rgba(255, 255, 255, 0) 0.25%, rgba(244, 179, 36, 0.54) 99.75%)',
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
        {/* Left Side - Images */}
        <motion.div
          className="hidden xl:flex w-full md:w-7/12 flex-col items-center md:pl-4 gap-2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-[80%] h-[290px] relative overflow-hidden shadow-lg z-10">
            <Image src={about1} alt="Modern House" fill className="object-cover" />
          </div>
          <div className="flex gap-2 w-full items-start">
            <div className="w-[279px] h-[260px] relative ">
              <Image src={about2} alt="Interior Design" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden w-[368px] h-[320px]">
              <Image src={about3} alt="Exterior Design" fill className="object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full md:w-7/12 max-w-xl mx-auto space-y-6 pt-6 md:pt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-[54px] text-[#1C1613] font-bold">About Us</h2>
          <p className="text-[#7b7b7bcc] font-extralight text-[14px] mb-10 leading-relaxed">
            We specialize in high-quality residential construction, offering tailored solutions that
            turn your vision into reality. With years of experience and a commitment to excellence,
            we focus on building not just homes, but lasting relationships with our clients. Whether
            you’re building from the ground up, renovating, or adding a new extension, our skilled
            team ensures every detail is handled with care and precision.
          </p>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <Image src={checkIcon} alt="Check" width={20} height={20} />
              <span className="font-medium">Established Expertise</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={checkIcon} alt="Check" width={20} height={20} />
              <span className="font-medium">Client-Focused Approach</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={checkIcon} alt="Check" width={20} height={20} />
              <span className="font-medium">Comprehensive Solutions</span>
            </div>
          </motion.div>

          <motion.button
            className="bg-[#FEBC5D] hover:bg-yellow-600 mt-10 text-[#0D0A09] font-medium px-20 py-3 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            onClick={() => {
              const section = document.getElementById('projects')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Right Corner Image */}
      <motion.div
        className="absolute bottom-0 right-0 pr-6 pb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src={aboutbottom}
          alt="Construction Illustration"
          width={350}
          height={150}
          className="object-contain"
        />
      </motion.div>
    </section>
  )
}

export default AboutUs
