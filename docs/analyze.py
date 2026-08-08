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

print("=== TOP 40 QUERIES BY IMPRESSIONS ===")
queries_by_imp = sorted(queries, key=lambda x: x['impressions'], reverse=True)
for q in queries_by_imp[:40]:
    print(f"{q['query']:45s} | Imp: {q['impressions']:4d} | Clicks: {q['clicks']:2d} | CTR: {q['ctr']:5.2f}% | Pos: {q['position']:5.1f}")

print("\n=== TOP 30 PAGES BY IMPRESSIONS ===")
pages_by_imp = sorted(pages, key=lambda x: x['impressions'], reverse=True)
for p in pages_by_imp[:30]:
    print(f"{p['page']:70s} | Imp: {p['impressions']:4d} | Clicks: {p['clicks']:2d} | CTR: {p['ctr']:5.2f}% | Pos: {p['position']:5.1f}")

print("\n=== TOP 30 PAGES BY CLICKS ===")
pages_by_clicks = sorted(pages, key=lambda x: x['clicks'], reverse=True)
for p in pages_by_clicks[:30]:
    print(f"{p['page']:70s} | Imp: {p['impressions']:4d} | Clicks: {p['clicks']:2d} | CTR: {p['ctr']:5.2f}% | Pos: {p['position']:5.1f}")
