import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { HeroSection } from "@/components/homepage/hero"
import { FeaturedSection } from "@/components/homepage/featured"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

{/* Featured Work Preview */}
<FeaturedSection />


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
                src="/pageabout.png"
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
