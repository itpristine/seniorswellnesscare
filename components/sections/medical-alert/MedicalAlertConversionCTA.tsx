import React from 'react';
import { ArrowRight, ShieldCheck, Phone, Radio, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { Button } from '@/components/ui/Button';

export function MedicalAlertConversionCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1B2A] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-300 text-xs sm:text-sm font-semibold">
              <Radio className="w-4 h-4 text-rose-400" />
              <span>24/7 Senior Safety &amp; Emergency Alert Protection</span>
            </div>

            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Ready for Complete Emergency Protection &amp; Peace of Mind?
            </h2>

            <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Request your personalized Medical Alert quote today. Our dedicated safety specialists will help you choose the ideal system for yourself or a loved one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Button
                href="/medical-alert/quote"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-7 py-4 rounded-full shadow-lg shadow-teal-700/30"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get a Quote
              </Button>

              <a
                href={`tel:${SITE_CONFIG.phoneFormatted}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-rose-400" />
                <span>Call Safety Support: {SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Micro trust indicators */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Takes Under 1 Minute
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                24/7 US Emergency Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" />
                No Landline Needed
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Confidential
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
