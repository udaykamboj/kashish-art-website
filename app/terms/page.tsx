import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-serif mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                By accessing and using KashishSeth.art ("the Website"), you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Use License</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Permission is granted to temporarily download one copy of the materials on KashishSeth.art for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Artwork and Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                All artwork, designs, and creative content displayed on this website are the intellectual property of
                Kashish Seth unless otherwise noted. Unauthorized reproduction, distribution, or use of any artwork is
                strictly prohibited.
              </p>
              <p className="mt-4">
                When you purchase artwork, you are purchasing the physical piece and limited rights for personal use.
                Commercial use, reproduction, or resale requires explicit written permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Purchase Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                All purchases are subject to availability. Prices are subject to change without notice. We reserve the
                right to refuse or cancel orders at our discretion.
              </p>
              <p className="mt-4">
                Payment must be received in full before artwork is shipped. All sales are final unless the artwork
                arrives damaged or is significantly different from the description.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Shipping and Returns</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We carefully package all artwork to ensure safe delivery. Shipping costs are calculated at checkout. If
                artwork arrives damaged, please contact us within 48 hours with photos of the damage.
              </p>
              <p className="mt-4">
                Returns are accepted within 14 days of delivery for undamaged items in original packaging. Return
                shipping costs are the responsibility of the buyer unless the item was damaged or incorrectly described.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                In no event shall Kashish Seth or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on this website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
