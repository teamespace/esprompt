Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #000000 (pure black), default text: #FFFFFF
- Fonts: display heading "Orbitron" (uppercase, wide letter-spacing), UI/labels "JetBrains Mono" (monospace)
- Type scale: h1 130px/110.5px line-height, weight 500, uppercase, letter-spacing 5.2px; button/label 11px, weight 600, uppercase, letter-spacing 1.98px
- Container: full-bleed, single 100vh viewport (no scroll sections below the fold)
- Animation library: none detected — custom canvas/WebGL (a `<canvas>` element is present and drives an interactive cursor-reveal effect)

=== SECTION 1: Fixed nav / page counter (~72px) ===
Layout & structure:
- Fixed top bar, transparent background, horizontal row, padding 24px 32px
Content (copy verbatim):
- Page counter: "01" / "05" (current/total indicator, top-left and top-right style pagination — suggests this hero is slide 1 of a 5-panel deck)

=== SECTION 2: Hero — interactive reveal ===
Layout & structure:
- Full 100vh black canvas stage, centered content, vertical stack
Content (copy verbatim):
- Wordmark/H1: "VRIS·R1" — 130px, weight 500, Orbitron, uppercase, letter-spacing 5.2px. NOTE: the heading's own CSS color is transparent (rgba(0,0,0,0)) — the letterforms are not painted directly; they act as a mask/register point for the canvas reveal effect layered behind/through them.
- Eyebrow copy (from page text, exact order): "REVEAL · Q4 / 2026", "ELECTRIC SUV", "410 MI · 2.9 S · 18 MIN" (0-60 time and charge time stat line)
- Button "Reserve": bg #FFFFFF, text #000000, radius 0 (hard square corners), padding 16px 28px, font JetBrains Mono 11px, weight 600, uppercase, letter-spacing 1.98px
Assets:
- `covered.png` — https://simplvivian.netlify.app/covered.png — "before" state image (car obscured/silhouette)
- `reveal.png` — https://simplvivian.netlify.app/reveal.png — "after" state image (car fully lit/revealed)
- A `<canvas>` element (WebGL context confirmed) sits over the hero and is the mechanism that blends between the two images
Motion:
- Cursor-driven reveal: as the pointer moves across the hero, the canvas paints/masks a circular (or freeform) window from `covered.png` to `reveal.png` under the cursor — a "scratch to reveal the car" interaction, not a scroll animation. Exact easing/radius not captured; implement as a radial mask following pointer position with a soft-edged brush (~150–250px radius) and a short trailing smoothing (lerp) so the reveal feels fluid rather than snapping to the cursor.
- No scroll-triggered animation — page height equals viewport height (single screen).

=== INTERACTIONS (global) ===
- Hover: "Reserve" button — no captured hover delta; use a standard subtle scale/opacity shift (transform: scale(1.02) or opacity 0.85) on hover, 0.2s ease.
- No marquee, no keyframe loops detected — the only motion is the pointer-driven canvas reveal described above.

=== ASSETS (confirmed URLs) ===
| File | URL | Used for |
|---|---|---|
| covered.png | https://simplvivian.netlify.app/covered.png | Canvas reveal — "before" state |
| reveal.png | https://simplvivian.netlify.app/reveal.png | Canvas reveal — "after" state |
Only 2 image assets exist on this single-viewport page — both confirmed by direct capture.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
