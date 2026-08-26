import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Radio,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Sparkles,
  ArrowRight,
  BellRing,
  MapPin,
  Heart,
  Users,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { UnifiedLeadForm } from '@/components/forms/UnifiedLeadForm';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export const metadata: Metadata = {
  title: '24/7 Medical Alert Systems | Senior Fall Detection & GPS Emergency Response',
  description:
    'Instant 24/7 emergency response, automatic fall detection, and nationwide GPS mobile pendants. Medicare Advantage & HSA/FSA eligible.',
};

export default function MedicalAlertPage() {
  const alertDevices = [
    {
      title: 'On-the-Go Mobile GPS Pendant',
      desc: 'Compact, lightweight mobile alert with built-in 4G LTE cellular connectivity, precise GPS tracking, and automatic fall detection anywhere nationwide.',
      badge: 'Most Popular',
      features: [
        'Automatic Built-In Fall Detection Sensor',
        'Nationwide 4G LTE Cellular Coverage (No Landline)',
        'Pinpoint GPS & Wi-Fi Location Tracking',
        'Showerproof & Up to 5 Days Battery on Single Charge',
      ],
    },
    {
      title: 'In-Home Cellular Smart Hub',
      desc: 'High-volume two-way speakerphone station designed for comprehensive home coverage up to 1,000 feet in any direction.',
      badge: 'Whole Home Protection',
      features: [
        'Ultra-Clear Two-Way Voice Communication',
        '1,000+ Foot Signal Range (Covers House & Yard)',
        '32-Hour Backup Battery for Power Outages',
        'Includes Wearable Waterproof SOS Wristband / Neck Pendant',
      ],
    },
    {
      title: 'Active Senior SOS Smartwatch',
      desc: 'Discreet, modern smartwatch with built-in emergency SOS calling, real-time heart rate monitoring, and daily step tracking.',
      badge: 'Modern & Discreet',
      features: [
        'One-Touch Dedicated Red SOS Button',
        'Real-Time Heart Rate & Activity Step Tracking',
        'Digital Time, Weather & Medication Reminders',
        'Companion Smartphone App for Family & Caregivers',
      ],
    },
  ];

  const alertFaqs = [
    {
      question: 'How does automatic fall detection work?',
      answer:
        'Our medical alert devices use advanced multi-axis accelerometers and proprietary algorithms to sense the sudden acceleration and impact of a fall. If a fall is detected, the device automatically dials the 24/7 emergency monitoring center even if you are unable to press the SOS button.',
    },
    {
      question: 'Does Medicare cover Medical Alert systems?',
      answer:
        'While Original Medicare Part B does not typically cover medical alert systems directly, many Medicare Advantage (Part C) plans offer special supplemental benefits, Over-the-Counter (OTC) allowances, or wellness credits that reimburse part or all of the system cost. Our intake team will check your specific plan benefits.',
    },
    {
      question: 'Do I need a landline telephone?',
      answer:
        'No. All AegisGenomics medical alert devices operate on dedicated built-in 4G LTE cellular networks. You do not need a landline or home Wi-Fi to use our systems.',
    },
    {
      question: 'What happens when the SOS button is pressed?',
      answer:
        'Within seconds, a certified US-based emergency response operator answers through the two-way speaker on your device. The operator accesses your medical profile, assesses the situation, coordinates local EMS/first responders if needed, and immediately notifies your emergency contacts and family members via SMS and phone.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7]">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#FDFCF7] via-[#F7F4E7]/60 to-[#FDFCF7] border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-rose-800 shadow-xs">
              <Radio className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>24/7 US Emergency Response • Senior Fall Protection</span>
            </div>

            <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] leading-[1.15] tracking-tight">
              24/7 Medical Alert &amp;{' '}
              <span className="highlight-accent text-[#0D9488]">Automatic Fall Detection</span>{' '}
              for Complete Peace of Mind.
            </h1>

            <p className="font-sans-body text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Stay safe, active, and independent at home and on the go. Instant two-way voice communication with certified emergency dispatchers, nationwide 4G LTE GPS tracking, and automatic fall detection.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="/eligibility-checker"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-7 py-4 rounded-full shadow-lg shadow-teal-700/20"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Check System Eligibility &rarr;
              </Button>

              <a
                href="#devices"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-6 py-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-[#0D1B2A] transition-colors"
              >
                View Alert Devices &rarr;
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium text-slate-600 border-t border-slate-200/80">
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

          <div className="lg:col-span-5 flex justify-center w-full">
            <Card className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                    Senior Safety Pre-Check
                  </h3>
                  <p className="text-xs text-slate-500">Fast benefit check • No obligation</p>
                </div>
                <Badge variant="rose" size="sm">
                  24/7 Live
                </Badge>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50/50 border border-rose-200/60">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Instant two-way voice connection in &lt;15 seconds</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50/50 border border-rose-200/60">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Auto-detects falls even if you cannot press the button</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50/50 border border-rose-200/60">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Medicare Advantage &amp; HSA/FSA reimbursement support</span>
                </div>
              </div>

              <Link
                href="/eligibility-checker"
                className="flex items-center justify-center gap-2 w-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all mt-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-200" />
                Check Available Subsidies &rarr;
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ── DEVICES SHOWCASE ── */}
      <section id="devices" className="py-16 sm:py-20 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="teal" size="md">
              Device Options
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Choose the Right Safety System for Your Lifestyle
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600">
              Every system includes 24/7 connectivity to our US-based emergency dispatch network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alertDevices.map((dev) => (
              <Card
                key={dev.title}
                className="p-7 sm:p-8 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                      {dev.title}
                    </h3>
                    <Badge variant="rose" size="sm">
                      {dev.badge}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{dev.desc}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Included Capabilities:
                    </span>
                    {dev.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <Button
                    href="/eligibility-checker"
                    variant="primary"
                    size="md"
                    className="w-full justify-center text-xs font-semibold rounded-full shadow-xs"
                  >
                    Request System &rarr;
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIFIED LEAD FORM SECTION ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="rose" size="md">
              Safety Intake Portal
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
              Request Your 24/7 Medical Alert System
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Submit your contact details to check Medicare Advantage allowances, HSA/FSA eligibility, and arrange direct delivery.
            </p>
          </div>

          <Card className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
            <UnifiedLeadForm
              heading="Check Your Medical Alert Eligibility"
              subheading="Fill out the form below. A senior safety specialist will verify your insurance subsidies and coordinate your device."
            />
          </Card>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EAE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="teal" size="md">
              Medical Alert FAQs
            </Badge>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A]">
              Frequently Asked Questions About Senior Safety
            </h2>
          </div>

          <Accordion>
            {alertFaqs.map((faq, i) => (
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
