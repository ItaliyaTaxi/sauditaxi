import re, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

phase1 = [
    'khobar-to-riyadh','riyadh-to-jubail','hail-to-riyadh','riyadh-to-neom',
    'riyadh-to-hofuf','hofuf-to-riyadh','neom-to-riyadh','riyadh-to-qassim',
    'riyadh-to-tabuk','jubail-to-riyadh','qassim-to-riyadh','riyadh-to-taif',
    'riyadh-to-yanbu','riyadh-to-khobar','yanbu-to-riyadh','riyadh-to-hail',
    'tabuk-to-riyadh','riyadh-to-abha','abha-to-riyadh','taif-to-riyadh'
]

with open('data/routes.ts', encoding='utf-8') as f:
    lines = f.readlines()

# For each slug, find its line and the relatedCitySlugs line
for slug in phase1:
    slug_line = None
    related_line = None
    for i, l in enumerate(lines, 1):
        if f'slug: "{slug}"' in l or f"slug: '{slug}'" in l:
            slug_line = i
            # Look ahead for relatedCitySlugs
            for j in range(i, min(i+50, len(lines))):
                if 'relatedCitySlugs' in lines[j-1]:
                    related_line = j
                    print(f'{slug}: slug_line={slug_line}, related_line={related_line}, content={lines[j-1].strip()}')
                    break
            break
    if slug_line and not related_line:
        print(f'{slug}: slug_line={slug_line}, NO relatedCitySlugs found within 50 lines')
