export const CURRENT_YEAR = new Date().getFullYear();
export const regions = {
  'North India': ['Haryana', 'Punjab', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand', 'Himachal Pradesh'],
  'West & Central India': ['Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Chhattisgarh', 'Goa'],
  'South India': ['Karnataka', 'Tamil Nadu', 'Kerala', 'Telangana', 'Andhra Pradesh'],
  'East India': ['West Bengal', 'Bihar', 'Jharkhand', 'Odisha'],
  'North-East India': ['Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Tripura', 'Arunachal Pradesh', 'Sikkim'],
};
export const territories = ['Delhi (NCT)', 'Jammu & Kashmir', 'Chandigarh', 'Puducherry', 'Andaman & Nicobar Islands', 'Ladakh', 'Dadra & Nagar Haveli and Daman & Diu', 'Lakshadweep'];
export const states = Object.entries(regions).flatMap(([region, names]) => names.map(name => ({ name, region, slug: name.toLowerCase().replaceAll(' ', '-'), published: false })));
export const domicileOptions = [...states.map(s => s.name).sort(), ...territories, 'Other / NRI'];
export const featuredStates = ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Rajasthan', 'Madhya Pradesh', 'Gujarat', 'Haryana', 'Punjab', 'Tamil Nadu', 'Telangana', 'Andhra Pradesh', 'West Bengal'];
// Publish reviewed records here (or replace this module with a CMS adapter).
// Unknown figures are never substituted with sample numbers.
export const colleges = [];
export const updates = [];
export const guides = [];
export const dataNote = 'Fees, seats, cutoffs, schedules and counselling rules may change. Always confirm the final applicable rules with the relevant counselling authority/institution.';
export const predictorNote = 'Previous cutoffs and profile-based recommendations are decision-support references, not admission guarantees. Actual allotment depends on current rules, seat availability, rank/category, choices and counselling outcomes.';
export const admissionRoutes = [
  ['All India / Central Counselling', 'Review the counselling routes conducted through the relevant central authority for eligible seats and institutions. Eligibility and seat categories must follow the current official bulletin.'],
  ['State Counselling', 'Each state/UT may have its own registration, domicile, category, fee and seat rules. Check the current authority and schedule before applying.'],
  ['Government Medical Colleges', 'Compare available seats, previous rank trends, reservation rules and counselling route using current official data.'],
  ['Private Medical Colleges', 'Compare state eligibility, tuition, other disclosed costs, previous cutoff trends and the applicable counselling process.'],
  ['Deemed Universities', 'Compare institutions participating through the applicable counselling process, with attention to tuition, total cost, previous trends and eligibility.'],
  ['NRI / Other Applicable Quotas', 'Availability depends on the relevant authority/institution. Review the current eligibility and document rules for the specific route.'],
];
export const faq = [
  ['Does JNEX provide MBBS admission guidance across India?', 'Yes. JNEX provides counselling and admission guidance for students exploring MBBS pathways across India, including state and all-India routes, subject to current NEET eligibility, domicile/category rules, counselling regulations and institution-specific requirements.'],
  ['Can JNEX help me compare MBBS options outside my home state?', 'Yes. After reviewing your NEET score or AIR, domicile, category, budget and preferences, JNEX can help you identify states and admission routes that may be worth evaluating under the applicable counselling rules.'],
  ['Does JNEX guarantee an MBBS seat?', "No. Admission depends on NEET eligibility, rank, category, counselling rules, seat availability, choice filling and the relevant authority's allotment process. JNEX provides guidance, comparison and counselling support; it does not guarantee an allotment."],
  ['What types of MBBS colleges can I compare?', 'The website can help you compare Government, Private and Deemed University options where reliable current data is available, including fees, seats, previous cutoff trends and counselling routes.'],
  ['Can parents join the counselling process?', 'Yes. JNEX can discuss the admission route, total budget, college options and counselling process with the student and parent together.'],
  ['Does JNEX also provide MBBS Abroad guidance?', 'Yes. MBBS Abroad is a separate JNEX service. Students should compare eligibility, complete cost, course structure and licensing considerations before choosing a country or university.'],
];
export function publishedState(state) {
  return state.published && state.intro && state.counselling_authority && state.authority_url && state.last_reviewed && state.official_sources?.length && state.sections?.length >= 6 && state.faqs?.length >= 6;
}
export const profileLink = state => `/#counselling?state=${encodeURIComponent(state)}`;
