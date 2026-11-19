/**
 * Contact & Deep Link Utilities for RA Glass Care
 * Astoria, Queens, New York City (NYC)
 */

export const BUSINESS_INFO = {
  brandName: "RA Glass Care",
  tagline: "Storefront & Commercial Window Cleaning — Make Your Business Shine!",
  founder: "Rudro",
  phonePrimary: "+1 (929) 501-1116",
  phonePrimaryRaw: "1929501116",
  phonePrimaryFormatted: "(929) 501-1116",
  phoneSecondary: "(646) 555-7810",
  phoneSecondaryRaw: "16465557810",
  email: "raglasscare@gmail.com",
  serviceArea: "Astoria, Queens, New York City (NYC) & surrounding areas",
  businessHours: "Monday – Saturday: 7:00 AM – 7:00 PM (Early morning slots available before store opening)",
};

/**
 * Builds auto-filled WhatsApp direct link
 */
export function getWhatsAppUrl(
  serviceOrPlanName?: string,
  options?: {
    customMessage?: string;
    neighborhood?: string;
    panelCount?: string;
    frequency?: string;
    businessName?: string;
  }
): string {
  let message = "";

  if (options?.customMessage) {
    message = options.customMessage;
  } else if (serviceOrPlanName) {
    if (options?.neighborhood || options?.panelCount) {
      const parts = [
        `Hello RA Glass Care! I'm interested in booking your ${serviceOrPlanName} service.`,
        options.businessName ? `• Business Name: ${options.businessName}` : null,
        options.neighborhood ? `• Location: ${options.neighborhood}, NYC` : null,
        options.panelCount ? `• Estimated Panels: ${options.panelCount}` : null,
        options.frequency ? `• Schedule: ${options.frequency}` : null,
        "\nPlease share your earliest availability and pricing estimate. Thank you!",
      ].filter(Boolean);
      message = parts.join("\n");
    } else {
      message = `Hello RA Glass Care! I'm interested in booking your ${serviceOrPlanName} service for my business in Queens/NYC. Please share availability and pricing.`;
    }
  } else {
    message = "Hello RA Glass Care! I would like to request a free quote for window cleaning in NYC.";
  }

  return `https://wa.me/${BUSINESS_INFO.phonePrimaryRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds pre-filled Google Gmail Compose link (opens in browser tab without OS mail reader error)
 */
export function getEmailMailtoUrl(
  serviceOrPlanName?: string,
  details?: {
    location?: string;
    panels?: string;
    schedule?: string;
    businessName?: string;
    notes?: string;
    useStandardMailto?: boolean;
  }
): string {
  const plan = serviceOrPlanName || "Storefront Window Cleaning";
  const subject = `Quote Request: ${plan} - RA Glass Care`;

  const body = [
    `Hi Rudro / RA Glass Care Team,`,
    ``,
    `I am interested in your ${plan} service.`,
    ``,
    `Business Name: ${details?.businessName || "[Your Business Name]"}`,
    `Business Location: ${details?.location || "Astoria / Queens / NYC"}`,
    `Estimated Number of Glass Panels: ${details?.panels || "1–6 panels"}`,
    `Preferred Schedule: ${details?.schedule || "Weekly / Bi-Weekly / One-Time"}`,
    details?.notes ? `Additional Details: ${details.notes}\n` : ``,
    `Please get back to me with a quote and your earliest available cleaning slot.`,
    ``,
    `Best regards,`,
  ].join("\n");

  if (details?.useStandardMailto) {
    return `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Opens directly in Google Gmail web compose in a browser tab:
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${BUSINESS_INFO.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Builds direct telephone link
 */
export function getTelUrl(secondary: boolean = false): string {
  return `tel:+${secondary ? BUSINESS_INFO.phoneSecondaryRaw : BUSINESS_INFO.phonePrimaryRaw}`;
}
