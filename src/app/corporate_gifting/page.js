import CorporateGiftingClient from '@/app/components/CorporateGiftingClient'

export const metadata = {
  title: 'Corporate Gifting Solutions | Luxury Perfume & Custom Gift Sets',
  description:
    'Explore corporate gifting solutions by Orris & Amber including luxury perfume gift sets, wellness kits, and custom branded gifting for businesses and events.',
  alternates: {
    canonical: '/corporate-gifting'
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
            "@type": "Service",
            name: "Corporate Gifting Solutions",
            provider: {
              "@type": "Organization",
              name: "Orris & Amber"
            },
            description:
              "Luxury corporate gifting including perfume gift sets, wellness boxes, and custom branded gifts for businesses.",
            areaServed: "Worldwide"
          })
        }}
      />

      <CorporateGiftingClient />
    </>
  )
}