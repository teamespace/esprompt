Create a React + Vite + TypeScript + Tailwind CSS 4 landing page for an AI study app called "Recall". The page has these sections in order: Header (sticky yellow bar), Hero (split layout with an interactive mouse-scrub video card + a notes→flashcard demo row), black testimonial Marquee, Features (6-card grid), How It Works (3 alternating steps on a yellow band), Stats (3 animated counters), Pricing (3 tiers), Final CTA (yellow band), Footer (black). Use `motion` (motion/react) for all entrance/scroll animations, magnetic buttons, 3D text reveals, and spring counters; `lenis` for smooth scrolling. There is NO icon library in the UI — icons are emojis/text glyphs (✦ ✓ 👆 ?) plus two hand-drawn inline SVGs (a squiggle underline and a curved arrow). The design is playful neo-brutalism: thick 3px black borders, hard offset shadows (no blur), slightly rotated cards that straighten on hover, a yellow + pink + cream palette, bouncy Baloo 2 display type, and a 3D claymation pink-brain mascot in every illustration.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR A 1:1 RESULT)

1. **This design IS Tailwind-utility-heavy — but with arbitrary values everywhere.** Every spacing, radius, rotation, and shadow is an exact arbitrary value like `p-[1.9rem]`, `rounded-[22px]`, `-rotate-[1.3deg]`, `shadow-[3px_3px_0_var(--color-black)]`. **COPY EVERY CLASS STRING VERBATIM.** Do not round `1.9rem` to `p-8`, do not replace `rounded-[22px]` with `rounded-2xl`, do not "simplify" rotations.
2. **COPY THE FULL CSS FILE BELOW VERBATIM as `src/index.css`.** It defines the `@theme` tokens (colors, fonts, shadows), the `.brutal-border`/`.brutal-shadow*` utilities, the 3D-flip helper classes, the marquee keyframes, and the `.tape` decoration. Everything else is Tailwind v4 utilities in JSX.
3. **The ONLY page container is** `max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto`. Every section's inner content uses exactly this. There is no other max-width wrapper (smaller local constraints like `max-w-[600px]` / `max-w-[24rem]` are noted per section).
4. **Neo-brutalist shadows are hard offsets — zero blur.** `shadow-[3px_3px_0_var(--color-black)]`, `brutal-shadow` (6px), `brutal-shadow-lg` (10px). Never add blur, never use Tailwind's default `shadow-*`.
5. **Every border is `3px solid #191919`** via the `.brutal-border` utility (except 2.5px inner borders, noted inline). Never `border-gray-*`.
6. **Rotations are part of the design system.** Cards sit at `-rotate-[0.8deg]`…`-rotate-[1.4deg]` (or positive) and **straighten to `rotate-0` on hover** (feature cards use `hover:!rotate-0` with `!` because the base rotate is a utility too). Do not remove them.
7. **Interactive physics ease is `[0.3, 1.35, 0.45, 1]` (bouncy) for hero entrances and `[0.3, 1.2, 0.45, 1]` for scroll reveals.** Cards/steps use `type:'spring', damping:14, stiffness:100`. Keep them exact.
8. All mascot imagery and video use remote URLs (see ASSETS section). Reference as `https://recall-alpha-one.vercel.app/Flashcards.png` etc.

---

# FONTS

Two Google Fonts, loaded via `@import` at the very top of `src/index.css` (already included in the CSS below):
- **Baloo 2** (400–800) — display font for ALL headings, buttons, logo, pills, marquee, prices. Applied via `font-display` + base rule on `h1–h6` (`font-extrabold tracking-tight leading-tight`).
- **Karla** (400–800, normal + italic) — body text. Applied to `body` at `text-[1.05rem] leading-relaxed`.

---

# FULL CSS FILE — COPY THIS EXACTLY AS `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Karla:ital,wght@0,400..800;1,400..800&display=swap');
@import "tailwindcss";

@theme {
  --color-yellow: #FFD53D;
  --color-yellow-soft: #FFF3C4;
  --color-black: #191919;
  --color-white: #FFFFFF;
  --color-pink: #FF5C8A;
  --color-pink-soft: #FFE1EA;
  --color-mint: #4ECBA5;
  --color-violet: #7C6CFF;
  --color-paper: #FFFBEE;
  
  --font-display: "Baloo 2", "Comic Sans MS", cursive;
  --font-body: "Karla", "Trebuchet MS", sans-serif;
  
  --shadow-brutal: 6px 6px 0 var(--color-black);
  --shadow-brutal-sm: 4px 4px 0 var(--color-black);
  --shadow-brutal-lg: 10px 10px 0 var(--color-black);
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  body {
    @apply font-body bg-paper text-black antialiased leading-relaxed text-[1.05rem];
    overflow-x: clip;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight leading-tight font-extrabold;
  }
}

@layer utilities {
  .brutal-border {
    border: 3px solid var(--color-black);
  }
  .brutal-shadow {
    box-shadow: var(--shadow-brutal);
  }
  .brutal-shadow-sm {
    box-shadow: var(--shadow-brutal-sm);
  }
  .brutal-shadow-lg {
    box-shadow: var(--shadow-brutal-lg);
  }
  
  .perspective-1200 {
    perspective: 1200px;
  }
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
}

/* Animations */
@keyframes scroll {
  to { transform: translateX(-50%); }
}
.animate-marquee {
  animation: scroll 26s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
  }
}

