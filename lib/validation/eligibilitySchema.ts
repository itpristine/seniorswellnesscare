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
  insuranceType: z.preprocess(
    (val) => (val === 'medicare' ? 'medicare_part_b' : val),
    InsuranceEnum
  ),
  formType: z.enum(['genetic_testing', 'dme']).optional().default('genetic_testing'),
  primaryInsurance: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().optional().default('')
  ),
  primaryInsuranceNumber: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().optional().default('')
  ),
});

export const Step2Schema = z.object({
  dateOfBirth: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().min(1, 'Date of birth is required')
  ),
  gender: z.enum(['male', 'female', 'other']).optional().default('female'),
  state: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim().toUpperCase() : val),
    z.string().min(2, 'Please select your state of residence')
  ),
});

export const Step3Schema = z.object({
  conditions: z
    .array(ConditionEnum)
    .optional()
    .default(['general_preventive_wellness']),
});

export const Step4Schema = z.object({
  dailyMedsCount: z.enum(['0_2', '3_5', '6_plus']).optional().default('3_5'),
  adverseReactions: z.boolean().optional().default(false),
});

export const Step5Schema = z.object({
  firstName: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().min(1, 'First name is required')
  ),
  lastName: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().min(1, 'Last name is required')
  ),
  email: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z
      .string()
      .email('Please enter a valid email address')
      .or(z.literal(''))
      .nullable()
      .optional()
  ),
  phone: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().min(7, 'Please enter a valid phone number')
  ),
  streetAddress: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().optional().default('')
  ),
  suite: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().optional().default('')
  ),
  city: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().optional().default('')
  ),
  zipCode: z.preprocess(
    (val) => (typeof val === 'string' ? val.trim() : val),
    z.string().optional().default('')
  ),
  isCaregiverApplying: z.boolean().default(false),
  smsConsent: z.boolean().optional().default(true),
  consent: z.boolean().optional(),
});

export const FullEligibilitySchema = Step1Schema.merge(Step2Schema)
  .merge(Step3Schema)
  .merge(Step4Schema)
  .merge(Step5Schema);

export type FullEligibilityFormData = z.infer<typeof FullEligibilitySchema>;
