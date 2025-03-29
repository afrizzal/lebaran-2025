import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ucapan Lebaran 2025 | Selamat Hari Raya Idul Fitri',
  description: 'Ucapan Selamat Hari Raya Idul Fitri 1446 H dengan animasi dan efek visual interaktif',
  keywords: 'Lebaran, Idul Fitri, Ramadhan, Ucapan Lebaran, Greeting Card, Kartu Ucapan, Hari Raya',
  authors: [{ name: 'Lebaran Greetings Team' }],
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
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Load scripts */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11" 
          strategy="lazyOnload"
          id="swal-script"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" 
          strategy="lazyOnload"
          id="anime-script"
        />
      </body>
    </html>
  )
}
