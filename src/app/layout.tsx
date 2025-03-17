import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Selamat Hari Raya Idul Fitri 2025',
  description: 'Ucapan Selamat Hari Raya Idul Fitri 2025',
  keywords: 'Idul Fitri, Lebaran, Ucapan Lebaran, Kartu Ucapan Digital',
  authors: [{ name: 'Lebaran 2025' }],
  openGraph: {
    title: 'Selamat Hari Raya Idul Fitri 2025',
    description: 'Ucapan Selamat Hari Raya Idul Fitri 2025',
    images: ['/img/profile.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
