import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Airport -> Route mapping proposal
airport_routes_map = {
    'riyadh-airport': [
        'riyadh-to-khobar', 'riyadh-to-jubail', 'riyadh-to-hofuf',
        'riyadh-to-qassim', 'riyadh-to-hail', 'riyadh-to-taif',
        'riyadh-to-abha', 'riyadh-to-tabuk', 'riyadh-to-yanbu', 'riyadh-to-neom'
    ],
    'jeddah-airport': [
        'jeddah-to-makkah', 'jeddah-to-madinah', 'jeddah-to-taif',
        'jeddah-to-yanbu', 'jeddah-to-kaec'
    ],
    'dammam-airport': [
        'dammam-to-riyadh', 'khobar-to-riyadh', 'jubail-to-riyadh', 'dammam-to-bahrain'
    ],
    'madinah-airport': [
        'madinah-to-makkah', 'madinah-to-alula', 'madinah-to-jeddah', 'madinah-to-riyadh'
    ],
    'taif-airport': [
        'taif-to-riyadh', 'taif-to-makkah', 'taif-to-jeddah'
    ],
    'abha-airport': [
        'abha-to-riyadh'
    ],
    'tabuk-airport': [
        'tabuk-to-riyadh', 'tabuk-to-alula'
    ],
    'yanbu-airport': [
        'yanbu-to-riyadh', 'yanbu-to-jeddah'
    ],
    'hail-airport': [
        'hail-to-riyadh'
    ],
    'alula-airport': [
        'alula-to-tabuk', 'alula-to-neom'
    ]
}

# Verify all target route slugs exist
with open('data/routes.ts', 'r', encoding='utf-8') as f:
    routes_ts = f.read()

all_slugs = set(re.findall(r'slug:\s*["\']([^"\']+)["\']', routes_ts))

print("=== AIRPORT TO ROUTE MAPPING VALIDATION ===")
all_target_routes = set()
for ap, r_list in airport_routes_map.items():
    print(f"\n{ap}: ({len(r_list)} target routes)")
    for r in r_list:
        exists = r in all_slugs
        all_target_routes.add(r)
        print(f"  -> /routes/{r} : {'EXISTS' if exists else 'INVALID/MISSING'}")

print(f"\nTotal unique route pages receiving new airport links: {len(all_target_routes)}")
