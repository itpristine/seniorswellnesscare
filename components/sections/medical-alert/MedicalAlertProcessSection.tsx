import React from 'react';
import {
  ClipboardPen,
  Headphones,
  Truck,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MEDICAL_ALERT_PROCESS_STEPS } from '@/lib/constants/medicalAlertData';

export function MedicalAlertProcessSection() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'ClipboardPen':
        return <ClipboardPen className="w-6 h-6 text-[#0D9488]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-rose-500" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <ClipboardPen className="w-6 h-6 text-[#0D9488]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Simple 4-Step Process
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            How It Works
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            From requesting your quick online quote to receiving your pre-activated safety system—we make setting up round-the-clock protection effortless.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {MEDICAL_ALERT_PROCESS_STEPS.map((step, idx) => (
            <Card
              key={step.step}
              className="p-6 sm:p-7 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical hover:shadow-xl hover:bg-white hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              <span className="absolute -top-2 -right-2 text-6xl font-serif-heading font-bold text-slate-100/80 select-none group-hover:text-teal-50 transition-colors pointer-events-none">
                {step.step}
              </span>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all shadow-xs">
                    {getStepIcon(step.iconName)}
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

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Step {idx + 1} of 4</span>
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
            href="/medical-alert/quote"
            size="lg"
            variant="primary"
            className="shadow-md shadow-teal-700/20 text-xs sm:text-sm font-semibold px-7 py-4 rounded-full"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get a Quote &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