/* Tape Decoration */
.tape {
  background: rgba(255, 92, 138, 0.75);
  border: 2px dashed rgba(25, 25, 25, 0.4);
}
```

---

# DESIGN TOKENS & SPACING CHEAT-SHEET (quick reference)

| Token / Element | Exact value |
|---|---|
| Page container | `max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto` |
| Brand black | `#191919` (`black`), paper bg `#FFFBEE` (`paper`) |
| Yellow `#FFD53D` / soft `#FFF3C4` · Pink `#FF5C8A` / soft `#FFE1EA` · Mint `#4ECBA5` · Violet `#7C6CFF` | |
| Extra tint classes used inline | `bg-[#E9E6FF]` (violet-soft), `bg-[#E4F7EF]` (mint-soft) |
| Borders | `3px solid #191919` (`.brutal-border`); inner chips `border-[2.5px]` |
| Shadows (no blur, ever) | sm `4px 4px 0` · base `6px 6px 0` · lg `10px 10px 0` |
| Card radii | 20px / 22px / 24px / 28px bands; pills `rounded-full`; buttons `rounded-xl` |
| Header | sticky, `bg-yellow border-b-[3px]`, inner `py-3` |
| Hero | `pt-[4.2rem] lg:pt-[5rem] pb-[5.5rem]`, `overflow-clip` |
| Marquee band | `bg-black border-y-[3px] py-[0.9rem]` |
| Features | `py-[5.5rem] pb-[5rem]`; grid `gap-[1.8rem]` 1/2/3 cols |
| How It Works | yellow band `border-y-[3px]`, `py-[5.5rem] pb-[6rem]`; steps `gap-[3rem]`, `mt-[4rem]` |
| Stats | `pt-[4.5rem] pb-[1rem]`; grid `gap-[1.6rem]` |
| Pricing | `py-[5.5rem] pb-[6rem]`; grid `gap-[1.8rem]` |
| Final CTA | `pt-[1rem] pb-[6rem]`; band `p-[4rem] px-[clamp(1.5rem,6vw,4.5rem)] rounded-[28px]` |
| Footer | `bg-black border-t-[3px] pt-[3.2rem] pb-[2.4rem]` |
| H1 | `text-[clamp(2.5rem,3.8vw,4.5rem)] leading-[1.05]` |
| Section H2 | `text-[clamp(2.15rem,5vw,3.6rem)] max-w-[24ch] mx-auto` (CTA: `clamp(2.2rem,5.4vw,3.8rem) max-w-[20ch]`) |
| Kicker pill | `font-display font-extrabold text-[0.85rem] tracking-[0.08em] uppercase … rounded-full shadow-[3px_3px_0_var(--color-black)] px-[1rem] py-[0.3rem] mb-[1.2rem] -rotate-[1.2deg]` |
| Buttons | base `font-display font-extrabold text-[1.05rem] px-[1.7rem] py-[0.85rem] brutal-border rounded-xl brutal-shadow-sm` |

---

# APP STRUCTURE

```
src/
  main.tsx                 — React 19 createRoot + StrictMode, imports ./index.css
  index.css                — THE FULL CSS ABOVE (verbatim)
  App.tsx                  — composition below
  components/
    ui/Button.tsx               — 4-variant brutal button (full code below)
    layout/Header.tsx           — sticky yellow header + mobile menu
    layout/Footer.tsx           — black footer
    home/Hero.tsx               — hero + video scrub + notes→flashcard demo
    home/Features.tsx           — marquee + features grid + how-it-works + stats
    home/Pricing.tsx            — pricing tiers + final CTA band
    animations/SmoothScroll.tsx — Lenis wrapper
    animations/TextReveal.tsx   — per-char 3D flip reveal
    animations/MagneticButton.tsx
    animations/AnimatedNumber.tsx
public/
  (None - assets are hosted remotely at https://recall-alpha-one.vercel.app/)
```

`App.tsx` composition:

```tsx
<SmoothScroll>
  <Header />
  <main id="main">
    <Hero />
    <Features />   {/* renders: marquee band, #features, #how, stats */}
    <Pricing />    {/* renders: #pricing, #cta */}
  </main>
  <Footer />
</SmoothScroll>
```

Set `<title>Recall — Your messy notes, reborn as quizzes that stick</title>` in `index.html`.

---

# SHARED COMPONENTS — COPY THESE VERBATIM

**`components/ui/Button.tsx`** — polymorphic (`as="a"` renders an anchor). Variants: `yellow` (default), `pink`, `white`, `black`:

```tsx
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonProps = {
  variant?: 'yellow' | 'pink' | 'white' | 'black';
  as?: 'button' | 'a';
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ variant = 'yellow', as = 'button', className = '', children, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-display font-extrabold text-[1.05rem] px-[1.7rem] py-[0.85rem] brutal-border rounded-xl cursor-pointer brutal-shadow-sm transition-transform transition-shadow transition-colors hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_var(--color-black)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--color-black)] focus-visible:outline-[4px] focus-visible:outline-pink focus-visible:outline-offset-[3px]";
  
  const variants = {
    yellow: "bg-yellow text-black",
    pink: "bg-pink text-white",
    white: "bg-white text-black",
    black: "bg-black text-yellow hover:bg-[#000]"
  };

  const Component = as as any;

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
```

**`animations/SmoothScroll.tsx`**:
```tsx
import { ReactLenis } from 'lenis/react'
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>{children}</ReactLenis>
}
```

**`animations/TextReveal.tsx`** — splits text into words/chars; each char animates `opacity 0, y:50, rotateX:-90` → visible with `type:'spring', damping:12`, container `staggerChildren:0.02`, `whileInView`, `viewport={{ once:true, margin:"-10%" }}`. Words are `inline-block` spans joined by `'\u00A0'`; chars are `motion.span inline-block` with `style={{ transformStyle:'preserve-3d' }}`. Used for the hero H1 first line and the Features/How H2s.

**`animations/MagneticButton.tsx`** — wrapper `motion.div inline-block`; on mousemove sets `{ x:(e.clientX-left-width/2)*0.3, y:(e.clientY-top-height/2)*0.3 }`, resets on leave, `animate={pos}` with `transition={{ type:'spring', stiffness:150, damping:15, mass:0.1 }}`.

