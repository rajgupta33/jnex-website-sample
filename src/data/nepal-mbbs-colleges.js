// MBBS in Nepal: college fee packages for Indian / international students, transcribed from the supplied
// "Nepal MBBS Collages.pdf" (session August / September 2024-25). Amounts are in rupees (INR) or US dollars (USD)
// exactly as quoted by each college; packages were offered to students who pre-book before the MEC notice.
// Bank details in the source are intentionally not published; students should confirm them directly with the college.

export const nepalSourceSession = 'August / September 2024-25 intake';

export const nepalColleges = [
  { slug: 'iom', name: 'Institute of Medicine (IOM), Tribhuvan University', short: 'IOM', city: 'Kathmandu', area: 'Maharajgunj, Kathmandu', affiliation: 'Tribhuvan University', seats: 8, currency: 'USD', total: 75000,
    installments: [['Year 1', 25000], ['Year 2', 25000], ['Year 3', 25000]], living: 'No college hostel; living and food about NPR 15,000 / month', facts: ['Founded in 1972', 'No pre-booking'] },
  { slug: 'bpkihs', name: 'B.P. Koirala Institute of Health Sciences (BPKIHS)', short: 'BPKIHS', city: 'Dharan', area: 'Ghopa, Dharan', affiliation: 'Autonomous', seats: 8, currency: 'USD', total: 74555, totalNote: 'All-in total including tuition USD 70,000',
    installments: [['Year 1', 25440], ['Year 2', 16890], ['Year 3', 15890], ['Year 4', 9855], ['Year 5', 6480]], living: 'Hostel fee included; mess charged separately', facts: ['Established 1993', 'Autonomous health sciences university since 1998', 'Indo-Nepal cooperation institute'] },
  { slug: 'pahs', name: 'Patan Academy of Health Sciences (PAHS)', short: 'PAHS', city: 'Lalitpur', area: 'Lagankhel, Lalitpur', affiliation: 'Autonomous', seats: 5, currency: 'USD', total: 70000, alt: 'USD 84,000 for other international students',
    installments: [['Year 1', 23350], ['Year 2', 23350], ['Year 3', 7767], ['Year 4', 7767], ['Year 5', 7766]], living: 'Hostel and food charged separately', facts: ['Problem-based learning curriculum', 'Community health is about 25% of MBBS', 'No pre-booking'] },
  { slug: 'kahs', name: 'Karnali Academy of Health Sciences (KAHS)', short: 'KAHS', city: 'Jumla', area: 'Chandannath, Jumla', affiliation: 'Autonomous', seats: 4, currency: 'INR', total: 4595720, alt: 'USD 84,000 for other international students',
    installments: [['Year 1', 1531753], ['Year 2', 1531753], ['Year 3', 766106], ['Year 4', 766106]], living: 'Hostel ₹4,000 + food ₹5,000 per month', facts: ['Established by Act of Parliament, 2011', 'Government teaching hospital', 'No pre-booking'] },
  { slug: 'naihs', name: 'Nepalese Army Institute of Health Sciences (NAIHS)', short: 'NAIHS', city: 'Kathmandu', area: 'Bhandarkhal, Kathmandu', affiliation: 'Tribhuvan University', seats: 4, currency: 'USD', total: 75000,
    installments: [['Year 1', 25000], ['Year 2', 12500], ['Year 3', 12500], ['Year 4', 12500], ['Year 5', 12500]], living: 'Hostel and food charged monthly', facts: ['Teaching hospital: Shree Birendra Hospital', '635-bed tertiary Army hospital', 'No pre-booking'] },
  { slug: 'kusms', name: 'Kathmandu University School of Medical Sciences (KUSMS)', short: 'KUSMS', city: 'Dhulikhel', area: 'Dhulikhel, Kavrepalanchok', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 4168090, alt: 'USD 75,000 equivalent',
    installments: [['Year 1', 1389364], ['Year 2', 1389364], ['Year 3', 1389364]], living: 'Hostel ₹22,500 / year; food about ₹2,500 / month (optional)', facts: ['Running since 1994 with Dhulikhel Hospital', 'KU registration & affiliation included'] },
  { slug: 'kist', name: 'KIST Medical College & Teaching Hospital', short: 'KIST', city: 'Lalitpur', area: 'Imadol, Lalitpur', affiliation: 'Tribhuvan University', seats: 33, currency: 'INR', total: 6050000, alt: 'USD 75,000 equivalent', inclusive: true,
    installments: [['Year 1', 2350000], ['Year 2', 2100000], ['Year 3', 1600000]], living: 'Hostel and food included for the full course', facts: ['300 m from Kathmandu Ring Road', 'Hostel & food for 5.5 years included'] },
  { slug: 'kmc', name: 'Kathmandu Medical College (KMC)', short: 'KMC', city: 'Kathmandu', area: 'Sinamangal, Kathmandu', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 5500000, alt: 'USD 70,000 for other international students',
    installments: [['Year 1', 2600000], ['Year 2', 2000000], ['Year 3', 900000]], living: 'Hostel ₹1,44,000 / year (double); mess ₹5,500 / month', facts: ['Near Kathmandu international airport', 'Hostel compulsory for the full course'] },
  { slug: 'nepal-medical-college', name: 'Nepal Medical College', short: 'NMC', city: 'Kathmandu', area: 'Jorpati, Kathmandu', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 5500000,
    installments: [['Year 1', 2500000], ['Year 2', 2000000], ['Year 3', 1000000]], living: 'Hostel with three meals; confirm the annual fee', facts: ['One-time health cover ₹30,000', 'Hostel compulsory for international students'] },
  { slug: 'chitwan', name: 'Chitwan Medical College (CMC)', short: 'CMC', city: 'Bharatpur', area: 'Bharatpur-5, Chitwan', affiliation: 'Tribhuvan University', seats: 33, currency: 'INR', total: 6000000, inclusive: true,
    installments: [['Year 1', 2500000], ['Year 2', 1750000], ['Year 3', 1750000]], living: 'Hostel and food included; Nepali & Indian mess', facts: ['750-bed teaching hospital', 'Described as Nepal’s first ISO-certified medical college'] },
  { slug: 'cms', name: 'College of Medical Sciences (CMS)', short: 'CMS', city: 'Bharatpur', area: 'Bharatpur, Chitwan', affiliation: 'Kathmandu University', seats: 50, currency: 'INR', total: 6200000, alt: 'USD 75,000 for other international students',
    installments: [['Year 1', 2700000], ['Year 2', 2000000], ['Year 3', 1500000]], living: 'Hostel ₹81,250 / year; food ₹4,500 / month', facts: ['About 240 km from Gorakhpur', 'Library of 20,000+ books'] },
  { slug: 'manipal', name: 'Manipal College of Medical Sciences (MCOMS)', short: 'MCOMS', city: 'Pokhara', area: 'Deep Heights, Pokhara', affiliation: 'Kathmandu University', seats: 50, currency: 'USD', total: 75000, alt: 'USD 90,000 for other international students',
    installments: [['Year 1', 25000], ['Year 2', 25000], ['Year 3', 25000]], living: 'Hostel ₹86,250 / year (single); mess advance ₹93,750', facts: ['Lakeside city of Pokhara', 'Single-occupancy hostel rooms'] },
  { slug: 'ucms', name: 'Universal College of Medical Sciences (UCMS)', short: 'UCMS', city: 'Bhairahawa', area: 'Siddharthanagar, Bhairahawa', affiliation: 'Tribhuvan University', seats: 33, currency: 'INR', total: 5500000, alt: 'USD 75,000 equivalent',
    installments: [['Year 1', 2000000], ['Year 2', 1750000], ['Year 3', 1750000]], living: 'Hostel and mess ₹8,000 / month', facts: ['Established in 1998', 'Close to the Sunauli border'] },
  { slug: 'national', name: 'National Medical College', short: 'NMC Birgunj', city: 'Birgunj', area: 'Bhediyahi, Birgunj', affiliation: 'Tribhuvan University', seats: 33, currency: 'INR', total: 5500000,
    installments: [['Year 1', 2500000], ['Year 2', 2000000], ['Year 3', 1000000]], living: 'Hostel with meals ₹1,75,000 / year (double)', facts: ['Close to the Raxaul border', 'Admission form free'] },
  { slug: 'janaki', name: 'Janaki Medical College & Teaching Hospital', short: 'JMC', city: 'Janakpur', area: 'Ramdaiya, Janakpurdham', affiliation: 'Tribhuvan University', seats: 17, currency: 'INR', total: 5000000, inclusive: true,
    installments: [['Year 1', 2500000], ['Year 2', 1250000], ['Year 3', 1250000]], living: 'Hostel included; food ₹4,000 / month', facts: ['Founded in 1999', 'Hostel and library included'] },
  { slug: 'lumbini', name: 'Lumbini Medical College & Teaching Hospital', short: 'LMC', city: 'Palpa', area: 'Tansen, Palpa', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 5000000, totalNote: 'Complete package with hostel and mess ₹60.63 lakh',
    installments: [['Year 1', 2300000], ['Year 2', 1500000], ['Year 3', 1200000]], living: 'Hostel ₹52,500 + mess ₹97,500 per year', facts: ['8% tuition discount if paid within 3 months', 'Hill town of Tansen'] },
  { slug: 'devdaha', name: 'Devdaha Medical College & Research Institute', short: 'DMCRI', city: 'Rupandehi', area: 'Bhaluhi, Rupandehi', affiliation: 'Kathmandu University', seats: 20, currency: 'INR', total: 4800000, totalNote: 'Complete package with hostel and food ₹59.09 lakh',
    installments: [['Year 1', 2000000], ['Year 2', 1400000], ['Year 3', 1400000]], living: 'Hostel ₹45,000 + food ₹90,000 per year', facts: ['Founded in 2005', '300-bed teaching hospital', '8% tuition discount if paid within 3 months'] },
  { slug: 'birat', name: 'Birat Medical College (BMC)', short: 'BMC', city: 'Biratnagar', area: 'Budhiganga, Biratnagar', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 5200000, totalNote: 'Complete package ₹63.73 lakh', alt: 'USD 85,670 package for other international students',
    installments: [['Year 1', 2080000], ['Year 2', 1040000], ['Year 3', 1040000], ['Year 4', 1040000]], living: 'Hostel with mess ₹1,80,000 / year', facts: ['Tuition over 4 instalments', 'Eastern Nepal, near the Jogbani border'] },
  { slug: 'nobel', name: 'Nobel Medical College Teaching Hospital', short: 'Nobel', city: 'Biratnagar', area: 'Kanchanbari, Biratnagar', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 5200000, alt: 'USD 60,000 for other international students',
    installments: [['Year 1', 2600000], ['Year 2', 2000000], ['Year 3', 600000]], living: 'Mess ₹4,500 / month; hostel charged annually', facts: ['Eastern Nepal, near the Jogbani border'] },
  { slug: 'nepalgunj', name: 'Nepalgunj Medical College', short: 'NGMC', city: 'Nepalgunj', area: 'Chisapani, Banke', affiliation: 'Kathmandu University', seats: 33, currency: 'INR', total: 5531250, alt: 'USD 75,000 equivalent',
    installments: [['Year 1', 1843750], ['Year 2', 1843750], ['Year 3', 1843750]], living: 'Semi-furnished twin and triple rooms; hostel charged annually', facts: ['Established 1996; MBBS since 1997', '750-bed Kohalpur teaching hospital'] },
];

