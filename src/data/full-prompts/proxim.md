Build a complete, production-ready single-page landing website in React and Tailwind CSS for a product called Proxim (proximAI) — an open-source AI router whose tagline is "One Endpoint. Every AI." It connects every AI coding tool to 60+ providers through one local endpoint, with auto-fallback, quota tracking, and format translation. MIT-licensed and forever free. The audience is developers. Set the document title to "Proxim — One Endpoint. Every AI." Build it as a single page, fully responsive (mobile, tablet, desktop), with clean, well-structured, accessible, production-quality code. Use semantic HTML, smooth scroll behavior, and subtle, tasteful motion. Do not use any UI kit beyond Tailwind; build all components yourself.

OVERALL ART DIRECTION

The aesthetic is warm, editorial, and premium — NOT pure black. Think a sophisticated fashion-editorial magazine crossed with a developer tool. Use generous whitespace, confident typography, and restrained color. Alternate between warm dark sections and light cream sections.

Color palette (define these as Tailwind theme tokens / CSS variables and use them consistently):
- Warm near-black (primary dark background): #1c1a17
- Cream backgrounds (light sections): #f7f4ee (primary), #ede9e1 (secondary/panels), #fdf1eb (warm tint panels)
- Pure white text on dark: #ffffff
- Warm grays for body/secondary text: #7a7468, #a8a197 (muted on dark), #3d3a33 (dark text on light)
- Accent burnt orange: #e06830 (primary accent), #c85a1a (hover/darker), #d97706 (amber variant for small highlights)

Use the orange sparingly and deliberately — for the announcement dot, links, small rules, icon accents, focus states, and one primary button treatment. Never flood a section with orange.

Typography:
- Headlines: a high-contrast editorial serif display face (use Playfair Display, or a comparable elegant serif, loaded from Google Fonts). The signature look is large serif headlines where the second line or an emphasized phrase is set in SERIF ITALIC. Use tight line-height and generous size for display headings.
- Body and UI: a clean grotesque/neo-grotesque sans-serif (use Inter, or comparable, from Google Fonts). Use for all paragraphs, labels, nav, buttons, captions.
- Eyebrows/labels: small, uppercase, wide letter-spacing (tracking), often preceded by a short horizontal rule line, frequently in the warm gray or orange.

Load both font families via Google Fonts in the head.

IMAGERY RULES (important): The hero background video is already hosted — use this exact URL: https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Proxim-ai/Hero/hero.mp4 (autoplay, muted, loop, playsinline, poster /assets/mockup-hero.png). For every OTHER image, do NOT invent or hotlink external URLs; use a LOCAL placeholder path so the buyer can swap in their own hosted assets. Use these exact distinct paths: /assets/mockup-hero.png (hero poster fallback), /assets/mockup-terminal.png (code/terminal in the advantage section), /assets/mockup-image.png (generic — reuse for blog thumbnails, or mockup-blog-1.png, mockup-blog-2.png, mockup-blog-3.png if you prefer distinct ones). Give every image meaningful alt text. Render tool/brand logos in the "Used with" strip as styled text wordmarks (monochrome, muted), NOT as fetched logo images.

GLOBAL LAYOUT

Constrain content to a max width around 1200px, centered, with comfortable horizontal padding (about 24px on mobile, more on desktop). Use a vertical rhythm with large section padding (roughly 96–140px top/bottom on desktop, less on mobile). Add subtle entrance animations on scroll (fade-up, short duration, slight stagger) using IntersectionObserver or a lightweight approach — keep them quick and understated, respect prefers-reduced-motion.

Now build these sections in order:

1) TOP ANNOUNCEMENT BAR

A thin full-width bar above the nav on the warm near-black background (#1c1a17), small text, centered. Content: a small orange dot (●) then "v2.4 released — RTK mode now reduces token usage by up to 60%" then a middot "·" then a link "Read the changelog →" rendered in burnt orange. Subtle, low height, slightly muted white text.

2) NAVIGATION

Sticky top nav on the warm dark background, content row constrained to max width. Left: the wordmark "proxim" in the sans-serif, medium weight, with a small superscript "AI" set in orange. Center (desktop): nav links in muted white — "Providers" with a small "▾" caret indicating a dropdown, "Docs", "GitHub ↗", "Changelog", "Blog". Right: a text link "Log in" and a primary solid pill button "Get Started Free" (cream/white background, dark text, fully rounded, subtle hover lift). On mobile, collapse the center links into a hamburger menu that opens a simple panel. Add a thin hairline divider under the nav.

