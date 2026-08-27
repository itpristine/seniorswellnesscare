import { NextRequest } from 'next/server';
import { getClientIp } from './clientIp';
import { CONSENT_STATEMENTS, formatConsentStatus } from './consentStatements';
import { appendToGoogleSheet } from './sheetsService';
import { sendSubmissionEmail } from './emailService';
import {
  FormSubmissionData,
  GeneticTestingSubmission,
  DmeSubmission,
  MedicalAlertSubmission,
  ContactSubmission,
} from './types';

/**
 * Handles end-to-end integration for patient form submissions:
 * 1. Captures client IP address.
 * 2. Attaches exact verbatim consent statement and affirmative status ("I Agree").
 * 3. Concurrently appends to Google Sheet (if applicable) and sends routed email.
 */
export async function processFormIntegration(
  req: NextRequest,
  input: any
): Promise<{
  ipAddress: string;
  emailResult: any;
  sheetResult: any;
}> {
  const ipAddress = getClientIp(req);
  const userAgent = req.headers.get('user-agent') || undefined;
  const referrer = req.headers.get('referer') || undefined;
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });

  const meta = {
    ipAddress,
    submittedAt,
    userAgent,
    referrer,
  };

  const formType = input.formType || 'genetic_testing';
  let submissionData: FormSubmissionData;

  if (formType === 'genetic_testing') {
    const consentGiven = Boolean(input.consent || input.smsConsent);
    submissionData = {
      formType: 'genetic_testing',
      firstName: input.firstName || '',
      lastName: input.lastName || '',
      email: input.email || undefined,
      phone: input.phone || '',
      state: input.state || '',
      dateOfBirth: input.dateOfBirth || '',
      primaryInsuranceType: input.insuranceType || input.primaryInsuranceType || '',
      primaryInsuranceNumber: input.primaryInsurance || input.primaryInsuranceNumber || '',
      consent: consentGiven,
      consentStatement: CONSENT_STATEMENTS.EXPRESS_WRITTEN_CONSENT,
      consentStatus: formatConsentStatus(consentGiven),
      meta,
      conditions: input.conditions,
      dailyMedsCount: input.dailyMedsCount,
      adverseReactions: input.adverseReactions,
      gender: input.gender,
      streetAddress: input.streetAddress,
      suite: input.suite,
      city: input.city,
      zipCode: input.zipCode,
      isCaregiverApplying: input.isCaregiverApplying,
      confirmationCode: input.confirmationCode,
    } as GeneticTestingSubmission;
  } else if (formType === 'dme') {
    const consentGiven = Boolean(input.consent || input.smsConsent);
    submissionData = {
      formType: 'dme',
      firstName: input.firstName || '',
      lastName: input.lastName || '',
      email: input.email || undefined,
      phone: input.phone || '',
      state: input.state || '',
      dateOfBirth: input.dateOfBirth || '',
      primaryInsuranceType: input.insuranceType || input.primaryInsuranceType || '',
      primaryInsuranceNumber: input.primaryInsurance || input.primaryInsuranceNumber || '',
      consent: consentGiven,
      consentStatement: CONSENT_STATEMENTS.EXPRESS_WRITTEN_CONSENT,
      consentStatus: formatConsentStatus(consentGiven),
      meta,
      confirmationCode: input.confirmationCode,
    } as DmeSubmission;
  } else if (formType === 'medical_alert') {
    const consentGiven = Boolean(input.consent);
    submissionData = {
      formType: 'medical_alert',
      firstName: input.firstName || '',
      lastName: input.lastName || '',
      email: input.email || '',
      phone: input.phone || '',
      state: input.state || '',
      dateOfBirth: input.dateOfBirth || '',
      consent: consentGiven,
      consentStatement: CONSENT_STATEMENTS.EXPRESS_WRITTEN_CONSENT,
      consentStatus: formatConsentStatus(consentGiven),
      meta,
      confirmationCode: input.confirmationCode,
    } as MedicalAlertSubmission;
  } else {
    // Contact
    submissionData = {
      formType: 'contact',
      name: input.name || '',
      email: input.email || '',
      phone: input.phone || '',
      topic: input.topic || 'General Inquiry',
      message: input.message || '',
      meta,
    } as ContactSubmission;
  }

  // Execute Email and Google Sheets sync concurrently
  const [emailOutcome, sheetOutcome] = await Promise.allSettled([
    sendSubmissionEmail(submissionData),
    appendToGoogleSheet(submissionData),
  ]);

  const emailResult =
    emailOutcome.status === 'fulfilled'
      ? emailOutcome.value
      : { success: false, error: (emailOutcome as PromiseRejectedResult).reason?.message };

  const sheetResult =
    sheetOutcome.status === 'fulfilled'
      ? sheetOutcome.value
      : { success: false, error: (sheetOutcome as PromiseRejectedResult).reason?.message };

  return {
    ipAddress,
    emailResult,
    sheetResult,
  };
}
