import React from 'react';
import Link from 'next/link';
import { Check, X, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function CoverageMatrix() {
  const comparisonRows = [
    {
      feature: 'Patient Cost Responsibility',
      partB: 'Coverage may apply',
      advantage: 'Plan-dependent',
      commercial: 'Plan-dependent',
      selfPay: 'Transparent Flat Rate',
      highlight: true,
    },
    {
      feature: 'Physician Review & Order Included',
      partB: 'Yes (Network MD)',
      advantage: 'Yes',
      commercial: 'Yes',
      selfPay: 'Yes (Included)',
      highlight: false,
    },
    {
      feature: 'CLIA & CAP Certified Laboratory',
      partB: 'Yes',
      advantage: 'Yes',
      commercial: 'Yes',
      selfPay: 'Yes',
      highlight: false,
    },
    {
      feature: '5-Minute At-Home Swab Collection',
      partB: 'Yes',
      advantage: 'Yes',
      commercial: 'Yes',
      selfPay: 'Yes',
      highlight: false,
    },
    {
      feature: 'Prepaid 2-Way USPS Priority Shipping',
      partB: 'Yes (Included)',
      advantage: 'Yes (Included)',
      commercial: 'Yes (Included)',
      selfPay: 'Yes (Included)',
      highlight: false,
    },
    {
      feature: 'Post-Test Physician Consultation',
      partB: 'Yes (Included)',
      advantage: 'Yes (Included)',
      commercial: 'Yes (Included)',
      selfPay: 'Yes (Included)',
      highlight: false,
    },
    {
      feature: 'Coverage Review Before Shipment',
      partB: 'Yes (Pre-Verified)',
      advantage: 'Yes (Pre-Verified)',
      commercial: 'Yes (Pre-Verified)',
      selfPay: 'Yes (Reviewed)',
      highlight: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md" dot>
            Insurance Coverage Review
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Will Medicare or Insurance Cover Your Test?
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            Compare coverage options across Medicare Part B, Medicare Advantage, commercial insurance, and direct self-pay.
          </p>
        </div>

        {/* Comparison Table (Desktop: lg and above) */}
        <div className="hidden lg:block overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-5 text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider w-2/5">
                  Platform Features &amp; Benefits
                </th>
                <th className="p-5 text-xs sm:text-sm font-extrabold text-[#0D9488] bg-teal-50/50 border-x border-teal-200/60 w-1/5 text-center">
                  <span className="block text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">
                    Recommended
                  </span>
                  Medicare Part B
                </th>
                <th className="p-5 text-xs sm:text-sm font-bold text-[#0D1B2A] text-center w-1/5">
                  Medicare Advantage
                </th>
                <th className="p-5 text-xs sm:text-sm font-bold text-[#0D1B2A] text-center w-1/5">
                  Commercial / Self-Pay
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                >
                  <td className="p-5 font-semibold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="p-5 font-bold text-[#0D9488] bg-teal-50/30 border-x border-teal-200/40 text-center">
                    {row.highlight ? (
                      <span className="inline-flex items-center gap-1 bg-[#0D9488] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                        <Sparkles className="w-3 h-3" /> {row.partB}
                      </span>
                    ) : (
                      row.partB
                    )}
                  </td>
                  <td className="p-5 text-slate-600 text-center">
                    {row.advantage}
                  </td>
                  <td className="p-5 text-slate-600 text-center">
                    {row.commercial}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View (below lg) */}
        <div className="lg:hidden space-y-3">
          {comparisonRows.map((row) => (
            <div key={row.feature} className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-clinical space-y-3">
              <h4 className="font-serif-heading font-bold text-sm text-slate-900">{row.feature}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl bg-teal-50/50 border border-teal-200/60 p-3">
                  <span className="block font-bold text-[#0D9488] mb-1">Medicare Part B</span>
                  {row.highlight ? (
                    <span className="inline-flex items-center gap-1 bg-[#0D9488] text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-xs">
                      <Sparkles className="w-3 h-3" /> {row.partB}
                    </span>
                  ) : (
                    <span className="text-slate-800 font-medium">{row.partB}</span>
                  )}
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3">
                  <span className="block font-bold text-slate-700 mb-1">Medicare Advantage</span>
                  <span className="text-slate-600">{row.advantage}</span>
                </div>
                <div className="rounded-xl bg-[#FDFCF7] border border-slate-200/70 p-3">
                  <span className="block font-bold text-slate-700 mb-1">Commercial / Self-Pay</span>
                  <span className="text-slate-600">{row.commercial}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-clinical flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">
                Insurance Review Before Shipment
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Every test is reviewed by our insurance concierge before shipping. If coverage requirements are not met or plan details need additional review, we explain the next steps before any product or kit is sent.
              </p>
            </div>
          </div>

          <Button
            href="/medicare-eligibility"
            variant="outline"
            size="md"
            className="shrink-0 text-xs font-semibold rounded-full"
          >
            Read Complete Medicare Guide &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
