Create a React + Vite + TypeScript + Tailwind CSS 4 landing page for an AI trip planner called **Wayfare**. The page has these sections in order: fixed Header (transparent → frosted on scroll), Hero (map-first: headline with underlined `<em>` serif accent, a "quality map panel" that is actually a muted autoplay video with route pins + itinerary cards floating over it), press-logo Marquee (infinite loop), Features (5 cards with a route demo and a budget progress bar), How It Works (3 alternating steps with a chat mockup, a map mockup, and a phone mockup), Postcards (3 rotated travel photos with scroll parallax + hover lift), **Pricing (3 tiers — Daytripper $0, Wanderer $9 "Most popular" dark middle card, Expedition $19)** — the focal section, CTA (dark band with a phone mockup + QR), and Footer. Use `gsap` + `ScrollTrigger` + `useGSAP` (from `@gsap/react`) for ALL entrance/scroll/tilt/hover animations — exact `fromTo` tween configs are given per section; and `lenis` (ReactLenis) for smooth scrolling, hard-synced to the GSAP ticker. Icons are the `lucide-react` check/compass/map/clock/sun/wallet/users/etc. plus one custom paper-plane logo SVG — there is NO other icon library, no router, no state library. The design is a calm editorial-travel style: ink `#09090b` on white/paper-gray, a single blue accent `#2563eb`, Playfair Display (serif, medium) for display headlines with a `text-accent` italic serif emphasis word, Inter for everything else, uppercase tracking-widest kickers, huge 32px/40px radii, soft washed-out shadows, and true em-dashes throughout the copy.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR A 1:1 RESULT)

1. **This design is Tailwind-utility-heavy, with arbitrary values everywhere.** Every exact class string below (`rounded-[40px]`, `md:text-[5.5rem]`, `shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)]`, `w-[64%]`, `-top-4`, `border-2`) must be **copied verbatim**. Do NOT round `rounded-[40px]` to `rounded-2xl`, do NOT replace `md:text-[5.5rem]` with `md:text-6xl`, do NOT "simplify" any class. Arbitrary values ARE the design.
2. **Copy the CSS below as `src/index.css` EXACTLY (reconstructed from the compiled output — see the verbatim `@theme`/`@layer` blocks).** The original ships no `tailwind.config.js`; everything is CSS-first `@theme` in `index.css`. Keep the exact token names (`ink`, `sunset`, `ocean-deep`, `accent-deep`, `sky`, `sand`…) — the JSX below references them by name.
3. **The ONLY page container is `max-w-7xl mx-auto px-6`.** Every section (except the full-bleed dark CTA band body) wraps its inner content in exactly this. It appears **6 times** (Header, Hero, PressMarquee, Features, How, Pricing). Do not introduce another max-width wrapper.
4. **Radii are design-critical.** The site overrides Tailwind's defaults: `--radius-md: 18px`, `--radius-lg: 28px` — plus hardcoded `rounded-[32px]` (pricing/postcard cards), `rounded-[40px]` (feature cards, phone frame), `rounded-full` (pills, buttons, pins). Never swap these.
5. **Shadows are soft and washed-out, NOT hard offsets.** `--shadow-soft: 0 20px 40px -15px #0000000d`, `--shadow-card: 0 10px 30px -10px #00000014`, and the floating `shadow-float: 0 30px 60px -15px #17344726` (Wanderer card only). Never use Tailwind's default blurred `shadow-*` (sm/md/lg) for these surfaces.
6. **There is NO preloader and NO scroll-lock.** Components mount instantly; Lenis is attached immediately at the root and must be **hard-synced to GSAP**: `lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(s => lenis.raf(s*1000))`, and `gsap.ticker.lagSmoothing(0)`. Removing the ticker sync breaks every scrub/pin animation.
7. **The hero "map" is a VIDEO, not a real map.** `/hero.mp4` is `<video autoplay muted loop playsInline>` with `object-[center_38%]` and `scale-[1.2]`, parallaxed via `gsap-parallax-hero` (`yPercent -15 → 15`, scrub). It is NOT mirrored (no `-scale-x-100`). Route pins and the status pill are DOM layered on top.
8. **Assets are referenced by their hosted URLs directly** (Base URL `https://wayfare-iota-pink.vercel.app/`). Do not download, re-host, or import locally — the original references remote files.
9. **`transform` stays on the cheaper side on the Wanderer card:** `transform md:-translate-y-4` is a literal class string. And the `-top-4` badge, `shadow-float`, `bg-ocean-deep text-white` middle card — the whole set is what makes Pricing read "middle card elevated". Keep all of it.
10. **Homepage `<title>` is `Wayfare — Your AI Trip Planner`** (true em-dash U+2014) and the meta description is `Wayfare turns 'someday' into a day-by-day itinerary. Tell it where you're dreaming of — the AI plans routes, books-worthy stops, and real travel times on a live map.` — both already in `index.html` below.
11. **There are NO custom keyframes.** The only keyframes present are Tailwind's built-in `spin / ping / pulse / bounce` (used as `animate-spin`, `animate-ping`, `animate-pulse`). The `animate-[dash_20s_linear_infinite]` class in How step 2 is intentionally dead (`@keyframes dash` does NOT exist) — keep it as-is, add NO keyframes.
12. **Every longer word/segment gets its own one-line JSX node** in the recovered source — that's just the minifier. When reconstructing, keep each text node as a direct child; whitespace/`gap` behavior in flex rows depends on your structure matching the classes below exactly.

---

# FONTS

Loaded via a Google Fonts `<link>` in `index.html` (verbatim):
- **Inter** 400;500;600;700 — `--font-sans: "Inter", "Segoe UI", sans-serif` → EVERYTHING non-serif: body copy, kickers, nav, buttons, pricing (including the Pricing H2!), prices, captions, footer.
- **Playfair Display** 0,400;0,500;0,600;0,700;1,400 — `--font-serif: "Playfair Display", Georgia, serif` → ONLY the display H2s: Hero H1, Features H2, How H2, Postcards H2, CTA H2, plus the `<em>` emphasis word (italic serif). Applied via `font-serif` and `font-serif italic`.

The font link (already in `index.html` below) — do not move it into CSS, do not change the weights:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

