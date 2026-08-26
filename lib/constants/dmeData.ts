export interface DmeProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  iconName: string;
  anchorId: string;
  imageSrc?: string;
  whatIsIt: string;
  supportAndStability: string;
  medicalIndications: string[];
  patientBenefits: string[];
  keyFeatures: string[];
}

export const DME_PRODUCTS: DmeProduct[] = [
  {
    id: 'elbow-brace',
    slug: 'elbow-brace',
    name: 'Orthopedic Elbow Braces',
    tagline: 'Targeted Epicondylar Compression & Joint Stabilization',
    badge: 'Joint Stability & Pain Relief',
    iconName: 'Activity',
    anchorId: 'elbow-braces',
    imageSrc: 'Orthopedic Elbow Braces.png',
    whatIsIt:
      'An orthopedic elbow brace is a medically designed therapeutic support that wraps securely around the elbow joint and forearm musculature. It provides calibrated compression and mechanical stabilization to offload strain from overstressed tendons, ligaments, and cartilage.',
    supportAndStability:
      'The brace delivers targeted concentric compression to the extensor and flexor muscle origins, reducing peak tensile forces across the epicondyle. Semi-rigid lateral stays and adjustable strapping restrict harmful hyperextension, absorb vibrational impact from arm movements, and maintain joint alignment during everyday tasks.',
    medicalIndications: [
      'Lateral Epicondylitis (Tennis Elbow) & Medial Epicondylitis (Golfer’s Elbow)',
      'Chronic Elbow Tendonitis, Tenosynovitis & Bursitis',
      'Elbow Osteoarthritis, Rheumatoid Arthritis & Joint Stiffness',
      'Ligamentous Sprains, Muscle Strains & Hyperextension Trauma',
      'Post-Surgical or Post-Cast Rehabilitation & Joint Protection',
    ],
    patientBenefits: [
      'Significant reduction in localized elbow and forearm pain during daily use',
      'Stabilizes the joint to prevent aggravating twisting and sudden hyperextension',
      'Restores grip strength and functional capability for lifting, carrying, and cooking',
      'Reduces chronic inflammation and accelerates natural tissue recovery',
      'Breathable, low-profile design fits comfortably under clothing all day',
    ],
    keyFeatures: [
      'Targeted silicone pressure pad for tendon offloading',
      'Dual adjustable hook-and-loop tension straps',
      'Breathable, moisture-wicking medical-grade fabric',
      'Anatomical contour for left or right arm versatility',
    ],
  },
  {
    id: 'wrist-brace',
    slug: 'wrist-brace',
    name: 'Therapeutic Wrist Braces',
    tagline: 'Carpal Tunnel Decompression & Neutral Alignment Support',
    badge: 'Nerve Relief & Alignment',
    iconName: 'ShieldCheck',
    anchorId: 'wrist-braces',
    imageSrc: 'Therapeutic Wrist Braces.png',
    whatIsIt:
      'A therapeutic wrist brace is an anatomically molded orthopedic orthosis engineered to immobilize the carpal joint in a neutral, resting posture. It is designed to relieve pressure on the median nerve, reduce inflammatory friction, and support weak or injured wrist tendons.',
    supportAndStability:
      'Featuring rigid palmar and dorsal contoured stays, the brace firmly restricts excessive flexion, extension, and rotational wrist movement. By maintaining the wrist at an optimal 10-to-15 degree extension, it prevents carpal tunnel canal narrowing while allowing unrestricted functional motion of the fingers and thumb.',
    medicalIndications: [
      'Carpal Tunnel Syndrome (CTS) with nocturnal or daytime numbness',
      'Wrist Osteoarthritis, Rheumatoid Arthritis & Basal Joint Degeneration',
      'De Quervain’s Tenosynovitis & Tendon Inflammation',
      'Acute Wrist Sprains, Distal Radius Strains & Ligament Instability',
      'Repetitive Strain Injury (RSI) from typing, crafting, or domestic work',
    ],
    patientBenefits: [
      'Alleviates tingling, burning sensations, and numbness in the hand and fingers',
      'Maintains therapeutic neutral wrist alignment day and night to minimize nerve compression',
      'Stabilizes the wrist during daily household tasks, writing, and meal preparation',
      'Prevents involuntary painful bending during sleep to ensure restorative rest',
      'Lightweight, ergonomic construction promotes comfortable continuous wear',
    ],
    keyFeatures: [
      'Removable pre-contoured aluminum palmar spoon stay',
      'Multi-strap compression system for customized radial fit',
      'Full finger dexterity with open-palm anatomical design',
      'Antimicrobial, skin-friendly cushioned interior liner',
    ],
  },
  {
    id: 'knee-brace',
    slug: 'knee-brace',
    name: 'Advanced Knee & Unloader Braces',
    tagline: 'Joint Decompression, Compartmental Offloading & Fall Prevention',
    badge: 'Mobility & Joint Offloading',
    iconName: 'HeartPulse',
    anchorId: 'knee-braces',
    imageSrc: 'Advanced Knee & Unloader Braces.png',
    whatIsIt:
      'An advanced orthopedic knee brace is a physician-prescribed structural orthosis engineered to stabilize the knee joint, improve patellar tracking, and mechanically offload pressure from damaged or arthritic joint compartments.',
    supportAndStability:
      'Constructed with polycentric dual-hinged side uprights and dynamic counter-force strapping, the brace absorbs axial ground impact and prevents lateral joint deviation (varus/valgus collapse). It stabilizes weakened cruciate and collateral ligaments, providing reliable structural reinforcement during weight-bearing and ambulation.',
    medicalIndications: [
      'Moderate-to-Severe Knee Osteoarthritis (Bone-on-Bone Joint Degeneration)',
      'Meniscus Tears, Chondromalacia Patellae & Cartilage Defects',
      'ACL, PCL, MCL, and LCL Ligament Instability or Reconstruction',
      'Post-Operative Total or Partial Knee Arthroplasty Recovery',
      'Chronic Patellofemoral Pain Syndrome & Age-Related Knee Instability',
    ],
    patientBenefits: [
      'Significantly diminishes sharp, weight-bearing knee pain while standing and walking',
      'Mechanically unloads arthritic compartments to delay invasive joint replacement surgery',
      'Improves balance, posture, and lateral stability to dramatically reduce fall risk',
      'Restores personal mobility, confidence on stairs, and independent community living',
      'Padded condyle cushions and breathable framework eliminate skin pinching',
    ],
    keyFeatures: [
      'Bilateral aircraft-grade aluminum polycentric hinges',
      'Adjustable flexion/extension range-of-motion stop pins',
      'Dynamic 3-point leverage unloader strapping mechanism',
      'Non-slip silicone gripper bands for secure all-day positioning',
    ],
  },
  {
    id: 'back-brace',
    slug: 'back-brace',
    name: 'Lumbar-Sacral Spinal Braces (LSO)',
    tagline: 'Spinal Decompression, Posture Correction & Core Stabilization',
    badge: 'Spine Support & Decompression',
    iconName: 'ShieldCheck',
    anchorId: 'back-braces',
    imageSrc: 'Lumbar-Sacral Spinal Braces.png',
    whatIsIt:
      'A Lumbar-Sacral Orthosis (LSO) is a rigid and semi-rigid supportive medical back brace designed to support the lower thoracic, lumbar, and sacral spine. It provides circumferential hydrostatic abdominal compression to decompress the intervertebral discs and stabilize the vertebral column.',
    supportAndStability:
      'The LSO utilizes rigid posterior and anterior ergonomic panels powered by a mechanical pulley compression draw-string system. This creates uniform intracavitary pressure, shifting the upper body weight load from the sensitive lumbar vertebrae onto the abdominal core, while restricting painful spinal flexion, extension, and lateral bending.',
    medicalIndications: [
      'Chronic Lumbar Back Pain, Lumbago & Severe Muscle Spasms',
      'Lumbar Spinal Stenosis with Neurogenic Claudication',
      'Herniated, Bulging, or Slipped Intervertebral Lumbar Discs',
      'Degenerative Disc Disease (DDD) & Lumbar Facet Arthropathy',
      'Lumbar Spondylolisthesis, Spondylosis & Vertebral Compression Fractures',
      'Post-Operative Lumbar Spinal Fusion, Laminectomy, or Discectomy',
    ],
    patientBenefits: [
      'Directly decompresses compressed nerve roots to alleviate sciatica and radiating pain',
      'Provides immediate structural stability, making sitting, standing, and walking comfortable',
      'Restricts hazardous spinal movements while maintaining natural upright spinal posture',
      'Reduces reliance on oral pain medications and anti-inflammatory drugs',
      'Smooth pulley pull-tab enables seniors with arthritis to tighten easily with one hand',
    ],
    keyFeatures: [
      'Smooth mechanical cable pulley system (6:1 mechanical advantage)',
      'Heat-moldable rigid posterior lordotic back panel with lumbar contour',
      'Rigid anterior abdominal compression panel for core offloading',
      'Breathable open-mesh side panels for all-day thermal comfort',
    ],
  },
  {
    id: 'shoulder-brace',
    slug: 'shoulder-brace',
    name: 'Orthopedic Shoulder Stabilizers',
    tagline: 'Rotator Cuff Compression, Joint Centering & Range Control',
    badge: 'Rotator Cuff & Joint Stability',
    iconName: 'Sparkles',
    anchorId: 'shoulder-braces',
    imageSrc: 'Orthopedic_Shoulder_Stabilizers-removebg-preview.png',
    whatIsIt:
      'An orthopedic shoulder brace is a specialized supportive orthosis engineered to compress the glenohumeral joint, stabilize the rotator cuff complex, and control the range of motion of the upper arm.',
    supportAndStability:
      'The brace utilizes an anatomical shoulder cap with adjustable chest-to-arm cross-straps. It applies continuous therapeutic compression to seat the humeral head securely within the glenoid fossa, limiting dangerous abduction and external rotation while preventing joint subluxation and protecting healing tendons.',
    medicalIndications: [
      'Rotator Cuff Tears, Strains, Tendinopathy & Subacromial Impingement',
      'Glenohumeral Osteoarthritis, Frozen Shoulder (Adhesive Capsulitis)',
      'Shoulder Subluxation, Multidirectional Joint Instability & Dislocations',
      'Acromioclavicular (AC) Joint Sprains & Clavicular Trauma',
      'Post-Surgical Rotator Cuff Repair or Shoulder Arthroscopy Recovery',
    ],
    patientBenefits: [
      'Alleviates sharp overhead and resting shoulder pain caused by tendon impingement',
      'Stabilizes the ball-and-socket joint to prevent painful slips and dislocations',
      'Provides soothing compression and thermal warmth to reduce joint stiffness',
      'Restricts hazardous movements without completely immobilizing the arm',
      'Universal reversible design fits either left or right shoulder with easy front closures',
    ],
    keyFeatures: [
      'Anatomically contoured neoprene shoulder capsule with pressure pad pocket',
      'Adjustable chest strap with quick-release front buckle',
      'Bicep compression sleeve with dual hook-and-loop tensioners',
      'Flexible range-of-motion control straps for personalized restriction',
    ],
  },
];

