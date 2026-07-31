Build a complete, production-ready single-page landing website in React and Tailwind CSS for a product called Relay — a real-time backend and sync platform for developers, marketed with a playful sci-fi "starbase / mission-control" voice. The page must be a single responsive page, mobile-first and fully responsive up through large desktop, with clean semantic HTML, accessible markup, and premium polish. Output the full component code, ready to run.

GLOBAL SETUP
- Stack: React (functional components) + Tailwind CSS, single page. No backend. Keep all sections in one cohesive page with smooth scroll.
- Fonts: Load "Inter" (display + body, weights 400/500/600/700/800) and "JetBrains Mono" (weights 400/500/600) from Google Fonts. Use Inter for all headlines and body copy. Use JetBrains Mono for stats, labels, telemetry numbers, code, and small uppercase eyebrow tags.
- Color tokens (define in Tailwind config or as CSS variables):
  - --space-black: #0a0a14 (hero / dark sections background)
  - --space-panel: #11111d (raised dark cards)
  - --space-border: #232336 (hairline borders on dark)
  - --light-bg: #fafafa (light section background)
  - --light-panel: #ffffff (light cards)
  - --light-border: #e6e6ea (hairline borders on light)
  - --ink: #0a0a14 (dark text on light)
  - --ink-muted: #5b5b6b (muted text on light)
  - --star-muted: #9a9ab0 (muted text on dark)
  - --phosphor: #4ade80 (single accent — phosphor green; use sparingly for highlights, glows, key numbers, button accents)
  - --phosphor-dim: rgba(74,222,128,0.12) (accent tint backgrounds / glows)
- The page flows DARK → LIGHT: Hero, Problem, Solution sections sit on the cosmic dark background; Developer Excellence and Testimonials sit on the light background; Final CTA returns to cinematic dark; Footer is dark. Make the dark→light transition tasteful (e.g., a soft gradient seam).
- Overall aesthetic: mostly monochrome (near-black, white, greys) with the phosphor green used as the only accent. Generous spacing, max content width ~1200px centered with horizontal padding (px-6 on mobile, px-8+ on desktop). Rounded corners (rounded-2xl on cards, rounded-full on pills/buttons). Subtle borders and soft shadows; on dark, use faint inner glows rather than heavy drop shadows.
- Motion: tasteful only. Fade-up on scroll for section headers and cards (small translateY + opacity, staggered). A gentle pulsing glow on the phosphor accent and on the hero visual. A slow, very subtle starfield/nebula drift in the hero background (CSS animation or layered radial-gradient dots — do NOT use heavy libraries; pure CSS/Tailwind). Respect prefers-reduced-motion by disabling non-essential animation.

ASSETS — IMPORTANT
- The hero background video is already hosted — use this exact URL: https://relay-379161153764.asia-southeast1.run.app/hero-background.mp4 (autoplay, muted, loop, playsinline, poster /assets/mockup-hero.png). For all OTHER assets, do NOT invent or fetch external URLs; use ONLY the local placeholder paths below so the buyer can swap in their own hosted assets:
  - Hero still / poster fallback: /assets/mockup-hero.png (a glowing console / telemetry panel)
  - Terminal/code mockup: /assets/mockup-terminal.png
  - Any additional image: /assets/mockup-image.png
- For icons, use inline SVGs you draw yourself (simple line/stroke icons, currentColor) — no icon-library CDN, no external URLs.

BACKGROUND TREATMENT (dark sections)
- Base fill --space-black. Layer a very subtle starfield using stacked CSS radial-gradients (tiny 1px white/low-opacity dots at scattered positions) plus one or two faint nebula blooms using large soft radial-gradients tinted with --phosphor-dim and a cool blue (rgba(80,120,255,0.08)). Keep it subtle — atmosphere, not noise. Add a faint 1px grid overlay (very low opacity lines) behind the hero only, to evoke a cockpit HUD. Animate the starfield with an extremely slow vertical drift.

NAV (sticky top, dark, translucent)
- A centered pill-shaped nav floating ~16px from top, max-width ~960px, mx-auto. Background rgba(17,17,29,0.6) with backdrop-blur, 1px --space-border, rounded-full, subtle shadow.
- Left: "Relay" wordmark in Inter, font-bold, text-white, with a small phosphor dot or 3-stroke signal glyph before it.
- Center (hidden on mobile, shown md+): nav links "How to", "Start", "Build", "Scale" — JetBrains Mono or Inter medium, text --star-muted, hover text-white with a subtle phosphor underline.
- Right: "Log in" — Inter medium, text --star-muted, hover white. On mobile, collapse center links into a simple hamburger that toggles a dropdown panel (dark, rounded-2xl) with the four links + Log in.

