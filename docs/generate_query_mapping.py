import csv

mapping_file = r'd:\Mine Projects\sauditaxi\docs\query-url-mapping.md'

mappings = [
    {
        "query": "jeddah airport transfer",
        "intent": "Commercial (Airport pickup & transfer)",
        "impressions": 36, # Query specific row; overall query group: 1155+
        "clicks": 0,
        "ctr": "0.00%",
        "position": 78.2,
        "current_url": "/airport-transfers (Hub)",
        "recommended_url": "/airport-transfer/jeddah-airport",
        "is_correct": "Incorrect (General hub ranking instead of JED airport page)",
        "action": "OPTIMIZE EXISTING PAGE & INTERNAL LINK",
        "reason": "The specific JED airport page should own all Jeddah airport transfer terms. Internal links from blogs and hub pages should point directly to /airport-transfer/jeddah-airport."
    },
    {
        "query": "jeddah airport to makkah",
        "intent": "Commercial (Airport -> Pilgrim transfer)",
        "impressions": 142, # On landing guide blog; overall route intent: 720+
        "clicks": 2,
        "ctr": "1.41%",
        "position": 14.7,
        "current_url": "/blog/what-to-do-after-landing-at-jeddah-airport",
        "recommended_url": "/routes/jeddah-to-makkah",
        "is_correct": "Incorrect (Informational blog post ranking for commercial route query)",
        "action": "OPTIMIZE EXISTING PAGE & INTERNAL LINK",
        "reason": "The blog post captures the query on page 2. Adding a high-visibility CTA to /routes/jeddah-to-makkah on the blog will funnel traffic and lift the primary route page."
    },
    {
        "query": "jeddah private taxi",
        "intent": "Commercial (Private chauffeur & city taxi)",
        "impressions": 845,
        "clicks": 2,
        "ctr": "0.24%",
        "position": 37.8,
        "current_url": "/taxi-service/jeddah",
        "recommended_url": "/taxi-service/jeddah",
        "is_correct": "Correct URL, but low ranking",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "The city taxi landing page is the correct owner. Strengthening its metadata, key takeaways, and internal links from Jeddah airport and route pages will boost rankings."
    },
    {
        "query": "makkah ziyarat taxi",
        "intent": "Commercial (Pilgrim site tour package)",
        "impressions": 92,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 84.0,
        "current_url": "/ziyarat-taxi-service",
        "recommended_url": "/ziyarat-taxi-service",
        "is_correct": "Correct URL, trapped on Page 9",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "/ziyarat-taxi-service is the correct canonical page. It needs clear H2 headings for Makkah Ziyarat vs Madinah Ziyarat and explicit tour details to climb from page 9."
    },
    {
        "query": "umrah airport transfer",
        "intent": "Commercial (Pilgrim airport transfer)",
        "impressions": 44,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 89.4,
        "current_url": "/blog/jeddah-airport-arrival-guide-umrah",
        "recommended_url": "/umrah-taxi-service",
        "is_correct": "Incorrect (Blog ranking instead of service landing page)",
        "action": "OPTIMIZE EXISTING PAGE & INTERNAL LINK",
        "reason": "/umrah-taxi-service should own generic Umrah transport terms. Interlink from Umrah arrival blogs to /umrah-taxi-service and /routes/jeddah-to-makkah."
    },
    {
        "query": "med airport taxi",
        "intent": "Commercial (Madinah airport transfer)",
        "impressions": 20,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 34.1,
        "current_url": "/blog/first-time-visiting-madinah-guide",
        "recommended_url": "/airport-transfer/madinah-airport",
        "is_correct": "Incorrect (Blog ranking on Page 4)",
        "action": "OPTIMIZE EXISTING PAGE & INTERNAL LINK",
        "reason": "/airport-transfer/madinah-airport is the canonical page. Adding clear Haram hotel drop-off info and interlinking from Madinah guide blogs will elevate it to Page 1."
    },
    {
        "query": "dammam to bahrain",
        "intent": "Commercial (Cross-border transfer)",
        "impressions": 31,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 48.9,
        "current_url": "/blog/dammam-to-bahrain-travel-guide",
        "recommended_url": "/routes/dammam-to-bahrain",
        "is_correct": "Incorrect (Blog guide ranking instead of route page)",
        "action": "OPTIMIZE EXISTING PAGE & INTERNAL LINK",
        "reason": "/routes/dammam-to-bahrain is the commercial owner. The travel guide blog should have a prominent quote widget linking to /routes/dammam-to-bahrain."
    },
    {
        "query": "khobar to bahrain taxi",
        "intent": "Commercial (Cross-border taxi)",
        "impressions": 18,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 52.5,
        "current_url": "/routes/khobar-to-bahrain",
        "recommended_url": "/routes/khobar-to-bahrain",
        "is_correct": "Correct URL",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "Page exists in data/routes.ts. Upgrade metadata and link from Eastern Province city pages."
    },
    {
        "query": "dammam to riyadh taxi",
        "intent": "Commercial (Intercity transfer)",
        "impressions": 16,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 59.5,
        "current_url": "/routes/dammam-to-riyadh",
        "recommended_url": "/routes/dammam-to-riyadh",
        "is_correct": "Correct URL",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "/routes/dammam-to-riyadh exists in data/routes.ts. Enhance route takeaways and interlink from Dammam and Riyadh city pages."
    },
    {
        "query": "airport transfer riyadh",
        "intent": "Commercial (Capital city airport transfer)",
        "impressions": 15,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 77.5,
        "current_url": "/airport-transfer/riyadh-airport",
        "recommended_url": "/airport-transfer/riyadh-airport",
        "is_correct": "Correct URL, trapped on Page 8",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "/airport-transfer/riyadh-airport is the canonical page. Enhance terminal guidance (T1-T5) and metadata to boost rank."
    },
    {
        "query": "abha airport transportation",
        "intent": "Commercial (Regional airport transfer)",
        "impressions": 38,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 39.5,
        "current_url": "/airport-transfer/abha-airport",
        "recommended_url": "/airport-transfer/abha-airport",
        "is_correct": "Correct URL, Page 4 Quick Win",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "/airport-transfer/abha-airport ranks on Page 4. Improving metadata and FAQs will quickly push it onto Page 1-2."
    },
    {
        "query": "doha to al khobar",
        "intent": "Commercial (Cross-border transfer)",
        "impressions": 6,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 10.3,
        "current_url": "/routes/doha-to-al-khobar",
        "recommended_url": "/routes/doha-to-al-khobar",
        "is_correct": "Correct URL, Page 2 Quick Win",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "Ranking at position 10.3! Strengthening metadata and FAQ will push this commercial route onto Page 1."
    },
    {
        "query": "riyadh to jubail distance",
        "intent": "Informational -> Commercial (Distance & route inquiry)",
        "impressions": 11,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 9.5,
        "current_url": "/routes/riyadh-to-jubail",
        "recommended_url": "/routes/riyadh-to-jubail",
        "is_correct": "Correct URL, Page 1 Quick Win",
        "action": "OPTIMIZE EXISTING PAGE",
        "reason": "Currently ranking position 9.5! The route page in data/routes.ts contains distance (480 km) and duration (4h 45m). Ensure metadata highlights these facts."
    },
    {
        "query": "madinah to yanbu distance",
        "intent": "Informational -> Commercial (Distance inquiry)",
        "impressions": 22,
        "clicks": 0,
        "ctr": "0.00%",
        "position": 9.1,
        "current_url": "/blog/madinah-to-yanbu-transfer-guide",
        "recommended_url": "/blog/madinah-to-yanbu-transfer-guide",
        "is_correct": "Correct URL for informational query, Page 1 ranking!",
        "action": "INTERNAL LINK & ADD CONVERSION CTA",
        "reason": "Ranks #9.1 on Page 1! Add a clear 'Book Madinah to Yanbu Private Taxi' CTA widget inside the blog post to capture transfer leads."
    }
]

with open(mapping_file, 'w', encoding='utf-8') as f:
    f.write("# Search Console Query → URL Ownership Mapping\n\n")
    f.write("Based on Search Console performance export (`Queries.csv` & `Pages.csv`).\n\n")
    f.write("| Search Query | Intent | GSC Imp | GSC Pos | Current Ranking URL | Recommended Primary URL | Status | Action | Rationale |\n")
    f.write("|--------------|--------|---------|---------|---------------------|-------------------------|--------|--------|----------|\n")
    for m in mappings:
        f.write(f"| `{m['query']}` | {m['intent']} | {m['impressions']} | {m['position']} | `{m['current_url']}` | `{m['recommended_url']}` | {m['is_correct']} | **{m['action']}** | {m['reason']} |\n")

print("Created docs/query-url-mapping.md successfully.")
