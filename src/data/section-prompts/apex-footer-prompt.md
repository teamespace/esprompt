# APEX — Footer Section — 1:1 Rebuild Prompt

Create a React + Vite + Tailwind CSS v4 page for the e-commerce sports brand **APEX** (reverse-engineered from `https://apex-sport-ecommerce-landing.vercel.app/`). **This prompt rebuilds ONLY the footer** (the closing `<footer>` element, section #10 of the "APEX - Performance Apparel" landing page), plus the minimal app shell it runs inside. The footer is two side-by-side half-panels: **(left panel)** a full-bleed background photo with a centered "The Formula For Your Mailbox" email-subscribe block, and two giant split italic serif letters **"AP" / "EX"** pinned to the bottom corners of the panel; **(right panel)** a dark `#0a0a0a` column holding a 2-column uppercase micro-type link grid (7 links), a "Your perfect Get Ready Drops routine?" AI-analysis card with a thumbnail image and a diagonal arrow glyph, and a bordered contact strip (`+49 (0)30 814 50 2390` / `support@apex.de` / `Chat`, each with service-hours) above a `©APEX 2026` line. Use **`motion` (`motion/react`)** for exactly ONE animation in the footer — the whole `<footer>` is wrapped in a `Reveal` that animates `{opacity: 0, y: 40} -> {opacity: 1, y: 0}` when it scrolls into view; **`lenis`** provides site-wide smooth scrolling (`new Lenis({ autoRaf: true })` on app mount). There is **no icon library** — the only non-text graphic in the footer is one hand-drawn inline SVG (an up-right arrow). The design is **quiet editorial dark e-commerce**: near-black `#0a0a0a` panel, white micro-uppercase type at 9–10px with `0.1em`–`0.2em` letter-spacing, a Playfair Display italic display pair at 80/120/160px, exactly two accent surfaces (`#111111` AI card, white/30 underline input), bracket-drawn buttons whose `:before/:after` 1px rails sweep to 50% width on hover, **zero border-radius, zero box-shadow, zero rotation** — the composition IS the design.


---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **This is a two-panel footer, split by `lg:flex-row`.** At `>=1024px` it is exactly two equal half-width columns (each `flex-1 min-h-[500px]`) side by side; below `1024px` the panels **stack** (left photo panel first, then the `#0a0a0a` panel). The outer footer is `w-full min-h-[600px] flex flex-col lg:flex-row text-white font-sans`. Do not change the breakpoint, do not make it 3 columns, do not add a gutter between the panels, do not center the content.
2. **COPY EVERY CLASS STRING VERBATIM — no rounding, no substitution.** The design lives in exact arbitrary values: `text-[10px]`, `text-[9px]`, `tracking-[0.2em]`, `text-[80px] sm:text-[120px] md:text-[160px]`, `pb-2`, `mb-8`, `mt-16 lg:mt-0`, `gap-y-6`, `gap-y-3 gap-x-6`, `sm:grid-cols-[auto_1fr_auto]`, `w-20 h-24`, `p-8 lg:p-12 xl:p-16`. Do not "simplify" `text-[10px]` to `text-xs`, `min-h-[500px]` to `min-h-500`, or `grid-cols-[auto_1fr_auto]` to a flex layout.
3. **Tailwind v4 via `@tailwindcss/vite` is mandatory.** This is a Tailwind CSS v4 (4.3.x) build — CSS-first `@theme` in `src/index.css`, **no `tailwind.config.js`**. The `@keyframes marquee` + `--animate-marquee` theme token exist in the shipped stylesheet but are used by OTHER sections; keep them in the theme block below but do NOT apply them to anything in the footer.
4. **The bracket button is CSS pseudo-elements — do not rebuild it as a JS/React thing.** `.bracket-btn` paints two 1px vertical rails (`:before` on the left, `:after` on the right, each starting at `width: calc(var(--spacing) * 3)` = 12px, `top:0; bottom:0`) and **on `:hover` the rail widths grow to `50%`** while their `background-color` fills, flipping the label color (white→black for `bracket-btn-white`). Transition: `0.5s` with `var(--ease-in-out)` = `cubic-bezier(.4, 0, .2, 1)`. Copy the compiled CSS block below verbatim — including the `@media(hover:hover)` guards.
5. **The Subscribe email row draws its underline on the parent `<div>`, not the input.** The underline is `border-b border-white/30 pb-2 w-full mb-8` on the wrapping div, and flips to `border-white` via `focus-within:border-white transition-colors`. The `<input>` itself stays `bg-transparent outline-none text-sm w-full text-center placeholder:text-gray-300` with `type="email"` and placeholder `email@email.com`.
6. **Footer background photo = hosted URL, referenced as an inline CSS `background-image`** on the absolute layer inside the left panel (`style={{ backgroundImage: url(...) }}`) — never as an `<img>`, never downloaded, never re-hosted. The AI-card thumb is an `<img src="/assets/Store-D-f8cpxa.png" alt="Gear" className="w-full h-full object-cover">` (cropped, `object-cover` mandatory).
7. **Motion inside the footer: exactly one.** The ONLY animated element is the `<Reveal>` wrapper DIV around `<footer>`. Verbatim config: `initial={{opacity: 0, y: 40}}`, `whileInView={{opacity: 1, y: 0}}`, `viewport={{once: true, margin: "-10%"}}`, `transition={{duration: 0.8, delay: 0, ease: [0.21, 0.47, 0.32, 0.98]}}`. Nothing else inside the footer is a `motion.*` element — no per-link reveals, no staggered children, no scroll-linked transforms.
8. **Smooth scroll is Lenis initialized once in the App.** `new Lenis({ autoRaf: true })` inside a `useEffect`, destroyed on unmount via `lenis.destroy()`. All other Lenis defaults apply (`smoothWheel: true`, `lerp: 0.1`, `wheelMultiplier: 1`, `touchMultiplier: 1`). `html` carries `class="scroll-smooth"`.
9. **Keep the inner black panel's exact background `bg-[#0a0a0a]`** — it is NOT the brand token `--color-lab-black` (`#1a1a1a`). Also keep the AI card `bg-[#111111]` → `hover:bg-[#1a1a1a]`. These three near-black values are all intentional and must not be unified.
10. **Copy every string character-for-character** (FOOTER SPEC below): `The Formula For Your Mailbox`, placeholder `email@email.com`, `Subscribe`, the seven links (incl. `All Phases`, `Cancellation Policy`, `Cancel Purchase`), `Your perfect Get Ready Drops routine?`, `Run AI Analysis Now`, `Contact Us`, `+49 (0)30 814 50 2390`, `(Mon - Fri 10:00-17:00)` (spaces around the hyphen; appears twice), `support@apex.de`, `Chat`, `(24/7)`, and `©APEX 2026` (Copyright sign U+00A9 directly before APEX, no space).
11. **Do not add anything.** Zero `rounded-*` anywhere in the footer, zero box-shadow, zero rotation, no hover effects beyond the three specified: `hover:text-gray-400 transition-colors` on the 7 links; `hover:bg-[#1a1a1a]` + `group-hover:text-white` on the AI card (with the `group` class on the card root); the bracket-btn sweep; `focus-within:border-white`. No new sections, no footer nav duplication, no newsletter submit logic (the button has NO onClick).
12. **The empty `<div />` inside the left panel is NOT garbage — keep it.** It is the first flow child of the `flex flex-col justify-between` left panel and participates in the panel's row distribution (`justify-between` spacing).

---

# FONTS

Two Google Fonts, loaded via `<link>` in `index.html` (keep this exact URL):

```
https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap
```

| Family | Weights/axes loaded | Applied to |
|---|---|---|
| **Inter Tight** (`--font-sans: "Inter Tight", ui-sans-serif, system-ui, sans-serif`) | 300, 400, 500, 600, 700 | ALL footer text via the outer `font-sans` + the unlayered `body` base rule — input, links, button, captions, contact strip, © line. Weight utilities burned: `font-medium` (500), `font-semibold` (600). |
| **Playfair Display** (`--font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`) | 400 (roman), 400 italic, 500, 600 | The split **"AP" / "EX"** display letters (`font-serif italic` at `text-[80px] sm:text-[120px] md:text-[160px]`, weight 400 italic) **AND the footer's `<h4>` kicker** — the unlayered rule `h1,h2,h3,h4,h5,h6,.font-serif{font-family:var(--font-serif);font-weight:400}` forces every heading (incl. the kicker) into Playfair Display weight 400, defeating its `font-medium` class. |

Fallbacks come from the Tailwind theme stacks above. No `fontFamily` inline overrides exist in the footer.

---

# SCAFFOLD FILES — COPY EXACTLY

**`index.html`**

```html
<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>APEX - Performance Apparel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

> (The Vite build injects `<script type="module" crossorigin src="/assets/index-*.js">` and `<link rel="stylesheet" crossorigin href="/assets/index-*.css">` automatically.)

**`vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**`src/main.tsx`** — COPY EXACTLY

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
**`src/index.css`** — VERBATIM. Theme tokens plus the compiled `.bracket-btn` rules extracted from the shipped stylesheet. Keep the minified rules exactly as written.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --color-lab-black: #1a1a1a;
  --color-lab-gray-light: #f3f3f3;
  --color-lab-gray-dark: #2a2c2b;
  --color-lab-sand: #f8f7f5;
  --animate-marquee: marquee 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translate(0px); }
  100% { transform: translate(-50%); }
}

