with open(r'd:\Mine Projects\sauditaxi\data\routes.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'slug: "jeddah-to-makkah"' in line or 'slug: "dammam-to-bahrain"' in line:
        print(f"=== {line.strip()} at Line {i+1} ===")
        for j in range(i, min(i+35, len(lines))):
            print(f"{j+1}: {lines[j].rstrip()}")
