import fs from 'node:fs/promises';
import path from 'node:path';
import { render, pages, siteOrigin } from '../dist-ssr/prerender.js';
const template = await fs.readFile('dist/index.html', 'utf8');
const escape = text => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
if (siteOrigin && !/^https?:\/\/[^/]+$/.test(siteOrigin)) throw new Error('VITE_SITE_URL must be an absolute origin without a path.');
for (const [route, [title, description, heading]] of Object.entries(pages)) {
  const canonical = siteOrigin ? siteOrigin + route : '';
  const schema = route === '/' ? [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'JNEX Education', ...(siteOrigin && { url: siteOrigin }) }, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'JNEX Education', ...(siteOrigin && { url: siteOrigin }) }] : canonical ? [{ '@context': 'https://schema.org', '@type': 'WebPage', name: heading, url: canonical }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteOrigin + '/' }, { '@type': 'ListItem', position: 2, name: heading, item: canonical }] }] : [];
  const metadata = `<title>${escape(title)}</title><meta name="description" content="${escape(description)}"/><meta property="og:title" content="${escape(title)}"/><meta property="og:description" content="${escape(description)}"/><meta property="og:type" content="website"/><meta name="twitter:card" content="summary"/><meta name="twitter:title" content="${escape(title)}"/><meta name="twitter:description" content="${escape(description)}"/>${canonical ? `<link rel="canonical" href="${escape(canonical)}"/><meta property="og:url" content="${escape(canonical)}"/>` : '<meta name="robots" content="noindex,follow"/>'}<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`;
  const html = template.replace(/<title>[\s\S]*?<\/title>/, '').replace(/<meta name="description"[^>]*>/, '').replace('</head>', metadata + '</head>').replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const directory = path.join('dist', route); await fs.mkdir(directory, { recursive: true }); await fs.writeFile(path.join(directory, 'index.html'), html);
}
await fs.writeFile('dist/404.html', template.replace('<div id="root"></div>', `<div id="root">${render('/404/')}</div>`).replace('</head>', '<meta name="robots" content="noindex"/></head>'));
await fs.writeFile('dist/robots.txt', siteOrigin ? `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
await fs.writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${siteOrigin ? Object.keys(pages).map(route => `<url><loc>${escape(siteOrigin + route)}</loc></url>`).join('') : ''}</urlset>`);
console.log(`Pre-rendered ${Object.keys(pages).length} pages. ${siteOrigin ? 'Canonical URLs and sitemap enabled.' : 'Set VITE_SITE_URL to enable production canonicals and indexing.'}`);
