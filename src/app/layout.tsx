import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Ucapan Lebaran 2025 | Selamat Hari Raya Idul Fitri',
  description: 'Ucapan Selamat Hari Raya Idul Fitri 1446 H dengan animasi dan efek visual interaktif',
  keywords: 'Lebaran, Idul Fitri, Ramadhan, Ucapan Lebaran, Greeting Card, Kartu Ucapan, Hari Raya',
  authors: [{ name: 'Lebaran Greetings Team' }],
  metadataBase: new URL('https://lebaran-2025.vercel.app'),
  openGraph: {
    title: 'Ucapan Lebaran 2025 | Selamat Hari Raya Idul Fitri',
    description: 'Ucapan Selamat Hari Raya Idul Fitri 1446 H dengan animasi interaktif',
    images: ['/asset/og-image.jpg'],
    type: 'website',
    siteName: 'Ucapan Lebaran 2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ucapan Lebaran 2025 | Selamat Hari Raya Idul Fitri',
    description: 'Ucapan Selamat Hari Raya Idul Fitri 1446 H dengan animasi interaktif',
    images: ['/asset/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="preload" as="image" href="/asset/background.svg" />
        <link rel="preload" as="image" href="/img/profile.jpg" />
        <link rel="preload" as="image" href="/asset/moon.svg" />
        <link rel="preload" as="image" href="/asset/lentera-1.svg" />
        <link rel="preload" as="image" href="/asset/lentera-2.svg" />
      </head>
      <body>
        {children}
        <Script 
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11" 
          strategy="beforeInteractive"
          id="swal-script"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" 
          strategy="beforeInteractive"
          id="anime-script"
        />
      </body>
    </html>
  )
}