SECTION 1 — HERO (dark)
- Full-width dark cosmic background (starfield + nebula + faint HUD grid). Generous top padding to clear the floating nav (pt-36 to pt-44), bottom pad pb-24.
- Two-column layout on desktop (lg:grid-cols-2, gap-12), single column stacked on mobile (text first, visual below). Content left-aligned.
- Left column:
  - Eyebrow: small JetBrains Mono uppercase tag, letter-spaced, phosphor-tinted, reading "// REAL-TIME BACKEND · ONLINE" with a tiny pulsing phosphor dot before it, sitting inside a slim rounded-full pill with --space-border.
  - H1 (Inter, font-extrabold, tracking-tight, text-white, text-5xl on mobile up to text-7xl on lg, leading-[1.05]): "Relay lets you run everything in real-time". Consider giving "real-time" a subtle phosphor glow or gradient.
  - Subhead (Inter, text-lg to text-xl, text --star-muted, max-w-xl, mt-6): "Run data sync, functions, events, and user presence effortlessly across your entire stack."
  - CTA row (mt-8, flex gap-4, wrap): Primary button "Initialize Project →" — rounded-full, bg-white text --space-black, font-semibold, px-6 py-3, hover lifts slightly with a phosphor-tinted glow ring; the arrow nudges right on hover. Secondary ghost button "View Docs" — rounded-full, border --space-border, text-white, transparent bg, hover border-phosphor/text-phosphor.
  - Below CTAs (mt-10), a thin telemetry line in JetBrains Mono, text --star-muted, small: "SYSTEMS NOMINAL · LATENCY 4.2 ms · UPTIME 99.99%" with the phosphor dot.
- Right column (the cockpit visual):
  - A raised "mission-control" panel: rounded-2xl, bg --space-panel, 1px --space-border, faint phosphor inner glow, p-2. Inside it render the hosted hero video filling the panel (rounded-xl, w-full): <video src="https://relay-379161153764.asia-southeast1.run.app/hero-background.mp4" autoplay muted loop playsinline poster="/assets/mockup-hero.png" />. If the builder cannot use video, fall back to <img src="/assets/mockup-hero.png" alt="Relay live telemetry console" /> filling the panel.
  - Overlay a couple of small floating mono "telemetry chips" (absolute-positioned small rounded pills, --space-panel bg, --space-border, JetBrains Mono) reading e.g. "● SYNC LIVE" (phosphor dot) and "CH 42 · 4.2ms" to reinforce the cockpit feel. Add a gentle pulsing glow animation to the panel.
- On mobile, stack the visual under the text, full width.

SECTION 2 — PROBLEM (dark, continues cosmic bg)
- Section padding py-24. Centered or left-aligned header block, max-w-2xl.
  - Eyebrow (JetBrains Mono, uppercase, --star-muted): "// SIGNAL LOST".
  - H2 (Inter font-bold, text-white, text-4xl to text-5xl, tracking-tight): "Why Traditional Backends Break".
  - Optional one-line dek (--star-muted): "Out in deep space, every dropped packet costs you. Legacy stacks weren't built for the void."
- Grid of 4 problem cards: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4, gap-5, mt-12.
  - Each card: bg --space-panel, 1px --space-border, rounded-2xl, p-6, hover: border lifts to phosphor/20 + faint glow + slight translateY. Top of card: a small inline stroke SVG icon (currentColor, --star-muted, phosphor on hover) relevant to the theme. Below icon: a JetBrains Mono uppercase label (text-xs, letter-spaced, --phosphor). Then a short Inter description (--star-muted, text-sm/relaxed).
  - Card copy:
    1. Label "STALE DATABASE" — "Your records drift out of orbit the moment they're written. Clients read yesterday's truth while the universe has already moved on."
    2. Label "POLLING LATENCY" — "Hammering the server every few seconds is like pinging a probe on Pluto. You burn fuel, you wait, you still get stale telemetry."
    3. Label "SYNC FAILURES" — "Two crew terminals, two versions of reality. Manual reconciliation turns every deploy into a zero-gravity guessing game."
    4. Label "CONNECTION DROP" — "One flaky tunnel and the whole bridge goes dark. No reconnect, no replay — just silence where your data used to be."

SECTION 3 — SOLUTION (dark, with gradient seam toward light at the very bottom)
- Section padding py-24. Header block max-w-3xl:
  - Eyebrow (JetBrains Mono, --phosphor): "// QUANTUM SYNC ENGINE".
  - H2 (Inter font-bold, text-white, text-4xl to text-5xl, tracking-tight): "Built for light-speed sync".
  - Intro paragraph (Inter, text-lg, --star-muted, mt-4): "Skip the fragmented stack. Relay bridges remote starbases and client replica sets through an autowired, real-time quantum sync pipeline."
