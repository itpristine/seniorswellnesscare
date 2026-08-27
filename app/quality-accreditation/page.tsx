import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import {
  ShieldCheck,
  Award,
  Lock,
  FileCheck2,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quality, Accreditation & Compliance Standards | CLIA, CAP & HIPAA',
  description:
    'Detailed overview of our clinical quality benchmarks, federal CLIA certifications, CAP peer accreditation, HIPAA 256-bit encryption, and GINA anti-discrimination protections.',
};

export default function QualityAccreditationPage() {
  const pillars = [
    {
      title: 'CLIA (Clinical Laboratory Improvement Amendments)',
      subtitle: 'CMS, CDC & FDA Oversight',
      desc: 'All genetic sequencing is performed in partner laboratories holding active federal CLIA certificates of accreditation for high-complexity molecular diagnostics.',
      icon: <Building2 className="w-8 h-8 text-[#0D9488]" />,
      points: [
        'Rigorous biannual federal inspection compliance',
        'Validated analytical precision exceeding 99.9%',
        'Strict standard operating procedures for specimen handling',
      ],
    },
    {
      title: 'CAP (College of American Pathologists)',
      subtitle: 'Gold Standard in Laboratory Peer Review',
      desc: 'Partner facilities maintain CAP accreditation, recognized globally as the most demanding operational and quality assurance standard in pathology and genetics.',
      icon: <Award className="w-8 h-8 text-amber-600" />,
      points: [
        'Continuous proficiency testing challenges',
        'Direct peer-inspection by practicing clinical geneticists',
        'Standardized bioinformatic variant interpretation',
      ],
    },
    {
      title: 'HIPAA & 256-Bit Data Security',
      subtitle: 'Strict Health Privacy Protection',
      desc: 'We adhere to uncompromising data privacy protocols. Your genetic and personal health information is protected using end-to-end encryption both in transit and at rest.',
      icon: <Lock className="w-8 h-8 text-emerald-600" />,
      points: [
        'TLS 1.3 encryption for all digital transfers',
        'Field-level AES-256 database encryption',
        'Zero commercialization or sale of patient genomic data',
      ],
    },
    {
      title: 'Federal GINA Legal Protections',
      subtitle: 'Genetic Information Nondiscrimination Act',
      desc: 'Under federal law (GINA), your genetic test results cannot be used by health insurance companies to deny coverage, increase premiums, or drop plans.',
      icon: <ShieldCheck className="w-8 h-8 text-[#0D9488]" />,
      points: [
        'Prohibits health insurers from requesting genetic information',
        'Protects against employment-related discrimination',
        'Ensures total patient autonomy in seeking preventive testing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="emerald" size="md" dot>
            Clinical Excellence &amp; Federal Oversight
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            Accreditations, Quality &amp; Patient Privacy
          </h1>
          <p className="font-sans-body text-base sm:text-lg text-slate-600">
            Learn about our uncompromising commitments to clinical accuracy, federal laboratory certification, and data governance.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((p) => (
            <Card
              key={p.title}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
                    {p.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-[#0D9488] mt-0.5">
                    {p.subtitle}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {p.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
