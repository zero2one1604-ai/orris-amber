import { productCategories } from "@/app/lib/products_database"
import { notFound, redirect } from "next/navigation"

export function generateStaticParams() {
  return productCategories.map((c) => ({
    category: c.slug
  }))
}

export default async function CategoryPage({ params }) {
  const { category } = await params

  const categoryData = productCategories.find(
    (c) => c.slug === category
  )

  if (!categoryData) return notFound()

  const firstProduct = categoryData.products[0]

  redirect(`/products/${categoryData.slug}/${firstProduct.slug}`)
}