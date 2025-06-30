"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Kashish",
    price: "$1,200",
    image: "/placeholder.svg?height=300&width=240",
    inStock: true,
  },
  {
    id: 2,
    title: "Digital Dreams",
    artist: "Kashish",
    price: "$450",
    image: "/placeholder.svg?height=300&width=240",
    inStock: true,
  },
  {
    id: 3,
    title: "Urban Reflections",
    artist: "Kashish",
    price: "$800",
    image: "/placeholder.svg?height=300&width=240",
    inStock: false,
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/shop">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
          <h1 className="text-4xl font-serif mb-2">My Wishlist</h1>
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>

        {items.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <Link href={`/shop/${item.id}`}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.artist}</p>
                      <p className="font-bold text-lg">{item.price}</p>
                    </div>

                    <div className="space-y-2">
                      {item.inStock ? (
                        <Button className="w-full" size="sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full bg-transparent" size="sm" disabled>
                          Out of Stock
                        </Button>
                      )}
                      <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
                        <Link href={`/shop/${item.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-serif mb-2">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">Save artworks you love to view them later</p>
            <Button asChild size="lg">
              <Link href="/shop">Browse Artworks</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
