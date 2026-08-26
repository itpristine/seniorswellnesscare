export interface MedicalAlertSystem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  iconName: string;
  imageUrl: string;
  anchorId: string;
  whatIsIt: string;
  howItWorks: string;
  keyFeatures: string[];
  keyBenefits: string[];
  whoMayBenefit: string[];
}

export const MEDICAL_ALERT_SYSTEMS: MedicalAlertSystem[] = [
  {
    id: 'home-system',
    slug: 'home-system',
    name: 'Home System',
    tagline: 'Comprehensive In-Home Safety Hub & Long-Range SOS Protection',
    badge: 'Whole-Home Protection',
    iconName: 'Home',
    imageUrl: '/Home-Cellular-System-with-Help-Buttons-Trans@2x (1).avif',
    anchorId: 'home-system',
    whatIsIt:
      'The Home System is a dedicated in-home medical alert base unit paired with a lightweight, wearable waterproof SOS button (available as a neck pendant or wristband). It provides around-the-clock emergency support throughout your living space without requiring a landline telephone or Wi-Fi connection.',
    howItWorks:
      'The system is engineered for simple plug-and-protect use inside the home. The high-volume, two-way speakerphone station covers up to 1,000+ feet in all directions—protecting you from the bedroom to the yard. In an emergency, simply press the wearable SOS button or the base station button. A certified emergency response operator answers immediately through the base station’s clear speaker to assess your situation and dispatch emergency personnel or notify your designated family contacts.',
    keyFeatures: [
      'Crystal-clear high-decibel 2-way voice speakerphone station',
      '1,000+ foot wide-area signal range (covers house, basement & yard)',
      'Built-in 32+ hour backup battery during residential power outages',
      '100% waterproof wearable SOS button safe for shower and bath use',
      'Dedicated built-in cellular connection — no landline or Wi-Fi required',
      'Automated silent periodic system and battery self-tests',
    ],
    keyBenefits: [
      'Provides continuous, reliable emergency access from any room in your house',
      'Shower-safe design protects in the bathroom where slip-and-fall incidents most commonly occur',
      'Zero daily charging hassles — wearable button features a long-life multi-year battery',
      'Immediate voice contact with trained dispatchers who have your emergency profile on file',
      'Simultaneously alerts designated family members and caregivers via SMS or phone calls',
    ],
    whoMayBenefit: [
      'Individuals who spend the majority of their daily routine at home or in the yard',
      'Seniors living alone who want a dependable, always-ready emergency lifeline',
      'Patients recovering at home from surgery, illness, or mobility-limiting conditions',
      'Anyone seeking an effortless setup with zero complex technical maintenance or daily charging',
    ],
  },
  {
    id: 'mobile-systems',
    slug: 'mobile-systems',
    name: 'Mobile Systems',
    tagline: 'On-the-Go 4G LTE GPS Emergency Alert Pendant',
    badge: 'Nationwide Protection',
    iconName: 'Radio',
    imageUrl: '/Mobile-Systems@2x (1).avif',
    anchorId: 'mobile-systems',
    whatIsIt:
      'A Mobile Medical Alert system is a compact, lightweight, all-in-one wearable emergency pendant equipped with built-in 4G LTE nationwide cellular connectivity and pinpoint GPS location technology. It delivers complete emergency assistance wherever you go across the country.',
    howItWorks:
      'Unlike home-only base units, the Mobile System is completely self-contained with its own microphone, speaker, cellular antenna, and GPS receiver. Whether you are running errands, taking a walk in the neighborhood, driving, or traveling across state lines, pressing the emergency SOS button instantly connects you to our 24/7 emergency response team. Dispatchers view your exact GPS coordinates and can direct first responders to your real-time location.',
    keyFeatures: [
      'Nationwide 4G LTE cellular coverage operating on leading national carrier networks',
      'Advanced multi-constellation GPS & Wi-Fi location positioning technology',
      'Built-in automatic fall detection sensor capability',
      'Direct 2-way crystal-clear voice communication through the pendant itself',
      'Water-resistant housing built for rain, splashes, and everyday wear',
      'Long-lasting rechargeable battery lasting up to 5 days on a single charge',
    ],
    keyBenefits: [
      'Complete freedom and flexibility to travel, exercise, and live actively outside the home',
      'Automatic fall detection can initiate a call for assistance even if you cannot press the button',
      'Fast, precise location discovery ensures first responders know exactly where to find you outdoors',
      'Compact, discreet pendant design can be worn comfortably around the neck or clipped to a belt',
      'Family and caregivers can check device status and location updates via mobile notifications',
    ],
    whoMayBenefit: [
      'Active seniors and adults who frequently leave home, shop, drive, or travel',
      'Individuals who enjoy walking, gardening, jogging, or outdoor recreational activities',
      'Seniors living independently who want continuous emergency coverage both at home and away',
      'Caregivers who desire real-time GPS location visibility and peace of mind for loved ones',
    ],
  },
  {
    id: 'smartwatch',
    slug: 'smartwatch',
    name: 'Smartwatch',
    tagline: 'Discreet Wearable SOS Smartwatch with Health & Activity Tracking',
    badge: 'Modern & Discreet',
    iconName: 'Watch',
    imageUrl: '/Smartwatch-Trans@2x (1).avif',
    anchorId: 'smartwatch',
    whatIsIt:
      'A Medical Alert Smartwatch is a modern, stylish touchscreen wrist device that combines essential 24/7 medical alert protection with everyday smart features, including digital timekeeping, step counting, and heart rate tracking. It blends life-saving safety into a familiar, attractive wearable.',
    howItWorks:
      'Designed to look and feel just like a premium contemporary smartwatch, the device stays securely on your wrist throughout the day. In any urgent situation, pressing and holding the dedicated SOS button initiates a two-way call through the high-clarity speaker and microphone on your wrist. The built-in cellular and GPS system immediately transmits your location to our response specialists, while the watch continues tracking your daily steps, heart rate, and activity.',
    keyFeatures: [
      'Dedicated one-touch physical SOS emergency button for rapid activation',
      'Wrist-based 2-way crystal-clear speakerphone and noise-canceling microphone',
      'Real-time GPS and cellular tracking for precise location coordinates',
      'Built-in optical heart rate monitor and daily step/activity counter',
      'Vibrant touchscreen display with customizable digital clock faces and weather info',
      'Companion mobile app for family members to stay connected and view wellness stats',
    ],
    keyBenefits: [
      'Provides maximum discretion — looks like a modern tech smartwatch rather than a medical device',
      'Always accessible on the wrist, eliminating the risk of leaving a pendant on a nightstand',
      'Encourages daily activity and wellness tracking alongside round-the-clock personal security',
      'Simplifies daily life by combining time, wellness data, and emergency assistance in one device',
      'Magnetic quick-charging cradle makes daily battery replenishment effortless',
    ],
    whoMayBenefit: [
      'Active adults and seniors who prefer a discreet, fashionable wearable over a traditional pendant',
      'Tech-comfortable individuals who appreciate combining fitness tracking with safety',
      'People who want emergency access permanently secured to their wrist during all daily activities',
      'Families looking for a modern safety solution that their loved ones will genuinely enjoy wearing',
    ],
  },
];

