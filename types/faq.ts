export interface FaqItem {
  id: string;
  category: 'medicare_billing' | 'testing_process' | 'clinical_science' | 'physician_network' | 'privacy_security';
  question: string;
  answer: string;
  badge?: string;
}
