'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Info,
  Layers,
  Award,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DME_PRODUCTS } from '@/lib/constants/dmeData';
import { cn } from '@/lib/utils/cn';

export function DmeProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 5 Braces' },
    { id: 'elbow-brace', label: 'Elbow Braces' },
    { id: 'wrist-brace', label: 'Wrist Braces' },
    { id: 'knee-brace', label: 'Knee Braces' },
    { id: 'back-brace', label: 'Back Braces' },
    { id: 'shoulder-brace', label: 'Shoulder Braces' },
  ];

  const getProductIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#0D9488]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      default:
        return <Activity className="w-5 h-5 text-[#0D9488]" />;
    }
  };

  const filteredProducts =
    activeCategory === 'all'
      ? DME_PRODUCTS
      : DME_PRODUCTS.filter((p) => p.id === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Orthopedic Braces &amp; Supports
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            DME Products We Provide
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Engineered to restore mobility, alleviate severe joint pain, and provide stabilization. Prescribed by state-licensed physicians and covered under Medicare Part B when medically necessary.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
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

        {/* Detailed Product Cards Grid */}
        <div className="space-y-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={product.anchorId}
              className="scroll-mt-24"
            >
              <Card className="p-4 sm:p-6 lg:p-10 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical hover:shadow-xl transition-all duration-200 space-y-8">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      {getProductIcon(product.iconName)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider">
                          DME Orthopedic Category
                        </span>
                        <Badge variant="emerald" size="sm">
                          Insurance Review
                        </Badge>
                      </div>
                      <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-stretch lg:self-auto">
                    <Button
                      href="/eligibility-checker?source=dme"
                      variant="primary"
                      size="md"
                      className="w-full lg:w-auto text-xs sm:text-sm font-semibold rounded-full shadow-xs whitespace-nowrap"
                    >
                      Check Eligibility &rarr;
                    </Button>
                  </div>
                </div>

                {/* 2-Column Deep Detail Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: What It Is & How It Supports */}
                  <div className="space-y-6">
                    {/* What It Is */}
                    <div className="space-y-2">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <Info className="w-4 h-4 text-[#0D9488]" />
                        <span>What It Is</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                        {product.whatIsIt}
                      </p>
                    </div>

                    {/* How It Provides Support & Stability */}
                    <div className="space-y-2 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>Support &amp; Joint Stability</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-body">
                        {product.supportAndStability}
                      </p>
                    </div>

                    {/* Key Engineering Features */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Clinical &amp; Engineering Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.keyFeatures.map((feat) => (
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

                  {/* Right Column: Medical Situations & Patient Benefits */}
                  <div className="space-y-6">
                    {/* Product Image (public/) */}
                    {product.imageSrc && (
                      <div className="w-full h-44 sm:h-52 lg:h-60 rounded-2xl overflow-hidden bg-white border border-slate-200/70 flex items-center justify-center">
                        <img
                          src={`/${encodeURIComponent(product.imageSrc)}`}
                          alt={product.name}
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                    )}
                    {/* Common Medical Situations / Indications */}
                    <div className="space-y-2.5">
                      <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0D1B2A] flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-[#0D9488]" />
                        <span>Common Medical Indications</span>
                      </h4>
                      <div className="space-y-2">
                        {product.medicalIndications.map((indication) => (
                          <div
                            key={indication}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-white border border-slate-200/70"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2 shrink-0" />
                            <span>{indication}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 'Potential Benefits for Patients' removed per request */}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div className="flex items-start gap-2 text-xs text-slate-500 text-center lg:text-left">
                    <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                    <span>State-licensed physician review &amp; pre-qualification evaluation included.</span>
                  </div>

                  <Button
                    href="/eligibility-checker?source=dme"
                    variant="primary"
                    size="md"
                    className="w-full lg:w-auto text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-xs"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Check Eligibility for {product.name.split(' ')[1] || 'Braces'}
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
              Need help determining which brace matches your medical condition?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Submit your information through our quick 2-minute pre-qualification form. A clinical coordinator and licensed doctor will assess your symptoms and verify Medicare coverage.
            </p>
          </div>
          <Button
            href="/eligibility-checker?source=dme"
            size="md"
            variant="primary"
            className="shrink-0 text-xs sm:text-sm font-semibold rounded-full"
          >
            Start Pre-Qualification &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
