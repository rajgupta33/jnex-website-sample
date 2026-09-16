# Information addition: review and placement plan

Reviewed and implemented locally on 16 September 2026 after the user authorised reasonable decisions on fees/cutoffs, confirmed veterinary/BNYS/research services and requested both contact numbers. Supplied admission figures are labelled as references rather than independently verified current fee orders or allotment results.

## Implemented outcome

- Ten state planning pages, each with six planning sections, six FAQs, authority links and state-filtered college records. Nine contain readable poster fee transcriptions; Maharashtra has route/funding guidance and Karnataka has a Bengaluru subsection.
- Medical directory with 320 supplied source records, search/state/management filters and pagination. The homepage displays a six-record preview. Verified records retain the existing publication checks; imported references are explicitly labelled separately.
- Engineering directory consolidating 138 source rows into 127 institution references, with original provenance and separate campus records.
- Eight healthcare career groups and nine detailed allied-health course profiles, including user-confirmed veterinary, BNYS and research pathways.
- Four featured overseas destinations on the homepage, with all fourteen and eight source-labelled approximate budget ranges on the medical-abroad page. Unsupported ranking/recognition/performance claims are not adopted.
- Resource library covering all 20 original files. Downloaded originals retain their source wording and are accompanied by website notes.
- Both +91 8097686335 and +91 9004713195 available for calls and WhatsApp. The first is the default sticky WhatsApp destination; an environment override remains supported.
- Production build and source integrity checks pass across 31 generated routes. All original downloads match their source file hashes; generated internal links/anchors and heading counts pass.
- No browser interaction or screenshot QA was performed in this update. Hosting lookup returned `project_not_found` for the saved project ID; no replacement project was created and no deployment occurred.

## Decisions on unresolved source data

Keep workbook fee values under “reported fee · period unconfirmed” and poster figures under their exact source-period/quota labels. Neither feeds the calculator. Missing fees and zero-seat records request confirmation. Do not publish conflicting state seat aggregates. Poster scores and Maharashtra projections are not treated as actual 2026 cutoffs or used in predictions. Retain official authority links for current confirmation.

## Source inventory

All 20 files in `../info addition/` were inspected:

- Nine state posters: Andhra Pradesh, Gujarat (`Gijrat.png`), Karnataka, Kerala, Madhya Pradesh, Rajasthan, Tamil Nadu, Uttar Pradesh and West Bengal.
- One Bengaluru admissions poster (`PHOTO-2026-07-01-11-39-47.jpg.jpeg`).
- Medical career options after Class 12 PCB poster.
- MBBS Abroad fees poster.
- Medical fees workbook: 58 deemed records, 262 private records, and a separate state seat summary.
- Maharashtra MBBS guide: 14 pages covering authorities, registration costs, fee waivers, projected chances, deemed colleges and private/deemed comparisons.
- Allied health guide: 12 pages covering nine programs, subjects, eligibility, duration, careers and work settings.
- Four engineering directories: India, Karnataka, Maharashtra and Tamil Nadu, two pages each; institution names, locations and affiliation/status rather than fee or cutoff datasets.
- Study abroad guide: one page, 14 medical destinations, typical duration and instruction medium. Despite its filename, it is a medical education directory, not a general undergraduate/postgraduate overseas guide.

## Existing website and recommended placement

The homepage already has many sections. Use its existing discovery sections as entry points and place detailed information on the relevant pages. Extend the navy/gold design with readable text and tables; retain posters as optional reference assets only after their errors are resolved.

| Material | Main placement | Homepage entry point | Presentation |
| --- | --- | --- | --- |
| Medical workbook | `/medical-colleges/`, also reused by private/deemed pages | Existing College Explorer | Searchable records, state and management filters, clear fee period and quota, seats, university, source and review date; pagination rather than hundreds of homepage cards |
| Nine state posters | `/mbbs-admission/{state}/` | Existing Pan-India/state explorer | State overview, authority, eligibility, quota-specific fees, separately labelled cutoff references, official links and FAQs; link to the same college records |
| Maharashtra guide | `/mbbs-admission/maharashtra/` | State explorer and existing Guides section | Counselling route comparison, steps, costs and documents; scholarship section linked to `/scholarships/`; historical trends separated from projections |
| Bengaluru poster | Karnataka page, Bengaluru subsection | Karnataka state entry | Location-based college shortlist; only include score/budget claims after their basis is confirmed |
| Class 12 medical options | `/medical-admissions/` | Existing Beyond MBBS section | Grouped career pathways with course names, qualifications, entry route and duration; confirm veterinary, BNYS and research-course service scope |
| Allied health guide | `/medical-admissions/#allied-health`, with nursing/BPT detail in their own existing sections | Beyond MBBS cards | Nine course profiles with subjects, clinical training, typical duration, entry requirements, roles and workplaces; link the reviewed guide |
| Engineering PDFs | Proposed `/india-admissions/engineering/` | Existing India Admissions card | Searchable directory with India/Karnataka/Maharashtra/Tamil Nadu views, college location/status and optional PDF downloads; deduplicate national/state overlaps |
| MBBS abroad poster and medical destination PDF | `/mbbs-abroad/` | Existing MBBS Abroad section, four featured destinations | Full 14-destination directory; distinguish eight countries with supplied cost ranges from six without; typical durations and medium tied to institution checks |
| Reviewed downloadable guides | Proposed `/resources/` | Existing Guides section | Categorised Medical India, Medical Abroad, Allied Health and Engineering resources; preview/download links, editions and source notes |

