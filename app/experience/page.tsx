import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Assistant Teacher",
    company: "BestIn Classes Education Center",
    period: "06/2025 – Present",
    description: "Math and English Teacher providing personalized instruction and support to students.",
    skills: ["Teaching", "Mathematics", "English", "Student Mentoring"],
    type: "work",
  },
  {
    title: "Assistant Teacher",
    company: "Wisdom Seedlings",
    period: "06/2021 – 06/2023",
    location: "Bothell, WA",
    description:
      "Taught Art and Math basic skills to children ages 1-5 years, developing age-appropriate curriculum and engaging learning activities.",
    skills: ["Early Childhood Education", "Art Instruction", "Mathematics", "Curriculum Development"],
    type: "work",
  },
  {
    title: "Design Lyric Architecture Internship",
    company: "with Sanjeev Sharma",
    period: "2024",
    description:
      "Gained hands-on experience in architectural design and drafting, working on real projects and learning industry-standard practices.",
    skills: ["Architectural Design", "Drafting", "Project Management", "Client Relations"],
    type: "internship",
  },
  {
    title: "UCLA AUD Summer Program",
    company: "UCLA Architecture and Urban Design",
    period: "06/2024 – 07/2024",
    description:
      "Intensive summer program focusing on architectural design principles, urban planning, and sustainable design practices.",
    skills: ["Architectural Design", "Urban Planning", "Sustainable Design", "3D Modeling"],
    type: "education",
  },
  {
    title: "NOP AII Art Internship",
    company: "Collaboration with Expressions Arts",
    period: "2024",
    description:
      "Collaborative art internship focusing on contemporary art practices and community engagement through artistic expression.",
    skills: ["Contemporary Art", "Community Engagement", "Art Direction", "Collaboration"],
    type: "internship",
  },
]

const leadership = [
  {
    title: "Co-Captain",
    organization: "Varsity High School Badminton Team",
    description: "Led team strategy, coordinated practice sessions, and mentored junior players.",
  },
  {
    title: "Communications Director",
    organization: "NeuroPath Board",
    description: "Managed all communications and outreach for neuroscience education initiatives.",
  },
  {
    title: "Director/Producer",
    organization: "NOP AII CORE Sets Team",
    description: "Oversaw production and creative direction for art installation projects.",
  },
  {
    title: "ASB Grade Representative",
    organization: "North Creek High School",
    description: "Represented student body interests and coordinated class activities and events.",
  },
  {
    title: "Teen Arts Council Member",
    organization: "Graphic Designer",
    description: "Created visual designs and promotional materials for community arts programs.",
  },
]

const achievements = [
  {
    title: "1st Place - National Federal Duck Stamp Art Contest",
    year: "2024",
    type: "National Competition",
  },
  {
    title: "2nd Place - National 'Anything India' Art Contest",
    year: "2024",
    type: "National Competition",
  },
  {
    title: "2nd Place - International 'Still Life' Art Contest",
    year: "2024",
    type: "International Competition",
  },
  {
    title: "Sheroes National Art Contest - Honorable Mention",
    year: "2024",
    type: "National Recognition",
  },
  {
    title: "GEMS Diamond Medalist",
    year: "2024",
    type: "STEM Achievement",
  },
  {
    title: "Gold PVSA Recipient",
    year: "2023",
    type: "Community Service",
  },
  {
    title: "Silver PVSA Recipient",
    year: "2024",
    type: "Community Service",
  },
]

const projects = [
  {
    title: "KashishSethArts - Online Art Store",
    type: "Entrepreneurship",
    year: "2024 - Present",
    description:
      "Founded and developed comprehensive online art platform featuring original artworks, prints, and creative services.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://kashishseth.art",
    status: "In Progress",
  },
  {
    title: "Art 101 - Non-Profit Art Academy",
    type: "Passion Project",
    year: "2024 - Present",
    description: "Founded non-profit organization providing accessible art education to underserved communities.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    status: "Active",
  },
  {
    title: "Art Connection Unity Project",
    type: "Community Service",
    year: "2024",
    description: "Designed coloring books donated to domestic violence shelters, providing therapeutic art activities.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    status: "Completed",
  },
  {
    title: "Fashion Commercial Modeling",
    type: "Creative Work",
    year: "2023 - Present",
    description:
      "Professional modeling work with Rasanari, AmbizzFlair, Ensemble, Midas, and Blueprint Visions Agency.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    status: "Ongoing",
  },
]

const skills = [
  "Architectural Design & Drafting",
  "Rhinoceros/SketchUp/FloorPlanner",
  "ProCreate/Canva/Adobe Suite",
  "Advanced Art & Graphic Design",
  "Leadership & Organization",
  "Team Collaboration",
  "Teaching & Mentoring",
  "English, Hindi, Advanced Spanish",
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Experience & Achievements</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my professional experience, leadership roles, and creative achievements in art,
            architecture, and education.
          </p>
        </div>

        {/* Education Header */}
        <div className="mb-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center gap-2 mb-2">
                <GraduationCap className="h-6 w-6" />
                <CardTitle className="text-2xl">Education</CardTitle>
              </div>
              <CardDescription className="text-lg">
                <strong>North Creek High School, Bothell WA</strong>
              </CardDescription>
              <CardDescription>Class of 2026 • 3.8 Unweighted GPA</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif flex items-center gap-2">
                <Briefcase className="h-8 w-8" />
                Professional Experience
              </h2>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-black">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700">{exp.company}</CardDescription>
                        {exp.location && <CardDescription className="text-sm">{exp.location}</CardDescription>}
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{exp.period}</Badge>
                        <Badge variant="secondary" className="ml-2 capitalize">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Leadership Roles */}
            <div className="mt-12">
              <h3 className="text-2xl font-serif mb-6">Leadership Roles</h3>
              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <Card key={index}>
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-lg">{role.title}</h4>
                      <p className="text-gray-600 font-medium">{role.organization}</p>
                      <p className="text-gray-700 text-sm mt-2">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Projects & Achievements Section */}
          <div>
            <h2 className="text-3xl font-serif mb-8 flex items-center gap-2">
              <Award className="h-8 w-8" />
              Projects & Achievements
            </h2>

            {/* Featured Projects */}
            <div className="space-y-6 mb-12">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col">
                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        className="absolute top-2 right-2"
                        variant={project.status === "Completed" ? "default" : "secondary"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription>
                            {project.type} • {project.year}
                          </CardDescription>
                        </div>
                        {project.link !== "#" && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Awards & Recognition */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-6">Awards & Recognition</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-gray-600 text-sm">{achievement.type}</p>
                        </div>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>Interested in collaboration or have questions about my work?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">kashish5278@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(425) 236-2930</p>
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
              <div className="pt-4">
                <Button asChild size="lg">
                  <a href="mailto:kashish5278@gmail.com">Contact Me</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
