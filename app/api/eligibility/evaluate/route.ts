import { NextRequest, NextResponse } from 'next/server';
import { FullEligibilitySchema } from '@/lib/validation/eligibilitySchema';
import { EligibilityResult } from '@/types/eligibility';
import { processFormIntegration } from '@/lib/integrations/formRouter';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = FullEligibilitySchema.parse(body);

    const isMedicarePartB = validatedData.insuranceType === 'medicare_part_b';
    const hasFamilyHistory =
      validatedData.conditions.length > 0 &&
      !validatedData.conditions.includes('general_preventive_wellness');
    const isPolypharmacy =
      validatedData.dailyMedsCount === '3_5' ||
      validatedData.dailyMedsCount === '6_plus' ||
      validatedData.adverseReactions;

    const recommendedPanels = [];

    if (validatedData.conditions.includes('cancer_hereditary') || hasFamilyHistory) {
      recommendedPanels.push({
        id: 'prog-cgx',
        name: 'Hereditary Cancer Risk Screening (CGx)',
        slug: 'cancer-genetics',
        reason: 'Recommended based on reported personal or family cancer history.',
      });
    }

    if (isPolypharmacy) {
      recommendedPanels.push({
        id: 'prog-pgx',
        name: 'Pharmacogenomics Drug-Gene Response (PGx)',
        slug: 'pharmacogenomics',
        reason: 'Recommended for patients on multiple daily medications or with adverse drug sensitivities.',
      });
    }

    if (validatedData.conditions.includes('neurocognitive_decline')) {
      recommendedPanels.push({
        id: 'prog-neuro',
        name: 'Neurocognitive & Dementia Genetics Panel',
        slug: 'neurocognitive',
        reason: 'Recommended for evaluation of age-related memory and neurological markers.',
      });
    }

    if (validatedData.conditions.includes('recurrent_infections_immune')) {
      recommendedPanels.push({
        id: 'prog-immune',
        name: 'Primary Immunodeficiency Panel',
        slug: 'immunodeficiency',
        reason: 'Recommended for recurring severe infections and immune defense assessment.',
      });
    }

    if (validatedData.conditions.includes('cardiovascular_early_attack')) {
      recommendedPanels.push({
        id: 'prog-cardio',
        name: 'Cardiovascular & Cardiometabolic Panel',
        slug: 'cardiovascular',
        reason: 'Recommended for hereditary heart health and familial lipid screening.',
      });
    }

    // Default recommendation if general wellness
    if (recommendedPanels.length === 0) {
      recommendedPanels.push({
        id: 'prog-cgx',
        name: 'Hereditary Cancer Risk Screening (CGx)',
        slug: 'cancer-genetics',
        reason: 'Baseline preventive screening panel for adult hereditary predispositions.',
      });
      recommendedPanels.push({
        id: 'prog-pgx',
        name: 'Pharmacogenomics Drug-Gene Response (PGx)',
        slug: 'pharmacogenomics',
        reason: 'Personalized prescription medication metabolism profile.',
      });
    }

    const confirmationCode = 'AEG-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    let coverageTier: EligibilityResult['coverageTier'] = 'Medicare Part B ($0 Out-of-Pocket)';
    let estimatedCost: EligibilityResult['estimatedCost'] = '$0.00';

    if (validatedData.insuranceType === 'medicare_advantage') {
      coverageTier = 'Medicare Advantage (Covered / Verification)';
      estimatedCost = 'Covered w/ Authorization';
    } else if (validatedData.insuranceType === 'commercial_insurance') {
      coverageTier = 'Commercial Insurance Concierge';
      estimatedCost = 'Covered w/ Authorization';
    } else if (validatedData.insuranceType === 'self_pay') {
      coverageTier = 'Self-Pay / Clinical Review';
      estimatedCost = 'Transparent Flat Rate';
    }

    const result: EligibilityResult = {
      qualified: true,
      coverageTier,
      estimatedCost,
      recommendedPanels,
      physicianReviewNotice: `An independent state-licensed physician is reviewing your intake submission. You will receive an SMS and email notification once your at-home collection kit is approved and dispatched.`,
      confirmationCode,
    };

    // Route submission to Email & Google Sheets integration
    const formType = (body.formType || validatedData.formType || 'genetic_testing') as 'genetic_testing' | 'dme';
    await processFormIntegration(req, {
      ...validatedData,
      formType,
      primaryInsurance: validatedData.primaryInsurance || body.primaryInsurance || body.primaryInsuranceNumber,
      primaryInsuranceType: validatedData.insuranceType || body.primaryInsuranceType,
      confirmationCode,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Validation failed', errors: error.errors || error.message },
      { status: 400 }
    );
  }
}
