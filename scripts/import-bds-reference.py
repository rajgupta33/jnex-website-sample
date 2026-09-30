"""Extract the supplied BDS PDF, preserving its names and state boundaries.

Requires PyMuPDF. Run from frontend; pass --check to validate without writing.
The PDF is a supplied reference, not a current recognition/seat register.
"""
import json
from pathlib import Path
import re
import sys
import pymupdf

root = Path(__file__).resolve().parents[1]
with pymupdf.open(root / 'public/resources/private-bds-colleges-india.pdf') as document:
    lines = '\n'.join(page.get_text() for page in document).splitlines()
groups, group, entry = [], None, None
for line in map(str.strip, lines):
    heading = re.match(r'^(.+?)\s+.\s+(\d+) colleges$', line)
    if heading:
        group = {'state': heading[1], 'expectedCount': int(heading[2]), 'colleges': []}
        groups.append(group)
        entry = None
    elif group and line.startswith('Important:'):
        break
    elif not group or line in ('No.', 'College Name', ''):
        continue
    elif line.isdigit():
        assert int(line) == len(group['colleges']) + 1, (group['state'], line)
        group['colleges'].append('')
        entry = len(group['colleges']) - 1
    elif entry is not None:
        group['colleges'][entry] += (' ' if group['colleges'][entry] else '') + line
for group in groups:
    assert len(group['colleges']) == group['expectedCount'], group['state']
    assert all(group['colleges'])
    assert len(set(group['colleges'])) == len(group['colleges']), group['state']
assert len(groups) == 22
assert sum(len(group['colleges']) for group in groups) == 266
target = root / 'src/data/bds-colleges.json'
if '--check' in sys.argv:
    assert json.loads(target.read_text(encoding='utf-8')) == groups, 'BDS data differs from supplied PDF'
else:
    target.write_text(json.dumps(groups, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print('Verified all 266 BDS entries and 22 state/UT groups against the supplied PDF.')
