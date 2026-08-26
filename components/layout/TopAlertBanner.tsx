'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Phone, UserCheck, Stethoscope, Search } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

interface TopAlertBannerProps {
  onOpenSearch?: () => void;
}

export function TopAlertBanner({ onOpenSearch }: TopAlertBannerProps) {
  return (
    <div className="bg-[#0D1B2A] text-slate-200 text-xs py-1.5 px-4 md:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Badges */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>CAP &amp; CLIA Accredited</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>
              Support: <strong className="text-white font-semibold">{SITE_CONFIG.phone}</strong>
            </span>
          </span>
        </div>

        {/* Right Search Button & User/Provider Links */}
        <div className="flex items-center gap-3 text-[11px] sm:text-xs">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-300 px-3 py-1 rounded-full transition-colors border border-slate-700 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span>Search Gene, Test or Panel...</span>
            <kbd className="bg-slate-900 text-slate-400 px-1.5 py-0.5 text-[10px] rounded border border-slate-700 font-mono">
              ⌘K
            </kbd>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/eligibility-checker"
              className="flex items-center gap-1 hover:text-white transition-colors text-slate-300"
            >
              <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Patients</span>
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/providers"
              className="flex items-center gap-1 hover:text-white transition-colors font-medium text-amber-400"
            >
              <Stethoscope className="w-3.5 h-3.5 shrink-0" />
              <span>Providers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
