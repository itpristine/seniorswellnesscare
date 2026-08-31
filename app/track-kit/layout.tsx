import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Swab Kit & Lab Sequencing Status | Seniors Wellness Care',
  description:
    'Track your at-home DNA cheek swab kit delivery and CLIA laboratory sequencing progress in real-time.',
};

export default function TrackKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
