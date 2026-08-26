export type InsuranceType =
  | 'medicare_part_b'
  | 'medicare_advantage'
  | 'commercial_insurance'
  | 'medicaid_uninsured'
  | 'self_pay';

export type ConditionKey =
  | 'cancer_hereditary'
  | 'polypharmacy_medications'
  | 'neurocognitive_decline'
  | 'recurrent_infections_immune'
  | 'cardiovascular_early_attack'
  | 'pulmonary_copd_alpha1'
  | 'metabolic_diabetes_early'
  | 'thyroid_endocrine_nodules'
  | 'ophthalmic_vision_loss'
  | 'general_preventive_wellness';

export interface EligibilitySubmission {
  insuranceType: InsuranceType;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  state: string;
  conditions: ConditionKey[];
  dailyMedsCount: '0_2' | '3_5' | '6_plus';
  adverseReactions: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  suite?: string;
  city: string;
  zipCode: string;
  isCaregiverApplying: boolean;
  smsConsent: boolean;
}

export interface EligibilityResult {
  qualified: boolean;
  coverageTier: 'Medicare Part B ($0 Out-of-Pocket)' | 'Medicare Advantage (Covered / Verification)' | 'Commercial Insurance Concierge' | 'Self-Pay / Clinical Review';
  estimatedCost: '$0.00' | 'Covered w/ Authorization' | 'Transparent Flat Rate';
  recommendedPanels: {
    id: string;
    name: string;
    slug: string;
    reason: string;
  }[];
  physicianReviewNotice: string;
  confirmationCode: string;
}
