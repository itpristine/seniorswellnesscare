import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions & Medicare Help | Seniors Wellness Care',
  description:
    'Find answers to common questions about Medicare coverage, genetic testing cheek swabs, DME medical equipment, and 24/7 medical alert systems.',
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
