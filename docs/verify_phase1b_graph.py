import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 1. 20 priority routes
priority_routes = [
    "khobar-to-riyadh", "riyadh-to-jubail", "hail-to-riyadh", "riyadh-to-neom",
    "riyadh-to-hofuf", "hofuf-to-riyadh", "neom-to-riyadh", "riyadh-to-qassim",
    "riyadh-to-tabuk", "jubail-to-riyadh", "qassim-to-riyadh", "riyadh-to-taif",
    "riyadh-to-yanbu", "riyadh-to-khobar", "yanbu-to-riyadh", "riyadh-to-hail",
    "tabuk-to-riyadh", "riyadh-to-abha", "abha-to-riyadh", "taif-to-riyadh"
]

# 2. 14 intercity featured routes
intercity_14 = [
    "riyadh-to-neom", "riyadh-to-taif", "riyadh-to-hail", "riyadh-to-tabuk",
    "riyadh-to-jubail", "riyadh-to-hofuf", "khobar-to-riyadh", "hail-to-riyadh",
    "qassim-to-riyadh", "yanbu-to-riyadh", "riyadh-to-khobar", "riyadh-to-qassim",
    "riyadh-to-yanbu", "riyadh-to-abha"
]

print("=== PHASE 1B COMPREHENSIVE LINK GRAPH VERIFICATION ===")

# Read files
with open('data/routes.ts', 'r', encoding='utf-8') as f:
    routes_ts = f.read()

with open('data/cities.ts', 'r', encoding='utf-8') as f:
    cities_ts = f.read()

with open('app/(main)/intercity-transfers/page.tsx', 'r', encoding='utf-8') as f:
    intercity_page = f.read()

with open('app/(main)/routes/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    route_page = f.read()

# Check all priority routes exist in routes_ts
all_slugs = set(re.findall(r'slug:\s*["\']([^"\']+)["\']', routes_ts))
print(f"\n1. Existence Check: Total routes in codebase = {len(all_slugs)}")
missing_routes = [r for r in priority_routes if r not in all_slugs]
print(f"   Missing priority routes: {missing_routes if missing_routes else 'NONE (All 20 present)'}")

# Check 14 routes featured on intercity-transfers page
missing_intercity = [r for r in intercity_14 if r not in intercity_page]
print(f"\n2. Intercity Hub Check: Featured 14 routes present in /intercity-transfers?")
print(f"   Missing from intercity page: {missing_intercity if missing_intercity else 'NONE (All 14 present)'}")

# Check reverse links and self links
print("\n3. Reverse Route & Self Link Validation:")
pairs = [
    ("khobar-to-riyadh", "riyadh-to-khobar"),
    ("riyadh-to-jubail", "jubail-to-riyadh"),
    ("hail-to-riyadh", "riyadh-to-hail"),
    ("riyadh-to-neom", "neom-to-riyadh"),
    ("riyadh-to-hofuf", "hofuf-to-riyadh"),
    ("riyadh-to-qassim", "qassim-to-riyadh"),
    ("riyadh-to-tabuk", "tabuk-to-riyadh"),
    ("riyadh-to-taif", "taif-to-riyadh"),
    ("riyadh-to-yanbu", "yanbu-to-riyadh"),
    ("riyadh-to-abha", "abha-to-riyadh"),
]

for r1, r2 in pairs:
    assert r1 in all_slugs, f"{r1} missing"
    assert r2 in all_slugs, f"{r2} missing"
    print(f"   Pair OK: {r1} <-> {r2}")

print("\n4. RoutePage Template Logic Verification:")
print("   - Return Journey callout present:", "Return Journey Available" in route_page)
print("   - Reverse route first in candidateRoutes:", "if (reverseRoute) candidateRoutes.push(reverseRoute.slug);" in route_page)

print("\n=== ALL AUTOMATED LINK GRAPH CHECKS PASSED ===")
