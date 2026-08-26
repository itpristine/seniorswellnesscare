'use client';

import React, { useEffect } from 'react';
import { X, Radio } from 'lucide-react';
import { MedicalAlertQuoteForm } from '@/components/forms/MedicalAlertQuoteForm';

interface MedicalAlertQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHeading?: string;
  defaultSubheading?: string;
}

export function MedicalAlertQuoteModal({
  isOpen,
  onClose,
  defaultHeading = 'Get Your Medical Alert Quote',
  defaultSubheading = 'Complete our quick 1-minute request form below. A senior safety specialist will prepare a customized quote and assist with selecting the best system.',
}: MedicalAlertQuoteModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 sm:p-8 md:p-10 my-8 animate-fade-in overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Form */}
        <MedicalAlertQuoteForm
          heading={defaultHeading}
          subheading={defaultSubheading}
        />
      </div>
    </div>
  );
}
