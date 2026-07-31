Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #F5F5F5, default text: #0A0A0A
- Fonts: body "Space Grotesk", display heading "Anton" (fallback Impact) — bold condensed poster-style
- Type scale: h1 112px, weight 700 (Anton), no uppercase transform in CSS but visually rendered caps-style by the typeface
- Buttons: transparent bg, text #F5F5F5 (light-on-dark hero context), radius 0
- Asset host: https://ecommerce-landing.pages.dev/generated-assets/vox/
- Animation library: not detected — countdown timer + size-selector radio groups are the main interactive elements

=== SECTION 1: Drop ticker ===
Content (copy verbatim, repeats 3x in DOM = looping marquee): "DROP / 07 — SAME-DAY SHIPPING NL — LIMITED RUN —"

=== SECTION 2: Nav ===
Content (copy verbatim): "VOX" home link · links "Men", "Women", "Archive", "Friends" · search button · cart button ("0 items")

=== SECTION 3: Hero ===
Content (copy verbatim):
- Photo credit label: "Northshore Mutants"
- H1: "DROP / 07" — 112px, weight 700, Anton
- Body: "Deadstock cuts for the ones who move first. Amsterdam energy, worldwide shipping."
- Button: "Shop the Drop"
Assets: "Three young men in streetwear standing on a rainy urban street" — hero-fox.png

=== SECTION 4: Drop countdown ===
Content (copy verbatim): "DROP CLOSES IN" — 4 units "Days / Hrs / Mins / Secs" (live countdown timer)

=== SECTION 5: Drop concept ===
Content (copy verbatim): "Northshore Mutants is a love letter to the kids who treat the city like a runway and the pavement like a stage." — link "Explore Lookbook"

=== SECTION 6: Shop categories (3 cards) ===
Content (copy verbatim): "Menswear" (vox-cat-menswear.png — "Male model in black athletic bomber jacket") · "Womenswear" (vox-cat-womenswear.png — "Female model in black oversized parka") · "Accessories" (vox-cat-accessories.png — "Streetwear accessories flat lay")

=== SECTION 7: Featured products (grid, 8 cards, each with size selector) ===
Header: H2 "DROP / 07"
Content (copy verbatim, each card: name, price, size radio group S/M/L/XL, "Add to Cart" button):
- "VOX BOMBER — BLACK" — €189 — vox-product-1.png
- "STENCIL HOODIE" — €98 — vox-product-2.png
- "TAG UTILITY PANT" — €124 — vox-product-3.png
- "DROP TEE / 07" — €48 — vox-product-4.png
- "VOX BEANIE" — €36 — vox-product-5.png
- "CARGO SHORT" — €72
- "MUTANT CROSSBODY BAG" — €58
- "TACTICAL VEST / 07" — €145

=== SECTION 8: Lookbook (image gallery, 5+ editorial photos) ===
Header: H2 "Lookbook"
Content: "Editorial shot of a model in an urban stairwell" · "Editorial portrait against a concrete wall" · "Group streetwear editorial on a city bridge" · "Streetwear crew walking a neon-lit street" · "Solo editorial portrait in a concrete corridor"

=== SECTION 9: Friends (per get_page_text sample) ===
Content (copy verbatim): "JADE — Skater / photographer. Shoots every VOX lookbook on 35mm film and still owes us a roll." (a "Friends" contributor bio card, matches nav link "Friends")

=== ASSETS (confirmed URLs) ===
Base: https://ecommerce-landing.pages.dev/generated-assets/vox/
| File | URL | Used for |
|---|---|---|
| hero-fox.png | .../hero-fox.png | Hero — "Northshore Mutants" street photo |
| vox-cat-menswear.png | .../vox-cat-menswear.png | Shop category — Menswear |
| vox-cat-womenswear.png | .../vox-cat-womenswear.png | Shop category — Womenswear |
| vox-cat-accessories.png | .../vox-cat-accessories.png | Shop category — Accessories |
| vox-product-1.png | .../vox-product-1.png | "VOX Bomber — Black" |
| vox-product-2.png | .../vox-product-2.png | "Stencil Hoodie" |
| vox-product-3.png | .../vox-product-3.png | "Tag Utility Pant" |
| vox-product-4.png | .../vox-product-4.png | "Drop Tee / 07" |
| vox-product-5.png | .../vox-product-5.png | "VOX Beanie" |
Not confirmed: images for "Cargo Short", "Mutant Crossbody Bag", "Tactical Vest / 07", and the 5 Lookbook editorial photos. Given the sibling ARLO prompt's naming convention on this same host, `vox-product-6.png`/`7`/`8` and `vox-look-N.png` are likely, but were not directly observed — verify against the live page before hotlinking.

=== INTERACTIONS (global) ===
- Drop ticker is a continuous marquee, 3x repeated in DOM — build as seamless infinite loop, linear.
- Countdown timer updates live (Days/Hrs/Mins/Secs) — standard JS `setInterval` countdown to a fixed drop-close date.
- Each product card has a size radio group (S/M/L/XL) that must be selected before/alongside "Add to Cart", consistent with the sibling ARLO prompt's product-drawer size-picker pattern.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise — base path `https://ecommerce-landing.pages.dev/generated-assets/vox/`.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
