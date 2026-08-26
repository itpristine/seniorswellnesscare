import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  Truck,
  FileCheck,
  Stethoscope,
  Phone,
  Sparkles,
  ArrowRight,
  Package,
  Activity,
  UserCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { UnifiedLeadForm } from '@/components/forms/UnifiedLeadForm';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Durable Medical Equipment (DME) | Medicare Part B Covered Medical Supplies',
  description:
    'Physician-prescribed orthopedic braces, mobility aids, respiratory care, and continuous glucose monitors (CGM) covered 80% to 100% by Medicare Part B.',
};

export default function DMEPage() {
  const dmeCategories = [
    {
      title: 'Orthopedic Bracing & Supports',
      desc: 'Rigid and semi-rigid therapeutic braces engineered to alleviate joint pain, stabilize osteoarthritis, and accelerate recovery.',
      badge: 'Pain Relief & Stability',
      items: [
        'Lumbar-Sacral Spinal Braces (LSO) for lower back pain',
        'Unloader Knee Braces for bone-on-bone osteoarthritis',
        'Cervical Thoracic Orthoses & Posture Stabilizers',
        'Ankle-Foot Orthoses (AFO) for gait support and drop foot',
      ],
    },
    {
      title: 'Mobility Assistance Equipment',
      desc: 'Premium assistive mobility devices that restore personal independence and reduce fall risks in the home and outdoors.',
      badge: 'Mobility & Freedom',
      items: [
        'Lightweight Ergonomic Transport Wheelchairs',
        'Four-Wheel Upright Rollators with Padded Seats & Handbrakes',
        'Heavy-Duty Bariatric Walkers and Canes',
        'Bedside Safety Assist Rails & Transfer Handles',
      ],
    },
    {
      title: 'Respiratory & Sleep Therapy',
      desc: 'Advanced breathing devices prescribed for Obstructive Sleep Apnea (OSA), COPD, and chronic respiratory insufficiency.',
      badge: 'Breathe Easy',
      items: [
        'Auto-CPAP and BiPAP Therapy Systems with Humidifiers',
        'Ultrasonic Home Nebulizer Compressors & Tubing Kits',
        'Portable Oxygen Concentrators (POC) with Pulse Dose',
        'High-Efficiency Filter Replacement Subscriptions',
      ],
    },
    {
      title: 'Diabetic Supplies & Continuous Monitoring',
      desc: 'Pain-free Continuous Glucose Monitors (CGM) eliminating daily fingersticks, plus therapeutic diabetic footwear.',
      badge: 'Daily Blood Sugar Clarity',
      items: [
        'Continuous Glucose Monitors (CGM Sensors & Transmitters)',
        'Real-Time High/Low Glucose Alerts to Mobile Devices',
        'Medicare-Approved Therapeutic Diabetic Footwear',
        'Custom Heat-Moldable Diabetic Insoles & Pressure Relief',
      ],
    },
  ];

  const dmeFaqs = [
    {
      question: 'Does Medicare Part B cover Durable Medical Equipment (DME)?',
      answer:
        'Yes. Medicare Part B covers medically necessary durable medical equipment prescribed by a licensed doctor. Medicare typically pays 80% of the approved amount, and supplemental Medigap or secondary insurance usually pays the remaining 20%, resulting in $0 out-of-pocket for qualifying beneficiaries.',
    },
    {
      question: 'How do I get a prescription for a back brace or mobility walker?',
      answer:
        'AegisGenomics coordinates directly with your existing primary care physician or matches you with a state-licensed telehealth clinician who can evaluate your medical indications and write the required digital prescription.',
    },
    {
      question: 'Is shipping and delivery free?',
      answer:
        'Yes. All Medicare-approved DME equipment is shipped directly to your residential address via free expedited shipping with tracking and fitting instructions included.',
    },
    {
      question: 'Can I request multiple pieces of medical equipment at once?',
      answer:
        'Yes. If you require both an orthopedic knee brace and a mobility rollator or continuous glucose monitor, our clinical team will verify eligibility for all indicated equipment under your Medicare benefits.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7]">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-800 shadow-xs">
              <HeartPulse className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Medicare Part B Approved • Home Medical Equipment</span>
            </div>

            <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] leading-[1.15] tracking-tight">
              Medicare-Covered{' '}
              <span className="highlight-accent text-[#0D9488]">Durable Medical Equipment</span>{' '}
              Delivered to Your Door.
            </h1>

            <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Get physician-prescribed back and knee braces, mobility rollators, respiratory CPAP therapy, and continuous glucose monitors (CGM). Covered 80% to 100% by Medicare Part B with zero upfront financial commitment.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="/eligibility-checker"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-7 py-4 rounded-full shadow-lg shadow-teal-700/20"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Check My DME Eligibility ($0)
              </Button>

              <a
                href="#categories"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-6 py-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-[#0D1B2A] transition-colors"
              >
                Browse Equipment Categories &rarr;
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium text-slate-600 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Free White-Glove Home Delivery</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Medicare Part B Billing</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Physician Prescription Included</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center w-full">
            <Card className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                    DME Pre-Qualification
                  </h3>
                  <p className="text-xs text-slate-500">Takes under 2 minutes • No cost check</p>
                </div>
                <Badge variant="emerald" size="sm" dot>
                  $0 Part B
                </Badge>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50/50 border border-teal-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>1. Check eligibility in 60 seconds</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50/50 border border-teal-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>2. State physician reviews medical necessity</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50/50 border border-teal-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>3. Equipment shipped directly to your home</span>
                </div>
              </div>

              <Link
                href="/eligibility-checker"
                className="flex items-center justify-center gap-2 w-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all mt-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-200" />
                Start DME Benefit Check &rarr;
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ── DME CATEGORIES ── */}
      <section id="categories" className="py-16 sm:py-20 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="teal" size="md">
              Equipment Categories
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Medicare-Covered Medical Supplies &amp; Devices
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600">
              Manufactured by FDA-registered suppliers and prescribed to match your specific clinical indications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dmeCategories.map((cat) => (
              <Card
                key={cat.title}
                className="p-7 sm:p-8 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#0D1B2A]">
                    {cat.title}
                  </h3>
                  <Badge variant="teal" size="sm">
                    {cat.badge}
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cat.desc}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Available Under Medicare:
                  </span>
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIFIED FORM SECTION ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="emerald" size="md" dot>
              DME Intake Portal
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Request Your DME Medical Equipment
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Submit your information below to begin benefit verification and physician prescription coordination.
            </p>
          </div>

          <Card className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
            <UnifiedLeadForm
              heading="Check Your DME Equipment Eligibility"
              subheading="Fill out the form below. A clinical care coordinator will verify your Medicare benefits and coordinate your prescription."
            />
          </Card>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="teal" size="md">
              DME Questions &amp; Answers
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A]">
              Frequently Asked Questions About DME
            </h2>
          </div>

          <Accordion>
            {dmeFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} title={faq.question} defaultOpen={i === 0}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
