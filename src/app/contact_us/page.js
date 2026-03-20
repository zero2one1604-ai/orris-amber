import ContactClient from '@/app/components/ContactClient'

export const metadata = {
  title: 'Contact Orris & Amber | Private Label Perfume Manufacturer',
  description:
    'Get in touch with Orris & Amber for private label perfume manufacturing, custom fragrance development, packaging, and corporate gifting solutions.',
  alternates: {
    canonical: '/contact'
  }
}

export default function Page() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Orris & Amber",
            url: "https://orrisandamber.com/contact",
            description:
              "Contact Orris & Amber for private label perfume manufacturing and fragrance solutions.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9871566081",
              contactType: "customer service",
              areaServed: "IN"
            }
          })
        }}
      />

      <ContactClient />
    </>
  )
}