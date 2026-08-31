'use client';

import React from 'react';
import Link from 'next/link';
import { X, ChevronRight, Phone, ShieldCheck, Dna } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-200">
        <div className="space-y-6">
          {/* Header in Drawer */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FDFCF7] flex items-center justify-center border border-[#EAE5D8] overflow-hidden">
                <img src="/logo.png" alt="Seniors Wellness Care logo" className="w-full h-full object-cover" />
              </div>
              <img src="/Name.png" alt="Seniors Wellness Care" className="h-7 w-auto object-contain" />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/programs"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>Clinical Programs (9 Panels)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/how-it-works"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/medicare-eligibility"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50/60"
            >
              <span>Medicare Part B Coverage</span>
              <ChevronRight className="w-4 h-4 text-emerald-600" />
            </Link>

            <Link
              href="/providers"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>For Healthcare Providers</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/track-kit"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>Track Swab Kit Status</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/resources/sample-reports"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>Sample Genetic Reports</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/resources/faq"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
            >
              <span>FAQ &amp; Knowledge Base</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Button
            href="/eligibility-checker"
            size="lg"
            variant="primary"
            className="w-full justify-center text-xs sm:text-sm font-semibold rounded-full shadow-md"
            onClick={onClose}
          >
            Check Eligibility &rarr;
          </Button>

          <a
            href={`tel:${SITE_CONFIG.phoneFormatted}`}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0D9488] p-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