**`index.html`** (taken from the served DOM — verbatim):
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wayfare — Your AI Trip Planner</title>
    <meta name="description" content="Wayfare turns 'someday' into a day-by-day itinerary. Tell it where you're dreaming of — the AI plans routes, books-worthy stops, and real travel times on a live map." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**`vite.config.ts`** (reconstruction — standard for this stack):
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**`src/main.tsx`** (reconstruction):
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**`src/index.css`** — copy EXACTLY (reconstruction from the compiled `assets/index-CADouWVy.css`; every token below is verbatim from the CSS variable dump. Note the `shadow-float` token is emitted as an *inlined variable* in the compiled output, so it lives in `@theme inline`):
```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", "Segoe UI", sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;

  --color-sky: #f4f4f5;
  --color-sky-deep: #e4e4e7;
  --color-sunset: #09090b;
  --color-sunset-deep: #27272a;
  --color-ocean: #52525b;
  --color-ocean-deep: #18181b;
  --color-ink: #09090b;
  --color-ink-dark: #000;
  --color-sand: #fff;
  --color-accent: #2563eb;
  --color-accent-deep: #1d4ed8;

  --color-gray-50: #fafafa;
  --color-gray-100: #f4f4f5;

  --radius-md: 18px;
  --radius-lg: 28px;

  --text-3xl--line-height: 1.2;

  --shadow-soft: 0 20px 40px -15px #0000000d;
  --shadow-card: 0 10px 30px -10px #00000014;
}

@theme inline {
  --shadow-float: 0 30px 60px -15px #17344726;
}

@layer base {
  body {
    @apply bg-gray-50 text-ink font-sans antialiased;
  }
}
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET (quick reference)

## Colors

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#09090b` | primary text everywhere (`text-ink`) |
| `sunset` | `#09090b` | Pricing kicker (`text-sunset`), check icons (`text-sunset`), "Most popular" badge (`bg-sunset`) |
| `sunset-deep` | `#27272a` | dark gradient stop (`to-sunset-deep`) |
| `ocean` | `#52525b` | secondary text (`text-ocean`), faint borders (`border-ocean/20`), check color on light cards |
| `ocean-deep` | `#18181b` | Wanderer card bg (`bg-ocean-deep`), CTA band bg (`bg-ocean-deep`) |
| `sky` | `#f4f4f5` | light chip bg (`bg-sky`), hover wash (`hover:bg-sky/50`) |
| `sand` | `#fff` | hero map panel bg (`bg-sand`), number chip `bg-sand` |
| `accent` | `#2563eb` | primary CTA, route strokes, `text-accent` emphasis, icon chips `bg-accent/10 text-accent` |
| `accent-deep` | `#1d4ed8` | hover states (`hover:bg-accent-deep`) |
| `gray-50` | `#fafafa` | page / Features section bg, phone screen bg |
| `gray-100` | `#f4f4f5` | budget progress track `bg-gray-100` |

## Type

| Element | Exact classes / role |
|---|---|
| Hero H1 | `font-serif font-medium` (medium! NOT bold) `text-6xl md:text-[5.5rem] leading-[1.1] tracking-tight` — with an inner `<em>` in `text-accent italic relative inline-block font-serif` + underline squiggle SVG |
| Display H2 (Features/How/Postcards) | `font-serif` `text-5xl md:text-6xl` `tracking-tight` |
| CTA H2 | `font-serif` `text-5xl md:text-7xl` |
| **Pricing H2** | **Inter BOLD (NOT serif):** `text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6` |
| Kicker | `text-xs font-bold tracking-widest uppercase mb-3 block` + color (accent / sunset / ink) |
| Section sub | `text-lg text-ink/70` |
| Buttons | `font-bold` + `rounded-full` + `py-4` + `transition-all active:scale-[0.96]` |

## Spacing / layout

| Element | Exact value |
|---|---|
| Page container | `max-w-7xl mx-auto px-6` |
| Section vertical padding | `py-24` (CTA: `pt-24 pb-0`) |
| Radius tokens | `md: 18px`, `lg: 28px`; cards `rounded-[32px]`; feature cards `rounded-[40px]`; phone frame `rounded-[40px]`; postcard imgs `rounded-[24px]`; pills `rounded-full` |
| Page bg | `bg-gray-50` (via `@layer base`) |
| Hero map panel | `bg-sand` + video `object-[center_38%] scale-[1.2]` |
| Pricing grid | `grid grid-cols-1 md:grid-cols-3 gap-8 items-center` |
| Pricing card | `rounded-[32px] p-10 shadow-card` (Wanderer: `shadow-float transform md:-translate-y-4`); desc `h-10`; price `text-5xl`; check icon `size:18` |
| Feature card | `rounded-[40px] bg-white/80 backdrop-blur-xl shadow-soft border border-white/60 p-8 md:p-10` |
| Postcard card | `rounded-[32px] p-4 rotate-[-1deg]` / `rotate-[1.5deg] translate-y-3` / `rotate-[-1.5deg]` |
| Budget progress | track `h-3 bg-gray-100 rounded-full`, fill `w-[64%] bg-gradient-to-r from-accent to-accent-deep` |

---

# APP STRUCTURE

```
src/
  main.tsx                  — React 19 createRoot + <StrictMode>, imports ./index.css
  index.css                 — THE FULL CSS ABOVE (verbatim)
  App.tsx                   — composition below
  components/
    layout/Header.tsx       — hiddenmd fixed frosted header (Nav `Ny`)
    layout/Footer.tsx       — dark footer (`Z2`)
    home/Hero.tsx           — video-map hero (`f2`)
    home/PressMarquee.tsx   — press-logo ticker (`L2`)
    home/Features.tsx       — 5-card features grid (`q2`)
    home/HowItWorks.tsx     — 3 step mockups (`X2`)
    home/Postcards.tsx      — 3 rotated photo cards (`G2`)
    home/Pricing.tsx        — 3 tier cards (`V2`)
    home/CTA.tsx            — dark CTA band with phone + QR (`Q2`)
    animations/SmoothScroll.tsx — Lenis wrapper synced to GSAP (`rS`)
    ui/Logo.tsx             — custom paper-plane SVG (`Dg`)
  public/
    (None — all media hosted at https://wayfare-iota-pink.vercel.app/)
```

`App.tsx` composition (verbatim from the bundle):
```tsx
<SmoothScroll>
  <Header />
  <main id="top">
    <Hero />        {/* f2 */}
    <PressMarquee />{/* L2 */}
    <Features />    {/* q2 */}
    <HowItWorks />  {/* X2 */}
    <Postcards />   {/* G2 */}
    <Pricing />     {/* V2 */}
    <CTA />         {/* Q2 */}
  </main>
  <Footer />        {/* Z2 */}
</SmoothScroll>
```
Set `<title>Wayfare — Your AI Trip Planner</title>` in `index.html` (done above).

---

# SHARED COMPONENTS — COPY THESE VERBATIM

**`animations/SmoothScroll.tsx`** — the Lenis↔GSAP sync is load-bearing:
```tsx
import { useEffect, type ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = (window as any).__lenis
    if (!lenis) return
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove((time: number) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
      ref={(ref) => { (window as any).__lenis = ref }}
    >
      {children}
    </ReactLenis>
  )
}
```
> In the original this is a single component wiring `n.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(s => lenis.raf(s * 1000))`, `gsap.ticker.lagSmoothing(0)` with cleanup on unmount. Wire the same behavior however fits your ReactLenis version.

