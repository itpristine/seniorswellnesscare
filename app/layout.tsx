import type { Metadata } from 'next';
import './globals.css';
import { GlobalHeader } from '@/components/layout/GlobalHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Genetic Testing, DME Equipment & Medical Alert Systems`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Senior Wellness Care provides physician-ordered Genetic Testing, physician-prescribed Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response systems.',
  keywords: [
    'senior wellness care',
    'genetic testing',
    'Durable Medical Equipment DME',
    'Medical alert systems fall detection',
    'preventive genomics',
    'pharmacogenomics PGx',
    'hereditary cancer screening CGx',
    'orthopedic medical equipment',
    'Medicare and commercial insurance healthcare',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
  },
  metadataBase: new URL('https://aegisgenomics.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aegisgenomics.com',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Genetic Testing, DME Equipment & Medical Alert Systems`,
    description:
      'Access physician-ordered clinical genetic testing, orthopedic DME medical supplies, and 24/7 medical alert emergency response systems.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
