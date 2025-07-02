import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { ThemeProvider } from "./components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Kashish | Art. Ideas. Impact.",
    template: "%s | Kashish",
  },
  description:
    "Contemporary artist and creative director specializing in mixed media, digital art, and creative consulting. Explore original artworks, prints, and creative services by Kashish.",
  keywords: [
    "artist",
    "contemporary art",
    "paintings",
    "digital art",
    "creative director",
    "art consulting",
    "custom artwork",
  ],
  authors: [{ name: "Kashish" }],
  creator: "Kashish",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kashishseth.art",
    title: "Kashish | Contemporary Art & Creative Direction",
    description:
      "Contemporary artist and creative director specializing in mixed media, digital art, and creative consulting.",
    siteName: "Kashish",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashish | Contemporary Art & Creative Direction",
    description:
      "Contemporary artist and creative director specializing in mixed media, digital art, and creative consulting.",
    creator: "@artisthandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col pt-4">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
