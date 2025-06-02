'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import project1 from '../public/assets/ProjectsAssets/project_1.png'
import project2 from '../public/assets/ProjectsAssets/project_2.png'
import project3 from '../public/assets/ProjectsAssets/project_3.png'
import project4 from '../public/assets/ProjectsAssets/project_4.png'
import project5 from '../public/assets/ProjectsAssets/project_5.png'
import project6 from '../public/assets/ProjectsAssets/project_6.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const categories = ['All Works', 'Construction', 'Architecture', 'Building', 'Renovations']

const projects = [
  {
    title: 'Hacienda Verde Residences',
    location: 'Barangay Sta. Lucia, Calumpit',
    image: project1,
    category: 'Construction',
  },
  {
    title: 'North Haven Villas',
    location: 'Along MacArthur Highway, Calumpit',
    image: project2.src,
    category: 'Architecture',
  },
  {
    title: 'Hacienda Verde Residences',
    location: 'Barangay Sta. Lucia, Calumpit',
    image: project3.src,
    category: 'Building',
  },
  {
    title: 'The Fields At Calumpit',
    location: 'Near Calumpit River, Brgy. Poblacion',
    image: project4.src,
    category: 'Renovations',
  },
  {
    title: 'Modern Townhomes',
    location: 'Metro Manila',
    image: project5.src,
    category: 'Construction',
  },
  {
    title: 'Skyline Tower',
    location: 'Quezon City',
    image: project6.src,
    category: 'Architecture',
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Works')
  const [index, setIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  const filtered =
    selectedCategory === 'All Works'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width >= 1024) setCardsPerView(4)
      else if (width >= 640) setCardsPerView(2)
      else setCardsPerView(1)
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const nextSlide = () => {
    const maxIndex = Math.ceil(filtered.length / cardsPerView) - 1
    if (index < maxIndex) {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Category Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
          <h2 className="text-[54px] font-semibold">Our Projects</h2>
          <div className="mt-4 overflow-x-auto sm:mt-0 sm:overflow-x-visible">
            <div className="flex gap-6 text-sm relative min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat)
                    setIndex(0)
                  }}
                  className={`relative pb-1 ${
                    selectedCategory === cat
                      ? 'text-[#F4B324] text-[12px]'
                      : 'text-gray-400 text-[12px]'
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 h-[2px] bg-[#F4B324] w-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Swiper Cards */}
        <div className="overflow-hidden relative">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              width: `${(filtered.length * 100) / cardsPerView}%`,
              transform: `translateX(-${(index * 100) / filtered.length}%)`,
            }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title + i}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[420px] rounded-md overflow-hidden shadow-lg min-w-[100%] sm:min-w-[50%] lg:min-w-[20%]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
                <div
                  className="absolute inset-0 rounded-md"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.08%, #000000 100%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 z-10 text-left">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(filtered.length / cardsPerView) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
      w-3 h-3 rounded-full border
      ${i === index ? 'bg-white border-white ring-2 ring-yellow-400' : 'border-gray-400 ring-2 ring-gray-600'}
    `}
            />
          ))}
        </div>

        {/* Swiper Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 lg:left-12 z-20">
          <button
            onClick={prevSlide}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            <FaChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-6 lg:right-12 z-20">
          <button
            onClick={nextSlide}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button className="bg-[#FEBC5D] text-black py-4 px-12 border-2 hover:border-2 hover:border-white hover:bg-transparent hover:text-[#fff] transition">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurProjects
