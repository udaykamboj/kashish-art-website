"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, Palette, Sparkles, Heart } from "lucide-react"

// Mock products data with placeholder images
const mockProducts = [
  {
    id: "1",
    title: "Abstract Harmony",
    artist: "Kashish",
    category: "Original Paintings",
    style: "Abstract",
    size: "Medium",
    price: 1200,
    priceRange: "$1,200",
    medium: "Acrylic on canvas",
    year: "2024",
    dimensions: '24" x 36"',
    gallery: "Kashish Gallery",
    location: "New York",
    status: "available",
    aspectRatio: "3/4",
    images: ["/art/1.png"],
  },
  {
    id: "2",
    title: "Digital Dreams",
    artist: "Kashish",
    category: "Digital Art",
    style: "Contemporary",
    size: "Small",
    price: 450,
    priceRange: "$450",
    medium: "Digital print on archival paper",
    year: "2024",
    dimensions: '16" x 24"',
    gallery: "Kashish Digital Art Space",
    location: "San Francisco",
    status: "available",
    aspectRatio: "2/3",
    images: ["/art/2.png"],
  },
  {
    id: "3",
    title: "Urban Reflections",
    artist: "Kashish",
    category: "Photography",
    style: "Photorealism",
    size: "Small",
    price: 800,
    priceRange: "$800",
    medium: "Archival pigment print",
    year: "2023",
    dimensions: '20" x 12"',
    gallery: "Kashish Photo Collective",
    location: "Los Angeles",
    status: "available",
    aspectRatio: "5/3",
    images: ["/art/3.png"],
  },
  {
    id: "4",
    title: "Metamorphosis Series #1",
    artist: "Kashish",
    category: "Mixed Media",
    style: "Abstract",
    size: "Large",
    price: 2800,
    priceRange: "$2,800",
    medium: "Mixed media on canvas",
    year: "2024",
    dimensions: '36" x 60"',
    gallery: "Kashish Contemporary Arts",
    location: "Chicago",
    status: "available",
    aspectRatio: "3/5",
    images: ["/art/4.png"],
  },
  {
    id: "5",
    title: "Minimalist Study",
    artist: "Kashish",
    category: "Drawing",
    style: "Minimalism",
    size: "Small",
    price: 350,
    priceRange: "$350",
    medium: "Charcoal on paper",
    year: "2024",
    dimensions: '12" x 12"',
    gallery: "Kashish Sketch Gallery",
    location: "Portland",
    status: "available",
    aspectRatio: "1/1",
    images: ["/art/5.png"],
  },
  {
    id: "6",
    title: "Color Field Exploration",
    artist: "Kashish",
    category: "Painting",
    style: "Abstract",
    size: "Large",
    price: 1800,
    priceRange: "$1,800",
    medium: "Oil on canvas",
    year: "2023",
    dimensions: '48" x 28"',
    gallery: "Kashish Abstract Space",
    location: "Miami",
    status: "sold",
    aspectRatio: "12/7",
    images: ["/art/6.png"],
  },
  {
    id: "7",
    title: "Ethereal Landscapes",
    artist: "Kashish",
    category: "Painting",
    style: "Contemporary",
    size: "Medium",
    price: 1500,
    priceRange: "$1,500",
    medium: "Oil on canvas",
    year: "2024",
    dimensions: '30" x 20"',
    gallery: "Kashish Nature Gallery",
    location: "Denver",
    status: "available",
    aspectRatio: "3/2",
    images: ["/art/7.png"],
  },
  {
    id: "8",
    title: "Geometric Harmony",
    artist: "Kashish",
    category: "Digital Art",
    style: "Geometric",
    size: "Medium",
    price: 650,
    priceRange: "$650",
    medium: "Digital print on metal",
    year: "2024",
    dimensions: '20" x 20"',
    gallery: "Kashish Digital Gallery",
    location: "Austin",
    status: "available",
    aspectRatio: "1/1",
    images: ["/art/8.png"],
  },
  {
    id: "9",
    title: "Fragmented Light",
    artist: "Kashish",
    category: "Mixed Media",
    style: "Abstract",
    size: "Medium",
    price: 950,
    priceRange: "$950",
    medium: "Mixed media on wood panel",
    year: "2023",
    dimensions: '24" x 18"',
    gallery: "Kashish Studio",
    location: "Seattle",
    status: "available",
    aspectRatio: "4/3",
    images: ["/art/9.png"],
  },
  {
    id: "10",
    title: "Virtual Stillness",
    artist: "Kashish",
    category: "Digital Art",
    style: "Contemporary",
    size: "Small",
    price: 490,
    priceRange: "$490",
    medium: "Digital print",
    year: "2024",
    dimensions: '21" x 12"',
    gallery: "Kashish Online",
    location: "Remote",
    status: "available",
    aspectRatio: "16/9",
    images: ["/art/10.png"],
  },
  {
    id: "11",
    title: "Twilight Bloom",
    artist: "Kashish",
    category: "Painting",
    style: "Impressionism",
    size: "Large",
    price: 1600,
    priceRange: "$1,600",
    medium: "Oil on canvas",
    year: "2023",
    dimensions: '30" x 40"',
    gallery: "Kashish Nature Gallery",
    location: "Santa Fe",
    status: "available",
    aspectRatio: "3/4",
    images: ["/art/11.png"],
  },
  {
    id: "12",
    title: "Static Pulse",
    artist: "Kashish",
    category: "Digital Art",
    style: "Futuristic",
    size: "Medium",
    price: 500,
    priceRange: "$500",
    medium: "Digital print on aluminum",
    year: "2024",
    dimensions: '24" x 24"',
    gallery: "Kashish Digital Space",
    location: "Online",
    status: "available",
    aspectRatio: "1/1",
    images: ["/art/12.png"],
  }
];

