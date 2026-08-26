import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Physician-Ordered Preventive Genomics & Medicare Screening`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Comprehensive physician-ordered preventive genetic testing covered by Medicare Part B for qualifying seniors. Painless at-home buccal cheek swab, CLIA-certified labs, and $0 out-of-pocket copay.',
  keywords: [
    'Medicare genetic testing',
    'preventive genomics',
    'pharmacogenomics PGx',
    'hereditary cancer screening CGx',
    'at home DNA swab test',
    'CLIA certified laboratory testing',
    'Medicare Part B wellness diagnostic',
    'neurocognitive dementia testing',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL('https://aegisgenomics.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aegisgenomics.com',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Physician-Ordered Preventive Genomics`,
    description:
      'Check your eligibility for $0 out-of-pocket preventive genetic screening covered by Medicare Part B. Painless 5-minute at-home swab.',
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
