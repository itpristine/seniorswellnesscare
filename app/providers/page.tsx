import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Stethoscope,
  FileText,
  ShieldCheck,
  Building,
  CheckCircle2,
  Download,
  ArrowRight,
  ClipboardList,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Healthcare Providers & Clinical Network | Digital Genetic Requisitions',
  description:
    'Empower your clinical practice with physician-ordered preventive genomics (CGx & PGx). Zero administrative overhead, CLIA-certified labs, and direct Medicare Part B billing.',
};

export default function ProvidersPage() {
  const providerBenefits = [
    {
      title: 'Actionable Clinical Decision Support',
      desc: 'Clear, evidence-based diagnostic reports with CPIC-aligned pharmacogenomic recommendations and NCCN-aligned hereditary cancer surveillance protocols.',
      icon: <ClipboardList className="w-6 h-6 text-[#0D9488]" />,
    },
    {
      title: 'Zero Billing Overhead for Practices',
      desc: 'Our billing concierge handles Medicare Part B claims directly with zero out-of-pocket balance billing to qualifying patients when medically necessary.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Painless At-Home Collection Logistics',
      desc: 'We mail sterile cheek swab kits directly to your patients’ homes and manage 2-way priority specimen transport to our CLIA-certified partner labs.',
      icon: <Building className="w-6 h-6 text-amber-600" />,
    },
    {
      title: 'Fast 7–10 Day Turnaround',
      desc: 'Access discrete, high-throughput Next-Gen Sequencing reports securely uploaded to your provider portal and faxed directly to your medical records department.',
      icon: <FileText className="w-6 h-6 text-[#0D9488]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Provider Hero */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border border-[#EAE5D8] text-[#0D1B2A] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <Badge variant="teal" size="md">
              Physician Network &amp; Clinical Partnership
            </Badge>

            <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight leading-tight">
              Precision Preventive Genomics for Your Patient Panel
            </h1>

            <p className="font-sans-body text-sm sm:text-base text-slate-700 leading-relaxed">
              Order diagnostic hereditary cancer (CGx), pharmacogenomics (PGx), and wellness screening panels with zero paperwork burden. Covered by Medicare Part B for qualifying senior patients.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                href="/providers/referral"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-semibold rounded-full shadow-md shadow-teal-700/20"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Patient Requisition Online &rarr;
              </Button>

              <Button
                href="/resources/sample-reports"
                size="lg"
                variant="light"
                className="w-full sm:w-auto font-semibold rounded-full"
              >
                View Sample Reports
              </Button>
            </div>
          </div>
        </div>

        {/* Clinical Value Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
              Why Partner with seniors wellness care?
            </h2>
            <p className="text-sm text-slate-600">
              We bridge the gap between primary care practices and high-complexity genomics laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerBenefits.map((b) => (
              <Card
                key={b.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#0D1B2A]">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Workflow Strip */}
        <Card className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-8">
          <div className="space-y-2">
            <Badge variant="teal" size="sm">
              Clinical Workflow
            </Badge>
            <h3 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
              How Community Physicians Co-Manage Patients
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#FDFCF7] border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#0D1B2A] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-sm text-slate-900">Digital Order or Referral</h4>
              <p className="text-xs text-slate-600">
                Submit an order online using our digital requisition form or refer eligible patients for evaluation by our state-licensed physician network.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFCF7] border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#0D9488] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-sm text-slate-900">Lab Sequencing &amp; Billing</h4>
              <p className="text-xs text-slate-600">
                Our CLIA/CAP lab processes the specimen. We bill Medicare Part B directly and ensure full compliance with CMS Local Coverage Determinations (LCDs).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFCF7] border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-sm text-slate-900">Integrated Medical Report</h4>
              <p className="text-xs text-slate-600">
                Receive the finalized diagnostic report directly in your EHR or secure portal to guide medication dosing and proactive health management.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
