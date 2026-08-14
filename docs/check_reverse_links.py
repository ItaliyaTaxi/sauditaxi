import re, os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

pairs = [
    ("khobar-to-riyadh", "riyadh-to-khobar"),
    ("riyadh-to-jubail", "jubail-to-riyadh"),
    ("hail-to-riyadh", "riyadh-to-hail"),
    ("riyadh-to-neom", "neom-to-riyadh"),
    ("riyadh-to-hofuf", "hofuf-to-riyadh"),
    ("riyadh-to-qassim", "qassim-to-riyadh"),
    ("riyadh-to-tabuk", "tabuk-to-riyadh"),
    ("riyadh-to-taif", "taif-to-riyadh"),
    ("riyadh-to-yanbu", "yanbu-to-riyadh"),
    ("riyadh-to-abha", "abha-to-riyadh"),
]

with open('data/routes.ts', 'r', encoding='utf-8') as f:
    routes_ts = f.read()

print("=== REVERSE LINK CHECK FOR 20 PRIORITY ROUTES ===")

def check_reverse_link(src_slug, target_slug):
    # Find block of src_slug in routes_ts
    pattern = re.compile(rf'slug:\s*["\']{src_slug}["\'].*?(?=slug:\s*["\']|\Z)', re.DOTALL)
    match = pattern.search(routes_ts)
    if not match:
        return False, False, "Route not found"
    
    block = match.group(0)
    
    # Check if target_slug is linked via <a href='/routes/target_slug'> or /routes/target_slug
    has_html_link = f"/routes/{target_slug}" in block
    
    # Check if in sections vs faqs
    sections_pos = block.find("sections:")
    faqs_pos = block.find("faqs:")
    
    in_sections = False
    in_faqs = False
    
    if has_html_link:
        link_pos = block.find(f"/routes/{target_slug}")
        if faqs_pos != -1 and link_pos >= faqs_pos:
            in_faqs = True
        elif sections_pos != -1 and link_pos >= sections_pos:
            in_sections = True
            
    return has_html_link, in_sections, in_faqs

for r1, r2 in pairs:
    r1_has, r1_sec, r1_faq = check_reverse_link(r1, r2)
    r2_has, r2_sec, r2_faq = check_reverse_link(r2, r1)
    
    print(f"\nPair: {r1} <-> {r2}")
    print(f"  {r1} -> {r2}: linked={r1_has} (in sections={r1_sec}, in faqs={r1_faq})")
    print(f"  {r2} -> {r1}: linked={r2_has} (in sections={r2_sec}, in faqs={r2_faq})")
