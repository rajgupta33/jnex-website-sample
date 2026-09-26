# Website image assets

All active images are served locally from `public/`. Keep only production assets there: Vite copies the entire directory into every deployment.

| Asset | Placement / source |
|---|---|
| `images/brand/jnex-logo.webp` | Supplied transparent JNEX logo, resized to 456 ? 456 (3? the largest displayed size), lossless WebP with transparency. The header and footer retain their existing crop and layout. |
| `favicon.png` | 64 ? 64 version of the supplied logo. |
| `images/hero/slide-1?4-desktop.webp` | Current desktop hero artwork from supplied / approved visuals. |
| `images/hero/slide-1-mobile.webp` | Current first-slide mobile artwork. |
| `images/hero/slide-{2,3}-mobile-v2.webp` | Approved generated mobile artwork, based on the supplied desktop references and mobile image brief. |
| `images/hero/slide-4-mobile-v3.webp` | Current slide 4 mobile artwork, composed for the 6:5 image band. |
| `images/page-intros/*.webp` | Route-specific decorative backdrops made from approved artwork and supplied resource imagery. |
| `images/thumbs/*.webp` | Lightweight previews of the supplied resource posters; full originals remain available as downloads. |
| `images/flags/*.svg` | Country flags from flag-icons; preserve the adjacent MIT `LICENSE.txt`. Paths are assembled dynamically from country codes. |
| `resources/*` | Linked original guides, posters, spreadsheets and NEET papers. These download on request. |

State outlines in `src/data/state-shapes.js` derive from @svg-maps/india (CC BY 4.0), credited in the footer. College crests are generated monogram shields, not official college logos. Illustrative imagery does not depict actual JNEX clients or named institutions.

Original generation prompts and artwork remain outside this checkout in the supplied image folders. Superseded deployment assets and the original full-size logo were backed up to `../cleanup-backup-2026-09-26/` during cleanup. Their earlier versions also remain in Git history.

Obsolete reference screenshots, campus photos, shared intro images, mobile hero revisions and template icons were removed after checking imports and all 58 rendered routes. Do not restore them to `public/` unless a live page uses them. Use `npm install` for setup; the superseded `setup.ps1` copied unused references and reinstalled unused packages.
