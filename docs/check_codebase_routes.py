import os
import re

routes_file = r'd:\Mine Projects\sauditaxi\data\routes.ts'
cities_file = r'd:\Mine Projects\sauditaxi\data\cities.ts'
airports_file = r'd:\Mine Projects\sauditaxi\data\airports.ts'

with open(routes_file, 'r', encoding='utf-8') as f:
    routes_content = f.read()

# Extract route slugs
slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", routes_content)

print(f"Total routes defined in data/routes.ts: {len(slugs)}")
print("Sample route slugs:", slugs[:15])

# Check app routes structure
app_dir = r'd:\Mine Projects\sauditaxi\app'
app_routes = []
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file in ['page.tsx', 'page.jsx', 'page.js']:
            rel = os.path.relpath(os.path.join(root, file), app_dir)
            app_routes.append(rel)

print(f"\nTotal app route pages: {len(app_routes)}")
for ar in sorted(app_routes):
    print("  ", ar)
