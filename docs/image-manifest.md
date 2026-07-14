# Image Manifest — Saudi Private Transfers

This manifest lists recommended imagery for each page type so a human editor can
source **appropriately licensed** photos and drop them in with **no code
changes**. The gallery infrastructure is already built:

- Component: `components/sections/ImageGallery.tsx` — semantic `<figure>` /
  `<figcaption>`, `next/image` with **lazy loading**, **responsive `sizes`**, and
  explicit **width/height** (prevents layout shift). Renders nothing until images
  are supplied.
- To publish images on a page, add an `images: GalleryImage[]` array to the page's
  data object (`data/airports.ts` / `data/airport-guides.ts`,
  `data/borders.ts` / `data/border-guides.ts`, etc.). Fields:
  `{ src, alt, caption?, width, height }`.
- Put files under `public/images/<type>/…` and convert to **WebP** (or AVIF)
  before adding. Recommended long edge ≈ 1600px; the gallery renders at 4:3.

## Licensing rules (must follow)

- **Only** use images you are licensed to use: Unsplash, Pexels, Pixabay
  (permissive licenses), Wikimedia Commons (check the specific file's license and
  attribution), or official Saudi tourism/government media with permission.
- **Never** use Google Images results or any image without a clear, compatible
  license. Record the source URL, author, and license for each file you add.
- Where a license requires attribution (e.g. some Wikimedia/CC-BY files), add the
  credit to the `caption`.

## Filename & alt conventions

- Filename: `public/images/<type>/<page-slug>-<subject>.webp`
  (kebab-case, descriptive, no spaces).
- ALT: describe the subject specifically and naturally; no keyword stuffing.
- Caption: a short, useful sentence (may include attribution).

---

## Homepage (`/`) — 12–20 images

| # | Required image | Suggested search keyword | Recommended source | Suggested filename | ALT text | Caption |
|---|----------------|--------------------------|--------------------|--------------------|----------|---------|
| 1 | Riyadh skyline at dusk | "Riyadh skyline Kingdom Centre" | Unsplash / Pexels | `home-riyadh-skyline.webp` | Riyadh skyline at dusk with the Kingdom Centre tower | Riyadh, the capital and a key transfer hub |
| 2 | Makkah Grand Mosque | "Masjid al-Haram Makkah" | Wikimedia Commons (check license) | `home-makkah-haram.webp` | Pilgrims at the Grand Mosque in Makkah | Umrah and Hajj transfers to Makkah |
| 3 | Prophet's Mosque, Madinah | "Al-Masjid an-Nabawi Madinah" | Wikimedia Commons (check license) | `home-madinah-mosque.webp` | The Prophet's Mosque in Madinah at night | Ziyarat and hotel transfers in Madinah |
| 4 | Private transfer sedan | "black luxury sedan chauffeur" | Unsplash / Pexels | `home-sedan.webp` | Chauffeur-driven private transfer sedan | Comfortable, private door-to-door rides |
| 5 | Family with luggage at airport | "family airport arrivals luggage" | Pexels | `home-family-airport.webp` | Family arriving at an airport with luggage | Meet-and-greet airport pickups |
| 6 | AlUla Hegra tombs | "Hegra Madain Salih AlUla" | Wikimedia Commons / official tourism | `home-alula-hegra.webp` | Nabataean tombs at Hegra in AlUla | Heritage travel to AlUla |
| 7 | Jeddah Corniche / floating mosque | "Jeddah Corniche floating mosque" | Unsplash / Pexels | `home-jeddah-corniche.webp` | The Jeddah Corniche and Red Sea waterfront | Coastal transfers in Jeddah |
| 8 | Abha green highlands | "Abha Asir mountains green" | Pexels / official tourism | `home-abha-highlands.webp` | Misty green highlands around Abha in Asir | Cool-climate highland transfers |
| 9 | Desert highway | "Saudi desert highway road" | Unsplash / Pexels | `home-desert-highway.webp` | Open highway crossing the Saudi desert | Intercity and long-distance routes |
| 10 | SUV / van for groups | "white SUV family vehicle" | Unsplash / Pexels | `home-suv.webp` | Spacious SUV for group and family transfers | Vehicles sized to your group |
| 11 | Diriyah At-Turaif | "Diriyah At-Turaif mud brick" | Wikimedia Commons / official tourism | `home-diriyah.webp` | The historic mud-brick district of At-Turaif in Diriyah | Sightseeing transfers around Riyadh |
| 12 | King Fahd Causeway | "King Fahd Causeway bridge" | Wikimedia Commons (check license) | `home-causeway.webp` | The King Fahd Causeway linking Saudi Arabia and Bahrain | Cross-border transfers to Bahrain |

