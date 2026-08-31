import React from 'react';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy & HIPAA Notice | Patient Data Protection',
  description:
    'Our comprehensive HIPAA privacy policy, detailing how patient genomic data, personal identifiers, and medical information are protected under federal law.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Legal &amp; Compliance
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A]">
            Privacy Policy &amp; HIPAA Notice of Privacy Practices
          </h1>
          <p className="text-xs text-slate-500">
            Effective Date: January 1, 2026 • Last Updated: August 2026
          </p>
        </div>

        <Card className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              1. Our Uncompromising Commitment to Patient Privacy
            </h2>
            <p>
              {SITE_CONFIG.legalName} (&quot;Seniors Wellness Care&quot;, &quot;we&quot;, &quot;us&quot;) is dedicated to safeguarding your personal health information (PHI) and genomic data. We operate in strict compliance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA), the Health Information Technology for Economic and Clinical Health Act (HITECH), and the Genetic Information Nondiscrimination Act of 2008 (GINA).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              2. How Your Protected Health Information Is Used
            </h2>
            <p>
              We collect demographic, clinical, and insurance information exclusively for the purposes of:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Verifying Medicare Part B and commercial insurance benefits.</li>
              <li>Facilitating clinical review and order authorization by licensed physicians.</li>
              <li>Transmitting orders to CLIA-certified partner laboratories for specimen processing.</li>
              <li>Delivering diagnostic reports to ordering clinicians and patients.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              3. Zero Sale or Commercialization of DNA Data
            </h2>
            <p>
              We do not sell, lease, rent, or trade your identifiable genomic or medical data to advertisers, commercial data brokers, or pharmaceutical marketing entities. Your DNA sample is evaluated solely for the diagnostic tests ordered by your physician.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              4. 256-Bit Technical Safeguards &amp; Encryption
            </h2>
            <p>
              All digital communications and intake records are protected using TLS 1.3 encryption in transit and AES-256 field-level encryption at rest. Access to clinical databases is strictly gated by role-based access control (RBAC) and audited continuous logging.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              5. Contacting Our Privacy Officer
            </h2>
            <p>
              If you have questions regarding your privacy rights, request a copy of your records, or wish to submit an inquiry, contact our Privacy Compliance Officer at{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#0D9488] font-bold underline">
                {SITE_CONFIG.email}
              </a>{' '}
              or by writing to {SITE_CONFIG.address}.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
