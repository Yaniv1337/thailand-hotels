# Thailand Hotels

Static Hebrew hotel guide. The website consists of `index.html` and its background image.

## Local development

With Node.js installed, run:

```sh
node dev-server.cjs
```

Open http://127.0.0.1:3000. Changes to the HTML or background image automatically reload the page. Stop the server with Ctrl+C.

The development server is local only. The live-reload script is injected into local responses and is not saved in the website HTML.

## GitHub

This working folder currently has no Git metadata or configured remote. Connect it to the correct repository before committing or pushing changes; preserve the existing repository history.

## Deployment

The website is static and does not require a build step. The development server is not a production server. Vercel deployment and repository connection have not yet been configured or verified.

## Burasari photo

`burasari-phuket.jpg` comes from the hotel group’s official page: https://www.burasarigroup.com/burasari-phuket/

Source image: https://www.burasarigroup.com/system/wp-content/uploads/2016/05/burasari-phuket-img-1.jpg

Retrieved on 2026-09-23. Currently published on the official site; capture date and post-renovation status are not verified.

## Sleep With Me Phuket

Added on 2026-09-23 using https://www.sleepwithmehotels.com/ and its accommodation, individual room, facilities and contact pages. The five room categories exclude duplicate rate plans. Maximum occupancy, connecting rooms, Google score and exact walking distances are not independently verified.

Local photo `sleep-with-me-phuket.jpg`: https://homesweb.staah.net/imagelibrary/1729046757_10570_SLEEPWITHMEHOTELdesignhotelpatong2.jpg (linked on the official homepage). Currently published photo; capture date is not stated.

Sleep With Me verification update (2026-09-23): Maps Place ID ChIJC7cizaQ6UDARIaoXtGwH5MA verified by opening Google Maps. Google score 4.0 from 2,445 reviews; hotel class 4 stars. Total 258 rooms including suites corroborated by official website, Agoda and Expedia. These supersede the earlier unverified score note.

## Sleep With Me walking distances (Google Maps, 2026-09-23)

- 7-Eleven Jungceylon — 160 m / 2 min — https://www.google.com/maps/dir/?api=1&origin=SLEEP+WITH+ME+HOTEL+Patong&origin_place_id=ChIJC7cizaQ6UDARIaoXtGwH5MA&destination=7-Eleven&travelmode=walking&destination_place_id=ChIJo1xNniI7UDARIbDTxORgH7I
- Patong Beach mapped beach marker — 1.0 km / 14 min — https://www.google.com/maps/dir/?api=1&origin=SLEEP+WITH+ME+HOTEL+Patong&origin_place_id=ChIJC7cizaQ6UDARIaoXtGwH5MA&destination=%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%87%20%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%B2%E0%B8%94&travelmode=walking
- Bangla Road — 450 m / 6 min — https://www.google.com/maps/dir/?api=1&origin=SLEEP+WITH+ME+HOTEL+Patong&origin_place_id=ChIJC7cizaQ6UDARIaoXtGwH5MA&destination=Bangla%20Road%20Patong&travelmode=walking
- Jungceylon — 250 m / 4 min — https://www.google.com/maps/dir/?api=1&origin=SLEEP+WITH+ME+HOTEL+Patong&origin_place_id=ChIJC7cizaQ6UDARIaoXtGwH5MA&destination=Jungceylon%20Phuket&travelmode=walking
- Central Patong — 270 m / 4 min — https://www.google.com/maps/dir/?api=1&origin=SLEEP+WITH+ME+HOTEL+Patong&origin_place_id=ChIJC7cizaQ6UDARIaoXtGwH5MA&destination=Central%20Patong&travelmode=walking
- Chabad Phuket — 1.6 km / 22 min — https://www.google.com/maps/dir/?api=1&origin=SLEEP+WITH+ME+HOTEL+Patong&origin_place_id=ChIJC7cizaQ6UDARIaoXtGwH5MA&destination=%D7%91%D7%99%D7%AA%20%D7%97%D7%91%D7%93%20%D7%A4%D7%95%D7%A7%D7%98%209%206%20%E0%B8%96%E0%B8%99%E0%B8%99%20%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8%20Pa%20Tong%20Phuket&travelmode=walking

