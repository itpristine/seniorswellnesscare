'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Badge } from '@/components/ui/Badge';

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn('space-y-3.5', className)}>{children}</div>;
}

export interface AccordionItemProps {
  title: string;
  badge?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({
  title,
  badge,
  defaultOpen = false,
  children,
  className,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-200 overflow-hidden',
        isOpen
          ? 'border-teal-500/40 bg-white shadow-clinical ring-1 ring-[#0D9488]/20'
          : 'border-slate-200/90 bg-white hover:border-slate-300 shadow-xs',
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="font-serif-heading font-bold text-sm sm:text-base text-[#0D1B2A]">
            {title}
          </span>
          {badge && (
            <Badge variant="teal" size="sm" className="w-fit">
              {badge}
            </Badge>
          )}
        </div>

        <div
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
            isOpen ? 'bg-teal-50 text-[#0D9488] rotate-180' : 'bg-slate-100 text-slate-500'
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in font-sans-body">
          {children}
        </div>
      )}
    </div>
  );
}
