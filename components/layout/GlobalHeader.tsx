'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShieldCheck,
  Award,
  Phone,
  Search,
  ChevronDown,
  Menu,
  X,
  Dna,
  HeartPulse,
  Activity,
  Radio,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { DIAGNOSTIC_PROGRAMS } from '@/lib/constants/programsData';
import { DME_PRODUCTS } from '@/lib/constants/dmeData';
import { MEDICAL_ALERT_SYSTEMS } from '@/lib/constants/medicalAlertData';
import { cn } from '@/lib/utils/cn';

export function GlobalHeader() {
  const pathname = usePathname();
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [pathname]);

  const coreServices = [
    {
      title: 'Genetic Testing & Molecular Diagnostics',
      href: '/immunodeficiency',
      desc: 'Physician-ordered preventive genetic testing & 9 CLIA diagnostic panels covered 100% by Medicare Part B.',
      badge: '100% Covered ($0)',
      icon: <Dna className="w-5 h-5 text-[#0D9488]" />,
      active: pathname.startsWith('/immunodeficiency') || pathname.startsWith('/programs'),
    },
    {
      title: 'DME',
      href: '/dme',
      desc: 'Medicare-approved durable medical equipment, orthopedic bracing, mobility aids & continuous glucose monitors.',
      badge: 'Medicare Part B',
      icon: <HeartPulse className="w-5 h-5 text-amber-600" />,
      active: pathname.startsWith('/dme'),
    },
    {
      title: 'Medical Alert',
      href: '/medical-alert',
      desc: '24/7 senior emergency response, automatic fall detection & nationwide GPS mobile safety pendants.',
      badge: '24/7 US Response',
      icon: <Radio className="w-5 h-5 text-rose-500" />,
      active: pathname.startsWith('/medical-alert'),
    },
  ];

  const matchesSearch = (value: string) =>
    !searchQuery.trim() || value.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredCoreServices = coreServices.filter((service) =>
    matchesSearch(`${service.title} ${service.desc} ${service.badge}`)
  );
  const filteredDiagnosticPrograms = DIAGNOSTIC_PROGRAMS.slice(0, 4).filter((program) =>
    matchesSearch(`${program.name} ${program.clinicalCode} ${program.genesAnalyzed.map((gene) => gene.symbol).join(' ')}`)
    || matchesSearch('Genetic Testing Molecular Diagnostics')
  );
  const filteredDmeProducts = DME_PRODUCTS.filter((product) =>
    matchesSearch(`${product.name} ${product.tagline} ${product.badge}`)
    || matchesSearch('DME Durable Medical Equipment')
  );
  const filteredMedicalAlertSystems = MEDICAL_ALERT_SYSTEMS.filter((system) =>
    matchesSearch(`${system.name} ${system.tagline} ${system.badge}`)
    || matchesSearch('Medical Alert')
  );

  const isCoreServiceActive =
    pathname.startsWith('/immunodeficiency') ||
    pathname.startsWith('/dme') ||
    pathname.startsWith('/medical-alert') ||
    pathname.startsWith('/programs');

  return (
    <>
      {/* ── TOP UTILITY STRIP ── */}
      <div className="bg-[#0D1B2A] text-slate-200 text-xs py-1.5 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left Badges */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>CAP &amp; CLIA Accredited • Medicare Partner</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>
                Support: <strong className="text-white font-semibold">{SITE_CONFIG.phone}</strong>
              </span>
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-300 px-3 py-1 rounded-full transition-colors border border-slate-700 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Search Services &amp; Tests...</span>
              <kbd className="bg-slate-900 text-slate-400 px-1.5 py-0.5 text-[10px] rounded border border-slate-700 font-mono">
                ⌘K
              </kbd>
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/immunodeficiency"
                className="flex items-center gap-1 hover:text-white transition-colors text-slate-300"
              >
                <Dna className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Genetic Test</span>
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/dme"
                className="flex items-center gap-1 hover:text-white transition-colors text-slate-300"
              >
                <HeartPulse className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>DME</span>
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/medical-alert"
                className="flex items-center gap-1 hover:text-white transition-colors text-slate-300"
              >
                <Radio className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Medical Alert</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN GLOBAL NAVBAR ── */}
      <header className="sticky top-0 z-40 w-full bg-[#FDFCF7]/95 backdrop-blur-md border-b border-[#EAE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between">
          {/* Main Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FDFCF7] text-emerald-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#EAE5D8] overflow-hidden">
              <img
                src="/logo.png"
                alt="Senior Wellness Care logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <img
                src="/Name.png"
                alt="Senior Wellness Care name"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-800">
            {/* Primary Core Services Dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={cn(
                  'flex items-center gap-1.5 py-2 hover:text-[#0D9488] transition-colors font-semibold cursor-pointer',
                  isCoreServiceActive ? 'text-[#0D9488]' : 'text-slate-800'
                )}
              >
                <span>Core Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[min(520px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-5 space-y-3 animate-fade-in z-50">
                  <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Core Services
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Medicare Covered
                    </span>
                  </div>

                  {/* ONLY THE 3 CORE SERVICE OPTIONS */}
                  <div className="space-y-2">
                    {coreServices.map((srv) => (
                      <Link
                        key={srv.title}
                        href={srv.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={cn(
                          'flex items-start gap-3.5 p-3 rounded-2xl border transition-all group',
                          srv.active
                            ? 'bg-teal-50/50 border-[#0D9488]/40 ring-1 ring-[#0D9488]/20'
                            : 'hover:bg-[#FDFCF7] border-transparent hover:border-slate-200'
                        )}
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          {srv.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-serif-heading font-bold text-sm text-[#0D1B2A] group-hover:text-[#0D9488] transition-colors">
                              {srv.title}
                            </span>
                            <span className="text-[10px] font-bold text-[#0D9488] bg-teal-50 px-2 py-0.5 rounded-full shrink-0">
                              {srv.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                            {srv.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/about-us"
              className={cn(
                'py-2 hover:text-[#0D9488] transition-colors',
                pathname === '/about-us' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={cn(
                'py-2 hover:text-[#0D9488] transition-colors',
                pathname === '/contact' ? 'text-[#0D9488] font-bold' : 'text-slate-800'
              )}
            >
              Contact
            </Link>
          </nav>



          {/* Mobile Menu & Search Buttons */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-slate-700 hover:text-[#0D9488] hover:bg-slate-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#0D1B2A] rounded-xl hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── SEARCH MODAL ── */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSearchModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-5 h-5 text-[#0D9488]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search Genetic Testing, DME, or Medical Alert..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm font-medium text-slate-900 focus:outline-none placeholder-slate-400"
                />
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Links / Search Results */}
            <div className="max-h-72 overflow-y-auto space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                Core Services
              </div>
              {filteredCoreServices.map((srv) => (
                <Link
                  key={srv.title}
                  href={srv.href}
                  onClick={() => setSearchModalOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                      {srv.icon}
                    </div>
                    <div>
                      <span className="font-serif-heading font-bold text-sm text-[#0D1B2A] group-hover:text-[#0D9488] block">
                        {srv.title}
                      </span>
                      <span className="text-xs text-slate-500">{srv.badge}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D9488] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}

              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 pt-2">
                Diagnostic Programs (Genetic Testing &amp; Molecular Diagnostics)
              </div>
              {filteredDiagnosticPrograms.map((prog) => (
                <Link
                  key={prog.slug}
                  href={`/programs/${prog.slug}`}
                  onClick={() => setSearchModalOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#0D9488]" />
                    <span className="text-xs font-semibold text-[#0D1B2A] group-hover:text-[#0D9488]">
                      {prog.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{prog.clinicalCode}</span>
                </Link>
              ))}

              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 pt-2">
                DME Equipment
              </div>
              {filteredDmeProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/dme#${product.anchorId}`}
                  onClick={() => setSearchModalOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-semibold text-[#0D1B2A] group-hover:text-[#0D9488]">
                      {product.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">DME</span>
                </Link>
              ))}

              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 pt-2">
                Medical Alert Systems
              </div>
              {filteredMedicalAlertSystems.map((system) => (
                <Link
                  key={system.slug}
                  href={`/medical-alert#${system.anchorId}`}
                  onClick={() => setSearchModalOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#FDFCF7] border border-transparent hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-semibold text-[#0D1B2A] group-hover:text-[#0D9488]">
                      {system.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">Medical Alert</span>
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>
                Press <kbd className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-600">ESC</kbd> to close
              </span>
              <span>All Services Covered by Medicare</span>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-200">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FDFCF7] text-emerald-400 flex items-center justify-center shadow-md border border-[#EAE5D8] overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="Senior Wellness Care logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src="/Name.png"
                    alt="Senior Wellness Care name"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                  Core Services
                </div>
                <Link
                  href="/immunodeficiency"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
                >
                  <span className="flex items-center gap-2">
                    <Dna className="w-4 h-4 text-[#0D9488]" />
                    Immunodeficiency
                  </span>
                </Link>

                <Link
                  href="/dme"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
                >
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-amber-600" />
                    DME
                  </span>
                </Link>

                <Link
                  href="/medical-alert"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
                >
                  <span className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-rose-500" />
                    Medical Alert
                  </span>
                </Link>

                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-3 pb-1">
                  Navigation
                </div>

                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
                >
                  <span>About Us</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-[#0D1B2A] hover:bg-[#FDFCF7] hover:text-[#0D9488]"
                >
                  <span>Contact</span>
                </Link>
              </nav>
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-slate-100">
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
      )}
    </>
  );
}