*(Add 4–8 more from the city/attraction rows below to reach 20 if desired.)*

---

## Airport pages (`/airport-transfer/<slug>`) — 8–15 images each

Per airport, source a **terminal/exterior**, an **arrivals/meet-and-greet**, a
**vehicle**, and 1–2 **destination/city** shots. Files go under
`public/images/airports/`.

### Riyadh — King Khalid (RUH) `riyadh-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Airport terminal exterior | "King Khalid International Airport terminal" | Wikimedia Commons (check license) | `riyadh-airport-terminal.webp` | Terminal building at King Khalid International Airport | Arrivals at RUH, Riyadh |
| Arrivals hall meet & greet | "airport arrivals name board driver" | Pexels | `riyadh-airport-meet-greet.webp` | Driver waiting in arrivals with a name board | Meet-and-greet pickup at RUH |
| Riyadh skyline / KAFD | "King Abdullah Financial District Riyadh" | Unsplash | `riyadh-airport-kafd.webp` | The KAFD skyline in Riyadh | Transfers into central Riyadh |

### Jeddah — King Abdulaziz (JED) `jeddah-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Airport terminal | "King Abdulaziz International Airport Terminal 1" | Wikimedia Commons (check license) | `jeddah-airport-terminal.webp` | Terminal 1 at King Abdulaziz International Airport | Arrivals at JED, Jeddah |
| Road to Makkah | "highway to Makkah sign" | Wikimedia Commons (check license) | `jeddah-airport-makkah-road.webp` | Highway signage on the route to Makkah | JED to Makkah transfers |
| Jeddah Corniche | "Jeddah Corniche waterfront" | Unsplash / Pexels | `jeddah-airport-corniche.webp` | The Jeddah Corniche waterfront | City transfers in Jeddah |

### Madinah — Prince Mohammad (MED) `madinah-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Airport terminal | "Prince Mohammad bin Abdulaziz Airport Madinah" | Wikimedia Commons (check license) | `madinah-airport-terminal.webp` | Terminal at Prince Mohammad bin Abdulaziz Airport | Arrivals at MED, Madinah |
| Prophet's Mosque exterior | "Al-Masjid an-Nabawi exterior daytime" | Wikimedia Commons (check license) | `madinah-airport-mosque.webp` | The Prophet's Mosque in Madinah | Transfers to hotels near the Haram |
| Quba Mosque | "Quba Mosque Madinah" | Wikimedia Commons (check license) | `madinah-airport-quba.webp` | Quba Mosque in Madinah | Ziyarat trips by private car |

### Dammam — King Fahd (DMM) `dammam-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Airport terminal | "King Fahd International Airport Dammam" | Wikimedia Commons (check license) | `dammam-airport-terminal.webp` | Terminal at King Fahd International Airport | Arrivals at DMM, Eastern Province |
| Khobar Corniche | "Khobar Corniche waterfront" | Unsplash / Pexels | `dammam-airport-khobar.webp` | The Khobar Corniche on the Gulf | Transfers to Khobar and Dhahran |
| King Fahd Causeway | "King Fahd Causeway" | Wikimedia Commons (check license) | `dammam-airport-causeway.webp` | The King Fahd Causeway to Bahrain | Onward transfers to Bahrain |

