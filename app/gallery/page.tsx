"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const categories = ["All", "Digital", "Paintings", "Sketches", "Mixed Media"]

const artworks = [
  {
    id: 1,
    title: "Urban Reflections",
    category: "Digital",
    year: "2024",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "A digital exploration of city life through abstract forms and vibrant colors, capturing the energy and movement of urban environments.",
  },
  {
    id: 2,
    title: "Nature's Symphony",
    category: "Paintings",
    year: "2024",
    image: "/placeholder.svg?height=500&width=400",
    description:
      "An acrylic painting that celebrates the harmony found in natural landscapes, using organic shapes and earth tones to evoke tranquility.",
  },
  {
    id: 3,
    title: "Portrait Study #3",
    category: "Sketches",
    year: "2023",
    image: "/placeholder.svg?height=600&width=400",
    description:
      "A detailed charcoal study focusing on human expression and emotion, part of an ongoing series exploring portraiture.",
  },
  {
    id: 4,
    title: "Abstract Emotions",
    category: "Mixed Media",
    year: "2024",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A mixed media piece combining traditional painting with digital elements, representing the complexity of human emotions.",
  },
  {
    id: 5,
    title: "Digital Dreams",
    category: "Digital",
    year: "2023",
    image: "/placeholder.svg?height=500&width=300",
    description:
      "A surreal digital composition that blurs the line between reality and imagination, exploring themes of technology and consciousness.",
  },
  {
    id: 6,
    title: "Landscape Memory",
    category: "Paintings",
    year: "2024",
    image: "/placeholder.svg?height=400&width=500",
    description:
      "An oil painting inspired by childhood memories of countryside landscapes, rendered with impressionistic brushwork and warm colors.",
  },
  {
    id: 7,
    title: "Quick Study",
    category: "Sketches",
    year: "2024",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "A spontaneous ink sketch capturing a moment in time, demonstrating the power of immediate artistic response.",
  },
  {
    id: 8,
    title: "Textured Reality",
    category: "Mixed Media",
    year: "2023",
    image: "/placeholder.svg?height=600&width=400",
    description:
      "An experimental piece combining various materials and techniques to create rich textures that invite tactile exploration.",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArtworks =
    selectedCategory === "All" ? artworks : artworks.filter((artwork) => artwork.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of my artistic journey, spanning various mediums and explorations of form, color, and meaning.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredArtworks.map((artwork) => (
            <Dialog key={artwork.id}>
              <div className="break-inside-avoid mb-8">
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-4">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        width={400}
                        height={500}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </DialogTrigger>

                {/* Title and Details Below Image */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold">{artwork.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{artwork.category}</span>
                    <span>•</span>
                    <span>{artwork.year}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{artwork.description}</p>
                </div>
              </div>

              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="space-y-4">
                    <h2 className="text-3xl font-serif">{artwork.title}</h2>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>Medium:</strong> {artwork.category}
                      </p>
                      <p>
                        <strong>Year:</strong> {artwork.year}
                      </p>
                      <p>
                        <strong>Dimensions:</strong> 24" x 36"
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
                    <div className="pt-4">
                      <Button className="w-full">Inquire About This Piece</Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}
