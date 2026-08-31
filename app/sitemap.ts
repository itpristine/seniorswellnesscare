import { MetadataRoute } from 'next';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.seniorswellnesscare.com';
  const lastModified = new Date();

  const staticPaths = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about-us', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/dme', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/medical-alert', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/medical-alert/quote', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/immunodeficiency', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/how-it-works', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/medicare-eligibility', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/eligibility-checker', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/programs', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/providers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/providers/referral', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/quality-accreditation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/resources/articles', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/resources/faq', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/resources/sample-reports', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/track-kit', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const programRoutes: MetadataRoute.Sitemap = DIAGNOSTIC_PROGRAMS.map((prog) => ({
    url: `${baseUrl}/programs/${prog.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes];
}

