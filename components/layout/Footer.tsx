import React from 'react';
import Link from 'next/link';
import {
  Dna,
  HeartPulse,
  Radio,
  Phone,
  Mail,
  ShieldCheck,
  Lock,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white border-t border-slate-800">
      {/* Top Credentials Strip (Clean White / Warm Sand surface) */}
      <div className="border-b border-[#EAE5D8] bg-white text-[#0D1B2A] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-[#0D9488] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A]">CLIA &amp; CAP Certified</h5>
              <p className="text-[11px] text-slate-500">High-complexity genomic labs</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A]">100% Physician-Ordered</h5>
              <p className="text-[11px] text-slate-500">Board-certified clinical network</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A]">HIPAA 256-Bit Encrypted</h5>
              <p className="text-[11px] text-slate-500">Strict patient privacy standards</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-[#0D9488] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A]">Medicare Part B Coverage</h5>
              <p className="text-[11px] text-slate-500">For qualifying beneficiaries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0D1B2A] border border-[#EAE5D8]/20 flex items-center justify-center text-teal-300 shadow-md overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Senior Wellness Care logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src="/Name.png"
                alt="Senior Wellness Care name"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            <p className="font-sans-body text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering seniors, families, and healthcare providers with physician-ordered preventive genomics, Medicare-covered Durable Medical Equipment (DME), and 24/7 Medical Alert emergency response.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <a
                href={`tel:${SITE_CONFIG.phoneFormatted}`}
                className="flex items-center gap-2.5 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-white">{SITE_CONFIG.phone}</span>
                <span className="text-xs text-slate-400">({SITE_CONFIG.supportHours})</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 hover:text-teal-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>

            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="font-serif-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#0D9488] pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/immunodeficiency"
                  className="text-slate-300 hover:text-teal-300 transition-colors flex items-center gap-2"
                >
                  <Dna className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Immunodeficiency Test</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dme"
                  className="text-slate-300 hover:text-teal-300 transition-colors flex items-center gap-2"
                >
                  <HeartPulse className="w-3.5 h-3.5 text-amber-500" />
                  <span>DME Medical Equipment</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-alert"
                  className="text-slate-300 hover:text-teal-300 transition-colors flex items-center gap-2"
                >
                  <Radio className="w-3.5 h-3.5 text-rose-400" />
                  <span>24/7 Medical Alert</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-slate-300 hover:text-teal-300 transition-colors block pt-1 text-xs text-slate-400"
                >
                  All 9 Diagnostic Panels &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Patients & Coverage */}
          <div>
            <h4 className="font-serif-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Patients &amp; Coverage
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/eligibility-checker"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Check Eligibility</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  How It Works (4 Steps)
                </Link>
              </li>
              <li>
                <Link
                  href="/medicare-eligibility"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Medicare Part B Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/track-kit"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Track Swab Kit Status
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/sample-reports"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Sample Genetic Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: More Services & Corporate */}
          <div>
            <h4 className="font-serif-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              More Services &amp; About
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/dme"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  DME Medical Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-alert"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  24/7 Medical Alert
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-accreditation"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  CLIA &amp; CAP Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  About Senior Wellness Care
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/articles"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Educational Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-teal-300 transition-colors"
                >
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-300">Important Medical &amp; Regulatory Disclaimer:</p>
          <p>{SITE_CONFIG.legalDisclaimer}</p>
          <p>
            Federal Genetic Information Nondiscrimination Act (GINA) Notice: Genetic testing information is strictly confidential and protected by federal law from health insurance and employment discrimination.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>
            &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy (HIPAA)
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/quality-accreditation" className="hover:text-slate-200 transition-colors">
              Accreditations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
