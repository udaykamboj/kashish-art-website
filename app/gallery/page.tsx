"use client"

import { useState } from "react"
import Image from "next/image"
import { artworks } from "@/data/gallery"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const categories = ["All", "Digital", "Paintings", "Sketches", "Mixed Media"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArtworks =
    selectedCategory === "All" ? artworks : artworks.filter((art) => art.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-serif">Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A collection of my artistic journey spanning various mediums and explorations of form, color, and meaning.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3 xl:columns-4">
          {filteredArtworks.map((art) => (
            <Dialog key={art.id}>
              <div className="mb-8 break-inside-avoid">
                <DialogTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="mb-4 relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                      <Image
                        src={art.image || "/placeholder.svg"}
                        alt={art.title}
                        width={400}
                        height={500}
                        className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </DialogTrigger>

                {/* Card footer */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold">{art.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{art.category}</span>
                    <span>•</span>
                    <span>{art.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{art.description}</p>
                </div>
              </div>

              {/* Dialog content matching the design */}
              <DialogContent className="max-w-4xl w-[90vw] p-0 gap-0">
                <div className="grid md:grid-cols-2 min-h-[500px]">
                  {/* Left side - Image */}
                  <div className="bg-gray-100 flex items-center justify-center p-8">
                    <Image
                      src={art.image || "/placeholder.svg"}
                      alt={art.title}
                      width={400}
                      height={500}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Right side - Details */}
                  <div className="p-8 flex flex-col justify-center space-y-6">
                    {/* Title */}
                    <h2 className="text-3xl font-serif font-bold text-gray-900">{art.title}</h2>

                    {/* Details */}
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">Medium: </span>
                        <span className="text-gray-600">{art.category}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Year: </span>
                        <span className="text-gray-600">{art.year}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Dimensions: </span>
                        <span className="text-gray-600">24" x 36"</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">{art.description}</p>

                    {/* Button */}
                    <Button
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-md font-medium"
                      asChild
                    >
                      <a href="/consulting">Inquire About This Piece</a>
                    </Button>
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
