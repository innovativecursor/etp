import React from 'react'
import { FaBuilding, FaHome, FaImage, FaUser } from 'react-icons/fa'
import { MdOutlineFence } from 'react-icons/md'
import { LuWaves } from 'react-icons/lu'

const services = [
  {
    icon: <FaBuilding size={40} />,
    title: 'Residential',
    description: 'Custom homes built to reflect your lifestyle, comfort, and vision.',
    number: '01',
  },
  {
    icon: <FaUser size={40} />,
    title: 'Commercial',
    description: 'Functional and modern spaces for offices, shops, and businesses.',
    number: '02',
  },
  {
    icon: <FaImage size={40} />,
    title: 'Landscape',
    description:
      'Creative and sustainable outdoor environments that elevate your property’s beauty.',
    number: '03',
  },
  {
    icon: <LuWaves size={40} />,
    title: 'Swimming Pool',
    description:
      'Premium pools designed for relaxation and recreation — crafted with safety and style in mind.',
    number: '04',
  },
  {
    icon: <FaHome size={40} />,
    title: 'House Renovation',
    description:
      'From minor upgrades to major overhauls — we breathe new life into your existing space.',
    number: '05',
  },
  {
    icon: <MdOutlineFence size={40} />,
    title: 'Fencing and Backfilling',
    description:
      'Robust fencing solutions and reliable backfilling services for secure and stable properties.',
    number: '06',
  },
]

const DesignBuildServices = () => {
  return (
    <section>
      {/* Black Stripe Header */}
      <div className="bg-black py-12 text-center">
        <h2 className="text-4xl font-semibold text-[#fcb92c] mb-2">Design and Build Services</h2>
        <p className="text-white">From Concept to Completion, We’ve Got You Covered</p>
      </div>

      {/* Horizontal Card Layout */}
      <div className="bg-[#fffaf0] py-20 px-6 overflow-x-auto">
        <div className="flex flex-nowrap justify-start gap-12 max-w-[1400px] mx-auto">
          {services.map((service, index) => {
            const isOdd = index % 2 === 0 // 0, 2, 4 → 01, 03, 05
            return (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px] max-w-[220px] text-center"
              >
                {isOdd ? (
                  <>
                    <h3 className="text-md font-bold">{service.title}</h3>
                    <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                    <div className="relative w-[96px] h-[96px] my-3 rounded-t-full rounded-b-md bg-white shadow-md flex items-center justify-center">
                      <div className="z-10">{service.icon}</div>
                      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#fcb92c]" />
                    </div>
                    <span className="text-[54px] font-extrabold text-[#FFE8B6]">
                      {service.number}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[54px] font-extrabold text-[#FFE8B6]">
                      {service.number}
                    </span>
                    <div className="relative w-[96px] h-[96px] my-3 rounded-t-full rounded-b-md bg-white shadow-md flex items-center justify-center">
                      <div className="z-10">{service.icon}</div>
                      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#fcb92c]" />
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{service.description}</p>
                    <h3 className="text-md font-bold mt-2">{service.title}</h3>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DesignBuildServices