export const nepalTotals = {
  colleges: nepalColleges.length,
  seats: nepalColleges.reduce((sum, college) => sum + college.seats, 0),
  inrRange: (() => { const values = nepalColleges.filter(c => c.currency === 'INR').map(c => c.total); return [Math.min(...values), Math.max(...values)]; })(),
};

export const formatNepalFee = (amount, currency, compact = false) => {
  if (currency === 'USD') return `$${new Intl.NumberFormat('en-US').format(amount)}`;
  if (compact) return `₹${(amount / 100000).toFixed(amount % 100000 ? 2 : 0).replace(/\.?0+$/, '')} L`;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

export const nepalDocuments = ['Class 10 marksheet', 'Class 12 marksheet', 'Passport, Voter ID or Aadhaar', 'NEET UG scorecard', 'NEET UG admit card', 'Passport-size photographs'];

export const nepalSteps = [
  ['Apply with documents', 'Submit the application form with your marksheets, identity proof and NEET UG scorecard and admit card. College application fees are typically around ₹5,000.'],
  ['Receive a provisional offer', 'The college checks eligibility (50% in PCB at Class 12 plus NEET or MECEE-BL) and issues a provisional offer letter.'],
  ['Confirm the seat', 'Private colleges ask for a seat-booking amount, usually ₹5 lakh, adjusted against first-year fees. Government and autonomous institutes do not take pre-bookings.'],
  ['Complete MEC formalities', 'Admission is finalised through Nepal’s Medical Education Commission (MEC). JNEX helps you through its process, documents and reporting.'],
];

export const nepalFaqs = [
  ['Do I need to write an entrance exam in Nepal?', 'If you qualified NEET UG at or above the 50th percentile within its validity period, you can apply directly with your NEET score. Students below that level sit the Medical Education Commission’s MECEE-BL entrance examination and must qualify it.'],
  ['What are the academic requirements?', 'You need at least 50% in Physics, Chemistry and Biology at Class 12 (as stated in the college documents), together with NEET UG or MECEE-BL qualification. Rules of MEC Nepal, the affiliating university and the Nepal Medical Council apply.'],
  ['How long is MBBS in Nepal?', 'The course is about five and a half years: roughly four and a half years of academics, followed by a one-year compulsory rotating internship.'],
  ['Why do some fees appear in rupees and others in dollars?', 'Colleges quote SAARC (including Indian) students in either INR or USD. Several also list a higher USD package for other international students. We show the amount each college quoted for Indian students; confirm the exchange rate applied on the date you pay.'],
  ['Is the pre-booking amount refundable?', 'The college documents describe pre-booking deposits as non-refundable, except when admission is not possible because of MEC or college rules. The special packages apply only when booked before the MEC notice; after it, the MEC fee (about USD 75,000–80,000) applies.'],
  ['How should fees be paid?', 'Pay only into the college’s own authorised bank account and keep receipts. Colleges state they are not responsible for payments made to representatives or other parties. JNEX will help you confirm the correct account before any transfer.'],
];