**`animations/AnimatedNumber.tsx`** — `useMotionValue(0)` → `useSpring(mv, { damping:40, stiffness:80 })`; `useInView(ref, { once:true, margin:"-10%" })` triggers `setTimeout(200ms)` then `motionValue.set(value)`; on spring change writes `` `${prefix}${latest.toFixed(decimals)}${suffix}` `` into the span. Initial text is `prefix + "0" (+".0…" if decimals) + suffix`.

---

# SECTIONS — STRUCTURE, CONTENT & ANIMATION

## HEADER (`layout/Header.tsx`)

`<header className="sticky top-0 z-50 bg-yellow border-b-[3px] border-black">` → container div `max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto flex items-center justify-between py-3 gap-4`:

- **Logo**: `<a href="#main" className="flex items-center gap-[0.6rem] no-underline text-black font-display font-extrabold text-[1.45rem]" aria-label="Recall home">` → mark: `<span className="w-[38px] h-[38px] bg-pink brutal-border rounded-[10px] shadow-[3px_3px_0_var(--color-black)] grid place-items-center shrink-0 text-white text-[1.15rem] -rotate-[6deg]" aria-hidden="true">?</span>` + text `Recall`
- **Mobile button** (`md:hidden`): white brutal chip `px-[0.7rem] py-[0.45rem] font-display font-extrabold text-[0.9rem]`, label "Menu", toggles `menuOpen`, with `aria-expanded` / `aria-controls="top-menu"`.
- **Nav `<ul id="top-menu">`**: `` `${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-yellow md:bg-transparent border-b-[3px] border-black md:border-b-0 flex-col md:flex-row items-stretch md:items-center px-[1.4rem] py-[1.1rem] pb-[1.4rem] md:p-0 gap-4 md:gap-[1.6rem] list-none` `` — 4 items:
  1. `<a href="#features">Features</a>`
  2. `<a href="#how">How it works</a>`
  3. `<a href="#pricing">Pricing</a>` — link classes: `no-underline text-black font-bold text-[0.97rem] border-b-[3px] border-transparent hover:border-pink pb-[2px] transition-colors w-fit block md:inline` (each closes the menu onClick)
  4. `<Button as="a" href="#cta" variant="black" className="w-fit !px-[1.15rem] !py-[0.5rem] !text-[0.95rem] !shadow-[3px_3px_0_rgba(25,25,25,0.35)]">Make my first quiz</Button>`

## HERO (`home/Hero.tsx`)

`<section className="relative pt-[4.2rem] lg:pt-[5rem] pb-[5.5rem] overflow-clip" aria-labelledby="hero-h">`

**Confetti** (6 absolutely-positioned shapes, `pointer-events-none z-0`, via a tiny `Confetti` helper `<span style={{background:color}}>`):
1. pink `w-[16px] h-[16px] rounded-full hidden sm:block` — top 12% left 7%
2. mint `w-[14px] h-[14px] rounded-[4px] rotate-[18deg] hidden sm:block` — top 24% right 9%
3. violet `w-[10px] h-[10px] rounded-full hidden sm:block` — top 8% right 22%
4. yellow `w-[12px] h-[12px] rounded-[4px] rotate-[18deg]` — top 46% left 3%
5. pink `w-[12px] h-[12px] rounded-full` — bottom 14% right 4%
6. mint `w-[8px] h-[8px] rounded-full` — bottom 30% left 12%

**Main row**: `flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[4rem] xl:gap-[6rem]`

**Left column** (`flex-1 w-full text-center lg:text-left max-w-[600px] lg:max-w-[540px]`) — every block is a `motion.*` with `initial={{opacity:0, y:24, scale:0.97}}` → `animate`, `duration:0.7`, `ease:[0.3,1.35,0.45,1]`, delays 0 / 0.2 / 0.3 / 0.4 (H1 word-span delay 0.5):

1. delay 0 — pill: `inline-block bg-white brutal-border rounded-full brutal-shadow-sm px-[1.1rem] py-[0.4rem] font-bold text-[0.9rem] -rotate-[1.5deg] mb-[1.6rem]` — copy: `Used by <b className="text-pink">340,000 students</b> the night before finals`
2. `<h1 id="hero-h" className="text-[clamp(2.5rem,3.8vw,4.5rem)] tracking-tight leading-[1.05] mx-auto lg:mx-0 mb-[1.4rem]">`:
   - `<TextReveal text="Your messy notes, reborn as" />` + `<br className="hidden xl:block" />`
   - `<motion.span>` (delay 0.5) `relative inline-block whitespace-nowrap mt-2 lg:mt-1` — text `quizzes that stick` + squiggle underline SVG: `<svg viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -left-[2%] -bottom-[0.16em] w-[104%] h-[0.3em] overflow-visible"><path d="M3 10 C 30 3, 55 14, 85 8 S 140 2, 170 10 S 235 15, 297 5" fill="none" stroke="var(--color-pink)" strokeWidth="7" strokeLinecap="round"/></svg>`
3. delay 0.2 — sub: `mx-auto lg:mx-0 mb-[2.2rem] text-[1.18rem] text-[#3A3A3A] leading-relaxed` — "Paste anything — lecture scribbles, textbook photos, a 40-page PDF. Recall's AI turns it into flashcards, practice quizzes, and match games in about 20 seconds. Cramming, upgraded."
4. delay 0.3 — actions `flex flex-wrap gap-4 justify-center lg:justify-start mb-4 relative z-10`: `<MagneticButton><Button as="a" href="#cta" variant="pink">Paste my notes — free</Button></MagneticButton>` + `<MagneticButton><Button as="a" href="#how" variant="white">Watch it work</Button></MagneticButton>`
5. delay 0.4 — small print `text-[0.88rem] font-bold text-[#6B6B6B]`: "No signup for your first 3 decks · Works with 27 languages"

