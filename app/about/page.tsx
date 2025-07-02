import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Award, Users, Palette, GraduationCap, Heart } from "lucide-react"

const timeline = [
  {
    year: "2025",
    title: "ACE Mentor Program - Seattle",
    description: "Currently participating in architecture, construction, and engineering mentorship program",
  },
  {
    year: "2024",
    title: "Founded KashishSethArts",
    description: "Launched online art store and creative platform at kashishseth.art",
  },
  {
    year: "2024",
    title: "UCLA AUD Summer Program",
    description: "Completed intensive Architecture and Urban Design program",
  },
  {
    year: "2024",
    title: "National Art Contest Winner",
    description: "1st Place in National Federal Duck Stamp Art Contest",
  },
  {
    year: "2023",
    title: "Gold PVSA Recipient",
    description: "Recognized for outstanding community service contributions",
  },
  {
    year: "2021",
    title: "Teaching Journey Begins",
    description: "Started as Assistant Teacher at Wisdom Seedlings, working with young children",
  },
]

const values = [
  {
    icon: Palette,
    title: "Creative Expression",
    description: "Art is a universal language that transcends boundaries and connects hearts",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Using creativity to serve others and make a positive difference in the world",
  },
  {
    icon: GraduationCap,
    title: "Lifelong Learning",
    description: "Continuously growing through education, mentorship, and new experiences",
  },
  {
    icon: Heart,
    title: "Authentic Leadership",
    description: "Leading with empathy, integrity, and a genuine desire to uplift others",
  },
]

const stats = [
  { number: "100+", label: "Artworks Created" },
  { number: "7+", label: "National Awards" },
  { number: "500+", label: "Community Service Hours" },
  { number: "3.8", label: "GPA" },
]

const activities = [
  "Varsity High School Gymnastics",
  "Varsity High School Badminton - Co-Captain",
  "National Honor Society Member (2023 - Present)",
  "NeuroPath Board Member (Communication Director)",
  "FBLA, HOSA, TSA State Qualifier (2024-2025)",
  "Teen Arts Council Member - Graphic Designer",
  "Fashion Commercial Modeling",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl font-serif mb-6">My Story</h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              I'm Kashish Seth, a passionate high school student with a strong background in architecture, design,
              leadership, and community service. Currently a senior at North Creek High School in Bothell, WA, I
              demonstrate a strong work ethic and creative ability in everything I pursue.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey spans from teaching young children to winning national art competitions, from leading varsity
              sports teams to founding my own art business. I'm driven by a desire to expand my knowledge in
              architectural design, creative problem-solving, and making a positive impact in my community.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="secondary">Student Leader</Badge>
              <Badge variant="secondary">Artist & Designer</Badge>
              <Badge variant="secondary">Community Volunteer</Badge>
              <Badge variant="secondary">Entrepreneur</Badge>
              <Badge variant="secondary">Educator</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="mailto:kashish5278@gmail.com">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/experience">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Kashish Seth portrait"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <Quote className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm font-medium italic">
                "Seeking opportunities to expand knowledge in architectural design and creative problem-solving."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <div className="text-4xl font-bold font-serif mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
              {/* Add vertical separator line except for the last item */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-center mb-12">My Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                  <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-center mb-12">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-center mb-12">School & Extracurricular Activities</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="pt-4">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <Quote className="h-12 w-12 mx-auto mb-6 text-gray-400" />
          <blockquote className="text-2xl font-serif mb-6 max-w-3xl mx-auto leading-relaxed">
            "I am motivated and passionate about using my skills in architecture, design, and leadership to create
            meaningful impact in my community while continuously learning and growing as both an artist and a leader."
          </blockquote>
          <p className="text-gray-600 font-medium">— Kashish Seth, Student, Artist & Community Leader</p>
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 text-center">
              <h3 className="text-2xl font-serif mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                I'm always excited to discuss new opportunities, collaborations, or simply connect with fellow creatives
                and leaders.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">kashish5278@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Bothell, WA</p>
                </div>
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-gray-600">kashishseth.art</p>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="mailto:kashish5278@gmail.com">Send Message</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
