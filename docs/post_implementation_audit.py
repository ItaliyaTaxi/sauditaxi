import re, os, sys, io
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

# 1. Load all routes from routes.ts, makkah-routes.ts, dammam-routes.ts
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
print(f"Total verified route pages in codebase: {len(all_routes)}")

# 2. Count incoming links per route by source category
incoming_links = defaultdict(lambda: {
    'total': 0,
    'city_hubs': set(),
    'airports': set(),
    'blogs': set(),
    'reverse_routes': set(),
    'related_routes': set(),
    'hubs': set(),
    'all_sources': set()
})

# A. Scan data/cities.ts
with open(os.path.join(root_dir, 'data/cities.ts'), 'r', encoding='utf-8') as f:
    cities_content = f.read()

city_blocks = re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', cities_content, re.DOTALL)
for city_slug, routes_raw in city_blocks:
    r_list = re.findall(r'["\']([^"\']+)["\']', routes_raw)
    src_url = f"/taxi-service/{city_slug}"
    for r in r_list:
        if r in all_routes:
            incoming_links[r]['total'] += 1
            incoming_links[r]['city_hubs'].add(src_url)
            incoming_links[r]['all_sources'].add(src_url)

# B. Scan data/airports.ts
with open(os.path.join(root_dir, 'data/airports.ts'), 'r', encoding='utf-8') as f:
    airports_content = f.read()

airport_blocks = re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', airports_content, re.DOTALL)
for ap_slug, routes_raw in airport_blocks:
    r_list = re.findall(r'["\']([^"\']+)["\']', routes_raw)
    src_url = f"/airport-transfer/{ap_slug}"
    for r in r_list:
        if r in all_routes:
            incoming_links[r]['total'] += 1
            incoming_links[r]['airports'].add(src_url)
            incoming_links[r]['all_sources'].add(src_url)

# C. Scan /intercity-transfers hub page
with open(os.path.join(root_dir, 'app/(main)/intercity-transfers/page.tsx'), 'r', encoding='utf-8') as f:
    intercity_content = f.read()

intercity_routes = re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', intercity_content)
for r in set(intercity_routes):
    if r in all_routes:
        src_url = "/intercity-transfers"
        incoming_links[r]['total'] += 1
        incoming_links[r]['hubs'].add(src_url)
        incoming_links[r]['all_sources'].add(src_url)

# D. Check route-to-route links (Reverse Route Callouts & Related Routes)
for slug, info in all_routes.items():
    src_url = f"/routes/{slug}"
    # Find reverse route if exists
    rev_slug = next((r for r, r_info in all_routes.items() if r != slug and r_info['from'].lower() == info['to'].lower() and r_info['to'].lower() == info['from'].lower()), None)
    if rev_slug:
        incoming_links[rev_slug]['total'] += 1
        incoming_links[rev_slug]['reverse_routes'].add(src_url)
        incoming_links[rev_slug]['all_sources'].add(src_url)

# E. Scan blog data/content
blog_dir = os.path.join(root_dir, 'data/blogs.ts')
blogs = []
if os.path.exists(blog_dir):
    with open(blog_dir, 'r', encoding='utf-8') as f:
        blog_content = f.read()
    blog_slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', blog_content)
    print(f"Found {len(blog_slugs)} blog posts in data/blogs.ts")

# 3. Output Route Authority Tiers
print("\n=== ROUTE AUTHORITY TIERS SUMMARY ===")

tier_over = [] # 10+ links
tier_strong = [] # 5-9 links
tier_moderate = [] # 3-4 links
tier_under = [] # 1-2 links
tier_orphan = [] # 0 links

for slug, info in all_routes.items():
    link_data = incoming_links[slug]
    total = len(link_data['all_sources'])
    entry = {
        'slug': slug,
        'from': info['from'],
        'to': info['to'],
        'total': total,
        'unique_sources': len(link_data['all_sources']),
        'city': len(link_data['city_hubs']),
        'airport': len(link_data['airports']),
        'blog': len(link_data['blogs']),
        'reverse': len(link_data['reverse_routes']),
        'sources': list(link_data['all_sources'])
    }
    if total >= 10:
        tier_over.append(entry)
    elif total >= 5:
        tier_strong.append(entry)
    elif total >= 3:
        tier_moderate.append(entry)
    elif total >= 1:
        tier_under.append(entry)
    else:
        tier_orphan.append(entry)

print(f"Tier Over-Linked (10+ links): {len(tier_over)}")
print(f"Tier Strong (5-9 links): {len(tier_strong)}")
print(f"Tier Moderate (3-4 links): {len(tier_moderate)}")
print(f"Tier Under-Linked (1-2 links): {len(tier_under)}")
print(f"Tier Zero Links (0 links): {len(tier_orphan)}")

