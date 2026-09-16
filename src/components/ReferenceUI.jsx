import { Phone, MessageCircle } from 'lucide-react';
import { contactNumbers, track } from '../data/config';

export function ContactNumbers({ dark = false, compact = false }) {
  return <div className={`contact-numbers ${dark ? 'on-dark' : ''} ${compact ? 'compact' : ''}`}>
    {contactNumbers.map(number => <div className="contact-number" key={number.value}>
      <a href={`tel:+${number.value}`} onClick={() => track('phone_click')}><Phone size={16} aria-hidden="true" />{number.display}</a>
      <a href={`https://wa.me/${number.value}`} onClick={() => track('whatsapp_click')} aria-label={`WhatsApp ${number.display}`}><MessageCircle size={16} aria-hidden="true" />WhatsApp</a>
    </div>)}
  </div>;
}

export function Pagination({ page, pages, setPage, label }) {
  if (pages < 2) return null;
  return <nav className="reference-pagination" aria-label={`${label} result pages`}>
    <button type="button" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button>
    <span aria-live="polite">Page {page} of {pages}</span>
    <button type="button" disabled={page >= pages} onClick={() => setPage(page + 1)}>Next</button>
  </nav>;
}
