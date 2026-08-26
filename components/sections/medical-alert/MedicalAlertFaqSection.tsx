import React from 'react';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MEDICAL_ALERT_FAQS } from '@/lib/constants/medicalAlertData';

export function MedicalAlertFaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#FDFCF7] border-b border-[#EAE5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Common Questions
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Frequently Asked Questions About Medical Alert
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Get clear, transparent answers regarding system features, setup, connectivity, and 24/7 emergency response.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="space-y-3.5">
          {MEDICAL_ALERT_FAQS.map((faq, index) => (
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
            href="/medical-alert/quote"
            variant="primary"
            size="lg"
            className="text-xs sm:text-sm font-semibold rounded-full shadow-md"
          >
            Have More Questions? Get a Free Quote &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
