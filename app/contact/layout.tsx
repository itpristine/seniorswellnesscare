import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Patient & Provider Concierge | Seniors Wellness Care',
  description:
    'Contact Seniors Wellness Care: speak with our care team toll-free at (800) 492-3829 or submit a secure online inquiry regarding Medicare coverage and health services.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
