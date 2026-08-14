import csv
import json
import os

# Load inventory output
with open(r'd:\Mine Projects\sauditaxi\docs\full_inventory_output.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

excel_inv = data['excel_inventory']
gsc_only = data['gsc_only_urls']

# Load queries CSV
queries = []
with open(r'd:\Mine Projects\sauditaxi\docs\search_data\Queries.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for r in reader:
        c = int(r['Clicks'])
        i = int(r['Impressions'])
        ctr = float(r['CTR'].replace('%','')) if '%' in r['CTR'] else float(r['CTR'])
        pos = float(r['Position'])
        queries.append({'query': r['Top queries'].strip(), 'clicks': c, 'impressions': i, 'ctr': ctr, 'position': pos})

# 1. Internal Link Distribution Stats
under_5 = [item for item in excel_inv if item['internal_links'] < 5]
under_10 = [item for item in excel_inv if item['internal_links'] < 10]
under_20 = [item for item in excel_inv if item['internal_links'] < 20]
over_400 = [item for item in excel_inv if item['internal_links'] >= 400]

print(f"Total pages < 5 internal links: {len(under_5)}")
print(f"Total pages < 10 internal links: {len(under_10)}")
print(f"Total pages < 20 internal links: {len(under_20)}")
print(f"Total pages >= 400 internal links: {len(over_400)}")

# Under-linked routes analysis
under_linked_routes = [item for item in excel_inv if item['page_type'] in ['City → city route pages', 'Airport → city pages'] and item['internal_links'] <= 10]
print("\n--- Under-linked Routes (<= 10 links) ---")
for r in sorted(under_linked_routes, key=lambda x: x['internal_links']):
    print(f"{r['url']} | Links: {r['internal_links']} | Impr: {r['impressions']} | Clicks: {r['clicks']} | Pos: {r['position']}")

# Quick Wins from GSC (Pos 4 to 20 with high impressions)
quick_wins = []
for item in excel_inv + gsc_only:
    if 4.0 <= item['position'] <= 20.0 and item['impressions'] >= 50:
        quick_wins.append(item)

quick_wins.sort(key=lambda x: x['impressions'], reverse=True)
print("\n--- Top Quick Win Pages (Pos 4-20, Impr >= 50) ---")
for qw in quick_wins[:15]:
    print(f"{qw['url']} | Pos: {qw['position']} | Impr: {qw['impressions']} | Clicks: {qw['clicks']} | Links: {qw['internal_links']}")

# High Impressions / Low CTR (< 1% CTR, Impr >= 100)
low_ctr = [item for item in excel_inv + gsc_only if item['impressions'] >= 100 and item['ctr'] < 1.5]
low_ctr.sort(key=lambda x: x['impressions'], reverse=True)
print("\n--- High Impressions / Low CTR Pages ---")
for lc in low_ctr[:15]:
    print(f"{lc['url']} | Impr: {lc['impressions']} | Clicks: {lc['clicks']} | CTR: {lc['ctr']}% | Pos: {lc['position']}")

