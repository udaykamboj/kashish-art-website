
import path from "path"

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://kashishseth.art"

export const siteConfig = {
  name: "Kashish Seth Art",
  title: "Kashish Seth Art - Fine Art & Consulting",
  description:
    "Discover and collect original art, explore consulting services, and join a vibrant creative community led by Kashish Seth.",
  url: "https://kashishseth.art",
  ogImage: "https://kashishseth.art/og.jpg",

  company: {
    name: "Kashish Seth Art",
    tagline: "Art That Inspires",
    founded: "2020",
    headquarters: "Bothell, WA, USA",
  },

  contact: {
    email: {
      support: "kashishseth.art@gmail.com",
      info: "kashishseth.art@gmail.com",
      personal: "kashish5278@gmail.com",
      partnerships: "kashishseth.art@gmail.com",
      careers: "kashishseth.art@gmail.com",
    },
    calAccountLink: "https://cal.com/kashishseth.art/30min",
    phone: {
      main: "+1 (425) 236-2930",
      international: "+1 (425) 236-2930",
    },
    address: {
      street: "Art Street",
      suite: "Studio 12",
      city: "Bothell",
      state: "WA",
      zipCode: "98021",
      country: "USA",
      full: "Art Street, Studio 12, Bothell, WA 98021, USA",
    },
    hours: {
      support: "Mon-Sat, 10:00 AM - 7:00 PM PST",
      office: "Monday - Saturday, 10:00 AM - 7:00 PM PST",
      weekend: "Sunday, Closed",
    },
  },

  social: {
    instagram: "https://www.instagram.com/kashishseth.art/",
    facebook: "#",
    linkedin: "https://www.linkedin.com/in/kashish-seth230108",
    github: "https://github.com/kashishseth",
  },

  nav: {
    main: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Gallery", href: "/gallery" },
      { title: "Experience", href: "/experience" },
      { title: "Shop", href: "/shop" },
      { title: "Consulting", href: "/consulting" },
      { title: "Contact", href: "/contact" },

    ],
    footer: {
      quickLinks: [
        { title: "Gallery", href: "/gallery" },
        { title: "Shop", href: "/shop" },
        { title: "Consulting", href: "/consulting" },
        { title: "About", href: "/about" },
      ],
      legal: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
      ],
    },
  },

  features: {
    artStyles: ["Contemporary", "Abstract", "Portrait", "Landscape", "Mixed Media"],
    services: ["Art Consulting", "Custom Orders", "Workshops", "Online Gallery"],
    locations: "Global Reach",
    languages: ["English", "Hindi"],
  },

  stats: {
    customers: "5K+",
    artworks: "500+",
    workshops: "50+",
    rating: "4.8",
    countries: "10+",
    partners: "20+",
  },

  theme: {
    primary: "#0d9488", // teal-600
    secondary: "#14b8a6", // teal-500
    accent: "#5eead4", // teal-300
    background: "#f0fdfa", // teal-50
    muted: "#ccfbf1", // teal-100
  },

  keywords: [
    "fine art",
    "art consulting",
    "original paintings",
    "art gallery",
    "custom art",
    "workshops",
    "online art shop",
    "Kashish Seth",
    "buy art online",
    "creative community",
  ],

  legal: {
    copyright: `© ${new Date().getFullYear()} Kashish Seth Art. All rights reserved.`,
    trademark: "Kashish Seth Art is a trademark of Kashish Seth.",
    license: "Licensed art and consulting platform",
  },

  auth: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      scopes: ["email", "profile"].join(" "),
    },
  },

  database: {
    mysql: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'kashishseth_art',
      connectionLimit: 10,
    },
  },

  email: {
    smtp: {
      host: process.env.SMTP_HOST || '',
      port: parseInt(process.env.SMTP_PORT || '587'),
      user: process.env.SMTP_USER || '',
      password: process.env.SMTP_PASSWORD || '',
    },
    from: {
      name: process.env.EMAIL_FROM_NAME || 'Kashish Seth Art',
      email: process.env.EMAIL_FROM_ADDRESS || 'contact@kashishseth.art',
    },
    templatesPath: path.join(process.cwd(), 'email-templates'),
    debug: process.env.EMAIL_DEBUG === 'true',
    subjects: {
      emailVerification: 'Verify Your Email Address',
      welcome: 'Welcome to Kashish Seth Art, {{name}}!',
      orderConfirmation: 'Order Confirmed: {{orderId}}',
      newsletter: 'Kashish Seth Art Newsletter - {{formatDate date}}',
    },
  },
}

export type SiteConfig = typeof siteConfig;
