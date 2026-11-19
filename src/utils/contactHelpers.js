/**
 * RA Glass Care - Contact Helper Utilities
 * Astoria, Queens, New York City (NYC)
 * Pure JavaScript helper for auto-filling WhatsApp and Google Gmail links.
 * STRICT: NO mailto: links. All emails open Google Gmail Web Compose.
 */

export const BRAND_INFO = {
  name: "RA Glass Care",
  tagline: "Storefront & Commercial Window Cleaning",
  founder: "Rudro",
  serviceArea: "Astoria, Queens, New York City (NYC)",
  primaryPhone: "+1 (929) 501-1116",
  phoneDigits: "1929501116",
  secondaryPhone: "(646) 555-7810",
  secondaryPhoneDigits: "16465557810",
  email: "raglasscare@gmail.com",
};

/**
 * Builds auto-filled WhatsApp link
 * @param {string} [itemName] - Specific service or pricing tier name
 * @param {string} [customText] - Optional custom message override
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppLink(itemName, customText) {
  let message = "";

  if (customText) {
    message = customText;
  } else if (itemName) {
    message = `Hello RA Glass Care, I am interested in ${itemName} for my storefront. Can you share availability and details?`;
  } else {
    message = "Hello RA Glass Care, I would like to inquire about your storefront window cleaning services in Queens/NYC.";
  }

  return `https://wa.me/${BRAND_INFO.phoneDigits}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds auto-filled Google Gmail Web Compose link
 * NEVER uses mailto:
 * @param {string} [itemName] - Specific service or pricing tier name
 * @param {object} [details] - Optional extra metadata { location, time, businessName, customBody }
 * @returns {string} Fully encoded Google Gmail compose URL
 */
export function getGmailLink(itemName, details = {}) {
  let su = "";
  let body = "";

  if (itemName) {
    su = `Inquiry: ${itemName} - RA Glass Care`;
    body = [
      `Hello RA Glass Care,`,
      ``,
      `I am interested in booking or learning more about: ${itemName}.`,
      ``,
      details.businessName ? `Business Name: ${details.businessName}` : null,
      `Business Location: ${details.location || "Astoria / Queens / NYC"}`,
      `Preferred Day/Time: ${details.time || "Morning before opening"}`,
      details.notes ? `Notes: ${details.notes}\n` : null,
      `Best regards,`,
    ]
      .filter(Boolean)
      .join("\n");
  } else {
    su = "Window Cleaning Inquiry - RA Glass Care";
    body = [
      `Hello Rudro / RA Glass Care Team,`,
      ``,
      `I visited your website and would like to request a quote for storefront window cleaning.`,
      ``,
      `Business Name & Location: ${details.location || ""}`,
      `Preferred Schedule: ${details.time || "Weekly / Bi-Weekly"}`,
      ``,
      `Thank you!`,
    ].join("\n");
  }

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${BRAND_INFO.email}&su=${encodeURIComponent(
    su
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Builds a direct click-to-call link
 * @param {boolean} [secondary=false]
 * @returns {string}
 */
export function getPhoneLink(secondary = false) {
  return `tel:+${secondary ? BRAND_INFO.secondaryPhoneDigits : BRAND_INFO.phoneDigits}`;
}
