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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Calendar, Clock, CheckCircle, Mail, MapPin, Send, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { CAL_ACCOUNT_LINK, WEBSITE_EMAIL } from "@/config/config"

const services = [
  {
    title: "Custom Art Commissions",
    description: "Personalized artwork created specifically for your space, vision, and style preferences.",
    duration: "4-8 weeks",
    startingPrice: "$50+",
    features: ["Initial consultation", "Concept sketches", "Progress updates", "Final artwork delivery"],
  },
  {
    title: "Creative Direction",
    description: "Strategic creative guidance for brands, campaigns, and artistic projects.",
    duration: "2-4 weeks",
    startingPrice: "$40/hour",
    features: ["Brand analysis", "Creative strategy", "Visual concept development", "Implementation guidance"],
  },
  {
    title: "Art Workshops",
    description: "Private or group workshops covering various artistic techniques and creative processes.",
    duration: "2-8 hours",
    startingPrice: "$80/session",
    features: ["Customized curriculum", "All materials included", "Take-home artwork", "Follow-up resources"],
  },
  {
    title: "Portfolio Review",
    description: "Professional feedback and guidance for emerging artists and creative professionals.",
    duration: "1-2 hours",
    startingPrice: "$40",
    features: ["Detailed portfolio analysis", "Career guidance", "Market insights", "Action plan development"],
  },
]

const faqs = [
  {
    question: "Do you accept custom commissions?",
    answer:
      "Yes! I love creating custom artwork. Commission timelines typically range from 4-8 weeks depending on the complexity and size. I work closely with clients throughout the process, providing concept sketches and progress updates to ensure the final piece exceeds expectations.",
  },
  {
    question: "What are your tutoring rates?",
    answer:
      "My tutoring rates vary based on subject and session length. Individual sessions start at $50/hour for high school subjects and $75/hour for college-level courses. Group sessions and package deals are available at discounted rates. Please contact me for current rates and availability.",
  },
  {
    question: "Do you offer art workshops?",
    answer:
      "Yes, I offer both private and group workshops covering various artistic techniques including painting, drawing, digital art, and mixed media. Workshops can be customized to your skill level and interests. Private workshops start at $200/session, while group workshops are $50/person with a minimum of 4 participants.",
  },
  {
    question: "How do you handle project revisions?",
    answer:
      "I include up to 3 rounds of revisions in all commission projects to ensure you're completely satisfied with the final result. Additional revisions can be accommodated for a small fee of $25-50 depending on the scope of changes requested.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "I work with clients worldwide. Digital consultations and remote workshops are available via video call. For physical artwork commissions, I can arrange secure international shipping. Digital artwork can be delivered electronically in high-resolution formats.",
  },
  {
    question: "What's your typical response time?",
    answer:
      "I typically respond to all inquiries within 24 hours during business days. For urgent projects or time-sensitive questions, please mention this in your message and I'll prioritize your inquiry.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, for larger projects over $1,000, I offer flexible payment plans. Typically, this involves a 50% deposit to begin work, 25% at the halfway point, and 25% upon completion. Custom payment schedules can be arranged based on your needs.",
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
    inquiryType: "",
    subject: "",
  })

  const [openFaqs, setOpenFaqs] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Work With Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Let's collaborate to bring your creative vision to life. From custom artwork to creative consulting, I'm
            here to help you achieve your artistic goals.
          </p>
        </div>

        {/* Services Section - Now First */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center">Services Offered</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
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
          {/* Cal.com Integration */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </CardTitle>
              <CardDescription className="text-center">
                Book a free 30-minute consultation to discuss your project
              </CardDescription>
            </CardHeader>
<CardContent>
  <div className="text-center">
    <Button asChild size="lg">
      <a 
        href={CAL_ACCOUNT_LINK}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center"
      >
        <Calendar className="mr-2 h-4 w-4" />
        Schedule Consultation
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  </div>
</CardContent>

          </Card>
        </div>

        {/* Combined Contact and Project Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question about my artwork, interested in a commission, or want to collaborate? I'd love to hear
                from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">{WEBSITE_EMAIL}</p>
                    <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Bothell, WA</p>
                    <p className="text-sm text-gray-500">Available for local meetings and studio visits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown FAQ Section */}
            <div>
              <h3 className="text-xl font-serif mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <Collapsible key={index} open={openFaqs.includes(index)} onOpenChange={() => toggleFaq(index)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-4 h-auto text-left hover:bg-gray-50 border border-gray-200 rounded-lg"
                      >
                        <span className="font-medium text-sm">{faq.question}</span>
                        {openFaqs.includes(index) ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>

          {/* Combined Contact/Project Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Start Your Project</h2>

            <Card>
              <CardHeader>
                <CardTitle>Project Inquiry & Contact</CardTitle>
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
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commission">Custom Commission</SelectItem>
                        <SelectItem value="consulting">Creative Direction</SelectItem>
                        <SelectItem value="workshop">Art Workshop</SelectItem>
                        <SelectItem value="review">Portfolio Review</SelectItem>
                        <SelectItem value="tutoring">Tutoring Services</SelectItem>
                        <SelectItem value="purchase">Artwork Purchase</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your project or inquiry"
                      required
                    />
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
                    <Label htmlFor="message">Project Details & Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your vision, goals, specific requirements, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Inquiry
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
