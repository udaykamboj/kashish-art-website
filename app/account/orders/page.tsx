"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Truck, CheckCircle } from "lucide-react"

const orders = [
  {
    id: "KS-12345",
    date: "2024-01-15",
    status: "delivered",
    total: "$1,200",
    items: [
      {
        name: "Abstract Harmony",
        image: "/placeholder.svg?height=80&width=80",
        price: "$1,200",
        quantity: 1,
      },
    ],
    trackingNumber: "1Z999AA1234567890",
    estimatedDelivery: "Delivered on Jan 18, 2024",
  },
  {
    id: "KS-12344",
    date: "2024-01-10",
    status: "shipped",
    total: "$850",
    items: [
      {
        name: "Digital Dreams",
        image: "/placeholder.svg?height=80&width=80",
        price: "$450",
        quantity: 1,
      },
      {
        name: "Urban Reflections",
        image: "/placeholder.svg?height=80&width=80",
        price: "$400",
        quantity: 1,
      },
    ],
    trackingNumber: "1Z999AA1234567891",
    estimatedDelivery: "Expected Jan 20, 2024",
  },
  {
    id: "KS-12343",
    date: "2024-01-05",
    status: "processing",
    total: "$2,800",
    items: [
      {
        name: "Metamorphosis Series #1",
        image: "/placeholder.svg?height=80&width=80",
        price: "$2,800",
        quantity: 1,
      },
    ],
    trackingNumber: null,
    estimatedDelivery: "Expected Jan 25, 2024",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800"
    case "shipped":
      return "bg-blue-100 text-blue-800"
    case "processing":
      return "bg-yellow-100 text-yellow-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "delivered":
      return CheckCircle
    case "shipped":
      return Truck
    case "processing":
      return Package
    default:
      return Package
  }
}

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/shop">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
          <h1 className="text-4xl font-serif mb-2">Order History</h1>
          <p className="text-gray-600">Track and manage your artwork purchases</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => {
            const StatusIcon = getStatusIcon(order.status)
            return (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Order {order.id}</CardTitle>
                      <p className="text-sm text-gray-600">Placed on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(order.status)} variant="secondary">
                        <StatusIcon className="mr-1 h-3 w-3" />
                        {order.status}
                      </Badge>
                      <p className="text-lg font-semibold mt-1">{order.total}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Delivery Info */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{order.estimatedDelivery}</p>
                          {order.trackingNumber && (
                            <p className="text-sm text-gray-600">
                              Tracking: <span className="font-mono">{order.trackingNumber}</span>
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {order.trackingNumber && (
                            <Button variant="outline" size="sm">
                              Track Package
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-serif mb-2">No Orders Yet</h2>
            <p className="text-gray-600 mb-8">Start exploring our collection to place your first order</p>
            <Button asChild size="lg">
              <Link href="/shop">Browse Artworks</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