### Taif — Regional (TIF) `taif-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Al Hada mountain road | "Al Hada road switchbacks Taif" | Wikimedia Commons / official tourism | `taif-airport-al-hada.webp` | Switchbacks on the Al Hada mountain road | The scenic descent toward Makkah |
| Taif rose farm | "Taif roses farm harvest" | Pexels / official tourism | `taif-airport-roses.webp` | Rose harvest at a Taif farm in spring | Taif's famous rose farms |
| Taif cable car | "Taif cable car teleferic" | Wikimedia Commons (check license) | `taif-airport-cable-car.webp` | The Al Hada cable car above Taif | Highland sightseeing near Taif |

### Abha — International (AHB) `abha-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Asir green mountains | "Asir mountains Abha green terraces" | Pexels / official tourism | `abha-airport-mountains.webp` | Green terraced mountains around Abha | The cool Asir highlands |
| Al Soudah viewpoint | "Al Soudah Abha viewpoint" | Wikimedia Commons / official tourism | `abha-airport-al-soudah.webp` | Mountain viewpoint at Al Soudah near Jabal Sawda | Highland resorts near Abha |
| Habala hanging village | "Habala hanging village Asir" | Wikimedia Commons (check license) | `abha-airport-habala.webp` | The Habala hanging village in Asir | Day trips around Asir |

### Tabuk — Regional (TUU) `tabuk-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Tabuk Castle | "Tabuk Castle fort" | Wikimedia Commons (check license) | `tabuk-airport-castle.webp` | The historic Tabuk Castle | Landmarks around Tabuk |
| Hejaz Railway station | "Hejaz Railway station Tabuk" | Wikimedia Commons (check license) | `tabuk-airport-hejaz-railway.webp` | The historic Hejaz Railway station in Tabuk | Heritage sights in the northwest |
| NEOM / Red Sea coast | "Tabuk Red Sea coast NEOM" | Official tourism | `tabuk-airport-coast.webp` | The Red Sea coast near Tabuk | Transfers toward NEOM and the coast |

### Yanbu — (YNB) `yanbu-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Yanbu corniche | "Yanbu corniche Red Sea" | Unsplash / official tourism | `yanbu-airport-corniche.webp` | The Yanbu corniche on the Red Sea | Coastal resort transfers |
| Red Sea diving | "Red Sea diving coral Saudi" | Unsplash / Pexels | `yanbu-airport-diving.webp` | Coral reef diving in the Red Sea | Dive-trip transfers from Yanbu |
| Road to Madinah | "desert road Madinah" | Unsplash / Pexels | `yanbu-airport-madinah-road.webp` | The inland road toward Madinah | Transfers from Yanbu to Madinah |

### AlUla — International (ULH) `alula-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Hegra tombs | "Hegra Madain Salih tombs AlUla" | Wikimedia Commons / official tourism | `alula-airport-hegra.webp` | Nabataean rock-cut tombs at Hegra | The UNESCO site of Hegra |
| AlUla Old Town | "AlUla Old Town mudbrick" | Wikimedia Commons / official tourism | `alula-airport-old-town.webp` | The restored AlUla Old Town | Sightseeing around AlUla |
| Maraya / Elephant Rock | "Elephant Rock AlUla" | Wikimedia Commons / official tourism | `alula-airport-elephant-rock.webp` | The Elephant Rock formation in AlUla | Iconic AlUla landscapes |

### Jazan — (GIZ) `jazan-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Farasan Islands | "Farasan Islands Jazan beach" | Wikimedia Commons / official tourism | `jazan-airport-farasan.webp` | Turquoise waters of the Farasan Islands | Transfers to the Farasan ferry |
| Fifa Mountains terraces | "Fifa Mountains Jazan terraces" | Wikimedia Commons / official tourism | `jazan-airport-fifa.webp` | Terraced slopes of the Fifa Mountains | Highland trips inland from Jazan |
| Jazan corniche | "Jazan corniche waterfront" | Official tourism | `jazan-airport-corniche.webp` | The Jazan corniche on the Red Sea | Coastal transfers in Jazan |

