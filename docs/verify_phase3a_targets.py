import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read data/routes.ts, makkah-routes.ts, dammam-routes.ts
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
            routes[slug] = {'slug': slug, 'from': frm.group(1) if frm else '', 'to': to.group(1) if to else '', 'file': rf}
    return routes

routes = load_routes()

p1_p2_proposed = [
    # P1 Riyadh Trunk
    "riyadh-to-jeddah", "riyadh-to-makkah", "riyadh-to-madinah", "riyadh-to-alula",
    # P1 Eastern/Bahrain
    "khobar-to-bahrain", "dammam-to-bahrain", "dammam-to-riyadh",
    # P1 Northern/Tourism
    "alula-to-tabuk", "alula-to-neom", "alula-to-madinah", "tabuk-to-neom", "tabuk-to-alula",
    # P1 Umrah
    "jeddah-to-makkah", "makkah-to-madinah",
    # P2 High Value
    "madinah-to-makkah", "riyadh-to-dammam", "riyadh-to-qatar-border", "dammam-airport-to-bahrain"
]

print("=== PHASE 3A TARGET ROUTE EXISTENCE CHECK ===")
for r in p1_p2_proposed:
    exists = r in routes
    info = routes.get(r, {})
    print(f"{r}: {'EXISTS' if exists else 'MISSING'} | File: {info.get('file', 'N/A')} | {info.get('from', '')} -> {info.get('to', '')}")

