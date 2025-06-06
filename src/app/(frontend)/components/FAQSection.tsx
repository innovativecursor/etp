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

const leftSectionVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const rightSectionVariants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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
      className="flex items-center justify-center px-6 py-10 md:p-20"
      style={{
        background:
          'linear-gradient(270.26deg, rgba(255, 255, 255, 0) 0.23%, rgba(255, 208, 104, 0.74) 99.77%)',
      }}
    >
      <div className="max-w-7xl w-full flex flex-col justify-center md:flex-row gap-20">
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-center"
          variants={leftSectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center md:text-left leading-tight mb-6">
            Frequently Asked <br /> Questions
          </h2>
          <Image src={faqImage1} alt="construction" className="object-cover" />
          <p className="mt-6 text-sm text-gray-800">
            Still Have Questions?{' '}
            <a className="text-[#F4B324] font-semibold" href="#contactus">
              Contact Us!
            </a>
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex flex-col items-start max-w-xl mt-10"
          variants={rightSectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="mb-6 text-gray-600">
            Explore our FAQs for quick insights and detailed explanations. Still need help? Feel
            free to reach out directly!
          </p>

          {/* FAQ Animated List */}
          <motion.div
            className="space-y-4 w-full mt-10"
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
