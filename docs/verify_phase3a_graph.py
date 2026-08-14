import re, os, sys, io
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

# Load all routes
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
            routes[slug] = {'slug': slug, 'from': frm.group(1) if frm else '', 'to': to.group(1) if to else ''}
    return routes

routes = load_routes()

link_graph = defaultdict(lambda: {
    'city_hubs': set(),
    'airports': set(),
    'hubs': set(),
    'borders': set(),
    'services': set(),
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

# Borders
with open(os.path.join(root_dir, 'data/borders.ts'), 'r', encoding='utf-8') as f:
    borders_content = f.read()
for b_slug, routes_raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', borders_content, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', routes_raw):
        if r in routes:
            src = f"/border-transfers/{b_slug}"
            link_graph[r]['borders'].add(src)
            link_graph[r]['all_sources'].add(src)

# Intercity Hub
with open(os.path.join(root_dir, 'app/(main)/intercity-transfers/page.tsx'), 'r', encoding='utf-8') as f:
    intercity_content = f.read()
for r in set(re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', intercity_content)):
    if r in routes:
        src = "/intercity-transfers"
        link_graph[r]['hubs'].add(src)
        link_graph[r]['all_sources'].add(src)

# Umrah Service Page in-body links
with open(os.path.join(root_dir, 'data/service-content/umrah-taxi-service.ts'), 'r', encoding='utf-8') as f:
    umrah_content = f.read()
for r in set(re.findall(r"href=['\"]/routes/([a-z0-9-]+)['\"]", umrah_content)):
    if r in routes:
        src = "/umrah-taxi-service"
        link_graph[r]['services'].add(src)
        link_graph[r]['all_sources'].add(src)

# Reverse Routes
for slug, info in routes.items():
    rev_slug = next((r for r, r_info in routes.items() if r != slug and r_info['from'].lower() == info['to'].lower() and r_info['to'].lower() == info['from'].lower()), None)
    if rev_slug:
        src = f"/routes/{slug}"
        link_graph[rev_slug]['reverse_routes'].add(src)
        link_graph[rev_slug]['all_sources'].add(src)

print("=== PHASE 3A TARGET ROUTES BEFORE/AFTER ANALYSIS ===")

p3a_targets = [
    "riyadh-to-jeddah", "riyadh-to-makkah", "riyadh-to-madinah", "riyadh-to-alula",
    "riyadh-to-dammam", "riyadh-to-qatar-border", "khobar-to-bahrain", "dammam-to-bahrain",
    "dammam-to-riyadh", "alula-to-tabuk", "alula-to-neom", "tabuk-to-alula",
    "jeddah-to-makkah", "makkah-to-madinah", "dammam-airport-to-bahrain"
]

for r in p3a_targets:
    sources = link_graph[r]['all_sources']
    total = len(sources)
    print(f"Target: /routes/{r} | Total Sources: {total} | Breakdown: {list(sources)}")

