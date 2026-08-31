import { FaqItem } from '@/types/faq';

export const FAQ_DATA: FaqItem[] = [
  // Medicare & Billing
  {
    id: 'faq-med-1',
    category: 'medicare_billing',
    question: 'How does Medicare Part B cover genetic testing?',
    answer: 'Under CMS federal guidelines, Medicare Part B may cover medically appropriate diagnostic and preventive genetic tests when they are ordered by a licensed healthcare provider and meet coverage requirements. When your insurance or plan eligibility is reviewed and clinical necessity is established, the CLIA-certified laboratory may bill insurance directly. Final coverage depends on your individual plan and eligibility.',
    badge: 'Medicare Part B',
  },
  {
    id: 'faq-med-3',
    category: 'medicare_billing',
    question: 'Will I ever receive a surprise medical bill?',
    answer: 'Coverage review is completed before the test is sent when possible. If insurance coverage cannot be verified or clinical criteria are not met, we explain the next steps before any kit is dispatched.',
    badge: 'Patient Protection',
  },
  {
    id: 'faq-med-4',
    category: 'medicare_billing',
    question: 'Can I get tested if I have private/commercial insurance or wish to self-pay?',
    answer: 'Yes. Commercial insurance plans (Blue Cross, Aetna, UnitedHealthcare, Cigna, etc.) frequently cover preventive genetic panels. We also offer transparent, all-inclusive flat-rate self-pay options for individuals who do not have Medicare or commercial coverage.',
    badge: 'Commercial & Self-Pay',
  },
  {
    id: 'faq-med-5',
    category: 'medicare_billing',
    question: 'What does Medicare cover for seniors through Seniors Wellness Care?',
    answer: 'Medicare Part B covers qualifying preventive health services for seniors, including medically necessary clinical genetic testing (such as Hereditary Cancer CGx and Pharmacogenomics PGx) and physician-prescribed Durable Medical Equipment (DME) like knee, back, and joint braces. Seniors Wellness Care verifies your Medicare benefits upfront to maximize your coverage.',
    badge: 'Medicare Benefits',
  },
  {
    id: 'faq-med-6',
    category: 'medicare_billing',
    question: 'What services does Seniors Wellness Care provide across the USA?',
    answer: 'Seniors Wellness Care provides three integrated senior healthcare solutions: (1) Physician-ordered Genetic Testing & Molecular Diagnostics, (2) Physician-prescribed Durable Medical Equipment (DME) and orthopedic braces, and (3) 24/7 Medical Alert emergency response systems with automatic fall detection and mobile GPS.',
    badge: 'Seniors Wellness Care Services',
  },

  // Testing Process
  {
    id: 'faq-test-1',
    category: 'testing_process',
    question: 'Is the cheek swab sample collection painful or difficult?',
    answer: 'Not at all. The collection uses a soft, sterile buccal swab that gently rubs the inside of your cheek for 30 seconds per side. There are zero needles, zero blood draws, and zero pain. The entire process takes under 5 minutes at your kitchen table.',
    badge: '5-Min Cheek Swab',
  },
  {
    id: 'faq-test-2',
    category: 'testing_process',
    question: 'What is inside the at-home testing kit?',
    answer: 'Your kit includes 2 sterile buccal swabs, protective specimen tubes, a biohazard safety transport pouch, easy-to-read step-by-step instructions with senior-friendly large print, and a prepaid USPS Priority return mailer.',
    badge: 'Kit Contents',
  },
  {
    id: 'faq-test-3',
    category: 'testing_process',
    question: 'How long does it take to receive my results?',
    answer: 'Once our CLIA-certified laboratory receives your returned sample, high-complexity genomic sequencing takes approximately 7 to 10 business days (5 to 7 days for PGx). Your results are then reviewed by a physician who schedules a personalized follow-up consultation with you.',
    badge: 'Turnaround Time',
  },
  {
    id: 'faq-test-4',
    category: 'testing_process',
    question: 'How do I return the kit after swabbing?',
    answer: 'Simply place your sealed specimen tube inside the prepaid USPS Priority return envelope and drop it in any standard U.S. Postal Service mailbox or hand it to your mail carrier. Return shipping is included as part of the collection process.',
    badge: 'Return Shipping',
  },

  // Clinical Science
  {
    id: 'faq-sci-1',
    category: 'clinical_science',
    question: 'How accurate is the genetic sequencing performed?',
    answer: 'All specimens are processed in federally certified CLIA (Clinical Laboratory Improvement Amendments) and CAP (College of American Pathologists) accredited laboratories using high-throughput Next-Generation Sequencing (NGS). Our partner laboratories maintain a >99.9% analytical concordance benchmark.',
    badge: 'CLIA / CAP Accredited',
  },
  {
    id: 'faq-sci-2',
    category: 'clinical_science',
    question: 'Does this test diagnose cancer or active diseases?',
    answer: 'No. Preventive genetic screening identifies inherited germline DNA variants, mutations, and risk predispositions—it does not diagnose active tumors or disease. Think of it as a personalized early warning system that empowers your doctor to implement proactive surveillance before disease develops.',
    badge: 'Predisposition vs Diagnosis',
  },
  {
    id: 'faq-sci-3',
    category: 'clinical_science',
    question: 'What is Pharmacogenomics (PGx) and why is it important for seniors?',
    answer: 'Pharmacogenomics analyzes how your unique liver enzymes metabolize prescription medications. For seniors taking multiple medications (polypharmacy), PGx helps physicians identify which drugs may cause dangerous side effects, which drugs may be ineffective, and what exact dosages will work safely.',
    badge: 'Precision Medicine',
  },

  // Physician Network
  {
    id: 'faq-phy-1',
    category: 'physician_network',
    question: 'Who orders the genetic test for me?',
    answer: 'Every test is reviewed and ordered by an independent, board-certified physician licensed in your state. During the pre-qualification process, a physician evaluates your health history and confirms medical necessity before authorizing kit shipment.',
    badge: 'Licensed Providers',
  },
  {
    id: 'faq-phy-2',
    category: 'physician_network',
    question: 'Will my personal Primary Care Doctor receive a copy of my results?',
    answer: 'Yes. With your permission, a comprehensive clinical diagnostic report and physician action summary will be shared directly with your primary care provider so they can incorporate findings into your routine care plan.',
    badge: 'PCP Integration',
  },

  // Privacy & Security
  {
    id: 'faq-priv-1',
    category: 'privacy_security',
    question: 'How is my private DNA and health data protected?',
    answer: 'We adhere to the highest healthcare privacy standards. All data is protected with 256-bit AES database encryption and TLS 1.3 in-transit security in full compliance with HIPAA. We never sell, rent, or commercialize your genetic or personal information to third parties.',
    badge: 'HIPAA 256-Bit Security',
  },
  {
    id: 'faq-priv-2',
    category: 'privacy_security',
    question: 'Can insurance companies use my genetic results against me?',
    answer: 'No. The federal Genetic Information Nondiscrimination Act (GINA) protects Americans from discrimination based on genetic test results. Under federal law, health insurers cannot deny coverage, drop plans, or raise premiums based on genetic predispositions.',
    badge: 'Federal GINA Protections',
  },
];
