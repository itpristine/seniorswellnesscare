'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Radio,
  Watch,
  ShieldCheck,
  CheckCircle2,
  Info,
  Layers,
  ArrowRight,
  Sparkles,
  Users,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MEDICAL_ALERT_SYSTEMS } from '@/lib/constants/medicalAlertData';
import { cn } from '@/lib/utils/cn';

export function MedicalAlertSystemsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 3 Systems' },
    { id: 'home-system', label: 'Home System' },
    { id: 'mobile-systems', label: 'Mobile Systems' },
    { id: 'smartwatch', label: 'Smartwatch' },
  ];

  const getSystemIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#0D9488]" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-rose-500" />;
      case 'Watch':
        return <Watch className="w-5 h-5 text-teal-600" />;
      default:
        return <Radio className="w-5 h-5 text-[#0D9488]" />;
    }
  };

  const filteredSystems =
    activeCategory === 'all'
      ? MEDICAL_ALERT_SYSTEMS
      : MEDICAL_ALERT_SYSTEMS.filter((s) => s.id === activeCategory);

  return (
    <section id="systems" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Dedicated Safety Solutions
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Medical Alert Systems We Provide
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Choose from comprehensive in-home safety stations, on-the-go nationwide mobile GPS pendants, or modern SOS smartwatches tailored to your lifestyle.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer',
                activeCategory === cat.id
                  ? 'bg-[#0D1B2A] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#0D1B2A]'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Detailed System Cards Stack */}
        <div className="space-y-10">
          {filteredSystems.map((system) => (
            <div
              key={system.id}
              id={system.anchorId}
              className="scroll-mt-24"
            >
              <Card className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical hover:shadow-xl transition-all duration-200 space-y-8">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      {getSystemIcon(system.iconName)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">
                          Medical Alert Solution
                        </span>
                        <Badge variant="rose" size="sm">
                          {system.badge}
                        </Badge>
                      </div>
                      <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
                        {system.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                        {system.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-auto">
                    <Button
                      href="/medical-alert/quote"
                      variant="primary"
                      size="md"
                      className="text-xs sm:text-sm font-semibold rounded-full shadow-xs whitespace-nowrap"
                    >
                      Get a Quote &rarr;
                    </Button>
                  </div>
                </div>

                {/* Device Image */}
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 sm:p-3 shadow-xs">
                  <img
                    src={system.imageUrl}
                    alt={system.name}
                    className="w-full h-52 sm:h-60 object-contain rounded-xl bg-[#F7F4E7]/60"
                  />
                </div>

                {/* 2-Column Deep Detail Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: What It Is & How It Works */}
                  <div className="space-y-6">
                    {/* What It Is */}
                    <div className="space-y-2">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <Info className="w-4 h-4 text-[#0D9488]" />
                        <span>What It Is</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                        {system.whatIsIt}
                      </p>
                    </div>

                    {/* How It Operates & Accesses Assistance */}
                    <div className="space-y-2 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>How to Access Assistance</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                        {system.howItWorks}
                      </p>
                    </div>

                    {/* Key Engineering Features */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Hardware &amp; Connectivity Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {system.keyFeatures.map((feat) => (
                          <div
                            key={feat}
                            className="p-2.5 rounded-xl bg-white border border-slate-200/70 text-xs font-medium text-slate-700 flex items-center gap-2"
                          >
                            <Layers className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Benefits & Who May Benefit */}
                  <div className="space-y-6">
                    {/* Key Benefits */}
                    <div className="space-y-2.5">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#0D9488]" />
                        <span>Key Patient &amp; Family Benefits</span>
                      </h4>
                      <div className="space-y-2">
                        {system.keyBenefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-white border border-slate-200/70"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Who May Benefit */}
                    <div className="space-y-2.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <Users className="w-4 h-4 text-teal-600" />
                        <span>Who May Benefit</span>
                      </h4>
                      <div className="space-y-2">
                        {system.whoMayBenefit.map((person) => (
                          <div
                            key={person}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2 shrink-0" />
                            <span>{person}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 text-center sm:text-left">
                    <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                    <span>24/7 US emergency response coordination &amp; pre-activated setup included.</span>
                  </div>

                  <Button
                    href="/medical-alert/quote"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-xs"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Get a Quote for {system.name}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F4E7]/80 border border-[#EAE5D8] text-[#0D1B2A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
              Need help deciding which system is best for you or a loved one?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Submit your request through our quick 1-minute quote form. A dedicated senior safety specialist will walk you through each option and help you pick the best fit.
            </p>
          </div>
          <Button
            href="/medical-alert/quote"
            size="md"
            variant="primary"
            className="shrink-0 text-xs sm:text-sm font-semibold rounded-full"
          >
            Get a Free Quote &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
