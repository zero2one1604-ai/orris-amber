import HomeClient from '@/app/components/HomeClient'

export const metadata = {
  title: 'Wholesale Perfume Manufacturer & Private Label Fragrances',
  description:
    'Orris & Amber is a leading wholesale perfume manufacturer offering private label fragrances, attar, candles, and custom scent solutions for retailers and global brands.',
  alternates: {
    canonical: '/'
  }
}


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Orris & Amber",
            url: "https://orrisandamber.com",
            logo: "https://orrisandamber.com/orrislogo.png",
            description:
              "Wholesale perfume manufacturer and private label fragrance supplier offering attar, candles, and custom scent solutions.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9871566081",
              contactType: "customer service",
              areaServed: "Worldwide"
            }
          })
        }}
      />
      
      <HomeClient />
    </>
  )
}