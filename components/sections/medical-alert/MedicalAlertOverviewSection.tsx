import React from 'react';
import {
  Radio,
  ShieldAlert,
  HeartHandshake,
  Users,
  CheckCircle2,
  BellRing,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MEDICAL_ALERT_OVERVIEW_PILLARS } from '@/lib/constants/medicalAlertData';

export function MedicalAlertOverviewSection() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#0D9488]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#0D9488]" />;
      default:
        return <Radio className="w-6 h-6 text-[#0D9488]" />;
    }
  };

  return (
    <section
      id="what-is-medical-alert"
      className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Safety &amp; Emergency Support
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            What is a Medical Alert System?
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Understanding how dedicated emergency communication systems help individuals maintain independence, quickly access help, and provide dependable peace of mind.
          </p>
        </div>

        {/* Narrative & Explainer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-700">
            <div className="space-y-3">
              <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#0D1B2A]">
                A Direct Line to Assistance When Every Second Counts
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                A <strong>Medical Alert system</strong> is a specialized emergency communication solution engineered to provide immediate access to help during an urgent event. Whether encountering a sudden slip or fall, acute medical distress, a sudden loss of balance, or a home security concern, users can instantly request assistance with a simple press of a wearable or stationary SOS button.
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                Rather than having to search for or reach a telephone during a crisis, a Medical Alert device directly connects you to a trained US-based emergency response dispatcher via high-clarity two-way audio. Dispatchers can assess your immediate condition, coordinate with local emergency first responders, and immediately notify family members and designated caregivers.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-[#0D9488]" />
                <span>Confidence for Living Independently</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For individuals who live alone, are recovering from an illness or surgery, or simply want an extra layer of personal safety, these systems remove anxiety and empower an active, self-reliant lifestyle without compromising on security.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">
                      Why Medical Alert Matters
                    </h4>
                    <p className="text-[11px] text-slate-500">Key emergency benefits</p>
                  </div>
                </div>
                <Badge variant="rose" size="sm">
                  24/7 Monitored
                </Badge>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Instant SOS Connection:</strong> Connects to live response operators in seconds through two-way voice.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Bathroom &amp; Shower Safety:</strong> 100% waterproof wearable buttons protect in high-risk wet areas.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Accurate GPS Tracking:</strong> Mobile devices transmit exact coordinates so first responders find you fast.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Caregiver Peace of Mind:</strong> Families receive immediate status updates when an alert is triggered.</span>
                </div>
              </div>

              <Button
                href="/medical-alert/quote"
                variant="primary"
                size="md"
                className="w-full justify-center text-xs font-semibold rounded-full shadow-xs"
              >
                Get a Free Quote &rarr;
              </Button>
            </Card>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDICAL_ALERT_OVERVIEW_PILLARS.map((pillar) => (
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

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0D9488]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>24/7 Active Protection</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
