Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #FAFAFA, default text: #111111
- Fonts: body "Figtree", display heading "Instrument Serif" (serif)
- Type scale: h1 72px, weight 400, serif
- Buttons: bg #111111, text #FFFFFF, radius 9999px (full pill)
- Newsroom/editorial conceit threaded throughout: nav and section names are "The Desk", "Dispatches", "Workflow", "Rates"; pricing tiers are "Desk / Bureau / Syndicate"
- Animation library: not detected — marquee logo loop, animated count-up stats, progress-bar fill

=== SECTION 1: Nav ===
Content (copy verbatim): "Quorum" wordmark · links "The Desk", "Dispatches", "Workflow", "Rates" · button "Start Free — No Card"

=== SECTION 2: Hero (The Desk) ===
Content (copy verbatim):
- Eyebrow: "AI Meeting Assistant"
- H1: "The meeting ends. The record writes itself." — 72px, weight 400, Instrument Serif
- Body: "Quorum sits in every call, takes the minutes verbatim, files a clean summary before you've refilled your coffee — and extracts every commitment: who, what, by when."
- Buttons: "Start Free — No Card" · "Read a Live Transcript ↓"
- Live-call demo panel: "Product Sync — Weekly" · "REC 00:14:32 · QUORUM IS LISTENING" · attendee initials "PK / MO / DL" · "LIVE TRANSCRIPT" · "EN · 98.6%"
- Transcript lines: "14:02 PRIYA — Okay — the onboarding revamp. Where did we land on the empty states?" · "14:07 MARCUS — Design signed off this morning. I can ship the first three screens by Thursday if the copy freezes today." · "14:15 PRIYA — Perfect. Dana, can you draft the release notes before Friday's standup?" · "14:21 DANA — On it. One flag — legal still needs to approve the data-retention copy."
- Decision callout: "QUORUM · DECISION — Onboarding revamp ships Thursday behind a feature flag; legal review runs in parallel."
- Extracted panel "EXTRACTED BY QUORUM": "LIVE" tag · "Ship first 3 onboarding screens — Copy freeze is the dependency — flagged to Priya. @MARCUS · DUE THU · → LINEAR" · "Draft release notes — Before Friday's standup; template attached. @DANA · DUE FRI · → SLACK"
- Footer note: "Summary filed 2m 41s after the call. 3 attendees · 2 action items · 1 decision · 0 things forgotten"

=== SECTION 3: Social proof band ===
Content (copy verbatim): "IN CIRCULATION AT" — looping logo marquee: "Fieldnote", "Arcadia Labs", "Bluepeak", "Standard Atlas", "Hem & Co." (repeats)
Testimonial: "\"We cancelled our Monday recap meeting. Quorum's summary of the summary meeting made the meeting redundant.\"" — Ines Volkova, VP Operations · Arcadia Labs
Stat strip (animated count-up from 0): "0+ Teams on the record" · "0.0 / 5 on G2 · 2,140 reviews" · "0.0 hrs saved per person, weekly"

=== SECTION 4: Dispatches (core capabilities) ===
Eyebrow "Core Capabilities", H2 "Minutes you can quote in court" — "Quorum handles crosstalk, accents, and the colleague who never unmutes properly — in 32 languages."
Sub-block [ SUMMARIES ]: "Filed before the coffee refill" — "Every call becomes a brief in the format its readers need: exec digest, engineering standup, or sales debrief. Same meeting, three audiences, zero rewriting." Integration chips: Notion, Confluence, Docs. Card: "Exec Digest — Median summary delivery: 2m 41s post-call. Fully formatted and ready to share." + "Processing meeting... 100%" progress bar.
Assets: DISPATCHES (1).png
Sub-block [ ACTION ITEMS ]: "Commitments with consequences" — "Quorum hears \"I'll get it done by Thursday\" and files it — owner, task, deadline — straight into your tracker. Then it nudges, politely, before Thursday." Integration chips: Linear, Asana, Slack. Card: "Linear Issue Created — Update privacy policy — Due: Thursday — MC Assigned to Marcus"
Assets: DISPATCHES (2).png

=== SECTION 5: Workflow ===
Eyebrow "The Workflow", H2 "Three steps. None of them are yours." — "Quorum integrates with all meeting platforms and pulls relevant info from your calendar."
[ INTEGRATION ] "Invite Quorum once" — "Connect your calendar and Quorum joins every meeting you flag — Zoom, Meet, or Teams. Attendees see it named in the room. No bots in disguise, no consent surprises." Stat chips: "100% Automated Joining" · "32 Languages Supported" + icon row 📹 💬 📝
3-step list (copy verbatim): "It takes the minutes — Live transcription with speaker labels, decisions flagged as they happen." · "You stay in the conversation — Commitments highlighted mid-sentence. You focus on talking, not in your notes app." · "The Thursday nudge sends itself — Action items file themselves into your tracker with owners and due dates. Nothing falls through."
Assets: WORKFLOW.png

=== SECTION 6: Rates (pricing) ===
Eyebrow "Rates — Simple & Predictable", H2 "The rate card"
- Desk — "For trying it properly" — $0, free forever — 5 meetings/month, full transcription, standard summaries, 30-day archive — button "Open a Desk"
- Bureau (Most Subscribed) — "For teams that run on meetings" — $12/seat/month — unlimited meetings, action items → Linear/Asana, summary templates, ask-the-archive search, unlimited retention — button "Start 14-Day Trial"
- Syndicate — "For the whole organization" — $28/seat/month — everything in Bureau + SSO/SAML & SCIM + retention controls + API access & audit log — button "Talk to Sales"

=== SECTION 7: Closing CTA ===
Content (copy verbatim): eyebrow "Final Edition" — H2 "Put every meeting on the record." — "Your next meeting could be the last one that anyone has to take notes in. Quorum joins in one click." — button "Start Free — Quorum Joins Your Next Call" — "No card required · Set up in 90 seconds"

=== SECTION 8: Footer ===
Content (copy verbatim): "Quorum" wordmark — "Minutes you can quote in court. Quorum hears every call, handles crosstalk, and files your commitments straight into your tracker." — link "Start for free"
- "Updates": The Desk, Dispatches, Workflow, Rates
- "Navigation": Contact, Roadmap, Privacy policy, Terms of service, Customer portal
- "Integrations": Google Meet, Zoom, Microsoft Teams, Slack, Notion, Linear
Assets: footer.png

=== INTERACTIONS (global) ===
- Logo marquee (Section 3) loops continuously, linear, seamless.
- Stat strips ("0+", "0.0/5", "0.0 hrs" in Section 3; "0 min" in Section 6 area) are count-up-on-scroll-into-view placeholders — animate from 0 to the real figure.
- "Processing meeting... 100%" progress bar (Section 4) fills on scroll-into-view or loops.
- Live-call transcript panel likely reveals lines sequentially on load/scroll; exact timing not captured.

=== ASSETS (confirmed URLs) ===
Base: https://quorum-2.vercel.app/
| File | URL | Used for |
|---|---|---|
| DISPATCHES (1).png | .../DISPATCHES%20(1).png | Summaries capability card (Section 4) |
| DISPATCHES (2).png | .../DISPATCHES%20(2).png | Action items capability card (Section 4) |
| WORKFLOW.png | .../WORKFLOW.png | Workflow/integration illustration (Section 5) |
| footer.png | .../footer.png | Footer graphic (Section 8) |
Note: filenames contain spaces — URL-encode as `%20` when hotlinking.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
