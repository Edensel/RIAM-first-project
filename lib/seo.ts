import { Metadata } from 'next'

export const siteConfig = {
  name: 'RIAMRIAM Peace and Development Network',
  shortName: 'RIAMRIAM',
  description:
    'An international humanitarian and peace-building organization advancing social cohesion, resilience, governance, and sustainable livelihoods across East Africa.',
  url: 'https://riamriam.org',
  ogImage: '/og-image.jpg',
  twitterHandle: '@Riamiriam',
  email: 'info@riamriam.org',
  phone: '+254792618189',
  foundedYear: 2000,
  registrationNumber: 'NPO/OP/REG/2024',
  regions: ['Turkana', 'West Pokot', 'Baringo', 'Samburu', 'Marsabit', 'Karamoja'],
}

export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | Building Peace, Empowering Communities`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      'peace-building',
      'humanitarian',
      'East Africa',
      'community development',
      'social cohesion',
      'resilience',
      'sustainable livelihoods',
      'governance',
      'NGO',
      'nonprofit',
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: siteConfig.url,
      types: {
        'application/rss+xml': `${siteConfig.url}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  }
}

export function generateJsonLd(data: Record<string, any>) {
  return {
    __html: JSON.stringify(data),
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': siteConfig.url,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/logo.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
      width: 250,
      height: 60,
    },
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    sameAs: [
      'https://www.facebook.com/Riamiriam',
      'https://twitter.com/Riamiriam',
      'https://www.linkedin.com/company/riamriam-peace-and-development',
    ],
    foundingDate: `${siteConfig.foundedYear}`,
    areaServed: siteConfig.regions,
    serviceType: ['Peace Building', 'Community Development', 'Humanitarian Aid'],
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
