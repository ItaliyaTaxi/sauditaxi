import re
import csv
import json
import os

routes_file = r'd:\Mine Projects\sauditaxi\data\routes.ts'
with open(routes_file, 'r', encoding='utf-8') as f:
    content = f.read()

def extract_routes_from_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()
    results = []
    # Find all slug blocks
    slug_matches = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", c)
    from_matches = re.findall(r"from:\s*['\"]([^'\"]+)['\"]", c)
    to_matches = re.findall(r"to:\s*['\"]([^'\"]+)['\"]", c)
    for s in slug_matches:
        results.append({'slug': s, 'name': s.replace('-', ' ').title(), 'url': f'https://saudiprivatetransfers.com/routes/{s}'})
    return results

routes_data = []
for file in [r'd:\Mine Projects\sauditaxi\data\routes.ts', r'd:\Mine Projects\sauditaxi\data\makkah-routes.ts', r'd:\Mine Projects\sauditaxi\data\dammam-routes.ts']:
    if os.path.exists(file):
        routes_data.extend(extract_routes_from_file(file))

# Also parse city pages and airport pages from data files
cities_file = r'd:\Mine Projects\sauditaxi\data\cities.ts'
with open(cities_file, 'r', encoding='utf-8') as f:
    c_content = f.read()
city_slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", c_content)

airports_file = r'd:\Mine Projects\sauditaxi\data\airports.ts'
with open(airports_file, 'r', encoding='utf-8') as f:
    a_content = f.read()
airport_slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", a_content)

# Load GSC pages
gsc_pages = {}
with open(r'd:\Mine Projects\sauditaxi\docs\search_data\Pages.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for r in reader:
        url = r['Top pages'].strip()
        gsc_pages[url] = {
            'clicks': int(r['Clicks']),
            'impressions': int(r['Impressions']),
            'ctr': float(r['CTR'].replace('%','')) if '%' in r['CTR'] else float(r['CTR']),
            'position': float(r['Position'])
        }

# Load full inventory output
with open(r'd:\Mine Projects\sauditaxi\docs\full_inventory_output.json', 'r', encoding='utf-8') as f:
    full_inv = json.load(f)

excel_urls = {item['url']: item['internal_links'] for item in full_inv['excel_inventory']}

print(f"Total Routes in routes.ts: {len(routes_data)}")
print(f"Total Cities in cities.ts: {len(city_slugs)}")
print(f"Total Airports in airports.ts: {len(airport_slugs)}")

# Analyze route coverage
routes_in_excel = []
routes_not_in_excel = []
for r in routes_data:
    url = r['url']
    links = excel_urls.get(url, 0)
    gsc = gsc_pages.get(url, {'clicks': 0, 'impressions': 0, 'ctr': 0.0, 'position': 0.0})
    item = {
        'slug': r['slug'],
        'name': r['name'],
        'url': url,
        'internal_links': links,
        'clicks': gsc['clicks'],
        'impressions': gsc['impressions'],
        'ctr': gsc['ctr'],
        'position': gsc['position']
    }
    if url in excel_urls:
        routes_in_excel.append(item)
    else:
        routes_not_in_excel.append(item)

print(f"Routes in Excel top target list: {len(routes_in_excel)}")
print(f"Routes NOT in Excel top target list (0 or < minimal links): {len(routes_not_in_excel)}")

print("\n--- Top 15 Routes NOT in Excel List (by GSC impressions if any) ---")
routes_not_in_excel.sort(key=lambda x: x['impressions'], reverse=True)
for r in routes_not_in_excel[:20]:
    print(f"{r['slug']} | Impr: {r['impressions']} | Clicks: {r['clicks']} | Pos: {r['position']} | Links in Excel: {r['internal_links']}")

with open(r'd:\Mine Projects\sauditaxi\docs\codebase_route_analysis.json', 'w', encoding='utf-8') as f:
    json.dump({'routes_in_excel': routes_in_excel, 'routes_not_in_excel': routes_not_in_excel}, f, indent=2)
