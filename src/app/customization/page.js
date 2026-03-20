import CustomizationClient from '@/app/components/CustomizationClient'

export const metadata = {
  title: 'Private Label Perfume Manufacturing & Custom Fragrance Development',
  description:
    'Create your own perfume brand with Orris & Amber. We offer private label perfume manufacturing, custom fragrance development, packaging, and end-to-end production solutions.',
  alternates: {
    canonical: '/customization'
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
            name: "Custom Fragrance Development & Private Label Manufacturing",
            provider: {
              "@type": "Organization",
              name: "Orris & Amber"
            },
            description:
              "Private label perfume manufacturing and custom fragrance development including packaging, branding, and production.",
            areaServed: "Worldwide"
          })
        }}
      />

      <CustomizationClient />
    </>
  )
}