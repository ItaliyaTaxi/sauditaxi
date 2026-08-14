import os
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Priority 20 routes
priority_routes = [
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

# We want to trace all references to /routes/{slug} across the codebase files
# Files to check:
# 1. data/cities.ts
# 2. data/routes.ts, data/makkah-routes.ts, data/dammam-routes.ts
# 3. data/airports.ts
# 4. components/layout/Header.tsx, Footer.tsx
# 5. components/sections/*.tsx
# 6. app/**/page.tsx

root_dir = r"d:\Mine Projects\sauditaxi"

results = {slug: [] for slug in priority_routes}

def scan_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return

    rel_path = os.path.relpath(filepath, root_dir)
    
    for slug in priority_routes:
        # Check for slug occurrence as URL or data reference
        patterns = [
            (f"/routes/{slug}", "Direct URL / Link"),
            (f'"{slug}"', "Data String"),
            (f"'{slug}'", "Data String"),
        ]
        
        for pat, pat_type in patterns:
            if pat in content:
                # Find line numbers and context
                lines = content.split('\n')
                for idx, line in enumerate(lines, 1):
                    if pat in line:
                        results[slug].append({
                            'file': rel_path,
                            'line': idx,
                            'context': line.strip()[:120],
                            'type': pat_type
                        })

# Scan data, components, app directories
dirs_to_scan = [
    os.path.join(root_dir, 'data'),
    os.path.join(root_dir, 'components'),
    os.path.join(root_dir, 'app'),
    os.path.join(root_dir, 'lib'),
]

for d in dirs_to_scan:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
                scan_file(os.path.join(root, file))

print("=== VERIFICATION OF INCOMING REFERENCES FOR 20 PRIORITY ROUTES ===")
for slug in priority_routes:
    refs = results[slug]
    print(f"\n--- Route: /routes/{slug} (Total Ref Occurrences: {len(refs)}) ---")
    # Group by file
    by_file = {}
    for r in refs:
        by_file.setdefault(r['file'], []).append(r)
    for f, f_refs in by_file.items():
        print(f"  File: {f} ({len(f_refs)} occurrences)")
        for item in f_refs[:5]:
            print(f"    L{item['line']}: {item['context']}")

