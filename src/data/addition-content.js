import references from './addition-references.json';

export const referenceFiles = references.files;
export const medicalReferences = references.medical;
export const engineeringReferences = references.engineering;
export const contentReviewDate = '2026-09-16';
export const referenceNote = 'JNEX planning references, not official fee orders or allotment results. Confirm the applicable intake, quota, fee period and additional charges before making a decision.';
export const money = value => value == null ? 'Confirm with college' : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

export const destinations = [
  ['Russia', 'RU', '6 years', 'English / Russian', [20, 35]],
  ['Kazakhstan', 'KZ', '5–6 years', 'English', [18, 32]],
  ['Uzbekistan', 'UZ', '5–6 years', 'English / local language', [15, 28]],
  ['Kyrgyzstan', 'KG', '5–6 years', 'English', [15, 25]],
  ['Georgia', 'GE', '6 years', 'English', [25, 38]],
  ['Bangladesh', 'BD', '5–6 years', 'English', [35, 45]],
  ['Philippines', 'PH', 'Varies by program', 'English', [25, 40]],
  ['Nepal', 'NP', '5.5 years', 'English', [45, 60]],
  ['Armenia', 'AM', '6 years', 'English', null],
  ['Moldova', 'MD', '6 years', 'English', null],
  ['Vietnam', 'VN', 'Varies by program', 'English / local language', null],
  ['Egypt', 'EG', 'Varies by program', 'English / Arabic', null],
  ['Serbia', 'RS', '6 years', 'English', null],
  ['Poland', 'PL', '6 years', 'English', null],
].map(([name, code, duration, medium, budget]) => ({ name, code, duration, medium, budget }));

export const alliedCourses = [
  { name: 'Cardiac Care Technology', qualification: 'B.Sc. Cardiac Care / Cardiovascular Technology', duration: 'About 4 years, including internship', entry: 'Typically Class 12 PCB; college-specific marks and admission process.', subjects: ['Cardiac anatomy', 'ECG and echocardiography', 'Cath lab procedures', 'ICU / CCU monitoring'], careers: ['Cardiac care technologist', 'Cath lab technologist', 'ECG / echo technician'], workplaces: 'Cardiac hospitals, cath labs and medical device companies.' },
  { name: 'Radiology & Imaging Technology', qualification: 'B.Sc. Radiology / BMRIT', duration: 'About 3–4 years, including clinical training', entry: 'Typically Class 12 PCB; some institutions accept PCM.', subjects: ['Radiographic physics', 'Radiation safety', 'X-ray, CT and MRI', 'Imaging systems'], careers: ['Radiology technologist', 'CT / MRI technologist', 'PACS administrator'], workplaces: 'Diagnostic centres, hospitals, cancer centres and imaging companies.' },
  { name: 'Perfusion Technology', qualification: 'B.Sc. Perfusion Technology', duration: 'About 4 years, including internship', entry: 'Typically Class 12 PCB; confirm the institution’s minimum marks.', subjects: ['Cardiovascular surgery', 'Heart-lung machine operation', 'ECMO support', 'Blood transfusion'], careers: ['Perfusion technologist', 'ECMO specialist', 'Cardiac surgery technologist'], workplaces: 'Cardiac specialty hospitals, transplant centres and research institutes.' },
  { name: 'Medical Laboratory Technology', qualification: 'B.Sc. MLT', duration: 'About 3–4 years', entry: 'Typically Class 12 PCB; some institutions also accept PCM.', subjects: ['Biochemistry and haematology', 'Microbiology', 'Blood banking', 'Molecular diagnostics and quality control'], careers: ['Medical lab technologist', 'Blood bank technologist', 'Laboratory quality officer'], workplaces: 'Hospitals, diagnostic laboratories, blood banks and biotech companies.' },
  { name: 'Aesthetic Science & Cosmetology', qualification: 'B.Sc. Aesthetic Science / Clinical Cosmetology', duration: 'About 3 years', entry: 'Some institutions accept any Class 12 stream; PCB may be preferred.', subjects: ['Skin anatomy', 'Cosmetic science', 'Aesthetic technology theory', 'Clinic and wellness management'], careers: ['Aesthetic therapist', 'Skincare and wellness professional'], workplaces: 'Skincare clinics, medical spas, wellness centres and cosmetic companies. Scope of practice depends on training and applicable rules.' },
  { name: 'Anaesthesia Technology', qualification: 'B.Sc. Anaesthesia Technology / AOTT', duration: 'About 4 years; internship structure varies', entry: 'Typically Class 12 PCB; check current marks and entrance requirements.', subjects: ['Anaesthesia equipment', 'Airway management', 'Patient monitoring', 'Operation theatre techniques'], careers: ['Anaesthesia technologist', 'Operation theatre technologist', 'Critical care technician'], workplaces: 'Multi-specialty hospitals, operation theatres and emergency care units.' },
  { name: 'Neurophysiology Technology', qualification: 'B.Sc. Neurophysiology / Neuro Electro Physiology', duration: 'About 3–4 years', entry: 'Typically Class 12 PCB; check the institution’s eligibility.', subjects: ['Neuroanatomy', 'EEG and EMG', 'Nerve conduction studies', 'Sleep studies'], careers: ['Neurodiagnostic technologist', 'EEG / EMG technologist', 'Sleep lab technologist'], workplaces: 'Neurology departments, sleep laboratories and research institutes.' },
  { name: 'Physiotherapy', qualification: 'Bachelor of Physiotherapy (BPT)', duration: 'Supplied guide: 4.5 years; confirm the current curriculum', entry: 'Class 12 PCB; duration, entrance route and minimum marks must be checked for the intake.', subjects: ['Biomechanics', 'Exercise and electrotherapy', 'Orthopaedic and neurological rehabilitation', 'Sports physiotherapy'], careers: ['Physiotherapist', 'Rehabilitation professional', 'Sports physiotherapy professional'], workplaces: 'Hospitals, rehabilitation centres, sports academies and eligible clinical practice settings.' },
  { name: 'Nursing', qualification: 'B.Sc. Nursing', duration: 'About 4 years', entry: 'Typically Class 12 PCB and English; confirm the applicable entrance test.', subjects: ['Medical-surgical nursing', 'Paediatric and maternity nursing', 'Mental health nursing', 'Community and critical care'], careers: ['Registered nurse, subject to registration', 'Critical care nurse', 'Community health nurse'], workplaces: 'Hospitals, community healthcare, home healthcare and teaching institutions with further qualifications.' },
];