const categories = ["All", "Original Paintings", "Digital Art", "Photography", "Mixed Media", "Drawing"]
const styles = ["Abstract", "Contemporary", "Minimalism", "Photorealism", "Pop Art", "Expressionism", "Geometric"]
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

  const filteredProducts = mockProducts.filter((product) => {
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
        {/* Artistic Header Section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-black">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute bottom-10 left-1/3 w-40 h-40 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-1/4 w-28 h-28 border border-white rounded-full"></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-8 right-8 text-white opacity-20">
            <Palette className="w-12 h-12" />
          </div>
          <div className="absolute bottom-8 left-8 text-white opacity-20">
            <Sparkles className="w-10 h-10" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-white opacity-15">
            <Heart className="w-8 h-8" />
          </div>

          <div className="relative z-10 px-8 py-16 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Collect Art & Design Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Discover and purchase original artworks, limited editions, and prints from contemporary artists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">New arrivals weekly</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm">Worldwide shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-sm">Authenticity guaranteed</span>
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search by artist, gallery, style, theme, tag, etc."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-black transition-colors"
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
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4 text-gray-800">Price Range</h3>
              <div className="space-y-4">
                <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="w-full" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Medium */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4 text-gray-800">Medium</h3>
              <div className="space-y-3">
                {categories.slice(1).map((category) => (
                  <div key={category} className="flex items-center space-x-3">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4 text-gray-800">Style</h3>
              <div className="space-y-3">
                {styles.map((style) => (
                  <div key={style} className="flex items-center space-x-3">
                    <Checkbox
                      id={style}
                      checked={selectedStyles.includes(style)}
                      onCheckedChange={(checked) => handleStyleChange(style, checked as boolean)}
                    />
                    <label htmlFor={style} className="text-sm text-gray-700 cursor-pointer">
                      {style}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4 text-gray-800">Size</h3>
              <div className="space-y-3">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-3">
                    <Checkbox
                      id={size}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                    />
                    <label htmlFor={size} className="text-sm text-gray-700 cursor-pointer">
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
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? "work" : "works"}
              </p>
              <div className="text-sm text-gray-500">Curated collection of contemporary art</div>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/shop/${product.id}`} className="block break-inside-avoid mb-6">
                  <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative overflow-hidden">
                      <div style={{ aspectRatio: product.aspectRatio }}>
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {product.status === "sold" && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                          Sold
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* Artwork Details */}
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{product.artist}</p>
                      <p className="text-gray-500 text-sm">
                        {product.medium}, {product.year}
                      </p>
                      <p className="text-gray-500 text-sm">{product.dimensions}</p>
                      <p className="text-gray-500 text-sm">
                        {product.gallery}, {product.location}
                      </p>
                      <p className="font-bold text-lg text-gray-900 pt-2">{product.priceRange}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No artworks found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search criteria or browse our full collection</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedStyles([])
                    setSelectedSizes([])
                    setPriceRange([0, 5000])
                    setSearchTerm("")
                  }}
                  className="mr-4"
                >
                  Clear all filters
                </Button>
                <Button asChild>
                  <Link href="/gallery">Browse Gallery</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