**Right column** (`flex-1 w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end relative z-10`): `<motion.figure>` delay 0.5, `relative w-full aspect-square -rotate-[2deg] brutal-border rounded-[22px] brutal-shadow-lg flex items-center justify-center bg-white`:
- `<video src="https://recall-alpha-one.vercel.app/hero-new.mp4" loop muted playsInline preload="auto" className="w-full h-full object-cover rounded-[22px] -scale-x-100" />` (note: mirrored!)
- `<figcaption className="absolute -bottom-[16px] left-1/2 -translate-x-1/2 rotate-[2deg] bg-white brutal-border rounded-full brutal-shadow-sm font-display font-extrabold text-[0.88rem] px-[1rem] py-[0.28rem] whitespace-nowrap">Fresh out of the AI oven</figcaption>`

**Video mouse-scrub logic** (useEffect on mount, `videoRef`):
- Desktop only (`window.innerWidth < 1024` → skip): track `mousemove`; `targetTime = video.currentTime + (deltaX / window.innerWidth) * 0.8 * video.duration`, clamped to `[0, duration]`; set `video.currentTime = targetTime` guarded by an `isSeeking` flag; on `seeked`, if `|currentTime - targetTime| > 0.05` seek again.
- On resize / mount: `<1024px` → `video.play()`, `>=1024px` → `video.pause()`. Clean up all three listeners.

**Demo row** (`motion.div` delay 0.6, `relative z-10 mt-[4rem] lg:mt-[6.5rem] grid lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1fr)] grid-cols-1 gap-[1.4rem] items-center text-left lg:max-w-none max-w-[480px] mx-auto`):

1. **Notes file card** — `bg-white brutal-border rounded-[20px] brutal-shadow-lg -rotate-[1.4deg] w-full`:
   - Title bar: `flex items-center gap-[0.6rem] border-b-[3px] border-black px-[1.1rem] py-[0.75rem] font-display font-extrabold text-[1rem] bg-yellow-soft rounded-t-[17px]` — text `bio-201-lecture-9.txt` + 3 dots (`ml-auto flex gap-[0.35rem]`, each `w-[11px] h-[11px] rounded-full border-[2.5px] border-black block` in `bg-pink`, `bg-yellow`, `bg-mint`)
   - Body `px-[1.25rem] py-[1.15rem] pb-[1.3rem] text-[0.92rem] text-[#4A4A4A] space-y-[0.55rem]`:
     - `mitochondria = <HL yellow>powerhouse</HL>, makes ATP via <HL pink-soft>cellular respiration</HL>` — highlight classes: `bg-yellow px-[0.25em] rounded-[4px] font-bold text-black` (or `bg-pink-soft`)
     - `krebs cycle happens in the <HL yellow>matrix</HL> — 2 ATP + NADH + FADH2 per glucose??`
     - `<p className="text-[#8A8A8A] italic">(prof said this is DEFINITELY on the exam)</p>`
     - `electron transport chain → inner membrane → ~34 ATP`
   - Footer `px-[1.25rem] pb-[1.25rem]`: `<Button variant="pink" className="w-full" onClick={handleRegenClick}>✦ Generate my study set</Button>`
2. **Middle connector** (`flex flex-col items-center gap-[0.4rem] font-display font-extrabold text-[0.85rem] text-black`, `aria-hidden`):
   - Curved arrow SVG: `<svg viewBox="0 0 64 46" className="w-[48px] h-[40px] lg:w-[64px] lg:h-[46px] lg:rotate-0 rotate-[80deg]"><path d="M4 10 C 22 2, 44 12, 56 28 M56 28l-12-3 M56 28l2-12" fill="none" stroke="var(--color-black)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>` (rotated 80° on mobile, horizontal on lg)
   - Pill: `<span className="bg-mint brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] px-[0.85rem] py-[0.3rem] rotate-[2deg] whitespace-nowrap">18 cards · 20 sec</span>`
3. **Flashcard** (`flex flex-col items-center gap-4 w-full`):
   - `<button className="w-[min(340px,100%)] h-[230px] perspective-1200 bg-transparent border-0 p-0 cursor-pointer block group" + conditional 'flipped' class`, `aria-pressed={flipped}`, `aria-label={`Flashcard. Question: ${flips[idx].q} Press to flip and reveal the answer.`}`
   - Inner: `block relative w-full h-full transform-style-3d transition-transform duration-[650ms] ease-[cubic-bezier(0.35,1.4,0.45,1)] group-[.flipped]:rotate-y-180`
   - **Front**: `absolute inset-0 backface-hidden brutal-border rounded-[20px] brutal-shadow-lg flex flex-col p-[1.2rem] pb-[1.3rem] text-left bg-white rotate-[1.6deg]` — tag `self-start font-display font-extrabold text-[0.72rem] tracking-[0.1em] uppercase border-[2.5px] border-current rounded-full px-[0.7rem] py-[0.18rem] mb-auto text-pink` ("Question · Bio 201"), question `font-display font-extrabold text-[1.5rem] leading-[1.15] mb-auto text-black`, hint `text-[0.85rem] font-bold text-[#8A8A8A] flex items-center gap-[0.4rem]` ("👆 Tap to flip")
   - **Back**: same shell but `bg-pink text-white rotate-y-180 -rotate-[1.6deg]` — tag "Answer", answer text, footer `text-pink-soft` ("Nice — marked as known ✓")
   - Counter pill below: `font-display font-extrabold text-[0.9rem] bg-black text-yellow rounded-full px-[1rem] py-[0.3rem] shadow-[3px_3px_0_rgba(25,25,25,0.25)] -rotate-[1deg]` showing `flips[idx].n`
   - **Card data** (`flips` array):
     1. q "Where in the cell does the Krebs cycle take place?" / a "The mitochondrial matrix — yielding 2 ATP plus NADH & FADH₂ per glucose." / n "Card 7 of 18"
     2. q "Roughly how many ATP does the electron transport chain produce?" / a "About 34 ATP, along the inner mitochondrial membrane." / n "Card 8 of 18"
     3. q "What process do mitochondria use to make ATP?" / a "Cellular respiration — the reason they're called the cell's powerhouse." / n "Card 9 of 18"
   - **Behavior**: auto-flip every 3400ms until `userTouched`; when un-flipping, advance `idx` after 330ms (`setTimeout`). Card click and "Generate my study set" both set `userTouched=true` and use the same 330ms advance.

