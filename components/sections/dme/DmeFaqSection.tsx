'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DME_FAQS } from '@/lib/constants/dmeData';

export function DmeFaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Common Questions
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Frequently Asked Questions About DME
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Get clear, transparent answers regarding Medicare coverage, doctor prescriptions, and how to receive your orthopedic braces.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="space-y-3.5">
          {DME_FAQS.map((faq, index) => (
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

        {/* Action Prompt */}
        <div className="text-center pt-2">
          <Button
            href="/eligibility-checker?source=dme"
            variant="primary"
            size="lg"
            className="text-xs sm:text-sm font-semibold rounded-full shadow-md"
          >
            Have More Questions? Check Your Eligibility &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
