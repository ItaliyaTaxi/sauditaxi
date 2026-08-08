import re

routes_path = r'd:\Mine Projects\sauditaxi\data\routes.ts'
airports_path = r'd:\Mine Projects\sauditaxi\data\airports.ts'
services_path = r'd:\Mine Projects\sauditaxi\data\services.ts'

# 1. Update routes.ts
with open(routes_path, 'r', encoding='utf-8') as f:
    routes_code = f.read()

# Add metaTitle & metaDescription to jeddah-to-makkah if missing or basic
jeddah_makkah_old = 'slug: "jeddah-to-makkah",'
jeddah_makkah_new = '''slug: "jeddah-to-makkah",
    metaTitle: "Jeddah Airport to Makkah Private Transfer | Taxi Booking",
    metaDescription: "Book a private transfer from Jeddah Airport (JED) to Makkah (85 km, ~1h 15m). Professional driver, door-to-door Haram hotel drop-off, 24/7 availability.",'''

if 'slug: "jeddah-to-makkah"' in routes_code and 'metaTitle: "Jeddah Airport to Makkah' not in routes_code:
    routes_code = routes_code.replace(jeddah_makkah_old, jeddah_makkah_new, 1)
    print("Updated jeddah-to-makkah metadata in routes.ts")

with open(routes_path, 'w', encoding='utf-8') as f:
    f.write(routes_code)

# 2. Update airports.ts
with open(airports_path, 'r', encoding='utf-8') as f:
    airports_code = f.read()

# Update jeddah-airport metadata
airports_code = airports_code.replace(
    'metaTitle: "Jeddah Airport Taxi | King Abdulaziz (JED) to Makkah"',
    'metaTitle: "Jeddah Airport Transfer & Taxi | JED to Makkah & Hotels"'
)

# Update riyadh-airport metadata
airports_code = airports_code.replace(
    'metaTitle: "Riyadh Airport Taxi | King Khalid (RUH) Transfers"',
    'metaTitle: "Riyadh Airport Taxi | King Khalid (RUH) Terminal 1-5 Transfers"'
)

with open(airports_path, 'w', encoding='utf-8') as f:
    f.write(airports_code)

# 3. Update services.ts
with open(services_path, 'r', encoding='utf-8') as f:
    services_code = f.read()

services_code = services_code.replace(
    'metaTitle: "Ziyarat Taxi Service in Makkah & Madinah"',
    'metaTitle: "Ziyarat Taxi Service Makkah & Madinah | Holy Sites Private Tour"'
).replace(
    'metaTitle: "Umrah Taxi Saudi Arabia | Makkah & Madinah Transfers"',
    'metaTitle: "Umrah Taxi Service Saudi Arabia | Makkah & Madinah Transfers"'
)

with open(services_path, 'w', encoding='utf-8') as f:
    f.write(services_code)

print("SEO Updates Applied to routes.ts, airports.ts, and services.ts successfully.")