## MARQUEE (top of `home/Features.tsx`)

`<div className="bg-black border-y-[3px] border-black py-[0.9rem] overflow-hidden relative" aria-hidden="true">` → `<div className="flex gap-[2.8rem] w-max animate-marquee">` renders the 6-item list **twice** (`[...Array(2)]`) for a seamless loop. Each item: `<span className="font-display font-extrabold text-[1.05rem] text-yellow flex items-center gap-[2.8rem] whitespace-nowrap after:content-['✦'] after:text-pink">TEXT</span>`. The 6 texts:
1. `Raised my midterm from a C+ to an A− — Priya, UBC`
2. `18,000,000 flashcards generated`
3. `My whole study group ditched manual decks — Tomas, TU Delft`
4. `Works with PDFs, photos & voice memos`
5. `Finally a study tool my ADHD brain likes — Maya, NYU`
6. `4.9 ★ across 40k app reviews`

## FEATURES (`home/Features.tsx`)

`<section id="features" className="py-[5.5rem] pb-[5rem] relative" aria-labelledby="features-h">` — 2 confetti spans (`violet 12px circle top-[6%] left-[5%]`, `pink 14px rounded-[4px] rotate-[18deg] top-[12%] right-[6%]`).

- **Head** (`motion.div` whileInView `y:30→0, duration 0.6, ease [0.3,1.2,0.45,1]`, `text-center mb-[3.4rem]`): kicker pill `bg-pink text-white` "The toolbox"; `<h2 className="text-[clamp(2.15rem,5vw,3.6rem)] max-w-[24ch] mx-auto"><TextReveal text="One paste. Six ways to actually learn it." /></h2>`; sub `text-[#3A3A3A] max-w-[36rem] mx-auto mt-[0.9rem] text-[1.1rem]`: "Recall doesn't just quiz you — it schedules the reviews, finds your weak spots, and turns them into tomorrow's warm-up."
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.8rem] md:max-w-none max-w-[24rem] mx-auto`. Each card is a `motion.article` (`initial={{opacity:0,y:50,scale:0.95}}` whileInView, spring damping 14 stiffness 100, `delay:(i%3)*0.1`) with classes: `` `bg-white brutal-border rounded-[22px] brutal-shadow p-[1.9rem] px-[1.7rem] relative transition-transform transition-shadow duration-[0.18s] ease-out hover:!rotate-0 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_var(--color-black)] ${s.rotate}` ``
  - Icon: `<span className={`w-[86px] h-[86px] brutal-border rounded-[18px] grid place-items-center mb-[1.2rem] shadow-[4px_4px_0_var(--color-black)] overflow-hidden ${s.emojiBg}`}><img src={s.img} className="w-full h-full object-cover" /></span>`
  - `<h3 className="text-[1.4rem] mb-[0.55rem]">` + `<p className="text-[0.95rem] text-[#3A3A3A]">`
  - Optional pill: `absolute -top-[14px] right-[16px] font-display font-extrabold text-[0.7rem] uppercase tracking-[0.07em] bg-yellow brutal-border rounded-full px-[0.7rem] py-[0.2rem] shadow-[2px_2px_0_var(--color-black)] rotate-[3deg]`

The 6 cards (img / emojiBg / title / desc / rotate / pill):

| # | img | emojiBg | title | desc | rotate | pill |
|---|---|---|---|---|---|---|
| 1 | https://recall-alpha-one.vercel.app/Flashcards.png | bg-yellow-soft | Flashcards, auto-written | The AI pulls out every testable fact and writes clean question–answer pairs — including the ones hiding in your margin scribbles. | -rotate-[1.3deg] | — |
| 2 | https://recall-alpha-one.vercel.app/Quizzes.png | bg-pink-soft | Quizzes that feel like the real test | Multiple choice, fill-in-the-blank, and short answer — weighted toward whatever your professor said is 'definitely on the exam.' | rotate-[1.1deg] | Exam mode |
| 3 | https://recall-alpha-one.vercel.app/Spaced.png | bg-[#E9E6FF] | Spaced repetition, zero setup | Recall schedules each card for the moment you're about to forget it. Five minutes a day beats five hours the night before. | -rotate-[0.8deg] | — |
| 4 | https://recall-alpha-one.vercel.app/Photos.png | bg-[#E4F7EF] | Photos & PDFs welcome | Snap the whiteboard before it's erased. Upload the 60-slide deck. Handwriting, diagrams, tables — it reads them all. | rotate-[1.4deg] | — |
| 5 | https://recall-alpha-one.vercel.app/Battle.png | bg-yellow-soft | Battle your study group | Turn any deck into a live quiz battle. Winner picks the pizza toppings; everyone's grades win either way. | -rotate-[1deg] | — |
| 6 | https://recall-alpha-one.vercel.app/radar.png | bg-pink-soft | Weak-spot radar | See exactly which topics keep tripping you up, and get a fresh mini-quiz targeting just those before the exam. | rotate-[0.9deg] | New |

## HOW IT WORKS (`home/Features.tsx`)

`<section id="how" className="py-[5.5rem] pb-[6rem] bg-yellow border-y-[3px] border-black relative overflow-clip" aria-labelledby="how-h">` — inner container is `text-center`.

- Head (same whileInView motion): kicker pill `bg-violet text-white` "How it works"; `<h2><TextReveal text="From chaos to quiz in three moves" /></h2>`
- Steps: `flex flex-col gap-[3rem] max-w-[1020px] mx-auto mt-[4rem]`. Each step is a `motion.div` (`initial={{opacity:0,y:50,scale:0.98}}` whileInView, spring damping 14 stiffness 100, `delay:i*0.1`) with classes: `` `group flex flex-col md:flex-row gap-[2rem] md:gap-[3rem] items-center bg-white brutal-border rounded-[20px] brutal-shadow p-[1.7rem] sm:p-[2.5rem] relative ${s.rotate} ${isEven ? 'md:ml-[4%]' : 'md:mr-[4%]'}` `` (`isEven = i % 2 !== 0`)
  - Tape: `<span className="tape absolute -top-[14px] left-1/2 -translate-x-1/2 -rotate-[2deg] w-[96px] h-[26px] z-20" aria-hidden="true" />`
  - Text side (`${isEven ? 'md:order-2' : 'md:order-1'}`, `flex sm:flex-row flex-col gap-[1.6rem] sm:items-start flex-1 w-full`):
    - Number badge: `<span className={`shrink-0 font-display font-extrabold text-[2.3rem] leading-none w-[64px] h-[64px] grid place-items-center brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg] ${s.color}`}>{s.num}</span>`
    - `<div className="text-left mt-2 sm:mt-0">` → `<h3 className="text-[1.7rem] mb-[0.6rem] transition-colors duration-300 group-hover:text-pink">{s.title}</h3>` + `<p className="text-[1.05rem] text-[#3A3A3A] leading-relaxed">{s.desc}</p>`
  - Image side (`${isEven ? 'md:order-1' : 'md:order-2'}`, `flex-1 w-full relative mt-[1rem] md:mt-0`):
    - Offset block: `<div className={`absolute inset-0 ${s.imgBg} brutal-border rounded-[16px] transition-all duration-300 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px] group-hover:shadow-[6px_6px_0_var(--color-black)]`} />`
    - Image frame: `<div className="relative w-full aspect-[4/3] bg-black brutal-border rounded-[16px] overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:-rotate-2"><img className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" /></div>`

