import Link from "next/link"
import { productCategories } from "@/app/lib/products_database"

export const metadata = {
  title: "Products | Orris & Amber",
  description: "Explore fragrance, skincare and wellness products."
}

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-light mb-16">Our Products</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {productCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className="border p-10 hover:bg-black hover:text-white transition"
          >
            <h2 className="text-xl">{cat.name}</h2>
            <p className="text-sm mt-2">{cat.products.length} products</p>
          </Link>
        ))}
      </div>
    </main>
  )
}