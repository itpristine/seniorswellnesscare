import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Genomics & Preventive Health Articles | Educational Resource Hub',
  description:
    'Evidence-based articles and clinical guides exploring pharmacogenomics, hereditary cancer prevention, Medicare Part B wellness benefits, and precision medicine.',
};

export default function ArticlesPage() {
  const articles = [
    {
      id: 'medicare-part-b-guide',
      title: 'Medicare Part B Preventive Diagnostics: What Every Senior Needs to Know in 2026',
      category: 'Medicare & Policy',
      readTime: '6 min read',
      date: 'Aug 20, 2026',
      summary:
        'Discover how CMS clinical necessity guidelines allow Medicare beneficiaries to access $0 out-of-pocket genetic testing for polypharmacy and hereditary disease prevention.',
      badgeVariant: 'emerald' as const,
    },
    {
      id: 'pharmacogenomics-polypharmacy',
      title: 'How Pharmacogenomics (PGx) Prevents Dangerous Adverse Drug Events in Seniors',
      category: 'Precision Pharmacology',
      readTime: '8 min read',
      date: 'Aug 15, 2026',
      summary:
        'Over 75% of older adults carry genetic variants that alter how their liver metabolizes common cardiac and psychotropic medications. Learn how PGx replaces trial-and-error prescribing.',
      badgeVariant: 'teal' as const,
    },
    {
      id: 'hereditary-cancer-red-flags',
      title: 'Red Flags for Hereditary Cancer: When Is Genetic Screening Recommended?',
      category: 'Clinical Oncology',
      readTime: '7 min read',
      date: 'Aug 10, 2026',
      summary:
        'Understanding the multi-generational cancer patterns that suggest BRCA1/2, Lynch Syndrome, or other high-penetrance genetic mutations in families.',
      badgeVariant: 'rose' as const,
    },
    {
      id: 'primary-immunodeficiency-adults',
      title: 'The Silent Epidemic: Identifying Primary Immunodeficiency in Older Adults',
      category: 'Immunology',
      readTime: '5 min read',
      date: 'Aug 04, 2026',
      summary:
        'Why recurrent sinus and respiratory infections in seniors are frequently misdiagnosed as routine allergies rather than underlying primary genetic immune vulnerabilities.',
      badgeVariant: 'teal' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <Badge variant="teal" size="md">
            Evidence-Based Health Insights
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            Genomics &amp; Wellness Knowledge Hub
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            Explore clinical articles and educational guides written to help patients, caregivers, and physicians navigate preventive genomic medicine.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((art) => (
            <Card
              key={art.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={art.badgeVariant} size="sm">
                    {art.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="font-serif-heading font-bold text-xl text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0D9488]">
                <span>Published {art.date}</span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Pre-Qual CTA */}
        <div className="p-8 rounded-3xl bg-[#F7F4E7]/90 border border-[#EAE5D8] text-[#0D1B2A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              Ready to discover your personalized genetic profile?
            </h3>
            <p className="text-xs text-slate-600">
              Check your Medicare Part B eligibility for $0 out-of-pocket screening today.
            </p>
          </div>
          <Button href="/eligibility-checker" size="md" variant="primary" className="shrink-0 font-semibold rounded-full shadow-md">
            Check Eligibility ($0 Cost) &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
