"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, ArrowLeft, ChevronDown, ShoppingCart, Check, Bookmark, BookmarkCheck } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart"
import { useState, useEffect } from "react"
import { saveItem, removeSavedItem, isItemSaved } from "@/lib/saved-items"

export default function ProductDetailClient({ product }: { product: any }) {
  const { addItem, items } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [shareMessage, setShareMessage] = useState("")

  useEffect(() => {
    if (product) {
      setIsSaved(isItemSaved(product.id))
    }
  }, [product])

  const isInCart = items.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      artist: product.artist,
      price: product.price,
      image: product.images[0],
      medium: product.medium,
      dimensions: product.dimensions,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleSave = () => {
    if (isSaved) {
      removeSavedItem(product.id)
      setIsSaved(false)
    } else {
      saveItem({
        id: product.id,
        title: product.title,
        artist: product.artist,
        image: product.images[0],
        price: product.price,
        category: product.category,
      })
      setIsSaved(true)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: `${product.title} by ${product.artist}`,
      text: `Check out this amazing artwork: ${product.title} by ${product.artist}`,
      url: window.location.href,
    }

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        setShareMessage("Link copied to clipboard!")
        setTimeout(() => setShareMessage(""), 3000)
      }
    } catch (error) {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        setShareMessage("Link copied to clipboard!")
        setTimeout(() => setShareMessage(""), 3000)
      } catch {
        setShareMessage("Unable to share")
        setTimeout(() => setShareMessage(""), 3000)
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/shop">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Action Buttons Below Image */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-gray-200">
              <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleSave}>
                {isSaved ? <BookmarkCheck className="h-4 w-4 text-blue-600" /> : <Bookmark className="h-4 w-4" />}
                {isSaved ? "Saved" : "Save"}
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {shareMessage && (
              <div className="text-center text-sm text-green-600 bg-green-50 py-2 px-4 rounded-md">{shareMessage}</div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">
                collected: {product.artist.toLowerCase().replace(" ", "")} {new Date().getDate()}.
                {new Date().getMonth() + 1}.{new Date().getFullYear().toString().slice(-2)}, {new Date().getFullYear()}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
              <div className="text-sm text-gray-600 space-y-1 mb-6">
                <p>{product.dimensions}</p>
                <p>{product.frame}</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <Badge variant="outline" className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {product.uniqueWork ? "Unique work" : product.edition}
                </Badge>
                <Badge variant="outline">{product.certificate}</Badge>
              </div>

              <div className="text-3xl font-bold mb-8">${product.price.toLocaleString()}</div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={handleAddToCart}
                disabled={isInCart || product.status === "sold"}
              >
                {product.status === "sold" ? (
                  "Sold Out"
                ) : isAdded ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart!
                  </>
                ) : isInCart ? (
                  "Already in Cart"
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>

              {isInCart && (
                <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
                  <Link href="/cart">View Cart</Link>
                </Button>
              )}
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 border-b border-gray-200">
                  <span className="font-medium">Shipping and taxes</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="py-3 text-sm text-gray-600">
                  <p className="mb-2">Estimate Shipping Cost</p>
                  <p>Free shipping within the continental US. International shipping rates calculated at checkout.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 border-b border-gray-200">
                  <span className="font-medium">Return Policy</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="py-3 text-sm text-gray-600">
                  <p>Secure transactions, 14-day return policy, and authenticity guarantee.</p>
                </div>
              </details>
            </div>

            {/* Gallery Info */}
            {product.gallery && (
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{product.artist}</h3>
                      <p className="text-sm text-gray-600">{product.gallery}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Contact Gallery</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* About the Work Section */}
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-serif mb-6">About the work</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-500">Materials</span>
                  <p>{product.medium}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Size</span>
                  <p>{product.dimensions}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Rarity</span>
                  <p>{product.uniqueWork ? "Unique" : product.edition}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Category</span>
                  <p>{product.category}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Signature</span>
                  <p>{product.signature}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Certificate of authenticity</span>
                  <p>Included (issued by gallery)</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Frame</span>
                  <p>{product.frame}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Bio Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-lg">{product.artist}</h3>
                    <p className="text-sm text-gray-600">Contemporary Artist</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{product.detailedDescription}</p>

                {/* Exhibition History */}
                <div className="space-y-4">
                  {Array.isArray(product.exhibitions) && product.exhibitions.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-500 mb-2">Recent Exhibitions</h4>
                      <div className="text-sm space-y-1">
                        {product.exhibitions.map((exhibition: string, index: number) => (
                          <p key={index}>{exhibition}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.provenance && (
                    <div>
                      <h4 className="font-medium text-gray-500 mb-2">Provenance</h4>
                      <p className="text-sm">{product.provenance}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
