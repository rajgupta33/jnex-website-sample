// Official MBBS college list from the National Medical Commission (College and Course Search, M.B.B.S.).
// Retrieved 2026-09-22; NMC states the data is valid as on 17 Sep 2026 for AY 2026-27.
// Each supplied college record is matched to its NMC entry (official intake, management, university);
// NMC colleges with no supplied record are listed as "NMC directory" records. National institutes such as
// AIIMS and JIPMER are not part of this NMC list, so the supplied entries for them are kept as they are.
import nmc from './nmc-mbbs-colleges.json';

export const nmcSource = { name: 'National Medical Commission college directory', url: nmc.sourceUrl, validAsOn: nmc.validAsOn, academicYear: nmc.academicYear, totalColleges: nmc.totalColleges, totalSeats: nmc.totalSeats };
const nmcColleges = nmc.rows.map(([code, name, state, management, seats, university, established, recognition]) => ({ code, name, state, management, seats, university, established, recognition }));

const stop = new Set(['and', 'of', 'the', 'hospital', 'hopsital', 'college', 'collage', 'medical', 'medial', 'med', 'col', 'institute', 'instt', 'inst', 'sciences', 'science', 'sci', 'research', 'researc', 'reseach', 'centre', 'center', 'rc', 'ri', 'womens', 'mch', 'teaching', 'memorial', 'foundation', 'foundations', 'education', 'dist', 'distt', 'district', 'previously', 'prev', 'formerly', 'formarly', 'known', 'as', 'faculty', 'school', 'health', 'ims', 'for', 'at', 'in', 'by', 'pvt', 'ltd', 'minority', 'linguistic', 'muslim', 'christian', 'telugu', 'tamil', 'tulu', 'kodava', 'malayalam', 'jain', 'sikh', 'baudh', 'private', 'univ', 'deemed', 'uni', 'university', 'hosp', 'academy', 'dr', 'smt', 'shri', 'shree', 'sri', 'up', 'hp', 'wb', 'cg']);
const generic = new Set(['government', 'gmers', 'esic', 'aiims', 'all', 'india', 'autonomous', 'state', 'employees', 'insurance', 'corporation', 'municipal']);
const spelling = { appolo: 'apollo', ayyan: 'ayaan', maheswara: 'maheshwara', mallareddy: 'malla reddy', govt: 'government', bangalore: 'bengaluru', mangalore: 'mangaluru', mysore: 'mysuru', vadodra: 'vadodara', baroda: 'vadodara', gulbarga: 'kalaburagi', gulburga: 'kalaburagi', belgaum: 'belagavi', tumkur: 'tumakuru', davangere: 'davanagere', shimoga: 'shivamogga', bhubaneshwar: 'bhubaneswar', vishakapatnam: 'visakhapatnam', karnool: 'kurnool', trivandrum: 'thiruvananthapuram', calicut: 'kozhikode', pondicherry: 'puducherry', gurgaon: 'gurugram', muzzafarpur: 'muzaffarpur', shanthiram: 'santhiram', chitoor: 'chittoor', sarswati: 'saraswati', hosain: 'hossain', jakir: 'jakar', mehaboobnagar: 'mahabubnagar', mehboobnagar: 'mahabubnagar', porompat: 'porompet', mahraja: 'maharaja', swamiinarayan: 'swaminarayan', teerthankar: 'teerthanker', somervell: 'somervel', mm: 'maharishi markandeshwar', mgm: 'mahatma gandhi mission', missions: 'mission', basaveshwara: 'basaveswara', jameshedpur: 'jamshedpur', dehradum: 'dehradun', bhatinda: 'bathinda', misra: 'mishra', rajendar: 'rajendra', sirmour: 'sirmaur', coporation: 'corporation', adiparashakti: 'adiparasakthi', vivekanandha: 'vivekananda', jogulumba: 'jogulamba' };

// Letters written as initials ("P E S", "C. U. Shah", "N.H.L.") are joined into one token.
function tokens(text) {
  const words = text.toLowerCase().replace(/[.&]/g, ' ').replace(/[^a-z ]/g, ' ').split(/\s+/).filter(Boolean);
  const joined = [];
  for (const word of words) if (word.length === 1 && joined.length && /^[a-z]+$/.test(joined.at(-1)) && joined.initials) joined[joined.length - 1] += word; else { joined.push(word); joined.initials = word.length === 1; }
  return new Set(joined.flatMap(word => (spelling[word] || word).split(' ')).filter(word => word.length > 1 && !stop.has(word)));
}
const shared = (a, b) => [...a].filter(token => b.has(token));

