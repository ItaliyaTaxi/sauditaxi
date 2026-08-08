import re
import json

routes_file = r'd:\Mine Projects\sauditaxi\data\routes.ts'
airports_file = r'd:\Mine Projects\sauditaxi\data\airports.ts'
services_file = r'd:\Mine Projects\sauditaxi\data\services.ts'

with open(routes_file, 'r', encoding='utf-8') as f:
    routes_code = f.read()

with open(airports_file, 'r', encoding='utf-8') as f:
    airports_code = f.read()

with open(services_file, 'r', encoding='utf-8') as f:
    services_code = f.read()

target_routes = [
    'jeddah-to-makkah',
    'dammam-to-bahrain',
    'dammam-to-riyadh',
    'doha-to-al-khobar',
    'khobar-to-riyadh',
    'riyadh-to-jubail'
]

target_airports = [
    'jeddah-airport',
    'madinah-airport',
    'riyadh-airport',
    'abha-airport'
]

target_services = [
    'ziyarat-taxi-service',
    'umrah-taxi-service'
]

# Quick parser for TS route objects
print("=== AUDITED ROUTES ===")
for r_slug in target_routes:
    pattern = rf'slug:\s*"{r_slug}"[^}}]*?from:\s*"([^"]+)"[^}}]*?to:\s*"([^"]+)"[^}}]*?distance:\s*"([^"]+)"[^}}]*?duration:\s*"([^"]+)"'
    match = re.search(pattern, routes_code, re.DOTALL)
    if match:
        print(f"Slug: {r_slug} | From: {match.group(1)} | To: {match.group(2)} | Distance: {match.group(3)} | Duration: {match.group(4)}")
    else:
        # fallback broader search
        if f'slug: "{r_slug}"' in routes_code or f"slug: '{r_slug}'" in routes_code:
            print(f"Slug: {r_slug} | Found in routes.ts")
        else:
            print(f"Slug: {r_slug} | NOT FOUND")

print("\n=== AUDITED AIRPORTS ===")
for a_slug in target_airports:
    if f'slug: "{a_slug}"' in airports_code or f"slug: '{a_slug}'" in airports_code:
        print(f"Airport Slug: {a_slug} | Found in airports.ts")
    else:
        print(f"Airport Slug: {a_slug} | NOT FOUND")

print("\n=== AUDITED SERVICES ===")
for s_slug in target_services:
    if f'slug: "{s_slug}"' in services_code or f'/{s_slug}' in services_code:
        print(f"Service Slug: {s_slug} | Found in services.ts")
    else:
        print(f"Service Slug: {s_slug} | Check standalone page file")
