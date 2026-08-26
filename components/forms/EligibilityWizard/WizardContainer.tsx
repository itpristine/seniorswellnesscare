'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Lock,
  Heart,
  Pill,
  Brain,
  Activity,
  HeartPulse,
  Wind,
  Flame,
  Truck,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Card } from '@/components/ui/Card';
import { EligibilityResult, InsuranceType, ConditionKey } from '@/types/eligibility';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export function WizardContainer() {
  const searchParams = useSearchParams();
  const initialZip = searchParams.get('zip') || '';
  const initialInsurance = (searchParams.get('insurance') as InsuranceType) || 'medicare_part_b';

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<EligibilityResult | null>(null);

  // Form State
  const [insuranceType, setInsuranceType] = useState<InsuranceType>(initialInsurance);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('female');
  const [state, setState] = useState('FL');

  const [conditions, setConditions] = useState<ConditionKey[]>(['cancer_hereditary']);
  const [dailyMedsCount, setDailyMedsCount] = useState<'0_2' | '3_5' | '6_plus'>('3_5');
  const [adverseReactions, setAdverseReactions] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState(initialZip || '33101');
  const [isCaregiverApplying, setIsCaregiverApplying] = useState(false);
  const [smsConsent, setSmsConsent] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }
  };

  const toggleCondition = (key: ConditionKey) => {
    if (key === 'general_preventive_wellness') {
      setConditions(['general_preventive_wellness']);
      return;
    }

    const filtered = conditions.filter((c) => c !== 'general_preventive_wellness');
    if (filtered.includes(key)) {
      const remaining = filtered.filter((c) => c !== key);
      setConditions(remaining.length > 0 ? remaining : ['general_preventive_wellness']);
    } else {
      setConditions([...filtered, key]);
    }
  };

  const handleNext = () => {
    setErrorMsg('');

    if (step === 2) {
      if (!dateOfBirth) {
        setErrorMsg('Please enter your date of birth.');
        return;
      }
    }

    if (step === 3) {
      if (conditions.length === 0) {
        setErrorMsg('Please select at least one health category.');
        return;
      }
    }

    if (step === 5) {
      if (!firstName || !lastName || !email || !phone || !streetAddress || !city || !zipCode) {
        setErrorMsg('Please fill in all required shipping and contact details.');
        return;
      }
      if (!smsConsent) {
        setErrorMsg('Please check the consent box to receive tracking updates.');
        return;
      }
      handleSubmit();
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const payload = {
        insuranceType,
        dateOfBirth,
        gender,
        state,
        conditions,
        dailyMedsCount,
        adverseReactions,
        firstName,
        lastName,
        email,
        phone,
        streetAddress,
        suite,
        city,
        zipCode,
        isCaregiverApplying,
        smsConsent,
      };

      const res = await fetch('/api/eligibility/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Error evaluating eligibility');
      }

      const data: EligibilityResult = await res.json();
      setResult(data);
      setStep(6);
      triggerConfetti();
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please check your entries.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepLabels = ['Coverage', 'Profile', 'Health History', 'Medications', 'Shipping'];

  return (
    <div className="max-w-3xl mx-auto">
      {step < 6 && (
        <div className="mb-8">
          <ProgressBar currentStep={step} totalSteps={5} stepLabels={stepLabels} />
        </div>
      )}

      <Card className="bg-white border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        {/* Step 1: Insurance Type */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="teal" size="sm">
                Step 1 of 5 • Coverage Verification
              </Badge>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A] mt-2">
                What is your primary healthcare insurance?
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 mt-1">
                Select your primary plan to see if you qualify for 100% Medicare Part B coverage ($0 out-of-pocket).
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'medicare_part_b',
                  title: 'Medicare Part B (Original Red, White & Blue Card)',
                  desc: 'Qualifies for $0 out-of-pocket coverage when physician-ordered.',
                  badge: '100% Covered ($0)',
                  badgeVariant: 'emerald' as const,
                },
                {
                  id: 'medicare_advantage',
                  title: 'Medicare Advantage (Part C / HMO / PPO Plan)',
                  desc: 'Covered according to plan benefits with verified pre-authorization.',
                  badge: 'Covered Benefit',
                  badgeVariant: 'teal' as const,
                },
                {
                  id: 'commercial_insurance',
                  title: 'Commercial / Employer Insurance (BCBS, Aetna, UHC, Cigna)',
                  desc: 'Our insurance team verifies your in-network benefits upfront.',
                  badge: 'Commercial',
                  badgeVariant: 'slate' as const,
                },
                {
                  id: 'self_pay',
                  title: 'Self-Pay / Proactive Health Explorer',
                  desc: 'Transparent, all-inclusive flat-rate pricing with physician consult included.',
                  badge: 'Direct Pay',
                  badgeVariant: 'slate' as const,
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setInsuranceType(item.id as InsuranceType)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    insuranceType === item.id
                      ? 'border-[#0D9488] bg-teal-50/50 shadow-xs ring-1 ring-[#0D9488]/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base text-[#0D1B2A]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <Badge variant={item.badgeVariant} size="sm">
                    {item.badge}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                onClick={handleNext}
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-semibold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Continue to Health Profile
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Demographics */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="teal" size="sm">
                Step 2 of 5 • Patient Profile
              </Badge>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A] mt-2">
                Basic Demographics &amp; State
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 mt-1">
                This helps us match you with a board-certified physician licensed in your state.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-slate-900 text-sm font-medium bg-[#FDFCF7]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Biological Sex *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-slate-900 text-sm font-medium bg-[#FDFCF7]"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    State of Residence *
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] text-slate-900 text-sm font-medium bg-[#FDFCF7]"
                  >
                    {US_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                {errorMsg}
              </p>
            )}

            <div className="pt-4 flex items-center justify-between gap-4">
              <Button onClick={handleBack} variant="outline" size="md">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button onClick={handleNext} size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Continue to Medical History
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Medical History */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="teal" size="sm">
                Step 3 of 5 • Clinical Indications
              </Badge>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A] mt-2">
                Personal &amp; Family Medical History
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 mt-1">
                Select any areas where you or an immediate blood relative (parents, siblings, children) have a history. (Select all that apply)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  key: 'cancer_hereditary' as ConditionKey,
                  label: 'Cancer (Breast, Ovarian, Colon, Prostate, etc.)',
                  icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
                },
                {
                  key: 'polypharmacy_medications' as ConditionKey,
                  label: 'Taking Multiple Daily Prescriptions / Side Effects',
                  icon: <Pill className="w-5 h-5 text-[#0D9488]" />,
                },
                {
                  key: 'cardiovascular_early_attack' as ConditionKey,
                  label: 'Heart Attack, Stroke, or High Cholesterol (<55 yrs)',
                  icon: <HeartPulse className="w-5 h-5 text-red-500" />,
                },
                {
                  key: 'neurocognitive_decline' as ConditionKey,
                  label: 'Memory Loss, Alzheimer’s, or Dementia',
                  icon: <Brain className="w-5 h-5 text-purple-500" />,
                },
                {
                  key: 'recurrent_infections_immune' as ConditionKey,
                  label: 'Frequent Chronic Infections / Immune Issues',
                  icon: <Activity className="w-5 h-5 text-[#0D9488]" />,
                },
                {
                  key: 'pulmonary_copd_alpha1' as ConditionKey,
                  label: 'Chronic Lung Conditions / COPD / Alpha-1',
                  icon: <Wind className="w-5 h-5 text-sky-500" />,
                },
                {
                  key: 'metabolic_diabetes_early' as ConditionKey,
                  label: 'Early or Atypical Diabetes / Metabolic Syndrome',
                  icon: <Flame className="w-5 h-5 text-amber-500" />,
                },
                {
                  key: 'general_preventive_wellness' as ConditionKey,
                  label: 'None of the Above / General Preventive Check',
                  icon: <Heart className="w-5 h-5 text-emerald-500" />,
                },
              ].map((item) => {
                const isSelected = conditions.includes(item.key);
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleCondition(item.key)}
                    className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'border-[#0D9488] bg-teal-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="shrink-0">{item.icon}</div>
                    <span className="font-semibold text-xs sm:text-sm text-[#0D1B2A] flex-1">
                      {item.label}
                    </span>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#0D9488] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {errorMsg && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                {errorMsg}
              </p>
            )}

            <div className="pt-4 flex items-center justify-between gap-4">
              <Button onClick={handleBack} variant="outline" size="md">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button onClick={handleNext} size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Continue to Medications
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Medication Profile */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="teal" size="sm">
                Step 4 of 5 • Pharmacogenomics (PGx)
              </Badge>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A] mt-2">
                Medication &amp; Prescription History
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 mt-1">
                Medicare Part B frequently covers Pharmacogenomic (PGx) testing to prevent adverse drug events in patients taking daily medications.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  How many daily prescription medications do you currently take? *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '0_2', label: '0 – 2 Meds' },
                    { id: '3_5', label: '3 – 5 Meds (Polypharmacy)' },
                    { id: '6_plus', label: '6 or More Prescriptions' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setDailyMedsCount(option.id as any)}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 text-xs sm:text-sm font-bold transition-all text-center ${
                        dailyMedsCount === option.id
                          ? 'border-[#0D9488] bg-teal-50 text-[#0D9488] shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Have you ever experienced severe side effects, nausea, dizziness, or medication failure? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAdverseReactions(true)}
                    className={`p-4 rounded-2xl border-2 text-xs sm:text-sm font-bold transition-all ${
                      adverseReactions === true
                        ? 'border-[#0D9488] bg-teal-50 text-[#0D9488]'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    Yes, experienced adverse side effects
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdverseReactions(false)}
                    className={`p-4 rounded-2xl border-2 text-xs sm:text-sm font-bold transition-all ${
                      adverseReactions === false
                        ? 'border-[#0D9488] bg-teal-50 text-[#0D9488]'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    No, tolerate medications normally
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-4">
              <Button onClick={handleBack} variant="outline" size="md">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button onClick={handleNext} size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Continue to Shipping Info
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 5: Shipping & Contact */}
        {step === 5 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="emerald" size="sm" dot>
                Final Step • Kit Delivery Address
              </Badge>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A] mt-2">
                Where should we send your swab kit?
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 mt-1">
                Your at-home cheek swab kit will be delivered via discrete USPS Priority Mail with free return postage included.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Harold"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Miller"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    placeholder="harold@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone (For Swab Kit Tracking) *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  placeholder="1234 Maple Avenue"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0D9488] bg-[#FDFCF7]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Apt / Suite
                  </label>
                  <input
                    type="text"
                    placeholder="Apt 4B"
                    value={suite}
                    onChange={(e) => setSuite(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-[#FDFCF7]"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Miami"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-[#FDFCF7]"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    maxLength={5}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-[#FDFCF7]"
                  />
                </div>
              </div>

              {/* Consent Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isCaregiverApplying}
                    onChange={(e) => setIsCaregiverApplying(e.target.checked)}
                    className="mt-0.5 rounded text-[#0D9488] focus:ring-[#0D9488]"
                  />
                  <span>I am a family caregiver or legal guardian completing this request on behalf of the patient.</span>
                </label>

                <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-0.5 rounded text-[#0D9488] focus:ring-[#0D9488]"
                  />
                  <span>
                    I consent to receive automated SMS updates regarding my swab kit dispatch, lab receipt, and physician review schedule.
                  </span>
                </label>
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                {errorMsg}
              </p>
            )}

            <div className="pt-4 flex items-center justify-between gap-4">
              <Button onClick={handleBack} variant="outline" size="md" disabled={isSubmitting}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button
                onClick={handleNext}
                size="lg"
                variant="primary"
                isLoading={isSubmitting}
                className="shadow-md"
                icon={<Sparkles className="w-4 h-4" />}
              >
                Submit Pre-Qualification &rarr;
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 6: Confirmation & Results */}
        {step === 6 && result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 text-center sm:text-left"
          >
            {/* Header Result Pill */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0D9488] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <Badge variant="emerald" size="lg" dot>
                {result.coverageTier}
              </Badge>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#0D1B2A]">
                Congratulations! You Pre-Qualify for $0 Out-of-Pocket Testing
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto">
                Your medical profile meets clinical necessity criteria under Medicare Part B guidelines.
              </p>
            </div>

            {/* Order Confirmation Code */}
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-slate-500 font-medium">Pre-Qualification Reference:</span>
                <span className="font-mono font-bold text-[#0D1B2A] ml-2 text-sm">
                  {result.confirmationCode}
                </span>
              </div>
              <span className="text-slate-500">Status: Sent to State Physician Network</span>
            </div>

            {/* Recommended Panels */}
            <div>
              <h3 className="font-serif-heading font-bold text-base text-[#0D1B2A] mb-3">
                Matched Clinical Screening Panels:
              </h3>
              <div className="space-y-3">
                {result.recommendedPanels.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl border border-slate-200/90 bg-white flex items-start gap-4 text-left shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">{p.name}</h4>
                      <p className="text-xs text-slate-500">{p.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="p-6 rounded-3xl bg-[#0D1B2A] text-white space-y-3 text-left">
              <h4 className="font-serif-heading font-bold text-sm text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-teal-400" />
                What Happens Next?
              </h4>
              <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
                <li>
                  <strong className="text-white">Physician Clinical Review:</strong> A licensed physician in your state evaluates and authorizes your diagnostic order within 24 hours.
                </li>
                <li>
                  <strong className="text-white">Kit Dispatched:</strong> Your sterile 5-minute buccal swab collection kit is dispatched via USPS Priority Mail.
                </li>
                <li>
                  <strong className="text-white">Track Progress:</strong> You can track your kit's real-time shipment and laboratory sequencing at any time using your phone number.
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button href="/track-kit" size="lg" variant="primary" className="flex-1 justify-center rounded-full">
                Track My Swab Kit Status &rarr;
              </Button>
              <Button href="/" size="lg" variant="outline" className="flex-1 justify-center rounded-full">
                Return to Homepage
              </Button>
            </div>
          </motion.div>
        )}
      </Card>

      {/* Trust & HIPAA Guarantee Footer */}
      <div className="mt-8 text-center text-xs text-slate-500 space-y-2">
        <div className="flex items-center justify-center gap-4 text-slate-600 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#0D9488]" /> 256-Bit Encrypted
          </span>
          <span>•</span>
          <span>HIPAA Compliant</span>
          <span>•</span>
          <span>No Surprise Billing</span>
        </div>
        <p className="max-w-md mx-auto text-[11px] text-slate-400">
          Your personal medical information is protected by federal privacy laws and will only be shared with licensed physician networks and accredited laboratories.
        </p>
      </div>
    </div>
  );
}
