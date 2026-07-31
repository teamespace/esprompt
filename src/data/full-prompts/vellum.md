Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #101010 (dark), default text: #FAFAFA on dark sections
- Fonts: body/display "Inter" (ui-sans-serif stack)
- Type scale: h1 72px, weight 700
- Buttons: bg near-white (oklch(0.967 0.003 264.542) / #F4F4F5), text #111111, radius 9999px (full pill)
- Container: legal-tech / contract-AI product page — dark theme, document-mockup-driven sections (redlined clause cards, kanban-style contract tracker, pipeline funnel)
- Animation library: not detected — logo marquee (2x repeated), animated count-up stats

=== SECTION 1: Nav ===
Content (copy verbatim): "Vellum" wordmark · links "Capabilities", "Procedure", "Pricing", "Contact" · "Sign in" · button "Toggle menu"
Ticker line above nav: "2.4M+ contracts analyzed and counting"

=== SECTION 2: Hero — redline demo ===
Content (copy verbatim):
- H1: "Every contract, read with the rigor of senior counsel." — 72px, weight 700
- Body: "Vellum reviews, redlines, and benchmarks your agreements in minutes — flagging uncapped liability, s[tale terms, and off-market clauses before your lawyers ever open the file]." (truncated in capture — verify exact ending against live page)
- Buttons: "Get Started" · "See a sample redline"
- Document mockup: "First-pass review — 3 clauses flagged — 2 high risk · 1 off-market. Full memo drafted for counsel sign-off." · "Master Services Agreement — Draft V4" · "Matter № 2419-Delta · Reviewing" · heading "MASTER SERVICES AGREEMENT" · "By and between Halloway Systems, Inc. (\"Client\") and Ostrander Labs Ltd. (\"Supplier\")" · "Section 7 · Risk Allocation" · "7. Indemnification & Liability" · clause 7.1 (mutual indemnity for gross negligence) · clause 7.2 flagged "High Risk · Uncapped" with a Vellum-suggested redline "Supplier's aggregate liability under this Section shall not exceed the fees paid or payable by Client..." and buttons "Accept Redline" / "Edit" / "Explain Risk" · clause 7.3 (consequential-damages carve-out)

=== SECTION 3: Trusted-by marquee ===
Content (copy verbatim, repeats 2x in DOM = looping marquee): "Trusted by the best leading brands:" — "Hale & Winslow", "Meridian Legal", "Northcote LLP", "Aldergate", "Fenwick Partners"

=== SECTION 4: Keep contracts moving ===
Content (copy verbatim): H2 "Keep contracts moving, without slowing growth" — "Vellum reads the entire agreement — definitions, cross-references, exhibits — and holds every clause against your playbook." — stat "0 min — Median first-pass review" and a "Redlines accepted" stat — links "Find out more" / "Get Started"
Document-tracker cards: "EZCT-034 — Signing investment documents — 3 Files attachment" · "HR-DOC-192 — Employee onboarding contracts — 5 Files attachment" · "LEGAL-451 — Vendor service agreements — 2 Files attachment"

=== SECTION 5: From upload to insight ===
Content (copy verbatim): H2 "From upload to insight in minutes." — "A workflow your entire team will actually use — without months of implementation."
3 steps: "Upload Any Contract — Drop in a Word file, PDF, or a counterparty email thread. Vellum parses structure, defined terms, and clause boundaries." · "AI Extracts And Scores — Risky language is struck, rewrites are proposed from your playbook, and a plain-English risk memo is generated." · "Sign, Track, And Close — Your lawyer accepts, edits, or overrides each suggestion, then sends the clean tracked-changes file."
Kanban mockup: "Contract_Delta_2026.docx — On Going Contract" · "Contract_Alpha_2024.docx — Ready on 23 May 2026" · "Contract_Beta_2024.docx — Ready on 18 May 2026" · "Contract_Gamma_2024.docx — Ready on 13 May 2026" · button "Review & Sign" · "Contract_Delta_2024.docx — Set up Cursor Rules f... — 20m"

=== SECTION 6: Results (stat band) ===
Content (copy verbatim, animated count-up): "faster contract review vs. manual process — Avg. across 200+ enterprise customers" · "10h 45m — average review cycle time reduction — 2026 Vellum Benchmark Report" · "0.0M+ — Contracts analyzed on the platform — As of Q1 2026" · "$0k — clause extraction accuracy (validated) — Third-party legal benchmark study"

=== SECTION 7: Testimonial ===
Content (copy verbatim): H2 "Don't take our word for it. Here's what our customers are saying." — "Legal teams across industries trust Vellum to close faster, catch more, and never miss what matters." — "\"We almost missed a $200K auto-renewal buried in a vendor contract. Vellum caught it. That single alert paid for the platform three times over.\"" — James Moreau, VP Legal, NovaTech Systems (4 avatar thumbnails shown alongside)

=== SECTION 8: Pricing ===
Header: H2 "Simple pricing, serious value." — "No per-clause fees. No surprise overages. All plans include onboarding support and a 14-day free trial."
- Starter — "For small legal teams getting their first AI advantage." — $59/month — 20 contract reviews/month, risk scoring & memos, standard playbook library, email support — button "Start For Free"
- Practice (Most Popular) — "For growing teams that need full contract control." — $149/month — unlimited reviews & redlines, custom house style playbooks, obligation & renewal tracking, market-term benchmarks, priority 4-hour support — button "Start For Free"
- Firm — "For large organizations with complex legal operations." — Custom Pricing — private model deployment, SSO/audit logs/permissions, DMS integrations, dedicated success manager — button "Contact Sales"

=== SECTION 9: Closing CTA ===
Content (copy verbatim): H2 "Ready to close contracts faster than ever?" — "Join 1,200+ legal teams who moved from manual chaos to AI-powered clarity — in under a week." — links "Get your free demo" / "Start 14 Days Free!" — large wordmark "VELLUM"

=== SECTION 10: Footer ===
Content (copy verbatim, note: footer link columns are generic template copy unrelated to the legal-tech product — reproduce as-is): "For those who want full access to every feature — personalized tools, guided paths, and unlimited calm to support..." — "© Vellum 2026 - All Right Reserved"
- "Product": Overview, Explorer, Console, Pricing, Security & Audits, Status, Consultation
- "Developers": Docs, SDKs & Templates, Quickstart, RPC Endpoints, Run a Validator
- "Solutions": Payments & Remittance, DeFi & Exchanges, Gaming & Loyalty, Supply Chain, Identity & Access, Public Sector

=== INTERACTIONS (global) ===
- Trusted-by logo row (Section 3) repeats 2x in DOM — build as seamless infinite marquee, linear.
- Stat bands (Sections 4 and 6) are count-up-on-scroll-into-view placeholders — animate from 0 to the real figure.
- Redline card buttons ("Accept Redline" / "Edit" / "Explain Risk") are demo-only affordances — style as interactive but non-destructive.

=== ASSETS (confirmed URLs) ===
No image assets were found on this page — the entire design is built from typography, color, and CSS/SVG document mockups (redline cards, kanban cards, pipeline funnel), with no `<img>` elements present. Generate the document-mockup UI directly in code rather than sourcing photography, except for the 4 small round testimonial avatars in Section 7, which are decorative placeholders you may substitute with generated avatars.

=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted; the truncated hero sentence in Section 2 should be verified/completed against the live page before finalizing.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
