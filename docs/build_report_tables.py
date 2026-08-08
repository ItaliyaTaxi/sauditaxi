import csv
import json

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

# Print out specific sections to file
with open(r'd:\Mine Projects\sauditaxi\docs\report_data.txt', 'w', encoding='utf-8') as out:
    out.write("=== QUICK WINS OPP A (Pos 8-20) ===\n")
    opp_a = [q for q in queries if 8 <= q['position'] <= 20 and q['impressions'] >= 3]
    opp_a_sorted = sorted(opp_a, key=lambda x: x['impressions'], reverse=True)
    for q in opp_a_sorted:
        out.write(f"{q['query']} | Imp: {q['impressions']} | Clicks: {q['clicks']} | CTR: {q['ctr']}% | Pos: {q['position']}\n")

    out.write("\n=== QUICK WINS OPP B (Pos 20-40) ===\n")
    opp_b = [q for q in queries if 20 < q['position'] <= 40 and q['impressions'] >= 5]
    opp_b_sorted = sorted(opp_b, key=lambda x: x['impressions'], reverse=True)
    for q in opp_b_sorted:
        out.write(f"{q['query']} | Imp: {q['impressions']} | Clicks: {q['clicks']} | CTR: {q['ctr']}% | Pos: {q['position']}\n")

    out.write("\n=== QUICK WINS OPP C (Pos 40+) ===\n")
    opp_c = [q for q in queries if q['position'] > 40 and q['impressions'] >= 15]
    opp_c_sorted = sorted(opp_c, key=lambda x: x['impressions'], reverse=True)
    for q in opp_c_sorted:
        out.write(f"{q['query']} | Imp: {q['impressions']} | Clicks: {q['clicks']} | CTR: {q['ctr']}% | Pos: {q['position']}\n")

    out.write("\n=== JEDDAH QUERIES ===\n")
    jeddah_q = [q for q in queries if 'jeddah' in q['query'].lower() or 'jed' in q['query'].lower()]
    for q in sorted(jeddah_q, key=lambda x: x['impressions'], reverse=True)[:30]:
        out.write(f"{q['query']} | Imp: {q['impressions']} | Pos: {q['position']}\n")

    out.write("\n=== RIYADH QUERIES ===\n")
    riyadh_q = [q for q in queries if 'riyadh' in q['query'].lower() or 'ruh' in q['query'].lower()]
    for q in sorted(riyadh_q, key=lambda x: x['impressions'], reverse=True)[:30]:
        out.write(f"{q['query']} | Imp: {q['impressions']} | Pos: {q['position']}\n")

    out.write("\n=== MAKKAH & MADINAH QUERIES ===\n")
    makkah_madinah_q = [q for q in queries if any(k in q['query'].lower() for k in ['makkah', 'mecca', 'madinah', 'medina', 'umrah', 'hajj', 'ziyarat'])]
    for q in sorted(makkah_madinah_q, key=lambda x: x['impressions'], reverse=True)[:40]:
        out.write(f"{q['query']} | Imp: {q['impressions']} | Pos: {q['position']}\n")

print("Generated report_data.txt successfully.")
