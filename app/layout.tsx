import type { Metadata } from 'next';
import './globals.css';
import { GlobalHeader } from '@/components/layout/GlobalHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Precision Health, DME Equipment & Medical Alert Systems`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'AegisGenomics provides physician-ordered preventive genetic testing, Medicare-covered Durable Medical Equipment (DME), and 24/7 Medical Alert senior emergency response systems.',
  keywords: [
    'AegisGenomics',
    'Medicare genetic testing',
    'Immunodeficiency test',
    'Durable Medical Equipment DME',
    'Medical alert systems fall detection',
    'preventive genomics',
    'pharmacogenomics PGx',
    'hereditary cancer screening CGx',
    'Medicare Part B senior wellness',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL('https://aegisgenomics.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aegisgenomics.com',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Precision Health, DME Equipment & Medical Alert Systems`,
    description:
      'Check eligibility for $0 out-of-pocket preventive genetic screening, DME medical supplies, and 24/7 medical alert systems covered by Medicare.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFCF7] text-[#0D1B2A] font-sans-body antialiased selection:bg-[#0D9488] selection:text-white">
        <GlobalHeader />
        <SecondaryNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
