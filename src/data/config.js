export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@jnexeducation.com';
export const contactNumbers = [
  { value: '918097686335', display: '+91 80976 86335' },
  { value: '919004713195', display: '+91 90047 13195' },
];
export const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || contactNumbers[0].value).replace(/\D/g, '');
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
