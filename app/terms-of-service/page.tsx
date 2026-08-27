import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service | User & Clinical Agreements',
  description:
    'Terms of service and patient agreements governing the use of Senior Wellness Care website, eligibility pre-qualification tools, and diagnostic services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Terms of Use
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A]">
            Terms of Service &amp; Patient Agreement
          </h1>
          <p className="text-xs text-slate-500">
            Effective Date: January 1, 2026 • Last Updated: August 2026
          </p>
        </div>

        <Card className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              1. Platform Nature &amp; Medical Services Disclaimer
            </h2>
            <p>
              {SITE_CONFIG.name} provides digital health education, eligibility pre-qualification screening, and coordination between patients, independent licensed physicians, and CLIA-certified laboratories. {SITE_CONFIG.name} is not a hospital, laboratory, or direct healthcare provider. Diagnostic tests are reviewed, authorized, and ordered solely by independent state-licensed physicians based on clinical necessity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              2. Independence from Government &amp; Medicare
            </h2>
            <p>
              {SITE_CONFIG.name} is an independent entity and is not affiliated with, endorsed by, or sponsored by the Centers for Medicare &amp; Medicaid Services (CMS), the Department of Health and Human Services (HHS), or any government agency.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              3. Diagnostic Testing &amp; Patient Consent
            </h2>
            <p>
              By submitting an eligibility check or kit request, you authorize our care coordinators to verify your insurance benefits and transmit your health profile to a licensed physician in your state for medical evaluation. No diagnostic swab kit is dispatched without prior clinical approval.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              4. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas and applicable federal healthcare laws, without giving effect to any principles of conflicts of law.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
