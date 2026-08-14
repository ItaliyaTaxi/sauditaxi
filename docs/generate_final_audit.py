import re, os, sys, io
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

# 1. Load routes
def load_routes():
    route_files = ['data/routes.ts', 'data/makkah-routes.ts', 'data/dammam-routes.ts']
    routes = {}
    for rf in route_files:
        path = os.path.join(root_dir, rf)
        if not os.path.exists(path): continue
        with open(path, 'r', encoding='utf-8') as f: content = f.read()
        matches = list(re.finditer(r'slug:\s*["\']([^"\']+)["\']', content))
        for i, m in enumerate(matches):
            slug = m.group(1)
            start_pos = m.start()
            end_pos = matches[i+1].start() if i+1 < len(matches) else len(content)
            chunk = content[start_pos:end_pos]
            frm = re.search(r'from:\s*["\']([^"\']+)["\']', chunk)
            to = re.search(r'to:\s*["\']([^"\']+)["\']', chunk)
            cat = re.search(r'category:\s*["\']([^"\']+)["\']', chunk)
            dist = re.search(r'distance:\s*["\']([^"\']+)["\']', chunk)
            routes[slug] = {
                'slug': slug,
                'from': frm.group(1) if frm else '',
                'to': to.group(1) if to else '',
                'category': cat.group(1) if cat else '',
                'distance': dist.group(1) if dist else ''
            }
    return routes

routes = load_routes()

# Trace incoming links
link_graph = defaultdict(lambda: {
    'city_hubs': set(),
    'airports': set(),
    'hubs': set(),
    'reverse_routes': set(),
    'all_sources': set()
})

# City Hubs
with open(os.path.join(root_dir, 'data/cities.ts'), 'r', encoding='utf-8') as f:
    cities_content = f.read()
for city_slug, routes_raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', cities_content, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', routes_raw):
        if r in routes:
            src = f"/taxi-service/{city_slug}"
            link_graph[r]['city_hubs'].add(src)
            link_graph[r]['all_sources'].add(src)

# Airports
with open(os.path.join(root_dir, 'data/airports.ts'), 'r', encoding='utf-8') as f:
    airports_content = f.read()
for ap_slug, routes_raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', airports_content, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', routes_raw):
        if r in routes:
            src = f"/airport-transfer/{ap_slug}"
            link_graph[r]['airports'].add(src)
            link_graph[r]['all_sources'].add(src)

# Intercity Hub
with open(os.path.join(root_dir, 'app/(main)/intercity-transfers/page.tsx'), 'r', encoding='utf-8') as f:
    intercity_content = f.read()
for r in set(re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', intercity_content)):
    if r in routes:
        src = "/intercity-transfers"
        link_graph[r]['hubs'].add(src)
        link_graph[r]['all_sources'].add(src)

# Reverse Routes
for slug, info in routes.items():
    rev_slug = next((r for r, r_info in routes.items() if r != slug and r_info['from'].lower() == info['to'].lower() and r_info['to'].lower() == info['from'].lower()), None)
    if rev_slug:
        src = f"/routes/{slug}"
        link_graph[rev_slug]['reverse_routes'].add(src)
        link_graph[rev_slug]['all_sources'].add(src)

print("=== DETAILED ROUTE DISTRIBUTION AUDIT ===")

stats = defaultdict(list)
for slug, info in routes.items():
    sources = link_graph[slug]['all_sources']
    total = len(sources)
    stats[total].append(slug)

for count in sorted(stats.keys(), reverse=True):
    print(f"\nIncoming Links Count = {count}: ({len(stats[count])} routes)")
    for s in stats[count][:10]:
        data = link_graph[s]
        print(f"  /routes/{s} | Cities: {len(data['city_hubs'])}, Airports: {len(data['airports'])}, Hubs: {len(data['hubs'])}, Reverse: {len(data['reverse_routes'])}")

