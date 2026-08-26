import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'teal' | 'emerald' | 'navy' | 'slate' | 'amber' | 'rose';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'teal',
  size = 'md',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    cyan: 'bg-teal-50 text-[#0D9488] border border-teal-200/80',
    teal: 'bg-emerald-50 text-[#0D9488] border border-emerald-200/80 font-semibold',
    emerald: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold',
    navy: 'bg-[#0D1B2A] text-slate-200 border border-slate-700',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200/80 font-semibold',
    rose: 'bg-rose-50 text-rose-800 border border-rose-200/80 font-semibold',
  };

  const dotColors = {
    cyan: 'bg-[#0D9488]',
    teal: 'bg-[#0D9488]',
    emerald: 'bg-emerald-500',
    navy: 'bg-emerald-400',
    slate: 'bg-slate-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-xs sm:text-sm px-3.5 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full tracking-wide select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
