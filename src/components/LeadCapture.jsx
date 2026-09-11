import { useState } from 'react';
import { contactEmail, leadEndpoint, track } from '../data/config';
export default function LeadCapture({ profile }) {
  const [status, setStatus] = useState('');
  async function submit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget), name = fields.get('name').trim(), phone = fields.get('whatsapp').replace(/\D/g, '');
    if (name.length < 2 || phone.length < 10 || phone.length > 15) { setStatus('Please enter your full name and a valid WhatsApp number.'); return; }
    const payload = { name, whatsapp: phone, profile, consent: true, attribution: { landing_page: window.location.pathname, referrer: document.referrer, lead_form_id: 'profile-shortlist', timestamp: new Date().toISOString(), device_type: window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop', ...Object.fromEntries([...new URLSearchParams(window.location.search)].filter(([key]) => ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].includes(key))) } };
    if (!leadEndpoint) {
      const body = `Please help me prepare my college shortlist.\n\nName: ${name}\nWhatsApp: ${phone}\n${Object.entries(profile).map(([key, value]) => `${key}: ${value}`).join('\n')}\n\nI agree to be contacted about this admission enquiry.`;
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('My MBBS admission shortlist enquiry')}&body=${encodeURIComponent(body)}`;
      setStatus('Your email app has been requested. Send the prepared email to submit your enquiry; nothing has been submitted by this website.'); return;
    }
    setStatus('Sending your enquiry…');
    try { const response = await fetch(leadEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (!response.ok) throw new Error('Submission failed'); setStatus('Your enquiry has been received. A JNEX counsellor can review your profile and help with the next steps.'); track('shortlist_lead_submit', { form_id: 'profile-shortlist' }); }
    catch { setStatus('Your enquiry could not be sent. Please try again or contact JNEX by email.'); }
  }
  return <form onSubmit={submit} className="lead-form"><h4 className="text-lg font-bold">Unlock your personalised college shortlist.</h4>
    <label>Full Name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
    <label>WhatsApp Number<input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. +91 9123456789" required pattern="[+]?[0-9 ]{10,19}" maxLength={20} /></label>
    <p className="text-xs text-slate-600">Your details are used to respond to your admission enquiry and personalise your options. A JNEX counsellor may contact you by phone or WhatsApp. See our <a className="underline" href="/privacy-policy/">Privacy Policy</a>.</p>
    <label className="consent-label"><input type="checkbox" required /> <span>I agree to be contacted regarding this admission enquiry.</span></label>
    <button className="primary-button w-full" disabled={status === 'Sending your enquiry…'}>{leadEndpoint ? 'Get My College Shortlist →' : 'Request My Shortlist by Email →'}</button>
    {!leadEndpoint && <p className="text-xs text-slate-500">Opens an email draft for you to review and send.</p>}<p role="status" className="text-sm">{status}</p>
  </form>;
}
