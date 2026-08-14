import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('data/routes.ts', 'r', encoding='utf-8') as f:
    routes_content = f.read()

# Find all slug: "..."
slug_matches = list(re.finditer(r'slug:\s*["\']([^"\']+)["\']', routes_content))

routes = []
for i in range(len(slug_matches)):
    m = slug_matches[i]
    slug = m.group(1)
    start_pos = m.start()
    end_pos = slug_matches[i+1].start() if i+1 < len(slug_matches) else len(routes_content)
    chunk = routes_content[start_pos:end_pos]
    
    frm = re.search(r'from:\s*["\']([^"\']+)["\']', chunk)
    to = re.search(r'to:\s*["\']([^"\']+)["\']', chunk)
    cat = re.search(r'category:\s*["\']([^"\']+)["\']', chunk)
    cities = re.search(r'relatedCitySlugs:\s*\[([^\]]*)\]', chunk)
    
    routes.append({
        'slug': slug,
        'from': frm.group(1) if frm else '',
        'to': to.group(1) if to else '',
        'category': cat.group(1) if cat else '',
        'relatedCitySlugs': re.findall(r'["\']([^"\']+)["\']', cities.group(1)) if cities else []
    })

priority_slugs = [
    "khobar-to-riyadh", "riyadh-to-jubail", "hail-to-riyadh", "riyadh-to-neom",
    "riyadh-to-hofuf", "hofuf-to-riyadh", "neom-to-riyadh", "riyadh-to-qassim",
    "riyadh-to-tabuk", "jubail-to-riyadh", "qassim-to-riyadh", "riyadh-to-taif",
    "riyadh-to-yanbu", "riyadh-to-khobar", "yanbu-to-riyadh", "riyadh-to-hail",
    "tabuk-to-riyadh", "riyadh-to-abha", "abha-to-riyadh", "taif-to-riyadh"
]

print(f"Parsed {len(routes)} routes")

for target_slug in priority_slugs:
    route = next((r for r in routes if r['slug'] == target_slug), None)
    if not route:
        print(f"NOT FOUND: {target_slug}")
        continue
    
    # Current filtering logic:
    related = [
        r['slug'] for r in routes
        if r['slug'] != route['slug'] and (
            r['category'] == route['category'] or
            any(c in route['relatedCitySlugs'] for c in r['relatedCitySlugs'])
        )
    ][:6]
    
    # Improved filtering logic:
    # 1. Reverse route (if exists) FIRST
    # 2. Priority routes connected to same cities
    # 3. Other category/city matching routes
    
    reverse_slug = f"{route['to'].lower().replace(' ', '-')}-to-{route['from'].lower().replace(' ', '-')}"
    # Find matching reverse route object
    rev_route = next((r for r in routes if r['from'].lower() == route['to'].lower() and r['to'].lower() == route['from'].lower()), None)
    rev_slug_actual = rev_route['slug'] if rev_route else None
    
    improved_list = []
    if rev_slug_actual:
        improved_list.append(rev_slug_actual)
        
    for r in routes:
        if r['slug'] != route['slug'] and r['slug'] != rev_slug_actual:
            # Check if r connects any of the cities in route['relatedCitySlugs']
            if any(c in route['relatedCitySlugs'] for c in r['relatedCitySlugs']):
                improved_list.append(r['slug'])
                if len(improved_list) >= 5:
                    break
                    
    print(f"\nTarget: {target_slug}")
    print(f"  Reverse Route: {rev_slug_actual}")
    print(f"  Current Related: {related[:4]}")
    print(f"  Improved Related: {improved_list}")
