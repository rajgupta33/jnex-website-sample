// State/UT MBBS college directory, transcribed from the supplied "Medical colleges in INDIA.pdf" (Sep 2026).
// Row: name | location | management (as written in the source) | MBBS seats (only where the source gives them).
// Seats marked * in the source are indicative intake figures; confirm the current NMC intake.
const parse = text => text.trim().split('\n').map(line => line.split('|').map(value => value.trim()));

const directory = {
  Goa: `
Goa Medical College (GMC)|Bambolim, Goa|Government|250`,
  'Himachal Pradesh': `
All India Institute of Medical Sciences (AIIMS), Bilaspur|Bilaspur|Government|100
Dr. Radhakrishnan Government Medical College|Hamirpur|Government|120
Dr. Rajendra Prasad Government Medical College|Tanda, Kangra|Government|120
Government Medical College|Nahan, Sirmaur|Government|120
Indira Gandhi Medical College (IGMC)|Shimla|Government|120
Maharishi Markandeshwar Medical College & Hospital|Kumarhatti, Solan|Private/Trust|150
Pt. Jawahar Lal Nehru Government Medical College|Chamba|Government|120
Shri Lal Bahadur Shastri Government Medical College|Mandi|Government|120`,
  Uttarakhand: `
All India Institute of Medical Sciences (AIIMS), Rishikesh|Rishikesh|Government / Institute of National Importance|125
Doon Medical College|Dehradun|Government|150
Government Medical College (formerly Uttarakhand Forest Hospital Trust Medical College)|Haldwani|Government|125
Government Medical College|Haridwar|Government|100
Soban Singh Jeena Government Institute of Medical Science & Research|Almora|Government|100
Veer Chandra Singh Garhwali Government Medical Science & Research Institute|Srinagar, Pauri Garhwal|Government|150
Gautam Buddha Chikitsa Mahavidyalaya|Dehradun|Private|150
Graphic Era Institute of Medical Sciences|Dehradun|Private|200
Himalayan Institute of Medical Sciences (HIMS)|Dehradun|Private|250
Shri Guru Ram Rai Institute of Medical & Health Sciences|Dehradun|Private|250`,
  Punjab: `
Adesh Institute of Medical Sciences & Research|Bathinda|Private|150
All India Institute of Medical Sciences (AIIMS)|Bathinda|Central Govt.|100
Christian Medical College|Ludhiana|Private|100
Dayanand Medical College & Hospital|Ludhiana|Private|150
Dr. B. R. Ambedkar State Institute of Medical Sciences|Mohali|Government|100
ESIC Medical College|Ludhiana|Government|50
Gian Sagar Medical College & Hospital|Banur/Patiala|Private|150
Government Medical College|Amritsar|Government|250
Government Medical College|Patiala|Government|250
Guru Govind Singh Medical College|Faridkot|Government|250
Punjab Institute of Medical Sciences (PIMS)|Jalandhar|Private|150
RIMT Medical College & Hospital|Mandi Gobindgarh, Fatehgarh Sahib|Private|100
Sri Guru Ram Das Institute of Medical Sciences & Research|Amritsar|Private|150`,
  Telangana: `
Government Medical College, Jogulamba Gadwal|Gadwal|Government
Government Medical College, Mulugu|Mulugu|Government
Government Medical College, Narayanpet|Narayanpet|Government
Government Medical College, Narsampet|Narsampet|Government
Government Medical College, Quthbullapur|Quthbullapur|Government
Government Medical College, Medak|Medak|Government
Autonomous State Medical College & Hospital, Yadadri|Yadadri|Government
Government Medical College, Maheshwaram|Maheshwaram|Government
Government Medical College, Jayashankar Bhupalpally|Bhupalpally|Government
Government Medical College, Rajanna Sircilla|Sircilla|Government
Government Medical College, Nirmal|Nirmal|Government
Government Medical College, Karimnagar|Karimnagar|Government
Government Medical College, Vikarabad|Vikarabad|Government
Government Medical College, Khammam|Khammam|Government
Government Medical College, Kamareddy|Kamareddy|Government
Government Medical College, Kumuram Bheem Asifabad|Asifabad|Government
Government Medical College, Jangaon|Jangaon|Government
All India Institute of Medical Sciences (AIIMS), Bibinagar|Bibinagar|Government
Osmania Medical College|Hyderabad|Government
Kakatiya Medical College|Warangal|Government
Gandhi Medical College|Secunderabad|Government
Government Medical College, Ramagundam|Ramagundam|Government
Government Medical College, Nalgonda|Nalgonda|Government
Government Medical College, Suryapet|Suryapet|Government
Government Medical College, Siddipet|Siddipet|Government
Employees' State Insurance Corporation Medical College|Sanath Nagar, Hyderabad|Government
Government Medical College, Mahabubnagar|Mahabubnagar|Government
Government Medical College, Nizamabad|Nizamabad|Government
Rajiv Gandhi Institute of Medical Sciences|Adilabad|Government
Government Medical College, Nagarkurnool|Nagarkurnool|Government
Government Medical College, Sangareddy|Sangareddy|Government
Government Medical College, Wanaparthy|Wanaparthy|Government
Government Medical College, Bhadradri Kothagudem|Kothagudem|Government
Government Medical College, Mancherial|Mancherial|Government
Government Medical College, Mahabubabad|Mahabubabad|Government
Government Medical College, Jagtial|Jagtial|Government
Nova Institute of Medical Sciences & Research Centre|Ranga Reddy|Private
Neelima Institute of Medical Sciences|Medchal|Private
Chalmeda Anand Rao Institute of Medical Sciences|Karimnagar|Private
Arundathi Institute of Medical Sciences|Medchal|Private
CMR Institute of Medical Sciences|Medchal-Malkajgiri|Private
Father Colombo Institute of Medical Sciences|Warangal|Private
S.V.S. Medical College|Mahabubnagar|Private
Deccan College of Medical Sciences|Hyderabad|Private
MNR Medical College & Hospital|Sangareddy|Private
Kamineni Institute of Medical Sciences|Narketpally|Private
Bhaskar Medical College|Yenkapally|Private
TRR Institute of Medical Sciences|Patancheru|Private
Surabhi Institute of Medical Sciences|Siddipet|Private
Mamata Academy of Medical Sciences|Bachupally|Private
Dr. Patnam Mahender Reddy Institute of Medical Sciences|Chevella|Private
Ayaan Institute of Medical Sciences, Teaching Hospital & Research Centre|Ranga Reddy|Private
Maheshwara Medical College|Chitkul, Patancheru|Private
Mahavir Institute of Medical Sciences|Vikarabad|Private
R.V.M. Institute of Medical Sciences & Research Centre|Siddipet|Private
Mallareddy Medical College for Women|Hyderabad|Private
Kamineni Academy of Medical Sciences & Research Center|Hyderabad|Private
Apollo Institute of Medical Sciences & Research|Hyderabad|Private
Malla Reddy Institute of Medical Sciences|Hyderabad|Private
Dr. VRK Women's Medical College|Aziznagar|Private
Shadan Institute of Medical Sciences, Research Centre & Teaching Hospital|Peerancheru|Private
Prathima Institute of Medical Sciences|Karimnagar|Private
Prathima Relief Institute of Medical Sciences|Warangal|Private
Mediciti Institute of Medical Sciences|Ghanpur|Private
Mamata Medical College|Khammam|Private`,
  Bihar: `
All India Institute of Medical Sciences (AIIMS), Patna|Patna|Central Government
Anugrah Narayan Magadh Medical College & Hospital|Gaya|Government
Bhagwan Mahavir Institute of Medical Sciences (BMIMS)|Pawapuri, Nalanda|Government
Darbhanga Medical College & Hospital|Laheriasarai, Darbhanga|Government
Employees' State Insurance Corporation Medical College & Hospital|Bihta, Patna|Government / ESIC
Government Medical College|Bettiah, West Champaran|Government
Government Medical College|Purnea|Government
Indira Gandhi Institute of Medical Sciences (IGIMS)|Sheikhpura, Patna|Government
Jannayak Karpoori Thakur Medical College & Hospital|Madhepura|Government
Jawaharlal Nehru Medical College & Hospital|Bhagalpur|Government
Nalanda Medical College & Hospital|Patna|Government
Patna Medical College & Hospital (PMCH)|Patna|Government
Shri Krishna Medical College & Hospital (SKMCH)|Muzaffarpur|Government
Government Medical College, Chapra|Saran|Government
Shri Ram Janki Medical College & Hospital|Samastipur|Government
Himalaya Medical College & Hospital|Patna|Private
Katihar Medical College|Katihar|Private
Lord Buddha Koshi Medical College & Hospital|Saharsa|Private
Madhubani Medical College & Hospital|Madhubani|Private
Mahabodhi Medical College & Hospital|Gaya|Private
Mata Gujri Memorial Medical College & L.S.K. Hospital|Kishanganj|Private / Minority
Narayan Medical College & Hospital|Sasaram|Private
Netaji Subhas Medical College & Hospital|Amhara, Bihta, Patna|Private
Radha Devi Jageshwari Memorial Medical College & Hospital (RDJM)|Turki, Muzaffarpur|Private
Shree Narayan Medical Institute & Hospital|Saharsa|Private
Shyamlal Chandrashekhar Medical College & S.P.N.M. Hospital|Khagaria|Private
Viraat Ramayan Institute of Medical Sciences (VRIMS)|East Champaran|Private
Buddha Hospital & Research Institute|Bihar|Private
Shrinivas G Educational & Research Institute of Medical Sciences|Saran|Private`,
  Jharkhand: `
All India Institute of Medical Sciences (AIIMS), Deoghar|Deoghar|Government|125
Dumka Medical College|Dumka|Government|100
Hazaribagh Medical College|Hazaribagh|Government|100
Laxmi Chandravansi Medical College & Hospital|Bishrampur, Palamu|Private|150
M.G.M. Medical College|Jamshedpur|Government|150
Manipal Tata Medical College|Jamshedpur|Private|250
Netaji Subhas Medical College and Hospital|Jamshedpur|Private|100
Palamu Medical College|Palamu/Medininagar|Government|100
Rajendra Institute of Medical Sciences (RIMS)|Ranchi|Government|250
Shaheed Nirmal Mahto Medical College & Hospital (formerly Patliputra Medical College)|Dhanbad|Government|100`,
  Odisha: `
All India Institute of Medical Sciences (AIIMS), Bhubaneswar|Bhubaneswar|Government / INI
Bhima Bhoi Medical College & Hospital|Balangir|Government
Dharanidhar Medical College & Hospital|Keonjhar|Government
DRIEMS Institute of Health Sciences & Hospital|Kairapari, Cuttack|Private
Fakir Mohan Medical College & Hospital|Balasore|Government
Government Medical College, Phulbani|Kandhamal|Government
Government Medical College, Sundargarh|Sundargarh|Government
Hi-Tech Medical College & Hospital|Bhubaneswar|Private
Hi-Tech Medical College & Hospital|Rourkela|Private
Institute of Medical Sciences & SUM Hospital|Bhubaneswar|Private / Deemed
Institute of Medical Sciences & SUM Hospital, Campus-II|Phulnakhara, Bhubaneswar|Private / Deemed
Kalinga Institute of Medical Sciences (KIMS)|Bhubaneswar|Private / Deemed
Maharaja Jajati Keshari Medical College|Jajpur|Government
MKCG Medical College|Berhampur|Government
Pabitra Mohan Pradhan Medical College|Talcher|Government
Pt. Raghunath Murmu Medical College & Hospital|Baripada|Government
Saheed Laxman Nayak Medical College & Hospital|Koraput|Government
Saheed Rendo Majhi Medical College & Hospital|Bhawanipatna, Kalahandi|Government
SCB Medical College|Cuttack|Government
Sri Jagannath Medical College & Hospital|Puri|Government
Veer Surendra Sai Institute of Medical Sciences & Research (VIMSAR)|Burla, Sambalpur|Government`,
  Assam: `
AIIMS Guwahati|Guwahati|Central Govt. / INI
Assam Medical College|Dibrugarh|Government
Dhubri Medical College & Hospital|Dhubri|Government
Diphu Medical College & Hospital|Diphu|Government
ESIC Medical College & Hospital|Beltola, Guwahati|Government / ESIC
Fakhruddin Ali Ahmed Medical College & Hospital|Barpeta|Government
Gauhati Medical College|Guwahati|Government
Jorhat Medical College & Hospital|Jorhat|Government
Kokrajhar Medical College|Kokrajhar|Government
Lakhimpur Medical College|North Lakhimpur|Government
Nagaon Medical College|Nagaon|Government
Nalbari Medical College|Nalbari|Government
Pragjyotishpur Medical College|Guwahati|Government
Silchar Medical College & Hospital|Silchar|Government
Tezpur Medical College & Hospital|Tezpur|Government
Tinsukia Medical College|Tinsukia|Government`,
  Manipur: `
Government Medical College, Churachandpur|Churachandpur|Government|100
Jawaharlal Nehru Institute of Medical Sciences (JNIMS)|Porompat, Imphal|Government|150
Regional Institute of Medical Sciences (RIMS)|Imphal|Government|150
Shija Academy of Health Sciences|Langol, Imphal|Private|150`,
  Meghalaya: `
North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences (NEIGRIHMS)|Shillong|Government / Central|50
P.A. Sangma International Medical College & Hospital|Baridua, Ri-Bhoi|Private / Trust|100
Shillong Medical College|Shillong|Government|50`,
  Mizoram: `
Zoram Medical College|Falkawn, Aizawl|Government|100`,
  Nagaland: `
Nagaland Institute of Medical Sciences & Research (NIMSR)|Kohima|Government|100`,
  Tripura: `
Agartala Government Medical College & G.B. Pant Hospital|Agartala|Government|200
Tripura Medical College & Dr. B.R. Ambedkar Memorial Teaching Hospital|Hapania, Agartala|Private / Trust|150
Tripura Santiniketan Medical College & Hospital|Madhuban, West Tripura|Private / Trust|150`,
  'Arunachal Pradesh': `
Tomo Riba Institute of Health & Medical Sciences (TRIHMS)|Naharlagun|Government|100`,
  Sikkim: `
Sikkim Manipal Institute of Medical Sciences (SMIMS)|Tadong, Gangtok|Private|100
Helen Lepcha Sikkim Government Medical College (HLSGMC)|Sokethang, Sikkim|Government|100`,
  Delhi: `
All India Institute of Medical Sciences (AIIMS), New Delhi|New Delhi|Central Govt. / INI
Army College of Medical Sciences, New Delhi|New Delhi|Trust / Army
Atal Bihari Vajpayee Institute of Medical Sciences & Dr. Ram Manohar Lohia Hospital||Government
Dr. Baba Saheb Ambedkar Medical College, Rohini|Rohini|Government
ESIC Medical College & Hospital, Basaidarapur|Basaidarapur|Government / ESIC
Hamdard Institute of Medical Sciences & Research||Private / Society
Lady Hardinge Medical College||Government
Maulana Azad Medical College||Government
North Delhi Municipal Corporation Medical College||Government
University College of Medical Sciences & GTB Hospital||Government
Vardhman Mahavir Medical College & Safdarjung Hospital||Government`,
  'Jammu & Kashmir': `
All India Institute of Medical Sciences (AIIMS), Vijaypur/Jammu|Vijaypur, Samba|Central Govt. / INI
Acharya Shri Chander College of Medical Sciences (ASCOMS)|Jammu|Private / Trust
Government Medical College, Anantnag|Anantnag|Government
Government Medical College, Baramulla|Baramulla|Government
Government Medical College, Doda|Doda|Government
Government Medical College, Handwara|Handwara|Government
Government Medical College, Jammu|Jammu|Government
Government Medical College, Kathua|Kathua|Government
Government Medical College, Rajouri|Rajouri|Government
Government Medical College, Srinagar|Srinagar|Government
Government Medical College, Udhampur|Udhampur|Government
Sher-i-Kashmir Institute of Medical Sciences (SKIMS)|Srinagar|Government
Shri Mata Vaishno Devi Institute of Medical Excellence|Katra/Reasi|Private / University`,
  Chandigarh: `
Government Medical College & Hospital (GMCH), Chandigarh|Chandigarh|Government`,
  Puducherry: `
Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)||Central Govt. / INI
Aarupadai Veedu Medical College & Hospital||Private / Deemed
Indira Gandhi Medical College & Research Institute (IGMCRI)||Government
Mahatma Gandhi Medical College & Research Institute||Private / Deemed
Puducherry Institute of Medical Sciences & Research (PIMS)||Private
Sri Lakshmi Narayana Institute of Medical Sciences||Private / Deemed
Sri Manakula Vinayagar Medical College & Hospital||Private
Sri Venkateswaraa Medical College, Hospital & Research Centre||Private
Vinayaka Missions Medical College, Karaikal|Karaikal|Private / Deemed`,
  'Andaman & Nicobar Islands': `
Andaman & Nicobar Islands Institute of Medical Sciences (ANIIMS)|Port Blair|Government`,
  'Dadra & Nagar Haveli and Daman & Diu': `
NAMO Medical Education & Research Institute|Silvassa|Government`,
};

