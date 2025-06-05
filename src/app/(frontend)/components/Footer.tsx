'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/FooterAssets/logo_footer.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import innocursor from '../public/assets/FooterAssets/innocursor.svg'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-yellow-400 text-black text-sm">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo and Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src={logo} width={350} height={350} alt="logo-etp" />
          </div>
          <p className="text-gray-700 leading-relaxed max-w-md md:max-w-xl">
            We pride ourselves on transparent communication, timely project delivery, and superior
            craftsmanship. When you choose us, you’re choosing a company that builds with integrity.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="space-y-3 flex flex-col ml-0 lg:items-center">
          <h3 className="font-semibold text-base">Link</h3>
          <ul className="space-y-2 text-gray-800 ">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#aboutus">About Us</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#projects">Our Projects</Link>
            </li>
            <li>
              <Link href="#contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contacts */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base">Contacts</h3>
          <div className="flex items-center gap-2 text-gray-800">
            <FaPhoneAlt size={14} />
            <a href="tel:09955555312" className="hover:underline">
              0995 5555 312
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <FaEnvelope size={14} />
            <a href="mailto:edwin_t_pagtalunan@yahoo.com" className="hover:underline">
              edwin_t_pagtalunan@yahoo.com
            </a>
          </div>
        </div>

        {/* Column 4: Address + Social Icons */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base">Address</h3>
          <div className="flex items-start gap-2 text-gray-800">
            <FaMapMarkerAlt size={16} className="mt-1" />
            <span>
              Calumpit, Bulacan ,<br />
              Philippines
            </span>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.facebook.com/ed.pagta?rdid=seZ2c2Vm9EIf6dbD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18thsJ82BK%2F#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-[#F4B324] border border-[#F4B324] rounded-full p-3 w-10 h-10" />
            </a>
            {/* <FaLinkedinIn className="text-[#F4B324] border border-[#F4B324] rounded-full p-3 w-10 h-10" />
            <FaXTwitter className="text-[#F4B324] border border-[#F4B324] rounded-full p-3 w-10 h-10" />
            <FaInstagram className="text-[#F4B324] border border-[#F4B324] rounded-full p-3 w-10 h-10" /> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-300 w-full">
        <div className="container mx-auto px-6 md:px-20 text-center md:text-left text-gray-700 py-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <p className="flex items-center">
            © 2025 etpbuilders. All rights reserved/ Designed & Developed by{' '}
            <Image
              src={innocursor}
              className="mr-1 ml-2"
              width={15}
              height={15}
              alt="Innovative Cursor Logo"
            />
            <span className="text-black ml-3"> Innovative Cursor</span>
          </p>
          <div className="space-x-2 pt-2 md:pt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
