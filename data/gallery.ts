export interface Artwork {
  id: string
  title: string
  category: string
  year: string
  description: string
  image: string
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Urban Reflections",
    category: "Digital",
    year: "2024",
    description:
      "A digital exploration of city life through abstract forms and vibrant colors, capturing the energy and movement of urban environments.",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    id: "2",
    title: "Nature's Symphony",
    category: "Paintings",
    year: "2024",
    description:
      "An acrylic painting that celebrates the harmony found in natural landscapes, using vibrant colors to capture the essence of wilderness.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: "3",
    title: "Abstract Emotions",
    category: "Mixed Media",
    year: "2024",
    description:
      "A mixed-media piece combining traditional painting with digital elements, representing the complexity of human emotions.",
    image: "/placeholder.svg?height=550&width=400",
  },
  {
    id: "4",
    title: "Charcoal Studies",
    category: "Sketches",
    year: "2023",
    description:
      "A detailed charcoal study focusing on light and shadow, exploring the interplay between form and negative space.",
    image: "/placeholder.svg?height=700&width=400",
  },
  {
    id: "5",
    title: "Digital Dreams",
    category: "Digital",
    year: "2023",
    description:
      "A surreal digital composition that blurs the line between reality and imagination, created using advanced digital painting techniques.",
    image: "/placeholder.svg?height=480&width=400",
  },
  {
    id: "6",
    title: "Watercolor Landscapes",
    category: "Paintings",
    year: "2023",
    description:
      "A series of watercolor paintings inspired by countryside landscapes, rendered with impressionistic brushwork and soft color palettes.",
    image: "/placeholder.svg?height=520&width=400",
  },
]
