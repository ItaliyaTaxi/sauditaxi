import re
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Let's count how many internal links each of the 20 Phase 1 routes receives across the entire codebase / rendered site data structures!

phase1_routes = [
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

# Check cities.ts popularRoutes count for each target route
with open('data/cities.ts', 'r', encoding='utf-8') as f:
    cities_content = f.read()

print("=== PHASE 1 ROUTES LINKED FROM CITY PAGES (popularRoutes) ===")
for r in phase1_routes:
    count = cities_content.count(f'"{r}"') + cities_content.count(f"'{r}'")
    print(f"{r}: linked in {count} city hub records")
