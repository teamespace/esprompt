Rebuild this hero section 1:1 according to the following exact specifications (extracted from the matching Full LP prompt in full-prompts/proxim.md).

OVERALL ART DIRECTION: warm, editorial, premium — NOT pure black. Alternate warm dark / cream sections; the hero sits on the warm dark background.

Color palette:
- Warm near-black (hero background): #1c1a17
- Pure white text on dark: #ffffff
- Warm gray for secondary text on dark: #a8a197
- Accent burnt orange: #e06830 (primary accent), #c85a1a (hover)

Typography:
- Headlines: high-contrast editorial serif display (Playfair Display or comparable), loaded from Google Fonts. Second/emphasized line set in SERIF ITALIC.
- Body/UI: clean grotesque sans-serif (Inter or comparable), loaded from Google Fonts.
- Eyebrows: small, uppercase, wide letter-spacing, preceded by a short horizontal rule line, in warm gray or orange.

TOP ANNOUNCEMENT BAR: thin full-width bar above the nav on #1c1a17, small centered text: a small orange dot (●) then "v2.4 released — RTK mode now reduces token usage by up to 60%" then a middot "·" then a link "Read the changelog →" in burnt orange.

NAVIGATION: sticky top nav on the warm dark background. Left: wordmark "proxim" in sans-serif medium weight with a small superscript "AI" in orange. Center (desktop): nav links in muted white — "Providers" with a "▾" caret, "Docs", "GitHub ↗", "Changelog", "Blog". Right: text link "Log in" and a primary solid pill button "Get Started Free" (cream/white background, dark text, fully rounded, subtle hover lift). Mobile: collapse center links into a hamburger panel. Thin hairline divider under the nav.

HERO (warm dark background #1c1a17): Left-aligned editorial hero. Top: an eyebrow consisting of a short horizontal orange rule line "——" followed by "OPEN-SOURCE AI ROUTER" in small uppercase wide-tracked warm gray. Then a huge two-line serif display headline, very large and tight: line one "Never stop coding." in upright serif, line two "Never hit a limit." in serif ITALIC (the italic line is the signature). Below, a subhead paragraph in warm gray, max width ~560px: "Connect every AI coding tool to 60+ providers through one local endpoint. Auto-fallback, quota tracking, format translation — MIT license, forever free." Then a button row: primary pill "Get Started Free" with a right arrow "→" (cream/white background, dark text), and a secondary ghost button "View on GitHub" with a small github/star/check icon (transparent background, thin warm border, white text, subtle hover).

To the right on desktop (stacked below on mobile), the hero product visual: a looping background video already hosted at https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Proxim-ai/Hero/hero.mp4 — render as `<video src="https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Proxim-ai/Hero/hero.mp4" autoplay muted loop playsinline poster="/assets/mockup-hero.png">`, in a softly rounded container with a subtle warm border/shadow and a faint orange glow. If the builder cannot use video, fall back to `<img src="/assets/mockup-hero.png" alt="Proxim dashboard showing live quota routing across AI providers">`. Background of the hero carries a very subtle warm radial gradient (cream-to-transparent or faint orange bloom), airy and premium. Keep lots of breathing room.

"USED WITH" LOGO STRIP (sits directly below the hero, can stay on the dark background): small uppercase wide-tracked label "USED WITH" in muted gray, then a single horizontal row of tool wordmarks rendered as muted monochrome text: "Cursor", "Claude Code", "Codex", "Cline", "Copilot", "Antigravity". Space evenly, slightly reduced opacity, gentle hover raising opacity. Wrap gracefully on mobile.

COMPONENT & STYLING DETAILS relevant to the hero:
- Buttons: primary = fully rounded pill, cream/white background, dark warm text (#1c1a17), medium weight, comfortable padding, subtle shadow, small lift + slightly darker bg on hover; include the "→" where specified. Secondary/ghost = transparent, 1px warm border, white text, hover raises border/opacity.
- Icons: inline SVG (stroke-based, ~1.5px stroke), small, in orange or current text color. No icon-font dependencies.
- Motion: fade-up on scroll for the headline with slight stagger; gentle hover transitions (150–250ms). Respect prefers-reduced-motion.
- Accessibility: sufficient color contrast, semantic landmarks, alt text on the poster image, visible focus rings, aria labels on icon-only buttons.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the exact hero video URL as-is; for every other image use the local placeholder path given — do not invent or hotlink other external URLs.
- This is the hero section (+ announcement bar, nav, and logo strip) only — do not build out positioning, stats, features, testimonials, or footer.
