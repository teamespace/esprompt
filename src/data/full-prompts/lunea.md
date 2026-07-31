Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #FFFFFF, default text: #171717
- Fonts: body "Inter", display heading a custom serif/script font named "rumelaz" (fallback to a similar elegant serif if unavailable)
- Type scale: h1 88px, weight 400
- Buttons: transparent bg, text #1B1B1B, radius 0
- Animation library: not detected

=== SECTION 1: Nav ===
Content (copy verbatim): "LUNEA" wordmark (x2, logo + text) · links "Products", "About", "Cart" · button "Shop Now"

=== SECTION 2: Hero ===
Content (copy verbatim):
- H1: "Your skin deserves more than promises." — 88px, weight 400
- Body: "We unravel nature's complex biology with clean ingredients, advanced chemistry, and AI for skincare that truly works."
- Link: "Explore our collection"

=== SECTION 3: The Collection (product grid, 8 cards) ===
Header: eyebrow "The Collection", H2 "Crafted for every layer of your routine", body "From first cleanse to final layer — each formula plays its part.", link "Shop All"
Content (copy verbatim, each card: badge(s), category tag, name, price w/ strikethrough original, star rating, review count, "Quick View" button):
- Best Seller · -21% OFF · Face • Hydrating • Toner · "Cica & Mugwort Essence Toner" · $38 (was $48) · 4.8★ (42)
- Best Seller · -19% OFF · Face • Brightening • Serum · "Brightening Facial Serum" · $52 (was $64) · 4.6★ (28)
- -20% OFF · Face • Moisturizing • Cream · "Hyaluronic Moisturizer" · $45 (was $56) · 4.5★ (35)
- -24% OFF · Face • Purifying • Cleanser · "Tea Tree Cleanser" · $32 (was $42) · 4.7★ (19)
- Best Seller · -19% OFF · Body • Nourishing • Serum · "Sandalwood Dream Serum" · $58 (was $72) · 4.9★ (56)
- -19% OFF · Body • Regenerating • Oil · "Rosehip Night Oil" · $42 (was $52) · 4.4★ (23)
- New · -20% OFF · Body • Exfoliating • Scrub · "Coffee Body Scrub" · $35 (was $44) · 4.3★ (14)
- -20% OFF · Body • Firming • Balm · "Shea Butter Body Balm" · $48 (was $60) · 4.7★ (31)
Assets base: /assets/products/product-1.png … product-4.png (repeat pattern across cards)

=== SECTION 4: Browse by category (looping row) ===
Header: eyebrow "Browse", H2 "Find your skin's match"
Content (copy verbatim, repeats 3x in DOM = infinite scroll row): "Face" (with body copy "Cleansers, serums, and moisturizers for a radiant complexion" on first instance), "Body", "Hair", "Mother & Baby", "Lifestyle", "Gift"

=== SECTION 5: About ===
Content (copy verbatim):
- Eyebrow: "About"
- H2: "We didn't set out to make skincare. We set out to make skincare that actually works."
- 4 pillars: "Clean Ingredients — Every formula starts with plant-derived actives and avoids harsh chemicals your skin doesn't need." · "Clinically Tested — Each product is evaluated by dermatologists to ensure safety and visible results for all skin types." · "Sustainable Care — From recyclable packaging to responsibly sourced botanicals, we design with the planet in mind." · "Gentle & Kind — No synthetic fragrances, no dyes, no cruelty. Just formulas that respect sensitive skin."

=== SECTION 6: Our Promise (6 feature tiles) ===
Header: "LUNEA / Our Promise" eyebrow, H2 "Formulated with intention"
Content (copy verbatim): "Natural Ingredients — Pure botanical extracts and cold-pressed oils from sustainable farms." · "Dermatologist Tested — Rigorously tested for safety and effectiveness on all skin types." · "Science-Backed — Developed with cosmetic scientists using the latest skincare research." · "Sustainable Practices — Eco-friendly packaging and carbon-neutral shipping across all products." · "Deep Hydration — Advanced moisture-locking technology for lasting hydration." · "Gentle on Skin — Free from harsh chemicals and safe for sensitive skin."