**`ui/Logo.tsx`** — one custom paper-plane mark (verbatim SVG, 3 paths + a group, `fill-accent`, `class="w-8 h-8"` in header; the footer uses the same mark in white):
```tsx
export function Logo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <g>
        <path d="M33.724 36.5809C37.7426 32.5622 40.0003 27.1118 40.0003 21.4286C40.0003 15.7454 37.7426 10.2949 33.724 6.27629C29.7054 2.25765 24.2549 1.02188e-06 18.5717 0C12.8885 -1.02188e-06 7.43807 2.25764 3.41943 6.27628L10.4905 13.3473C11.6063 14.4631 13.4081 14.4074 14.8276 13.7181C15.9836 13.1568 17.2622 12.8571 18.5717 12.8571C20.845 12.8571 23.0252 13.7602 24.6326 15.3677C26.2401 16.9751 27.1431 19.1553 27.1431 21.4286C27.1431 22.7381 26.8435 24.0167 26.2822 25.1727C25.5929 26.5922 25.5372 28.394 26.6529 29.5098L33.724 36.5809Z" className="fill-accent" />
        <g>
          <path d="M30 40H19.5098C17.9943 40 16.5408 39.398 15.4692 38.3263L1.67368 24.5308C0.60204 23.4592 0 22.0057 0 20.4902V10L30 40Z" className="fill-accent" />
          <path d="M10.7143 39.9999H4.28571C1.91878 39.9999 0 38.0812 0 35.7142V29.2856L10.7143 39.9999Z" className="fill-accent" />
        </g>
      </g>
    </svg>
  )
}
```

**Reveal pattern** — every block-level entrance in the site is a `.reveal` element handled by ONE global `useGSAP` that creates a per-section timeline:
```
gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: el, start: 'top 85%' } })
```
Implement as a small `<Reveal>` wrapper or hook that attaches this tween to any child with `.reveal`. Keep `_rd` inline style props on reveal elements UNUSED but present (`style={{ '--rd': i }}`) — they are dead but part of the DOM the original emits.

---

# SECTIONS — STRUCTURE, CONTENT & ANIMATION

## 1. HEADER (`layout/Header.tsx`, bundle name `Ny`)

`<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 bg-transparent">` — **scroll state**: when `window.scrollY > 20` swap to `py-3 bg-white/70 backdrop-blur-xl shadow-soft border-b border-white/60` (keep `transition-all duration-300`). Inner div `max-w-7xl mx-auto px-6 flex items-center justify-between`:

- **Logo** — `<a href="#top" aria-label="Wayfare home" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-ink no-underline">` → `<Logo />` + text `Wayfare`.
- **Desktop nav** (`hidden md:flex items-center gap-8`): `Features`→`#features`, `How it works`→`#how`, `Pricing`→`#pricing`. Link class: `text-sm font-medium text-ink/70 hover:text-ink transition-colors no-underline`.
- **CTA pill**: `bg-ocean/5 hover:bg-ocean/10 border border-ocean/20 rounded-full px-5 py-2.5 text-sm font-medium text-ink hover:text-ink transition-colors` — text `Plan a trip free`.
- **Mobile hamburger** (`md:hidden`, 3 spans):
  - bar 1: `block w-6 h-0.5 bg-ink transition-transform duration-300` + open `translate-y-2 rotate-45`
  - bar 2: `block w-6 h-0.5 bg-ink transition-opacity duration-300` + open `opacity-0`
  - bar 3: `block w-6 h-0.5 bg-ink transition-transform duration-300` + open `-translate-y-2 -rotate-45`
- **Mobile panel** when open: `md:hidden bg-white/95 backdrop-blur-md p-6 flex flex-col gap-4 border-t border-ocean/10 shadow-lg` — the 3 nav links + an accent-full-width pill (`bg-accent hover:bg-accent-deep text-white rounded-full py-3 font-bold text-center`, `Plan a trip free`).

## 2. HERO (`home/Hero.tsx`, bundle `f2`)

Inner: `max-w-7xl mx-auto px-6` with a stacked layout — headline block on top, then the "map" panel, and the 3 itinerary cards.

- **Kicker pill**: `inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-ocean/10 rounded-full px-4 py-2 text-sm text-ink/70` → **`AI trip planner · map-first`** (middot U+00B7; kicker is lowercase in source, uppercased by no transform — keep font size `text-sm`, NOT uppercase).
- **H1** (`font-serif font-medium text-6xl md:text-[5.5rem] leading-[1.1] tracking-tight text-ink`): **`Ten days in Japan, planned before`** + `<br className="hidden md:block" />` + the emphasis word:
  ```tsx
  <em className="text-accent italic relative inline-block font-serif">
    your coffee cools
    <svg className="absolute -bottom-1 left-0 w-full h-4 opacity-50" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 9 C 24 2, 42 12, 64 7 S 106 2, 128 8 S 172 12, 218 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </em>
  ```
- **Sub**: `mt-6 text-lg text-ink/70 max-w-2xl` → **`Tell Wayfare where you're dreaming of, how long you've got, and what you love. It builds a day-by-day itinerary on a live map — real travel times, opening hours, and the little places guidebooks miss.`**
- **Primary button**: `inline-flex items-center gap-2 bg-accent hover:bg-accent-deep text-white font-bold rounded-full px-8 py-4 text-lg hover:-translate-y-1 active:scale-[0.96] transition-all` → **`Start planning — it's free`** (em-dash U+2014).

