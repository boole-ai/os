export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boole AI",
    "url": "https://boole.ai",
    "logo": "https://os.boole.ai/icon.png",
    "description": "AI infrastructure for device manufacturers",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://os.boole.ai"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Imagine OS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, Windows, Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free evaluation tier available"
    },
    "description": "On-device AI intelligence layer for device manufacturers. Generate custom applications on-demand with zero network access.",
    "featureList": [
      "On-device AI inference",
      "Zero network dependency",
      "Custom app generation",
      "Privacy-first architecture",
      "NPU optimization",
      "Multi-platform support"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Boole AI"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://os.boole.ai"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Imagine OS - On-Device AI Intelligence Layer",
    "description": "Licensed intelligence layer for device manufacturers. Generate custom apps on-demand, run entirely on-device with zero network access.",
    "url": "https://os.boole.ai",
    "publisher": {
      "@type": "Organization",
      "name": "Boole AI"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
