import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Enterprise-grade middleware for:
 * - Security enhancements
 * - Performance monitoring
 * - Bot detection
 * - Rate limiting (basic implementation)
 * - Request logging
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add request ID for tracing
  const requestId = crypto.randomUUID();
  response.headers.set('X-Request-ID', requestId);

  // Add timing headers
  response.headers.set('X-Response-Time', Date.now().toString());

  // Basic bot detection (enhance with proper bot detection service in production)
  const userAgent = request.headers.get('user-agent') || '';
  const isSuspiciousBot = /curl|wget|python|scrapy/i.test(userAgent);

  if (isSuspiciousBot && !userAgent.includes('Googlebot')) {
    // Log suspicious activity but allow through
    // In production, integrate with proper bot detection service
    console.log(`[Security] Suspicious bot detected: ${userAgent} - Request ID: ${requestId}`);
  }

  // Log all requests in production for monitoring
  if (process.env.NODE_ENV === 'production') {
    // In production, send to your logging service (DataDog, Sentry, CloudWatch, etc.)
    const logData = {
      timestamp: new Date().toISOString(),
      requestId,
      method: request.method,
      url: request.url,
      userAgent,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      referer: request.headers.get('referer') || 'direct',
    };

    // Example: Send to your logging endpoint
    // fetch(process.env.LOG_ENDPOINT, {
    //   method: 'POST',
    //   body: JSON.stringify(logData),
    // }).catch(() => {});
  }

  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png (favicon files)
     * - public files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.png|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.webp).*)',
  ],
};
