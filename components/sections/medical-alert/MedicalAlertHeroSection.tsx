import React from 'react';
import Link from 'next/link';
import {
  Radio,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BellRing,
  MapPin,
  Users,
  Lock,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export function MedicalAlertHeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border-b border-[#EAE5D8]">
      {/* Soft ambient blurs */}
      <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-rose-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          {/* Eyebrow Pill */}
          <div className="inline-flex max-w-full items-center gap-2 bg-rose-50 border border-rose-200/80 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-rose-800 shadow-xs">
            <Radio className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>24/7 US Emergency Dispatch • Home &amp; Mobile Safety Protection</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] leading-[1.15] tracking-tight">
            24/7 Medical Alert &amp;{' '}
            <span className="highlight-accent text-[#0D9488]">Emergency Response</span>{' '}
            for Complete Peace of Mind.
          </h1>

          {/* Subtitle */}
          <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
            Stay protected, active, and independent wherever life takes you. Instant two-way voice communication with certified emergency dispatchers, nationwide 4G LTE GPS tracking, and automatic fall detection options.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              href="/medical-alert/quote"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-7 py-4 rounded-full shadow-lg shadow-teal-700/20"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>

            <Button
              href="#systems"
              size="lg"
              variant="light"
              className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-6 py-4 rounded-full"
            >
              Explore Safety Systems &rarr;
            </Button>
          </div>

          {/* Trust Checkmarks */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-medium text-slate-600 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5">
              <BellRing className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>Automatic Fall Detection</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>Nationwide 4G LTE GPS</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>Family &amp; EMT Notification</span>
            </span>
          </div>
        </div>

        {/* Right Column: Safety Consultation Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <Card className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                  Senior Safety Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Takes under 1 minute • Free customized quote
                </p>
              </div>
              <Badge variant="rose" size="sm">
                24/7 Live
              </Badge>
            </div>

            {/* Visual highlights */}
            <div className="space-y-2.5">
              {[
                'Instant two-way voice connection to certified US dispatchers',
                'Wearable fall detection sensors for shower and home safety',
                'Nationwide coverage with built-in 4G LTE (no landline needed)',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-slate-700 space-y-0.5">
              <div className="flex items-center gap-1.5 font-bold text-teal-900">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Reliable Protection You Can Trust</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Choose between dedicated in-home hubs, on-the-go mobile GPS pendants, or modern SOS smartwatches.
              </p>
            </div>

            <Link
              href="/medical-alert/quote"
              className="flex items-center justify-center gap-2 w-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              <span>Get a Free Quote Now &rarr;</span>
            </Link>

            <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#0D9488]" />
                256-Bit Encrypted
              </span>
              <span>100% Confidential</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
