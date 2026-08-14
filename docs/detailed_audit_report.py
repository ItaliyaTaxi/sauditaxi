import re, os, sys, io
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

# 1. Load all routes from data/routes.ts, makkah-routes.ts, dammam-routes.ts
def load_all_routes():
    route_files = ['data/routes.ts', 'data/makkah-routes.ts', 'data/dammam-routes.ts']
    all_routes = {}
    for rf in route_files:
        path = os.path.join(root_dir, rf)
        if not os.path.exists(path):
            continue
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
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
            all_routes[slug] = {
                'slug': slug,
                'from': frm.group(1) if frm else '',
                'to': to.group(1) if to else '',
                'category': cat.group(1) if cat else '',
                'distance': dist.group(1) if dist else '',
                'file': rf
            }
    return all_routes

all_routes = load_all_routes()

# Trace all sources
incoming_links = defaultdict(lambda: {
    'city_hubs': set(),
    'airports': set(),
    'blogs': set(),
    'reverse_routes': set(),
    'hubs': set(),
    'all_sources': set()
})

# City Hubs
with open(os.path.join(root_dir, 'data/cities.ts'), 'r', encoding='utf-8') as f:
    cities_content = f.read()
city_blocks = re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', cities_content, re.DOTALL)
for city_slug, routes_raw in city_blocks:
    r_list = re.findall(r'["\']([^"\']+)["\']', routes_raw)
    src_url = f"/taxi-service/{city_slug}"
    for r in r_list:
        if r in all_routes:
            incoming_links[r]['city_hubs'].add(src_url)
            incoming_links[r]['all_sources'].add(src_url)

# Airports
with open(os.path.join(root_dir, 'data/airports.ts'), 'r', encoding='utf-8') as f:
    airports_content = f.read()
airport_blocks = re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', airports_content, re.DOTALL)
for ap_slug, routes_raw in airport_blocks:
    r_list = re.findall(r'["\']([^"\']+)["\']', routes_raw)
    src_url = f"/airport-transfer/{ap_slug}"
    for r in r_list:
        if r in all_routes:
            incoming_links[r]['airports'].add(src_url)
            incoming_links[r]['all_sources'].add(src_url)

# Intercity Hub
with open(os.path.join(root_dir, 'app/(main)/intercity-transfers/page.tsx'), 'r', encoding='utf-8') as f:
    intercity_content = f.read()
intercity_routes = re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', intercity_content)
for r in set(intercity_routes):
    if r in all_routes:
        src_url = "/intercity-transfers"
        incoming_links[r]['hubs'].add(src_url)
        incoming_links[r]['all_sources'].add(src_url)

# Reverse Route Callouts
for slug, info in all_routes.items():
    src_url = f"/routes/{slug}"
    rev_slug = next((r for r, r_info in all_routes.items() if r != slug and r_info['from'].lower() == info['to'].lower() and r_info['to'].lower() == info['from'].lower()), None)
    if rev_slug:
        incoming_links[rev_slug]['reverse_routes'].add(src_url)
        incoming_links[rev_slug]['all_sources'].add(src_url)

# Blog Audit
blog_dir = os.path.join(root_dir, 'data/posts.ts')
if not os.path.exists(blog_dir):
    blog_dir = os.path.join(root_dir, 'data/blog-posts.ts')
if not os.path.exists(blog_dir):
    # Find any blog data files
    for root, _, files in os.walk(os.path.join(root_dir, 'data')):
        for file in files:
            if 'blog' in file.lower() or 'post' in file.lower() or 'guide' in file.lower():
                print("Blog data file:", os.path.join(root, file))

print("\n=== TOP COMMERCIAL ROUTES LINK DISTRIBUTION ===")
priority_20 = [
    "khobar-to-riyadh", "riyadh-to-jubail", "hail-to-riyadh", "riyadh-to-neom",
    "riyadh-to-hofuf", "hofuf-to-riyadh", "neom-to-riyadh", "riyadh-to-qassim",
    "riyadh-to-tabuk", "jubail-to-riyadh", "qassim-to-riyadh", "riyadh-to-taif",
    "riyadh-to-yanbu", "riyadh-to-khobar", "yanbu-to-riyadh", "riyadh-to-hail",
    "tabuk-to-riyadh", "riyadh-to-abha", "abha-to-riyadh", "taif-to-riyadh"
]

for slug in priority_20:
    data = incoming_links[slug]
    print(f"{slug}: Total Sources={len(data['all_sources'])} | City={len(data['city_hubs'])} | Airport={len(data['airports'])} | Hub={len(data['hubs'])} | Reverse={len(data['reverse_routes'])}")

