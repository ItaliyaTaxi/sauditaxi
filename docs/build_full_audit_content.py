import json
import csv
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Load all outputs
with open(r'd:\Mine Projects\sauditaxi\docs\full_inventory_output.json', 'r', encoding='utf-8') as f:
    inv = json.load(f)

with open(r'd:\Mine Projects\sauditaxi\docs\codebase_route_analysis.json', 'r', encoding='utf-8') as f:
    code_routes = json.load(f)

excel_inv = inv['excel_inventory']
gsc_only = inv['gsc_only_urls']

# Categorize all URLs in excel_inv
cats = {}
for item in excel_inv:
    pt = item['page_type']
    if pt not in cats:
        cats[pt] = []
    cats[pt].append(item)

print("Inventory Summary:")
for pt, items in cats.items():
    print(f"  {pt}: {len(items)} URLs")

# Print under-linked commercial pages breakdown
under_5 = [i for i in excel_inv if i['internal_links'] < 5 and i['page_type'] not in ['Legal/utility pages', 'Blog/informational pages']]
under_10 = [i for i in excel_inv if 5 <= i['internal_links'] < 10 and i['page_type'] not in ['Legal/utility pages', 'Blog/informational pages']]
under_20 = [i for i in excel_inv if 10 <= i['internal_links'] < 20 and i['page_type'] not in ['Legal/utility pages', 'Blog/informational pages']]

print(f"\nCommercial pages < 5 links: {len(under_5)}")
print(f"Commercial pages 5-9 links: {len(under_10)}")
print(f"Commercial pages 10-19 links: {len(under_20)}")

# Over-linked breakdown
over_400 = [i for i in excel_inv if i['internal_links'] >= 400]
print(f"\nOver-linked pages (>= 400 links): {len(over_400)}")
for i in over_400:
    print(f"  {i['url']} | Links: {i['internal_links']} | Type: {i['page_type']}")

