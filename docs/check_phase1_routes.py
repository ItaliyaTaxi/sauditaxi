import re
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read all route files
def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

routes_ts = read_file(r'd:\Mine Projects\sauditaxi\data\routes.ts')
makkah_ts = read_file(r'd:\Mine Projects\sauditaxi\data\makkah-routes.ts')
dammam_ts = read_file(r'd:\Mine Projects\sauditaxi\data\dammam-routes.ts')

all_content = routes_ts + "\n" + makkah_ts + "\n" + dammam_ts

# Extract all slugs
slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", all_content)
all_slugs = sorted(set(slugs))

# Phase 1 target routes
phase1 = [
    "khobar-to-riyadh",
    "riyadh-to-jubail",
    "hail-to-riyadh",
    "riyadh-to-neom",
    "riyadh-to-hofuf",
    "hofuf-to-riyadh",
    "neom-to-riyadh",
    "riyadh-to-qassim",
    "riyadh-to-tabuk",
    "jubail-to-riyadh",
    "qassim-to-riyadh",
    "riyadh-to-taif",
    "riyadh-to-yanbu",
    "riyadh-to-khobar",
    "yanbu-to-riyadh",
    "riyadh-to-hail",
    "tabuk-to-riyadh",
    "riyadh-to-abha",
    "abha-to-riyadh",
    "taif-to-riyadh",
]

print("=== PHASE 1 ROUTE EXISTENCE CHECK ===")
for slug in phase1:
    exists = slug in all_slugs
    # Also find reverse
    parts = slug.split('-to-', 1)
    rev = f"{parts[1]}-to-{parts[0]}" if len(parts) == 2 else None
    rev_exists = rev in all_slugs if rev else False
    print(f"{slug}: {'EXISTS' if exists else 'MISSING'} | Reverse ({rev}): {'EXISTS' if rev_exists else 'MISSING'}")

print(f"\nTotal route slugs in codebase: {len(all_slugs)}")

# Now extract relatedCitySlugs for each phase 1 route
# We'll parse each route block to find relatedCitySlugs
print("\n=== RELATED CITY SLUGS FOR PHASE 1 ROUTES ===")

# Build a map: slug -> relatedCitySlugs
def extract_route_blocks(content):
    """Extract slug and relatedCitySlugs from route data"""
    # Find each route block by looking for slug: "..." then relatedCitySlugs: [...]
    blocks = {}
    # Split on opening brace patterns
    slug_pattern = re.compile(r"slug:\s*['\"]([^'\"]+)['\"]")
    related_pattern = re.compile(r"relatedCitySlugs:\s*\[([^\]]*)\]", re.DOTALL)
    
    # Find all slugs with their positions
    for slug_match in slug_pattern.finditer(content):
        slug = slug_match.group(1)
        pos = slug_match.end()
        # Find relatedCitySlugs within next 2000 chars
        chunk = content[pos:pos+2000]
        related_match = related_pattern.search(chunk)
        if related_match:
            related_raw = related_match.group(1)
            related_slugs = re.findall(r"['\"]([^'\"]+)['\"]", related_raw)
            blocks[slug] = related_slugs
        else:
            blocks[slug] = []
    return blocks

route_blocks = extract_route_blocks(all_content)

for slug in phase1:
    related = route_blocks.get(slug, [])
    print(f"{slug}: relatedCitySlugs = {related}")

# Also check cities that currently have slugs in routes' relatedCitySlugs
# that would help identify which city pages currently link to each route
print("\n=== CITY SLUGS IN CODEBASE ===")
city_file = read_file(r'd:\Mine Projects\sauditaxi\data\cities.ts')
city_slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", city_file)
print("City slugs:", city_slugs)
