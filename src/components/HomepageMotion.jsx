import { useEffect, useRef, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

// Content stays visible before observation and when motion is disabled.
export default function HomepageMotion() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return;
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        const index = target.parentElement?.classList.contains('grid')
          ? [...target.parentElement.children].indexOf(target) % 4 : 0;
        const animation = target.animate([
          { opacity: 0.25, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 560, delay: index * 65, easing: 'cubic-bezier(.2,.65,.3,1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('main h2, #india .grid > a, #tools .grid > a, #neet-counselling .grid > div, #abroad .grid > div, #live-updates .grid > div, .hero-copy > h1, .hero-copy > p, .hero-snapshot')
      .forEach(element => observer.observe(element));
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [reduced]);
  return null;
}

export function TypedIntro() {
  const phrase = 'A clearer path to your medical future.';
  const reduced = useReducedMotion();
  const [length, setLength] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setLength(previous => {
        if (previous >= phrase.length) { window.clearInterval(timer); return previous; }
        return previous + 1;
      });
    }, 42);
    return () => window.clearInterval(timer);
  }, [reduced]);
  return <div className="typed-intro">
    <span className="sr-only">{phrase}</span>
    <span aria-hidden="true" className="typed-reserve">{phrase}</span>
    <span aria-hidden="true" className="typed-display">{reduced ? phrase : phrase.slice(0, length)}{!reduced && length < phrase.length && <span className="typing-caret" />}</span>
  </div>;
}

export function CountUp({ value }) {
  const element = useRef(null);
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const completed = useRef(false);
  useEffect(() => {
    if (reduced || completed.current || !('IntersectionObserver' in window)) { setDisplay(value); return; }
    let frame;
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return;
    const target = Number(match[1].replaceAll(',', ''));
    const decimals = match[1].includes('.') ? 1 : 0;
    const formatter = new Intl.NumberFormat('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / 1300, 1);
        setDisplay(formatter.format(target * (1 - (1 - progress) ** 3)) + match[2]);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else { completed.current = true; setDisplay(value); }
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(element.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, reduced]);
  return <span ref={element} className="count-up"><span className="sr-only">{value}</span><span aria-hidden="true">{reduced ? value : display}</span></span>;
}