The 3 steps:

| num | color | title | desc | rotate | img / alt | imgBg |
|---|---|---|---|---|---|---|
| 1 | bg-pink text-white | Dump everything in | Paste text, drop a PDF, snap your notebook, or even forward a voice memo of the lecture. Recall sorts the signal from the doodles. | -rotate-[0.9deg] | https://recall-alpha-one.vercel.app/Dump.png — "Messy notebook and sticky notes" | bg-pink |
| 2 | bg-mint text-black | Get your study set | In ~20 seconds you have flashcards, a practice quiz, and a match game — organized by topic and tagged by how likely each fact is to be tested. | rotate-[0.9deg] | https://recall-alpha-one.vercel.app/Get.png — "Digital flashcards on a screen" | bg-mint |
| 3 | bg-violet text-white | Study 5 minutes a day | Recall pings you with exactly the cards you're about to forget. Streaks, battles, and a very smug confetti cannon keep you coming back. | -rotate-[0.9deg] | https://recall-alpha-one.vercel.app/Study.png — "Calendar or time tracking" | bg-violet |

## STATS (`home/Features.tsx`)

`<section className="pt-[4.5rem] pb-[1rem]" aria-label="Recall by the numbers">` — grid `grid-cols-1 md:grid-cols-3 gap-[1.6rem] text-center md:max-w-none max-w-[22rem]`. Each stat: `motion.div` (whileInView `y:30→0, duration 0.6, delay i*0.1, ease [0.3,1.2,0.45,1]`) with `` `brutal-border rounded-[20px] brutal-shadow p-[1.8rem] px-[1rem] ${s.bg} ${s.rotate}` `` → `<b className="block font-display font-extrabold text-[clamp(2rem,4vw,2.9rem)] leading-[1.1]">` (the AnimatedNumber) + `<span className="font-bold text-[0.92rem] text-[#3A3A3A]">`:

