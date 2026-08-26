import React from 'react';
import { ClipboardCheck, Stethoscope, PackageCheck, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function ProcessStepsGrid() {
  const steps = [
    {
      number: '01',
      title: 'Check Eligibility (2 Mins)',
      subtitle: 'Fast Online Pre-Qualification',
      description:
        'Answer simple questions about your Medicare Part B coverage and personal or family health history. Our smart system instantly checks if you qualify for $0 out-of-pocket testing.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#0D9488]" />,
      badge: 'Step 1 • Instant',
    },
    {
      number: '02',
      title: 'Physician Consultation & Order',
      subtitle: 'Board-Certified Clinical Review',
      description:
        'A licensed medical doctor in your state evaluates your clinical health profile. When testing is medically appropriate, the physician approves and orders the diagnostic panel.',
      icon: <Stethoscope className="w-6 h-6 text-amber-600" />,
      badge: 'Step 2 • Doctor Reviewed',
    },
    {
      number: '03',
      title: '5-Minute At-Home Swab Kit',
      subtitle: 'Painless Buccal Collection',
      description:
        'Receive your sterile swab kit by priority mail. Gently swab the inside of your cheek for 30 seconds, seal the tube, and drop it into the prepaid USPS return mailer.',
      icon: <PackageCheck className="w-6 h-6 text-emerald-600" />,
      badge: 'Step 3 • Zero Needles',
    },
    {
      number: '04',
      title: 'CLIA Lab Results & Guidance',
      subtitle: 'Personalized Clinical Action Plan',
      description:
        'Our CLIA-certified partner laboratory analyzes your DNA. Your physician reviews the findings with you and provides actionable insights to share with your primary care doctor.',
      icon: <FileSpreadsheet className="w-6 h-6 text-[#0D9488]" />,
      badge: 'Step 4 • Comprehensive',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Simple 4-Step Process
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            How Your Diagnostic Testing Journey Works
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            From online eligibility check to personalized clinical results—the entire experience is guided, secure, and completed from the comfort of home.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <Card
              key={step.number}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-clinical hover:shadow-xl hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              <span className="absolute -top-2 -right-2 text-6xl font-serif-heading font-bold text-slate-100/80 select-none group-hover:text-teal-50 transition-colors pointer-events-none">
                {step.number}
              </span>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50/60 border border-teal-100 flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all shadow-xs">
                    {step.icon}
                  </div>
                  <Badge variant="slate" size="sm">
                    {step.badge}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-[#0D9488] mt-0.5">
                    {step.subtitle}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-[#0D9488] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Action Prompt */}
        <div className="text-center pt-2">
          <Button
            href="/eligibility-checker"
            size="lg"
            variant="primary"
            className="shadow-md shadow-teal-700/20 text-xs sm:text-sm font-semibold px-7 py-4 rounded-full"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Check If You Qualify Under Medicare Part B ($0 Cost)
          </Button>
        </div>
      </div>
    </section>
  );
}
