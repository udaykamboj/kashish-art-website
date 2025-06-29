import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative">
            {/* Main Typography Layout */}
            <div className="space-y-4">
              <div className="flex items-center gap-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight">CREATIVE</h1>
                <div className="relative w-32 h-20 md:w-48 md:h-32 lg:w-64 lg:h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Creative artwork"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight">STUDENT</h1>

              <div className="flex items-center gap-8">
                <div className="relative w-32 h-20 md:w-48 md:h-32 lg:w-64 lg:h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Design artwork"
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight">LEADER</h1>
              </div>
            </div>

            {/* Description Text */}
            <div className="absolute top-0 right-0 max-w-xs">
              <p className="text-sm uppercase tracking-wide leading-relaxed">
                KASHISH IS A PASSIONATE STUDENT WITH A STRONG BACKGROUND IN ARCHITECTURE, DESIGN, LEADERSHIP, AND
                COMMUNITY SERVICE
              </p>
              <div className="mt-6 inline-block border border-black rounded-full px-4 py-2">
                <span className="text-sm font-medium">AND</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href="/gallery">
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/experience">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-0 right-0">
              <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center">
                <span className="text-xs font-medium transform -rotate-90">SCROLL TO EXPLORE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Featured Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A curated selection of my latest pieces, from award-winning art to architectural designs and community
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Federal Duck Stamp Winner", desc: "1st Place National Contest, 2024" },
              { title: "Architectural Design", desc: "UCLA AUD Summer Program, 2024" },
              { title: "Community Art Project", desc: "Art Connection Unity Project, 2024" },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Work With Me</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Whether you're looking for custom artwork, tutoring services, or collaborative projects, I bring
                passion, creativity, and dedication to every endeavor.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span>Custom Art Commissions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span>Math & English Tutoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span>Art & Design Workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span>Community Art Projects</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/consulting">Place an Order</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/shop">Browse Shop</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Kashish at work"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
