import csv
import json
import re
import os

# 104 URLs from prompt with internal link counts
raw_link_data = """
https://saudiprivatetransfers.com/privacy-policy	577
https://saudiprivatetransfers.com/get-quote	537
https://saudiprivatetransfers.com/airport-transfer/yanbu-airport	490
https://saudiprivatetransfers.com/airport-transfer/hail-airport	489
https://saudiprivatetransfers.com/taxi-service/tabuk	489
https://saudiprivatetransfers.com/airport-transfer/alula-airport	488
https://saudiprivatetransfers.com/contact	487
https://saudiprivatetransfers.com/taxi-service/khobar	486
https://saudiprivatetransfers.com/airport-transfer/jazan-airport	485
https://saudiprivatetransfers.com/airport-transfer/madinah-airport	485
https://saudiprivatetransfers.com/taxi-service/makkah	485
https://saudiprivatetransfers.com/taxi-service/riyadh	485
https://saudiprivatetransfers.com/airport-transfer/abha-airport	484
https://saudiprivatetransfers.com/airport-transfer/dammam-airport	483
https://saudiprivatetransfers.com/taxi-service/abha	483
https://saudiprivatetransfers.com/taxi-service/jazan	470
https://saudiprivatetransfers.com/taxi-service/buraidah	463
https://saudiprivatetransfers.com/taxi-service/dammam	462
https://saudiprivatetransfers.com/taxi-service/hail	462
https://saudiprivatetransfers.com/taxi-service/hofuf	462
https://saudiprivatetransfers.com/services	461
https://saudiprivatetransfers.com/airport-transfer/tabuk-airport	460
https://saudiprivatetransfers.com/city-transfers	460
https://saudiprivatetransfers.com/airport-transfer/taif-airport	458
https://saudiprivatetransfers.com/taxi-service/jubail	457
https://saudiprivatetransfers.com/umrah-taxi-service	457
https://saudiprivatetransfers.com/taxi-service/taif	456
https://saudiprivatetransfers.com/hajj-transport-service	418
https://saudiprivatetransfers.com/terms-and-conditions	418
https://saudiprivatetransfers.com/blog	417
https://saudiprivatetransfers.com/intercity-transfers	404
https://saudiprivatetransfers.com/about	403
https://saudiprivatetransfers.com/airport-transfer/riyadh-airport	403
https://saudiprivatetransfers.com/taxi-service/khamis-mushait	403
https://saudiprivatetransfers.com/airport-transfer/jeddah-airport	402
https://saudiprivatetransfers.com/border-transfers	402
https://saudiprivatetransfers.com/services/hotel-transfers	402
https://saudiprivatetransfers.com/taxi-service/alula	402
https://saudiprivatetransfers.com/ziyarat-taxi-service	402
https://saudiprivatetransfers.com/airport-transfers	401
https://saudiprivatetransfers.com/taxi-service/al-ahsa	401
https://saudiprivatetransfers.com/taxi-service/jeddah	401
https://saudiprivatetransfers.com/taxi-service/najran	401
https://saudiprivatetransfers.com/routes/riyadh-to-dammam	229
https://saudiprivatetransfers.com/routes/jeddah-to-makkah	188
https://saudiprivatetransfers.com/routes/makkah-to-madinah	176
https://saudiprivatetransfers.com/routes/dammam-to-riyadh	172
https://saudiprivatetransfers.com/routes/jeddah-to-madinah	163
https://saudiprivatetransfers.com/routes/riyadh-to-jeddah	145
https://saudiprivatetransfers.com/routes/jeddah-to-taif	97
https://saudiprivatetransfers.com/routes/khobar-to-bahrain	91
https://saudiprivatetransfers.com/routes/dammam-airport-to-khobar	81
https://saudiprivatetransfers.com/routes/dubai-to-riyadh	78
https://saudiprivatetransfers.com/routes/bahrain-to-riyadh	77
https://saudiprivatetransfers.com/routes/doha-to-riyadh	77
https://saudiprivatetransfers.com/routes/kuwait-city-to-riyadh	77
https://saudiprivatetransfers.com/routes/riyadh-to-bahrain	77
https://saudiprivatetransfers.com/routes/riyadh-to-doha	77
https://saudiprivatetransfers.com/routes/riyadh-to-qatar-border	73
https://saudiprivatetransfers.com/routes/madinah-to-makkah	68
https://saudiprivatetransfers.com/routes/dammam-airport-to-bahrain	55
https://saudiprivatetransfers.com/blog/saudi-arabia-airport-wifi-guide	43
https://saudiprivatetransfers.com/routes/bahrain-airport-to-dammam	35
https://saudiprivatetransfers.com/routes/bahrain-to-khobar	34
https://saudiprivatetransfers.com/routes/dammam-to-kuwait-city	34
https://saudiprivatetransfers.com/routes/al-khobar-to-doha	33
https://saudiprivatetransfers.com/routes/dammam-airport-to-doha	33
https://saudiprivatetransfers.com/routes/doha-to-al-khobar	33
https://saudiprivatetransfers.com/routes/kuwait-airport-to-dammam	33
https://saudiprivatetransfers.com/routes/dammam-to-kuwait-airport	32
https://saudiprivatetransfers.com/routes/doha-to-dammam-airport	32
https://saudiprivatetransfers.com/routes/manama-to-dammam	31
https://saudiprivatetransfers.com/blog/saudi-arabia-travel-scams-tourists-should-know	26
https://saudiprivatetransfers.com/blog/family-travel-bahrain-to-saudi-arabia	9
https://saudiprivatetransfers.com/blog/gcc-residents-road-travel-to-saudi-arabia	9
https://saudiprivatetransfers.com/blog/bahrain-to-saudi-arabia-by-road	5
https://saudiprivatetransfers.com/blog/business-travel-bahrain-dammam-guide	5
https://saudiprivatetransfers.com/blog/travel-documents-bahrain-to-saudi-arabia	5
https://saudiprivatetransfers.com/routes/madinah-to-jeddah	5
https://saudiprivatetransfers.com/routes/riyadh-to-khobar	5
https://saudiprivatetransfers.com/routes/taif-to-jeddah	5
https://saudiprivatetransfers.com/routes/khobar-to-riyadh	4
https://saudiprivatetransfers.com/routes/riyadh-to-madinah	4
https://saudiprivatetransfers.com/routes/hail-to-riyadh	3
https://saudiprivatetransfers.com/routes/hofuf-to-riyadh	3
https://saudiprivatetransfers.com/routes/madinah-to-riyadh	3
https://saudiprivatetransfers.com/routes/neom-to-riyadh	3
https://saudiprivatetransfers.com/routes/riyadh-to-abha	3
https://saudiprivatetransfers.com/routes/riyadh-to-jubail	3
https://saudiprivatetransfers.com/routes/riyadh-to-qassim	3
https://saudiprivatetransfers.com/routes/riyadh-to-tabuk	3
https://saudiprivatetransfers.com/routes/riyadh-to-yanbu	3
https://saudiprivatetransfers.com/routes/taif-to-riyadh	3
https://saudiprivatetransfers.com/blog/saudi-to-bahrain-taxi-king-fahd-causeway	2
https://saudiprivatetransfers.com/routes/abha-to-riyadh	2
https://saudiprivatetransfers.com/routes/jubail-to-riyadh	2
https://saudiprivatetransfers.com/routes/qassim-to-riyadh	2
https://saudiprivatetransfers.com/routes/riyadh-to-hofuf	2
https://saudiprivatetransfers.com/routes/riyadh-to-neom	2
https://saudiprivatetransfers.com/routes/tabuk-to-riyadh	2
https://saudiprivatetransfers.com/routes/yanbu-to-riyadh	2
https://saudiprivatetransfers.com/ar/نقل-من-مطار-المدينة-الى-فندق-كراون-بلازا-المدينة	1
https://saudiprivatetransfers.com/blog/madinah-to-yanbu-transfer-guide	1
https://saudiprivatetransfers.com/blog/riyadh-to-alula-road-trip-guide	1
https://saudiprivatetransfers.com/routes/riyadh-to-hail	1
https://saudiprivatetransfers.com/routes/riyadh-to-taif	1
"""

