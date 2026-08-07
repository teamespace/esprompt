Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: near-black #0B0B0B, default text: #EDEDED, muted text: #8A8A85
- Accent: electric lime #C9F24C (buttons, active labels, the ⚡ glyph, "MOST WIRED" badge)
- Fonts: UI/nav/labels in an uppercase monospace with wide tracking (~0.12em); headings in a heavy condensed sans, uppercase, tight leading (~0.95)
- Buttons: solid lime block, black text, uppercase mono, with a notched/clipped bottom-right corner (angled cut, not a radius)
- Container: wide, generous vertical rhythm; section eyebrows are numbered ("01 / Smart widgets")
- Motion: everything is scroll-reveal — content sits at `opacity:0` until it enters the viewport, then fades/slides up. Build accordingly.
- Live site: https://voltra-sable.vercel.app/

=== SECTION 1: Nav ===
Content (copy verbatim): "⚡ VOLTRA" wordmark (→ #top) · links "Widgets" (#features), "Coach" (#coach), "How it works" (#how), "Pricing" (#pricing) · lime CTA "Get Voltra" (#pricing) · "Menu" button on mobile
- A "Skip to content" link (→ #main) precedes the header.

=== SECTION 2: Hero ===
Content (copy verbatim):
- Eyebrow: "AI fitness tracker · smart widgets"
- H1, three stacked lines: "Every rep." / "Every beat." / "Accounted for."
- Body: "Voltra reads your heart rate, recovery, sleep, and strain — then its AI coach turns the noise into one clear instruction a day." (last clause emphasized)
- Buttons: "Start training free" (lime) · "See the system →" (ghost)
- Compatibility line: "Works with Apple Watch · Garmin · Whoop · Pixel Watch"
- Live-widget preview panel, labeled "VOLTRA OS 3.1 // LIVE FEED":
  - "Heart rate" tile — "Live" tag, big bpm number, "Zone 4 · Threshold"
  - "Recovery" tile — "07:12", status "Primed", "HRV +12ms ▲"
  - "Streak" tile — number + "DAYS"
  - Coach card "⚡ Coach — Today · 06:58": "Green light. HRV up 12ms, sleep debt cleared. I queued 5 × 4:00 VO₂ repeats — hold 4:32/km, full recovery jogs. Yesterday's…" (the session name emphasized) — buttons "Start session" · "Swap for easy"

=== SECTION 3: Train with Precision (video band) ===
Content (copy verbatim): H2 in two weights "Train with Precision." — "Every metric visualized in real-time. Uncover your true potential without the guesswork."
Layout: full-bleed looping background video in a large rounded container spanning most of the viewport width, dark scrim over it, heading centered above/over.

=== SECTION 4: Trust marquee (looping) ===
Content (copy verbatim, 4 items separated by a "///" glyph, repeated 4× in DOM for a seamless loop): "2.1M workouts logged weekly" · "4.9★ App Store" · "Recovery-first training" · "No spreadsheet-brain"

=== SECTION 5: Social proof ===
Stat labels (copy verbatim): "Athletes on Voltra" · "Fewer overtraining injuries*" · "Follow their daily brief" · "4.9" with "App Store · 62K ratings"
Testimonials (copy verbatim, emphasized clause in bold/lime):
- "I stopped guessing. Voltra told me to back off two days before my legs knew it — then sent me into race week fully charged." — Maya Reyes, "Marathoner · 2:58 → 2:54"
- "The widgets are the product. My athletes glance at their wrist, see the recovery score, and the argument about training load is already over." — Daniel Okafor, "Head coach · Southside Track Club"
- "Voltra's AI coach is the first one that understands a life. Missed a session? It re-plans the week instead of guilt-tripping you. Rare." — The Stride Review, "Best AI trainer · 2026"
Footnote: "*SELF-REPORTED, 12-MONTH VOLTRA ATHLETE SURVEY, N=8,410"

=== SECTION 6: Features (4 numbered articles) ===
Header: eyebrow "The hardware you own, finally smart", H2 "Data is cheap. Decisions aren't." ("Decisions" emphasized) — "Your watch already collects everything. Voltra is the layer that decides what it means — and puts that decision where you'll actually see it."
- "01 / Smart widgets — Widgets that re-rank themselves — Voltra's home-screen and watch-face widgets aren't static. Post-workout, recovery jumps to the front…" · bullets "iOS, Android, watchOS & Wear OS widgets" / "Context engine re-ranks every 15 minutes" / "Glanceable in under one second — tested" · visual: stacked chips "Now · Recovery → PRIMED", "Next · Session → 5×4:00 VO₂", "Later · Strain → 12.4 ▲ ON TRACK"
- "02 / AI coach — One instruction a day. Not forty charts. — Every morning at 7:00, Voltra's coach reads your HRV, resting heart rate, sleep stages, and training load — and writes you a single brief: what to do, how hard, and why. Miss a day and it re-plans the week, not your motivation." · bullets "Adapts to marathon, hybrid, strength & comeback blocks" / "Explains every call in plain language" / "Learns your response curve in ~14 days" · visual: week rows "Mon — Easy 40:00 · Z2 — flush yesterday's strain" / "Tue — Tempo 3×10:00 — original plan" / "Tue — Rescheduled → Thu. HRV dip detected." / "Wed — Strength B · 45:00 — hinge focus"
- "03 / Recovery engine — Know when to push. Know when to stop. — The recovery score fuses HRV, resting HR, sleep debt, and muscle strain into one number you can trust." · bullets "Baseline calibrated to you, not population averages" / "Overtraining alerts 48h before symptoms" / "Cycle-aware modelling built in" · visual: "7-day recovery trend" sparkline with "▲ 14%"
- "04 / Streaks, rebuilt — Streaks that respect rest days — Dumb streaks die the day you get sick. Voltra's adaptive streak counts prescribed rest as a win…" · bullets "Smart-rest days keep the chain alive" / "Streak freezes for flagged illness & jet lag" / "Weekly consistency score your coach can see" · visual: "Current streak — DAYS", "Smart-rest saves", "Consistency · 12 wk"

=== SECTION 7: How it works (3 steps) ===
Header: eyebrow "How it works", H2 "From wrist to win in 3 moves" ("win" emphasized)
- "Day zero — Sync your gear — Connect Apple Watch, Garmin, Whoop, or Pixel Watch in under two minutes. Voltra backfills up to three months of history…"
- "Days 1–14 — Voltra calibrates — Two weeks of normal training teach the model your HRV rhythm, sleep signature, and how fast you actually recover."
- "Every day after — Execute the brief — One daily instruction on your widget. Push, hold, or rest — with the reasoning one tap away."

=== SECTION 8: Pricing ===
Header: eyebrow "Pricing", H2 "Pick your voltage" ("voltage" emphasized) — "Every plan starts with a 14-day full-power trial. No card required. Cancel with one tap — your data stays yours."
- Base — "For the curious" — forever free — "Live heart-rate & workout tracking" / "3 smart widgets" / "Adaptive streaks" / "30-day history" — button "Start free"
- Surge (badge "MOST WIRED") — "For people with a goal" — "/ month" — "Everything in Base" / "AI coach with daily briefs" / "Recovery engine + overtraining alerts" / "Unlimited widgets & history" / "Race & block planning" — button "Go Surge"
- Club — "For coaches & teams" — "/ athlete / mo" — "Everything in Surge" / "Coach dashboard, whole-roster view" / "Shared plans & readiness flags" / "CSV / API export" / "Priority support" — button "Talk to us"

=== SECTION 9: Closing CTA ===
Content (copy verbatim): eyebrow "Charge up" — H2 "Your body is talking. Start listening." — "Fourteen days of the full system — AI coach, recovery engine, every widget. Strap in before your next block." — button "Start free — 2 min setup" — "No card · Works with the watch you already own"

=== SECTION 10: Footer ===
Content (copy verbatim): "⚡ VOLTRA" wordmark — "The AI fitness tracker that turns raw wrist data into one clear instruction a day."
- "Product": Smart widgets, AI coach, Pricing
- "Company": About, Training blog, Careers
- "Support": Help center, Device compatibility, Privacy
- "An Elux concept — Dribbble shot series · ← Back to the series"
- "© 2026 Voltra Labs"

=== INTERACTIONS (global) ===
- Every section is gated behind a scroll-reveal (fade + slide-up on intersection) — the page renders visually empty above the fold trigger until scrolled.
- Trust marquee (Section 4) is a seamless infinite horizontal loop, linear, 4× repeated in DOM.
- Hero widget panel reads as a live feed — animate the bpm counter and the "07:12" recovery clock.
- Section 3 video autoplays muted/looped/playsinline.

=== ASSETS (confirmed URLs) ===
Video → Hostinger · Image → Cloudflare R2

| Section | Slot | URL |
|---|---|---|
| Sec 3 — Train with Precision | Background video, autoplay/muted/loop/playsinline | `https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Voltra/About/about.mp4` |

Every other visual on this page — widget tiles, coach cards, sparklines, streak dials, chips, the ⚡ mark — is built from typography, CSS, and inline SVG. There are no photographic assets.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
