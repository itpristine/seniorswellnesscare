export type FormType = 'genetic_testing' | 'dme' | 'medical_alert' | 'contact';

export interface FormSubmissionMeta {
  ipAddress: string;
  submittedAt: string;
  userAgent?: string;
  referrer?: string;
}

export interface GeneticTestingSubmission {
  formType: 'genetic_testing';
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  state: string;
  dateOfBirth: string;
  primaryInsuranceType?: string;
  primaryInsuranceNumber?: string;
  consent: boolean;
  consentStatement: string;
  consentStatus: string;
  meta: FormSubmissionMeta;
  // Additional optional intake context if submitted from wizard
  conditions?: string[];
  dailyMedsCount?: string;
  adverseReactions?: boolean;
  gender?: string;
  streetAddress?: string;
  suite?: string;
  city?: string;
  zipCode?: string;
  isCaregiverApplying?: boolean;
  confirmationCode?: string;
}

export interface DmeSubmission {
  formType: 'dme';
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  state: string;
  dateOfBirth: string;
  primaryInsuranceType?: string;
  primaryInsuranceNumber?: string;
  consent: boolean;
  consentStatement: string;
  consentStatus: string;
  meta: FormSubmissionMeta;
  confirmationCode?: string;
}

export interface MedicalAlertSubmission {
  formType: 'medical_alert';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  dateOfBirth: string;
  consent: boolean;
  consentStatement: string;
  consentStatus: string;
  meta: FormSubmissionMeta;
  confirmationCode?: string;
}

export interface ContactSubmission {
  formType: 'contact';
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  meta: FormSubmissionMeta;
}

export type FormSubmissionData =
  | GeneticTestingSubmission
  | DmeSubmission
  | MedicalAlertSubmission
  | ContactSubmission;

export interface FormRouteConfig {
  senderEmail: string;
  recipientEmail: string;
  sheetName: string;
  requiresSheet: boolean;
  subjectTitle: string;
}

export const FORM_ROUTES: Record<FormType, FormRouteConfig> = {
  genetic_testing: {
    senderEmail: 'info@seniorwellnesscare.com',
    recipientEmail: 'Genetictesting@seniorwellnesscare.com',
    sheetName: 'Genetic Testing',
    requiresSheet: true,
    subjectTitle: 'Genetic Testing Intake Submission',
  },
  dme: {
    senderEmail: 'info@seniorwellnesscare.com',
    recipientEmail: 'dme@seniorwellnesscare.com',
    sheetName: 'DME',
    requiresSheet: true,
    subjectTitle: 'DME Eligibility Intake Submission',
  },
  medical_alert: {
    senderEmail: 'info@seniorwellnesscare.com',
    recipientEmail: 'Medicalalert@seniorwellnesscare.com',
    sheetName: 'Medical Alert',
    requiresSheet: true,
    subjectTitle: 'Medical Alert Quote Request',
  },
  contact: {
    senderEmail: 'info@seniorwellnesscare.com',
    recipientEmail: 'Contact@seniorwellnesscare.com',
    sheetName: '',
    requiresSheet: false,
    subjectTitle: 'New Contact Us Inquiry',
  },
};
