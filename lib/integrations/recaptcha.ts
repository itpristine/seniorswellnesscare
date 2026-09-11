import { NextRequest } from 'next/server';

interface RecaptchaVerificationResult {
  success: boolean;
  errorCodes?: string[];
}

export async function verifyRecaptcha(req: NextRequest, token: unknown): Promise<RecaptchaVerificationResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();

  if (!secret || typeof token !== 'string' || !token) {
    return { success: false, errorCodes: ['missing-input'] };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      return { success: false, errorCodes: [`google-http-${response.status}`] };
    }

    const result = await response.json() as {
      success?: boolean;
      'error-codes'?: string[];
    };
    return {
      success: result.success === true,
      errorCodes: result['error-codes'],
    };
  } catch {
    return { success: false, errorCodes: ['verification-request-failed'] };
  }
}