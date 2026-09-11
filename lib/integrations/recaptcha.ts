import { NextRequest } from 'next/server';

export async function verifyRecaptcha(req: NextRequest, token: unknown) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret || typeof token !== 'string' || !token) {
    return false;
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '',
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    return false;
  }

  const result = await response.json() as { success?: boolean };
  return result.success === true;
}