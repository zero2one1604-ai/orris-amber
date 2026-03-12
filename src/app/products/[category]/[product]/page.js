import Link from "next/link"
import { productCategories } from "@/app/lib/products_database"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const paths = []

  productCategories.forEach((cat) => {
    cat.products.forEach((p) => {
      paths.push({
        category: cat.slug,
        product: p.slug
      })
    })
  })

  return paths
}

export async function generateMetadata({ params }) {
  const category = productCategories.find(
    (c) => c.slug === params.category
  )

  const product = category?.products.find(
    (p) => p.slug === params.product
  )

  if (!product) return {}

  return {
    title: `${product.name} | Orris & Amber`,
    description: product.description
  }
}

export default async function ProductPage({ params }) {
  const { category, product } = await params
  const categoryData = productCategories.find(
  (c) => c.slug === category
)

const productData = categoryData?.products.find(
  (p) => p.slug === product
)

  if (!productData) return notFound()

  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <div className="grid md:grid-cols-2 gap-16">

        <img
          src={productData.image}
          alt={productData.name}
          className="w-full rounded"
        />

        <div>
          <h1 className="text-4xl font-light mb-6">
            {productData.name}
          </h1>

          <p className="text-gray-600 mb-10">
            {productData.description}
          </p>

          {categoryData.products.length > 1 && (
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4">
                Other {categoryData.name}
              </h3>

              <div className="flex gap-4 flex-wrap">
                {categoryData.products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${categoryData.slug}/${p.slug}`}
                    className={`px-4 py-2 border ${
                      p.slug === product.slug
                        ? "bg-black text-white"
                        : ""
                    }`}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

    </main>
  )
}