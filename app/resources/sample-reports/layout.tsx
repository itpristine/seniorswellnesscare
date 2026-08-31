import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Sample Genetic Reports (CGx & PGx) | Seniors Wellness Care',
  description:
    'Explore sample diagnostic genetic reports for Pharmacogenomics (PGx) and Hereditary Cancer (CGx) processed by CLIA-certified partner laboratories.',
};

export default function SampleReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
