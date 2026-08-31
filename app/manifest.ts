import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Seniors Wellness Care',
    short_name: 'Seniors Wellness',
    description:
      'Seniors Wellness Care provides physician-ordered Genetic Testing, Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response systems across the USA.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFCF7',
    theme_color: '#0D1B2A',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