export const careerGroups = [
  ['Medical & Dental', 'MBBS · BDS', 'NEET-based admission pathways. Compare counselling route, training, internship and registration requirements.', '/mbbs-admission/'],
  ['AYUSH & Naturopathy', 'BAMS · BHMS · BUMS · BSMS · BNYS', 'Traditional medicine and naturopathy pathways. Confirm the entrance route and eligibility for each course; BNYS rules vary.', '/medical-admissions/#ayush'],
  ['Veterinary Science', 'BVSc & AH', 'Explore animal healthcare and veterinary science. Confirm the relevant university/quota admission route and registration requirements.', '/medical-admissions/#veterinary'],
  ['Nursing Sciences', 'B.Sc. Nursing · GNM · ANM', 'Degree and diploma pathways in patient care. Eligibility, entrance tests and duration differ by qualification.', '/medical-admissions/#nursing'],
  ['Allied Health & Rehabilitation', 'BPT · MLT · Radiology · OT · Cardiac Care · Perfusion · BASLP', 'Explore diagnostic, rehabilitation and clinical support roles with hands-on training.', '/medical-admissions/#allied-health'],
  ['Pharmacy', 'B.Pharm · Pharm.D · D.Pharm', 'Degree and diploma pathways across medicines and pharmaceutical care. Compare course entry requirements and professional registration.', '/medical-admissions/#pharmacy'],
  ['Paramedical Diplomas', 'DMLT · X-ray · Dialysis · OT · Ophthalmic · Medical Records', 'Focused healthcare support qualifications. Check awarding body, hospital training and progression options.', '/medical-admissions/#paramedical'],
  ['Research & Non-clinical Sciences', 'Biotechnology · Microbiology · Biochemistry · Genetics · Forensic Science · Nutrition · Clinical Research', 'Explore laboratory, research and life-science pathways. Check course-specific subject requirements and career progression.', '/medical-admissions/#research'],
];
export const careerDurationNotes = [
  'MBBS: 5.5 years · BDS: 5 years',
  'BAMS, BHMS, BUMS, BSMS and BNYS: 5.5 years in the supplied poster; confirm the intake curriculum.',
  'BVSc & AH: 5.5 years',
  'B.Sc. Nursing: 4 years · GNM: 3.5 years · ANM: 2 years in the supplied poster; verify the current diploma structure.',
  'Poster: BPT 4.5 years; MLT and radiology 3–4 years; OT, cardiovascular and perfusion technology 3 years; BASLP 4 years. The detailed guide lists about 4 years including internship for cardiac/perfusion pathways, so confirm each institution’s structure.',
  'B.Pharm: 4 years · Pharm.D: 6 years · D.Pharm: 2 years',
  'DMLT and ophthalmic technology: 2 years · X-ray, dialysis, OT technician and medical record technology: 1–2 years',
  'Degree length and specialisation depend on the university’s program; no single duration is specified in the supplied poster.',
];

const stateBriefs = [
  ['Andhra Pradesh', 'Dr. N.T.R. University of Health Sciences', 'https://drntr.uhsap.in/index/notification_admission', 'Andhra Pradesh.png', 'Compare competent-authority and management admission notices separately. The supplied poster distinguishes domicile/non-domicile scores, but does not identify their result year, category or quota.', 'The poster reports ₹13.2 lakh yearly; many workbook entries report ₹12 lakh with a conflicting total-course heading. These are separate references, not interchangeable quotes.', ['Nellore', 'Guntur', 'Rajahmundry', 'Visakhapatnam']],
  ['Gujarat', 'Admission Committee for Professional Undergraduate Medical Educational Courses', 'https://www.medadmgujarat.org/ug/home.aspx', 'Gijrat.png', 'Compare government, management and NRI quota columns separately. The supplied material also includes GMERS institutions; keep their institution type distinct from private colleges.', 'The poster quotes INR fees for government/management quotas and USD fees for NRI quotas. The charging period is not stated; request the official fee order.', ['Ahmedabad', 'Vadodara', 'Surat', 'Gandhinagar']],
  ['Karnataka', 'Karnataka Examinations Authority', 'https://cetonline.karnataka.gov.in/kea/', 'Karnataka.png', 'Use the current KEA UGNEET bulletin to check eligibility and seat categories. Compare Bengaluru and other Karnataka locations; deemed institutions need a separate counselling-route check.', 'The poster labels tuition yearly, while matching workbook amounts sit under a total-course heading. Round 1/2 poster scores lack a confirmed year/category/quota.', ['Bengaluru', 'Mangaluru', 'Mysuru', 'Bagalkot']],
  ['Kerala', 'Commissioner for Entrance Examinations, Kerala', 'https://cee.kerala.gov.in/', 'Kerala.png', 'Review CEE Kerala application and allotment notices. The supplied list includes minority institutions, so confirm seat eligibility and supporting documents for the exact category.', 'The poster separates management and NRI fees, but amounts differ from the workbook and the charging period is unstated. Confirm the college-specific government fee order.', ['Thrissur', 'Kozhikode', 'Thiruvalla', 'Palakkad']],
  ['Madhya Pradesh', 'Directorate of Medical Education, Madhya Pradesh', 'https://dme.mponline.gov.in/', 'Madhya Pradesh.png', 'Compare tuition, additional charges and potential Medhavi funding separately. A scholarship column is not proof of an award or a reduction available to every student.', 'The poster labels yearly fees and a separate “Mix charges” column. Confirm which charges are compulsory and whether they recur; scholarship eligibility must be checked independently.', ['Bhopal', 'Indore', 'Ujjain', 'Jabalpur']],
  ['Rajasthan', 'Rajasthan Medical Education Department', 'https://medicaleducation.rajasthan.gov.in/me/#/home/dptHome', 'Rajasthan.png', 'Find the current NEET UG counselling portal through the department’s official notices. Compare state and management quota fees without assuming the same eligibility.', 'The poster lists state and management quota amounts without a charging period. Additional college entries and names differ from the workbook; check the current seat matrix.', ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota']],
  ['Tamil Nadu', 'Selection Committee, Directorate of Medical Education and Research', 'https://tnmedicalselection.net/', 'Tamilnadu.png', 'Check separate government and management quota prospectuses, including applicable minority/NRI categories. Do not apply one institution’s eligibility to every private college.', 'The poster distinguishes government and management quota fees; the period is unstated. The workbook uses a total-course heading. Request the current fee schedule for your allotted quota.', ['Chennai', 'Coimbatore', 'Salem', 'Tiruchirappalli']],
  ['Uttar Pradesh', 'Director General Medical Education and Training, Uttar Pradesh', 'https://upneet.gov.in/', 'Uttar Pradesh.png', 'Review current UP NEET registration, choice filling, fee and reporting notices. The poster covers non-minority colleges; the workbook includes additional minority records.', 'The poster describes prescribed yearly fees. Workbook amounts are retained separately because its fee heading says total course. Hostel, security and other charges need separate confirmation.', ['Lucknow', 'Hapur', 'Kanpur', 'Greater Noida']],
  ['West Bengal', 'West Bengal Medical Counselling Committee', 'https://wbmcc.nic.in/', 'West Bangal.png', 'Compare state and management quotas through WBMCC notices. Location, seat category and eligibility matter alongside the tuition quote.', 'The poster explicitly states that every quoted fee is per semester. No annual conversion or full-course estimate is applied automatically.', ['Kolkata', 'Durgapur', 'Haldia', 'Howrah']],
  ['Maharashtra', 'State Common Entrance Test Cell, Maharashtra', 'https://cetcell.mahacet.org/', null, 'Compare Maharashtra CAP routes with MCC routes for participating deemed and all-India seats. The supplied Maharashtra guide is based on 2025 trends and 2026 projections.', 'The guide’s private/deemed fees and score bands are indicative estimates, not final allotment data. Use current CET Cell, fee authority and MCC notices before choice filling.', ['Mumbai', 'Pune', 'Nagpur', 'Nashik']],
];

export const stateGuides = stateBriefs.map(([name, authority, authorityUrl, poster, routeCopy, feeCopy, cities]) => {
  const slug = name.toLowerCase().replaceAll(' ', '-');
  return { name, slug, authority, authorityUrl, poster, routeCopy, feeCopy, cities,
    intro: `Explore MBBS planning in ${name}: counselling routes, college locations, quota-specific fee references and the documents to check before preparing your preference list.`,
    faqs: [
      [`Where should I check ${name} counselling notices?`, `Use ${authority} for state notices and MCC for the applicable all-India/deemed routes. Follow the current course bulletin and official registration links.`],
      [`Can a student from another state apply in ${name}?`, 'Eligibility depends on the seat category and current bulletin. Check domicile, schooling, nationality and quota requirements before registering; a college appearing here does not establish eligibility.'],
      ['Are these fees annual or for the full course?', feeCopy],
      ['Are the supplied scores official 2026 cutoffs?', 'No score is presented here as a verified 2026 cutoff. The supplied references do not establish all required year, round, category and quota details; projections are not admission guarantees.'],
      ['What should I check beyond tuition?', 'Ask for hostel, mess, deposits, university/exam charges, bond or service conditions, fee escalation, payment schedule and refund rules in writing.'],
      [`How can JNEX help me compare ${name} options?`, 'Share your NEET AIR, domicile, category, budget and location preferences. JNEX can help organise routes, college questions, documents and choices; allotment remains subject to counselling outcomes.'],
    ],
  };
});

export const resources = [
  ['maharashtra-mbbs', 'Medical India', 'Maharashtra MBBS planning guide', 'Counselling routes, documents, private/deemed comparisons and scholarship questions.', 'MBBS_Maharashtra_Guide_JnexEducation-3.pdf', '/mbbs-admission/maharashtra/', '2025 trends and 2026 projections; fees, score bands and scheme details need current official confirmation.'],
  ['medical-fees', 'Medical India', 'Medical college fee reference workbook', '58 deemed and 262 private source records, plus supplied state summaries.', 'Medical_Colleges_Fees_2026_Clean-2.xlsx', '/medical-colleges/', 'Fee headings conflict with yearly poster amounts. State summary totals do not fully reconcile; use the website’s labelled individual references.'],
  ['allied-health', 'Allied Health', 'Nine allied health course pathways', 'Subjects, clinical training, careers and work settings after Class 12.', 'Allied_Health_Science_Courses.pdf', '/medical-admissions/#allied-health', 'Typical course details; duration and eligibility vary by institution and intake.'],
  ['medical-abroad', 'Medical Abroad', 'International medical destination directory', '14 destinations with typical durations and instruction mediums.', 'study_abroad_guide_updated.pdf', '/mbbs-abroad/', 'Medical programs only. Country-level durations and mediums do not establish university eligibility for registration in India.'],
  ...[['India', 'india'], ['Karnataka', 'karnataka'], ['Maharashtra', 'maharashtra_v2'], ['Tamil Nadu', 'tamilnadu']].map(([name, file]) => [`engineering-${file}`, 'Engineering', `${name} engineering college directory`, 'Institution names, locations and supplied affiliation/status references.', `private_engineering_colleges_${file}.pdf`, '/india-admissions/engineering/', 'Includes private, deemed, autonomous and some government-aided institutions; not a current ranking or approval certificate.']),
].map(([id, category, title, copy, file, href, note]) => ({ id, category, title, copy, file, href, note, download: referenceFiles[file], format: file.endsWith('.xlsx') ? 'XLSX' : 'PDF' }));