Distances are walking routes, not straight-line measurements. Beach route ends at Google’s beach marker and is not asserted to be the shortest beach access. Source links are recorded here; the hotel panel follows the Movenpick layout without a facilities-source footer.

## Room data provenance retained from hotel panels

fourPointsDetail: Marriott מפרסם ישירות את התפוסה של Superior Triple, One-Bedroom Suite, Pool Access Suite ו־Family Suite. מידות חדרי Superior/Deluxe/Pool Access וגודל Ocean View Suite הוצלבו מול מלאי הזמנות עדכני של Booking.com.

burasariDetail: כל גדלי החדרים, Sleeps, סוגי המיטות והמאפיינים בטבלה נלקחו מעמודי החדרים הרשמיים של Burasari. כאשר האתר כותב Extra Bed Available, שמרתי את הניסוח ולא הסקתי לבד תפוסה מקסימלית.


## Clover, Banyan Tree and SAii (2026-09-23)

Added in the existing six-section hotel format. Clover: Patong; Banyan Tree and SAii: Bang Tao. Seven Patong cards and two Bang Tao cards; search return navigation preserves the area.

Official room evidence: hotel-room-research.json (7 Clover and 15 SAii categories). Banyan's 11 villa categories: https://www.banyantree.com/thailand/phuket/accommodation/villas and https://www.banyantree.com/thailand/phuket/accommodation/doublepool-villas . Occupancy displayed as published, with no inferred additional children. SAii two-bedroom villa has an unusual official occupancy statement; marked for confirmation instead of inventing a correction.

Counts: Clover 213 (Agoda, Trip.com); Banyan 217 private-pool villas (current official homepage, supersedes older Laguna sheets); SAii 255 (official trade factsheet https://www.saiihotels.com/th/wp-content/uploads/2025/10/SAii-Laguna-Phuket-Trade-Factsheet.pdf). Clover opened 2017; Banyan 1994. SAii brand from 2021; December 2024 renovation completion confirmed by https://www.shotelsresorts.com/saii-hotels-and-resorts-relaunches/ .

Google Maps evidence: hotel-map-research.json and hotel-extra-research.json. Clover 4.7 / 4,199; Banyan 4.8 / 4,594; SAii 4.7 (count unavailable, intentionally omitted). Exact place URLs retained. Route evidence: hotel-route-research.json and hotel-route-extra.json. The initial English Patong Beach query resolved to the town and was rejected; Thai beach marker gives 270m/4min. Banyan beach distance is not inferred from the RAVA road route because an internal beach exit exists.

Facilities: https://patongphuket.hotelclover.com/experiences/hotel-features/ ; https://www.banyantree.com/thailand/phuket/facilities ; https://www.saiihotels.com/laguna-phuket/things-to-do/ .

Current official-site images (capture dates unknown):
- clover-patong.webp: https://patongphuket.hotelclover.com/wp-content/uploads/sites/8/2026/05/2-Hotel-Clover-Patong.webp
- banyan-tree-phuket.jpg: https://www.lagunaphuket.com/wp-content/uploads/2022/05/btp.jpg — currently displayed on official Laguna Stay page. Banyan's own image server returned 403, so used the resort group's official image.
- saii-laguna-phuket.webp: https://www.saiihotels.com/wp-content/uploads/2025/05/02-SAii-Laguna-Phuket-Lagoon-Meets-the-Ocean.webp

Verification: Chromium smoke check passed for all 3 new cards and images, all 33 room rows, six matching section headings, keyboard and search-button navigation, correct area on back navigation, and no page JavaScript errors. Desktop screenshots inspected.

7-Eleven update (2026-09-23): added verified walking routes to all three new hotels. Clover to 4 Hatpatong Road: 600 m / 8 min. Banyan Tree to Laguna Street (19705): 2.5 km / 34 min. SAii to the same branch: 1.3 km / 18 min. Exact route links included in the environment rows. Evidence: seven-eleven-research.json, seven-eleven-routes.json, seven-eleven-clover-selected.json. These are verified nearby branches, not a claim of exhaustive nearest-store coverage.
