import json
import csv
import re
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Load full inventory output
with open(r'd:\Mine Projects\sauditaxi\docs\full_inventory_output.json', 'r', encoding='utf-8') as f:
    inv = json.load(f)

excel_inv = inv['excel_inventory'] # 106 URLs
gsc_only = inv['gsc_only_urls'] # 348 URLs

# Map URL to metrics
url_map = {}
for x in excel_inv:
    url_map[x['url']] = x
for x in gsc_only:
    if x['url'] not in url_map:
        url_map[x['url']] = x

# Read routes from files
def extract_routes(filepath):
    if not os.path.exists(filepath): return []
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()
    slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", c)
    froms = re.findall(r"from:\s*['\"]([^'\"]+)['\"]", c)
    tos = re.findall(r"to:\s*['\"]([^'\"]+)['\"]", c)
    res = []
    for s in slugs:
        res.append(s)
    return list(set(res))

all_route_slugs = []
all_route_slugs.extend(extract_routes(r'd:\Mine Projects\sauditaxi\data\routes.ts'))
all_route_slugs.extend(extract_routes(r'd:\Mine Projects\sauditaxi\data\makkah-routes.ts'))
all_route_slugs.extend(extract_routes(r'd:\Mine Projects\sauditaxi\data\dammam-routes.ts'))
all_route_slugs = sorted(list(set(all_route_slugs)))

print(f"Total Route Slugs in Codebase: {len(all_route_slugs)}")

# Find reverse routes map
route_reverse_map = {}
for r in all_route_slugs:
    parts = r.split('-to-')
    if len(parts) == 2:
        rev_slug = f"{parts[1]}-to-{parts[0]}"
        if rev_slug in all_route_slugs:
            route_reverse_map[r] = rev_slug

print(f"Total Routes with Reverse Route Pairs: {len(route_reverse_map)}")

# Identify top under-linked commercial route pages in Excel/GSC
under_linked_routes = []
for s in all_route_slugs:
    url = f"https://saudiprivatetransfers.com/routes/{s}"
    data = url_map.get(url, {'internal_links': 0, 'clicks': 0, 'impressions': 0, 'ctr': 0.0, 'position': 0.0})
    under_linked_routes.append({
        'slug': s,
        'url': url,
        'links': data['internal_links'],
        'clicks': data['clicks'],
        'impressions': data['impressions'],
        'ctr': data['ctr'],
        'position': data['position'],
        'has_reverse': s in route_reverse_map,
        'reverse_slug': route_reverse_map.get(s, None)
    })

under_linked_routes.sort(key=lambda x: (x['impressions'], x['clicks']), reverse=True)

print("\n--- Top 30 Existing Commercial Routes by Impressions ---")
for r in under_linked_routes[:30]:
    print(f"URL: {r['url']} | Links: {r['links']} | Impr: {r['impressions']} | Clicks: {r['clicks']} | Pos: {r['position']} | Rev: {r['reverse_slug']}")

# Save output
with open(r'd:\Mine Projects\sauditaxi\docs\verified_link_matrix_data.json', 'w', encoding='utf-8') as f:
    json.dump({'top_30_routes': under_linked_routes[:30], 'all_routes_count': len(all_route_slugs)}, f, indent=2)

print("\nMatrix data saved.")
