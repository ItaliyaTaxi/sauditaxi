import re, os, sys, io
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

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

link_graph = defaultdict(set)

# --- City Hub popularRoutes ---
with open(os.path.join(root_dir, 'data/cities.ts'), 'r', encoding='utf-8') as f:
    cities_content = f.read()
for city_slug, routes_raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', cities_content, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', routes_raw):
        if r in routes:
            link_graph[r].add(f"/taxi-service/{city_slug}")

# --- Airport popularRoutes ---
with open(os.path.join(root_dir, 'data/airports.ts'), 'r', encoding='utf-8') as f:
    airports_content = f.read()
for ap_slug, routes_raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', airports_content, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', routes_raw):
        if r in routes:
            link_graph[r].add(f"/airport-transfer/{ap_slug}")

# --- Border popularRoutes ---
with open(os.path.join(root_dir, 'data/borders.ts'), 'r', encoding='utf-8') as f:
    borders_content = f.read()
for b_slug, routes_raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', borders_content, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', routes_raw):
        if r in routes:
            link_graph[r].add(f"/border-transfers/{b_slug}")

# --- Intercity Hub ---
with open(os.path.join(root_dir, 'app/(main)/intercity-transfers/page.tsx'), 'r', encoding='utf-8') as f:
    intercity_content = f.read()
for r in set(re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', intercity_content)):
    if r in routes:
        link_graph[r].add("/intercity-transfers")

# --- Umrah Service in-body ---
with open(os.path.join(root_dir, 'data/service-content/umrah-taxi-service.ts'), 'r', encoding='utf-8') as f:
    umrah_content = f.read()
for r in set(re.findall(r"href=['\"]/routes/([a-z0-9-]+)['\"]", umrah_content)):
    if r in routes:
        link_graph[r].add("/umrah-taxi-service")

# --- City Guides in-body links (FAQs answers with href) ---
with open(os.path.join(root_dir, 'data/city-guides.ts'), 'r', encoding='utf-8') as f:
    city_guides_content = f.read()
for r in set(re.findall(r"href='/routes/([a-z0-9-]+)'", city_guides_content)):
    if r in routes:
        link_graph[r].add("/city-guides")

# --- Border Guides in-body links ---
with open(os.path.join(root_dir, 'data/border-guides.ts'), 'r', encoding='utf-8') as f:
    border_guides_content = f.read()
for r in set(re.findall(r"href='/routes/([a-z0-9-]+)'", border_guides_content)):
    if r in routes:
        link_graph[r].add("/border-guides")

# --- Reverse Route Callouts (route pages) ---
for slug, info in routes.items():
    rev_slug = next((r for r, r_info in routes.items() if r != slug and r_info['from'].lower() == info['to'].lower() and r_info['to'].lower() == info['from'].lower()), None)
    if rev_slug:
        link_graph[rev_slug].add(f"/routes/{slug}")

# --- Report Phase 3B targets ---
targets_3b = [
    "riyadh-to-jeddah",
    "riyadh-to-alula",
    "dammam-airport-to-bahrain",
    "madinah-to-alula",
]

print("=== PHASE 3B FINAL INCOMING-LINK COUNTS ===\n")
for r in targets_3b:
    srcs = sorted(link_graph[r])
    print(f"/routes/{r}")
    print(f"  Total incoming contextual links: {len(srcs)}")
    for s in srcs:
        print(f"    <- {s}")
    print()

