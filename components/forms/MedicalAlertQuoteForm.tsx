'use client';

import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2, Radio } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0D1B2A] bg-[#FDFCF7] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent placeholder-slate-400 transition';

const labelClass =
  'block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5';

interface MedicalAlertQuoteFormProps {
  heading?: string;
  subheading?: string;
  onSuccess?: () => void;
}

export function MedicalAlertQuoteForm({
  heading = 'Get a Medical Alert Quote',
  subheading = 'Fill out the form below. A senior safety specialist will prepare a customized quote and assist you with selecting the right system.',
  onSuccess,
}: MedicalAlertQuoteFormProps) {
  /* ── Exactly the 7 required fields ── */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [consent, setConsent] = useState(false);

  /* ── UI state ── */
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  /* ── Validation & submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!firstName.trim()) {
      setErrorMsg('First Name is required.');
      return;
    }
    if (!lastName.trim()) {
      setErrorMsg('Last Name is required.');
      return;
    }
    if (!email.trim()) {
      setErrorMsg('Email is required.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Phone is required.');
      return;
    }
    if (!selectedState) {
      setErrorMsg('Please select your state.');
      return;
    }
    if (!dateOfBirth) {
      setErrorMsg('Date of Birth is required.');
      return;
    }
    if (!consent) {
      setErrorMsg('Please provide consent by checking the consent box below.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/medical-alert/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          state: selectedState,
          dateOfBirth,
          consent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Quote request submission failed. Please try again.');
      }

      setConfirmationCode(data.confirmationCode || 'ALR-' + Math.random().toString(36).substring(2, 8).toUpperCase());
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success Screen ── */
  if (submitted) {
    return (
      <div className="text-center space-y-6 py-6">
        <div className="w-16 h-16 rounded-full bg-[#0D9488] text-white flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <Badge variant="emerald" size="lg" dot>
          Quote Request Received
        </Badge>
        <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
          Thank You, {firstName}!
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your Medical Alert quote request has been submitted successfully. A dedicated safety specialist will review your information and contact you via phone or email to present tailored options and pricing.
        </p>
        {confirmationCode && (
          <div className="p-3 bg-teal-50/70 border border-teal-200/80 rounded-2xl max-w-xs mx-auto text-xs text-teal-900 font-medium">
            <span>Reference Code: </span>
            <strong className="font-mono font-bold text-[#0D9488]">{confirmationCode}</strong>
          </div>
        )}
        <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#0D9488]" /> 256-Bit Encrypted
          </span>
          <span>•</span>
          <span>100% Confidential</span>
          <span>•</span>
          <span>No Obligation</span>
        </div>
      </div>
    );
  }

  /* ── Form Body (ONLY 7 Fields) ── */
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center">
            <Radio className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">
            Medical Alert Safety Quote
          </span>
        </div>
        <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
          {heading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{subheading}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row 1: First / Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input
              type="text"
              placeholder="e.g. Eleanor"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
              autoComplete="given-name"
            />
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input
              type="text"
              placeholder="e.g. Vance"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass}
              autoComplete="family-name"
            />
          </div>
        </div>

        {/* Row 2: Email / Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              placeholder="eleanor@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              autoComplete="email"
            />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              placeholder="(555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Row 3: Select Your State / Date of Birth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Select Your State *</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>— Select State —</option>
              {US_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Date of Birth *</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className={inputClass}
              autoComplete="bday"
            />
          </div>
        </div>

        {/* Consent Checkbox with exact verbatim text */}
        <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-[#0D9488] shrink-0 cursor-pointer"
            />
            <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              By submitting, you are giving Express Written Consent authorizing the Wellness Eligibility Program team to contact you via voice, SMS, or email at the information provided regarding the following: confirming personal information, order submission or updates, and other healthcare benefits. The patient understands that these calls or messages may be generated by an automated dialer or messaging system. The patient is not required to provide consent as a condition of requesting or receiving any products or services. The patient also understands that this offer does not qualify them for any prize or reward. You understand that you can opt out at any time by replying STOP to the messages.
            </span>
          </label>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
            {errorMsg}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          variant="primary"
          isLoading={isSubmitting}
          className="w-full justify-center text-sm font-semibold rounded-full shadow-md"
        >
          <ShieldCheck className="w-4 h-4 mr-1.5" />
          {isSubmitting ? 'Requesting Quote…' : 'Get a Quote →'}
        </Button>

        {/* Trust footer */}
        <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#0D9488]" /> 256-Bit Encrypted
          </span>
          <span>•</span>
          <span>100% Confidential</span>
          <span>•</span>
          <span>No Obligation</span>
        </div>
      </form>
    </div>
  );
}
