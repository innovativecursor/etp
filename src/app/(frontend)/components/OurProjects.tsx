'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const categories = ['All Works', 'Construction', 'Architecture', 'Building', 'Renovations']

const projects = [
  {
    title: 'Hacienda Verde Residences',
    location: 'Barangay Sta. Lucia, Calumpit',
    image: '/images/project1.jpg',
    category: 'Construction',
  },
  {
    title: 'North Haven Villas',
    location: 'Along MacArthur Highway, Calumpit',
    image: '/images/project2.jpg',
    category: 'Architecture',
  },
  {
    title: 'Hacienda Verde Residences',
    location: 'Barangay Sta. Lucia, Calumpit',
    image: '/images/project3.jpg',
    category: 'Building',
  },
  {
    title: 'The Fields At Calumpit',
    location: 'Near Calumpit River, Brgy. Poblacion',
    image: '/images/project4.jpg',
    category: 'Renovations',
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Works')
  const [index, setIndex] = useState(0)

  const filtered =
    selectedCategory === 'All Works'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const nextSlide = () => setIndex((prev) => (prev + 1) % filtered.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + filtered.length) % filtered.length)

  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold">Our Projects</h2>
          <div className="flex gap-6 text-sm relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setIndex(0)
                }}
                className={`relative pb-1 ${selectedCategory === cat ? 'text-yellow-400' : 'text-gray-400'}`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] bg-yellow-400 w-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={filtered[index]?.title}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-md shadow-lg"
            >
              <Image
                src={filtered[index].image}
                alt={filtered[index].title}
                fill
                style={{ objectFit: 'cover', zIndex: -1 }}
                className="rounded-md"
              />
              <div className="z-10 text-left w-full">
                <h3 className="text-lg font-semibold">{filtered[index].title}</h3>
                <p className="text-sm text-gray-300">{filtered[index].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-6 gap-2">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full border border-white ${i === index ? 'bg-white' : ''}`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-yellow-400 text-black py-2 px-6 rounded-md hover:bg-yellow-300 transition">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurProjects
