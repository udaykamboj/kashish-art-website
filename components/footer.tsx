import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Github, MapPin, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"

const quickLinks = siteConfig.nav.footer.quickLinks
const legalLinks = siteConfig.nav.footer.legal

const socialLinks = [
  { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { name: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { name: "GitHub", href: siteConfig.social.github, icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
       
         {/* Logo */}
          <Link href={siteConfig.url} className="flex items-center space-x-2">
            <Image src="/ks-art-logo-white.svg" alt="KS Art Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl text-white">Kashish <span className="font-bold">Seth</span></span>
          </Link>

            <p className="text-gray-300 mb-6 max-w-md mt-4">
              Passionate student with a strong background in architecture, design, leadership, and community service.
              Creating meaningful visual experiences and making a positive impact through art and education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={siteConfig.url + link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>{siteConfig.contact.email.support}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{siteConfig.contact.address.city}, {siteConfig.contact.address.country}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{siteConfig.legal.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link
                key={link.title}
                href={siteConfig.url + link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