/* ---- unlayered base rules (VERBATIM — load-bearing: these force ALL headings into Playfair Display weight 400,
       defeating any font-weight utility on h1-h6, and set the body's base color) ---- */

body{background-color:var(--color-white);font-family:var(--font-sans);color:var(--color-lab-black);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
h1,h2,h3,h4,h5,h6,.font-serif{font-family:var(--font-serif);--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}

/* ---- compiled .bracket-btn rules (from the original bundle, verbatim) ---- */

.bracket-btn{z-index:10;cursor:pointer;padding-inline:calc(var(--spacing) * 8);padding-block:calc(var(--spacing) * 4);--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest);text-transform:uppercase;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.5s;justify-content:center;align-items:center;font-size:10px;transition-duration:.5s;display:inline-flex;position:relative}

.bracket-btn:before,.bracket-btn:after{content:"";pointer-events:none;z-index:-10;width:calc(var(--spacing) * 3);border-style:var(--tw-border-style);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.5s;--tw-ease:var(--ease-in-out);transition-duration:.5s;transition-timing-function:var(--ease-in-out);border-width:1px;position:absolute;top:0;bottom:0}

.bracket-btn:before{border-width:1px 0 1px 1px;left:0}

.bracket-btn:after{border-width:1px 1px 1px 0;right:0}

