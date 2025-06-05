'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import faqImage1 from '../public/assets/TestimonialsAssets/image_two.png'
import Image from 'next/image'

const faqs = [
  {
    question: 'What services does ETP Builders offer?',
    answer:
      'ETP Builders offers a comprehensive range of design and construction services for residential and commercial properties.',
  },
  {
    question: 'Do you handle both residential and commercial projects?',
    answer:
      'Yes, we specialize in both residential and commercial design and construction, tailored to your specific needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope, but we strive to complete projects efficiently without compromising quality.',
  },
  {
    question: 'Are your designs eco-friendly?',
    answer:
      'Absolutely. Sustainability is a core principle in our design and construction approach.',
  },
  {
    question: 'How can I contact ETP Builders?',
    answer:
      "You can contact us via our website, email, or phone. Visit the 'Contact Us' section for more information.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      className="flex items-center justify-center px-6 py-10 md:p-20"
      style={{
        background:
          'linear-gradient(270.26deg, rgba(255, 255, 255, 0) 0.23%, rgba(255, 208, 104, 0.74) 99.77%)',
      }}
    >
      <div className="max-w-7xl w-full flex flex-col justify-center md:flex-row gap-20">
        {/* Left Side */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center md:text-left leading-tight mb-6">
            Frequently Asked <br /> Questions
          </h2>
          <Image src={faqImage1} alt="construction" className="object-cover" />
          <p className="mt-6 text-sm text-gray-800">
            Still Have Questions?{' '}
            <a className="text-[#F4B324] font-semibold" href="#">
              Contact Us!
            </a>
          </p>
        </div>

        {/* Right Side */}

        <div className="flex flex-col items-start max-w-xl mt-10 ">
          {' '}
          {/* <-- Add mt-10 here */}
          <p className="mb-6 text-gray-600">
            Explore our FAQs for quick insights and detailed explanations. Still need help? Feel
            free to reach out directly!
          </p>
          <div className="space-y-4 w-full mt-10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#182022] pb-3 w-full">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