**Map panel** (`gsap-hero-map`, `relative rounded-[40px] overflow-hidden bg-sand shadow-soft`):
- `<video src="https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Wayfare/Hero/Video/hero.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover object-[center_38%] scale-[1.2]" />` wrapped in a div `.gsap-parallax-hero` (height ~`400px`+).
- Gradient overlay: `absolute inset-0 bg-gradient-to-b from-sky/40 via-sky/5 to-ocean-deep/30 pointer-events-none`.
- **Status pill** (top-left): `absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-soft flex items-center gap-2 text-sm font-medium` → pulse dot (`w-2 h-2 rounded-full bg-sunset animate-pulse`) + **`Kyoto, 3 days, food + temples`** + **`✦ AI routing`** (star U+2726; right side, `text-ink/50`).
- **Route paths** (bottom layer): `<svg>` with
  - `path stroke="rgba(37,99,235,0.15)" strokeWidth="8" strokeLinecap="round" fill="none"` and
  - `path stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8" fill="none"` (both `d` from the section's map curve).
- **3 pins** (`gsap-hero-card`… each): `absolute` teardrop `w-10 h-10 bg-accent (or bg-ocean) rounded-t-full rounded-bl-full rounded-br-md rotate-[-45deg] border-2 border-white shadow-lg` with a number `rotate-[45deg] font-bold text-white text-sm` (1 / 2 / 3); primaries `bg-accent`, middle `bg-sky text-ink`? No — pin colors alternate accent/ocean/accent and hold a white number. Displaced from the route with `left/top` % values (1: 18%/28%, 2: 46%/55%, 3: 70%/35%). Each pin has a **tooltip**: `absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1.5 text-xs shadow-soft whitespace-nowrap`:
  - `Fushimi Inari · sunrise, no crowds` (pin 1 · accent)
  - `Nishiki Market · 12 min walk` (pin 2 · ocean)
  - `Arashiyama · Bamboo grove` (pin 3 · accent)

**3 itinerary cards** (`gsap-hero-card`), absolutely placed on/over the panel, `bg-white rounded-2xl p-4 shadow-card`:
- **Day 1 · Southern Kyoto** (`hidden sm:block`, `absolute top-1/4 -left-4 md:-left-8 rotate-[-2deg] hover:rotate-0 hover:-translate-y-2`): Temples chip (`bg-sky/50 text-ocean rounded-full px-2 py-0.5 text-xs` `Temples`); `06:40` **`Fushimi Inari before the crowds`**; `09:30` **`Tōfuku-ji gardens`** (Tōfuku-ji with ō = U+014D); `12:15` **`Ramen at Kyoto Station`**; footer **`✦ Reordered to dodge a rainy afternoon`** (`bg-accent/5 text-accent rounded-lg px-2 py-1 text-xs`).
- **Day 2 · Downtown** (`hidden sm:block`, `absolute top-1/4 right-0 translate-x-4 rotate-[1.5deg] hover:rotate-0 hover:-translate-y-2`): Food crawl chip; `10:00` **`Nishiki Market tasting walk`**; `14:00` **`Tea ceremony, Gion backstreets`**.
- **Day 3 · Arashiyama** (`hidden lg:block`, `absolute -bottom-4 left-1/3 -translate-x-4 rotate-[-1deg] hover:rotate-0 hover:-translate-y-2`): Nature chip; `08:20` **`Bamboo grove & monkey park`**; `16:45` **`Riverside kaiseki dinner`**.

**Hero GSAP** (one `useGSAP(scope)`):
```
.gsap-hero-text  fromTo {y:30, opacity:0} → {y:0, opacity:1, duration:1, stagger:.15, ease:"power4.out", delay:.2}
.gsap-hero-map   fromTo {y:50, opacity:0, scale:.95} → {y:0, opacity:1, scale:1, duration:1.2, ease:"power3.out", delay:.5}
.gsap-hero-card  fromTo {x:50, opacity:0} → {x:0, opacity:1, duration:.8, stagger:.15, ease:"back.out(1.2)", delay:.8}
.gsap-parallax-hero fromTo {yPercent:-15} → {yPercent:15, ease:"none", scrollTrigger:{trigger:section, start:"top top", end:"bottom top", scrub:true}}
```

## 3. PRESS MARQUEE (`home/PressMarquee.tsx`, bundle `L2`)

`<section className="py-8 relative overflow-hidden">` → inner `max-w-7xl mx-auto px-6`.

- Label: `text-center text-xs font-semibold tracking-widest uppercase text-ocean/50 mb-6` → **`The trip planner featured in`**.
- **Track** (`.gsap-marquee-track`, `flex items-center gap-12 md:gap-24 overflow-hidden whitespace-nowrap w-max px-6 md:px-12`), the 5 items rendered **twice** ([...brands, ...brands]) for a seamless `xPercent:-50` loop:
  | brand | lucide icon (size 24) |
  |---|---|
  | Roamer's Digest | `compass` |
  | Summit Weekly | `mountain` |
  | The Slow Lane | `camera` |
  | Passport Club | `globe` |
  | Fernweh Mag | `map-pin` |
  Each item: `flex items-center gap-2 text-xl text-ocean/40 hover:text-ocean transition-colors font-semibold` → `<Icon size={24} aria-hidden />` + brand text.
- **Edge fades**: `absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none` and mirrored on the right (`bg-gradient-to-l`).
- **Animation**: section `fromTo {opacity:0, y:20} → {opacity:1, y:0, duration:.8, ease:"power3.out", scrollTrigger:"top 95%"}`; track `to {xPercent:-50, ease:"none", duration:20, repeat:-1}`.

## 4. FEATURES (`home/Features.tsx`, bundle `q2`) — `#features`

`<section id="features" className="bg-[#FAFAFA] py-24" aria-labelledby="features-title">` → inner `max-w-7xl mx-auto px-6`.

- **Head** (`text-center max-w-2xl mx-auto reveal`): kicker (`text-xs font-bold tracking-widest uppercase text-accent mb-3 block`) **`Why travelers switch`**; H2 serif (`font-serif text-5xl md:text-6xl tracking-tight mt-4`) **`A planner that actually knows the ground it's sending you to`**; sub (`mt-4 text-lg text-ink/70`) **`Wayfare cross-checks every suggestion against maps, transit timetables, opening hours, and weather — so the plan survives contact with the real world.`**
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16`.
- **Card shell**: `rounded-[40px] bg-white/80 backdrop-blur-xl shadow-soft border border-white/60 p-8 md:p-10` (+ `reveal`). Icon chip: `w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6` with `<Icon size={28} />`. Title `text-xl font-bold text-ink mb-2`; body `text-ink/70 leading-relaxed`.

| # | col-span | icon | title | body text | extra |
|---|---|---|---|---|---|
| 1 | `md:col-span-2`, `p-0 flex md:flex-row items-center` | `map` | `Routes that respect geography` | Gion District → 14 min walk pill → Kiyomizu-dera | route demo block (below) |
| 2 | — | `sun` | `Replans around the weather` | `Reorders your schedule when rain arrives — rainproof backups ready at switch-over.` | — |
| 3 | — | `clock` | `Real travel times, not guesses` | `Walking times, trains, ferries — computed from live schedules, not straight-line estimates.` | — |
| 4 | — | `wallet` | `Budget guardrails` | `Sets aside for food, tickets and transit, then nudges you when a choice would blow the plan.` | progress bar (below) |
| 5 | `md:col-span-2 lg:col-span-1` | `users` | `Plan together, argue less` | `Shared trip links, votes on activities, and a packing checklist that splits itself up.` | — |

**Card 1 route demo** (`.gsap-route-container`, `flex flex-col md:flex-row items-center gap-4 p-8 md:p-10`):
- Step chip 1: `bg-sand border border-ocean/10 rounded-2xl px-4 py-3` with number `w-6 h-6 rounded-full bg-sky text-ink text-xs font-bold flex items-center justify-center mb-2` `1` + **`Gion District`** + small `text-xs text-ink/60` **`Explore traditional streets`**.
- Pill: `bg-accent text-white text-xs font-bold rounded-full px-3 py-1` **`14 min walk`**.
- Step chip 2: same shell + number `2` (`bg-sand`) + **`Kiyomizu-dera`** + **`Temple views at sunset`**.

**Card 4 progress bar**: label row (`budget text`) **`€1,280 of €2,000 planned`** (€ U+20AC); track `w-full h-3 bg-gray-100 rounded-full overflow-hidden mt-4`; fill `.gsap-progress-bar h-full w-[64%] bg-gradient-to-r from-accent to-accent-deep rounded-full`.

**Features timeline** (per `.reveal`, `scrollTrigger "top 85%"`):
```
.reveal → fromTo {y:50, opacity:0} → {y:0, opacity:1, duration:1, ease:"power3.out"}
.gsap-route-container > * → fromTo {y:20, opacity:0, scale:.95} → {y:0, opacity:1, scale:1, duration:.6, stagger:.2, ease:"back.out(1.5)"} , "-=0.5"
.gsap-progress-bar → from {width:"0%"} → {width:"64%", duration:1.5, ease:"power4.out"} , "-=0.3"
```

## 5. HOW IT WORKS (`home/HowItWorks.tsx`, bundle `X2`) — `#how`

`<section id="how" className="bg-[#FFFFFF] py-24" aria-labelledby="how-title">` → inner `max-w-7xl mx-auto px-6`.

- **Head**: kicker `text-xs font-bold tracking-widest uppercase text-accent mb-3 block` → **`How it works`**; H2 serif `font-serif text-5xl md:text-6xl tracking-tight` → **`Type a vibe. Get a trip.`**; sub → **`No more 20 open tabs or copying addresses into Google Maps. Wayfare builds a fully routed itinerary in seconds.`**
- **Steps**: `flex flex-col gap-24` (each step `reveal`, alternating text/image order).

**Step 1 — Tell it your trip** (`message-square` icon chip):
- Title `text-2xl font-bold text-ink` → **`Tell it your trip`**; body → **`Paste your plans, dates, and vibes — Wayfare turns one messy paragraph into a full day-by-day plan.`**
- Quote brief: `text-lg font-medium text-ink/80 italic` → **`"Two weeks in Portugal, September, love seafood and tile museums, hate queues." That's a complete brief for Wayfare.`**
- Pill: `inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm` → `message-square` icon + **`Feel free to chat with us!`**
- **Chat mockup** (`rounded-3xl bg-white border border-ocean/10 shadow-card overflow-hidden max-w-md`): browser bar `flex items-center gap-2 px-4 py-3 border-b border-ocean/10` → dots + `wayfare.com/chat`; header row: avatar `w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold` `W` + green dot `w-2 h-2 rounded-full bg-green-500` + **`Wayfare Trip Assistant`** `font-semibold` + **`Online • Responds instantly`** (`text-xs text-ink/60`, bullet U+2022); body `bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] p-4 space-y-3` (dot grid 16px — keep the arbitrary `bg-[radial-gradient(...)]` verbatim); chat bubbles: user bubble right `bg-accent text-white`, assistant bubble left `bg-gray-100 text-ink` with AI message text (e.g. **`I'd start Osaka: 2 nights, then Kyoto for 3. Want the full day-by-day?`**); timestamp **`10:42 AM`** (`text-xs text-ink/50`); input row `border-t border-ocean/10 px-4 py-3` with placeholder **`Type your message...`** + send button (lucide `navigation`, `rotate-45`, `bg-accent text-white rounded-full p-2`).

**Step 2 — Shape the draft** (`map` icon chip):
- Title → **`Shape the draft`**; body → **`A live map with your days already routed — reorder, drop, or add before you lock it in.`**
- **Map mockup** (`rounded-3xl bg-white border border-ocean/10 shadow-card overflow-hidden`): header bar `px-4 py-3 border-b border-ocean/10` → **`Day 1 / Southern Kyoto`** (`font-semibold text-sm`); body `relative`:
  - `<img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Wayfare/Feature/map.webp" alt="Map backdrop for the route" className="w-full object-cover" />`
  - route svg (verbatim):
    ```tsx
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
      <path d="M 40 160 Q 100 80 200 130 T 320 90" fill="none" stroke="rgba(37,99,235,0.15)" strokeWidth="8" strokeLinecap="round" />
      <path d="M 40 160 Q 100 80 200 130 T 320 90" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" className="animate-[dash_20s_linear_infinite]" />
    </svg>
    ```
    (DO NOT add `@keyframes dash`; the class is intentionally dead.)
  - time cards (`.gsap-map-item`, `bg-white rounded-xl shadow-card px-3 py-2 absolute`): **`Fushimi Inari`** `font-semibold text-sm` + **`09:00 - 11:30`** + **`14 min walk`** (top-left); **`Nishiki Market`** + **`12:00 - 13:30`** (bottom-right).
  - pins (`.gsap-map-pin`, `absolute` teardrop `w-4 h-4 rotate-45 rounded-t-full rounded-bl-full rounded-br-md border-2 border-white shadow`): Fushimi Inari `bg-ocean` (with white chip label `bg-white text-ink text-xs px-2 py-0.5 rounded-full` **`Fushimi Inari`**); Nishiki Market `bg-accent` + white chip with `w-2 h-2 rounded-full bg-sunset animate-ping` dot inside **`Nishiki Market`**.

**Step 3 — Travel with it** (`navigation` icon chip):
- Title → **`Travel with it`**; body → **`Open navigation with one tap. Your route, your reservations, and your detours on the road.`**
- **Phone mockup** (`.gsap-3d-mockup`, `relative mx-auto` — 3D tilt via mousemove): `w-[260px] h-[480px] bg-ink-dark rounded-[40px] p-3 shadow-2xl` with front screen:
  - `<img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Wayfare/Feature/phone-img.webp" alt="Trip itinerary on a phone" className="w-full h-[220px] object-cover rounded-3xl" />` + gradient overlay `absolute inset-0 bg-gradient-to-b from-transparent to-ink/90 mix-blend-multiply rounded-3xl` 
  - overlay label `absolute bottom-3 left-3` → **`Day 1 • 14:00`** `font-semibold text-white text-sm` + **`Kyoto`** `text-white/80 text-xs`.
  - **Route sheet** (`.gsap-mobile-sheet`, `bg-white rounded-3xl -mt-10 relative z-10 p-4 shadow-float`): map button `w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3` (`map` icon); handle `w-10 h-2 bg-gray-300 rounded-full mx-auto mb-4`; **`Up Next`** card `bg-gradient-to-b from-[#3A7E9F] to-[#255C7A] text-white rounded-2xl p-4` → small `text-[0.7rem] uppercase tracking-widest text-white/70` **`Up Next`**; `text-xl font-bold` **`14:30`**; `text-white/90` **`Tea Ceremony`**; `text-white/70 text-xs` **`12 min walk • Gion`**; **`Navigate`** button `bg-accent text-white text-sm font-semibold rounded-full px-6 py-2.5 mt-3` + `...` circle `w-10 h-10 rounded-full border border-ocean/10 flex items-center justify-center`; home indicator `w-20 h-1 bg-gray-300 rounded-full mx-auto mt-3`.

**How GSAP** (one `useGSAP(scope)`):
```
.reveal → fromTo {y:50, opacity:0} → {y:0, opacity:1, duration:1, ease:"power3.out"} (top 85%)
.gsap-chat-bubble  fromTo {y:20, opacity:0, scale:.9}  → {y:0, opacity:1, scale:1, duration:.5, stagger:.2, ease:"back.out(1.5)"} , "-=0.5"
.gsap-map-item    fromTo {x:-20, opacity:0}           → {x:0, opacity:1, duration:.5, stagger:.15, ease:"power2.out"} , "-=0.5"
.gsap-map-pin     fromTo {y:-20, opacity:0, scale:0}   → {y:0, opacity:1, scale:1, duration:.6, stagger:.2, ease:"back.out(2)"} , "-=0.2"
.gsap-mobile-sheet fromTo {y:100, opacity:0}           → {y:0, opacity:1, duration:.7, ease:"power3.out"} , "-=0.6"
```
**3D tilt (per `.gsap-3d-mockup`)** — pointer mapping IS swapped on purpose:
```
onMouseMove:
  rect = el.getBoundingClientRect()
  x = e.clientX - rect.left; y = e.clientY - rect.top
  T = (x - w/2) / (w/2)          // horizontal ratio (reuses w = rect.width)
  w = (y - h/2) / (h/2)          // vertical ratio overwrites w!
  gsap.to(inner, { rotateX: -w*8, rotateY: T*8, duration: .5, ease: "power2.out",
                  transformPerspective: 1200, transformOrigin: "center center" })
onMouseLeave:
  gsap.to(inner, { rotateX: 0, rotateY: 0, duration: .7, ease: "power2.out" })
```

## 6. POSTCARDS (`home/Postcards.tsx`, bundle `G2`) — `#postcards`

`<section id="postcards" className="bg-gray-50 py-24" aria-labelledby="postcards-title">` → inner `max-w-7xl mx-auto px-6`.

- **Head**: kicker `text-xs font-bold tracking-widest uppercase text-accent mb-3 block` → **`Postcards from real trips`**; H2 serif → **`Planned by Wayfare, walked by travelers`**; sub → **`Three mornings from the Kyoto itinerary you just watched come together.`**
- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-10 mt-16`.
- **Card shell** (`.gsap-postcard`, `bg-white rounded-[32px] p-4 shadow-card transition-transform`): rotations `rotate-[-1deg]` (1), `rotate-[1.5deg] translate-y-3` (2), `rotate-[-1.5deg]` (3).
- **Image**: `rounded-[24px] overflow-hidden` → `<img className="w-full aspect-4/3 object-cover scale-[1.2]" src alt>` (the `scale-[1.2]` + `.gsap-parallax-img` create the parallax crop).
- **Caption** (`mt-4`): `font-semibold text-ink` caption + `text-sm text-ink/60` day line.

| deg | img src | alt | caption | day |
|---|---|---|---|---|
| `-1deg` | `https://wayfare-iota-pink.vercel.app/Postcards 1.png` | `A golden temple pavilion reflected in a still lake` | `Temple gold at 06:40` | `Day 1 · Southern Kyoto` |
| `1.5deg` + `translate-y-3` | `https://wayfare-iota-pink.vercel.app/Postcards 2.png` | `A steaming bowl of ramen` | `Ramen worth the detour` | `Day 2 · Downtown food crawl` |
| `-1.5deg` | `https://wayfare-iota-pink.vercel.app/Postcards 3.png` | `Arashiyama bamboo grove` | `Arashiyama, before breakfast` | `Day 3 · Bamboo grove` |

**Postcard animations** (per card):
```
.gsap-parallax-img → fromTo {yPercent:-10} → {yPercent:10, ease:"none", scrub,
        scrollTrigger:{trigger: img.parentElement, start:"top bottom", end:"bottom top"}}
.gsap-postcard → paused timeline:
    0:  { y:-12, rotation:0, scale:1.02, boxShadow:"0 25px 50px -12px rgba(23,52,71,0.25)", duration:.4, ease:"back.out(2)" }
        + img { scale:1.28, duration:.4, ease:"power2.out" }
    mouseenter → play(); mouseleave → reverse()
```

## 7. PRICING (`home/Pricing.tsx`, bundle `V2`) — `#pricing` (FOCAL SECTION)

`<section id="pricing" className="py-24 bg-white" aria-labelledby="pricing-title">` → inner `max-w-7xl mx-auto px-6`.

- **Head** (`text-center mb-16 max-w-2xl mx-auto reveal`):
  - Kicker: `text-xs font-bold tracking-widest uppercase mb-3 block` + **`text-sunset`** (NOT accent!) → **`Pricing`** (lowercase source, uppercased by `uppercase` class)
  - H2: `text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6` (Inter BOLD, NOT serif) → **`Cheaper than one bad tour`**
  - Sub: `text-lg text-ink/70` → **`Start free. Upgrade when a big trip deserves the full toolkit.`**
- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8 items-center` (middle card sits raised).

Tier data (exact):

| | Daytripper | Wanderer (elevated) | Expedition |
|---|---|---|---|
| `aria-label` | `Daytripper plan` | `Wanderer plan, most popular` | `Expedition plan` |
| card classes | `bg-white rounded-[32px] p-10 shadow-card reveal` | `bg-ocean-deep text-white rounded-[32px] p-10 shadow-float relative reveal transform md:-translate-y-4` | `bg-white rounded-[32px] p-10 shadow-card reveal` |
| `--rd` | `0` | `1` | `2` |
| name (`h3`) | `Daytripper` | `Wanderer` | `Expedition` |
| desc (`text-sm mb-8 h-10`) | `For weekend escapes and testing the waters.` | `For the big annual trip and everything between.` | `For families, sabbaticals, and travel creators.` |
| price / unit | `$0` · `forever` | `$9` · `/mo, billed yearly` | `$19` · `/mo, billed yearly` |
| h3 class | `font-bold tracking-tight text-3xl text-ink mb-2` | `font-bold tracking-tight text-3xl mb-2` | `font-bold tracking-tight text-3xl text-ink mb-2` |
| desc class | `text-sm text-ink/60 mb-8 h-10` | `text-sm text-white/60 mb-8 h-10` | `text-sm text-ink/60 mb-8 h-10` |
| price wrap `div` | `mb-8` | `mb-8` | `mb-8` |
| price `span` | `font-bold tracking-tight text-5xl text-ink` | `font-bold tracking-tight text-5xl` (inherits white) | `font-bold tracking-tight text-5xl text-ink` |
| unit `span` | `text-sm text-ink/60 ml-2` | `text-sm text-white/60 ml-2` | `text-sm text-ink/60 ml-2` |
| `ul` | `flex flex-col gap-4 mb-10 text-ink/80 text-sm` | `flex flex-col gap-4 mb-10 text-white/90 text-sm` | `flex flex-col gap-4 mb-10 text-ink/80 text-sm` |

Features (each `<li className="flex gap-3 items-start">` + lucide `Check` `size={18}` — wrapper class `text-sunset shrink-0` on light cards, **`text-sky shrink-0` on the Wanderer** dark card):
1. **Daytripper** — `2 active trips` · `AI itineraries up to 4 days` · `Map view with routed days` · `Weather-aware reshuffles`
2. **Wanderer** — `Unlimited trips, up to 30 days each` · `Offline maps & live day-of nudges` · `Budget tracking with trades` · `Group planning & voting links` · `Hidden-gem mode`
3. **Expedition** — `Everything in Wanderer` · `5 traveler seats, shared budgets` · `Multi-city & open-jaw routing` · `Concierge rebooking`

Buttons (each `<a className="block w-full text-center …" href="#cta">`):
- **Daytripper / Expedition**: `bg-transparent hover:bg-sky/50 text-ocean border-2 border-ocean/20 font-bold py-4 rounded-full transition-all active:scale-[0.96]` → **`Start planning free`**
- **Wanderer**: `bg-accent hover:bg-accent-deep text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] font-bold py-4 rounded-full transition-all hover:-translate-y-1 active:scale-[0.96]` → **`Start planning free`**

**Wanderer "Most popular" badge**: BEFORE the h3, `absolute -top-4 left-1/2 -translate-x-1/2 bg-sunset text-white text-[0.7rem] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg` → **`Most popular`** (verbatim `text-[0.7rem]`, not `text-xs`).

**Pricing animation**: plain `.reveal` — `fromTo {y:50, opacity:0} → {y:0, opacity:1, duration:1, ease:"power3.out"}` with `scrollTrigger "top 85%"`.

## 8. FINAL CTA (`home/CTA.tsx`, bundle `Q2`) — `#cta`