// Renamed colleges and names too different to match automatically: supplied name -> NMC name.
const aliases = {
  'Hazaribagh Medical College': 'Sheikh Bhikhari Medical College & Hospital, Hazaribag',
  'B.L.D.E. University': 'Shri B M Patil Medical College, Hospital & Research Centre, Vijayapura (Bijapur',
  'Fakhruddin Ali Ahmed Medical College & Hospital': 'Barpeta Medical College & Hospital, Barpeta, Assam',
  'Helen Lepcha Sikkim Government Medical College (HLSGMC)': 'Sikkim Government Medical College',
  'VMKV Medical College & Hospital': 'Vinayaka Missions Kirupananda Variyar Medical College, Salem',
  'Rural Medical College & PIMS': 'Rural Medical College, Loni',
  'Shri Ramchandra Institute of Medical Sciences, Aurangabad': 'R K Damani Medical College ShriRamchandra Institute ofMedical Sciences, Chhatrapati Sambhajinagar',
  'JLN Medical College, Datta Meghe': 'Jawaharlal Nehru Medical College, Sawangi (Meghe), Wardha',
  'Autonomous State Medical College & Hospital, Yadadri': 'Government Medical College, Yadadri',
  'Atal Bihari Vajpayee Institute of Medical Sciences & Dr. Ram Manohar Lohia Hospital': 'Atal Bihari Vajpayee Institute of Medical Sciences and Dr. RML Hospital, New Delhi',
  'School of Medical Sciences & Research (Sharda University), Greater Noida': 'Sharda School of Medical Sciences & Research ( previously School of Medical Sciences & Research,Greater Noida)',
};

// NMC names sometimes carry a rename in brackets ("… (Renamed as Bhima Bhoi Medical College)"), so both
// the plain name and the full name are tried.
const score = (record, college) => Math.max(scoreName(record, college.name.replace(/\(.*?\)/g, ' ')), scoreName(record, college.name));
function scoreName(record, nmcName) {
  const head = record.name.replace(/\(.*?\)/g, ' ').split(',')[0];
  const A = tokens(head), B = tokens(nmcName);
  const place = tokens(`${record.name.replace(/\(.*?\)/g, ' ').split(',').slice(1).join(' ')} ${record.city || ''} ${(record.location || '').replace(/^[^(]*\(|\)$/g, '')}`);
  const placeHits = shared(place, B).length;
  const distinctive = [...A].filter(token => !generic.has(token));
  if (!distinctive.length) {
    // "Government Medical College" style names: every word of the record's name must be in the NMC name,
    // which must also name the record's place (so AIIMS Patna never pairs with ESIC Patna).
    const extra = [...B].filter(token => !A.has(token) && !generic.has(token) && !place.has(token));
    return placeHits && [...A].every(token => B.has(token)) && extra.length <= 2 ? 1 + placeHits / 10 - extra.length / 100 : 0;
  }
  const common = shared(A, B).length;
  if (!distinctive.some(token => B.has(token)) || common / Math.min(A.size, B.size) < 0.75) return 0;
  return common / Math.min(A.size, B.size) + 0.5 * placeHits / Math.max(1, place.size) + common / new Set([...A, ...B]).size / 10;
}

// "Government Medical College, Korba" -> "Korba"; long or address-like tails are skipped.
function cityFromName(name) {
  const parts = name.replace(/\(.*?\)/g, '').split(',').map(part => part.trim()).filter(Boolean);
  const tail = parts.length > 1 ? parts.at(-1) : '';
  return tail && tail.length <= 24 && !/\d|hospital|college|institute|research|india|pradesh|kerala|rajasthan|gujarat|karnataka|telangana|tamil|maharashtra|bengal|assam|odisha|orissa|bihar|punjab|haryana|uttarakhand|kashmir|goa|sikkim|mizoram|nagaland|manipur|tripura|meghalaya|chhattisgarh|jharkhand|^u\.?p\.?$|^h\.?p\.?$/i.test(tail) ? tail.replace(/\b([a-z])/g, char => char.toUpperCase()) : null;
}

// Returns the supplied records with NMC details attached, plus NMC-only colleges.
export function withNmc(records) {
  const byState = new Map();
  for (const college of nmcColleges) byState.set(college.state, [...(byState.get(college.state) || []), college]);
  const match = new Map(), used = new Set();
  for (const record of records) {
    const target = aliases[record.name];
    const college = target && (byState.get(record.state) || []).find(entry => entry.name === target);
    if (college) { match.set(record.id, college); used.add(college.code); }
  }
  const pairs = records.filter(record => !match.has(record.id)).flatMap(record => (byState.get(record.state) || []).map(college => [score(record, college), record, college])).filter(([value]) => value > 0).sort((a, b) => b[0] - a[0]);
  for (const [, record, college] of pairs) if (!match.has(record.id) && !used.has(college.code)) { match.set(record.id, college); used.add(college.code); }
  // NMC's management wins, except that deemed status (not an NMC category) is kept from the supplied record.
  const enriched = records.map(record => match.has(record.id) ? { ...record, nmc: match.get(record.id), management: record.management === 'Deemed' ? 'Deemed' : match.get(record.id).management } : record);
  const nmcOnly = nmcColleges.filter(college => !used.has(college.code)).map(college => ({
    id: `nmc-${college.code.toLowerCase().replaceAll('/', '-')}`, name: college.name, state: college.state, city: cityFromName(college.name),
    management: /deemed/i.test(college.university || '') ? 'Deemed' : college.management, nmcOnly: true, nmc: college,
  }));
  return [...enriched, ...nmcOnly];
}
