import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Award, GraduationCap, Briefcase, Link } from "lucide-react"
import experienceData from "@/data/experience.json"

import { WEBSITE_EMAIL, WEBSITE_URL } from "@/config/config"

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
                <strong>{experienceData.education.school}</strong>
              </CardDescription>
              <CardDescription>
                {experienceData.education.class} • {experienceData.education.gpa}
              </CardDescription>
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
                <Link href={`${WEBSITE_URL}/cv.pdf`} target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {experienceData.experiences.map((exp, index) => (
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
                {experienceData.leadership.map((role, index) => (
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
              {experienceData.projects.map((project, index) => (
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
                {experienceData.achievements.map((achievement, index) => (
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
                {experienceData.skills.map((skill) => (
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
                  <p className="text-gray-600">{WEBSITE_EMAIL}</p>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Bothell, WA</p>
                </div>
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-gray-600">{WEBSITE_URL}</p>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild size="lg">
                  <a href={`mailto:${WEBSITE_EMAIL}`}>Contact Me</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
