# Approved content upgrade — 11 September 2026

Reference: `JNEX_Website_Updated_Content_SEO_Developer_Handoff_2026.docx`.
The document was used as the content/design brief. The original DOCX was not modified.

## Implemented

- Retained the existing React/Vite project, navy/gold visual identity and responsive layout system.
- Replaced hero, trust statements, planning paths, analysis/results, FAQs, parent content and closing copy.
- Added Pan-India discovery immediately after the trust strip, with 28 states and 8 separately grouped UT pathways. State selections personalise the profile; unpublished state guides are not linked or indexed.
- Added 19 pre-rendered routes, including `/mbbs-admission/`, admissions/service hubs, tools, counselling tracker and privacy information.
- Added keyboard-accessible desktop dropdowns and mobile navigation, plus the mobile action bar.
- Replaced unsupported college fees, seats, cutoffs, ratings and overseas pricing with verified-data empty states or requests to check current details.
- Added user-input cost comparison/calculator and an interactive counselling checklist.
- Added pathway previews before contact capture, validated contact inputs, explicit enquiry consent, honest error states and an email-draft fallback.
- Added build-time page titles/descriptions, social text metadata, one H1 per page, breadcrumb markup, Organization/WebSite schema, and conditional canonicals/sitemap.
- Added analytics event hooks without contact details, rank, category or budget in analytics payloads.

## Production configuration still needed

Copy `.env.example` to `.env.local` and configure:

- `VITE_SITE_URL`: confirmed production origin. Until supplied, builds deliberately use `noindex` and an empty sitemap to avoid indexing a preview or an invented domain.
- `VITE_CONTACT_EMAIL`: confirm the existing repository email with JNEX.
- `VITE_WHATSAPP_NUMBER`: real international number. Until supplied, the mobile bar shows **Contact JNEX**, replacing the old sample phone number.
- `VITE_LEAD_ENDPOINT`: optional actual enquiry backend. The site otherwise opens a draft in the visitor's email app and does not claim submission. The endpoint must validate consent and fields server-side, reject abuse, protect CRM credentials, and return success only after accepting the enquiry. No CRM or external messaging was configured or sent during this task.

The handoff provides no verified state articles, college dataset, counselling notices or guide articles. `src/data/admissions.js` is a shared structured content source with publication gates; it is **not an installed CMS**. Populate it with reviewed records or connect a CMS adapter. State pages require substantial sections, state-specific FAQs, authority sources and review dates before they are generated. Implement an agreed editorial freshness threshold when connecting live data. No pretend live deadlines or admissions predictions are published.

University-specific overseas eligibility, costs, duration and language remain subject to verification. No blanket recognition claims are made. Student stories remain unpublished without substantiated content and permission.

## Build and hosting

`npm run build` builds client assets, the server renderer and static HTML in `dist/`. Deploy the entire `dist/` directory with clean directory-index routing and `404.html` for missing pages. No domain, hosting account or deployment was changed. Original homepage hash anchors are retained; there were no existing route URLs requiring redirects.

The source course lists and substantive copy live in `src/data/portfolio.js`, `src/data/admissions.js`, the homepage components and `src/pages.jsx`.

## Verification

Production build passes. Browser coverage includes 320, 390, 768, 1024, 1280 and 1440 px, all 19 routes, profile progression, domicile preselection, contact validation, cost calculation, mobile menu keyboard handling, internal hash targets and browser errors. Screenshots are kept locally under `qa/approved/`.
