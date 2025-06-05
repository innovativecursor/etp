'use client'

import { useState } from 'react'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { submitSimpleContactUs } from '../utils/api'
import { showToast } from './Toaster'
import { motion } from 'framer-motion'
const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const success = await submitSimpleContactUs(form)
    setIsLoading(false)
    if (success) {
      showToast('Message sent successfully!', 'success')
      setForm({ name: '', email: '', message: '' })
    } else {
      showToast('Failed to send message. Please try again.', 'error')
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Split - Half Orange and Half Black */}
      <div className="absolute inset-0 flex flex-col md:flex-row z-0">
        <div className="h-1/2 md:h-auto w-full md:w-1/2 bg-[#FDBA57]" />
        <div className="h-1/2 md:h-auto w-full md:w-1/2 bg-black" />
      </div>

      {/* Content Layer */}
      <section id="contactus" className="relative md:px-4 z-10">
        <div className="container mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
            {/* Left Side: Contact Form - Orange BG */}
            <div className="bg-[#FDBA57] px-6 md:px-14 py-16 flex items-center">
              <div className="w-full max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Let’s Connect</h2>
                <p className="text-sm md:text-[12px] mb-8 text-[#2B2B2B]">
                  Have questions or ready to start? We’re here to help.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 bg-white text-[#666666] placeholder:text-[#666666] outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 bg-white text-[#666666] placeholder:text-[#666666] outline-none"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white text-[#666666] placeholder:text-[#666666] outline-none"
                  />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="border border-white text-white px-12 py-2 text-sm hover:bg-white hover:text-[#FDBA57] transition flex items-center justify-center gap-2"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side: Contact Info - Black BG */}
            <div className="bg-black px-6 md:px-14 py-16 text-white flex flex-col justify-between">
              <div className="w-full max-w-2xl ml-auto">
                <div className="mb-10">
                  <div className="flex justify-center space-x-4 mb-6">
                    <a
                      href="https://www.facebook.com/messages/e2ee/t/9401150536657301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white p-2 rounded-full hover:text-[#FDBA57] hover:border-[#FDBA57] transition"
                    >
                      <FaFacebookF size={14} />
                    </a>
                  </div>
                  <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 border-t border-gray-500 opacity-30" />
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt size={20} className="text-[#FDBA57]" />
                    <a href="tel:09955555312" className="text-2xl hover:underline">
                      0995 5555 312
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope size={20} className="text-[#FDBA57]" />
                    <a
                      href="mailto:edwin_t_pagtalunan@yahoo.com"
                      className="text-2xl hover:underline"
                    >
                      edwin_t_pagtalunan@yahoo.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt size={20} className="text-[#FDBA57]" />
                    <span className="text-2xl">Calumpit, Bulacan, Philippines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection
