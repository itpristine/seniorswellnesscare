'use client';

import React from 'react';
import Link from 'next/link';
import { FAQ_DATA } from '@/lib/constants/faqData';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function FaqAccordionSection() {
  const homepageFaqs = FAQ_DATA.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Common Questions
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            Get clear, transparent answers about Medicare Part B coverage, the at-home swab process, and physician reviews.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="space-y-3.5">
          {homepageFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              title={faq.question}
              badge={faq.badge}
              defaultOpen={index === 0}
            >
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>

        {/* View All Button */}
        <div className="text-center pt-2">
          <Button
            href="/resources/faq"
            variant="outline"
            size="lg"
            className="text-xs sm:text-sm font-semibold rounded-full"
          >
            Explore All 20+ Frequently Asked Questions &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