export const DME_OVERVIEW_PILLARS = [
  {
    title: 'Targeted Pain Relief',
    desc: 'Medically engineered compression and mechanical unloading reduce direct pressure on inflamed nerves, cartilage, and tendons.',
    iconName: 'Activity',
  },
  {
    title: 'Joint & Spinal Stability',
    desc: 'Rigid and semi-rigid structural stays counteract weakness, restrict harmful twists, and keep joints properly aligned.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Mobility & Fall Prevention',
    desc: 'Supportive braces give seniors the stability and confidence needed to walk, climb stairs, and navigate homes safely.',
    iconName: 'HeartPulse',
  },
  {
    title: 'Everyday Independence',
    desc: 'Enables patients to perform daily living tasks—cooking, dressing, gardening, and walking—with greater ease and less fatigue.',
    iconName: 'Sparkles',
  },
];

export const DME_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Check Your Eligibility',
    subtitle: 'Fast 2-Minute Pre-Check',
    desc: 'Submit your basic information and insurance details through our simple online eligibility form. We review your coverage and eligibility details before moving forward.',
    iconName: 'ClipboardCheck',
    badge: 'Step 1 • 2 Minutes',
  },
  {
    step: '02',
    title: 'Review Your Information',
    subtitle: 'Clinical & Insurance Review',
    desc: 'Our clinical intake team and a licensed healthcare provider in your state review your submitted health details and verify your Medicare benefits.',
    iconName: 'Stethoscope',
    badge: 'Step 2 • Clinical Verification',
  },
  {
    step: '03',
    title: 'Determine DME Eligibility',
    subtitle: 'Medical Necessity Evaluation',
    desc: 'Your eligibility, specific joint condition, and equipment coverage are evaluated according to established Medicare and insurance guidelines.',
    iconName: 'FileCheck',
    badge: 'Step 3 • Doctor Order',
  },
  {
    step: '04',
    title: 'Get Your DME',
    subtitle: 'Direct-to-Home Delivery',
    desc: 'If approved and covered, your physician-prescribed DME product is shipped directly to your doorstep with delivery and fit guidance included.',
    iconName: 'Truck',
    badge: 'Step 4 • Fast Delivery',
  },
];