export const MEDICAL_ALERT_OVERVIEW_PILLARS = [
  {
    title: 'Rapid Emergency Response',
    desc: 'Instant 24/7 connection to trained US-based emergency response specialists who assess your situation and coordinate local EMTs, fire, or police immediately.',
    iconName: 'Radio',
  },
  {
    title: 'Wearable & Fall Protection',
    desc: 'Advanced wearable sensors and dedicated SOS buttons enable fast requests for help, providing vital assistance if a sudden fall or medical issue occurs.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Live-Alone Peace of Mind',
    desc: 'Empowers individuals who live alone to maintain their independent lifestyle with the confidence that dependable assistance is always within reach.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Connected Family Circle',
    desc: 'Keeps loved ones informed with automated emergency text notifications and status alerts whenever assistance is requested.',
    iconName: 'Users',
  },
];

export const MEDICAL_ALERT_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Request a Free Quote',
    subtitle: '1-Minute Online Form',
    desc: 'Fill out our short quote request form with your contact details. No complicated paperwork and no upfront payment required.',
    iconName: 'ClipboardPen',
    badge: 'Step 1 • Fast & Free',
  },
  {
    step: '02',
    title: 'Specialist Consultation',
    subtitle: 'Personalized Safety Review',
    desc: 'A dedicated safety specialist reviews your daily lifestyle, home layout, and activity level to recommend the ideal system option.',
    iconName: 'Headphones',
    badge: 'Step 2 • Expert Guidance',
  },
  {
    step: '03',
    title: 'Fast Direct Delivery',
    subtitle: 'Pre-Activated Setup',
    desc: 'Your chosen system arrives pre-configured and ready to use right out of the box. Simply plug in or wear with zero technical hassle.',
    iconName: 'Truck',
    badge: 'Step 3 • Pre-Configured',
  },
  {
    step: '04',
    title: '24/7 Active Protection',
    subtitle: 'Always Within Reach',
    desc: 'Enjoy complete confidence knowing that emergency dispatchers and family notifications are just a single button press away, 24 hours a day.',
    iconName: 'ShieldCheck',
    badge: 'Step 4 • Total Security',
  },
];

