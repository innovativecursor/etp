'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import faqImage1 from '../public/assets/TestimonialsAssets/image_two.png'
import Image from 'next/image'
import { fetchFAQs } from '../utils/api'

interface FAQ {
  id: string
  question: string
  answer: string
}

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

// Updated fade-only variants (replacing x-axis movement)
const fadeInVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)
  const [faqs, setFaqs] = useState<FAQ[]>([])

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  useEffect(() => {
    const getFAQs = async () => {
      try {
        const data = await fetchFAQs()
        setFaqs(data?.docs || [])
      } catch (err) {
        console.error('Failed to fetch FAQs:', err)
      }
    }

    getFAQs()
  }, [])

  return faqs.length ? (
    <section
      className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12 md:py-16 md:px-12 lg:px-20"
      style={{
        background:
          'linear-gradient(270.26deg, rgba(255, 255, 255, 0) 0.23%, rgba(255, 208, 104, 0.74) 99.77%)',
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center gap-12 md:gap-20">
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left leading-snug mb-4 md:mb-6">
            Frequently Asked <br /> Questions
          </h2>
          <Image
            src={faqImage1}
            alt="construction"
            className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
          <p className="mt-4 sm:mt-6 text-sm text-gray-800 text-center md:text-left">
            Still Have Questions?{' '}
            <a className="text-[#F4B324] font-semibold" href="#contactus">
              Contact Us!
            </a>
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex flex-col items-start w-full md:max-w-xl mt-10 px-1 sm:px-2"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="mb-6 text-gray-600 text-sm sm:text-base">
            Explore our FAQs for quick insights and detailed explanations. <br/>Still need help? Feel
            free to reach out directly!
          </p>

          {/* FAQ Animated List */}
          <motion.div
            className="space-y-4 w-full mt-6 sm:mt-8 md:mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {faqs
              .slice()
              .reverse()
              .map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-[#182022] pb-3 w-full"
                  variants={itemVariants}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="font-medium text-[#182022] text-md">{faq.question}</h4>
                    <span className="text-xl font-bold text-[#F4B324]">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mt-2 text-[#494949] font-normal text-sm">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  ) : null
}