- Telemetry stats strip (mt-10): a full-width rounded-2xl bar, bg --space-panel, 1px --space-border, divided into 3 cells (flex / grid-cols-3, divide-x divide --space-border). Each cell, centered, JetBrains Mono: big phosphor number on top (text-3xl, font-semibold, --phosphor) and a tiny uppercase --star-muted label below. Cells:
  - "9,842" / "SECTOR REPLICAS"
  - "4.2 ms" / "TRANSIT SPEED"
  - "100%" / "FIDELITY"
  (You may render the combined line "SECTOR REPLICAS 9,842 · TRANSIT SPEED 4.2 ms · FIDELITY 100%" as a mono caption beneath, optional.)
- Feature blocks (mt-16): an alternating layout — three feature rows, each a two-column block (lg:grid-cols-2, gap-10, items-center), alternating image/text side per row (use flex-row-reverse on the middle one). On mobile stack with text first.
  - Each text side: small JetBrains Mono uppercase phosphor eyebrow, then H3 (Inter font-semibold text-white text-2xl/3xl), then description (--star-muted), then a tiny mono "spec line".
  - Each visual side: a rounded-2xl --space-panel framed mockup using <img src="/assets/mockup-image.png" alt="..."/> (vary alt text per block) with faint phosphor glow; you may overlay one mono telemetry chip per visual.
  - Block 1 — eyebrow "COSMIC STATE EVENT ENGINE", H3 "Phosphor-Fast Live Sync", body: "Zero server configurations. Mutate state effortlessly and watch telemetry stream across CRT overlays and crew terminals at light-speed." Spec line (mono, --star-muted): "// 0 config · sub-5ms propagation". Visual alt: "Relay live sync overlay".
  - Block 2 — eyebrow "ZERO-GRAVITY SOCKET LINKS", H3 "Sockets that wire themselves", body: "No socket configuration file required. Secure pipelines keep client storage and cloud structures tied automatically with zero boilerplate." Spec line: "// auto-reconnect · encrypted tunnels". Visual alt: "Relay socket link diagram".
  - Block 3 — eyebrow "CELESTIAL TELEMETRY SYSTEM", H3 "See every signal in real-time", body: "Live presence, event streams, and health metrics beamed to a single mission-control dashboard. Know exactly who's online, what changed, and how fast — across every sector of your stack." Spec line: "// presence · events · health · one pane". Visual alt: "Relay telemetry dashboard".
- At the very bottom of this section, add a soft gradient seam transitioning from --space-black into --light-bg so the next section feels like emerging into daylight.

SECTION 4 — DEVELOPER EXCELLENCE (light bg)
- Background --light-bg, text --ink. Section padding py-24.
- Header block max-w-2xl:
  - Eyebrow (JetBrains Mono, uppercase, --ink-muted with a phosphor dot): "// FLIGHT DECK DX".
  - H2 (Inter font-bold, --ink, text-4xl to text-5xl, tracking-tight): "Developer Excellence".
  - Dek (Inter, text-lg, --ink-muted, mt-4): "TypeScript native, zero-config, real-time by default. Relay feels less like infrastructure and more like a co-pilot."
- Two-column layout (lg:grid-cols-2, gap-12, items-center, mt-12):
  - Left: a terminal/code mockup. Render a styled "code window": rounded-2xl, bg --space-panel (dark window even on the light section for contrast), 1px --space-border, soft shadow. Top bar with three small dots (red/amber/green circles) and a mono filename "relay.ts". Body: a JetBrains Mono code snippet (syntax-flavored using a few muted colors + phosphor highlights) showing a tiny realistic example, e.g.:
      import { relay } from "@relay/client";
      const channel = relay.connect("starbase-7");
      channel.on("presence", (crew) => render(crew));
      channel.set({ status: "online" }); // syncs instantly
    Keep it short, real, and readable. Alternatively you may use <img src="/assets/mockup-terminal.png" alt="Relay TypeScript example" /> inside the same window frame — but prefer the live code text.
  - Right: a DX bullet list. Each item: a small phosphor stroke-check or signal SVG icon, a bold Inter label, and a one-line --ink-muted description:
    - "Type-safe by default" — "End-to-end TypeScript types flow from schema to client. No casting, no guessing."
    - "Zero-config real-time" — "Drop in the client and you're live. No socket files, no server wiring."
    - "Real-time hooks" — "useChannel, usePresence, and useEvent hooks make live state a one-liner in React."
    - "Optimistic by design" — "Local mutations apply instantly and reconcile automatically when the server confirms."
    - "Observable everything" — "Built-in telemetry for latency, presence, and event throughput — no extra tooling."
  - Optionally a thin mono caption under the bullets: "// npm i @relay/client".

