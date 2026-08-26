import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Medical Alert Systems | Home, Mobile GPS & Smartwatch Solutions',
  description:
    'Instant 24/7 emergency response, automatic fall detection options, and nationwide GPS mobile pendants. Protect your independence and get a free quote today.',
};

export default function MedicalAlertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
