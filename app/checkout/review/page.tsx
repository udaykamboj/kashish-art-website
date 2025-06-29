"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Lock, Edit } from "lucide-react"
import { useCart } from "@/lib/cart"

export default function ReviewOrderPage() {
  const { items, getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()
  const tax = Math.round(totalPrice * 0.08)
  const finalTotal = totalPrice + tax

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    console.log("Placing order...")
    // Redirect to success page
    window.location.href = "/checkout/success"
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/checkout">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Checkout
            </Button>
          </Link>
          <h1 className="text-4xl font-serif mb-2">Review Your Order</h1>
          <p className="text-gray-600">Please review your order details before placing your order</p>
        </div>

        <div className="space-y-6">
          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                  <div className="relative w-20 h-24 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.artist}</p>
                    <p className="text-sm text-gray-500">{item.medium}</p>
                    <p className="text-sm text-gray-500">{item.dimensions}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">Quantity: {item.quantity}</span>
                      <span className="font-semibold">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Shipping Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Shipping Information</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/checkout">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>John Doe</strong>
                </p>
                <p>123 Main Street</p>
                <p>Apt 4B</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Payment Information</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/checkout">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Card ending in ****3456</p>
                <p>Expires 12/25</p>
                <p>John Doe</p>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>
                  Subtotal ({items.length} {items.length === 1 ? "item" : "items"})
                </span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-xl">
                <span>Total</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Place Order Button */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p>By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
                  <p className="mt-2">
                    Your payment will be processed securely. You will receive an email confirmation once your order is
                    placed.
                  </p>
                </div>
                <Button onClick={handlePlaceOrder} className="w-full" size="lg">
                  <Lock className="mr-2 h-4 w-4" />
                  Place Order - ${finalTotal.toLocaleString()}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
