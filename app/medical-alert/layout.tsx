import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Medical Alert Systems for Seniors | 24/7 Fall Detection & Mobile GPS',
  description:
    'Seniors Wellness Care provides top-rated medical alert systems for seniors: 24/7 US emergency response, automatic fall detection, GPS pendants, and in-home smart hubs.',
  keywords: [
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
  ],
};

export default function MedicalAlertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