`<section id="cta" className="bg-ocean-deep text-white pt-24 pb-0 relative overflow-hidden">`:
- **BG image overlay**: `<img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Wayfare/Footer/bg-footer.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />`
- **Gradient veil**: `absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-deep/80 to-transparent pointer-events-none`
- Inner: `max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 relative z-10`.
- **Left**:
  - H2 serif: `font-serif text-5xl md:text-7xl tracking-tight` → **`Join us on your next adventure!`**
  - p: `mt-4 text-lg text-white/80 max-w-xl` → **`The best trips start with a good plan. Yours takes 40 seconds. No credit card required to start.`**
  - Actions `mt-8 flex items-center gap-4`: button `bg-white text-ink font-bold rounded-full px-8 py-4 hover:bg-gray-100 hover:-translate-y-1 transition-all active:scale-[0.96]` → **`Start planning free`**; **QR pill** `inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-4 py-2` → `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="w-6 h-6" />` inside `w-10 h-10 bg-white rounded-full flex items-center justify-center` + **`Scan to download`** `text-sm text-white/80`.
- **Right — phone** (`relative`): `w-[300px] h-[500px] bg-ink-dark rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.4)] border border-white/10 relative` with:
  - screen `bg-gray-50 rounded-t-[34px] p-4 relative h-full overflow-hidden`
  - status bar: `9:41` (`text-ink font-semibold text-sm pl-4 pt-3`) + signal/wifi/battery (`text-ink`) + notch `absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-xl`
  - trip card `bg-white rounded-3xl p-4 shadow-soft mt-8`: label `text-xs font-bold tracking-widest uppercase text-accent` **`Kyoto Explorer`**; title `text-2xl font-bold text-ink mt-1` **`3 days · September`**; image `<img src=".../phone-img.avif" className="w-full h-44 object-cover rounded-[24px] mt-3" />`; below it `text-center py-2 text-xs text-ink/60` **`Tap to preview`** + hover glow `absolute inset-0 bg-gradient-to-br from-ocean/20 to-sunset/20 blur-lg opacity-0 group-hover:opacity-100` (card is `group`);
  - **`View Itinerary`** button `mt-4 w-full bg-accent text-white font-bold text-lg rounded-full py-3.5 shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:bg-accent-deep hover:scale-[0.98] transition-all`.

