import productsData from "@/data/products.json"

export function generateStaticParams() {
  return productsData.products.map((product: { id: string }) => ({
    id: product.id,
  }))
}
