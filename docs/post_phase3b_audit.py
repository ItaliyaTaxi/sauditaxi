import re, os, sys, io
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
root_dir = r"d:\Mine Projects\sauditaxi"

# ── Load all routes ──────────────────────────────────────────────────────────
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
            to   = re.search(r'to:\s*["\']([^"\']+)["\']', chunk)
            routes[slug] = {
                'slug': slug,
                'from': frm.group(1) if frm else '',
                'to':   to.group(1)  if to  else ''
            }
    return routes

routes = load_routes()

# ── Link graph with source-type tagging ──────────────────────────────────────
# Each entry is a dict of source_type -> set of source URLs
link_graph = defaultdict(lambda: defaultdict(set))

def read(rel): 
    p = os.path.join(root_dir, rel)
    return open(p,'r',encoding='utf-8').read() if os.path.exists(p) else ''

def add(route_slug, source_url, source_type):
    if route_slug in routes:
        link_graph[route_slug][source_type].add(source_url)

# 1. City Hub popularRoutes
cities_ts = read('data/cities.ts')
for city_slug, raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', cities_ts, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', raw):
        add(r, f'/taxi-service/{city_slug}', 'city_hub')

# 2. Airport popularRoutes
airports_ts = read('data/airports.ts')
for ap_slug, raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', airports_ts, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', raw):
        add(r, f'/airport-transfer/{ap_slug}', 'airport_page')

# 3. Border popularRoutes
borders_ts = read('data/borders.ts')
for b_slug, raw in re.findall(r'slug:\s*["\']([^"\']+)["\'].*?popularRoutes:\s*\[([^\]]*)\]', borders_ts, re.DOTALL):
    for r in re.findall(r'["\']([^"\']+)["\']', raw):
        add(r, f'/border-transfers/{b_slug}', 'border_page')

