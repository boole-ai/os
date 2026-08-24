"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Analytics component for enterprise-grade tracking
 *
 * Integrations ready for:
 * - Google Analytics 4
 * - Plausible Analytics
 * - PostHog
 * - Mixpanel
 * - Custom analytics endpoints
 *
 * Add your tracking IDs via environment variables:
 * - NEXT_PUBLIC_GA_ID
 * - NEXT_PUBLIC_PLAUSIBLE_DOMAIN
 * - NEXT_PUBLIC_POSTHOG_KEY
 */
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Google Analytics 4
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId && (window as any).gtag) {
      (window as any).gtag("config", gaId, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ""),
      });
    }

    // Plausible Analytics
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    if (plausibleDomain && (window as any).plausible) {
      (window as any).plausible("pageview");
    }

    // PostHog
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (posthogKey && (window as any).posthog) {
      (window as any).posthog.capture("$pageview");
    }

    // Custom analytics endpoint
    const analyticsEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
    if (analyticsEndpoint) {
      fetch(analyticsEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "pageview",
          pathname,
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {
        // Silently fail - analytics should never break the user experience
      });
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Track custom events
 * Usage: trackEvent("cta_click", { button: "get_started", location: "hero" })
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window === "undefined") return;

  // Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }

  // Plausible
  if ((window as any).plausible) {
    (window as any).plausible(eventName, { props: properties });
  }

  // PostHog
  if ((window as any).posthog) {
    (window as any).posthog.capture(eventName, properties);
  }

  // Custom endpoint
  const analyticsEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (analyticsEndpoint) {
    fetch(analyticsEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: eventName,
        properties,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  }
}