**CTA animation**: same `.reveal` entrance — `fromTo {y:50, opacity:0} → {y:0, opacity:1, duration:1, ease:"power3.out"}` `"top 85%"`.

## 9. FOOTER (`layout/Footer.tsx`, bundle `Z2`)

`<footer className="bg-ocean-deep text-white pt-16 pb-8 border-t border-white/10">` → inner `max-w-7xl mx-auto px-6`.

- **Grid**: `md:grid md:grid-cols-3 gap-10 mb-10`.
- **Brand**: `flex items-center gap-2.5` → `<Logo className="w-8 h-8 text-white" />` (fill overridden to white) + `text-2xl font-bold tracking-tight` **`Wayfare`**; tagline `mt-3 max-w-xs text-sm text-white/60` → **`The AI trip planner with a map-first heart. Dream it, type it, walk it.`**
- **Link columns** (`space-y-3 text-sm`): heading `text-xs font-semibold tracking-widest uppercase text-white/50 mb-3`;
  - **Product**: `Features`→`#features` · `How it works`→`#how` · `Pricing`→`#pricing`
  - **Company**: `About`→`#top` · `Field notes`→`#top` · `Careers`→`#top`
  - Links: `text-white/80 hover:text-white transition-colors no-underline`.
- **Base row**: `border-t border-white/10 pt-6 flex flex-wrap gap-4 justify-between text-xs text-white/40` → **`An Elux concept — Dribbble shot series`** (em-dash U+2014) + **`© 2026 Wayfare (a fictional product)`** (© U+00A9).

