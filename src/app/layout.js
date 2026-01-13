import './globals.css'
import Header from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Orris & Amber',
  description: 'Private Label & Wholesale Perfume Manufacturer'
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
