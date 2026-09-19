// Medical universities abroad, transcribed from the supplied list (MBBA Abroad University.pdf, Sep 2026).
// Entry: [name, city, tag?]. Tags carry the extra column the source gives for that country (type, tuition or accreditation note).
// Nepal is built from the detailed college fee document in nepal-mbbs-colleges.js.
import { nepalColleges } from './nepal-mbbs-colleges';

const cities = (list, tag) => list.map(([name, city, extra]) => [name, city, extra ?? tag]);

export const medicalUniversityGroups = [['cis', 'Russia & Central Asia'], ['europe', 'Caucasus & Europe'], ['asia', 'South Asia, Asia & Africa']];

export const medicalUniversityCountries = [
  { code: 'ru', name: 'Russia', group: 'cis', universities: cities([
    ['I.M. Sechenov First Moscow State Medical University', 'Moscow'], ['Pirogov Russian National Research Medical University', 'Moscow'], ["Peoples' Friendship University of Russia (RUDN University)", 'Moscow'], ['Lomonosov Moscow State University', 'Moscow'],
    ['Pavlov First Saint Petersburg State Medical University', 'St. Petersburg'], ['Saint Petersburg State University', 'St. Petersburg'], ['Kazan State Medical University', 'Kazan'], ['Kazan Federal University', 'Kazan'],
    ['Kursk State Medical University', 'Kursk'], ['Volgograd State Medical University', 'Volgograd'], ['Orenburg State Medical University', 'Orenburg'], ['Tver State Medical University', 'Tver'],
    ['Perm State Medical University', 'Perm'], ['Bashkir State Medical University', 'Ufa'], ['Stavropol State Medical University', 'Stavropol'], ['Voronezh State Medical University', 'Voronezh'],
    ['Ryazan State Medical University', 'Ryazan'], ['Rostov State Medical University', 'Rostov-on-Don'], ['Saratov State Medical University', 'Saratov'], ['Astrakhan State Medical University', 'Astrakhan'],
    ['Northern State Medical University', 'Arkhangelsk'], ['Siberian State Medical University', 'Tomsk'], ['Novosibirsk State Medical University', 'Novosibirsk'], ['Kemerovo State Medical University', 'Kemerovo'],
    ['Irkutsk State Medical University', 'Irkutsk'], ['Altai State Medical University', 'Barnaul'], ['Chuvash State University', 'Cheboksary'], ['Mari State University', 'Yoshkar-Ola'],
    ['Kabardino-Balkarian State University', 'Nalchik'], ['Dagestan State Medical University', 'Makhachkala'], ['Crimean Federal University', 'Simferopol'], ['Immanuel Kant Baltic Federal University', 'Kaliningrad'],
    ['Far Eastern Federal University', 'Vladivostok'], ['Orel State University', 'Oryol'], ['Tula State University', 'Tula'], ['Pskov State University', 'Pskov'],
    ['Penza State University', 'Penza'], ['Belgorod State National Research University', 'Belgorod'], ['Izhevsk State Medical Academy', 'Izhevsk'], ['Chechen State University', 'Grozny'],
  ]) },
  { code: 'kz', name: 'Kazakhstan', group: 'cis', universities: cities([
    ['Asfendiyarov Kazakh National Medical University (KazNMU)', 'Almaty'], ['Astana Medical University', 'Astana'], ['Semey Medical University', 'Semey'], ['Karaganda Medical University', 'Karaganda'],
    ['West Kazakhstan Marat Ospanov Medical University', 'Aktobe'], ['South Kazakhstan Medical Academy (SKMA)', 'Shymkent'], ['Kazakh-Russian Medical University', 'Almaty'], ['Al-Farabi Kazakh National University', 'Almaty'],
    ['Kokshetau University', 'Kokshetau'], ['Caspian University – School of Medicine', 'Almaty'], ['North Kazakhstan State University', 'Petropavl'], ['Atyrau Medical Institute', 'Atyrau'],
    ['Zhubanov / Aktobe medical programmes', 'Aktobe'], ['Kyzylorda medical programmes', 'Kyzylorda'], ['Ust-Kamenogorsk medical programmes', 'Ust-Kamenogorsk'],
  ]) },
  { code: 'uz', name: 'Uzbekistan', group: 'cis', universities: cities([
    ['Tashkent State Medical University (formerly Tashkent Medical Academy)', 'Tashkent'], ['Samarkand State Medical University', 'Samarkand'], ['Bukhara State Medical Institute', 'Bukhara'], ['Andijan State Medical Institute', 'Andijan'],
    ['Fergana Medical Institute of Public Health', 'Fergana'], ['Tashkent Pediatric Medical Institute', 'Tashkent'], ['Tashkent State Dental Institute', 'Tashkent'], ['Karakalpak Medical Institute', 'Nukus'],
    ['Tashkent Medical Academy – Termez Branch', 'Termez'], ['Tashkent Medical Academy – Urgench Branch', 'Urgench'], ['Tashkent Pharmaceutical Institute', 'Tashkent'],
  ]) },
  { code: 'kg', name: 'Kyrgyzstan', group: 'cis', universities: cities([
    ['Kyrgyz State Medical Academy (KSMA)', 'Bishkek', 'Government'], ['Osh State University – Medical Institute', 'Osh', 'Government'], ['Jalal-Abad State University (JASU) – Medical Faculty', 'Jalal-Abad', 'Government'],
    ['Kyrgyz-Russian Slavic University (KRSU)', 'Bishkek', 'Government / International'], ['International Higher School of Medicine (IHSM)', 'Bishkek', 'Private'], ['International School of Medicine, International University of Kyrgyzstan (IUK)', 'Bishkek', 'Private'],
    ['Asian Medical Institute (ASMI)', 'Kant', 'Private'], ['Osh International Medical University (OIMU)', 'Osh', 'Private'], ['Scientific Research Medical Social Institute (SRMSI)', 'Bishkek', 'Private'], ['Bishkek International Medical Institute (BIMI)', 'Bishkek', 'Private'],
  ]) },
  { code: 'ge', name: 'Georgia', group: 'europe', tagLabel: 'Approx. annual tuition (supplied)', universities: cities([
    ['Tbilisi State Medical University (TSMU)', 'Tbilisi', '$7,000 / yr'], ['Ivane Javakhishvili Tbilisi State University (TSU)', 'Tbilisi', '$8,000 / yr'], ['David Tvildiani Medical University (DTMU)', 'Tbilisi', '$6,000 / yr'],
    ['University of Georgia (UG)', 'Tbilisi', '$6,500 / yr'], ['European University', 'Tbilisi', '$6,000 / yr'], ['Petre Shotadze Tbilisi Medical Academy (TMA)', 'Tbilisi', '$7,000 / yr'], ['New Vision University', 'Tbilisi', '$7,000 / yr'],
    ['Caucasus University', 'Tbilisi', '$6,000 / yr'], ['Georgian National University SEU', 'Tbilisi', '$5,900 / yr'], ['Alte University', 'Tbilisi', '$5,500 / yr'], ['Grigol Robakidze University', 'Tbilisi', '$5,500 / yr'],
    ['East European University (EEU)', 'Tbilisi', '$4,500–6,000 / yr'], ['Georgian American University (GAU)', 'Tbilisi', '$6,000 / yr'], ['Caucasus International University (CIU)', 'Tbilisi', '$6,000 / yr'], ['International Black Sea University (IBSU)', 'Tbilisi', '$4,900 / yr'],
    ['Ilia State University', 'Tbilisi', '$6,200 / yr'], ['Batumi Shota Rustaveli State University', 'Batumi', '$5,000 / yr'], ['Akaki Tsereteli State University', 'Kutaisi', '$4,000 / yr'], ['University Geomedi', 'Tbilisi', '~$5,500 / yr'], ['Central University of Europe', 'Tbilisi', '~$4,000–6,000 / yr'],
  ]), note: 'All 20 are listed with an English-medium MD in the supplied table. Tuition is the approximate annual figure supplied; confirm the current intake fee, hostel and other charges with the university.' },
  { code: 'am', name: 'Armenia', group: 'europe', tagLabel: 'Accreditation note (supplied)', universities: cities([
    ['Yerevan State Medical University after Mkhitar Heratsi (YSMU)', 'Yerevan', 'Accredited through 2031'], ['Progress University of Gyumri', 'Gyumri', 'Accredited through 2030'], ['Armenian Medical Institute (AMI)', 'Yerevan', 'Institutional, through 2029'],
    ['Erebuni Medical Academy', 'Yerevan', 'Current record in 2026'], ['University of Traditional Medicine (UTM)', 'Yerevan', 'Status to be verified'], ['Mkhitar Gosh University', 'Yerevan / Vanadzor', 'Status to be verified'],
  ]), note: 'Accreditation notes summarise the supplied references to Armenia’s State Accreditation Register and ANQA. Check the current register entry for the specific General Medicine programme before applying.' },
  { code: 'md', name: 'Moldova', group: 'europe', universities: cities([
    ['Nicolae Testemițanu State University of Medicine and Pharmacy', 'Chișinău'], ['State University of Moldova – Faculty of Medicine', 'Chișinău'], ['Cahul State University – medical-related programmes', 'Cahul'],
  ], 'Public'), note: 'Moldova has a relatively small number of institutions offering university-level medical education.' },
  { code: 'rs', name: 'Serbia', group: 'europe', universities: cities([
    ['University of Belgrade – Faculty of Medicine', 'Belgrade', 'Public'], ['University of Novi Sad – Faculty of Medicine', 'Novi Sad', 'Public'], ['University of Niš – Faculty of Medicine', 'Niš', 'Public'],
    ['University of Kragujevac – Faculty of Medical Sciences', 'Kragujevac', 'Public'], ['University of Priština – Faculty of Medicine', 'Kosovska Mitrovica', 'Public'], ['Medical Faculty of the Military Medical Academy – University of Defence', 'Belgrade', 'Public / Military'],
    ['University of Novi Pazar – medical-related programmes', 'Novi Pazar', 'Public'], ['European University – medical-related programmes', 'Belgrade', 'Private'], ['University Business Academy – Faculty of Medicine', 'Novi Sad', 'Private'],
  ]) },
  { code: 'pl', name: 'Poland', group: 'europe', universities: cities([
    ['Medical University of Warsaw', 'Warsaw'], ['Jagiellonian University Medical College', 'Kraków'], ['Medical University of Gdańsk', 'Gdańsk'], ['Medical University of Łódź', 'Łódź'],
    ['Medical University of Lublin', 'Lublin'], ['Medical University of Białystok', 'Białystok'], ['Medical University of Silesia', 'Katowice'], ['Poznan University of Medical Sciences', 'Poznań'],
    ['Wroclaw Medical University', 'Wrocław'], ['Pomeranian Medical University in Szczecin', 'Szczecin'], ['Collegium Medicum, Nicolaus Copernicus University', 'Bydgoszcz'], ['Collegium Medicum, University of Warmia and Mazury', 'Olsztyn'],
    ['Collegium Medicum, University of Rzeszów', 'Rzeszów'], ['Opole University – Faculty of Medicine', 'Opole'], ['University of Zielona Góra – Faculty of Medicine and Health Sciences', 'Zielona Góra'], ['University of Radom – Faculty of Medicine', 'Radom'],
    ['University of Technology and Humanities – Faculty of Medicine', 'Radom'], ['Medical University of Bydgoszcz', 'Bydgoszcz'], ['University of Medical Sciences in Warsaw', 'Warsaw'], ['Łazarski University – Faculty of Medicine', 'Warsaw'],
    ['Andrzej Frycz Modrzewski Krakow University – Faculty of Medicine and Health Sciences', 'Kraków'], ['University of Social and Medical Sciences', 'Warsaw'], ['Krakow University of Economics / medical-related faculties', 'Kraków'], ['Jan Kochanowski University – Collegium Medicum', 'Kielce'],
    ['University of Silesia – medical-related programmes', 'Katowice'],
  ]) },
  { code: 'np', name: 'Nepal', group: 'asia', tagLabel: 'University affiliation', universities: nepalColleges.map(college => [college.name, college.city, college.affiliation]), feature: '/mbbs-abroad/nepal/' },
  { code: 'bd', name: 'Bangladesh', group: 'asia', universities: [...cities([
    ['Dhaka Medical College', 'Dhaka'], ['Sir Salimullah Medical College', 'Dhaka'], ['Shaheed Suhrawardy Medical College', 'Dhaka'], ['Mymensingh Medical College', 'Mymensingh'],
    ['Chittagong Medical College', 'Chattogram'], ['Rajshahi Medical College', 'Rajshahi'], ['MAG Osmani Medical College', 'Sylhet'], ['Sher-E-Bangla Medical College', 'Barishal'],
    ['Rangpur Medical College', 'Rangpur'], ['Shaheed Ziaur Rahman Medical College', 'Bogura'], ['Faridpur Medical College', 'Faridpur'], ['Khulna Medical College', 'Khulna'],
    ['Comilla/Cumilla Medical College', 'Cumilla'], ['Dinajpur Medical College', 'Dinajpur'], ['Pabna Medical College', 'Pabna'], ['Noakhali Medical College', 'Noakhali'],
    ['Jashore Medical College', 'Jashore'], ["Cox's Bazar Medical College", "Cox's Bazar"], ['Kushtia Medical College', 'Kushtia'], ['Satkhira Medical College', 'Satkhira'],
    ['Patuakhali Medical College', 'Patuakhali'], ['Rangamati Medical College', 'Rangamati'], ['Mugda Medical College', 'Dhaka'], ['Manikganj Medical College', 'Manikganj'],
    ['Shahid Syed Nazrul Islam Medical College', 'Kishoreganj'], ['Shaheed Taj Uddin Ahmad Medical College', 'Gazipur'], ['Sirajganj Medical College', 'Sirajganj'], ['Jamalpur Medical College', 'Jamalpur'],
    ['Gopalganj Medical College', 'Gopalganj'], ['Tangail Medical College', 'Tangail'], ['Nilphamari Medical College', 'Nilphamari'], ['Magura Medical College', 'Magura'],
    ['Naogaon Medical College', 'Naogaon'], ['Netrokona Medical College', 'Netrokona'], ['Sunamganj Medical College', 'Sunamganj'], ['Habiganj Medical College', 'Habiganj'],
  ], 'Government'), ...cities([
    ['Bangladesh Medical College', 'Dhaka'], ['Ibrahim Medical College', 'Dhaka'], ['Holy Family Red Crescent Medical College', 'Dhaka'], ['Enam Medical College', 'Savar / Dhaka'],
    ['Anwer Khan Modern Medical College', 'Dhaka'], ['Green Life Medical College', 'Dhaka'], ['East West Medical College', 'Dhaka'], ['Popular Medical College', 'Dhaka'],
    ['Dhaka National Medical College', 'Dhaka'], ['International Medical College', 'Gazipur'], ['Jahurul Islam Medical College', 'Kishoreganj'], ['Jalalabad Ragib-Rabeya Medical College', 'Sylhet'],
    ['North East Medical College', 'Sylhet'], ['Parkview Medical College', 'Sylhet'], ["Sylhet Women's Medical College", 'Sylhet'], ['Prime Medical College', 'Rangpur'],
    ['Rangpur Community Medical College', 'Rangpur'], ['TMSS Medical College', 'Bogura'], ['Khawja Yunus Ali Medical College', 'Sirajganj'], ['Gazi Medical College', 'Khulna'],
    ['Khulna City Medical College', 'Khulna'], ['BGC Trust Medical College', 'Chattogram'], ['Chattogram International Medical College', 'Chattogram'], ['Southern Medical College', 'Chattogram'],
    ['Eastern Medical College', 'Cumilla'], ['Central Medical College', 'Cumilla'], ['Moinamoti Medical College', 'Cumilla'], ['Community Based Medical College', 'Mymensingh'],
    ['Monno Medical College', 'Manikganj'], ['Uttara Adhunik Medical College', 'Dhaka'], ['Medical College for Women & Hospital', 'Dhaka'], ["Kumudini Women's Medical College", 'Tangail'],
    ['Tairunnessa Memorial Medical College', 'Gazipur'], ['United Medical College', 'Dhaka'], ['Universal Medical College', 'Dhaka'], ['US-Bangla Medical College', 'Narayanganj'],
  ], 'Private')], note: 'Government college names follow the supplied reference to the DGME public medical-college database. Seats for international students are limited and allocated separately; confirm the route with JNEX.' },
  { code: 'ph', name: 'Philippines', group: 'asia', universities: cities([
    ['University of the Philippines – College of Medicine', 'Manila', 'Public'], ['University of Santo Tomas – Faculty of Medicine and Surgery', 'Manila', 'Private'], ['De La Salle Medical and Health Sciences Institute', 'Dasmariñas, Cavite', 'Private'],
    ['Far Eastern University – Dr. Nicanor Reyes Medical Foundation', 'Quezon City', 'Private'], ['University of the East Ramon Magsaysay Memorial Medical Center', 'Quezon City', 'Private'], ["St. Luke's Medical Center College of Medicine", 'Quezon City', 'Private'],
    ['Ateneo School of Medicine and Public Health', 'Pasig', 'Private'], ['University of the Philippines – Manila School of Health Sciences', 'Leyte', 'Public'], ['Cebu Institute of Medicine', 'Cebu City', 'Private'],
    ["Cebu Doctors' University College of Medicine", 'Cebu', 'Private'], ['University of Cebu School of Medicine', 'Cebu', 'Private'], ['West Visayas State University – College of Medicine', 'Iloilo', 'Public'],
    ["Iloilo Doctors' College of Medicine", 'Iloilo', 'Private'], ['Central Philippine University College of Medicine', 'Iloilo', 'Private'], ['Silliman University Medical School', 'Dumaguete', 'Private'],
    ['Davao Medical School Foundation', 'Davao City', 'Private'], ['Ateneo de Zamboanga University School of Medicine', 'Zamboanga', 'Private'], ['Xavier University – Dr. Jose P. Rizal School of Medicine', 'Cagayan de Oro', 'Private'],
    ['Liceo de Cagayan University College of Medicine', 'Cagayan de Oro', 'Private'], ['Bicol University College of Medicine', 'Legazpi', 'Public'], ['Cagayan State University College of Medicine', 'Tuguegarao', 'Public'],
    ['University of Northern Philippines College of Medicine', 'Vigan', 'Public'], ['Mariano Marcos State University College of Medicine', 'Batac', 'Public'], ['Don Mariano Marcos Memorial State University College of Medicine', 'La Union', 'Public'],
    ['Bulacan State University College of Medicine', 'Bulacan', 'Public'], ['Saint Louis University School of Medicine', 'Baguio', 'Private'], ['Adventist University of the Philippines College of Medicine', 'Silang, Cavite', 'Private'],
    ['Our Lady of Fatima University College of Medicine', 'Valenzuela / Quezon City', 'Private'], ['University of Perpetual Help – Dr. Jose G. Tamayo Medical University', 'Biñan, Laguna', 'Private'], ['Manila Central University College of Medicine', 'Caloocan', 'Private'],
    ['Angeles University Foundation School of Medicine', 'Angeles', 'Private'], ['Emilio Aguinaldo College School of Medicine', 'Manila', 'Private'], ['University of the Visayas – Gullas College of Medicine', 'Cebu', 'Private'],
    ['University of San Carlos School of Medicine', 'Cebu', 'Private'], ['University of South Philippines Foundation School of Medicine', 'Cebu', 'Private'], ['Brokenshire College School of Medicine', 'Davao', 'Private'],
    ['Bohol Island State University College of Medicine', 'Tagbilaran', 'Public'], ['University of Science and Technology of Southern Philippines College of Medicine', 'Cagayan de Oro', 'Public'], ['Mindanao State University – College of Medicine', 'General Santos', 'Public'],
    ['Western Mindanao State University College of Medicine', 'Zamboanga', 'Public'],
  ]) },
  { code: 'vn', name: 'Vietnam', group: 'asia', universities: cities([
    ['Hanoi Medical University', 'Hanoi'], ['University of Medicine and Pharmacy at Ho Chi Minh City', 'Ho Chi Minh City'], ['Vietnam Military Medical University', 'Hanoi'], ['Hue University of Medicine and Pharmacy', 'Hue'],
    ['Pham Ngoc Thach University of Medicine', 'Ho Chi Minh City'], ['Thai Binh University of Medicine and Pharmacy', 'Thai Binh'], ['Thai Nguyen University of Medicine and Pharmacy', 'Thai Nguyen'], ['Hai Phong University of Medicine and Pharmacy', 'Hai Phong'],
    ['Can Tho University of Medicine and Pharmacy', 'Can Tho'], ['Vinh Medical University', 'Vinh'], ['Tra Vinh University – Faculty of Medicine', 'Tra Vinh'], ['University of Medicine and Pharmacy, Vietnam National University, Hanoi', 'Hanoi'],
    ['School of Medicine, Vietnam National University, Ho Chi Minh City', 'Ho Chi Minh City'], ['University of Da Nang – Faculty of Medicine and Pharmacy', 'Da Nang'], ['University of Medicine and Pharmacy, Da Nang University', 'Da Nang'],
  ]) },
  { code: 'eg', name: 'Egypt', group: 'asia', universities: cities([
    ['Cairo University – Faculty of Medicine', 'Cairo'], ['Ain Shams University – Faculty of Medicine', 'Cairo'], ['Alexandria University – Faculty of Medicine', 'Alexandria'], ['Assiut University – Faculty of Medicine', 'Assiut'],
    ['Mansoura University – Faculty of Medicine', 'Mansoura'], ['Tanta University – Faculty of Medicine', 'Tanta'], ['Zagazig University – Faculty of Medicine', 'Zagazig'], ['Benha University – Faculty of Medicine', 'Benha'],
    ['Fayoum University – Faculty of Medicine', 'Fayoum'], ['Minia University – Faculty of Medicine', 'Minia'], ['Suez Canal University – Faculty of Medicine', 'Ismailia'], ['Suez University – Faculty of Medicine', 'Suez'],
    ['Port Said University – Faculty of Medicine', 'Port Said'], ['Aswan University – Faculty of Medicine', 'Aswan'], ['Sohag University – Faculty of Medicine', 'Sohag'], ['Qena University / South Valley University – Faculty of Medicine', 'Qena'],
    ['Kafr El Sheikh University – Faculty of Medicine', 'Kafr El Sheikh'], ['Menoufia University – Faculty of Medicine', 'Shebin El Kom'], ['Damietta University – Faculty of Medicine', 'Damietta'], ['Arish University – Faculty of Medicine', 'Arish'],
    ['Luxor University – Faculty of Medicine', 'Luxor'], ['New Valley University – Faculty of Medicine', 'Kharga'], ['October 6 University – Faculty of Medicine', '6th of October City'], ['Misr University for Science and Technology – College of Medicine', '6th of October City'],
    ['New Giza University – School of Medicine', 'Giza'], ['Badr University in Cairo – School of Medicine', 'Cairo'], ['Delta University for Science and Technology – Faculty of Medicine', 'Dakahlia'], ['Nahda University – Faculty of Medicine', 'Beni Suef'],
    ['Modern University for Technology and Information – Faculty of Medicine', 'Cairo'], ['Merit University – Faculty of Medicine', 'Sohag'], ['Arab Academy for Science, Technology and Maritime Transport – College of Medicine', 'Alexandria'], ['Horus University – Faculty of Medicine', 'Damietta'],
    ['Badya University – School of Medicine', 'Giza'], ['Future University in Egypt – Faculty of Medicine', 'Cairo'], ['October University for Modern Sciences and Arts – Faculty of Medicine', 'Giza'], ['Egyptian Russian University – Faculty of Medicine', 'Cairo'],
    ['Heliopolis University – Faculty of Medicine', 'Cairo'], ['Galala University – Faculty of Medicine', 'Galala'], ['King Salman International University – Faculty of Medicine', 'Sinai'], ['New Mansoura University – Faculty of Medicine', 'New Mansoura'],
    ['Alexandria National University – Faculty of Medicine', 'Alexandria'], ['Assiut National University – Faculty of Medicine', 'Assiut'], ['Benha National University – Faculty of Medicine', 'Benha'], ['East Port Said National University – Faculty of Medicine', 'Port Said'],
    ['Mansoura National University – Faculty of Medicine', 'Mansoura'], ['Minia National University – Faculty of Medicine', 'Minia'], ['New Ismailia National University – College of Medicine', 'Ismailia'], ['Zagazig National University – Faculty of Medicine', 'Zagazig'],
    ['Beni Suef National University – Faculty of Medicine', 'Beni Suef'], ['Menoufia National University – Faculty of Medicine', 'Menoufia'],
  ]) },
];

export const medicalUniversityTotal = medicalUniversityCountries.reduce((sum, country) => sum + country.universities.length, 0);
