import AboutClient from '@/app/components/AboutClient'

export const metadata = {
  title: 'About Orris & Amber | Perfume Manufacturer Since 2007',
  description:
    'Learn about Orris & Amber, a wholesale perfume manufacturer since 2007 offering private label fragrances, global distribution, and premium scent development.',
  alternates: {
    canonical: '/about'
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
            url: "https://orrisandamber.com/about",
            foundingDate: "2007",
            description:
              "Wholesale perfume manufacturer and private label fragrance supplier with global distribution.",
            areaServed: "Worldwide"
          })
        }}
      />

      <AboutClient />
    </>
  )
}