import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

# 1. Verify target routes in data/routes.ts
with open(os.path.join(root_dir, 'data/routes.ts'), 'r', encoding='utf-8') as f:
    routes_ts = f.read()

target_routes = ["riyadh-to-jeddah", "riyadh-to-alula", "dammam-airport-to-bahrain", "madinah-to-alula"]

print("=== TARGET ROUTE EXISTENCE VERIFICATION ===")
for r in target_routes:
    exists = f'slug: "{r}"' in routes_ts or f"slug: '{r}'" in routes_ts
    print(f"/routes/{r}: {'EXISTS' if exists else 'MISSING'}")

# 2. Inspect data/city-guides.ts for riyadh & madinah
with open(os.path.join(root_dir, 'data/city-guides.ts'), 'r', encoding='utf-8') as f:
    city_guides_ts = f.read()

# Find riyadh guide section
def print_guide_summary(guide_name, text):
    pattern = re.compile(rf'["\']{guide_name}["\']\s*:\s*\{{.*?(?=["\'][a-z0-9-]+["\']\s*:\s*\{{|\Z)', re.DOTALL)
    m = pattern.search(text)
    if not m:
        print(f"Guide {guide_name} not found")
        return
    chunk = m.group(0)
    headings = re.findall(r'heading:\s*["\']([^"\']+)["\']', chunk)
    print(f"\n--- Guide: {guide_name} (Headings: {len(headings)}) ---")
    for h in headings:
        print(f"  - Heading: {h}")

print_guide_summary('riyadh', city_guides_ts)
print_guide_summary('madinah', city_guides_ts)

# 3. Inspect data/border-guides.ts for bahrain-causeway
with open(os.path.join(root_dir, 'data/border-guides.ts'), 'r', encoding='utf-8') as f:
    border_guides_ts = f.read()

print_guide_summary('bahrain-causeway', border_guides_ts)

