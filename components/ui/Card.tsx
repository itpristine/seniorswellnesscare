import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'sand' | 'dark' | 'outline';
  interactive?: boolean;
}

export function Card({
  className,
  variant = 'default',
  interactive = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-white border border-slate-200/80 shadow-clinical',
    elevated: 'bg-white border border-slate-200 shadow-elevated',
    sand: 'bg-[#F7F4E7]/60 border border-[#EAE5D8]',
    dark: 'bg-[#0D1B2A] text-white border border-slate-800 shadow-xl',
    outline: 'bg-transparent border-2 border-slate-200 hover:border-slate-300',
  };

  return (
    <div
      className={cn(
        'rounded-3xl transition-all duration-200',
        variantStyles[variant],
        interactive &&
          'hover:shadow-xl hover:border-teal-500/50 hover:-translate-y-0.5 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-8 pb-4', className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-8 pt-0', className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-8 pt-0 flex items-center', className)} {...props} />;
}
