'use client';

import React, { useState } from 'react';
import { Search, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '@/lib/constants/faqData';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'medicare_billing', label: 'Medicare & $0 Billing' },
    { id: 'testing_process', label: 'Swab & Lab Process' },
    { id: 'clinical_science', label: 'Clinical Accuracy' },
    { id: 'physician_network', label: 'Physician Reviews' },
    { id: 'privacy_security', label: 'HIPAA & Privacy' },
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Help Center &amp; Knowledge Base
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Everything you need to know about Medicare Part B coverage, physician reviews, at-home collection kits, and patient privacy.
          </p>
        </div>

        {/* Search Input Card */}
        <Card className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. Medicare, buccal swab, PGx, billing, surprise bill)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-sm font-medium text-slate-900 bg-[#FDFCF7]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0D1B2A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0D1B2A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Card>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            <Accordion className="space-y-3.5">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  title={faq.question}
                  badge={faq.badge}
                >
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Card className="p-8 text-center bg-white border border-slate-200 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="font-bold text-slate-800">No questions matched your search</h3>
              <p className="text-xs text-slate-500">
                Try searching for broader terms like &quot;Medicare&quot;, &quot;cost&quot;, or &quot;shipping&quot;.
              </p>
            </Card>
          )}
        </div>

        {/* Support Box */}
        <div className="p-8 rounded-3xl bg-[#F7F4E7]/90 border border-[#EAE5D8] text-[#0D1B2A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
              Still have questions? Speak with a Patient Concierge.
            </h3>
            <p className="text-xs text-slate-600">
              Our clinical care specialists are available {SITE_CONFIG.supportHours}.
            </p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneFormatted}`}
            className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0F766E] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md shrink-0 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
