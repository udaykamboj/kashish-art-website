import Link from "next/link"
import productsData from "@/data/products.json"
import ProductDetailClient from "./ProductDetailClient"

const getProduct = (id: string) => {
  return productsData.products.find((p) => p.id === id)
}

export function generateStaticParams() {
  return productsData.products.map((product: { id: string }) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Artwork Not Found</h1>
          <Link href="/shop">
            <button className="btn">Return to Shop</button>
          </Link>
        </div>
      </div>
    )
  }

  return <ProductDetailClient product={product} />
}
