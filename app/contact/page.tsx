'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Stethoscope,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('eligibility');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <Badge variant="teal" size="md">
            Patient &amp; Provider Concierge
          </Badge>
          <h1 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#0D1B2A] tracking-tight">
            We Are Here to Help
          </h1>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            Have a question about Medicare Part B eligibility, your at-home swab kit, or clinical reports? Reach out to our dedicated support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 text-[#0D1B2A]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0D9488] font-bold">
                  Direct Telephone Hotline
                </span>
                <h3 className="font-serif-heading font-bold text-2xl text-[#0D1B2A] mt-1">
                  {SITE_CONFIG.phone}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Toll-free • Available {SITE_CONFIG.supportHours}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block">General Inquiries</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#0D1B2A] font-semibold hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Stethoscope className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block">Physician &amp; Provider Desk</span>
                    <a href={`mailto:${SITE_CONFIG.providerEmail}`} className="text-[#0D1B2A] font-semibold hover:underline">
                      {SITE_CONFIG.providerEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block">Headquarters &amp; Laboratory Operations</span>
                    <span className="text-[#0D1B2A]">{SITE_CONFIG.address}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-clinical space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-[#0D1B2A]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Patient Privacy Assurance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All communications are protected under federal HIPAA privacy regulations. We never sell your personal information.
              </p>
            </Card>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xl space-y-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif-heading font-bold text-xl text-[#0D1B2A]">
                    Send Us a Secure Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Harold Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="harold@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Topic *
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                      >
                        <option value="eligibility">Medicare Eligibility &amp; $0 Cost</option>
                        <option value="tracking">Swab Kit Tracking Status</option>
                        <option value="provider">Healthcare Provider Inquiry</option>
                        <option value="billing">Billing &amp; Insurance Verification</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can our care team assist you today?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full justify-center text-xs sm:text-sm font-semibold rounded-full shadow-md"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Secure Message &rarr;
                  </Button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#0D9488] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif-heading font-bold text-2xl text-[#0D1B2A]">
                    Message Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {name}. A clinical care coordinator will review your inquiry and contact you within 1 business day.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="text-xs rounded-full"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