.bracket-btn:hover:before,.bracket-btn:hover:after{width:50%}

.bracket-btn-white{color:var(--color-white)}

@media(hover:hover){.bracket-btn-white:hover{color:var(--color-black)}

.bracket-btn-white:before,.bracket-btn-white:after{border-color:var(--color-white);background-color:#0000}

.bracket-btn-white:hover:before,.bracket-btn-white:hover:after{background-color:var(--color-white)}}

.bracket-btn-black{color:var(--color-lab-black)}

@media(hover:hover){.bracket-btn-black:hover{color:var(--color-white)}

.bracket-btn-black:before,.bracket-btn-black:after{border-color:var(--color-lab-black);background-color:#0000}

.bracket-btn-black:hover:before,.bracket-btn-black:hover:after{background-color:var(--color-lab-black)}}
```

> Everything else is stock Tailwind v4 utilities generated from the class strings in the components — the shipped stylesheet is `tailwindcss` 4.3.x output plus the unlayered `body`/`h1-h6,.font-serif` rules and the `.bracket-btn*` rules above.
>
> **CRITICAL side effect of the unlayered heading rule:** because it is written OUTSIDE any `@layer`, it outranks Tailwind's `utilities` layer regardless of specificity. The footer's `<h4 class="... font-medium">` therefore renders **Playfair Display, weight 400** on the live site (the `font-medium` class is defeated). Do NOT "fix" this. Keep the `font-medium` class string exactly as-is AND keep the unlayered rule — the rendered h4 must be Playfair Display 400.

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET (quick reference — footer only)

## Colors

| Token | Exact value | Usage in footer |
|---|---|---|
| Left-panel bg | URL `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Apex/Footer/Footer.webp` (dark athletic photo) | absolute `inset-0` layer, `bg-center bg-cover bg-no-repeat` |
| Right-panel bg | `#0a0a0a` (`bg-[#0a0a0a]`) | full-text column |
| AI card bg | `#111111` (`bg-[#111111]`) → hover `#1a1a1a` (`hover:bg-[#1a1a1a]`) | "Get Ready Drops" card |
| Base text | `#ffffff` (`text-white`) | footer root, 7 links, "Contact Us" |
| Caption gray | `oklch(0.707 0.022 261.325)` (Tailwind v4 `gray-400`) | "Run AI Analysis Now", arrow, contact rows |
| © line | `oklch(0.551 0.027 264.364)` (Tailwind v4 `gray-500`) | `©APEX 2026` |
| Input placeholder | `oklch(0.872 0.01 258.338)` (Tailwind v4 `gray-300`) | `placeholder:text-gray-300` |
| Underline idle / focus | `#ffffff` @ 30% (`border-white/30`) / `#ffffff` (`focus-within:border-white`) | subscribe input row |
| Thin borders | `#ffffff` @ 10% / 20% (`border-white/10`, `border-white/20`) | AI card / contact strip (`1px` width) |
| Bracket rails | `#ffffff` (btn-white) / `#1a1a1a` (btn-black), `1px` border, 12px rail → 50% on hover | `.bracket-btn` |

## Type

| Element | Exact classes | font / size / weight / tracking |
|---|---|---|
| Subscribe kicker | `text-[10px] tracking-widest uppercase mb-6 font-medium` | **Rendered:** Playfair Display, 10px, **400** (the `font-medium` is defeated by the unlayered `h1–h6,.font-serif` rule — see CSS note), `0.1em`, uppercase |
| Email input | `bg-transparent outline-none text-sm w-full text-center placeholder:text-gray-300` | Inter Tight, 14px (`text-sm`), 400, centered |
| Subscribe button | `bracket-btn bracket-btn-white` | Inter Tight, 10px, 400, `0.1em` uppercase (from rule), padding 32px / 16px |
| AP / EX letters | `font-serif italic text-[80px] sm:text-[120px] md:text-[160px] leading-none opacity-90 select-none` (+ `text-right` on EX) | Playfair Display, 400 italic, `leading-none` |
| Link grid | `text-[10px] tracking-widest uppercase text-white font-medium` | Inter Tight, 10px, 500, `0.1em`, uppercase |
| AI card title | `text-sm font-semibold mb-2 pr-4` | Inter Tight, 14px, 600 |
| AI card caption | `text-[9px] tracking-widest text-gray-400 uppercase` | Inter Tight, 9px, 400, `0.1em`, uppercase |
| Contact strip | `text-[9px] tracking-[0.2em] text-gray-400 uppercase` | Inter Tight, 9px, 400, `0.2em`, uppercase |
| "Contact Us" | `text-white font-medium sm:mb-0 mb-2` | Inter Tight, 9px, 500, `0.2em`, uppercase |
| © line | `mt-6 text-[9px] tracking-[0.2em] text-gray-500 uppercase font-medium` | Inter Tight, 9px, 500, `0.2em`, uppercase |

## Spacing & structure

| Element | Exact value |
|---|---|
| Footer | `w-full min-h-[600px] flex flex-col lg:flex-row text-white font-sans` |
| Each panel | `flex-1 min-h-[500px]`; left `p-8 lg:p-12`, right `p-8 lg:p-12 xl:p-16` |
| Left panel | `flex flex-col justify-between overflow-hidden` (children: empty `<div/>`, subscribe block, AP/EX row) |
| Subscribe block | `relative z-10 flex flex-col items-center justify-center text-center max-w-sm mx-auto w-full`; kicker `mb-6`, input row `pb-2 w-full mb-8`, wrapper 384px (`max-w-sm`) |
| Input divider | `border-b border-white/30` + `pb-2` → focus-within `border-white` |
| AP/EX row | `relative z-10 flex justify-between w-full mt-16 lg:mt-0` (two `span`s, `overflow-x` contained) |
| Link grid | `grid grid-cols-2 gap-y-6` (no `gap-x` — two columns, vertical gap 24px; stays 2-col on mobile) |
| AI card | `flex justify-end my-16` wrapper; card `bg-[#111111] border border-white/10 flex items-center w-full max-w-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer group`; thumb `w-20 h-24 shrink-0`; body `p-4 flex flex-col flex-grow justify-between h-full relative`; title `mb-2 pr-4`; arrow `absolute bottom-4 right-4 w-3 h-3` |
| Contact strip | `border border-white/20 p-4 sm:p-6 text-[9px] tracking-[0.2em] text-gray-400 uppercase`; inner grid `grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-y-3 gap-x-6 items-center` |
| © row | `mt-6` |
| Radii / shadows | NONE anywhere in the footer (no `rounded-*`, no `shadow-*`) |
---

# APP STRUCTURE

```
src/
  main.tsx        — createRoot + StrictMode, imports ./index.css (above)
  index.css       — THE FULL CSS ABOVE (verbatim)
  App.tsx         — App + Reveal + Lenis init (below)
  components/
    Footer.tsx    — THE FOOTER (verbatim below)
```

`<title>`: `APEX - Performance Apparel` (in `index.html`).

The ORIGINAL app renders 11 sections inside `<div className="min-h-screen bg-white">`, each wrapped in `<Reveal>`, ending with `<Reveal><Footer /></Reveal>`. For this footer-only rebuild, the App renders just the footer (see below) — the footer must remain the last element of the page and is the only component whose internals must match 1:1.

**`src/components/Footer.tsx`** — COPY THIS EXACTLY (reconstructed verbatim from the recovered production bundle; do not "improve" the structure):

```tsx
export const FOOTER_BG = "/assets/Footer-58vO3ieT.png";
export const STORE_IMG = "/assets/Store-D-f8cpxa.png";

export default function Footer() {
  return (
    <footer className="w-full min-h-[600px] flex flex-col lg:flex-row text-white font-sans">
      <div className="relative flex-1 min-h-[500px] flex flex-col justify-between overflow-hidden p-8 lg:p-12">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${FOOTER_BG})` }}
        />
        <div />
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-sm mx-auto w-full">
          <h4 className="text-[10px] tracking-widest uppercase mb-6 font-medium">The Formula For Your Mailbox</h4>
          <div className="border-b border-white/30 pb-2 w-full mb-8 focus-within:border-white transition-colors">
            <input
              type="email"
              placeholder="email@email.com"
              className="bg-transparent outline-none text-sm w-full text-center placeholder:text-gray-300"
            />
          </div>
          <button className="bracket-btn bracket-btn-white">Subscribe</button>
        </div>
        <div className="relative z-10 flex justify-between w-full mt-16 lg:mt-0">
          <span className="text-[80px] sm:text-[120px] md:text-[160px] leading-none font-serif italic opacity-90 select-none">AP</span>
          <span className="text-[80px] sm:text-[120px] md:text-[160px] leading-none font-serif italic opacity-90 select-none text-right">EX</span>
        </div>
      </div>
      <div className="flex-1 bg-[#0a0a0a] p-8 lg:p-12 xl:p-16 flex flex-col justify-between min-h-[500px]">
        <div className="grid grid-cols-2 gap-y-6 text-[10px] tracking-widest uppercase text-white font-medium">
          <a href="#" className="hover:text-gray-400 transition-colors">All Phases</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Discover APEX</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Follow Us</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Imprint</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Legal Matters</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Cancellation Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Cancel Purchase</a>
        </div>
        <div className="flex justify-end my-16">
          <div className="bg-[#111111] border border-white/10 flex items-center w-full max-w-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
            <div className="w-20 h-24 shrink-0">
              <img src={STORE_IMG} alt="Gear" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between h-full relative">
              <span className="text-sm font-semibold mb-2 pr-4">Your perfect Get Ready Drops routine?</span>
              <span className="text-[9px] tracking-widest text-gray-400 uppercase">Run AI Analysis Now</span>
              <svg
                className="absolute bottom-4 right-4 w-3 h-3 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19L20 5M20 5v10M20 5H10" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <div className="border border-white/20 p-4 sm:p-6 text-[9px] tracking-[0.2em] text-gray-400 uppercase">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-y-3 gap-x-6 items-center">
              <span className="text-white font-medium sm:mb-0 mb-2">Contact Us</span>
              <span className="sm:col-start-2">+49 (0)30 814 50 2390</span>
              <span className="sm:col-start-3 sm:text-right">(Mon - Fri 10:00-17:00)</span>
              <span className="sm:col-start-2">support@apex.de</span>
              <span className="sm:col-start-3 sm:text-right">(Mon - Fri 10:00-17:00)</span>
              <span className="sm:col-start-2">Chat</span>
              <span className="sm:col-start-3 sm:text-right">(24/7)</span>
            </div>
          </div>
          <div className="mt-6 text-[9px] tracking-[0.2em] text-gray-500 uppercase font-medium">©APEX 2026</div>
        </div>
      </div>
    </footer>
  );
}
```
**`src/App.tsx`** — COPY THIS EXACTLY (Reveal + Lenis init + App). Dependencies: `motion` (motion/react) and `lenis`:

```tsx
import { useEffect } from 'react'
import { motion } from 'motion/react'
import Lenis from 'lenis'
import Footer from './components/Footer'

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* The original site places ten sections here (hero, products, science, blog, ...),
          each wrapped in <Reveal>. They are out of scope for this footer-only rebuild. */}
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  )
}
```

---

# SECTIONS — FOOTER SPEC (structure, content & behavior)

## 1. FOOTER (`Footer.tsx`) — full-bleed photo panel + `#0a0a0a` text panel

