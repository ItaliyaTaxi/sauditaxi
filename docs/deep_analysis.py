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

# Categorization logic
def categorize_query(q):
    ql = q.lower()
    if 'hajj' in ql:
        return 'Hajj'
    elif 'umrah' in ql:
        return 'Umrah'
    elif 'ziyarat' in ql or 'ziyara' in ql:
        return 'Ziyarat'
    elif any(b in ql for b in ['border', 'causeway', 'bahrain', 'qatar', 'kuwait', 'jordan', 'uae', 'batha', 'khafji', 'doha', 'amman', 'dubai', 'abu dhabi']):
        return 'Border transfers'
    elif any(h in ql for h in ['hotel', 'resort', 'marriott', 'hilton', 'pullman', 'zamzam', 'fairmont', 'swissotel', 'anjum', 'ritz', 'shangri-la', 'voco']):
        return 'Hotel transfers'
    elif any(c in ql for c in ['chauffeur', 'driver', 'private car', 'limousine', 'vip']):
        return 'Private chauffeur'
    elif any(g in ql for g in ['bus', 'van', 'gmc', 'family', 'group', 'coaster', 'hiace']):
        return 'Group/family transfers'
    elif any(a in ql for a in ['airport', 'jed', 'ruh', 'med', 'dmm']):
        if 'makkah' in ql or 'mecca' in ql:
            return 'Airport -> Makkah'
        elif 'madinah' in ql or 'medina' in ql:
            return 'Airport -> Madinah'
        elif any(c in ql for c in ['jeddah', 'riyadh', 'dammam', 'khobar', 'taif', 'yanbu', 'alula', 'hail', 'tabuk', 'jazan', 'abha']):
            return 'Airport -> city'
        else:
            return 'Airport transfers'
    elif 'taxi' in ql or 'cab' in ql:
        return 'City taxi'
    elif 'transfer' in ql:
        if any(c in ql for c in ['to', 'from', '-']):
            return 'City -> city'
        else:
            return 'City transfers'
    elif any(w in ql for w in ['how', 'what', 'guide', 'weather', 'sim', 'cash', 'rules', 'visa', 'cost', 'price', 'train', 'uber', 'careem', 'metro', 'distance']):
        return 'Informational/travel'
    else:
        return 'Other'

# Quick Wins Opportunities
# Opp A: Pos 8-20 + imp >= 5
# Opp B: Pos 20-40 + imp >= 10
# Opp C: Pos 40+ + imp >= 15
# Opp D: High Imp (>= 15) + CTR < 1%
opp_a = [q for q in queries if 8 <= q['position'] <= 20 and q['impressions'] >= 3]
opp_b = [q for q in queries if 20 < q['position'] <= 40 and q['impressions'] >= 5]
opp_c = [q for q in queries if q['position'] > 40 and q['impressions'] >= 15]
opp_d = [q for q in queries if q['impressions'] >= 15 and q['ctr'] < 1.0]

# City Specific queries
jeddah_queries = [q for q in queries if 'jeddah' in q['query'].lower() or 'jed' in q['query'].lower()]
riyadh_queries = [q for q in queries if 'riyadh' in q['query'].lower() or 'ruh' in q['query'].lower()]
makkah_queries = [q for q in queries if 'makkah' in q['query'].lower() or 'mecca' in q['query'].lower()]
madinah_queries = [q for q in queries if 'madinah' in q['query'].lower() or 'medina' in q['query'].lower() or 'med' in q['query'].lower()]

# Categorize all queries
cat_summary = {}
for q in queries:
    c = categorize_query(q['query'])
    if c not in cat_summary:
        cat_summary[c] = {'queries': [], 'impressions': 0, 'clicks': 0}
    cat_summary[c]['queries'].append(q)
    cat_summary[c]['impressions'] += q['impressions']
    cat_summary[c]['clicks'] += q['clicks']

output_data = {
    'total_queries': len(queries),
    'total_pages': len(pages),
    'categories': {
        c: {
            'count': len(v['queries']),
            'impressions': v['impressions'],
            'clicks': v['clicks'],
            'avg_ctr': round(v['clicks'] / v['impressions'] * 100, 2) if v['impressions'] > 0 else 0,
            'avg_pos': round(sum(q['position'] for q in v['queries']) / len(v['queries']), 1) if v['queries'] else 0,
            'top_queries': sorted(v['queries'], key=lambda x: x['impressions'], reverse=True)[:10]
        } for c, v in cat_summary.items()
    },
    'quick_wins': {
        'opp_a_pos_8_20': sorted(opp_a, key=lambda x: x['impressions'], reverse=True),
        'opp_b_pos_20_40': sorted(opp_b, key=lambda x: x['impressions'], reverse=True),
        'opp_c_pos_40_plus': sorted(opp_c, key=lambda x: x['impressions'], reverse=True),
        'opp_d_low_ctr': sorted(opp_d, key=lambda x: x['impressions'], reverse=True)
    },
    'top_pages_by_impressions': sorted(pages, key=lambda x: x['impressions'], reverse=True)[:50],
    'top_pages_by_clicks': sorted(pages, key=lambda x: x['clicks'], reverse=True)[:30],
    'city_analysis': {
        'jeddah_count': len(jeddah_queries),
        'jeddah_imp': sum(q['impressions'] for q in jeddah_queries),
        'jeddah_clicks': sum(q['clicks'] for q in jeddah_queries),
        'jeddah_queries': sorted(jeddah_queries, key=lambda x: x['impressions'], reverse=True),
        
        'riyadh_count': len(riyadh_queries),
        'riyadh_imp': sum(q['impressions'] for q in riyadh_queries),
        'riyadh_clicks': sum(q['clicks'] for q in riyadh_queries),
        'riyadh_queries': sorted(riyadh_queries, key=lambda x: x['impressions'], reverse=True),
        
        'makkah_count': len(makkah_queries),
        'makkah_imp': sum(q['impressions'] for q in makkah_queries),
        'makkah_clicks': sum(q['clicks'] for q in makkah_queries),
        'makkah_queries': sorted(makkah_queries, key=lambda x: x['impressions'], reverse=True),
        
        'madinah_count': len(madinah_queries),
        'madinah_imp': sum(q['impressions'] for q in madinah_queries),
        'madinah_clicks': sum(q['clicks'] for q in madinah_queries),
        'madinah_queries': sorted(madinah_queries, key=lambda x: x['impressions'], reverse=True)
    }
}

with open(r'd:\Mine Projects\sauditaxi\docs\analysis_output.json', 'w', encoding='utf-8') as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

print("Analysis complete. Written to d:\\Mine Projects\\sauditaxi\\docs\\analysis_output.json")
