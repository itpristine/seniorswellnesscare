'use client';

import React, { useState } from 'react';
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Phone,
  AlertCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SpecimenOrderRecord } from '@/types/tracking';

export default function TrackKitPage() {
  const [query, setQuery] = useState('AEG-78942');
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<SpecimenOrderRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/track/${encodeURIComponent(query)}`);
      if (res.ok) {
        const data = await res.json();
        setOrder(data);
      } else {
        setOrder(null);
      }
    } catch (e) {
      setOrder(null);
    } finally {
      setLoading(false);
      setHasSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="teal" size="md">
            Self-Service Specimen Tracking
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Track Your Swab Kit &amp; Lab Progress
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Enter your 8-digit order reference number or mobile phone number to view real-time shipping and laboratory sequencing milestones.
          </p>
        </div>

        {/* Search Box */}
        <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Reference (e.g. AEG-78942) or Phone Number"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-sm font-medium text-slate-900 bg-[#FDFCF7]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              variant="primary"
              isLoading={loading}
              className="shrink-0 text-xs sm:text-sm font-semibold rounded-full shadow-md"
            >
              Track Order Status &rarr;
            </Button>
          </form>
        </Card>

        {/* Results Area */}
        {order && (
          <div className="space-y-6 animate-fade-in">
            {/* Status Summary Banner */}
            <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#0D1B2A]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="emerald" size="sm" dot>
                    Active Processing
                  </Badge>
                  <span className="font-mono text-xs font-bold text-[#0D9488]">
                    {order.orderId}
                  </span>
                </div>
                <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A]">
                  {order.kitProgramName}
                </h3>
                <p className="text-xs text-slate-500">
                  Recipient: <strong className="text-[#0D1B2A]">{order.patientName}</strong> • Ordered on {order.orderDate}
                </p>
              </div>

              <div className="bg-[#FDFCF7] border border-slate-200 p-3.5 rounded-2xl text-right">
                <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                  Carrier Tracking ({order.carrier})
                </span>
                <a
                  href={order.carrierTrackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0D9488] hover:underline mt-0.5"
                >
                  <span>{order.trackingNumber}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>

            {/* Stepper Timeline */}
            <Card className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-6">
              <h3 className="font-serif-heading font-bold text-lg text-[#0D1B2A] border-b border-slate-100 pb-3">
                Laboratory Milestone Timeline
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200 before:z-0">
                {order.steps.map((step) => (
                  <div key={step.stepIndex} className="relative z-10 flex items-start gap-4">
                    {/* Circle Status Icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 font-bold text-xs shadow-xs ${
                        step.completed
                          ? 'bg-[#0D9488] border-[#0D9488] text-white'
                          : step.active
                          ? 'bg-amber-500 border-amber-500 text-white animate-pulse'
                          : 'bg-white border-slate-300 text-slate-400'
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        step.stepIndex
                      )}
                    </div>

                    <div className="space-y-0.5 flex-1 pt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4
                          className={`font-bold text-sm ${
                            step.completed || step.active
                              ? 'text-[#0D1B2A] font-serif-heading'
                              : 'text-slate-500'
                          }`}
                        >
                          {step.title}
                        </h4>
                        {step.timestamp && (
                          <span className="text-xs font-semibold text-slate-500">
                            {step.timestamp}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {hasSearched && !order && !loading && (
          <Card className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="font-serif-heading font-bold text-lg text-slate-900">
              No Matching Order Found
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              We couldn’t find an active swab kit matching reference &quot;{query}&quot;. Please double-check your confirmation number or contact our patient support desk.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