### Hail — Regional (HAS) `hail-airport`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| A'arif Fort | "A'arif Fort Hail" | Wikimedia Commons (check license) | `hail-airport-aarif-fort.webp` | The historic A'arif Fort overlooking Hail | Landmarks around Hail |
| Jubbah rock art | "Jubbah rock art petroglyphs Hail" | Wikimedia Commons / official tourism | `hail-airport-jubbah.webp` | Ancient petroglyphs at the Jubbah rock-art site | UNESCO rock art near Hail |
| Nafud desert dunes | "Nafud desert red dunes" | Unsplash / Pexels | `hail-airport-nafud.webp` | Red dunes of the Nafud desert near Hail | Desert landscapes of the north |

---

## Border pages (`/border-transfers/<slug>`) — 8–15 images each

Files go under `public/images/borders/`.

### Bahrain — King Fahd Causeway `bahrain-causeway`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| King Fahd Causeway | "King Fahd Causeway aerial" | Wikimedia Commons (check license) | `bahrain-causeway-bridge.webp` | The King Fahd Causeway spanning the Gulf | The 25 km causeway to Bahrain |
| Passport Island | "King Fahd Causeway Passport Island" | Wikimedia Commons (check license) | `bahrain-causeway-passport-island.webp` | The border facilities on Passport Island | Immigration at the halfway point |
| Manama skyline | "Manama Bahrain skyline" | Unsplash / Pexels | `bahrain-causeway-manama.webp` | The Manama skyline in Bahrain | Door-to-door transfers into Bahrain |

### Qatar — Salwa Crossing `qatar-border`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Salwa desert road | "Salwa Saudi Qatar border road" | Wikimedia Commons (check license) | `qatar-border-salwa-road.webp` | The desert road toward the Salwa crossing | The route to the Qatar border |
| Doha skyline | "Doha Qatar skyline" | Unsplash / Pexels | `qatar-border-doha.webp` | The Doha skyline in Qatar | Onward travel into Qatar |

### UAE — Al Batha Crossing `uae-border`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Al Batha desert route | "Saudi UAE border desert highway" | Unsplash / Pexels | `uae-border-al-batha-road.webp` | The desert highway toward the Al Batha crossing | The route to the UAE border |
| Abu Dhabi skyline | "Abu Dhabi skyline" | Unsplash / Pexels | `uae-border-abu-dhabi.webp` | The Abu Dhabi skyline in the UAE | Onward travel to Abu Dhabi and Dubai |

### Kuwait — Al Khafji Crossing `kuwait-border`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Northern Gulf coast road | "northern Gulf coast Saudi highway" | Unsplash / Pexels | `kuwait-border-coast-road.webp` | The coastal highway toward the Al Khafji crossing | The route to the Kuwait border |
| Kuwait City skyline | "Kuwait City skyline towers" | Unsplash / Pexels | `kuwait-border-kuwait-city.webp` | The Kuwait City skyline | Onward travel into Kuwait |

### Jordan — Al Haditha / Al Durra `jordan-border`
| Required image | Keyword | Source | Filename | ALT | Caption |
|---|---|---|---|---|---|
| Northern desert route | "northern Saudi desert road Tabuk" | Unsplash / Pexels | `jordan-border-desert-road.webp` | The northern desert road toward the Jordan crossing | The route to the Jordan border |
| Petra / Aqaba | "Petra Jordan treasury" | Unsplash / Pexels | `jordan-border-petra.webp` | The Treasury at Petra in Jordan | Onward travel into Jordan |

---

## City pages (`/taxi-service/<city>`, `/cities/<city>`) — 10–20 images

For each city, source a **skyline/landmark**, 3–6 **top attractions**, a
**hotel/district** shot, and a **vehicle**. Reuse the airport/homepage rows above
for shared subjects. Files under `public/images/cities/<city>/`.

## Route pages (`/routes/<slug>`) — 6–10 images

Per route, source an **origin landmark**, a **destination landmark**, and a
**road/scenery** shot between them. Files under `public/images/routes/`.

---

## How to publish (editor checklist)

1. Confirm the license permits web use; note source URL, author, license.
2. Crop/resize to ≈1600px long edge; export **WebP** (quality ~80).
3. Save to the `public/images/...` path from the table.
4. Add a `GalleryImage` entry `{ src, alt, caption?, width, height }` to the
   page's data object.
5. Rebuild — the gallery appears automatically with lazy loading and correct
   dimensions. No component changes needed.
