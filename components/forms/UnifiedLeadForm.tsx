'use client';

import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

interface UnifiedLeadFormProps {
  /** Optional heading override. Defaults to "Check Your Eligibility". */
  heading?: string;
  /** Optional sub-heading override. */
  subheading?: string;
}

export function UnifiedLeadForm({
  heading = 'Check Your Genetic Testing Eligibility',
  subheading = 'Complete the form below. A licensed physician will review your profile and help assess whether insurance coverage may support appropriate testing.',
}: UnifiedLeadFormProps) {
  /* ── Field state ── */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [primaryInsurance, setPrimaryInsurance] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [consent, setConsent] = useState(false);

  /* ── UI state ── */
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ── Validation & submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!firstName.trim()) { setErrorMsg('First Name is required.'); return; }
    if (!lastName.trim()) { setErrorMsg('Last Name is required.'); return; }
    if (!email.trim()) { setErrorMsg('Email is required.'); return; }
    if (!phone.trim()) { setErrorMsg('Phone is required.'); return; }
    if (!selectedState) { setErrorMsg('Please select your state.'); return; }
    if (!dateOfBirth) { setErrorMsg('Date of Birth is required.'); return; }
    if (!primaryInsurance) { setErrorMsg('Please select your Primary Insurance.'); return; }
    if (!consent) { setErrorMsg('Please provide consent by checking the consent box below.'); return; }

    setIsSubmitting(true);

    try {
      // Submit via existing eligibility evaluate endpoint.
      const res = await fetch('/api/eligibility/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          state: selectedState,
          dateOfBirth,
          primaryInsurance,
          insuranceType,
          smsConsent: consent,
          // Defaults expected by backend
          conditions: ['general_preventive_wellness'],
          dailyMedsCount: '3_5',
          adverseReactions: false,
          gender: 'female',
          streetAddress: '',
          suite: '',
          city: '',
          zipCode: '',
          isCaregiverApplying: false,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any).message || 'Submission failed. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="text-center space-y-6 py-6">
        <div className="w-16 h-16 rounded-full bg-[#0D9488] text-white flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <Badge variant="emerald" size="lg" dot>
          Submission Received
        </Badge>
        <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
          Thank You, {firstName}!
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Your information has been submitted successfully. A licensed physician in your state will review your profile within <strong>24 hours</strong>, and you will be contacted via the email or phone you provided.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#0D9488]" /> 256-Bit Encrypted
          </span>
          <span>•</span>
          <span>HIPAA Compliant</span>
          <span>•</span>
          <span>No Surprise Billing</span>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
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
              placeholder="e.g. Harold"
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
              placeholder="e.g. Miller"
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
              placeholder="harold@example.com"
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

        {/* Row 3: State / Date of Birth */}
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

        {/* Row 4: Primary Insurance / Insurance Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Primary Insurance *</label>
            <select
              value={primaryInsurance}
              onChange={(e) => setPrimaryInsurance(e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>— Select Insurance —</option>
              <option value="medicare">Medicare</option>
              <option value="medicaid">Medicaid</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Insurance Type</label>
            <select
              value={insuranceType}
              onChange={(e) => setInsuranceType(e.target.value)}
              className={inputClass}
            >
              <option value="">— Select Type (Optional) —</option>
              <option value="ppo">PPO</option>
              <option value="hmo">HMO</option>
            </select>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-[#0D9488] shrink-0 cursor-pointer"
            />
            <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              By submitting, you are giving Express Written Consent authorizing the Wellness Eligibility
              Program team to contact you via voice, SMS, or email at the information provided regarding
              the following: confirming personal information, order submission or updates, and other
              healthcare benefits. The patient understands that these calls or messages may be generated
              by an automated dialer or messaging system. The patient is not required to provide consent
              as a condition of requesting or receiving any products or services. The patient also
              understands that this offer does not qualify them for any prize or reward. You understand
              that you can opt out at any time by replying STOP to the messages.
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
          icon={<ShieldCheck className="w-4 h-4" />}
          iconPosition="left"
          className="w-full justify-center text-sm font-bold rounded-2xl shadow-lg shadow-teal-700/20 bg-gradient-to-r from-[#0D9488] via-[#0F9D8D] to-[#0F766E] hover:shadow-xl hover:shadow-teal-700/30 transition-all duration-200"
        >
          {isSubmitting ? 'Submitting Your Information…' : 'Submit Eligibility Form'}
        </Button>

        {/* Trust footer */}
        <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#0D9488]" /> 256-Bit Encrypted
          </span>
          <span>•</span>
          <span>HIPAA Compliant</span>
          <span>•</span>
          <span>No Surprise Billing</span>
        </div>
      </form>
    </div>
  );
}
