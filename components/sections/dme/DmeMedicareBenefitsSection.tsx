import React from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  FileCheck2,
  HeartHandshake,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DME_COVERAGE_ROWS } from '@/lib/constants/dmeData';

export function DmeMedicareBenefitsSection() {
  return (
    <section id="medicare-coverage" className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="emerald" size="md" dot>
            Medicare &amp; Insurance Coverage
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Medicare &amp; Patient Benefits Explained
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Understand how Medicare Part B and supplemental insurance can cover your medically necessary durable medical equipment.
          </p>
        </div>

        {/* Narrative Box: Why Are We Providing These DME Products? */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0 mt-1">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider block">
                Our Patient-First Mission
              </span>
              <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
                Why Are We Providing These DME Products?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-sans-body">
                Our primary goal is to help eligible patients gain seamless access to medically necessary durable medical equipment through their available insurance and Medicare benefits. Navigating healthcare supplies, medical necessity documentation, and doctor prescriptions can be overwhelming for seniors and caregivers. We bridge that gap by handling benefit verification and clinical coordination on your behalf.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-sans-body">
                When a patient qualifies and the equipment is eligible under their insurance or Medicare plan, the patient may have access to the appropriate DME through coverage that depends on their specific eligibility, benefits, and plan requirements.
              </p>
            </div>
          </div>

          {/* Compliance & Responsible Coverage Notice Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Insurance May Cover Eligible Costs</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Depending on your individual plan, eligibility, and coverage rules, your insurance may cover the full cost of eligible DME services or products.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                <span>We’ll Help Determine Whether You May Qualify</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coverage depends on eligibility, medical necessity, and your specific Medicare or Medicare Advantage plan rules.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage Comparison Table */}
        <div className="space-y-4">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
              Coverage Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              How traditional Medicare, Medicare Advantage, and Supplemental coverage apply to DME.
            </p>
          </div>

          <div className="hidden lg:block overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-5 text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider w-2/5">
                    DME Equipment Features &amp; Billing
                  </th>
                  <th className="p-5 text-xs sm:text-sm font-extrabold text-[#0D9488] bg-teal-50/50 border-x border-teal-200/60 w-1/5 text-center">
                    <span className="block text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">
                      Standard
                    </span>
                    Medicare Part B
                  </th>
                  <th className="p-5 text-xs sm:text-sm font-bold text-[#0D1B2A] text-center w-1/5">
                    Medicare Advantage (Part C)
                  </th>
                  <th className="p-5 text-xs sm:text-sm font-extrabold text-emerald-800 bg-emerald-50/40 text-center w-1/5">
                    <span className="block text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      Ideal Coverage
                    </span>
                    Part B + Supplemental
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {DME_COVERAGE_ROWS.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                  >
                    <td className="p-5 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-5 font-medium text-slate-700 bg-teal-50/20 border-x border-teal-200/40 text-center">
                      {row.partB}
                    </td>
                    <td className="p-5 text-slate-600 text-center">
                      {row.advantage}
                    </td>
                    <td className="p-5 font-bold text-emerald-800 bg-emerald-50/30 text-center">
                      {row.highlight ? (
                        <span className="inline-flex items-center gap-1 bg-[#0D9488] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                          <Sparkles className="w-3 h-3" /> {row.supplemental}
                        </span>
                      ) : (
                        row.supplemental
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden space-y-3">
            {DME_COVERAGE_ROWS.map((row) => (
              <div key={row.feature} className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-clinical space-y-3">
                <h4 className="font-semibold text-sm text-slate-900">{row.feature}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="rounded-xl bg-teal-50/50 border border-teal-200/60 p-3">
                    <span className="block font-bold text-[#0D9488] mb-1">Medicare Part B</span>
                    <span className="text-slate-700">{row.partB}</span>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3">
                    <span className="block font-bold text-slate-700 mb-1">Medicare Advantage</span>
                    <span className="text-slate-600">{row.advantage}</span>
                  </div>
                  <div className="rounded-xl bg-emerald-50/40 border border-emerald-200/60 p-3">
                    <span className="block font-bold text-emerald-700 mb-1">Part B + Supplemental</span>
                    {row.highlight ? (
                      <span className="inline-flex items-center gap-1 bg-[#0D9488] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-xs">
                        <Sparkles className="w-3 h-3" /> {row.supplemental}
                      </span>
                    ) : (
                      <span className="font-bold text-emerald-800">{row.supplemental}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assurance Box: No-Surprise Billing */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-clinical flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-heading font-bold text-sm sm:text-base text-[#0D1B2A]">
                Insurance Review Before Product Shipment
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                Before any equipment is shipped, our insurance concierge team reviews your coverage and confirms your eligibility details. If coverage requirements are not met or additional plan review is needed, the next step is explained before any product is dispatched.
              </p>
            </div>
          </div>

          <Button
            href="/eligibility-checker?source=dme"
            variant="primary"
            size="md"
            className="shrink-0 text-xs sm:text-sm font-semibold rounded-full shadow-xs whitespace-nowrap"
          >
            Check My Coverage Now &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