3) HERO (warm dark background #1c1a17)

Left-aligned editorial hero. Top: an eyebrow consisting of a short horizontal orange rule line "——" followed by the text "OPEN-SOURCE AI ROUTER" in small uppercase wide-tracked warm gray. Then a huge two-line serif display headline, very large and tight: line one "Never stop coding." in upright serif, line two "Never hit a limit." in serif ITALIC (the italic line is the signature). Below, a subhead paragraph in warm gray, max width about 560px: "Connect every AI coding tool to 60+ providers through one local endpoint. Auto-fallback, quota tracking, format translation — MIT license, forever free." Then a button row: primary pill "Get Started Free" with a right arrow "→" (cream/white background, dark text), and a secondary ghost button "View on GitHub" with a small github/star/check icon (transparent background, thin warm border, white text, subtle hover).

To the right on desktop (stacked below on mobile), place the hero product visual: a looping background video already hosted at https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Proxim-ai/Hero/hero.mp4 — render it as <video src="https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Proxim-ai/Hero/hero.mp4" autoplay muted loop playsinline poster="/assets/mockup-hero.png">, presented in a softly rounded container with a subtle warm border/shadow and a faint orange glow. If the builder cannot use video, fall back to <img src="/assets/mockup-hero.png" alt="Proxim dashboard showing live quota routing across AI providers">. Background of the hero should carry a very subtle warm radial gradient (cream-to-transparent or faint orange bloom), airy and premium. Keep lots of breathing room.

4) "USED WITH" LOGO STRIP (can sit on dark or a transition band)

A small uppercase, wide-tracked label "USED WITH" in muted gray, then a single horizontal row of tool wordmarks rendered as muted monochrome text in the sans-serif: "Cursor", "Claude Code", "Codex", "Cline", "Copilot", "Antigravity". Space them evenly, slightly reduced opacity, with a gentle hover that raises opacity. Wrap gracefully on mobile.

5) POSITIONING (light cream section #f7f4ee)

Switch to a cream background with dark warm text (#3d3a33). Eyebrow rule + small label if desired. Large serif H2: "Built for developers who refuse to slow down." with the asterisk "*" as a small orange superscript. Below, a single confident paragraph (max width ~720px): "Proxim analyzes your quota usage in real-time across 60+ AI providers to route requests with the intelligence that single-provider setups can't match. We help developers, teams, and power users code without interruption while keeping costs near zero. Expand your capacity without expanding your spend." Then a small footnote line in muted gray, smaller size: "*Not a wrapper. Purpose-built for AI-native development workflows."

6) STATS ROW (cream or warm panel)

A three-column row (stacks on mobile) of big stats. Each stat: a very large serif number with the unit, and a small sans caption beneath in muted gray. Stats:
- "60+" — caption "AI providers supported across all tiers"
- "13K" — caption "GitHub stars since January 2026"
- "$0" — caption "Cost to use, forever — MIT license"

Separate columns with thin vertical hairline dividers on desktop. Make the numbers feel editorial and large.

7) FEATURES (warm dark section #1c1a17)

Switch back to warm dark, with `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Proxim-ai/bg-feature.webp` as a full-bleed section background (cover, low opacity behind the dark panel). Eyebrow rule + label "CAPABILITIES" optional. Serif H2 in white: "Four ways we eliminate limits". Below, a responsive grid of four feature cards (2x2 on desktop, single column on mobile). Each card: a subtle warm border, slightly lighter dark panel background, generous padding, a small orange line-icon at top (use simple inline SVG icons — e.g. branching arrows, gauge, translate/braces, server/endpoint), a sans-serif bold title, and a 1–2 sentence description in muted gray. Use this copy:
- Title "Auto-fallback routing" — "When a provider rate-limits or stalls, Proxim instantly reroutes the request to the next-best endpoint. Your session never breaks — you just keep coding."
- Title "Real-time quota tracking" — "Watch usage across every connected provider as it happens. Proxim reads your remaining limits and routes around exhaustion before you hit a wall."
- Title "Format translation" — "Speak one API, reach them all. Proxim translates requests and responses between provider formats so any tool works with any model, no rewrites."
- Title "One local endpoint" — "Point every tool at a single localhost address. Zero-config, runs on your machine, nothing leaves your network without your say-so."

Add a subtle hover state on cards (slight border-orange or lift).

8) THE UNFAIR ADVANTAGE (light cream section)

Cream background again. Eyebrow rule + label. Large serif H2 (with an italic emphasized word): "The unfair advantage for AI-native development" — set the word "unfair" in serif italic for emphasis. Two-column layout on desktop (stacks on mobile): on one side a terminal/code mockup image <img src="/assets/mockup-terminal.png" alt="Proxim terminal showing requests routing across providers with live fallback"> in a rounded, bordered window-style container (optionally with faux macOS window dots in orange/gray); on the other side a short intro line plus a list of benefit bullets, each with a small orange check/arrow icon and a bold lead-in. Use this copy:

Intro: "Single-provider setups cap you at one company's limits. Proxim turns every account you have into one elastic pool."

Bullets:
- "Never rate-limited again — overflow routes to live capacity automatically."
- "Costs stay near zero — use free tiers across providers before anything paid."
- "Drop-in for any tool — Cursor, Claude Code, Codex, Cline and more, no config."
- "Fully local & open — MIT-licensed, audit every line, own your stack."