export const DME_COVERAGE_ROWS = [
  {
    feature: 'Patient Cost Responsibility',
    partB: 'Coverage varies by plan and authorization',
    advantage: 'Coverage depends on plan terms',
    supplemental: 'Additional plan coverage may apply',
    highlight: true,
  },
  {
    feature: 'Physician Digital Prescription Included',
    partB: 'Yes (Network MD)',
    advantage: 'Yes (Network MD)',
    supplemental: 'Yes (Included)',
    highlight: false,
  },
  {
    feature: 'FDA-Registered Orthopedic Equipment',
    partB: 'Yes (Medical Grade)',
    advantage: 'Yes (Medical Grade)',
    supplemental: 'Yes (Medical Grade)',
    highlight: false,
  },
  {
    feature: 'Direct-to-Home Shipping',
    partB: 'Yes (Delivery Included)',
    advantage: 'Yes (Delivery Included)',
    supplemental: 'Yes (Delivery Included)',
    highlight: false,
  },
  {
    feature: 'Personalized Sizing & Fitting Support',
    partB: 'Yes (Included)',
    advantage: 'Yes (Included)',
    supplemental: 'Yes (Included)',
    highlight: false,
  },
  {
    feature: 'Coverage Review Before Shipment',
    partB: 'Yes (Pre-Verified)',
    advantage: 'Yes (Pre-Verified)',
    supplemental: 'Yes (Coverage Review)',
    highlight: true,
  },
];

