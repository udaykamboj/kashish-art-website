"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Filter } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Kashish",
    category: "Painting",
    price: 1200,
    priceRange: "$1,200",
    image: "/placeholder.svg?height=400&width=300",
    aspectRatio: "3/4",
    year: "2024",
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 in",
    gallery: "Kashish Gallery",
    location: "New York",
    status: "available",
    size: "Medium",
    style: "Abstract",
  },
  {
    id: 2,
    title: "Digital Dreams",
    artist: "Kashish",
    category: "Digital Art",
    price: 450,
    priceRange: "$450",
    image: "/placeholder.svg?height=600&width=400",
    aspectRatio: "2/3",
    year: "2024",
    medium: "Digital print on archival paper",
    dimensions: "16 × 24 in",
    gallery: "Kashish Digital Art Space",
    location: "San Francisco",
    status: "available",
    size: "Small",
    style: "Contemporary",
  },
  {
    id: 3,
    title: "Urban Reflections",
    artist: "Kashish",
    category: "Photography",
    price: 800,
    priceRange: "$800",
    image: "/placeholder.svg?height=300&width=500",
    aspectRatio: "5/3",
    year: "2023",
    medium: "Archival pigment print",
    dimensions: "20 × 12 in",
    gallery: "Kashish Photo Collective",
    location: "Los Angeles",
    status: "available",
    size: "Small",
    style: "Photorealism",
  },
  {
    id: 4,
    title: "Metamorphosis Series #1",
    artist: "Kashish",
    category: "Mixed Media",
    price: 2800,
    priceRange: "$2,800",
    image: "/placeholder.svg?height=500&width=300",
    aspectRatio: "3/5",
    year: "2024",
    medium: "Mixed media on canvas",
    dimensions: "36 × 60 in",
    gallery: "Kashish Contemporary Arts",
    location: "Chicago",
    status: "available",
    size: "Large",
    style: "Abstract",
  },
  {
    id: 5,
    title: "Minimalist Study",
    artist: "Kashish",
    category: "Drawing",
    price: 350,
    priceRange: "$350",
    image: "/placeholder.svg?height=400&width=400",
    aspectRatio: "1/1",
    year: "2024",
    medium: "Charcoal on paper",
    dimensions: "12 × 12 in",
    gallery: "Kashish Sketch Gallery",
    location: "Portland",
    status: "available",
    size: "Small",
    style: "Minimalism",
  },
  {
    id: 6,
    title: "Color Field Exploration",
    artist: "Kashish",
    category: "Painting",
    price: 1800,
    priceRange: "$1,800",
    image: "/placeholder.svg?height=350&width=600",
    aspectRatio: "12/7",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "48 × 28 in",
    gallery: "Kashish Abstract Space",
    location: "Miami",
    status: "sold",
    size: "Large",
    style: "Abstract",
  },
]

const categories = ["All", "Painting", "Digital Art", "Photography", "Mixed Media", "Drawing", "Sculpture"]
const styles = ["Abstract", "Contemporary", "Minimalism", "Photorealism", "Pop Art", "Expressionism"]
const sizes = ["Small", "Medium", "Large", "Extra Large"]

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleStyleChange = (style: string, checked: boolean) => {
    if (checked) {
      setSelectedStyles([...selectedStyles, style])
    } else {
      setSelectedStyles(selectedStyles.filter((s) => s !== style))
    }
  }

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size])
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size))
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesStyle = selectedStyles.length === 0 || selectedStyles.includes(product.style)
    const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artist.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesStyle && matchesSize && matchesPrice && matchesSearch
  })

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with Featured Artworks */}
        <h1 className="text-4xl font-serif mb-2">Collect art and design online</h1>
        <p className="text-gray-600 mb-6">
          Discover and purchase original artworks, limited editions, and prints from contemporary artists.
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by artist, gallery, style, theme, tag, etc."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Filter Toggle */}
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="mb-6 lg:hidden">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`w-64 flex-shrink-0 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3">Price</h3>
              <div className="space-y-3">
                <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="w-full" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Medium */}
            <div>
              <h3 className="font-medium mb-3">Medium</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <label htmlFor={category} className="text-sm">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <h3 className="font-medium mb-3">Style</h3>
              <div className="space-y-2">
                {styles.map((style) => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox
                      id={style}
                      checked={selectedStyles.includes(style)}
                      onCheckedChange={(checked) => handleStyleChange(style, checked as boolean)}
                    />
                    <label htmlFor={style} className="text-sm">
                      {style}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-medium mb-3">Size</h3>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                    />
                    <label htmlFor={size} className="text-sm">
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? "work" : "works"}
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/shop/${product.id}`} className="block break-inside-avoid mb-6">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mb-3">
                      <div style={{ aspectRatio: product.aspectRatio }}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      {product.status === "sold" && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                          Sold
                        </div>
                      )}
                    </div>

                    {/* Artwork Details - Formatted like Artsy */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{product.artist}</p>
                      <p className="text-gray-600 text-sm">
                        {product.medium}, {product.year}
                      </p>
                      <p className="text-gray-600 text-sm">{product.dimensions}</p>
                      <p className="text-gray-600 text-sm">
                        {product.gallery}, {product.location}
                      </p>
                      <p className="font-semibold text-base mt-2">{product.priceRange}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No artworks found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedStyles([])
                    setSelectedSizes([])
                    setPriceRange([0, 5000])
                    setSearchTerm("")
                  }}
                  className="mt-4"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
