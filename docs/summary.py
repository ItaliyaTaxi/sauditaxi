import json

with open(r'd:\Mine Projects\sauditaxi\docs\analysis_output.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== CATEGORIES SUMMARY ===")
for cat, stats in sorted(data['categories'].items(), key=lambda x: x[1]['impressions'], reverse=True):
    print(f"{cat:25s} | Count: {stats['count']:3d} | Imp: {stats['impressions']:5d} | Clicks: {stats['clicks']:2d} | CTR: {stats['avg_ctr']:5.2f}% | Pos: {stats['avg_pos']:5.1f}")

print("\n=== QUICK WINS SUMMARY ===")
for k, v in data['quick_wins'].items():
    print(f"{k}: {len(v)} queries")

print("\n=== TOP QUICK WIN QUERIES (Opp A: Pos 8-20) ===")
for q in data['quick_wins']['opp_a_pos_8_20'][:20]:
    print(f"{q['query']:45s} | Imp: {q['impressions']:4d} | Pos: {q['position']:5.1f} | CTR: {q['ctr']:5.2f}%")

print("\n=== TOP QUICK WIN QUERIES (Opp B: Pos 20-40) ===")
for q in data['quick_wins']['opp_b_pos_20_40'][:20]:
    print(f"{q['query']:45s} | Imp: {q['impressions']:4d} | Pos: {q['position']:5.1f} | CTR: {q['ctr']:5.2f}%")

print("\n=== TOP QUICK WIN QUERIES (Opp C: Pos 40+) ===")
for q in data['quick_wins']['opp_c_pos_40_plus'][:20]:
    print(f"{q['query']:45s} | Imp: {q['impressions']:4d} | Pos: {q['position']:5.1f} | CTR: {q['ctr']:5.2f}%")
