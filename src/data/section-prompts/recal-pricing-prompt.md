Create a React + Vite + TypeScript + Tailwind CSS 4 component for a Pricing section based on the "Recall" neo-brutalist aesthetic.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR A 1:1 RESULT)

1. **This design IS Tailwind-utility-heavy — but with arbitrary values everywhere.** Every spacing, radius, rotation, and shadow is an exact arbitrary value like `p-[2.1rem]`, `rounded-[24px]`, `-rotate-[0.8deg]`, `shadow-[3px_3px_0_var(--color-black)]`. **COPY EVERY CLASS STRING VERBATIM.** Do not round to `p-8` or `rounded-2xl`, do not "simplify" rotations.
2. **COPY THE FULL CSS FILE BELOW VERBATIM as `src/index.css`.** It defines the `@theme` tokens (colors, fonts, shadows) and the `.brutal-border`/`.brutal-shadow*` utilities. Everything else is Tailwind v4 utilities in JSX.
3. **Neo-brutalist shadows are hard offsets — zero blur.** `shadow-[10px_10px_0_var(--color-pink)]`, `brutal-shadow` (6px). Never add blur, never use Tailwind's default `shadow-*`.
4. **Every border is `3px solid #191919`** via the `.brutal-border` utility (except 2.5px inner borders for the checkmarks).
5. **Rotations are part of the design system.** The side cards sit at `-rotate-[0.8deg]` and `rotate-[0.8deg]` and should **straighten to `rotate-0` on hover** using `hover:!rotate-0`.

---

# FONTS

Two Google Fonts, loaded via `@import` at the very top of `src/index.css` (already included in the CSS below):
- **Baloo 2** (400–800) — display font for ALL headings, buttons, pills, prices. Applied via `font-display` + base rule on `h1–h6` (`font-extrabold tracking-tight leading-tight`).
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
  html { scroll-behavior: smooth; }
  body {
    @apply font-body bg-paper text-black antialiased leading-relaxed text-[1.05rem];
    overflow-x: clip;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight leading-tight font-extrabold;
  }
}

@layer utilities {
  .brutal-border { border: 3px solid var(--color-black); }
  .brutal-shadow { box-shadow: var(--shadow-brutal); }
  .brutal-shadow-sm { box-shadow: var(--shadow-brutal-sm); }
  .brutal-shadow-lg { box-shadow: var(--shadow-brutal-lg); }
}
```

---

# COMPONENT STRUCTURE: PRICING SECTION

`<section id="pricing" className="py-[5.5rem] pb-[6rem]" aria-labelledby="pricing-h">`

- **Head** (`text-center mb-[3.6rem]`): 
  - Kicker pill: `bg-mint text-black font-display font-extrabold text-[0.85rem] tracking-[0.08em] uppercase rounded-full shadow-[3px_3px_0_var(--color-black)] px-[1rem] py-[0.3rem] mb-[1.2rem] -rotate-[1.2deg] inline-block` — "Pricing"
  - `<h2>Less than your exam-week energy drinks</h2>`
  - Subtext: "Every plan includes unlimited studying. You only pay for how much the AI generates."

- **Grid**: `grid grid-cols-1 lg:grid-cols-3 gap-[1.8rem] items-stretch max-w-[25rem] lg:max-w-none mx-auto`.

Each tier is a `motion.article` (using Framer Motion `whileInView` with `y:30→0`, delay `i*0.1`) with `aria-label={`${t.name} plan`}` and classes:
`` `brutal-border rounded-[24px] p-[2.1rem] px-[1.9rem] flex flex-col relative transition-transform duration-[0.18s] ease-out hover:!rotate-0 ${t.hot ? 'bg-black text-white shadow-[10px_10px_0_var(--color-pink)] -order-1 lg:order-none lg:-translate-y-[10px]' : `bg-white brutal-shadow ${t.rotate}`}` ``

  - **Hot flag** (only if t.hot is true): `absolute -top-[18px] left-1/2 -translate-x-1/2 -rotate-[2.5deg] bg-pink text-white brutal-border rounded-full font-display font-extrabold text-[0.78rem] tracking-[0.06em] uppercase px-[1rem] py-[0.32rem] shadow-[3px_3px_0_var(--color-black)] whitespace-nowrap` — "Most popular"
  - **Title/Desc**: `<h3 className="text-[1.5rem]">{t.name}</h3>`, `<p className={`text-[0.92rem] mt-[0.2rem] mb-[1.4rem] ${t.hot ? 'text-[#D8D8D8]' : 'text-[#5A5A5A]'}`}>{t.desc}</p>`
  - **Price**: `<p className="font-display font-extrabold text-[3rem] leading-none">{t.price}<small className="font-body font-bold text-[0.85rem] opacity-70">{t.unit}</small></p>`
  - **Features List**: `<ul className={`list-none my-[1.5rem] mb-[2rem] flex flex-col gap-[0.6rem] text-[0.94rem] ${t.hot ? 'text-[#D8D8D8]' : ''}`}>`
    - Each feature item is `<li className="flex gap-[0.55rem] items-start">`
    - The checkmark for each feature: `<span className={`shrink-0 font-extrabold w-[22px] h-[22px] text-[0.8rem] grid place-items-center border-[2.5px] border-black rounded-[7px] mt-[0.15rem] ${t.hot ? 'bg-pink border-pink text-white' : 'bg-yellow text-black'}`}>✓</span>`
  - **Button**: `<Button variant={t.btnVar} className="mt-auto" as="a" href="#cta">{t.btnStr}</Button>`

**The 3 Tiers Data**:

| name | desc | price / unit | features | btnStr / btnVar | flags | rotate |
|---|---|---|---|---|---|---|
| Freebie | For trying it the night before a quiz. | $0 / ` /forever` | 3 AI study sets per month<br>Flashcards + basic quizzes<br>Spaced-repetition reviews<br>1 photo or PDF upload per set | "Start free" / white | — | -rotate-[0.8deg] |
| Honor Roll | For a full course load, all semester. | $6 / ` /month, billed yearly` | Unlimited AI study sets<br>Exam mode + weak-spot radar<br>Unlimited PDFs, photos & voice memos<br>Study battles with friends<br>Offline decks on mobile | "Go Honor Roll" / pink | **hot** ("Most popular") | — |
| Study Squad | For groups, classes & tutors. | $4 / ` /seat/month, min 4 seats` | Everything in Honor Roll<br>Shared class decks & leaderboards<br>Teacher dashboard with progress views<br>Priority human support | "Build a squad" / white | — | rotate-[0.8deg] |

## SHARED BUTTON COMPONENT
**`components/ui/Button.tsx`**:
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