export const DME_FAQS = [
  {
    id: 'dme-faq-1',
    question: 'What is Durable Medical Equipment (DME) and does Medicare cover it?',
    answer:
      'Durable Medical Equipment (DME) refers to medically necessary, reusable supportive equipment—such as orthopedic back, knee, shoulder, elbow, and wrist braces—prescribed by a licensed healthcare provider for therapeutic support and pain management. Under Medicare Part B, medically necessary DME may be eligible for coverage when medical necessity and plan requirements are met. Coverage can vary by Medicare plan, supplemental coverage, and individual eligibility.',
    badge: 'Medicare Coverage',
  },
  {
    id: 'dme-faq-2',
    question: 'Why are we providing these DME products?',
    answer:
      'Our mission is to help eligible patients access medically necessary, high-grade orthopedic braces and supportive equipment through their available Medicare and insurance benefits. When a patient qualifies and the equipment meets medical necessity criteria, patients may be able to receive the appropriate DME through coverage that depends on their eligibility and plan requirements. We handle the clinical review, physician prescription coordination, and benefit verification to make obtaining necessary equipment seamless.',
    badge: 'Our Mission',
  },
  {
    id: 'dme-faq-3',
    question: 'Will I have to pay anything out-of-pocket for my brace?',
    answer:
      'Coverage depends on your specific Medicare plan, supplemental coverage, and medical necessity review. Your insurance may cover the full cost of eligible DME when eligibility and plan requirements are met, and we review those details upfront before any equipment is shipped.',
    badge: 'Costs & Billing',
  },
  {
    id: 'dme-faq-4',
    question: 'Do I need a doctor’s prescription to receive a brace?',
    answer:
      'Yes, Medicare requires a valid physician prescription and documented medical necessity for all durable medical equipment. You do not need to worry about obtaining this yourself—our clinical care coordination team works directly with your primary care provider or matches you with a state-licensed telehealth physician who evaluates your medical indications and issues the digital prescription if appropriate.',
    badge: 'Doctor Prescription',
  },
  {
    id: 'dme-faq-5',
    question: 'Can I qualify for more than one piece of equipment (e.g., both a knee brace and a back brace)?',
    answer:
      'Yes. If you suffer from multiple chronic joint or spinal conditions—such as lumbar spinal stenosis and knee osteoarthritis—a licensed physician can evaluate each anatomical area independently. If medical necessity criteria are met for multiple products, Medicare benefits can be applied for each indicated brace.',
    badge: 'Multiple Products',
  },
  {
    id: 'dme-faq-6',
    question: 'How do I ensure I receive the correct size and fit?',
    answer:
      'During your qualification process, our care coordinators collect key anatomical measurements (such as waist circumference for back braces or leg circumference for knee braces). All braces arrive with step-by-step sizing and fitting instructions, and our clinical support team is available by phone to guide you through initial adjustments.',
    badge: 'Sizing & Fitting',
  },
  {
    id: 'dme-faq-7',
    question: 'What happens after I submit the online eligibility check?',
    answer:
      'Submitting the form takes under 2 minutes. Our clinical intake team verifies your Medicare and insurance coverage, coordinates the physician review for medical necessity, and contacts you to confirm your details. Once approved, your customized brace is packaged and dispatched directly to your home via priority mail with tracking.',
    badge: 'Next Steps',
  },
];
