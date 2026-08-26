'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'outline' | 'ghost' | 'emerald' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'right',
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none select-none cursor-pointer';

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-xs sm:text-sm px-5 py-2.5 sm:py-3 gap-2 shadow-xs',
      lg: 'text-xs sm:text-sm md:text-base px-6 sm:px-7 py-3.5 sm:py-4 gap-2 font-semibold shadow-md',
    };

    const variantStyles = {
      primary:
        'bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-teal-700/20 hover:shadow-lg hover:shadow-teal-700/30 focus:ring-teal-500 active:scale-[0.98]',
      secondary:
        'border border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/10 focus:ring-teal-500 active:scale-[0.98]',
      light:
        'bg-white text-[#0D1B2A] border border-slate-300 hover:bg-slate-50 focus:ring-slate-400 shadow-xs active:scale-[0.98]',
      outline:
        'border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-[#0D1B2A] focus:ring-slate-400 active:scale-[0.98]',
      ghost:
        'text-slate-600 hover:text-[#0D1B2A] hover:bg-slate-100/80 focus:ring-slate-300',
      emerald:
        'bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-md shadow-teal-700/20 hover:shadow-lg focus:ring-teal-500 active:scale-[0.98]',
      amber:
        'bg-[#D97706] hover:bg-[#B45309] text-white shadow-md focus:ring-amber-500 active:scale-[0.98]',
    };

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && !isLoading && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], 'group', className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], 'group', className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
