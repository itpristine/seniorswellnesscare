import { z } from 'zod';

export const InsuranceEnum = z.enum([
  'medicare_part_b',
  'medicare_advantage',
  'commercial_insurance',
  'medicaid_uninsured',
  'self_pay',
]);

export const ConditionEnum = z.enum([
  'cancer_hereditary',
  'polypharmacy_medications',
  'neurocognitive_decline',
  'recurrent_infections_immune',
  'cardiovascular_early_attack',
  'pulmonary_copd_alpha1',
  'metabolic_diabetes_early',
  'thyroid_endocrine_nodules',
  'ophthalmic_vision_loss',
  'general_preventive_wellness',
]);

export const Step1Schema = z.object({
  insuranceType: InsuranceEnum,
});

export const Step2Schema = z.object({
  dateOfBirth: z.string().min(1, 'Date of birth is required').regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date (YYYY-MM-DD)'),
  gender: z.enum(['male', 'female', 'other']),
  state: z.string().min(2, 'Please select your state of residence').max(2, 'Use 2-letter state code'),
});

export const Step3Schema = z.object({
  conditions: z.array(ConditionEnum).min(1, 'Please select at least one relevant health topic or general wellness'),
});

export const Step4Schema = z.object({
  dailyMedsCount: z.enum(['0_2', '3_5', '6_plus']),
  adverseReactions: z.boolean(),
});

export const Step5Schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number').regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone format'),
  streetAddress: z.string().min(5, 'Street address is required for kit delivery'),
  suite: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid 5-digit US ZIP code'),
  isCaregiverApplying: z.boolean().default(false),
  smsConsent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to receive status updates for your swab kit',
  }),
});

export const FullEligibilitySchema = Step1Schema.merge(Step2Schema)
  .merge(Step3Schema)
  .merge(Step4Schema)
  .merge(Step5Schema);

export type FullEligibilityFormData = z.infer<typeof FullEligibilitySchema>;
