'use client'

import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import logo from '../public/assets/etp_logo.png'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navItems = ['Home', 'Services', 'About Us', 'Projects', 'Contact Us']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [logoSize, setLogoSize] = useState(350)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setLogoSize(250) // smaller screen size
      } else {
        setLogoSize(350) // larger screen size
      }
    }

    handleResize() // initial check

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <nav className="w-full bg-transparent text-white font-medium py-6 z-50 relative">
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="logo-etp" width={logoSize} height={logoSize} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center justify-between flex-1 ml-40">
          {/* Nav Links */}
          <ul className="flex items-center space-x-8 text-[#D1D1D1] font-light">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-[#F4B324] transition">
                <Link href={`#${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>

          {/* Phone */}
          <div className="flex items-center space-x-2 px-6">
            <FaPhoneAlt size={16} className="text-[#F4B324]" />
            <a href="tel:09955555312" className="hover:underline">
              0995 5555 312
            </a>
          </div>

          {/* Button */}
          <a
            href="https://www.facebook.com/messages/e2ee/t/9401150536657301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border px-6 py-2 text-white text-[14px] tracking-wider font-light transition cursor-pointer">
              Get a Free Consultation
            </button>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <RxHamburgerMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full bg-[#0D0A09] text-white z-50 shadow-lg flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <Image src={logo} width={140} height={140} alt="logo-etp" />
              <button onClick={() => setIsOpen(false)}>
                <IoMdClose size={26} />
              </button>
            </div>

            <ul className="flex flex-col gap-5 text-lg">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-[#F4B324] transition"
                >
                  <Link href={`#${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10 border-t border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <FaPhoneAlt size={16} className="text-[#F4B324]" />
                <a href="tel:09955555312" className="hover:underline">
                  0995 5555 312
                </a>
              </div>

              <button className="border px-4 py-2 text-white text-sm tracking-wider font-light w-full">
                Get a Free Consultation
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