**Root:** `<footer class="w-full min-h-[600px] flex flex-col lg:flex-row text-white font-sans">`. At `lg` (≥1024px) the two children become equal `flex-1` columns side by side; the wrapper's `min-h-[600px]` guarantees the classic footer silhouette even if content is short. Below 1024px the columns stack.

### Left panel — photo + subscribe + AP/EX

Layout: `flex flex-col justify-between overflow-hidden p-8 lg:p-12` with three ordered children:
1. **Absolute photo layer** — `<div class="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat" style="background-image:url(.../assets/Footer-58vO3ieT.png)">`. It fills the panel behind everything (the panel's other children carry `relative z-10` so they paint above it).
2. **Empty `<div />`** — dead flow node; keep it (participates in `justify-between`).
3. **Subscribe block** (`relative z-10 flex flex-col items-center justify-center text-center max-w-sm mx-auto w-full`), centered horizontally and vertically in the panel:
   - `<h4>` — `text-[10px] tracking-widest uppercase mb-6 font-medium` — copy: `The Formula For Your Mailbox`. **Renders Playfair Display weight 400** (the unlayered heading rule overrides `font-medium`) — do not change this.
   - Input row `<div class="border-b border-white/30 pb-2 w-full mb-8 focus-within:border-white transition-colors">` → `<input type="email" placeholder="email@email.com" class="bg-transparent outline-none text-sm w-full text-center placeholder:text-gray-300">`. Underline lives on this wrapper: idle `border-white/30`, focused white via `:focus-within`.
   - `<button class="bracket-btn bracket-btn-white">Subscribe</button>` — the bracket sweep (rule #4); **no onClick handler**.
4. **AP/EX row** (`relative z-10 flex justify-between w-full mt-16 lg:mt-0`) — pinned to the panel bottom by `justify-between`:
   - `<span class="text-[80px] sm:text-[120px] md:text-[160px] leading-none font-serif italic opacity-90 select-none">AP</span>` (flush left)
   - `<span class="... same ... text-right">EX</span>` (flush right)
   - Two Playfair italic letters split across the panel's width — the "brand" gesture of the footer.

### Right panel — links + AI card + contact

Layout: `flex-1 bg-[#0a0a0a] p-8 lg:p-12 xl:p-16 flex flex-col justify-between min-h-[500px]`, three children distributed with `justify-between`, contact block pushed to bottom by `mt-auto`:

1. **Link grid** — `<div class="grid grid-cols-2 gap-y-6 text-[10px] tracking-widest uppercase text-white font-medium">` — **7 links** (2 columns at ALL viewports, no horizontal gap, vertical `gap-y-6`):

   | # | Copy | Link |
   |---|---|---|
   | 1 | `All Phases` | `#` |
   | 2 | `Discover APEX` | `#` |
   | 3 | `Follow Us` | `#` |
   | 4 | `Imprint` | `#` |
   | 5 | `Legal Matters` | `#` |
   | 6 | `Cancellation Policy` | `#` |
   | 7 | `Cancel Purchase` | `#` |

   Each is `<a href="#" class="hover:text-gray-400 transition-colors">`. Hover flips `text-white` → `text-gray-400` over the default 0.15s `cubic-bezier(.4, 0, .2, 1)`.

2. **AI card** — wrapper `<div class="flex justify-end my-16">` (16 top/bottom margin; card aligned to the right edge) → card root `bg-[#111111] border border-white/10 flex items-center w-full max-w-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer group`:
   - Thumb: `<div class="w-20 h-24 shrink-0"><img src="/assets/Store-D-f8cpxa.png" alt="Gear" class="w-full h-full object-cover" /></div>` (80×96px, cropped)
   - Body: `<div class="p-4 flex flex-col flex-grow justify-between h-full relative">` → title `<span class="text-sm font-semibold mb-2 pr-4">Your perfect Get Ready Drops routine?</span>`; caption `<span class="text-[9px] tracking-widest text-gray-400 uppercase">Run AI Analysis Now</span>`; up-right arrow `<svg class="absolute bottom-4 right-4 w-3 h-3 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">` with `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19L20 5M20 5v10M20 5H10" />` (a lucide-style arrow-up-right path — hand-drawn inline, NOT an icon-library component).
   - Hover: card bg `#111111` → `#1a1a1a`; arrow `text-gray-400` → `text-white` (both `transition-colors`); cursor is the arrow `cursor-pointer` from `cursor-pointer`.

3. **Contact block** (`mt-auto`) — two parts:
   - `<div class="border border-white/20 p-4 sm:p-6 text-[9px] tracking-[0.2em] text-gray-400 uppercase">` containing `<div class="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-y-3 gap-x-6 items-center">` with 7 cells: header "Contact Us" (`text-white font-medium sm:mb-0 mb-2`) then 3 data rows, each value in `sm:col-start-2` and its hours in `sm:col-start-3 sm:text-right`:

   | Cell | Copy | Col placement |
   |---|---|---|
   | Header | `Contact Us` | row 1 (spans full width on mobile) |
   | Value 1 | `+49 (0)30 814 50 2390` | `sm:col-start-2` |
   | Hours 1 | `(Mon - Fri 10:00-17:00)` | `sm:col-start-3 sm:text-right` |
   | Value 2 | `support@apex.de` | `sm:col-start-2` |
   | Hours 2 | `(Mon - Fri 10:00-17:00)` | `sm:col-start-3 sm:text-right` |
   | Value 3 | `Chat` | `sm:col-start-2` |
   | Hours 3 | `(24/7)` | `sm:col-start-3 sm:text-right` |

   - `<div class="mt-6 text-[9px] tracking-[0.2em] text-gray-500 uppercase font-medium">©APEX 2026</div>`

### Motion & interaction summary (footer)

| Trigger | Target | From → To | Duration | Ease | Repeat |
|---|---|---|---|---|---|
| Scroll into view (`viewport.once`, margin `-10%`) | whole `<footer>` via `<Reveal>` | `opacity 0, y 40` → `opacity 1, y 0` | `0.8s` | `[0.21, 0.47, 0.32, 0.98]` | once |
| `:hover` | `.bracket-btn:before/:after` | rail `width` 12px → `50%`, bg transparent → `#fff` (btn-white); label `#fff` → `#000` | `0.5s` | `cubic-bezier(.4, 0, .2, 1)` | — |
| `:hover` | 7 links | `text-white` → `text-gray-400` | 0.15s default | `cubic-bezier(.4, 0, .2, 1)` | — |
| `:hover` (group) | AI card / arrow | bg `#111111` → `#1a1a1a`; arrow `text-gray-400` → `text-white` | 0.15s default | `cubic-bezier(.4, 0, .2, 1)` | — |
| `:focus-within` | subscribe input row | `border-white/30` → `border-white` | 0.15s default | `cubic-bezier(.4, 0, .2, 1)` | — |
---

# COMMON MISTAKES TO AVOID (these break the 1:1 look)

1. ❌ Rounding or swapping arbitrary values — `text-[10px]`→`text-xs`, `text-[9px]`→`text-[10px]`, `text-[160px]`→`text-9xl`, `min-h-[500px]`→`min-h-screen`, `gap-y-6`→`gap-6`, `tracking-[0.2em]`→`tracking-widest`. Every value is intentional; copy verbatim.
2. ❌ Adding border-radius or shadows anywhere in the footer. The real footer has zero `rounded-*` and zero `shadow-*`. A rounded "modern" footer instantly diverges.
3. ❌ Rebuilding the bracket button with a border/flex trick or JS state. The `:before/:after` rail sweep (12px → 50%) with `background-color` fill and `color` flip over `0.5s` `cubic-bezier(.4,0,.2,1)` IS the interaction.
4. ❌ Using `--color-lab-black` for the right panel. It is `bg-[#0a0a0a]`; the card is `bg-[#111111]`; hover `#1a1a1a`. Do not unify these three blacks.
5. ❌ Forgetting the empty `<div />` in the left panel, or removing one of the "AP"/"EX" spans. Both are load-bearing for the `justify-between` distribution and the split-letter brand.
6. ❌ Not using the hosted asset URLs. The photo layer must be `url(/assets/Footer-58vO3ieT.png)` via inline `background-image`; the thumb `src="/assets/Store-D-f8cpxa.png"`. Do not re-host, regenerate, or point at a different file. Do not swap `background-image` for an `<img>`.
7. ❌ Adding reveals/animations to inner footer content. Only the `<Reveal>` around `<footer>` animates. No staggered link reveals, no `whileHover` on cards.
8. ❌ Changing the motion params — `ease: [0.21, 0.47, 0.32, 0.98]`, `duration: 0.8`, `viewport.once: true`, `margin: "-10%"`. These are the original feel.
9. ❌ Altering micro-type hierarchy: 9px vs 10px is deliberate (kicker/links 10px; AI caption, contact rows, © 9px). Playfair italic 400 only for AP/EX; weights `font-medium`=500 / `font-semibold`=600.
10. ❌ Importing an icon library for the arrow. The arrow is the inline 24×24 `<svg>` with the `d="M4 19L20 5M20 5v10M20 5H10"` path (stroke-width 2, no fill), colored `text-gray-400`, `group-hover:text-white`.
11. ❌ Adding `<class=...>`-level `text-sm`→`text-[14px]`, reordering the contact grid columns, or wrapping contact values in mobile-specific columns. The `grid-cols-1 → sm:grid-cols-[auto_1fr_auto]` + `sm:col-start-*` dance is exact.
12. ❌ Copy drift on the microcopy — especially `(Mon - Fri 10:00-17:00)` (spaces around the hyphen, duplicated twice) and `©APEX 2026` (no space after ©). Also keep `The Formula For Your Mailbox` exactly as capitalized.
13. ❌ Skipping `html class="scroll-smooth"` or dropping the Lenis init (`new Lenis({ autoRaf: true })` with `destroy()` cleanup) — the page's scroll feel is part of the spec.
14. ❌ "Fixing" the `<h4>` to Inter Tight / weight 500 (i.e. removing the unlayered `h1,h2,h3,h4,h5,h6,.font-serif{...font-weight:400}` rule from `index.css`). On the live site the kicker renders **Playfair Display 400** because that rule is unlayered and outranks the `utilities` layer. Keep the rule AND keep the defeated `font-medium` class unchanged.

---

# IMAGES / ASSETS (footer scope)

Base URL: `https://apex-sport-ecommerce-landing.vercel.app/`. The FULL original site ships 16 images + 2 woff2 fonts; only 2 images belong to the footer and must be referenced:

| Const | URL | Content | Where used |
|---|---|---|---|
| `FOOTER_BG` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Apex/Footer/Footer.webp` | Dark, moody athletic performance photo (runner/dynamic training scene, low-key lighting) | Left panel, `background-image`, `bg-center bg-cover bg-no-repeat`, full-bleed under `z-10` content |
| `STORE_IMG` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Apex/Store/Store.webp` | Product/apparel still on dark background, displayed square-cropped | AI-card thumb, `w-20 h-24 object-cover`, `alt="Gear"` |

Formats: PNG, referenced as hosted URLs (relative `/assets/...` in code resolves to the same files). No CSS blend modes, no mirroring, no rotation applied to either image.

**Art-direction master prompt** (regeneration fallback only — prefer the hosted URLs): *"Dark editorial athletic photography, deep charcoal/black background, dramatic low-key studio lighting with a single hard rim light, sweaty dynamic motion (a sprinting track athlete mid-stride for the footer bg; a folded performance training jersey for the thumb), muted near-monochrome grade (#0a0a0a to #1a1a1a recovery), grain, high contrast, no text overlays, wide composition for the bg, square-croppable product frame for the thumb."*

---

# TECH STACK

- Vite + React + TypeScript, mounted with `createRoot` + `<StrictMode>`; `index.html` carries `class="scroll-smooth"` and the Google Fonts `<link>`.
- Tailwind CSS v4 (4.3.x) via `@tailwindcss/vite` — CSS-first `@theme` in `src/index.css` (tokens: `font-sans`/`font-serif`/`lab-black`/`lab-gray-light`/`lab-gray-dark`/`lab-sand`/`animate-marquee`), **no `tailwind.config.js`**.
- Custom CSS in `index.css`: the unlayered `body{...}` + `h1,h2,h3,h4,h5,h6,.font-serif{...}` base rules, the compiled `.bracket-btn*` rules (verbatim), and `@keyframes marquee`.
- `motion` (imported `motion/react`) — used ONLY for the `Reveal` wrapper (whole-footer whileInView entrance).
- `lenis` — `new Lenis({ autoRaf: true })` on App mount, destroyed on unmount; stock defaults (`smoothWheel: true`, `lerp: 0.1`).
- No icon library, no router, no state library, no GSAP, no other component libs. The arrow is a hand-written inline SVG; the two visual assets are hosted PNGs.
- Fonts: Inter Tight (300/400/500/600/700) for all sans text; Playfair Display (400/500/600 + 400 italic) for the AP/EX serif display.