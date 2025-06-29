"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Custom Art Commissions",
    description: "Personalized artwork created specifically for your space, vision, and style preferences.",
    duration: "4-8 weeks",
    startingPrice: "$800",
    features: ["Initial consultation", "Concept sketches", "Progress updates", "Final artwork delivery"],
  },
  {
    title: "Creative Direction",
    description: "Strategic creative guidance for brands, campaigns, and artistic projects.",
    duration: "2-4 weeks",
    startingPrice: "$150/hour",
    features: ["Brand analysis", "Creative strategy", "Visual concept development", "Implementation guidance"],
  },
  {
    title: "Art Workshops",
    description: "Private or group workshops covering various artistic techniques and creative processes.",
    duration: "2-8 hours",
    startingPrice: "$200/session",
    features: ["Customized curriculum", "All materials included", "Take-home artwork", "Follow-up resources"],
  },
  {
    title: "Portfolio Review",
    description: "Professional feedback and guidance for emerging artists and creative professionals.",
    duration: "1-2 hours",
    startingPrice: "$100",
    features: ["Detailed portfolio analysis", "Career guidance", "Market insights", "Action plan development"],
  },
]

export default function ConsultingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Work With Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Let's collaborate to bring your creative vision to life. From custom artwork to creative consulting, I'm
            here to help you achieve your artistic goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services Section */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Services Offered</h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-black hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline">{service.startingPrice}</Badge>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {service.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Calendar Integration Placeholder */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </CardTitle>
                <CardDescription>Book a free 30-minute consultation to discuss your project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <p className="text-gray-600 mb-4">Calendar integration would go here</p>
                  <Button>
                    Open Calendar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Start Your Project</h2>

            <Card>
              <CardHeader>
                <CardTitle>Project Inquiry</CardTitle>
                <CardDescription>Tell me about your vision and I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commission">Custom Art Commission</SelectItem>
                        <SelectItem value="consulting">Creative Direction</SelectItem>
                        <SelectItem value="workshop">Art Workshop</SelectItem>
                        <SelectItem value="review">Portfolio Review</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="over-5000">Over $5,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your vision, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Project Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
