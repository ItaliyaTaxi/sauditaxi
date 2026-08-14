import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read routes.ts
with open('data/routes.ts', 'r', encoding='utf-8') as f:
    routes_content = f.read()

# Extract all routes with slug, from, to, category, relatedCitySlugs
route_pattern = re.compile(
    r'slug:\s*["\']([^"\']+)["\'].*?'
    r'from:\s*["\']([^"\']+)["\'].*?'
    r'to:\s*["\']([^"\']+)["\'].*?'
    r'category:\s*["\']([^"\']+)["\']',
    re.DOTALL
)

all_routes = []
# Simple parse of route objects
for match in re.finditer(r'\{[^{}]*slug:\s*["\']([^"\']+)["\'][^{}]*\}', routes_content):
    block = match.group(0)
    slug = re.search(r'slug:\s*["\']([^"\']+)["\']', block)
    frm = re.search(r'from:\s*["\']([^"\']+)["\']', block)
    to = re.search(r'to:\s*["\']([^"\']+)["\']', block)
    cat = re.search(r'category:\s*["\']([^"\']+)["\']', block)
    cities = re.search(r'relatedCitySlugs:\s*\[([^\]]*)\]', block)
    
    if slug and frm and to:
        city_list = re.findall(r'["\']([^"\']+)["\']', cities.group(1)) if cities else []
        all_routes.append({
            'slug': slug.group(1),
            'from': frm.group(1),
            'to': to.group(1),
            'category': cat.group(1) if cat else '',
            'relatedCitySlugs': city_list
        })

priority_slugs = [
    "khobar-to-riyadh", "riyadh-to-jubail", "hail-to-riyadh", "riyadh-to-neom",
    "riyadh-to-hofuf", "hofuf-to-riyadh", "neom-to-riyadh", "riyadh-to-qassim",
    "riyadh-to-tabuk", "jubail-to-riyadh", "qassim-to-riyadh", "riyadh-to-taif",
    "riyadh-to-yanbu", "riyadh-to-khobar", "yanbu-to-riyadh", "riyadh-to-hail",
    "tabuk-to-riyadh", "riyadh-to-abha", "abha-to-riyadh", "taif-to-riyadh"
]

print(f"Parsed {len(all_routes)} routes from routes.ts")

# Current logic in page.tsx:
# r.slug !== route.slug && (r.category === route.category || r.relatedCitySlugs.some(c => route.relatedCitySlugs.includes(c)))
# slice(0, 6)

print("\n=== CURRENT RELATED ROUTES OUTPUT FOR 20 PRIORITY ROUTES ===")
for target_slug in priority_slugs:
    route = next((r for r in all_routes if r['slug'] == target_slug), None)
    if not route:
        continue
    
    related = [
        r['slug'] for r in all_routes
        if r['slug'] != route['slug'] and (
            r['category'] == route['category'] or
            any(c in route['relatedCitySlugs'] for c in r['relatedCitySlugs'])
        )
    ][:6]
    
    print(f"\nTarget: {target_slug}")
    print(f"  Category: {route['category']}, Cities: {route['relatedCitySlugs']}")
    print(f"  Current Related Routes ({len(related)}): {related}")