SECTION 5 — TESTIMONIALS (light bg)
- Background --light-bg (or --light-panel banded), padding py-24.
- Header block centered, max-w-2xl mx-auto, text-center:
  - Eyebrow (JetBrains Mono, --ink-muted): "// CREW LOG".
  - H2 (Inter font-bold, --ink, text-4xl to text-5xl, tracking-tight): "Build trust through real customer voices".
- Grid of 3 testimonial cards: grid-cols-1 md:grid-cols-3, gap-6, mt-12.
  - Each card: bg --light-panel, 1px --light-border, rounded-2xl, p-6, soft shadow, hover slight lift. Top: a small phosphor quote glyph SVG. Quote (Inter, --ink, text-base/relaxed). Footer row: a circular avatar placeholder (use a plain initial-circle div with --phosphor-dim bg and phosphor initial — do NOT fetch an external avatar image), then name (Inter font-semibold, --ink) and role/company (JetBrains Mono, text-xs, --ink-muted).
  - Testimonials:
    1. Quote: "We ripped out 3,000 lines of socket glue and our presence layer just... worked. Relay made real-time boring, in the best way." — Name "Mara Voss", role "CTO · Lumen Labs".
    2. Quote: "Sync used to be our 3am pager. Now mutations reconcile themselves and I actually sleep. It's like the data flies in formation." — Name "Devin Okoro", role "Staff Engineer · Orbital".
    3. Quote: "TypeScript types from schema to client meant zero runtime surprises on launch day. We shipped a multiplayer dashboard in a weekend." — Name "Priya Nair", role "Founder · Constellate".

SECTION 6 — FINAL CTA (dark, cinematic)
- Return to the cosmic dark background (--space-black with a strong centered nebula bloom in --phosphor-dim + cool blue, plus subtle stars). Padding py-28 to py-32, text-center, max-w-3xl mx-auto.
- Eyebrow (JetBrains Mono, --phosphor, uppercase): "// CLEARED FOR LAUNCH".
- H2 (Inter font-extrabold, text-white, text-5xl to text-6xl, tracking-tight, leading-tight): "Launch into the next dimension".
- Supporting line (Inter, text-lg/xl, --star-muted, mt-5): "Initialize your project and bring real-time sync, presence, and events online across your entire stack — in minutes, not sprints."
- CTA (mt-9): Primary button "Initialize Project" — rounded-full, bg-white text --space-black, font-semibold, px-7 py-3.5, with a pulsing phosphor glow ring; hover lifts. Optional secondary ghost "Talk to the crew" (border --space-border, text-white). Under the buttons, a tiny mono line: "No credit card · Free dev tier · 4.2ms median".

SECTION 7 — FOOTER (dark)
- Background --space-black, 1px top border --space-border, padding py-16.
- Top row (flex, responsive): Left — "Relay" wordmark with the signal/phosphor-dot glyph, plus a one-line mono tagline below: "// real-time for the whole stack". Right — link columns (grid grid-cols-2 sm:grid-cols-4 gap-8). Columns + links (plain text, --star-muted, hover white):
  - Product: How to, Start, Build, Scale
  - Developers: Docs, API, Status, Changelog
  - Company: About, Careers, Blog, Contact
  - Legal: Privacy, Terms, Security, DPA
- Bottom row (mt-12, pt-8, border-t --space-border, flex justify-between, --star-muted, JetBrains Mono text-xs): left "© 2026 Relay. All systems nominal." Right: a row of 3 small inline-SVG social icons (currentColor, hover phosphor) — generic line glyphs only, no external URLs. Include a tiny phosphor status dot with "ALL SYSTEMS OPERATIONAL" text.

QUALITY BAR
- Pixel-clean alignment, consistent spacing scale, consistent border-radius and border colors per theme. Ensure strong contrast and readable type sizes. Ensure the dark→light→dark rhythm reads intentionally. All interactive elements have visible hover/focus states and are keyboard-accessible. Use semantic landmarks (header/nav, main, section, footer) and meaningful alt text on every image. Keep the playful starbase voice in the copy, but make sure a developer instantly understands Relay is a real-time backend for data sync, functions, events, and presence — type-safe and zero-config.
- Deliver clean, well-organized, production-quality component code with the color tokens, font setup, and all sections fully implemented. Do NOT use external image or icon URLs anywhere — use the local /assets/ placeholder paths listed above and inline SVGs only, so the buyer can drop in their own hosted assets.