---

# COMMON MISTAKES TO AVOID (these break the 1:1 look)

1. ❌ **Rounding or abstracting arbitrary values** — `rounded-[40px]`→`rounded-3xl`, `md:text-[5.5rem]`→`md:text-6xl`, `text-[0.7rem]`→`text-xs`, `w-[64%]`→`w-2/3`. Every value is intentional; copy character-for-character.
2. ❌ **Setting the Pricing H2 in serif** — it is Inter **bold** (`text-4xl md:text-5xl font-bold tracking-tight text-ink`), the ONLY display heading in the site that is NOT Playfair. All other H2s (Hero/Features/How/Postcards/CTA) are `font-serif`.
3. ❌ **Using accent for the Pricing kicker** — the kicker is **`text-sunset`** (near-black `#09090b`), not `text-accent`. Postcards/Features/How kickers are `text-accent`; Pricing breaks the pattern on purpose.
4. ❌ **"Fixing" the dead `animate-[dash_20s_linear_infinite]`** — it references `@keyframes dash` that does NOT exist. The route renders as a static dashed line. Keep the class on the path, add NO keyframes, no shimmer keyframes either.
5. ❌ **Autoplaying the hero video without `muted playsInline` or `object-[center_38%] scale-[1.2]`** — muted autoplay is required or browsers block it; the `object`/`scale` values are what make the parallax crop look intentional. It is NOT mirrored (no `-scale-x-100`).
6. ❌ **Skipping the Lenis↔GSAP sync** — without `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add(s => lenis.raf(s*1000))` + `gsap.ticker.lagSmoothing(0)`, every scrub (`gsap-parallax-hero`, `gsap-parallax-img`) stutters or desyncs from scroll position.
7. ❌ **Flattening the Wanderer card** — it must keep `bg-ocean-deep text-white … shadow-float transform md:-translate-y-4` (raised via `translate-y`), the `-top-4 … bg-sunset` "Most popular" badge with `text-[0.7rem] tracking-widest`, and **`text-sky`** (light blue-grey) check icons. `text-sunset` checks live ONLY on the white cards.
8. ❌ **Forgetting `h-10` on tier descriptions** — every price card locks its description block to a fixed `h-10` so the three price rows align across cards. Removing it shifts prices out of alignment.
9. ❌ **Removing the mix-blend overlays** — the How phone gradient (`mix-blend-multiply`) and the CTA / footer bg images (`mix-blend-overlay opacity-30` + the `from-ocean-deep via-ocean-deep/80 to-transparent` veil) are what keep dark sections readable over photos. They're load-bearing.
10. ❌ **Rendering the press marquee once** — the 5 brands must render **twice** inside the `w-max` track so the `xPercent:-50` loop is seamless (the same pattern as any marquee; the count and gap `gap-12 md:gap-24` are exact).
11. ❌ **Swapping glyphs** — em-dashes are U+2014 (`Start planning — it's free`, `join … — real travel times`), middots U+00B7 (`AI trip planner · map-first`, `Day 1 · Southern Kyoto`), bullets U+2022 (`Online • Responds instantly`, `12 min walk • Gion`), ✦ U+2726, `ō` in `Tōfuku-ji`, `€` (€1,280 of €2,000 planned), `©` 2026. Replacing any with ASCII breaks the typographic character.
12. ❌ **"Clean-casing" kickers** — `Pricing`, `Why travelers switch`, etc. are stored lowercase and uppercased by the `uppercase` class. Keep the class; do not hard-uppercase the string.
13. ❌ **Restructuring the recovery** — the bundle uses `clsx`-free literal ternarys; keep the class strings as literal template concatenations (e.g. scrolled vs. static header classes) rather than merging them into a utility function you "clean up".

