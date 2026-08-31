import React from 'react';
import {
  HeartPulse,
  Activity,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Stethoscope,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DME_OVERVIEW_PILLARS } from '@/lib/constants/dmeData';

export function DmeOverviewSection() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#0D9488]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      default:
        return <Activity className="w-6 h-6 text-[#0D9488]" />;
    }
  };

  return (
    <section id="what-is-dme" className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Clinical Overview &amp; Education
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            What is Durable Medical Equipment (DME)?
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Understanding how physician-prescribed supportive equipment restores everyday comfort, stabilizes joints, and is covered under your Insurance benefits.
          </p>
        </div>

        {/* Narrative & Explainer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-700">
            <div className="space-y-3">
              <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#0D1B2A]">
                Medically Necessary Supportive Equipment for Daily Living
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                <strong>Durable Medical Equipment (DME)</strong> is medical equipment ordered by a licensed healthcare provider for patients experiencing chronic joint conditions, recovering from an injury or surgery, or needing physical stabilization. Designed for repeated, long-term therapeutic use, DME plays a vital role in patient care and rehabilitation.
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                Rather than relying solely on medications, DME provides immediate physical offloading and mechanical stabilization. It helps patients <strong>manage chronic pain</strong>, <strong>improve everyday mobility</strong>, <strong>provide joint and spinal stability</strong>, <strong>support post-injury recovery</strong>, and make daily activities—like walking, standing, and dressing—easier and safer.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                <span>Insurance Coverage</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eligible patients may be able to receive these medically necessary products through their insurance benefits, subject to eligibility, documented medical necessity, and specific plan coverage requirements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">
                      Why DME is Essential
                    </h4>
                    <p className="text-[11px] text-slate-500">Key clinical indications</p>
                  </div>
                </div>
                <Badge variant="emerald" size="sm">
                  Physician Ordered
                </Badge>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Non-Invasive Pain Management:</strong> Reduces reliance on heavy pain medications.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Spinal &amp; Joint Offloading:</strong> Directly decompresses compressed nerve roots and worn cartilage.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Fall Risk Mitigation:</strong> Stabilizes weak joints to give seniors safe footing and confidence.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Post-Surgical Healing:</strong> Protects vulnerable tissues during recovery.</span>
                </div>
              </div>

              <Button
                href="/eligibility-checker?source=dme"
                variant="primary"
                size="md"
                className="w-full justify-center text-xs font-semibold rounded-full shadow-xs"
              >
                Check If You May Qualify &rarr;
              </Button>
            </Card>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DME_OVERVIEW_PILLARS.map((pillar) => (
            <Card
              key={pillar.title}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical hover:shadow-xl hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] bg-[#ecfdf5] rounded-full px-2.5 py-1.5 w-fit">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Coverage Based on Eligibility</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
