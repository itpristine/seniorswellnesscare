import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Dna, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-cyan-50 text-brand-cyan-600 flex items-center justify-center mx-auto shadow-md">
          <Dna className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-brand-cyan-600 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="font-display font-extrabold text-3xl text-brand-navy-950">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or clinical resource you requested does not exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return to Homepage
          </Button>
          <Button href="/programs" variant="outline" size="md">
            View Clinical Programs
          </Button>
        </div>
      </div>
    </div>
  );
}
