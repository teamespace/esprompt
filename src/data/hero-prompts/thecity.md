Rebuild this hero section 1:1 according to the following exact specifications (extracted from the matching Full LP prompt in full-prompts/thecity.md).

=== GLOBAL ===
- Page background: #F7F5F0 (warm off-white), default text: #14120E (near-black brown)
- Fonts: headings "Manrope" (light weight), body "Inter"
- Type scale: h1 130px/130px line-height, weight 300, letter-spacing -2px, color on hero #F0EBE0 (cream, sits over a dark photographic hero)
- Container: wide max-width, nav is fixed/transparent over the hero
- Animation library: not detected — a "Day/Night" toggle swaps the hero's atmosphere/imagery

=== SECTION: Fixed nav ===
Layout & structure: fixed, transparent background, horizontal row
Content (copy verbatim):
- Logo: "The City"
- Links: "About", "Properties", "Amenities", "Contact"
- Theme toggle button (Day/Night — see hero)
- Button "Book a Viewing": ghost/outline style, white text on dark hero

=== SECTION: Hero ===
Layout & structure: full-bleed photographic hero, dark overlay, content bottom-left/center, vertical stack
Content (copy verbatim):
- Eyebrow: "Premium Residences — Now Selling"
- Wordmark: "The City"
- Sub-label: "Apartments · Villas · Waterfront"
- "Scroll to Explore" indicator
- Nav row inside hero: "About" / "Properties" / "Amenities" / "Contact" + "Book a Viewing"
- Region label: "Residences at The City"
- H1: "Live Where Everything Begins." — 130px/130px, weight 300, letter-spacing -2px, color #F0EBE0
- Body: "Studios, apartments, and waterfront villas in one of the most anticipated addresses of the decade. Starting from AED 1.2M."
- Buttons: "View Properties" (primary), "Book a Viewing" (ghost)
- "Atmosphere" toggle: "Day" / "Night" buttons
- "Scroll" label
- Stat row (4 stats): "1.2M — Starting Price (AED)" · "3K+ — Residential Units" · "45+ — Amenities & Facilities" · "Q4 '27 — Handover Date"
Assets:
- Hero photographic background (city/tower render), swapped between a "Day" and "Night" version by the toggle

=== INTERACTIONS ===
- Day/Night toggle swaps the hero background image/overlay tone (light warm vs. dark blue-hour lighting) — instant or crossfade, exact timing not captured.

=== ASSETS (confirmed URLs) ===
- Hero background video — "Day" state: https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/The-city/Hero/hero-day.mp4
- Hero "Night" state: NOT AVAILABLE YET — no night asset published. Until it exists, drive the Night toggle with a CSS overlay (blue-hour tint + darker scrim) over the same day video.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- This is the hero section only — do not build out the about, properties, amenities, contact, or footer sections.
