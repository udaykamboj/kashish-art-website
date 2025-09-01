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
import { Mail, MapPin, Send, ChevronDown, ChevronUp } from "lucide-react"
import { siteConfig } from "@/config/site"

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

export default function ContactPage() {
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
				{/* Hero Section */}
				<div className="text-center mb-12">
					<h1 className="text-5xl font-serif mb-4">Contact & Project Inquiry</h1>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg">
						Reach out for commissions, collaborations, consulting, or any questions. I look forward to hearing from
						you!
					</p>
				</div>

				{/* First Row: Form (left, 70%), Get In Touch (right, 30%) */}
				<div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 mb-16">
					{/* Form - left */}
					<div>
						<h2 className="text-3xl font-serif mb-8">Start Your Project</h2>
						<Card>
							<CardHeader>
								<CardTitle>Project Inquiry & Contact</CardTitle>
								<CardDescription>
									Tell me about your vision and I'll get back to you within 24 hours
								</CardDescription>
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
											<Select
												value={formData.budget}
												onValueChange={(value) => handleInputChange("budget", value)}
											>
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
											<Select
												value={formData.timeline}
												onValueChange={(value) => handleInputChange("timeline", value)}
											>
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
					{/* Get In Touch - right */}
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl font-serif mb-6">Get In Touch</h2>
							<p className="text-gray-600 mb-8">
								Having a question about my artwork, interested in a commission, or want to collaborate? I'd love to
								hear from you.
							</p>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
										<Mail className="h-6 w-6 text-gray-600" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">Email</h3>
										<p className="text-gray-600">{siteConfig.contact.email.support}</p>
										<p className="text-sm text-gray-500">I typically respond within 24 hours</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
										<MapPin className="h-6 w-6 text-gray-600" />
									</div>
									<div>
										<h3 className="font-semibold mb-1">Location</h3>
										<p className="text-gray-600">
											{siteConfig.contact.address.city}, {siteConfig.contact.address.state}
										</p>
										<p className="text-sm text-gray-500">Available for local meetings and studio visits</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Second Row: FAQs (left, 70%), Image (right, 30%) */}
				<div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 mt-16">
					{/* FAQs - left */}
					<div>
						<h3 className="text-2xl font-serif mb-6 text-center">Frequently Asked Questions</h3>
						<div className="max-w-4xl mx-auto space-y-3">
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
					{/* Image - right */}
					<div className="flex items-center justify-center">
						<img
							src="/art/10.png"
							alt="Lotus Pulse"
							className="rounded-xl object-cover w-full h-80"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
