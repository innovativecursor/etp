'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import client1 from '../public/assets/TestimonialsAssets/client_1.png'
import client2 from '../public/assets/TestimonialsAssets/client_2.png'
import client3 from '../public/assets/TestimonialsAssets/client_3.png'
import backgroundImage from '../public/assets/TestimonialsAssets/background_image_client.png'

const testimonials = [
  {
    name: 'Maria Santos',
    title: 'CEO, Santos Enterprises',
    image: client1.src,
    text: 'Working with ETP Builders was an incredible experience from start to finish. Their team demonstrated unmatched professionalism, keeping us informed at every stage of the project. The attention to detail they brought to the design and construction process ensured that every element of our vision was perfectly executed.',
  },
  {
    name: 'John Doe',
    title: 'CTO, Skylink Inc.',
    image: client2.src,
    text: 'ETP Builders exceeded our expectations. From initial consultation to final delivery, they maintained professionalism and quality. Truly impressed.',
  },
  {
    name: 'Jane Lee',
    title: 'Founder, Bright Studios',
    image: client3.src,
    text: 'Exceptional service and dedication from the team. Communication was seamless and the project execution was flawless. Highly recommend ETP Builders.',
  },
]

const TestimonialSection = () => {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]

  const changeTestimonial = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setIndex(newIndex)
    }
  }

  return (
    <section className="relative text-white py-30 text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Testimonial Background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-30"
        priority
      />

      <div className="relative z-10 w-full bg-black px-4 md:px-20 py-20 backdrop-blur-sm">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-[#F4B324] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Client Says
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.p
            key={testimonial.text}
            className="text-lg md:text-xl text-white mb-10 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {testimonial.text}
          </motion.p>
        </AnimatePresence>

        <motion.div
          className="mb-2 font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {testimonial.name}
        </motion.div>
        <div className="text-sm text-gray-400 mb-10">{testimonial.title}</div>

        <div className="flex justify-center items-center gap-6 mt-10">
          {/* Prev Button */}
          <button
            onClick={() => changeTestimonial(index - 1)}
            className="text-sm text-white flex items-center gap-2 hover:text-[#F4B324] transition"
          >
            <span className="text-xl">&lt;</span> Prev
          </button>

          {/* Avatar Circle Row */}
          <div className="flex gap-8 justify-center items-center">
            {/* Previous Avatar */}
            <motion.div
              className="rounded-full border-4 cursor-pointer"
              initial={{ scale: 0.9, opacity: 0.4, filter: 'blur(2px)' }}
              animate={{ scale: 0.9, opacity: 0.4, filter: 'blur(2px)' }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                changeTestimonial((index - 1 + testimonials.length) % testimonials.length)
              }
            >
              <Image
                src={testimonials[(index - 1 + testimonials.length) % testimonials.length].image}
                alt="Previous client"
                width={64}
                height={64}
                className="rounded-full object-cover border-4 border-white/30"
              />
            </motion.div>

            {/* Current Avatar */}
            <motion.div
              className="rounded-full border-4 border-[#F4B324] z-10"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={testimonials[index].image}
                alt="Current client"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </motion.div>

            {/* Next Avatar */}
            <motion.div
              className="rounded-full border-4 cursor-pointer"
              initial={{ scale: 0.9, opacity: 0.4, filter: 'blur(2px)' }}
              animate={{ scale: 0.9, opacity: 0.4, filter: 'blur(2px)' }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => changeTestimonial((index + 1) % testimonials.length)}
            >
              <Image
                src={testimonials[(index + 1) % testimonials.length].image}
                alt="Next client"
                width={64}
                height={64}
                className="rounded-full object-cover border-4 border-white/30"
              />
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => changeTestimonial(index + 1)}
            className="text-sm text-white flex items-center gap-2 hover:text-[#F4B324] transition"
          >
            Next <span className="text-xl">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
