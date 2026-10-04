"use client";

import Script from "next/script";

export function SiteAnalytics() {
  // Skip in local dev unless explicitly opted in
  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_ENABLE_SITE_ANALYTICS !== "true"
  ) {
    return null;
  }

  return (
    <Script
      async
      defer
      strategy="afterInteractive"
      src="https://numbers.trumpstein.me/tracker.js"
      data-website-id="cmrhhwa530009lftp0ads1oex"
    />
  );
}
