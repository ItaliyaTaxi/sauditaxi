import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Inspect data/airports.ts
with open('data/airports.ts', 'r', encoding='utf-8') as f:
    airports_ts = f.read()

# Extract airport slugs, names, cities, popularDestinations
airport_matches = list(re.finditer(r'slug:\s*["\']([^"\']+)["\']', airports_ts))

print("=== AIRPORT DATA AUDIT ===")
for i, m in enumerate(airport_matches):
    slug = m.group(1)
    start_pos = m.start()
    end_pos = airport_matches[i+1].start() if i+1 < len(airport_matches) else len(airports_ts)
    chunk = airports_ts[start_pos:end_pos]
    
    name = re.search(r'name:\s*["\']([^"\']+)["\']', chunk)
    city = re.search(r'city:\s*["\']([^"\']+)["\']', chunk)
    city_slug = re.search(r'citySlug:\s*["\']([^"\']+)["\']', chunk)
    dests = re.search(r'popularDestinations:\s*\[([^\]]*)\]', chunk)
    
    dest_list = re.findall(r'["\']([^"\']+)["\']', dests.group(1)) if dests else []
    
    print(f"\nAirport Slug: {slug}")
    print(f"  Name: {name.group(1) if name else ''}")
    print(f"  City: {city.group(1) if city else ''} (citySlug: {city_slug.group(1) if city_slug else 'None'})")
    print(f"  Popular Destinations (raw text): {dest_list}")
