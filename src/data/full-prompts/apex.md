Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #FFFFFF, default text: #1A1A1A
- Fonts: body "Inter Tight", display heading "Playfair Display" (serif — deliberate editorial/sport contrast against the sans body)
- Type scale: h1 80px, weight 400, serif
- Buttons: transparent bg, muted gray text, radius 0 (square/underline-style CTAs rather than filled pills)
- Currency: EUR (€) with locale/currency selector in top bar
- Animation library: not detected — marquee trust ticker + horizontal product carousels

=== SECTION 1: Top utility bar ===
Content (copy verbatim): "Free shipping from €49" · currency selector "EUR €" · language selector "EN"

=== SECTION 2: Nav ===
Content (copy verbatim): links "Gear", "About", "Stories" · centered wordmark "APEX" · links "Account", "Shopping Cart [0]"

=== SECTION 3: Hero ===
Content (copy verbatim):
- Badge: "Rated 4.9 by elite athletes"
- H1: "Performance Gear. Athlete Approved." — 80px, weight 400, Playfair Display
- Button: "Shop Collection"
- Floating product card overlay: "Footwear" tag, 4.9★, "Apex Aero Runner" — "Lightweight speed" — €159,99
Assets: "Performance Apparel" hero photo (Hero-D-FQbbO9.png)

=== SECTION 4: Value proposition band ===
Content (copy verbatim): "Built for performance. Backed by innovation. Our precision gear supports every phase of your training—making your workouts more effective, comfortable, and powerful."
3 CTAs: "Train — Shop Now" · "Compete — Shop Now" · "Recover — Shop Now"

=== SECTION 5: As Seen In (press bar) ===
Content (copy verbatim): H2 "As Seen In" — quote "\"A game-changer for athletic performance: durable, lightweight, and effortlessly fast.\"" — press logos: "Runner's World", "Sports Illustrated", "Men's Health", "GQ", "Outside"

=== SECTION 6: Product grid (5 cards) ===
Content (copy verbatim, category tag, price, name, one-line hook, "Buy Now" button):
- Footwear · €159,99 · "Apex Aero Runner" · "Lightweight breathability for maximum speed"
- Apparel · €59,99 · "Pro Training Jersey" · "Lightweight breathability"
- Footwear · €139,99 · "Endurance Sneakers" · "All-day comfort and support" — badge "Sold Out"
- Accessories · €89,99 · "Apex Pro Duffel" · "Spacious and durable"
- Accessories · €79,99 · "Apex Pro Shades" · "UV protection and glare reduction"

=== SECTION 7: Community band ===
Content (copy verbatim): badge "Rated 4.8 by over 500 athletes" — H2 "From athletes, for athletes." — body "Performance builds character. Discover training insights, share your milestones, and help us push the boundaries of athletic gear together." — button "Follow Us"
Video/momentum spotlight: label "Momentum", play icon, "Breaking Records" — "Marcus T. — Berlin"

=== SECTION 8: Athletic Science manifesto ===
Content (copy verbatim): H2 "Athletic Science" — "Peak performance isn't random, genetic, or out of reach—it's earned. Built on dedication, sweat, and trust. At APEX, we stand for innovation-driven development in sportswear: elite gear held to the highest standards—and developed from a true understanding of our athletes' needs." (key phrases emphasized: "Peak performance", "innovation-driven", "elite gear", "our athletes' needs")

=== SECTION 9: Developed by Pro Athletes & Trainers (team grid, 5) ===
Content (copy verbatim): H2 "Developed by Pro Athletes & Trainers" — body "APEX combines real-world athletic experience and biomechanical science through collaboration among international experts and competitors." — "Elena Rostova, Fitness Coach" · "Sarah Jenkins, Marathon Elite" · "Marcus Chen, Track Specialist" · "David Kim, Strength & Conditioning" · "James Wilson, Endurance Coach" — button "Meet The Team"

=== SECTION 10: Store Finder ===
Content (copy verbatim): H2 "Available at select sports retailers" — "Find APEX gear near you and experience athletic science first-hand—tested, trusted, and made for you." — button "Store Finder"

=== SECTION 11: Trust ticker (looping marquee) ===
Content (copy verbatim, repeats 5x in DOM): "Satisfaction Included · Climate-Neutral Shipping · 24/7 Customer Service · Free Shipping From €49"

=== SECTION 12: Blog (2 posts) ===
Content (copy verbatim): H2 "Bold perspectives. From elite athletes." — link "To The Blog" — "Training · 8 Oct 2025 · APEX in Runner's World: The Science of Stride" · "APEX Updates · 26 Sep 2025 · Retail Expansion: Why APEX Calls This Home"

=== SECTION 13: Footer ===
Content (copy verbatim): "The Formula For Your Mailbox" — email input + "Subscribe" — "AP / EX" mark — links "All Phases", "Discover APEX", "Follow Us", "Imprint", "Legal Matters", "Cancellation Policy", "Cancel Purchase" — "Your perfect Get Ready Drops routine? — Run AI Analysis Now" — Contact: "+49 (0)30 814 50 2390" (Mon–Fri 10:00–17:00), "support@apex.de", live chat (24/7) — "©APEX 2026"

=== ASSETS (confirmed URLs) ===
Base: https://apex-sport-ecommerce-landing.vercel.app/assets/ — some filenames contain spaces, URL-encode as %20
| File | URL | Used for |
|---|---|---|
| Hero-D-FQbbO9.png | .../assets/Hero-D-FQbbO9.png | Hero — "Performance Apparel" photo |
| p%20(6)-DvqkS8x5.png | .../assets/p%20(6)-DvqkS8x5.png | Floating hero product card — "Apex Aero Runner" |
| section2-BI9i90NM.png | .../assets/section2-BI9i90NM.png | Value-proposition band background |
| p%20(1)-Bi42GLMQ.png | .../assets/p%20(1)-Bi42GLMQ.png | Product grid card |
| p%20(2)-COvT3wNX.png | .../assets/p%20(2)-COvT3wNX.png | Product grid card |
Not confirmed: which exact product each remaining `p (N)` file maps to, the "As Seen In" press logos, the 5 team-member headshots, and the 2 blog thumbnails — re-fetch the fully-scrolled live page to map the rest before hotlinking.

=== INTERACTIONS (global) ===
- Trust ticker (Section 11) repeats 5x in DOM — build as seamless infinite horizontal marquee, linear.
- Product grid and "As Seen In" logos likely scroll/carousel on smaller viewports; exact breakpoint behavior not captured.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