=== SECTION 7: Signature Collection spotlight ===
Content (copy verbatim):
- Eyebrow: "Signature Collection" · H2: "The travel set"
- Body: "Your skincare wardrobe in a carry-on. These three essentials keep your routine intact wherever you go."
- Product: Best Seller · -22% OFF · Face • Serum • Trio · "Quintessential Serum Trio" · $98 (was $125) · 4.6★ (42) · button "Add To Cart"

=== SECTION 8: Ingredients breakdown ===
Header: "Ingredients" eyebrow, H2 "Nature meets formulation"
Content (copy verbatim, 6 actives with description):
- "Safou Oil" — "A unique African fruit oil rich in vitamins C and E, omega fatty acids, and antioxidants. Deeply nourishes, restores elasticity, and protects against environmental stressors."
- "Vitamin C" — "A potent antioxidant that brightens skin tone, boosts collagen production, and protects against free radical damage. Essential for a radiant, even complexion."
- "Hyaluronic Acid" — "Naturally occurring molecule that holds up to 1,000 times its weight in water. Delivers intense, lasting hydration and visibly plumps fine lines."
- "Vitamin E" — "A powerful lipid-soluble antioxidant that strengthens the skin barrier, soothes inflammation, and enhances moisture retention for healthier-looking skin."
- "Green Tea" — "Rich in polyphenols and catechins that calm irritation, reduce redness, and provide powerful antioxidant protection against environmental damage."
- "Aloe Vera" — "Nature's soothing remedy. Hydrates, calms irritation, and supports skin repair with its unique blend of vitamins, minerals, and amino acids."

=== SECTION 9: Testimonial ===
Content (copy verbatim): "Testimonials — Trusted by those who know" — "\"My skin has never looked better. The Brightening Facial Serum evened out my complexion within two weeks and the glow is unreal.\"" — Sarah Chen, Beauty Editor

=== SECTION 10: Closing CTA ===
Content (copy verbatim): eyebrow "Shop Now", H2 "Your best skin awaits", body "Every bottle is a step toward the kind of skin that doesn't need to be hidden. Start your ritual today.", button "Shop Now"

=== SECTION 11: Footer ===
Content (copy verbatim):
- "Customer Care": Contact Us, FAQs, Shipping & Returns, Track Order
- "Company": Our Story, Careers, Sustainability, Ingredients, Press
- "Legal & Privacy": Privacy Policy, Cookie Policy, Terms of Service, Website Terms of Use, Compliance
- "Subscribe To Our Newsletter" — "Sign up for LUNEA emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections."
- Social: Instagram, TikTok, LinkedIn
- "LUNEA" · "© LUNEA - ALL RIGHTS RESERVED"

=== INTERACTIONS (global) ===
- Category row (Section 4) repeats 3x in the DOM — build as an infinite horizontal auto-scroll/marquee.
- Product cards show a "Quick View" affordance on hover (implies a quick-view modal pattern).

=== ASSETS (confirmed URLs) ===
Base: https://lunea-byes.pages.dev/assets/products/
| File | URL | Used for |
|---|---|---|
| product-1.png | .../product-1.png | "Cica & Mugwort Essence Toner" |
| product-2.png | .../product-2.png | "Brightening Facial Serum" (DOM reuses this file for a second card too) |
| product-3.png | .../product-3.png | "Hyaluronic Moisturizer" (DOM reuses this file for a second card too) |
| product-4.png | .../product-4.png | "Tea Tree Cleanser" |
Only 4 unique product images were confirmed, covering the first 6 of the 8 Collection cards (the site's own DOM repeats product-2.png and product-3.png). The remaining cards, the category-row images, and the ingredient/testimonial photography weren't reached before the capture truncated — the real site almost certainly has `product-5.png` through `product-8.png` on the same path; re-fetch the fully-scrolled live page to confirm before hotlinking.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