9) TESTIMONIALS (warm dark section #1c1a17)

Warm dark. Serif H2 in white: "Trusted by 13,000+ developers". A responsive 3-column grid (stacks on mobile) of testimonial cards. Each card: subtle warm border, dark panel, a short pull-quote in a slightly larger sans or serif, then a small row with the person's name (white, medium) and role (muted gray). Use these invented but realistic testimonials:
- Quote: "I haven't seen a rate-limit error in three months. Proxim just routes around them and I never notice." — Name "Maya Ellison", Role "Indie developer".
- Quote: "We dropped our AI spend by 70% and shipped faster. It's the first infra tool my whole team actually thanked me for." — Name "Devin Roy", Role "CTO, Hearthline".
- Quote: "One endpoint, every model, zero config. I pointed Cursor at it and forgot it existed — which is the highest praise I can give." — Name "Priya Nakamura", Role "Staff Engineer".

10) MISSION (cream or warm-tint panel #fdf1eb)

A focused, centered band. Large serif H2 (can wrap to two lines): "We're here to make unlimited AI coding a reality for every developer." Below, a short mission paragraph in warm gray, max width ~640px, centered: "Proxim exists because hitting a wall mid-thought is the enemy of good work. We're building the open routing layer that makes every provider feel like one — fast, local, and free for everyone who builds."

11) BLOG / COMMUNITY (light cream section #f7f4ee)

Cream background. Eyebrow rule + label "FROM THE BLOG" optional. Serif H2: "Latest from the developer community". A responsive 3-column grid (stacks on mobile) of article cards. Each card: a thumbnail image at top (rounded top corners) using /assets/mockup-blog-1.png, /assets/mockup-blog-2.png, /assets/mockup-blog-3.png with descriptive alt text; a small uppercase tag chip in orange; a serif or bold-sans title; a short excerpt in muted gray; and a subtle "Read more →" link. Use this content:
- Tag "GUIDE", Title "Routing across 60+ providers without losing your mind", Excerpt "A practical walkthrough of setting up fallback chains that keep your editor responsive under any load."
- Tag "RELEASE", Title "Inside RTK mode: cutting token usage by up to 60%", Excerpt "How our new request-token-kit reshapes payloads on the fly to stretch every free tier further."
- Tag "COMMUNITY", Title "How indie devs run agents all day for $0", Excerpt "Real setups from the community combining free tiers into a single, never-ending pool of capacity."

Add card hover (slight lift / thumbnail zoom).

12) FINAL CTA (warm panel — warm dark #1c1a17 or warm-tint #fdf1eb, choose for contrast)

A bold closing band. Large serif H2 (with an italic emphasized word): "Ready to never hit a *limit* again?" — set "limit" in serif italic. Optional one-line supporting sentence in muted gray: "Install in under a minute. MIT-licensed, forever free." Then a centered button row: primary pill "Get Started Free" with "→" and secondary ghost "View on GitHub". Make this section feel like a confident, premium close with generous padding.

13) FOOTER (warm near-black #1c1a17)

A multi-column footer. Left/top: the "proxim" wordmark (with orange superscript "AI") and a one-line tagline "One endpoint. Every AI." in muted gray, plus a small line "MIT-licensed · Forever free." Then link columns with headers and items (use plain text links in muted gray with hover to white):
- Product: Features, Providers, Changelog, Docs
- Resources: Documentation, Quickstart, API Reference, Status
- Community: GitHub, Discord, X / Twitter, Blog
- Legal: License (MIT), Privacy, Terms

Bottom row: a thin hairline divider, then small muted text "© 2026 Proxim. MIT-licensed. Built for developers who refuse to slow down." and optionally a couple of small social text links on the right.

COMPONENT & STYLING DETAILS

- Buttons: primary = fully rounded pill, cream/white background, dark warm text (#1c1a17), medium weight, comfortable padding, subtle shadow and a small lift + slightly darker bg on hover; include the "→" where specified. Secondary/ghost = transparent with a 1px warm border, white or dark text depending on section, hover raises border/opacity. On dark sections one primary may use the orange accent sparingly if it improves contrast — but prefer the cream pill as the signature primary.
- Cards/panels: rounded corners (about 16–20px), 1px hairline borders in a warm low-opacity tone, soft shadows on light sections, faint inner contrast on dark sections.
- Eyebrows: short rule line + uppercase wide-tracked label, consistent across sections.
- Icons: use inline SVG (stroke-based, ~1.5px stroke), small, in orange or current text color. No icon-font dependencies.
- Links: orange on hover or orange underline accents where appropriate; ensure visible focus rings for accessibility.
- Motion: fade-up on scroll for section headings and cards with slight stagger; gentle hover transitions (150–250ms). Respect prefers-reduced-motion by disabling non-essential motion.
- Accessibility: sufficient color contrast, semantic landmarks (header, nav, main, section, footer), alt text on all images, keyboard-focusable interactive elements, aria labels on icon-only buttons.

Deliver clean, organized, componentized React code (a sensible component per section) with a single Tailwind config carrying the custom colors and fonts, and ensure the page looks polished and complete at all breakpoints. Remember: use ONLY local placeholder asset paths (/assets/mockup-hero.png, /assets/mockup-terminal.png, /assets/mockup-blog-1.png, /assets/mockup-blog-2.png, /assets/mockup-blog-3.png, /assets/mockup-image.png, /assets/mockup-video.mp4) for every image and video — do not invent or link any external image URLs, so the buyer can drop in their own hosted assets.
