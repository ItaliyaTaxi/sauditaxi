import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read data/routes.ts to get all valid route slugs and from/to cities
with open('data/routes.ts', 'r', encoding='utf-8') as f:
    routes_ts = f.read()

# Extract all valid route slugs and from/to
route_matches = list(re.finditer(r'slug:\s*["\']([^"\']+)["\']', routes_ts))
routes = {}
for i, m in enumerate(route_matches):
    slug = m.group(1)
    start_pos = m.start()
    end_pos = route_matches[i+1].start() if i+1 < len(route_matches) else len(routes_ts)
    chunk = routes_ts[start_pos:end_pos]
    frm = re.search(r'from:\s*["\']([^"\']+)["\']', chunk)
    to = re.search(r'to:\s*["\']([^"\']+)["\']', chunk)
    if frm and to:
        routes[slug] = {'from': frm.group(1), 'to': to.group(1)}

print(f"Total valid routes in routes.ts: {len(routes)}")

# Priority Phase 1 routes:
priority_routes = [
    "khobar-to-riyadh", "riyadh-to-jubail", "hail-to-riyadh", "riyadh-to-neom",
    "riyadh-to-hofuf", "hofuf-to-riyadh", "neom-to-riyadh", "riyadh-to-qassim",
    "riyadh-to-tabuk", "jubail-to-riyadh", "qassim-to-riyadh", "riyadh-to-taif",
    "riyadh-to-yanbu", "riyadh-to-khobar", "yanbu-to-riyadh", "riyadh-to-hail",
    "tabuk-to-riyadh", "riyadh-to-abha", "abha-to-riyadh", "taif-to-riyadh"
]

# Read data/airports.ts
with open('data/airports.ts', 'r', encoding='utf-8') as f:
    airports_ts = f.read()

airport_slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', airports_ts)

print("\n=== MATCHING AIRPORT PAGES TO VERIFIED EXISTING ROUTE SLUGS ===")

# For each airport, find routes starting from airport city (or connected to airport city)
airport_city_map = {
    'riyadh-airport': 'Riyadh',
    'jeddah-airport': 'Jeddah',
    'madinah-airport': 'Madinah',
    'dammam-airport': 'Dammam',
    'taif-airport': 'Taif',
    'abha-airport': 'Abha',
    'tabuk-airport': 'Tabuk',
    'yanbu-airport': 'Yanbu',
    'alula-airport': 'AlUla',
    'jazan-airport': 'Jazan',
    'hail-airport': 'Hail',
}

for ap_slug, ap_city in airport_city_map.items():
    print(f"\nAirport: {ap_slug} ({ap_city})")
    matching_routes = [slug for slug, info in routes.items() if info['from'].lower() == ap_city.lower()]
    priority_matching = [slug for slug in matching_routes if slug in priority_routes]
    other_matching = [slug for slug in matching_routes if slug not in priority_routes]
    
    print(f"  Priority Phase 1 Routes ({len(priority_matching)}): {priority_matching}")
    print(f"  Other Commercial Routes ({len(other_matching)}): {other_matching[:6]}")