General `/study-abroad/` should link to the medical overseas directory, while preserving its broader non-medical programs. Do not use the medical directory as evidence for general overseas tuition, visas or postgraduate requirements.

## Source conflicts and decisions needed before adding content

1. **Fee period and quota:** both workbook fee columns explicitly say total course, but several values resemble yearly fees in posters. For example Karnataka Kempegowda is 1,200,867 in the workbook and yearly in the poster. Confirm each fee's period and applicable quota before any import or calculator integration.
2. **Conflicting amounts:** Andhra Pradesh workbook values are commonly 1,200,000 while the poster shows 13.2 lakh yearly. St John's Karnataka is 1,200,867 in the workbook versus 811,285 yearly in the poster. Kerala Amala is 777,179 in the workbook versus 816,038 management fees in the poster. Decide the authoritative edition/source, preferably with official notices.
3. **West Bengal units:** the poster explicitly states semester fees. Store this separately; any annualised estimate must state the conversion assumption and remain distinct from the published semester figure.
4. **Cutoff metadata:** posters labelled 2026 do not clearly establish whether scores are actual 2026 allotments, older trends or projections. Category, quota, round and year must accompany each value. The Maharashtra guide explicitly contains 2025-based projections; its score claims must not drive the predictor as actual cutoffs.
5. **Workbook summary:** college rows total Chhattisgarh 1,150 versus summary 2,500; Uttarakhand 450 versus 700; Odisha 850 versus 1,100; Andhra Pradesh 3,650 versus 3,800. Madhya Pradesh and Meghalaya appear in detail but are absent from the summary. Confirm whether the summary has a different scope or contains errors. Its grand-total formula has no cached displayed result.
6. **Incomplete records:** private rows 26, 44, 46 and 173 have missing fees; row 252 has zero seats. Mark unknowns explicitly and confirm whether zero means no intake. A deemed university is also named in the private sheet; review management classification and cross-sheet duplicates.
7. **Poster errors:** Andhra Pradesh repeats Santhiram/Shanthiram and labels Anna Gowri Medical College as Mauritius, while the workbook places it in Andhra Pradesh. Karnataka includes a footer referring to Andhra Pradesh. Correct institution names and classifications before transcription or downloads.
8. **Course inconsistencies:** allied health PDF durations for cardiac/perfusion courses differ from the Class 12 poster. The PDF's final blanket PCB requirement contradicts its own aesthetic science/PCM exceptions. Verify program-specific requirements; avoid a single universal eligibility rule.
9. **Abroad claims:** the poster includes country rankings, FMGE performance claims and “NMC approved university” wording without supporting university-level evidence. Verify or revise these statements before publication; confirm what the approximate total fees include and which intake they describe.
10. **Maharashtra claims:** verify the guide's qualifying-score statement, registration charges, scholarship eligibility and category rules before publishing them as current facts. Its hospital-exposure/ROI stars have no stated methodology.
11. **Engineering labels:** directories contain government-aided colleges despite private-only titles and provide broad approval/ranking attribution without record-level references. Use a suitable scope label and verify affiliation/approval where shown; do not invent rankings, fees, branches or cutoffs.
12. **Contacts:** supplied posters give 8097686335 and 9004713195. Confirm the primary phone/WhatsApp number before modifying shared contact details. The generic Bengaluru poster has no JNEX contact attribution.

## Implementation sequence after clarification

1. Resolve fee periods, source precedence, cutoff editions and service scope. Preserve raw supplied values with file/sheet/row or image/page provenance.
2. Verify current numerical and regulatory claims against counselling authorities, fee orders, institutions and relevant regulators. Record evidence and review dates; unresolved fields remain unpublished or explicitly unknown.
3. Create a shared structured college dataset, with management, state, city, quota, fee period/currency/year, seats/year and separate cutoff records. Do not bypass the existing verified-data gates by labelling supplied files as official sources.
4. Expand the college directory and cost tool only with compatible fee periods; keep tuition and complete course cost distinct.
5. Build substantive state pages. Existing publication checks require authority links, official sources, review date, at least six sections and six FAQs; posters alone do not satisfy them.
6. Expand medical/allied-health, engineering and medical-abroad pages; add the reviewed resource library and targeted homepage links.
7. Add the new routes to prerendering and navigation. Check source transcriptions, fee labels, filters, internal links, downloads and production build. Publish only within the agreed task scope.

## Proposed design treatment

- Homepage: retain existing section order; show a small selection of helpful new guides and links to full directories.
- State pages: overview, counselling routes, eligibility, fees, historical cutoffs, documents, scholarships where relevant, FAQs and an enquiry action carrying the selected state.
- Dense college tables: readable mobile cards or horizontally scrollable tables with labelled fee periods; filters before results.
- Downloads: supplementary to readable website content, with no broken links or misleading claims of verified/live data.
- Keep source fields separate from presentation copy so future fee and cutoff updates can be reviewed centrally.
