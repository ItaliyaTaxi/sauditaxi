with open(r'd:\Mine Projects\sauditaxi\data\routes.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_slugs = [
    'jeddah-to-makkah',
    'dammam-to-bahrain',
    'dammam-to-riyadh',
    'doha-to-al-khobar',
    'khobar-to-riyadh',
    'riyadh-to-jubail'
]

for i, line in enumerate(lines):
    for slug in target_slugs:
        if f'slug: "{slug}"' in line:
            print(f"=== {slug} at Line {i+1} ===")
            for j in range(i, min(i+30, len(lines))):
                print(f"{j+1}: {lines[j].rstrip()}")
