export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@jnexeducation.com';
export const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
export const contactHref = `mailto:${contactEmail}`;
export const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}` : '/#contact';
export const leadEndpoint = import.meta.env.VITE_LEAD_ENDPOINT || '';
export const siteOrigin = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
export function track(event, parameters = {}) {
  if (typeof window === 'undefined') return;
  // Never pass personal contact details, rank, category or budget to analytics.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
}
