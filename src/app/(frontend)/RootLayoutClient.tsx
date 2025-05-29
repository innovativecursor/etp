'use client'

import React, { useState, useEffect } from 'react'
import './styles.css'
import { Poppins, Wix_Madefor_Display } from 'next/font/google'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const wixMadefor = Wix_Madefor_Display({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-wix-madefor',
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <html lang="en" className={`${poppins.variable} ${wixMadefor.variable}`}>
      <head>
        <meta property="og:title" content="ToxRemedies" />
        <meta property="og:description" content="In Service of Human and Environmental Health." />
        <meta property="og:image" content="/assets/thumbnail.webp" />
        <meta property="og:image:alt" content="About ToxRemedies" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toxremedies.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToxRemedies" />
        <meta name="twitter:description" content="ToxRemedies" />
      </head>
      <body>
        <main
          className={`font-poppins ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
