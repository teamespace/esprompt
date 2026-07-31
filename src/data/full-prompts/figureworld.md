Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: cycles per hero slide (#01040B near-black, #6FB877 green, #E87FB0 pink observed), default text: #FFFDE2 (warm off-white)
- Fonts: body/display "Manrope"
- Buttons: bg rgba(255,255,255,0.18) translucent, text #FFFDE2, radius 9999px (full pill)
- Container: single-viewport "coming soon" style teaser hero for a limited-edition collectibles/action-figure brand ("FigureWorld", displayed wordmark shows "TOONHUB" in the browser tab title — treat "FigureWorld" as the on-page brand name per the logo lockup)
- Animation library: not detected — full-bleed color/figure carousel with prev/next controls

=== SECTION 1: Nav ===
Content (copy verbatim): utility line "Limited drops, unlimited obsession. Shop →" · centered "FigureWorld" logo lockup · button "Shop Drops" · hamburger "Menu" toggle

=== SECTION 2: Hero carousel (single full-bleed viewport) ===
Content (copy verbatim): oversized display wordmark "COLLECTIBLES" spanning the full width, overlapped by a large centered product-figurine hero shot; "SCROLL DOWN" label with down-arrow icon in the bottom-right; prev/next circular arrow buttons bottom-left
Carousel slides observed (background color + featured figurine swap together):
- Slide 1 — near-black background — black hoodie figurine with star patches and blue sneaker laces
- Slide 2 — pink background — orange astronaut-hoodie figurine (large, foreground) plus a smaller dark hoodie figurine (bottom-left)
Assets: Logo.png, hero/asset-1.png, hero/asset-2.png, hero/asset-3.png, hero/asset-4.png

=== INTERACTIONS (global) ===
- Hero is a full-bleed carousel: background color and featured figurine swap together on next/prev click (not on a timer, per observed behavior).
- "Shop Drops" / hamburger menu click updates the URL hash (`#products`, `#about`) but no additional on-page sections were observed to render — this appears to be a single-screen teaser/launch page; verify against the live site whether deeper "About" and "Products" views exist behind routing not reachable via standard scroll or wheel events.

=== ASSETS (confirmed URLs) ===
Base: https://figure-world.netlify.app/
| File | URL | Used for |
|---|---|---|
| Logo.png | .../Logo.png | Nav "FigureWorld" wordmark |
| hero/asset-1.png | .../hero/asset-1.png | Hero carousel figurine (slide 1) |
| hero/asset-2.png | .../hero/asset-2.png | Hero carousel figurine (slide 2) |
| hero/asset-3.png | .../hero/asset-3.png | Hero carousel figurine (slide 3) |
| hero/asset-4.png | .../hero/asset-4.png | Hero carousel figurine (slide 4) |

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- This page is unusually sparse (single-viewport teaser) — do not invent additional sections (pricing, testimonials, footer, etc.) that were not observed on the live site.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
