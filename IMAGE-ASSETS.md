# Temporary homepage imagery

These images are for client approval and are illustrative, not photographs of JNEX clients or the named colleges. Replace the files or update the component image paths when final assets arrive.

| Local file (under public/images/) | Placement | Source |
|---|---|---|
| counselling-family.png | Parent guidance | Built-in image generation; fictional family and counsellor |
| campus-india.png | First college card | Built-in image generation; fictional campus |
| campus-courtyard.png | Second college card | Built-in image generation; fictional campus |
| campus-classic.jpg | Third college card | Peggy Paulson / Unsplash, University of Michigan Law Library; illustrative only |

Stock source: https://unsplash.com/photos/grand-stone-building-with-arched-windows-and-trees-1WHrO4LbFLE
License referenced by the source: https://unsplash.com/license
Download: https://images.unsplash.com/photo-1780104959608-c2a441a9cf0d?fm=jpg&fit=crop&w=1000&q=80

The unused campus-modern.jpg candidate is Laurence Langer's photograph of a university building, https://unsplash.com/photos/modern-university-building-with-trees-in-foreground-3E0u4RB7THo (Unsplash License). It is not rendered on the homepage.

## Built-in generation prompts

### counselling-family.png
Create a photorealistic editorial photograph for a premium Indian medical admissions counselling website. Landscape 3:2 composition. An Indian female university-age student around 19 with her Indian mother and father meeting a female Indian education counsellor in her 30s across a neat oak desk in a tasteful modern office. All four people naturally discussing a college brochure and laptop, reassuring candid expressions, no exaggerated smiles, realistic hands and anatomy, smart casual modest clothes, student wearing muted blue, warm natural window daylight, navy blue and beige office accents, green plant soft background, premium authentic documentary photography, medium-wide shot with all faces in central safe crop, eye level, subtle depth of field. No text, no logos, no watermark, no certificates or claims, no medical treatment, no lab coats. This is a fictional illustrative stock-style scene, not real clients. Save the generated image for use in the local website project.

### campus-india.png
Photorealistic architectural editorial stock photograph of a fictional Indian medical university campus. Wide 3:2 landscape. A handsome contemporary cream sandstone and white academic building with broad windows and a welcoming entrance, lush maintained lawns and palm trees, soft warm morning sunlight, calm blue sky, a few tiny university-age students walking on pathway for scale. Premium university brochure photography, natural restrained colors, realistic architecture, no readable signs or logos, no text, no watermark, not a representation of any real college. Composition suitable for a website card cropped to wide 16:9, building in central safe region.

### campus-courtyard.png
Photorealistic stock-style architectural photo for a premium medical university website card. Fictional Indian university campus, not a real named college. Wide landscape 3:2 composition. Elegant red brick and cream academic buildings arranged around a landscaped courtyard, contemporary Indian institutional architecture with broad shaded balconies, flowering trees, trimmed lawns, paved paths, welcoming calm environment. Crisp natural warm late afternoon light and pale blue sky, sophisticated restrained colors, realistic materials, architectural magazine photography, building centered for safe wide 16:10 crop. No readable text or logos, no watermark, no dramatic fantasy architecture, no close-up people.

## Implementation
Images are local, lazy-loaded, dimensioned to reserve layout space, and have descriptive alternative text. Captions identify illustration imagery. Card images have a restrained hover zoom with reduced-motion support. No real testimonials or identities were invented.

## Hero slider and visual refresh (added 2026-09-18)
| Local file | Placement | Source |
|---|---|---|
| images/hero/slide-1…4-desktop.webp, slide-1…4-mobile.webp | Homepage hero slider (desktop ≥768px for slide 1, ≥1024px for slides 2–4) | Client-supplied artwork (`hero slides reference + images`, slide 1 = existing hero), converted to WebP |
| images/page-intros/*.webp | Internal page intro backdrops | Route-specific optimized WebP files made from local approved artwork and supplied resource imagery |
| images/thumbs/*.webp | Resource card poster thumbnails | Top crops of the supplied state/abroad posters in public/resources |
| images/flags/gb, us, ca, au, de, ie, nz, fr, it, sg, ae .svg | Study abroad flags | flag-icons (MIT), same source as the existing flags |
| src/data/state-shapes.js | State outline icons | Simplified from @svg-maps/india (CC BY 4.0, credited in the footer). Jammu & Kashmir, Ladakh and small UTs are intentionally not drawn; they use a map pin. |

College crests are generated monogram shields, not official college logos. Replace them with supplied logos when available.

## Mobile hero correction (2026-09-19)

Slides 2–4 now use `images/hero/slide-{2,3,4}-mobile-v2.webp` below 768px.
Tablet and desktop use the existing desktop artwork; slide 1's artwork and content are preserved.
Built-in ImageGen created these illustrative scenes from the supplied desktop references and
`mobile image brief/JNEX-mobile-hero-image-brief.xlsx`. Original PNGs and exact generation
prompts are saved outside this checkout in `../mobile image brief/generated/`.

The final PNGs and WebP exports are exactly 1080 × 3840, with embedded sRGB profiles.
Each PNG is under 5 MB. After ImageGen returned smaller canvases, the user explicitly
approved standard image processing: proportional scaling plus dark sky/ground extension,
with smooth fades restricted to the sky and ground. People are never stretched or cropped.
The final delivery PNGs are `../mobile image brief/generated/slide-{2,3,4}-mobile.png`.
After the mobile screenshot review, the photo-only spacer was removed. The artwork now
covers the mobile hero behind the live copy, form, features, and restored pathway card,
matching slide 1's content structure. Cover framing can crop the artwork at some widths;
it never stretches it. Mobile photo zoom is disabled. The original files remain for rollback.

Validation: production build and all 31 prerendered routes succeeded. The new image URLs
are checked locally. Browser visual verification was unavailable in this session.

## Internal page imagery refresh (2026-09-19)

The repeated internal-page intro backdrops were replaced with route-specific files in
`public/images/page-intros/`. `src/pages.jsx` now maps each top-level internal route and
each published state guide to its own WebP file, and the India admissions split image now
uses `images/page-intros/india-directory-feature.webp` instead of the old shared
`images/intro/campus-courtyard.webp` image.

These page-intro files are optimized local WebP derivatives made from approved local site
assets, supplied resource posters, and the generated hero artwork. They are decorative,
aria-hidden page backdrops and should be replaced with final client-supplied photography
when available.
