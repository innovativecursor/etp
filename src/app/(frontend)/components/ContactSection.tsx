'use client'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'

const ContactSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Split - Half Orange and Half Black */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/2 bg-[#FDBA57]" />
        <div className="w-1/2 bg-black" />
      </div>

      {/* Content Layer */}
      <section className="relative py-10 px-6 md:px-4 z-10">
        <div className="container mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Left Side: Contact Form - Orange BG */}
            <div className="bg-[#FDBA57] px-6 md:px-14 py-16 flex items-center">
              <div className="w-full max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Let’s Connect</h2>
                <p className="text-sm md:text-base mb-8">
                  Have questions or ready to start? We’re here to help.
                </p>

                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="flex-1 p-3 bg-white text-black placeholder:text-black outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 p-3 bg-white text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 bg-white text-black placeholder:text-black outline-none"
                  />
                  <button
                    type="submit"
                    className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-[#FDBA57] transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side: Contact Info - Black BG */}
            <div className="bg-black px-6 md:px-14 py-16 text-white flex flex-col justify-between">
              <div className="w-full max-w-2xl ml-auto">
                {/* Social Icons */}
                <div className="flex justify-end space-x-4 mb-10">
                  <a
                    href="#"
                    className="border border-white p-2 rounded-full hover:text-[#FDBA57] hover:border-[#FDBA57] transition"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="#"
                    className="border border-white p-2 rounded-full hover:text-[#FDBA57] hover:border-[#FDBA57] transition"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href="#"
                    className="border border-white p-2 rounded-full hover:text-[#FDBA57] hover:border-[#FDBA57] transition"
                  >
                    <FaXTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    className="border border-white p-2 rounded-full hover:text-[#FDBA57] hover:border-[#FDBA57] transition"
                  >
                    <FaInstagram size={14} />
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 text-sm">
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[#FDBA57]" />
                    <span>09955555312</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-[#FDBA57]" />
                    <span>etpbuilders@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-[#FDBA57]" />
                    <span>Calumpit, Bulacan, Philippines</span>
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
