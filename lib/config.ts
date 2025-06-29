// Environment variables with defaults
export const config = {
  taxPercentage: Number.parseFloat(process.env.TAX_PERCENTAGE || "8.25") / 100, // Default 8.25%
  shippingCharge: Number.parseFloat(process.env.FLAT_SHIPPING_CHARGE || "0"), // Default free shipping
} as const

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

export const calculateTax = (subtotal: number): number => {
  return Math.round(subtotal * config.taxPercentage * 100) / 100
}

export const calculateTotal = (subtotal: number): number => {
  const tax = calculateTax(subtotal)
  return subtotal + tax + config.shippingCharge
}
