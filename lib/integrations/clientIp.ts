import { NextRequest } from 'next/server';

/**
 * Extracts the real client IP address from request headers or socket.
 * Checks proxy headers commonly used by Vercel, Cloudflare, AWS, NGINX, etc.
 */
export function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  const realIp = req.headers.get('x-real-ip');
  if (realIp && realIp.trim()) return realIp.trim();

  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp && cfIp.trim()) return cfIp.trim();

  const trueClientIp = req.headers.get('true-client-ip');
  if (trueClientIp && trueClientIp.trim()) return trueClientIp.trim();

  const fastlyIp = req.headers.get('fastly-client-ip');
  if (fastlyIp && fastlyIp.trim()) return fastlyIp.trim();

  const xClientIp = req.headers.get('x-client-ip');
  if (xClientIp && xClientIp.trim()) return xClientIp.trim();

  // Fallback to NextRequest.ip if available
  if ((req as any).ip) {
    return (req as any).ip;
  }

  return '127.0.0.1';
}
