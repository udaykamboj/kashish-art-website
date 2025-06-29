"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Mail } from "lucide-react"
import { useCart } from "@/lib/cart"

export default function OrderSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Clear cart after successful order
    clearCart()
  }, [clearCart])

  const orderNumber = "KS-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center py-8">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-serif mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
          </div>

          <Card className="text-left mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Order Number</p>
                  <p className="font-semibold">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Order Date</p>
                  <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-semibold">Card ending in 3456</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-left mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium">Order Confirmation Email</p>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email with your order details shortly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Download className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium">Shipping Updates</p>
                  <p className="text-sm text-gray-600">We'll send you tracking information once your artwork ships.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-sm text-gray-600">
                    Your artwork will be carefully packaged and delivered within 5-7 business days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="w-full bg-transparent">
              <Link href="/account/orders">View Order History</Link>
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Questions about your order? Contact us at{" "}
              <a href="mailto:hello@kashishseth.art" className="text-blue-600 hover:underline">
                hello@kashishseth.art
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
