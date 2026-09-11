'use client';

import ReCAPTCHA from 'react-google-recaptcha';

interface GoogleCaptchaProps {
  onChange: (token: string | null) => void;
}

export function GoogleCaptcha({ onChange }: GoogleCaptchaProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return (
      <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
        CAPTCHA is unavailable. Please configure the reCAPTCHA site key before submitting.
      </p>
    );
  }

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
      onExpired={() => onChange(null)}
      onErrored={() => onChange(null)}
    />
  );
}