export const MEDICAL_ALERT_FAQS = [
  {
    id: 'alert-faq-1',
    question: 'What is a Medical Alert system and why is it important?',
    answer:
      'A Medical Alert system is a dedicated emergency communication device designed to connect you to a 24/7 response center at the press of a button. Whether experiencing a sudden fall, medical emergency, household accident, or personal safety concern, a medical alert system ensures you can quickly request assistance without needing to reach a telephone. It provides critical peace of mind for individuals living alone and for families who want their loved ones protected around the clock.',
    badge: 'Overview',
  },
  {
    id: 'alert-faq-2',
    question: 'How do I choose between the Home System, Mobile System, and Smartwatch?',
    answer:
      'The Home System is best for individuals who spend the majority of their time at home and want an easy, whole-house protection hub with no daily charging. The Mobile System is ideal for active seniors who frequently leave the house, shop, or travel and need nationwide GPS coverage. The Smartwatch offers discreet, wrist-worn style combining emergency response with step and heart rate tracking for tech-friendly users. Our specialists will help guide you toward the best fit.',
    badge: 'System Comparison',
  },
  {
    id: 'alert-faq-3',
    question: 'Do I need a landline or home Wi-Fi to use these systems?',
    answer:
      'No. All of our Medical Alert systems operate using built-in, dedicated nationwide cellular networks. You do not need a landline telephone or residential Wi-Fi connection. The cellular service is completely integrated into the device.',
    badge: 'Connectivity',
  },
  {
    id: 'alert-faq-4',
    question: 'What happens when I press the SOS emergency button?',
    answer:
      'Within seconds of pressing the SOS button, a certified emergency response operator speaks to you directly through the device’s two-way speaker. The operator accesses your personal emergency profile, evaluates your situation, contacts local emergency first responders (EMS, fire, police) if required, and promptly notifies your designated family contacts via phone and SMS.',
    badge: 'Emergency Response',
  },
  {
    id: 'alert-faq-5',
    question: 'How does automatic fall detection work on supported devices?',
    answer:
      'Supported devices utilize multi-axis accelerometer sensors to detect the rapid acceleration and impact pattern characteristic of a fall. If a fall is detected, the device automatically initiates a call to the emergency response center—ensuring help can be dispatched even if you are disoriented or unable to press the SOS button manually. (Please note that while fall detection technology is highly advanced, users should always press their button if able).',
    badge: 'Fall Detection',
  },
  {
    id: 'alert-faq-6',
    question: 'Are the wearable buttons waterproof for shower and bath safety?',
    answer:
      'Yes. The wearable buttons and pendants are 100% waterproof and specifically designed to be worn in the shower and bath, where the majority of household slips and falls take place.',
    badge: 'Waterproof Design',
  },
  {
    id: 'alert-faq-7',
    question: 'How do I get a quote and get started?',
    answer:
      'Getting a quote is simple and fast. Click any "Get a Quote" button on this page, fill in your basic contact details in our secure 7-field form, and one of our dedicated senior safety specialists will reach out with customized options and pricing information tailored to your exact needs.',
    badge: 'Getting Started',
  },
];