# 4. Intercity Hub (only slugs)
intercity = read('app/(main)/intercity-transfers/page.tsx')
for r in set(re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', intercity)):
    add(r, '/intercity-transfers', 'intercity_hub')

# 5. Reverse Route Callouts (route pages link to their reverse)
for slug, info in routes.items():
    rev = next((r for r,d in routes.items() if r!=slug and d['from'].lower()==info['to'].lower() and d['to'].lower()==info['from'].lower()), None)
    if rev:
        add(rev, f'/routes/{slug}', 'reverse_callout')

# 6. Related Route Grid (RouteGrid on each route page — uses relatedRoutes algo, approximated by reverse + same-city slugs)
# The route page's RouteGrid always shows up to 6 routes. We approximate that the reverse is already counted above.
# For a deeper approximation, let's scan the route page template for any static only= arrays.
route_page = read('app/(main)/routes/[slug]/page.tsx')
for r in set(re.findall(r'["\']([a-z0-9-]+-to-[a-z0-9-]+)["\']', route_page)):
    add(r, '/routes/[slug] (RouteGrid)', 'related_route_grid')

# 7. Umrah Service page in-body
umrah_content = read('data/service-content/umrah-taxi-service.ts')
for r in set(re.findall(r"href=['\"]\/routes\/([a-z0-9-]+)['\"]", umrah_content)):
    add(r, '/umrah-taxi-service', 'service_page')

# 8. City Guides in-body links
city_guides = read('data/city-guides.ts')
for r in set(re.findall(r"href='/routes/([a-z0-9-]+)'", city_guides)):
    add(r, '/taxi-service/[city] (city guide FAQ)', 'city_guide')

# 9. Airport Guides in-body links
airport_guides = read('data/airport-guides.ts')
for r in set(re.findall(r"href='/routes/([a-z0-9-]+)'", airport_guides)):
    add(r, '/airport-transfer/[airport] (airport guide FAQ)', 'airport_guide')

# 10. Border Guides in-body links
border_guides = read('data/border-guides.ts')
for r in set(re.findall(r"href='/routes/([a-z0-9-]+)'", border_guides)):
    add(r, '/border-transfers/[border] (border guide FAQ)', 'border_guide')

# ── Totals ──────────────────────────────────────────────────────────────────
def total_sources(slug):
    return sum(len(v) for v in link_graph[slug].values())

def all_sources(slug):
    s = []
    for t, urls in link_graph[slug].items():
        for u in urls:
            s.append((t, u))
    return sorted(s)

slugs_sorted = sorted(routes.keys())

# ── Audit 1 — Grouped by link count ─────────────────────────────────────────
groups = {'0':[], '1-2':[], '3-4':[], '5-8':[], '9+': []}
for slug in slugs_sorted:
    n = total_sources(slug)
    if   n == 0:     groups['0'].append((slug, n))
    elif n <= 2:     groups['1-2'].append((slug, n))
    elif n <= 4:     groups['3-4'].append((slug, n))
    elif n <= 8:     groups['5-8'].append((slug, n))
    else:            groups['9+'].append((slug, n))

print("=" * 70)
print("AUDIT 1 — ROUTE INCOMING CONTEXTUAL LINKS (GROUPED)")
print("=" * 70)
for g, items in groups.items():
    print(f"\n[{g} links] — {len(items)} routes")
    for slug, n in sorted(items, key=lambda x: x[1]):
        srcs = ", ".join(f"{t}" for t,_ in all_sources(slug))
        print(f"  /routes/{slug} ({n}) | {srcs}")

# ── Audit 2 — Priority Phase 3B Routes ──────────────────────────────────────
print("\n" + "=" * 70)
print("AUDIT 2 — PRIORITY PHASE 3B ROUTES — DETAILED BREAKDOWN")
print("=" * 70)
for slug in ["riyadh-to-jeddah","riyadh-to-alula","dammam-airport-to-bahrain","madinah-to-alula"]:
    print(f"\n/routes/{slug}  (total: {total_sources(slug)})")
    for t, u in all_sources(slug):
        print(f"  [{t}] <- {u}")

# ── Audit 3 — Saturation ─────────────────────────────────────────────────────
print("\n" + "=" * 70)
print("AUDIT 3 — HIGH CONTEXTUAL LINK COUNT (possible over-linking)")
print("=" * 70)
high = [(slug, total_sources(slug)) for slug in slugs_sorted if total_sources(slug) >= 8]
for slug, n in sorted(high, key=lambda x: -x[1]):
    print(f"  /routes/{slug} ({n} sources)")
    for t, u in all_sources(slug):
        print(f"    [{t}] <- {u}")

# ── Audit 4 — Orphan / Near-Orphan ──────────────────────────────────────────
print("\n" + "=" * 70)
print("AUDIT 4 — ORPHAN / NEAR-ORPHAN ROUTES (0–2 links)")
print("=" * 70)
for slug in slugs_sorted:
    n = total_sources(slug)
    if n <= 2:
        src_names = [u for _, u in all_sources(slug)]
        r = routes[slug]
        frm, to = r['from'], r['to']
        print(f"\n  /routes/{slug} ({n} links)")
        print(f"    Route: {frm} -> {to}")
        if src_names:
            print(f"    Current sources: {', '.join(src_names)}")
        else:
            print(f"    Current sources: NONE")

# ── Audit 5 — Silo Connectivity ──────────────────────────────────────────────
print("\n" + "=" * 70)
print("AUDIT 5 — SILO CONNECTIVITY")
print("=" * 70)
silos = {
    'Riyadh Trunk': ['riyadh-to-jeddah','riyadh-to-makkah','riyadh-to-madinah','riyadh-to-alula','riyadh-to-dammam','riyadh-to-khobar','riyadh-to-jubail','riyadh-to-tabuk','riyadh-to-neom','riyadh-to-hail','riyadh-to-taif','riyadh-to-abha','riyadh-to-yanbu','riyadh-to-qassim','riyadh-to-hofuf','riyadh-to-qatar-border'],
    'Jeddah / Makkah / Madinah': ['jeddah-to-makkah','makkah-to-madinah','madinah-to-makkah','jeddah-to-madinah','riyadh-to-jeddah','riyadh-to-makkah','riyadh-to-madinah','madinah-to-alula'],
    'Dammam / Khobar / Bahrain': ['khobar-to-riyadh','riyadh-to-khobar','khobar-to-bahrain','dammam-to-bahrain','dammam-to-riyadh','riyadh-to-dammam','jubail-to-riyadh','riyadh-to-jubail','dammam-airport-to-bahrain'],
    'Tabuk / AlUla / NEOM': ['tabuk-to-riyadh','riyadh-to-tabuk','riyadh-to-neom','neom-to-riyadh','alula-to-tabuk','tabuk-to-alula','alula-to-neom','riyadh-to-alula','madinah-to-alula'],
    'Taif / Abha / Southern': ['taif-to-riyadh','riyadh-to-taif','abha-to-riyadh','riyadh-to-abha','riyadh-to-yanbu','yanbu-to-riyadh'],
}
for silo, slugs in silos.items():
    print(f"\n  Silo: {silo}")
    for slug in slugs:
        n = total_sources(slug)
        marker = "⚠️ " if n <= 1 else ("✓ " if n >= 3 else "~  ")
        print(f"    {marker}/routes/{slug} ({n} links)")

# ── Audit 6 — Phase Preservation ─────────────────────────────────────────────
print("\n" + "=" * 70)
print("AUDIT 6 — PHASE PRESERVATION CHECK")
print("=" * 70)

phase_links = {
    # Phase 1A
    'P1A khobar-to-riyadh from city hub': ('khobar-to-riyadh', '/taxi-service/khobar', 'city_hub'),
    'P1A riyadh-to-jubail from city hub': ('riyadh-to-jubail', '/taxi-service/riyadh', 'city_hub'),
    'P1A riyadh-to-khobar from city hub': ('riyadh-to-khobar', '/taxi-service/riyadh', 'city_hub'),
    # Phase 1B
    'P1B intercity hub riyadh-to-neom': ('riyadh-to-neom', '/intercity-transfers', 'intercity_hub'),
    'P1B reverse riyadh-to-hail <- hail-to-riyadh': ('riyadh-to-hail', '/routes/hail-to-riyadh', 'reverse_callout'),
    # Phase 2
    'P2 riyadh-airport -> riyadh-to-jeddah': ('riyadh-to-jeddah', '/airport-transfer/riyadh-airport', 'airport_page'),
    'P2 jeddah-airport -> jeddah-to-makkah': ('jeddah-to-makkah', '/airport-transfer/jeddah-airport', 'airport_page'),
    # Phase 3A
    'P3A dammam-to-bahrain from dammam hub': ('dammam-to-bahrain', '/taxi-service/dammam', 'city_hub'),
    'P3A khobar-to-bahrain from border page': ('khobar-to-bahrain', '/border-transfers/bahrain-causeway', 'border_page'),
    'P3A riyadh-to-qatar-border from riyadh hub': ('riyadh-to-qatar-border', '/taxi-service/riyadh', 'city_hub'),
    # Phase 3B
    'P3B riyadh-to-jeddah from city guide': ('riyadh-to-jeddah', '/taxi-service/[city] (city guide FAQ)', 'city_guide'),
    'P3B madinah-to-alula from city guide': ('madinah-to-alula', '/taxi-service/[city] (city guide FAQ)', 'city_guide'),
    'P3B dammam-airport-to-bahrain from border guide': ('dammam-airport-to-bahrain', '/border-transfers/[border] (border guide FAQ)', 'border_guide'),
}

all_ok = True
for label, (slug, src, src_type) in phase_links.items():
    present = src in link_graph[slug][src_type]
    status = "✅" if present else "❌ MISSING"
    if not present: all_ok = False
    print(f"  {status} {label}")

if all_ok:
    print("\n  ✅ All sampled phase links are intact.")

