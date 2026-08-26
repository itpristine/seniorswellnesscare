'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto shadow-md">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display font-extrabold text-2xl text-brand-navy-950">
            Something went wrong
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            An unexpected error occurred while loading this healthcare portal. Please try again or return home.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button onClick={() => reset()} variant="primary" size="md">
            Try Again
          </Button>
          <Button href="/" variant="outline" size="md">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
