Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #FFFFFF (transparent body, effectively white), default text: #111111
- Fonts: body "DM Sans", display heading "The Foriene Serif" (fallback Georgia serif)
- Type scale: h2 (section headings) 48px, weight 400, serif
- Container: full-bleed sections, editorial watch-brand layout mixing promo tiles, carousels, and product grids
- Animation library: not detected

=== SECTION 1: Nav / meta strip ===
Content (copy verbatim): "Menu" / "Close" toggle · "altr" wordmark · "Shop" · "Cart(0)" · quick links to /watches, /straps, /about, /collabs
- Decorative vertical meta ribbon (design-credits style, likely footer or off-canvas menu): "Designed by: ALTR" · "Typography: DM Sans" · "Material: Swedish steel" · "Privacy Policy" · "Terms & Conditions"

=== SECTION 2: Category quick filters ===
Content (copy verbatim, 4 pill buttons): "ALTR Classic", "ALTR Sport", "ALTR Petite", "ALTR Chrono"

=== SECTION 3: Promo split banner (2 cards) ===
Content (copy verbatim):
- Card 1 — tag "Limited Release" — "The Final Edition | 25% off" — "ALTR x Sea Shepherd leaves forever on Sept 1st. The last batch of our ocean-inspired collab." — $149 (was $199) — button "Secure Yours" — links to /watches/sea-shepherd
- Card 2 — tag "New Arrival" — "ALTR Chrono" — "Stopwatch function, 100m water resistance, and a dial that reads clean at a glance." — $189 — button "Claim 10% Off" — links to /watches/chrono
Assets: promo-left.png, promo-right.png (assets/section-4-promo-split/)

=== SECTION 4: Flagship showcase — The Twelve ===
Content (copy verbatim): H2 "The Twelve" — "Discover The Twelve's shimmering 3D dial, 12-sided bezel, and integrated bracelet." — link "Shop from $1,210" (→ /watches/altr-1)
Assets: jam-1.png (assets/section-5-flagship-showcase/)

=== SECTION 5: Collection scroller ===
Header: H2 "A Collection For Every Chapter" + scroll-left/scroll-right buttons
Content (copy verbatim, 6 collections each "Shop Now"): "Daylight", "Traveler", "Coastal", "Summer", "Nightfall", "Heritage"

=== SECTION 6: Feature showcase — new generation ===
Content (copy verbatim): tag "New" — H2 "Everything's Changed Nothing's Changed" — "Discover the new second-generation Sealandar Automatic & Sealandar GMT." — link "Shop from $1,150"
Trust row: "Designed in Stockholm" · "2-year warranty" · "Free returns" · "0+ sold" (animated counter placeholder)
Assets: image-1.png (assets/section-7-feature-showcase/)

=== SECTION 7: Fresh From The Studio (new arrivals, 4 cards) ===
Header: H2 "Fresh From The Studio"
Content (copy verbatim, each tagged "New"):
- "Arktis Watch" — "Large model, automatic movement, steel, leather strap" — $320
- "Sundial Watch" — "Medium model, automatic movement, yellow gold, steel" — $280
- "Vind Watch" — "Large model, automatic movement, steel, mesh strap" — $290
- "Sten Watch" — "Small model, quartz movement, steel, leather strap" — $360
Link: "See All New Watches"
Assets: image-1.png (assets/section-9-new-arrivals/)

=== SECTION 8: About / Bestsellers promo tiles (2-up) ===
Content (copy verbatim): "About Us — Read Our Story" (→ /about) · "Bestsellers — Explore Our Best-Selling Watches — Claim 10% Off" (→ /watches)

=== SECTION 9: Bestsellers grid (4 cards) ===
Header: "All-Time Favorites" eyebrow, H2 "Built To Last A Lifetime"
Content (copy verbatim): "Arktis — Large model, automatic movement, steel, leather strap — $320" · "Sundial — Medium model, automatic movement, yellow gold, steel — $280" · "Transit — Medium model, automatic movement, steel, bracelet — $450" · "Harbor — Small model, quartz movement, yellow gold, leather — $380"
Link: "Explore All Bestsellers"

=== SECTION 10: Notes From The Workshop (journal, 3 posts) ===
Header: H2 "Notes From The Workshop"
Content (copy verbatim):
- "Design — How We Design Watches That Outlast Trends — A look inside our Stockholm studio and the process behind every ALTR timepiece." — "Read More"
- "Guides — Leather, Steel, NATO, Or Mesh: Find The Right Strap For Every Occasion — From premium leather to lightweight mesh, we break down every option we make." — "Read More"
- "Materials — Meet The Makers Behind Swedish Steel — Why we source our steel from the same region that has shaped watchmaking for decades." — "Read More"

=== SECTION 11: Footer ===
Content (copy verbatim):
- "altr" wordmark
- "Watches": All watches, Daylight, Traveler, Coastal, Summer 2026
- "Straps": All straps, Leather, NATO, Mesh
- "About": Our story, Collabs, Sustainability, Journal
- "Help": Shipping, Returns, Warranty, Contact
- Payment icons: Visa, Mastercard, PayPal, Apple Pay
- "Designed in Stockholm © 2026 ALTR"

=== ASSETS (confirmed URLs) ===
Base: https://altr-byes.pages.dev/assets/
| File | URL | Used for |
|---|---|---|
| menu/shop.png | .../assets/menu/shop.png | Off-canvas menu preview image |
| section-4-promo-split/promo-left.png | .../section-4-promo-split/promo-left.png | Promo card — "The Final Edition" |
| section-4-promo-split/promo-right.png | .../section-4-promo-split/promo-right.png | Promo card — "ALTR Chrono" |
| section-5-flagship-showcase/jam-1.png | .../section-5-flagship-showcase/jam-1.png | "The Twelve" flagship shot |
| section-7-feature-showcase/image-1.png | .../section-7-feature-showcase/image-1.png | "Everything's Changed" feature shot |
| section-9-new-arrivals/image-1.png | .../section-9-new-arrivals/image-1.png | "Arktis Watch" (new-arrivals card 1) |
Not confirmed: the Sundial/Vind/Sten watch images and the bestsellers-grid images. The folder-per-section naming pattern (e.g. `section-9-new-arrivals/image-2.png`, `image-3.png`...) is a strong hint but wasn't directly observed for cards 2–4 — verify against the live page before hotlinking.

=== INTERACTIONS (global) ===
- Collection scroller (Section 5) has explicit scroll-left/scroll-right button controls.
- "0+ sold" counter in Section 6 is styled as a live/animated count — implement as a count-up-on-scroll-into-view if a real total is supplied.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
