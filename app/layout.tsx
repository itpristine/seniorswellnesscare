import type { Metadata } from 'next';
import './globals.css';
import { GlobalHeader } from '@/components/layout/GlobalHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seniorswellnesscare.com'),
  title: {
    default: `${SITE_CONFIG.name} | Medicare Genetic Testing, DME & Medical Alert Systems USA`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Seniors Wellness Care is an independent digital health platform connecting eligible Medicare and commercially insured seniors across the USA with physician-ordered Genetic Testing, Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response systems.',
  keywords: [
    'Seniors Wellness Care',
    'Seniors Wellness Care Medicare',
    'Seniors Wellness Care services',
    'Seniors Wellness Care USA',
    'Seniors Wellness Care official',
    'Seniors Wellness Care healthcare',
    'Seniors Wellness Care senior services',
    'Seniors Wellness Care medical services',
    'Seniors Wellness Care genetic testing',
    'Seniors Wellness Care DME',
    'Seniors Wellness Care medical alert',
    'genetic testing for seniors',
    'genetic testing for Medicare patients',
    'Medicare genetic testing',
    'genetic testing for older adults',
    'genetic health testing for seniors',
    'genetic screening for seniors',
    'genetic testing services for seniors',
    'genetic testing covered by Medicare',
    'Medicare covered genetic testing',
    'genetic testing for hereditary conditions',
    'hereditary cancer genetic testing',
    'cardiovascular genetic testing',
    'pharmacogenetic testing',
    'genetic testing for medication response',
    'genetic testing for inherited diseases',
    'genetic risk assessment for seniors',
    'genetic testing for heart disease',
    'genetic testing for cancer risk',
    'hereditary cancer testing',
    'neurological genetic testing',
    'pharmacogenomic testing for seniors',
    'durable medical equipment',
    'DME for seniors',
    'durable medical equipment for seniors',
    'Medicare DME',
    'Medicare durable medical equipment',
    'DME supplies for seniors',
    'medical equipment for elderly',
    'senior medical equipment',
    'Medicare covered medical equipment',
    'Medicare DME suppliers',
    'durable medical equipment Medicare coverage',
    'medical equipment covered by Medicare',
    'DME for Medicare beneficiaries',
    'Medicare approved DME',
    'home medical equipment for seniors',
    'walkers for seniors',
    'wheelchairs Medicare',
    'hospital beds Medicare',
    'mobility equipment for seniors',
    'diabetic medical equipment',
    'bathroom safety equipment for seniors',
    'senior mobility aids',
    'home medical equipment',
    'medical alert for seniors',
    'medical alert system for seniors',
    'medical alert devices for seniors',
    'senior medical alert',
    'medical emergency alert for seniors',
    'medical alert system for elderly',
    'emergency alert system for seniors',
    'best medical alert system for seniors',
    'medical alert with fall detection',
    'fall detection for seniors',
    'emergency button for seniors',
    'medical alert button for elderly',
    'senior emergency response system',
    'medical alert wearable for seniors',
    'GPS medical alert for seniors',
    'what happens if a senior falls alone',
    'fall detection for elderly living alone',
    'emergency button for elderly living alone',
    'how to keep elderly parents safe at home',
    'medical alert for seniors living alone',
    'senior wellness',
    'senior health and wellness',
    'senior wellness services',
    'wellness services for seniors',
    'senior healthcare services',
    'senior health services',
    'elderly wellness services',
    'elderly healthcare services',
    'health services for older adults',
    'preventive care for seniors',
    'senior preventive healthcare',
    'healthy aging services',
    'senior wellness programs',
    'wellness programs for seniors',
    'healthy aging for seniors',
    'preventive health for seniors',
    'senior health screening',
    'health screening for older adults',
    'senior health assessment',
    'senior health resources',
    'Medicare services for seniors',
    'Medicare wellness services',
    'Medicare health services',
    'Medicare benefits for seniors',
    'Medicare services for elderly',
    'Medicare healthcare services',
    'Medicare wellness programs',
    'Medicare preventive services',
    'Medicare senior benefits',
    'Medicare resources for seniors',
    'what does Medicare cover for seniors',
    'Medicare benefits for older adults',
    'Medicare preventive services for seniors',
    'Medicare covered genetic testing',
    'Medicare DME coverage',
    'Medicare medical equipment',
    'Medicare medical alert coverage',
  ],
  authors: [{ name: SITE_CONFIG.name, url: 'https://www.seniorswellnesscare.com' }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.seniorswellnesscare.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.seniorswellnesscare.com',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Medicare Genetic Testing, DME & Medical Alert Systems USA`,
    description:
      'Seniors Wellness Care connects eligible Medicare beneficiaries and seniors with physician-ordered Genetic Testing, Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response systems nationwide.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: `${SITE_CONFIG.name} Official Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Medicare Genetic Testing, DME & Medical Alert Systems`,
    description:
      'Physician-ordered clinical genetic testing, orthopedic DME medical supplies, and 24/7 medical alert emergency response systems for seniors across the USA.',
    images: ['/logo.png'],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Austin, Texas, United States',
    'geo.position': '30.2672;-97.7431',
    ICBM: '30.2672, -97.7431',
    coverage: 'Worldwide',
    distribution: 'Global',
    target: 'all',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.seniorswellnesscare.com/#website',
      url: 'https://www.seniorswellnesscare.com',
      name: 'Seniors Wellness Care',
      alternateName: [
        'Seniors Wellness Care Medicare',
        'Seniors Wellness Care services',
        'Seniors Wellness Care USA',
        'Seniors Wellness Care official',
        'Seniors Wellness Care healthcare',
        'Seniors Wellness Care senior services',
        'Seniors Wellness Care medical services',
        'Seniors Wellness Care genetic testing',
        'Seniors Wellness Care DME',
        'Seniors Wellness Care medical alert',
      ],
      description:
        'Seniors Wellness Care provides physician-ordered Genetic Testing, Medicare-covered Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response systems nationwide.',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.seniorswellnesscare.com/resources/faq?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['MedicalBusiness', 'MedicalOrganization'],
      '@id': 'https://www.seniorswellnesscare.com/#organization',
      name: 'Seniors Wellness Care',
      legalName: 'Seniors Wellness Care LLC',
      url: 'https://www.seniorswellnesscare.com',
      logo: 'https://www.seniorswellnesscare.com/logo.png',
      image: 'https://www.seniorswellnesscare.com/logo.png',
      telephone: '+1-800-492-3829',
      email: 'contact@seniorswellnesscare.com',
      description:
        'Seniors Wellness Care connects eligible Medicare beneficiaries and seniors across the United States with physician-ordered Genetic Testing, Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response systems.',
      priceRange: '$0 with Qualifying Medicare / Insurance',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '100 Medical Center Parkway, Suite 400',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78701',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.2672,
        longitude: -97.7431,
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Seniors Wellness Care Healthcare Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Genetic Testing for Seniors',
              description:
                'Physician-ordered preventive genetic testing across 9 CLIA diagnostic panels covered by Medicare Part B for qualifying patients.',
              url: 'https://www.seniorswellnesscare.com/immunodeficiency',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Durable Medical Equipment (DME) for Seniors',
              description:
                'Physician-prescribed orthopedic braces (knee, back LSO, shoulder, wrist, elbow) and senior mobility equipment covered through insurance.',
              url: 'https://www.seniorswellnesscare.com/dme',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '24/7 Medical Alert Systems for Seniors',
              description:
                'Emergency response systems with automatic fall detection, nationwide GPS mobile pendants, and in-home safety smart hubs.',
              url: 'https://www.seniorswellnesscare.com/medical-alert',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#FDFCF7] text-[#0D1B2A] font-sans-body antialiased selection:bg-[#0D9488] selection:text-white"
        suppressHydrationWarning
      >
        <GlobalHeader />
        <SecondaryNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

