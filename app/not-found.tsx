"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Palette, Search, Sparkles } from "lucide-react"

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const artPieces = [
    { name: "Abstract Harmony", link: "/shop/1" },
    { name: "Digital Dreams", link: "/shop/2" },
    { name: "Urban Reflections", link: "/shop/3" },
    { name: "Metamorphosis Series", link: "/shop/4" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-100 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-yellow-100 rounded-full opacity-20 animate-bounce delay-500"></div>

        {/* Floating Art Brushes */}
        <div className="absolute top-1/4 left-1/3 transform rotate-45 opacity-10">
          <Palette className="w-16 h-16 text-gray-400" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 transform -rotate-12 opacity-10">
          <Sparkles className="w-12 h-12 text-gray-400" />
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: isHovering ? "scale(2)" : "scale(1)",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Large 404 with artistic styling */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-600 to-gray-900 leading-none">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-serif font-bold text-gray-200 -z-10 transform translate-x-2 translate-y-2">
              404
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-serif italic text-gray-600 mb-8 leading-relaxed">
            "Every blank canvas is an opportunity to create something beautiful."
          </blockquote>

          {/* Main Content Card */}
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Oops! This Canvas is Blank</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  It seems like the page you're looking for has wandered off into the creative void. But don't worry –
                  there's plenty of beautiful art waiting to be discovered!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Return Home
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Link href="/gallery">
                    <Palette className="mr-2 h-5 w-5" />
                    Browse Gallery
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Link href="/shop">
                    <Search className="mr-2 h-5 w-5" />
                    Shop Artworks
                  </Link>
                </Button>
              </div>

              {/* Suggested Artworks */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                  While you're here, check out these featured pieces:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {artPieces.map((piece, index) => (
                    <Link
                      key={index}
                      href={piece.link}
                      className="group p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:shadow-md"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="w-full h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded mb-2 group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-200"></div>
                      <p className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                        {piece.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Link */}
              <div className="mt-6 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  Need help finding something specific?{" "}
                  <Link
                    href="/consulting"
                    className="text-black hover:underline font-medium"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Get in touch
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <Button
            variant="ghost"
            className="mt-6 text-gray-600 hover:text-gray-800"
            onClick={() => window.history.back()}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