internal_links = {}
for line in raw_link_data.strip().split('\n'):
    parts = line.split('\t')
    if len(parts) == 2:
        internal_links[parts[0].strip()] = int(parts[1].strip())

# GSC Pages Data
gsc_pages = {}
with open(r'd:\Mine Projects\sauditaxi\docs\search_data\Pages.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for r in reader:
        url = r['Top pages'].strip()
        gsc_pages[url] = {
            'clicks': int(r['Clicks']),
            'impressions': int(r['Impressions']),
            'ctr': float(r['CTR'].replace('%','')) if '%' in r['CTR'] else float(r['CTR']),
            'position': float(r['Position'])
        }

# Categorizer
def get_page_type(url):
    p = url.replace('https://saudiprivatetransfers.com', '')
    if p in ['', '/']:
        return 'Homepage'
    elif p in ['/privacy-policy', '/terms-and-conditions', '/about', '/contact']:
        return 'Legal/utility pages'
    elif p in ['/get-quote']:
        return 'Conversion/utility'
    elif p in ['/services', '/city-transfers', '/intercity-transfers', '/border-transfers', '/airport-transfers', '/services/hotel-transfers']:
        return 'Service pages'
    elif p in ['/umrah-taxi-service', '/hajj-transport-service', '/ziyarat-taxi-service']:
        return 'Umrah/Hajj pages'
    elif '/taxi-service/' in p:
        return 'City/taxi pages'
    elif '/airport-transfer/' in p:
        return 'Airport pages'
    elif '/routes/' in p:
        if 'airport' in p:
            return 'Airport → city pages'
        else:
            return 'City → city route pages'
    elif '/blog' in p:
        return 'Blog/informational pages'
    elif '/ar/' in p:
        return 'Hotel/location transfer pages'
    else:
        return 'Other pages'

inventory = []
for url, count in internal_links.items():
    gsc = gsc_pages.get(url, {'clicks': 0, 'impressions': 0, 'ctr': 0.0, 'position': 0.0})
    ptype = get_page_type(url)
    inventory.append({
        'url': url,
        'page_type': ptype,
        'internal_links': count,
        'clicks': gsc['clicks'],
        'impressions': gsc['impressions'],
        'ctr': gsc['ctr'],
        'position': gsc['position']
    })

# Also check for URLs in GSC that are NOT in top target internal link list
missing_from_excel = []
for url, gsc in gsc_pages.items():
    if url not in internal_links:
        missing_from_excel.append({
            'url': url,
            'page_type': get_page_type(url),
            'internal_links': 0, # not in top excel list
            'clicks': gsc['clicks'],
            'impressions': gsc['impressions'],
            'ctr': gsc['ctr'],
            'position': gsc['position']
        })

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

print(f"Total Excel Inventory URLs: {len(inventory)}")
print(f"Total GSC URLs not in top Excel list: {len(missing_from_excel)}")

# Print breakdown by page_type
type_counts = {}
for item in inventory:
    t = item['page_type']
    type_counts[t] = type_counts.get(t, 0) + 1

print("\n--- Inventory Page Type Counts ---")
for t, c in type_counts.items():
    print(f"{t}: {c}")

with open(r'd:\Mine Projects\sauditaxi\docs\full_inventory_output.json', 'w', encoding='utf-8') as f:
    json.dump({'excel_inventory': inventory, 'gsc_only_urls': missing_from_excel}, f, indent=2)

print("Inventory JSON saved.")
