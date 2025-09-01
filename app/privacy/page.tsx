import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-serif mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Email address and phone number</li>
                <li>Communications with us</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchases</li>
                <li>Send you updates about new artwork and exhibitions</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties except as
                described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Service providers who assist with payment processing and shipping</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                traffic, and understand where our visitors are coming from. You can control cookies through your browser
                settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-4">
                <p>Email: {siteConfig.contact.email.support}</p>
                <p>Phone: {siteConfig.contact.phone.main}</p>
                <p>Address: {siteConfig.company.headquarters}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
