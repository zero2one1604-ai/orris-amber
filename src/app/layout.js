import './globals.css'
import Header from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata = {
  metadataBase: new URL('https://orrisandamber.com'),

  title: {
    default: 'Orris & Amber | Wholesale & Private Label Perfume Manufacturer',
    template: '%s | Orris & Amber'
  },

  description:
    'Orris & Amber is a leading wholesale and private label perfume manufacturer offering designer fragrances, attar, candles, and custom scent solutions for retailers and global brands.',

  keywords: [
    'wholesale perfumes',
    'private label perfume manufacturer',
    'bulk perfumes supplier',
    'custom fragrance manufacturer',
    'attar wholesale',
    'perfume supplier India',
    'white label perfumes',
    'perfume distributor'
  ],

  authors: [{ name: 'Orris & Amber' }],
  creator: 'Orris & Amber',
  publisher: 'Orris & Amber',

  openGraph: {
    title: 'Orris & Amber | Wholesale & Private Label Perfume Manufacturer',
    description:
      'Premium wholesale perfumes, attar, candles and private label fragrance solutions for retailers and global brands.',
    url: 'https://orrisandamber.com',
    siteName: 'Orris & Amber',
    images: [
      {
        url: '/images/orrislogo.png',
        width: 1200,
        height: 630,
        alt: 'Orris & Amber Perfumes'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Orris & Amber | Wholesale Perfume Supplier',
    description:
      'Wholesale perfumes and private label fragrance manufacturing for global retailers.',
    images: ['/images/orrislogo.png']
  },

  robots: {
    index: true,
    follow: true
  },

  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
