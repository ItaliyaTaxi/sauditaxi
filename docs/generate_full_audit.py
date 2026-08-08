import csv
import json
import os

def parse_num(val, is_float=False):
    if not val: return 0.0 if is_float else 0
    val = str(val).replace('%', '').replace(',', '').strip()
    try:
        return float(val) if is_float else int(float(val))
    except:
        return 0.0 if is_float else 0

queries = []
with open(r'd:\Mine Projects\sauditaxi\docs\search_data\Queries.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for r in reader:
        q = r['Top queries'].strip()
        clicks = parse_num(r['Clicks'])
        imp = parse_num(r['Impressions'])
        ctr = parse_num(r['CTR'], True)
        pos = parse_num(r['Position'], True)
        queries.append({'query': q, 'clicks': clicks, 'impressions': imp, 'ctr': ctr, 'position': pos})

pages = []
with open(r'd:\Mine Projects\sauditaxi\docs\search_data\Pages.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for r in reader:
        p = r['Top pages'].strip()
        clicks = parse_num(r['Clicks'])
        imp = parse_num(r['Impressions'])
        ctr = parse_num(r['CTR'], True)
        pos = parse_num(r['Position'], True)
        pages.append({'page': p, 'clicks': clicks, 'impressions': imp, 'ctr': ctr, 'position': pos})

# Build lookup map for pages
page_lookup = {p['page']: p for p in pages}

print(f"Loaded {len(queries)} queries and {len(pages)} pages.")

# Let's inspect top pages and match them with intent
top_pages_by_imp = sorted(pages, key=lambda x: x['impressions'], reverse=True)
top_pages_by_clicks = sorted(pages, key=lambda x: x['clicks'], reverse=True)

# Generate detailed statistics file
with open(r'd:\Mine Projects\sauditaxi\docs\audit_stats.txt', 'w', encoding='utf-8') as f:
    f.write("=== TOP 30 PAGES BY IMPRESSIONS ===\n")
    for p in top_pages_by_imp[:30]:
        f.write(f"{p['page']} | Clicks: {p['clicks']} | Imp: {p['impressions']} | CTR: {p['ctr']}% | Pos: {p['position']}\n")
        
    f.write("\n=== TOP 20 PAGES BY CLICKS ===\n")
    for p in top_pages_by_clicks[:20]:
        f.write(f"{p['page']} | Clicks: {p['clicks']} | Imp: {p['impressions']} | CTR: {p['ctr']}% | Pos: {p['position']}\n")

print("Wrote audit_stats.txt")