// Filter bucket for the explorer; the source wording is kept in managementLabel.
const bucket = label => /deemed/i.test(label) ? 'Deemed' : /gov|central|esic|ini/i.test(label) ? 'Government' : 'Private';
const slugify = text => text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const indiaDirectorySource = { file: 'Medical colleges in INDIA.pdf', url: '/resources/medical-colleges-in-india.pdf' };
export const indiaDirectoryColleges = Object.entries(directory).flatMap(([state, text]) => parse(text).map(([name, city, managementLabel, seats], index) => ({
  id: `india-directory-${slugify(state)}-${index + 1}`, name, state, city: city || null, management: bucket(managementLabel), managementLabel, reportedSeats: seats ? Number(seats) : null, directory: true,
})));
export const indiaDirectoryStates = Object.keys(directory);

// Colleges that also appear in the fee workbook are merged into that record instead of being listed twice.
const stop = new Set(['and', 'of', 'the', 'hospital', 'college', 'medical', 'institute', 'instt', 'sciences', 'science', 'research', 'centre', 'center', 's', 'womens', 'women', 'mch', 'teaching', 'memorial']);
const spelling = { appolo: 'apollo', ayyan: 'ayaan', maheswara: 'maheshwara', mallareddy: 'malla reddy' };
const key = name => [...new Set(name.toLowerCase().replace(/\./g, '').replace(/&/g, ' ').replace(/\(.*?\)/g, ' ').replace(/[^a-z ]/g, ' ').split(/\s+/).flatMap(word => (spelling[word] || word).split(' ')).filter(word => word.length > 1 && !stop.has(word)))].sort().join(' ');
const aliases = { 'Tripura Medical College and Dr. B R A M Teaching Hospital, Agartala': 'Tripura Medical College & Dr. B.R. Ambedkar Memorial Teaching Hospital', 'Mata Gujri Memorial College, Kishanganj (Sikh Minority)': 'Mata Gujri Memorial Medical College & L.S.K. Hospital', 'Shyamlal Chandrashekhar Medical College, Khagaria': 'Shyamlal Chandrashekhar Medical College & S.P.N.M. Hospital', 'Vinayaka Missions Medical College & Hospital': 'Vinayaka Missions Medical College, Karaikal' };
export function directoryMatch(record) {
  const options = indiaDirectoryColleges.filter(entry => entry.state === record.state);
  if (aliases[record.name]) return options.find(entry => entry.name === aliases[record.name]) || null;
  const names = [record.name, record.name.split(',')[0]].map(key);
  const hits = options.filter(entry => names.includes(key(entry.name)) || names.includes(key(entry.name.split(',')[0])));
  if (hits.length < 2) return hits[0] || null;
  const text = `${record.name} ${record.location}`.toLowerCase();
  const campus = hits.filter(entry => /campus/i.test(entry.name) === /campus/i.test(record.name));
  return campus.find(entry => entry.city && entry.city.toLowerCase().split(/[ ,/]+/).some(part => part.length > 3 && text.includes(part.replace('bhubaneswar', 'bhubanes')))) || campus[0] || null;
}
