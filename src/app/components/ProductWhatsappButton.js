'use client'

export default function ProductWhatsappButton({ product, category }) {
  const handleClick = () => {
    const text = `
New Product Inquiry

Product: ${product.name}
Category: ${category.name}

Description:
${product.description}

I am interested in bulk order. Please share details.
    `

    const encoded = encodeURIComponent(text)

    const phoneNumber = "919871566081"

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`

    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
    >
      Inquire for Bulk Order
    </button>
  )
}