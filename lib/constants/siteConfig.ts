export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  iconName?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const SITE_CONFIG = {
  name: 'Senior Wellness Care',
  legalName: 'Aegis Preventive Genomics & Wellness Network LLC',
  tagline: 'Physician-Ordered Preventive Genomics Covered by Medicare Part B',
  phone: '(800) 492-3829',
  phoneFormatted: '+18004923829',
  email: 'care@aegisgenomics.com',
  providerEmail: 'providers@aegisgenomics.com',
  address: '100 Medical Center Parkway, Suite 400, Austin, TX 78701',
  supportHours: 'Monday – Friday, 8:00 AM – 8:00 PM EST',
  
  trustMetrics: {
    patientsServed: '12,500+',
    physicianNetwork: '100% Licensed',
    labPartners: '190+ CLIA & CAP',
    statesActive: '48 States',
    outOfPocketCost: '$0.00 for Qualifying Part B',
  },

  megaMenu: {
    programs: [
      {
        title: 'Hereditary Cancer (CGx)',
        href: '/programs/cancer-genetics',
        description: 'BRCA1/2, Lynch Syndrome & 30+ hereditary cancer risk markers.',
        badge: 'Top Ordered',
        iconName: 'ShieldAlert',
      },
      {
        title: 'Pharmacogenomics (PGx)',
        href: '/programs/pharmacogenomics',
        description: 'Drug-gene response profiling for seniors on 3+ daily medications.',
        badge: 'Medication Safety',
        iconName: 'Pill',
      },
      {
        title: 'Neurocognitive & Dementia',
        href: '/programs/neurocognitive',
        description: 'APOE & genomic susceptibility for age-related memory decline.',
        badge: 'Brain Health',
        iconName: 'Brain',
      },
      {
        title: 'Primary Immunodeficiency',
        href: '/programs/immunodeficiency',
        description: 'Investigate underlying causes for chronic recurrent infections.',
        badge: 'Immune Panel',
        iconName: 'Activity',
      },
      {
        title: 'Cardiovascular & Stroke',
        href: '/programs/cardiovascular',
        description: 'Familial high cholesterol (FH), cardiomyopathies & heart health.',
        badge: 'Heart Protection',
        iconName: 'HeartPulse',
      },
      {
        title: 'Pulmonary & Alpha-1',
        href: '/programs/pulmonary',
        description: 'Genetic markers for COPD, emphysema & respiratory vulnerabilities.',
        badge: 'Lung Health',
        iconName: 'Wind',
      },
      {
        title: 'Metabolic & Diabetes',
        href: '/programs/metabolic-diabetes',
        description: 'Identify monogenic diabetes (MODY) to optimize therapy.',
        badge: 'Endocrine',
        iconName: 'Flame',
      },
      {
        title: 'Thyroid & Endocrine',
        href: '/programs/thyroid-endocrine',
        description: 'Endocrine neoplasia and autoimmune thyroid genetic factors.',
        badge: 'Thyroid',
        iconName: 'Layers',
      },
      {
        title: 'Inherited Ophthalmic',
        href: '/programs/ophthalmic',
        description: 'Macular degeneration, glaucoma & retinal dystrophy screening.',
        badge: 'Vision',
        iconName: 'Eye',
      },
    ],
    patients: [
      {
        title: 'How It Works',
        href: '/how-it-works',
        description: 'Our painless 4-step process from eligibility check to results.',
      },
      {
        title: 'Medicare & Insurance Coverage',
        href: '/medicare-eligibility',
        description: 'Detailed explanation of $0 out-of-pocket Medicare Part B benefits.',
      },
      {
        title: 'Check Eligibility ($0 Cost)',
        href: '/eligibility-checker',
        description: '2-minute interactive qualification wizard for at-home swab kits.',
      },
      {
        title: 'Track Swab Kit & Lab Status',
        href: '/track-kit',
        description: 'Check the real-time shipping and sequencing status of your sample.',
      },
      {
        title: 'Interactive Sample Reports',
        href: '/resources/sample-reports',
        description: 'Explore sample CGx and PGx genetic results with clinician guidance.',
      },
    ],
    providers: [
      {
        title: 'Physician Network & Workflow',
        href: '/providers',
        description: 'Clinical evidence, decision support tools, and test menus.',
      },
      {
        title: 'Digital Patient Requisition Form',
        href: '/providers/referral',
        description: 'Order genomic screening online with digital physician signature.',
      },
      {
        title: 'Quality & CLIA Accreditation',
        href: '/quality-accreditation',
        description: 'Our federal CLIA certifications, CAP standards, and HIPAA protocols.',
      },
    ],
    resources: [
      {
        title: 'Searchable FAQ Center',
        href: '/resources/faq',
        description: 'Answers to questions about Medicare, swab kits, and privacy.',
      },
      {
        title: 'Educational Articles',
        href: '/resources/articles',
        description: 'Evidence-based articles on genomics, longevity, and preventive care.',
      },
      {
        title: 'About Our Mission & Leadership',
        href: '/about-us',
        description: 'Meet our clinical advisory board and laboratory network.',
      },
      {
        title: 'Contact Patient Concierge',
        href: '/contact',
        description: 'Get in touch with our live clinical support team.',
      },
    ],
  },

  legalDisclaimer: 'Senior Wellness Care is an independent digital health platform connecting eligible Medicare and commercially insured individuals with licensed physician networks and CLIA-certified partner laboratories. Senior Wellness Care is not affiliated with, endorsed by, or operated by CMS, Medicare, or any federal government agency. All diagnostic testing is subject to physician evaluation, clinical necessity determination, and insurance verification. $0 out-of-pocket cost applies to qualifying Medicare Part B beneficiaries when medically appropriate as determined by an attending physician.',
};
