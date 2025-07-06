import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const FeaturedSection = () => {
 return (
<section id="featured" className="py-20 px-4">
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
        {
          title: "Federal Duck Stamp Winner",
          desc: "1st Place National Contest, 2024",
          image: "/federalduckstamp.png",
        },
        {
          title: "Architectural Design",
          desc: "UCLA AUD Summer Program, 2024",
          image: "/architecturaldesign.png",
        },
        {
          title: "Community Art Project",
          desc: "Art Connection Unity Project, 2024",
          image: "/communityart.png",
        },
      ].map((item, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-4 w-[300px] h-[200px] mx-auto">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-serif mb-2 text-center">{item.title}</h3>
          <p className="text-gray-600 text-center">{item.desc}</p>
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
);
};