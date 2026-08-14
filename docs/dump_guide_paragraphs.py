import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root_dir = r"d:\Mine Projects\sauditaxi"

with open(os.path.join(root_dir, 'data/city-guides.ts'), 'r', encoding='utf-8') as f:
    city_guides = f.read()

with open(os.path.join(root_dir, 'data/border-guides.ts'), 'r', encoding='utf-8') as f:
    border_guides = f.read()

def search_text(content, label, keywords):
    print(f"\n=================== SEARCHING IN {label} ===================")
    lines = content.split('\n')
    for idx, line in enumerate(lines, 1):
        if any(kw.lower() in line.lower() for kw in keywords):
            print(f"L{idx}: {line.strip()[:140]}")

search_text(city_guides, "CITY GUIDES (Riyadh)", ["Jeddah", "AlUla", "intercity", "highway"])
search_text(city_guides, "CITY GUIDES (Madinah)", ["AlUla", "excursion", "heritage"])
search_text(border_guides, "BORDER GUIDES (Bahrain)", ["Dammam", "airport", "causeway"])