1. `<AnimatedNumber value={1.3} prefix="+" decimals={1} />` / "average GPA-point gain after one semester*" / bg-pink-soft / -rotate-[1deg]
2. `<AnimatedNumber value={20} suffix=" sec" />` / "from pasted notes to a full study set" / bg-yellow-soft / rotate-[0.8deg]
3. `<AnimatedNumber value={92} suffix="%" />` / "of users still studying with Recall at week 12" / bg-[#E4F7EF] / -rotate-[0.6deg]

Footnote: `<p className="…container… text-[0.78rem] text-[#8A8A8A] mt-[1rem] text-center">*Self-reported by 4,120 students, spring semester survey.</p>`

## PRICING (`home/Pricing.tsx`)

`<section id="pricing" className="py-[5.5rem] pb-[6rem]" aria-labelledby="pricing-h">`

- Head (`text-center mb-[3.6rem]`): kicker pill `bg-mint text-black` "Pricing"; `<h2>Less than your exam-week energy drinks</h2>` (plain, no TextReveal); sub "Every plan includes unlimited studying. You only pay for how much the AI generates."
- Grid: `grid grid-cols-1 lg:grid-cols-3 gap-[1.8rem] items-stretch max-w-[25rem] lg:max-w-none mx-auto`. Each tier is a `motion.article` (whileInView y:30→0, delay i*0.1) with `aria-label={`${t.name} plan`}` and classes: `` `brutal-border rounded-[24px] p-[2.1rem] px-[1.9rem] flex flex-col relative ${t.hot ? 'bg-black text-white shadow-[10px_10px_0_var(--color-pink)] -order-1 lg:order-none lg:-translate-y-[10px]' : `bg-white brutal-shadow ${t.rotate}`}` ``
  - Hot flag: `absolute -top-[18px] left-1/2 -translate-x-1/2 -rotate-[2.5deg] bg-pink text-white brutal-border rounded-full font-display font-extrabold text-[0.78rem] tracking-[0.06em] uppercase px-[1rem] py-[0.32rem] shadow-[3px_3px_0_var(--color-black)] whitespace-nowrap` — "Most popular"
  - `<h3 className="text-[1.5rem]">{t.name}</h3>`, `<p className={`text-[0.92rem] mt-[0.2rem] mb-[1.4rem] ${t.hot ? 'text-[#D8D8D8]' : 'text-[#5A5A5A]'}`}>{t.desc}</p>`
  - Price: `<p className="font-display font-extrabold text-[3rem] leading-none">{t.price}<small className="font-body font-bold text-[0.85rem] opacity-70">{t.unit}</small></p>`
  - Features `<ul className={`list-none my-[1.5rem] mb-[2rem] flex flex-col gap-[0.6rem] text-[0.94rem] ${t.hot ? 'text-[#D8D8D8]' : ''}`}>` — each `<li className="flex gap-[0.55rem] items-start">` starts with check chip: `<span className={`shrink-0 font-extrabold w-[22px] h-[22px] text-[0.8rem] grid place-items-center border-[2.5px] border-black rounded-[7px] mt-[0.15rem] ${t.hot ? 'bg-pink border-pink text-white' : 'bg-yellow text-black'}`}>✓</span>`
  - `<Button variant={t.btnVar} className="mt-auto" as="a" href="#cta">{t.btnStr}</Button>`

The 3 tiers:

| name | desc | price / unit | features | btn / variant | flags |
|---|---|---|---|---|---|
| Freebie | For trying it the night before a quiz. | $0 / ` /forever` | 3 AI study sets per month · Flashcards + basic quizzes · Spaced-repetition reviews · 1 photo or PDF upload per set | "Start free" / white | rotate -rotate-[0.8deg] |
| Honor Roll | For a full course load, all semester. | $6 / ` /month, billed yearly` | Unlimited AI study sets · Exam mode + weak-spot radar · Unlimited PDFs, photos & voice memos · Study battles with friends · Offline decks on mobile | "Go Honor Roll" / pink | **hot** ("Most popular") |
| Study Squad | For groups, classes & tutors. | $4 / ` /seat/month, min 4 seats` | Everything in Honor Roll · Shared class decks & leaderboards · Teacher dashboard with progress views · Priority human support | "Build a squad" / white | rotate rotate-[0.8deg] |

## FINAL CTA (`home/Pricing.tsx`)

`<section id="cta" className="pt-[1rem] pb-[6rem]" aria-labelledby="cta-h">` → `motion.div` (whileInView y:30→0) with `relative bg-yellow brutal-border rounded-[28px] brutal-shadow-lg p-[4rem] px-[clamp(1.5rem,6vw,4.5rem)] text-center overflow-hidden`:

- 4 confetti spans: pink 14px circle (top 18% left 8%) · violet 16px `rounded-[4px] rotate-[18deg]` (top 26% right 10%) · white 10px circle (bottom 20% left 16%) · mint 12px `rounded-[4px] rotate-[18deg]` (bottom 26% right 18%)
- Mascot circle: `relative z-10 w-[124px] h-[124px] mx-auto mb-[1.1rem] brutal-border rounded-full brutal-shadow-sm bg-pink-soft -rotate-[4deg] overflow-hidden flex items-center justify-center` → `<img src="https://recall-alpha-one.vercel.app/CTA.webp" alt="Call to action" className="w-full h-full object-cover" />`
- Pill (`rotate-[1.5deg]`, `bg-pink text-white`, `text-[0.78rem] tracking-[0.06em]`): "Your study buddy" — wrapped in `<p className="mb-0 relative z-10">`
- `<h2 id="cta-h" className="text-[clamp(2.2rem,5.4vw,3.8rem)] max-w-[20ch] mx-auto mb-[1rem] relative z-10">Your notes are sitting right there. Quiz them.</h2>`
- `<p className="max-w-[32rem] mx-auto mb-[2rem] text-[1.12rem] relative z-10">Paste one lecture's worth of notes and see your first deck in 20 seconds. Free, no signup, no card — just fewer all-nighters.</p>`
- `<Button variant="black" as="a" href="#main" className="!text-[1.15rem] !px-[2.3rem] !py-[1rem]">Turn my notes into a quiz</Button>` (inside `relative z-10` div)
- `<p className="mt-[1rem] text-[0.85rem] font-bold text-[#5A5A00] relative z-10">First 3 decks free · Cancel anytime · Your notes are never used to train ads</p>`

## FOOTER (`layout/Footer.tsx`)

`<footer className="bg-black text-[#EDEDED] border-t-[3px] border-black pt-[3.2rem] pb-[2.4rem]">` → container:

- Top row `flex flex-wrap gap-[2.4rem] justify-between mb-[2.4rem]`:
  - Brand: `<p className="font-display font-extrabold text-[1.5rem] text-yellow flex items-center gap-[0.55rem]">` with the same `?` mark (but `shadow-[3px_3px_0_rgba(255,255,255,0.25)]`) + `Recall`; tagline `<p className="mt-[0.6rem] max-w-[19rem] text-[0.92rem] text-[#B9B9B9]">The AI study buddy that turns whatever you've got into whatever gets you the A.</p>`
  - Link groups `flex gap-[3.2rem] flex-wrap`, each: `<h4 className="font-display font-extrabold text-[0.85rem] uppercase tracking-[0.1em] text-pink mb-[0.8rem]">` + `<ul className="list-none flex flex-col gap-[0.5rem] text-[0.93rem]">`; links `text-[#EDEDED] no-underline hover:text-yellow hover:underline`:
    - **Product**: Features (#features) · How it works (#how) · Pricing (#pricing)
    - **Students**: Study guides (#main) · Campus ambassadors (#main) · Help center (#main)
- Base row: `border-t-2 border-dashed border-[#4A4A4A] pt-[1.5rem] flex flex-wrap gap-[0.8rem] justify-between text-[0.85rem] text-[#B9B9B9]` → `<p>An Elux concept &mdash; Dribbble shot series</p>` + `<p>&copy; 2026 Recall (a fictional product)</p>`

---

# COMMON MISTAKES TO AVOID (these break the 1:1 look)

1. ❌ Rounding arbitrary values to Tailwind defaults (`p-[1.9rem]`→`p-7`, `rounded-[22px]`→`rounded-2xl`, `-rotate-[1.3deg]`→`-rotate-1`). Every value is intentional — copy verbatim.
2. ❌ Using Tailwind's default blurred shadows or `border` (1px) / `border-2`. Shadows are hard `Npx Npx 0` offsets; borders are 3px `#191919`.
3. ❌ Removing the slight card rotations — or forgetting that feature cards need `hover:!rotate-0` (the `!` is required to beat the base rotate utility).
4. ❌ Swapping the fonts or weights: display = Baloo 2 **extrabold**, body = Karla. Buttons/pills/prices are `font-display`.
5. ❌ Autoplaying the hero video on desktop — it is **paused on ≥1024px and scrubbed by mouse X**; autoplay only below 1024px. Don't drop `-scale-x-100` (the video is mirrored).
6. ❌ Rendering the marquee once — the 6 items must render **twice** inside `w-max flex` so the `translateX(-50%)` loop is seamless.
7. ❌ Forgetting `overflow-clip` on hero/how sections (and `overflow-x: clip` on body) — rotated cards + confetti otherwise cause horizontal scrollbars.
8. ❌ Building the flashcard with a JS rotate toggle and losing `perspective-1200` / `transform-style-3d` / `backface-hidden` — the flip is pure CSS via the `group-[.flipped]:rotate-y-180` selector and the 650ms `cubic-bezier(0.35,1.4,0.45,1)` transition.
9. ❌ Changing the bouncy easings/springs to plain ease-out — the `[0.3,1.35,0.45,1]` overshoot is the whole personality.
10. ❌ Adding an icon library — icons are emoji glyphs (✦ ✓ 👆 ?), the two inline SVGs specified, and the mascot images. (The original has a dead `lucide-react` import; omit it.)
11. ❌ Replacing `.brutal-border`/`.brutal-shadow*` with ad-hoc utilities — they are defined once in `index.css`; reuse them.
12. ❌ Giving sections a different container than `max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto`.

---

# ASSETS (hosted remotely at https://recall-alpha-one.vercel.app/)

All artwork shares one mascot and one style. **Base prompt for every image:** *"3D claymation render, Pixar-style, of a cute pink brain character with big googly eyes, black eyebrows, round mint-green glasses, thin pink arms and legs and mint sneakers, matte clay texture, soft even studio lighting, plain warm cream (#FDF6E9) background, square 1:1 composition."*

| URL | Subject |
|---|---|
| `https://recall-alpha-one.vercel.app/Flashcards.png` | Mascot holding a yellow pencil and a white flashcard with a blue "?" badge; stack of pastel flashcards + spiral notebook in front |
| `https://recall-alpha-one.vercel.app/Quizzes.png` | Mascot holding a pencil and a blue clipboard with a checklist (one mint checkmark); small blue hourglass beside |
| `https://recall-alpha-one.vercel.app/Spaced.png` | Mascot holding a stack of flashcards, pointing up at three calendar cards connected by mint cycle arrows; mint clock beside |
| `https://recall-alpha-one.vercel.app/Photos.png` | Mascot holding a mint smartphone and a document with a photo + table; open illustrated notebook in front |
| `https://recall-alpha-one.vercel.app/Battle.png` | Three brain characters: winner on a blue podium holding a gold trophy, two others holding blue/yellow tablets, pizza in front |
| `https://recall-alpha-one.vercel.app/radar.png` | Mascot inspecting a round mint radar screen (yellow/red blips) through a yellow magnifying glass |
| `https://recall-alpha-one.vercel.app/Dump.png` | Mascot dropping notebook pages into a big blue funnel; floating PDF file, notebook, photo, voice-memo phone, purple chat bubble with mint arrows |
| `https://recall-alpha-one.vercel.app/Get.png` | Mascot holding a mint stopwatch; arrows linking a quiz sheet, a match-game board and a stack of flashcards |
| `https://recall-alpha-one.vercel.app/Study.png` | Winking mascot holding a phone; desk calendar with checkmarks, mint alarm clock, confetti cannon, three colored card stacks |
| `https://recall-alpha-one.vercel.app/CTA.webp` | Mascot holding a big yellow pencil on a **bright yellow (#FFD53D) background** |
| `https://recall-alpha-one.vercel.app/hero-new.mp4` | Square 3D claymation loop (~5–8s) of the mascot on the same cream studio backdrop with a soft contact shadow — e.g. the brain scribbling and flashcards popping out. Seamless loop, no audio. (Displayed mirrored via CSS `-scale-x-100`.) |

---

# TECH STACK

- Vite 6 + React 19 + TypeScript (`vite.config.ts`: `plugins:[react(), tailwindcss()]`)
- Tailwind CSS 4 via `@tailwindcss/vite` — CSS-first `@theme` config in `index.css`, **no tailwind.config.js**
- `motion` (imported as `motion/react`) — all entrances, whileInView reveals, TextReveal, MagneticButton, AnimatedNumber springs
- `lenis` (`lenis/react` ReactLenis) — smooth scrolling (`lerp:0.1, duration:1.2, smoothWheel:true`)
- No GSAP, no icon library (lucide-react unused in the original), no shadcn
- `main.tsx`: `createRoot` + `<StrictMode><App/></StrictMode>`, imports `./index.css`
