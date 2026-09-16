"""Read supplied references without modifying the original PDF/XLSX files.

Requires pypdf and openpyxl for read-only extraction. Imported numbers remain
unverified reference values and are deliberately not calculator/predictor inputs.
"""
from pathlib import Path
from collections import Counter
import json
import re
import shutil
from pypdf import PdfReader
import openpyxl

root = Path(__file__).resolve().parents[1]
source = root.parent / 'info addition'
assets = root / 'public' / 'resources'
assets.mkdir(parents=True, exist_ok=True)

def slug(value):
    return re.sub(r'[^a-z0-9]+', '-', value.lower()).strip('-')

files = {}
for file in sorted(source.iterdir()):
    if file.is_file():
        name = slug(file.stem) + file.suffix.lower()
        shutil.copy2(file, assets / name)
        files[file.name] = '/resources/' + name

workbook_file = next(source.glob('*.xlsx'))
book = openpyxl.load_workbook(workbook_file, read_only=True, data_only=True)
medical = []
for sheet_index, management in [(0, 'Deemed'), (1, 'Private')]:
    sheet = book.worksheets[sheet_index]
    for row_number, row in enumerate(sheet.iter_rows(values_only=True), start=1):
        if not isinstance(row[0], int):
            continue
        if sheet_index == 0:
            serial, name, state_raw, established, seats, fee = row
            university = None
        else:
            serial, name, university, state_raw, established, seats, fee = row
        state = state_raw.split(' (')[0].strip()
        actual_management = 'Deemed' if 'deemed' in name.lower() else management
        medical.append({
            'id': f'{slug(sheet.title)}-{serial}', 'name': name,
            'state': state, 'location': state_raw, 'management': actual_management,
            'university': university, 'established': established,
            'reportedSeats': seats, 'reportedFee': fee,
            'feePeriod': 'unconfirmed', 'feeLabelInSource': 'MBBS Fees (Total Course)' if sheet_index == 0 else 'Fees 2026 (Total Course)',
            'source': {'file': workbook_file.name, 'sheet': sheet.title, 'row': row_number, 'url': files[workbook_file.name]},
            'referenceYear': 2026, 'verified': False,
        })

engineering = []
for file in sorted(source.glob('private_engineering*.pdf')):
    scope = next((s for s in ['Karnataka', 'Maharashtra', 'Tamil Nadu'] if slug(s).replace('-', '') in file.stem.replace('_', '')), 'India')
    for page_number, page in enumerate(PdfReader(file).pages, start=1):
        pieces = []
        def visit(text, cm, tm, font, size):
            text = ' '.join(text.split())
            if text and abs(tm[4] - 56.4) < 2 and text != 'COLLEGE NAME':
                pieces.append((tm[5], 'name', text))
            elif text and abs(tm[4] - 420.9) < 2 and text != 'LOCATION':
                pieces.append((tm[5], 'location', text))
            elif text and abs(tm[4] - 582.1) < 2 and text != 'AFFILIATION / STATUS':
                pieces.append((tm[5], 'status', text))
        page.extract_text(visitor_text=visit)
        # Each PDF draws cells in row order: name, location, affiliation.
        # Read that order instead of shared baselines: wrapped locations have
        # different baselines and must not spill into the preceding institution.
        current = {}
        page_rows = []
        for y, col, text in pieces:
            if col == 'name' and current.get('status'):
                page_rows.append(current)
                current = {}
            current[col] = (current.get(col, '') + ' ' + text).strip()
        if current:
            page_rows.append(current)
        for record in page_rows:
            assert all(record.get(field) for field in ['name', 'location', 'status']), (file.name, page_number, record)
            engineering.append({**record, 'scope': scope, 'source': {'file': file.name, 'page': page_number, 'url': files[file.name]}})

# Merge national/state overlaps by institution and locality; retain each source.
merged = []
for record in engineering:
    key_name = record['name'].lower()
    if key_name == 'vellore institute of technology (vit)' and 'vellore' in record['location'].lower():
        key_name = 'vellore institute of technology (vit vellore)'
    key_name = key_name.replace('and', '&').replace('engg.', 'engineering')
    key_name = re.sub(r'\(([^)]*)\)', lambda m: m.group(0) if any(word in m.group(1) for word in ['campus', 'chennai', 'vellore']) else '', key_name)
    key_name = re.sub(r'[^a-z0-9]', '', key_name)
    found = next((r for r in merged if r['_key'] == key_name), None)
    if found:
        found['sources'].append(record['source'])
        if record['scope'] != 'India':
            found['scope'] = record['scope']
            found['location'] = record['location']
        continue
    merged.append({**record, '_key': key_name, 'sources': [record['source']]})
for record in merged:
    del record['_key']
    del record['source']

counts = dict(Counter(r['state'] for r in medical))
output = {'files': files, 'medical': medical, 'engineering': merged,
          'audit': {'medicalSourceRows': len(medical), 'engineeringSourceRows': len(engineering), 'engineeringRecords': len(merged), 'medicalRecordsByState': counts,
                    'feePolicy': 'Original fee values retained; period and quota unconfirmed. Not used in calculations.',
                    'seatPolicy': 'Individual supplied seat values are references; conflicting state summary totals are not published.'}}
(root / 'src' / 'data' / 'addition-references.json').write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(output['audit'], indent=2))
