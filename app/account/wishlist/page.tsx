"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ShoppingCart } from "lucide-react"
import { getSavedItems, removeSavedItem, type SavedItem } from "@/lib/saved-items"
import { useCart } from "@/lib/cart"

export default function WishlistPage() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([])
  const { addItem } = useCart()

  useEffect(() => {
    setSavedItems(getSavedItems())
  }, [])

  const handleRemove = (id: string) => {
    removeSavedItem(id)
    setSavedItems(getSavedItems())
  }

  const handleAddToCart = (item: SavedItem) => {
    if (item.price) {
      addItem({
        id: item.id,
        title: item.title,
        artist: item.artist,
        price: item.price,
        image: item.image,
        medium: "Mixed Media", // Default since not stored in saved items
        dimensions: "Various", // Default since not stored in saved items
      })
    }
  }

  if (savedItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-serif mb-8">My Wishlist</h1>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Your wishlist is empty</p>
            <p className="text-gray-400 mb-8">Save artworks you love to view them later</p>
            <Button asChild>
              <Link href="/shop">Browse Artworks</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif">My Wishlist</h1>
          <p className="text-gray-600">
            {savedItems.length} {savedItems.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="grid gap-6">
          {savedItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  <Link href={`/shop/${item.id}`} className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link href={`/shop/${item.id}`}>
                      <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">{item.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-2">{item.artist}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    {item.price && <p className="font-semibold text-lg">${item.price.toLocaleString()}</p>}
                    <p className="text-xs text-gray-400">Saved {new Date(item.savedAt).toLocaleDateString()}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {item.price && (
                      <Button size="sm" onClick={() => handleAddToCart(item)} className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
