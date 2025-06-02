'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-100 to-white p-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-6 max-w-md">
            Explore our FAQs for quick insights and detailed explanations. Still need help? Feel
            free to reach out directly!
          </p>
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-full w-64 h-64 mb-[-32px]">
              <img
                src="/construction1.jpg"
                alt="construction"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-full border-4 border-white w-48 h-48">
              <img
                src="/construction2.jpg"
                alt="construction planning"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-6 text-sm text-gray-800">
              Still Have Questions?{' '}
              <a className="text-orange-500 font-semibold" href="#">
                Contact Us!
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-400 pb-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold text-md">{faq.question}</h4>
                <span className="text-xl font-bold text-yellow-600">
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
                    <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
