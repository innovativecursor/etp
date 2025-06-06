'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { fetchProjects } from '../utils/api'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [index, setIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [projectsData, setProjectsData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const sliderRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const isDown = useRef(false)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects()
        setProjectsData(data)
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const projectsToUse = projectsData
  const categories = [...Array.from(new Set(projectsData.map((p) => p.category)))]

  const filtered =
    selectedCategory === 'All'
      ? projectsToUse
      : projectsToUse.filter((p) => p.category === selectedCategory)

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

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scrollAmount = slider.scrollWidth / Math.ceil(filtered.length / cardsPerView)
    slider.scrollTo({
      left: index * scrollAmount,
      behavior: 'smooth',
    })
  }, [index, cardsPerView, filtered.length])

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

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleMouseDown = (e: MouseEvent) => {
      isDown.current = true
      slider.classList.add('cursor-grabbing')
      startX.current = e.pageX - slider.offsetLeft
      scrollLeft.current = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown.current = false
      slider.classList.remove('cursor-grabbing')
    }

    const handleMouseUp = () => {
      isDown.current = false
      slider.classList.remove('cursor-grabbing')
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX.current) * 1.5
      slider.scrollLeft = scrollLeft.current - walk
    }

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mouseleave', handleMouseLeave)
    slider.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('mousemove', handleMouseMove)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      slider.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('mousemove', handleMouseMove)
    }
  }, [filtered, cardsPerView])

  return (
    <section id="projects" className="bg-black text-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Category Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
          <h2 className="text-[54px] font-semibold">Our Projects</h2>
          <div className="mt-4 overflow-x-auto sm:mt-0">
            <div className="flex gap-6 text-sm relative min-w-max">
              {categories
                .slice()
                .reverse()
                .map((cat) => (
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
        <div className="overflow-hidden relative cursor-grab">
          <div
            ref={sliderRef}
            className="overflow-x-scroll no-scrollbar relative cursor-grab max-h-[420px]"
            style={{ WebkitOverflowScrolling: 'touch', overflowY: 'hidden' }}
          >
            <div className="flex gap-6 cursor-grab" style={{ minWidth: 'max-content' }}>
              {loading
                ? Array.from({ length: cardsPerView }).map((_, i) => (
                    <div
                      key={`skeleton-${i}`}
                      className="h-[420px] bg-gray-800 animate-pulse rounded-md shadow-lg"
                      style={{
                        width: `${100 / cardsPerView}%`,
                        minWidth: `${100 / cardsPerView}%`,
                      }}
                    >
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-black opacity-70 rounded-md" />
                      </div>
                    </div>
                  ))
                : filtered.map((project, i) => (
                    <motion.div
                      key={project.title + i}
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative h-[420px] rounded-md overflow-hidden shadow-lg"
                      style={{
                        width: `${100 / cardsPerView}%`,
                        minWidth: `${100 / cardsPerView}%`,
                      }}
                    >
                      <Image
                        src={project.images?.[0]?.image?.url || '/fallback.jpg'}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div
                        className="absolute inset-0 rounded-md"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.08%, #000000 100%)',
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
        </div>

        {/* Navigation Dots */}
        <div className="flex flex-wrap justify-center items-center mt-6 gap-4">
          {Array.from({ length: Math.ceil(filtered.length / cardsPerView) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setIndex(i)}
              className={`w-3 h-3 flex items-center justify-center rounded-full transition-all duration-300 ${
                i === index ? 'w-5 h-5 border-2 border-white' : 'border border-red-400'
              }`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i === index ? 'w-2 h-2 bg-white' : 'w-3 h-3 bg-amber-500'
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://www.facebook.com/messages/e2ee/t/9401150536657301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FEBC5D] text-black py-4 px-12 border-2 hover:border-2 hover:border-white hover:bg-transparent hover:text-[#fff] transition">
              Get Free Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurProjects
