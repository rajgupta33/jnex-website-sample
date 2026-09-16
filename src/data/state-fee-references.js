// Transcribed poster values, deliberately kept separate from workbook values.
// Values are display-only source references; no annualisation or prediction.
const parse = text => text.trim().split('\n').map(line => line.split('|').map(value => value.trim()));
export const stateFeeReferences = {
  'Andhra Pradesh': { period: 'Yearly, as labelled in the poster', columns: ['College', 'Reported fee'], rows: parse(`
Narayana Medical College, Nellore|₹13.2 lakh
NRI Medical College, Guntur|₹13.2 lakh
Katuri Medical College, Guntur|₹13.2 lakh
GSL Medical College, Rajahmundry|₹13.2 lakh
Alluri Seetharama Raju Academy of Medical Sciences, Eluru|₹13.2 lakh
Apollo Institute of Medical Sciences & Research, Chittoor|₹13.2 lakh
Konaseema Institute of Medical Sciences, Amalapuram|₹13.2 lakh
PES Institute of Medical Sciences & Research, Kuppam|₹13.2 lakh
Santhiram Medical College, Nandyal|₹13.2 lakh
Maharajah Institute of Medical Sciences, Vizianagaram|₹13.2 lakh
NRI Institute of Medical Sciences, Visakhapatnam|₹13.2 lakh
Viswabharathi Medical College, Kurnool|₹13.2 lakh
Dr. Pinnamaneni Siddhartha Institute of Medical Sciences, Vijayawada|₹13.2 lakh
Great Eastern Medical School & Hospital, Srikakulam|₹13.2 lakh
Gayatri Vidya Parishad Institute of Healthcare & Medical Technology, Visakhapatnam|₹13.2 lakh
Fathima Medical College, Kadapa|₹13.2 lakh
Nimra Medical College, Vijayawada|₹13.2 lakh
Sri Balaji Medical College & Hospital, Tirupati|₹13.2 lakh
Anna Gowri Medical College, Tirupati district|₹13.2 lakh
`), note: 'Quota is not established by this fee column. A repeated Santhiram entry is consolidated. Anna Gowri’s erroneous poster location is replaced with the Andhra Pradesh location in the workbook.' },
  Gujarat: { period: 'Charging period not stated in the poster', columns: ['College', 'Government quota', 'Management quota', 'NRI quota'], rows: parse(`
Ananya College of Medicine & Research, Kalol|₹11.35 lakh|₹21.73 lakh|USD 30,000
Banas Medical College & Research Institute, Palanpur|₹10.01 lakh|₹20.37 lakh|USD 30,000
Bhagyoday Medical College, Kadi|₹9.05 lakh|₹17.32 lakh|USD 30,000
C. U. Shah Medical College, Surendranagar|₹10.91 lakh|₹24 lakh|USD 33,000
Dr. Kiran C. Patel Medical College & Research Institute, Bharuch|₹10.50 lakh|₹20 lakh|USD 32,000
Dr. M. K. Shah Medical College & Research Centre, Ahmedabad|₹12.12 lakh|₹24.24 lakh|USD 35,000
Dr. N. D. Desai Faculty of Medical Science & Research, Nadiad|₹11.50 lakh|₹22.50 lakh|USD 38,000
GCS Medical College, Hospital & Research Centre, Ahmedabad|₹10.91 lakh|₹20.46 lakh|USD 30,000
Gujarat Adani Institute of Medical Sciences, Bhuj|₹10.80 lakh|₹22.50 lakh|USD 32,000
Kiran Medical College, Surat|₹11.35 lakh|₹21.73 lakh|USD 30,000
Narendra Modi Medical College, Ahmedabad|₹10.23 lakh|₹28.70 lakh|USD 40,000
NHL Municipal Medical College, Ahmedabad|₹8.30 lakh|₹20 lakh|USD 35,000
Nootan Medical College & Research Centre, Mehsana|₹10 lakh|₹18.90 lakh|USD 32,000
Parul Institute of Medical Sciences & Research, Vadodara|₹12.54 lakh|₹21.40 lakh|USD 35,000
Pramukhswami Medical College, Karamsad|₹12.40 lakh|₹24.98 lakh|USD 35,000
SAL Institute of Medical Sciences, Ahmedabad|₹11.94 lakh|₹22.08 lakh|USD 30,000
SBKS Medical Institute & Research Centre, Vadodara|₹10.50 lakh|₹20 lakh|USD 40,000
Shantabaa Medical College, Amreli|₹10.76 lakh|₹20 lakh|USD 35,000
Shree Swaminarayan Institute of Medical Sciences & Research, Gandhinagar|₹11.35 lakh|₹21.73 lakh|USD 30,000
Surat Municipal Institute of Medical Education & Research|₹10.02 lakh|₹21.96 lakh|USD 30,000
Zydus Medical College & Hospital, Dahod|₹11.75 lakh|₹32.50 lakh|USD 32,000
GMERS Medical College, Sola, Ahmedabad|₹4.50 lakh|₹12 lakh|USD 30,000
GMERS Medical College, Gotri, Vadodara|₹4.50 lakh|₹12 lakh|USD 30,000
GMERS Medical College, Gandhinagar|₹4.50 lakh|₹12 lakh|USD 30,000
GMERS Medical College, Dharpur, Patan|₹4.50 lakh|₹12 lakh|USD 30,000
GMERS Medical College, Valsad|₹4.50 lakh|₹12 lakh|USD 30,000
GMERS Medical College, Hadiyol, Himmatnagar|₹4.50 lakh|₹12 lakh|USD 30,000
`), note: 'Includes municipal, GMERS and other institution types as listed in the poster. This table does not establish their current management classification or seat route.' },
  Karnataka: { period: 'Yearly, as labelled in the poster', columns: ['College', 'Reported fee'], rows: parse(`
St. John’s Medical College, Bengaluru|₹8,11,285
Kempegowda IMS, Bengaluru|₹12,00,867
Vydehi IMS & RC, Bengaluru|₹12,00,867
Dr. B. R. Ambedkar Medical College, Bengaluru|₹12,00,867
BGS Global IMS, Bengaluru|₹12,00,867
MVJ Medical College, Bengaluru|₹12,00,867
Akash IMS & RC, Bengaluru|₹12,00,867
East Point College, Bengaluru|₹12,00,867
S. Nijalingappa Medical College & RC, Bagalkot|₹12,00,867
Al-Ameen Medical College, Vijayapura|₹12,00,867
Sri Basaveshwara Medical College, Chitradurga|₹12,00,867
JJM Medical College, Davanagere|₹12,00,867
SSIMS, Davanagere|₹12,00,867
Mahadevappa Rampure Medical College, Kalaburagi|₹12,00,867
The Oxford Medical College, Bengaluru|₹12,00,867
Father Muller Medical College, Mangaluru|₹12,00,867
A. J. IMS & Research Centre, Mangaluru|₹12,00,867
Kanachur IMS & RC, Mangaluru|₹12,00,867
KVG Medical College, Sullia|₹12,00,867
Navodaya Medical College, Raichur|₹12,00,867
Subbaiah Institute of Medical Sciences, Shivamogga|₹12,00,867
Shridevi IMS & Research Hospital, Tumakuru|₹12,00,867
Siddaganga Medical College, Tumakuru|₹12,00,867
Sri Chamundeshwari Medical College, Ramanagara|₹12,00,867
CR Patil Medical College (name in poster), Bagalkot|₹12,00,867
Farookh Academy Medical College, Mysuru|₹12,00,867
M. S. Ramaiah Medical College, Bengaluru|₹25,15,750
Sapthagiri Institute of Medical Sciences, Bengaluru|₹22,41,500
Khaja Bandanawaz IMS, Kalaburagi|₹16,30,715
SDM Medical College, Dharwad|₹20,15,750
Adichunchanagiri IMS, Mandya|₹22,15,750
Dr. Chandramma Dayananda Sagar Medical College, Harohalli|₹22,15,750
PES University Medical College, Bengaluru|₹22,15,750
BGS Medical College, Bengaluru|₹22,15,750
Srinivasa IMS & Research Centre, Mangaluru|₹22,15,750
Sri Madhusudan Sai Medical College, Chikkaballapur|₹22,00,750
`), note: 'The fee column does not establish the applicable quota. The poster’s Round 1/2 scores remain unverified references and are not used for predictions.' },
  Kerala: { period: 'Charging period not stated in the poster', columns: ['College', 'Management fees', 'NRI fees'], rows: parse(`
Believers Church Medical College, Thiruvalla|₹8,16,038|₹21,65,720
Amala Institute of Medical Sciences, Thrissur|₹8,16,038|₹21,65,720
Pushpagiri Institute of Medical Sciences, Thiruvalla|₹8,16,038|₹21,65,720
Jubilee Mission Medical College, Thrissur|₹8,16,038|₹21,65,720
Malankara Orthodox Syrian Church Medical College, Kolenchery|₹8,16,038|₹21,65,720
KMCT Medical College, Kozhikode|₹8,16,038|₹21,65,720
Palakkad Institute of Medical Sciences|₹8,98,800|₹21,65,720
Malabar Medical College Hospital, Kozhikode|₹8,16,038|₹21,65,720
Sree Gokulam Medical College, Thiruvananthapuram|₹7,71,795|₹21,65,720
MES Medical College, Malappuram|₹8,16,038|₹21,65,720
Sree Narayana Institute of Medical Sciences, Ernakulam|₹8,49,961|₹21,65,720
Karuna Medical College, Palakkad|₹7,87,780|₹21,65,720
Travancore Medical College, Kollam|₹8,16,038|₹21,65,720
Dr. Somervell Memorial CSI Medical College, Thiruvananthapuram|₹8,16,038|₹21,65,720
SUT Academy of Medical Sciences, Thiruvananthapuram|₹8,16,038|₹21,65,720
Al Azhar Medical College, Thodupuzha|₹8,16,038|₹21,65,720
Mount Zion Medical College, Pathanamthitta|₹8,09,939|₹21,65,720
Dr. Moopen’s Medical College, Wayanad|₹8,86,779|₹21,65,720
Azeezia Institute of Medical Sciences, Kollam|₹8,16,038|₹21,65,720
P. K. Das Institute of Medical Sciences, Ottapalam|₹8,97,000|₹21,65,720
Kerala Medical College, Mangode|₹8,16,038|₹21,65,720
`) },
  'Madhya Pradesh': { period: 'Yearly fee as labelled; other charges need confirmation', columns: ['College', 'Yearly fee', '“Mix charges”', 'Medhavi amount in source'], rows: parse(`
People’s College of Medical Science, Bhopal|₹13,89,750|₹2,45,250|₹13,89,750
Sri Aurobindo Institute of Medical Science, Indore|₹13,81,845|₹2,43,855|₹13,81,845
R. D. Gardi Medical College, Ujjain|₹8,18,181|₹81,819|₹8,18,181
Index Medical College, Indore|₹13,77,000|₹2,43,000|₹13,77,000
LN Medical College, Bhopal|₹14,09,300|₹2,48,700|₹14,09,300
Chirayu Medical College, Bhopal|₹12,94,890|₹2,28,510|₹12,94,890
Amaltas Medical College, Dewas|₹13,17,500|₹2,32,500|₹13,17,500
RKDF Medical College & Research Centre, Bhopal|₹13,26,000|₹2,34,000|₹13,26,000
LNCT Medical College & Sewakunj Hospital, Indore|₹13,21,070|₹2,33,130|₹13,21,070
Sukh Sagar Medical College Hospital, Jabalpur|₹11,34,000|₹1,26,000|₹11,34,000
Mahaveer Institute of Medical Science & Research, Bhopal|₹9,63,635|₹96,365|₹9,63,635
Ram Krishna Medical College Hospital & Research Centre, Bhopal|₹8,67,275|₹86,725|₹8,67,275
School of Medical Science, Sri Satya Sai University, Sehore|₹12,92,000|₹2,28,000|₹12,92,000
`), note: 'Medhavi amounts are transcribed scholarship references, not confirmed awards. Do not subtract them from your budget without verified eligibility and approval.' },
  Rajasthan: { period: 'Charging period not stated in the poster', columns: ['College', 'State quota', 'Management quota'], rows: parse(`
American International Institute of Medical Sciences, Udaipur|₹18,90,000|₹32,00,000
Ananta Institute of Medical Sciences, Rajsamand|₹18,90,000|₹28,00,000
Geetanjali Medical College & Hospital, Udaipur|₹23,00,000|₹30,00,000
JNU Institute for Medical Sciences & Research Centre, Jaipur|₹23,00,000|₹28,00,000
MG Medical College, Jaipur|₹19,50,000|₹26,75,000
NIMS University, Jaipur|₹24,00,000|₹30,00,000
Pacific Institute of Medical Sciences, Udaipur|₹25,00,000|₹35,00,000
Pacific Medical College & Hospital, Udaipur|₹25,00,000|₹34,00,000
Dr. S. S. Tantia Medical College, Sriganganagar|₹22,25,000|₹29,25,000
Vyas Medical College & Hospital, Jodhpur|₹18,90,000|₹28,20,000
Sudha Medical College & Hospital, Kota|₹18,90,000|₹28,20,000
JIET Medical College, Jodhpur|₹18,90,000|₹28,20,000
Balvir Singh Tomar Medical College, Jaipur|₹18,90,000|₹27,50,000
Geetanjali Medical College, Jaipur|₹22,00,000|₹29,00,000
Arya Medical College, Jaipur|₹18,90,000|₹27,00,000
`) },
  'Tamil Nadu': { period: 'Charging period not stated in the poster', columns: ['College', 'Government quota', 'Management quota'], rows: parse(`
PSG Institute of Medical Sciences & Research, Coimbatore|₹4.5 lakh|₹15 lakh
Sree Mookambika Institute of Medical Sciences, Kanyakumari|₹4.4 lakh|₹15 lakh
Karpaga Vinayaga Institute of Medical Sciences, Maduranthagam|₹4.35 lakh|₹15 lakh
Tagore Medical College & Hospital, Chennai|₹4.35 lakh|₹15 lakh
Velammal Medical College Hospital & Research Institute, Madurai|₹4.4 lakh|₹15 lakh
Annapoorna Medical College & Hospital, Salem|₹4.35 lakh|₹15 lakh
Sri Muthukumaran Medical College Hospital & Research Institute, Chennai|₹4.35 lakh|₹15 lakh
Trichy SRM Medical College Hospital & Research Centre|₹4.5 lakh|₹15 lakh
Karpagam Faculty of Medical Sciences & Research, Coimbatore|₹4.4 lakh|₹15 lakh
Melmaruvathur Adhiparasakthi Institute of Medical Sciences & Research|₹4.5 lakh|₹15 lakh
KMCH Institute of Health Sciences & Research, Coimbatore|₹4.35 lakh|₹15 lakh
Arunai Medical College & Hospital, Tiruvannamalai|₹4.5 lakh|₹15 lakh
Indira Medical College & Hospitals, Thiruvallur|₹4.5 lakh|₹15 lakh
Swamy Vivekanandha Medical College Hospital & Research Institute, Tiruchengode|₹4.5 lakh|₹15 lakh
Panimalar Medical College Hospital & Research Institute, Chennai|₹4.5 lakh|₹15 lakh
St. Peter’s Medical College Hospital & Research Institute|₹4.4 lakh|₹15 lakh
Madha Medical College & Research Institute, Chennai|₹4.35 lakh|₹15 lakh
Nandha Medical College & Hospital, Erode|₹4.5 lakh|₹15 lakh
PSP Medical College Hospital & Research Institute|₹4.5 lakh|₹15 lakh
Annai Medical College, Sriperumbudur|₹4.5 lakh|₹15 lakh
Dhanalakshmi Srinivasan Medical College & Hospital, Perambalur|₹4.5 lakh|₹16.2 lakh
Srinivasan Medical College & Hospital, Samayapuram|₹5.4 lakh|₹16.2 lakh
Sri Venkateswaraa Medical College Hospital & Research Institute, Chennai|₹5.4 lakh|₹16.2 lakh
Dhanalakshmi Srinivasan Institute of Medical Sciences & Hospital, Perambalur (SOP)|₹5.4 lakh|₹16.2 lakh
Kanyakumari Medical Mission Research Centre|₹5.4 lakh|₹16.2 lakh
Takshashila Medical College, Ongur|₹5.4 lakh|₹16.2 lakh
`) },
  'Uttar Pradesh': { period: 'Yearly, as labelled in the poster', columns: ['College', 'Prescribed fee in poster'], rows: parse(`
GS Medical College & Hospital, Hapur|₹14,42,654
Saraswati Institute of Medical Sciences, Hapur|₹11,21,162
School of Medical Sciences & Research, Greater Noida (Sharda University)|₹15,23,183
Noida International Institute of Medical Sciences, Gautam Buddha Nagar|₹17,70,784
Heritage Institute of Medical Sciences, Varanasi|₹13,21,492
United Institute of Medical Sciences, Prayagraj|₹11,96,401
Mayo Institute of Medical Sciences, Barabanki (Dr. KNS Institute)|₹11,21,162
TS Mishra Medical College & Hospital, Lucknow|₹18,70,847
Narayana Medical College & Research Centre, Kanpur|₹14,66,645
Kanti Devi Medical College Hospital & Research Centre, Mathura|₹12,28,240
Krishna Mohan Medical College & Hospital, Mathura|₹11,73,656
Rama Medical College Hospital & Research Centre, Kanpur|₹15,19,895
Rama Medical College Hospital & Research Centre, Hapur|₹13,09,968
Shri Ram Murti Smarak Institute of Medical Sciences, Bareilly|₹19,78,714
Subharti Medical College, Meerut|₹14,22,160
Hind Institute of Medical Sciences, Barabanki|₹14,46,692
Muzaffarnagar Medical College|₹16,72,660
Rohilkhand Medical College & Hospital, Bareilly|₹18,72,361
Hind Institute of Medical Sciences, Sitapur|₹12,92,675
Rajshree Medical Research Institute, Bareilly|₹17,66,798
Prasad Institute of Medical Sciences, Lucknow|₹11,43,972
Saraswati Medical College, Unnao|₹11,96,910
National Capital Region Institute of Medical Sciences, Meerut|₹12,19,917
Varun Arjun Medical College & Rohilkhand Hospital, Shahjahanpur|₹14,15,000
Venkateshwara Institute of Medical Sciences, Gajraula, Amroha|₹11,10,508
SKS Hospital Medical College & Research Centre, Mathura|₹12,14,683
Shri Siddh Vinayak Medical College & Hospital, Sambhal|₹11,11,433
Ajay Sangal Institute of Medical Sciences & Research, Shamli|₹14,14,159
KMC Medical College & Hospital, Maharajganj|₹14,14,159
Shri Gorakhnath Medical College Hospital & Research Centre, Gorakhpur|₹14,14,159
BS Kushwaha Institute of Medical Sciences, Kanpur|₹14,14,159
`), note: 'Poster scope: non-minority private medical colleges. Confirm the current official prescribed fee and allotted seat category.' },
  'West Bengal': { period: 'Per semester, explicitly stated in the poster', columns: ['College', 'State quota / semester', 'Management quota / semester'], rows: parse(`
Gouri Devi Institute of Medical Sciences & Hospital, Durgapur|₹2,74,000|₹10,94,000
ICARE Institute of Medical Sciences & Research, Haldia|₹2,50,000|₹9,50,000
IQ City Medical College, Burdwan|₹2,74,000|₹10,94,000
Jagannath Gupta Institute of Medical Sciences & Hospital, Kolkata|₹2,74,000|₹10,94,000
KPC Medical College, Jadavpur, Kolkata|₹2,00,000|₹8,00,000
Shri Ramkrishna Institute of Medical Sciences & Sanaka Hospitals, Durgapur|₹2,74,000|₹10,94,000
Santiniketan Medical College|₹2,50,000|₹9,50,000
JMN Medical College, Chakdaha|₹2,50,000|₹9,50,000
JIS School of Medical Science & Research, Howrah|₹2,74,000|₹10,85,000
Krishnanagar Institute of Medical Science, Nadia|₹3,75,000|₹10,00,000
Jakar Hossain Medical College & Research Institute|₹4,00,000|₹10,00,000
East West Institute of Medical Sciences & Research|₹4,00,000|₹10,00,000
Jagannath Gupta Institute of Medical Sciences & Hospital, North Kolkata|₹3,75,000|₹10,00,000
Raniganj Institute of Medical Science|₹3,75,000|₹10,00,000
PKG Medical College & Hospital, Kolkata|₹4,00,000|₹10,00,000
`) },
};