---

# IMAGES / ASSETS

- **Base URL**: `https://wayfare-iota-pink.vercel.app/` — reference every file directly by URL; do not copy into `public/`.

| URL | Content | Where used / treatment |
|---|---|---|
| `/hero.mp4` | Blue map flyover video (~2.4MB) | Hero map panel — `autoPlay muted loop playsInline`, `object-[center_38%]`, `scale-[1.2]`, parallax scrub `yPercent -15→15`; no audio |
| `/map.png` | Static map backdrop | How step 2 map mockup — under the route SVG + pins |
| `/bg-how.png` | Dotted/blueish texture | Behind How mockups |
| `/bg-footer.png` | Dark map illustration | CTA bg — `opacity-30 mix-blend-overlay` under a `from-ocean-deep via-ocean-deep/80 to-transparent` veil |
| `/phone-img.avif` | Phone app UI shot (itinerary screen) | How step 3 phone screen (`h-[220px]`, `mix-blend-multiply` gradient) + CTA phone card (`h-44 rounded-[24px]`) |
| `/Postcards 1.png` | Golden temple pavilion, Kyoto | Postcard 1 — `aspect-4/3 object-cover scale-[1.2]`, parallax `yPercent -10→10`, hover scale 1.28 |
| `/Postcards 2.png` | Steaming bowl of ramen | Postcard 2 — same treatment |
| `/Postcards 3.png` | Arashiyama bamboo grove | Postcard 3 — same treatment |
| `https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg` | Black/white QR code | CTA QR pill — `w-6 h-6` inside a `w-10 h-10 bg-white rounded-full` circle |

**Art direction / regeneration master prompt:** *Photorealistic travel editorial photos, calm and well-lit, shallow depth of field —
1) a golden Kyoto temple pavilion reflected in a still pond at 06:40 soft dawn light;
2) a steaming bowl of ramen on a dark wooden counter, moody warm light, visible steam;
3) a sun-drenched Arashiyama bamboo grove path, morning backlight, slight haze. All in a muted, slightly desaturated band of sky-blue/grey with a single warm accent, 4:3.*

**Video spec**: `/hero.mp4` — ~5–8s seamless loop of a stylized map with animated route; `muted loop playsInline`; no audio; parallaxed by scroll (never scrubbed by pointer).

---

# TECH STACK

- Vite (SPA) + React 19 (`react.transitional.element`) + TypeScript; `vite.config.ts`: `plugins: [react(), tailwindcss()]`
- **Tailwind CSS 4.3** via `@tailwindcss/vite` — CSS-first `@theme` in `src/index.css`, **no `tailwind.config.js`**; utilities referenced by token name (`text-ink`, `bg-ocean-deep`, `text-accent`, `bg-sky`)
- **gsap 3.15.0 + ScrollTrigger + @gsap/react 2.1.2** (`useGSAP`) — ALL entrances, scroll reveals, scrub parallax, marquee, postcard hover, 3D phone tilt (`transformPerspective: 1200`)
- **lenis 1.3.25** via `lenis/react` (`ReactLenis root`, `lerp: .1, duration: 1.2, smoothWheel: true`), hard-synced to GSAP ticker (`lagSmoothing(0)`)
- **lucide-react v0.546.0** — `check, compass, map, map-pin, clock, sun, wallet, users, message-square, navigation, camera, globe, mountain` (size 24/28 or `18` for checks); custom paper-plane logo SVG (`Dg`)
- Deliberately absent: no router, no state library, no shadcn, no other icon set, no custom CSS keyframes (only Tailwind `spin/ping/pulse/bounce`)
- `dev`/`build` are the standard Vite React-TS scripts; Playwright was used to extract the DOM