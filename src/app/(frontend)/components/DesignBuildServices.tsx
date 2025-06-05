'use client'

import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBuilding, FaHome, FaImage, FaUser, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineFence } from 'react-icons/md'
import { LuWaves } from 'react-icons/lu'
import project1 from '../public/assets/ProjectsAssets/project_1.png'
import project2 from '../public/assets/ProjectsAssets/project_2.png'
import { fetchServices } from '../utils/api'
// ⬅️ adjust the path if needed

type Service = {
  icon: React.ReactElement
  title: string
  description: string
  number: string
  images: (StaticImageData | string)[]
}

const services: Service[] = [
  {
    icon: <FaBuilding size={40} color="#2d2d2e" />,
    title: 'Residential',
    description: 'Custom homes built to reflect your lifestyle, comfort, and vision.',
    number: '01',
    images: [project1, project2],
  },
  {
    icon: <FaUser size={40} color="#2d2d2e" />,
    title: 'Commercial',
    description: 'Functional and modern spaces for offices, shops, and businesses.',
    number: '02',
    images: [project1, project2],
  },
  {
    icon: <FaImage size={40} color="#2d2d2e" />,
    title: 'Landscape',
    description:
      'Creative and sustainable outdoor environments that elevate your property’s beauty.',
    number: '03',
    images: ['/services/landscape1.jpg', '/services/landscape2.jpg'],
  },
  {
    icon: <LuWaves size={40} color="#2d2d2e" />,
    title: 'Swimming Pool',
    description:
      'Premium pools designed for relaxation and recreation — crafted with safety and style in mind.',
    number: '04',
    images: ['/services/pool1.jpg', '/services/pool2.jpg'],
  },
  {
    icon: <FaHome size={40} color="#2d2d2e" />,
    title: 'House Renovation',
    description:
      'From minor upgrades to major overhauls — we breathe new life into your existing space.',
    number: '05',
    images: ['/services/renovation1.jpg', '/services/renovation2.jpg'],
  },
  {
    icon: <MdOutlineFence size={40} color="#2d2d2e" />,
    title: 'Fencing and Backfilling',
    description:
      'Robust fencing solutions and reliable backfilling services for secure and stable properties.',
    number: '06',
    images: ['/services/fencing1.jpg', '/services/fencing2.jpg'],
  },
]

const DesignBuildServices = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dynamicServices, setDynamicServices] = useState<Service[] | null>(null)

  const handleNext = () => {
    if (!selectedService) return
    setCurrentIndex((prev) => (prev + 1) % selectedService.images.length)
  }

  const handlePrev = () => {
    if (!selectedService) return
    setCurrentIndex(
      (prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length,
    )
  }
  // @ts-ignore - Ignore "unused attribute" warning
  // Helper to map icon name from API to actual icon component
  const getIcon = (iconName: string): JSX.Element => {
    const size = 40
    const color = '#2d2d2e'
    // @ts-ignore - Ignore "unused attribute" warning
    const icons: Record<string, JSX.Element> = {
      FaBuilding: <FaBuilding size={size} color={color} />,
      FaHome: <FaHome size={size} color={color} />,
      FaImage: <FaImage size={size} color={color} />,
      FaUser: <FaUser size={size} color={color} />,
      MdOutlineFence: <MdOutlineFence size={size} color={color} />,
      LuWaves: <LuWaves size={size} color={color} />,
    }

    return icons[iconName] || <FaBuilding size={size} color={color} />
  }

  useEffect(() => {
    fetchServices()
      .then((data) => {
        const mapped = data.map((item: any) => ({
          icon: getIcon(item.icon),
          title: item.title,
          description: item.description,
          number: item.number,
          images: item.images.map((img: any) => img.image?.url || img.url),
        }))
        setDynamicServices(mapped)
      })
      .catch((err) => {
        console.error('Error loading services from API:', err)
      })
  }, [])

  return (
    <section id="services">
      {/* Header */}
      <div className="bg-[#0D0B0A] py-12 text-center">
        <h2 className="text-[54px] font-semibold text-[#FEBC5D] mb-2">Design and Build Services</h2>
        <p className="text-white !font-extralight text-[14px]">
          From Concept to Completion, We’ve Got You Covered
        </p>
      </div>

      {/* Cards */}
      <div className="bg-[#fffaf0] py-20 px-6 overflow-x-auto">
        <div className="flex flex-nowrap items-center justify-start gap-12 max-w-[1400px] mx-auto flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:flex-nowrap overflow-x-auto">
          {(dynamicServices || services)
            .map((service, index) => {
              const shouldFlip = ['01', '03', '05'].includes(service.number)
              return (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[200px] max-w-[220px] text-center sm:min-w-[150px] sm:max-w-[180px] md:min-w-[180px] md:max-w-[200px]"
                >
                  {/* Mobile View */}
                  <div className="block sm:hidden flex flex-col items-center text-center">
                    <span className="text-[54px] font-extrabold text-[#FFE8B6]">
                      {service.number}
                    </span>
                    <div
                      onClick={() => {
                        setSelectedService(service)
                        setCurrentIndex(0)
                      }}
                      className="relative w-[96px] h-[96px] my-3 rounded-t-full rounded-b-md bg-white shadow-md flex items-center justify-center cursor-pointer"
                    >
                      <div className="z-10 text-[#2d2d2e]">{service.icon}</div>
                      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#fcb92c]" />
                    </div>
                    <h3 className="text-md font-bold mt-2">{service.title}</h3>
                    <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                  </div>

                  {/* Desktop View */}
                  <div className="hidden md:flex flex-col items-center text-center">
                    {!shouldFlip ? (
                      <>
                        <span className="text-[54px] font-extrabold text-[#FFE8B6]">
                          {service.number}
                        </span>
                        <div
                          onClick={() => {
                            setSelectedService(service)
                            setCurrentIndex(0)
                          }}
                          className="relative w-[96px] h-[96px] my-3 rounded-t-full rounded-b-md bg-white shadow-md flex items-center justify-center cursor-pointer"
                        >
                          <div className="z-10 text-[#2d2d2e]">{service.icon}</div>
                          <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#fcb92c]" />
                        </div>
                        <h3 className="text-md font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-md font-bold mt-2">{service.title}</h3>
                        <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                        <div
                          onClick={() => {
                            setSelectedService(service)
                            setCurrentIndex(0)
                          }}
                          className="relative w-[96px] h-[96px] my-3 rounded-t-full rounded-b-md bg-white shadow-md flex items-center justify-center rotate-180 cursor-pointer"
                        >
                          <div className="z-10 text-[#2d2d2e] rotate-180">{service.icon}</div>
                          <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#fcb92c]" />
                        </div>
                        <span className="text-[54px] font-extrabold text-[#FFE8B6]">
                          {service.number}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="relative bg-white p-6 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#2d2d2e] text-center">
                {selectedService.title}
              </h2>

              <div className="relative w-full h-[300px] sm:h-[400px] rounded overflow-hidden">
                {/* <-- FIXED HERE: Use the image URL string directly --> */}
                <Image
                  src={selectedService.images[currentIndex]}
                  alt={`${selectedService.title} image`}
                  fill
                  className="object-cover rounded h-full"
                />
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                  <FaArrowLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                  <FaArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DesignBuildServices
