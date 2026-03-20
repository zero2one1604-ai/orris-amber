import PackagingClient from '@/app/components/PackagingClient'

export const metadata = {
  title: 'Perfume Packaging Solutions | Bottles, Caps & Private Label Design',
  description:
    'Explore premium perfume packaging solutions by Orris & Amber including glass bottles, caps, custom boxes, and private label design support for fragrance brands.',
  alternates: {
    canonical: '/packaging'
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
            name: "Perfume Packaging Solutions",
            provider: {
              "@type": "Organization",
              name: "Orris & Amber"
            },
            description:
              "Wholesale perfume packaging including bottles, caps, custom boxes, and private label design services.",
            areaServed: "Worldwide"
          })
        }}
      />

      <PackagingClient />
    </>
  )
}