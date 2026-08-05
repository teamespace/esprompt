Create a React + Vite + TypeScript + Tailwind CSS 4 component for the About / social-proof section ("press and community praise") of the Stillwave Meditation landing page. This is the editorial quote section that sits directly below the phone-preview section and above the features section. It is a **scroll-scrubbed word-by-word reveal**: a 300vh tall spacer with a sticky 100vh centered stage. As the user scrolls, the 28 words of a big italic serif quote fade in one at a time (scrubbed to scroll position), then the citation and the five "featured in" logos rise in with a stagger. The section uses GSAP (gsap + ScrollTrigger + @gsap/react useGSAP) — no framer-motion, no CSS-only animation. There are zero images in this section — the "logos" are styled text spans.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **The section is a 3-screen scroll-scrub, not a static block.** The JSX structure must be exactly: `<section class="proof">` → spacer `<div ref={sectionRef} style={{ height: '300vh', position: 'relative', marginTop: '-5.5rem', marginBottom: '-4.5rem' }}>` → sticky stage `<div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>` → `.wrap` → `.proof-quote` + `.proof-logos`. **The `useGSAP` ref goes on the 300vh spacer div, NOT on the `<section>`** — the ScrollTrigger measures `start: 'top 50%'` / `end: 'bottom 80%'` against that spacer's box, so putting the ref on the section shifts the whole scrub phase and breaks 1:1. Do not remove the sticky wrapper, do not replace 300vh with a fixed height, do not convert the negative margins to padding.
2. **The quote must be split into word spans at render time** — `QUOTE.split(' ')` — one `<span>` per word (28 words), each containing an inner `<span className="quote-word" style={{ opacity: 0.2 }}>` followed by a literal trailing space inside the outer span. The initial inline `opacity: 0.2` on every `.quote-word` is load-bearing — GSAP animates `opacity` 0.2 → 1.
3. **GSAP timeline parameters are exact, character-for-character:** `scrollTrigger: { trigger: <sectionRef>, start: 'top 50%', end: 'bottom 80%', scrub: true }`; first tween `.quote-word` → `{ opacity: 1, stagger: 0.1, ease: 'none', duration: 0.1 }`; second tween `.reveal-after` → `fromTo({ y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, ease: 'power2.out', duration: 1.5 }, '+=0.5')` — note the positional third parameter `'+=0.5'`. Use `useGSAP(() => {...}, { scope: ref })` with `gsap.registerPlugin(ScrollTrigger)`.
4. **The `.reveal-after` elements carry inline `opacity: 0` at render time** (cite: `display: 'block'`; logo spans: `display: 'inline-block'`). GSAP's fromTo sets the y:20 start. Do not put `y` in the inline style, do not use CSS classes for the hidden state.
5. **All copy is exact, including typographic characters.** The quote uses curly quotes `“ ”` and an em dash `—` (U+2014). The cite line is `Mindful Living — App of the Year shortlist`. The last logo span is `4.9 ★ · 31,000 ratings` with a literal `★` (U+2605) and `·` (U+00B7). Do not straighten quotes, do not replace the em dash with `-`, do not swap `★` for `*`.
6. **Font weights are unusual — keep them exact:** blockquote `font-weight: 340` (three forty, not 400, not a range), cite `font-weight: 600`, first/third/fifth logo spans `font-weight: 500`, second `600`, fourth `300`. Do not "normalize" 340.
7. **`--serif` vs `--sans` assignment per element is load-bearing:** blockquote and logo spans 1, 3, 5 (nth-child odd) use `var(--serif)`; cite and logo spans 2 and 4 (nth-child even) use `var(--sans)` — implemented via `.proof-logos span:nth-child(2)` and `.proof-logos span:nth-child(4)` CSS rules. Do not unify the logo font, do not use Tailwind font utilities here.
8. **There are NO media queries and NO responsive breakpoints for this section** (mobile included) — the quote `clamp(1.8rem, 3.8vw, 2.8rem)` and logo gap `clamp(1.6rem, 4.5vw, 3.8rem)` fluidly scale on their own. Do not add `@media` rules, do not reflow to a column layout.
9. **Global page styles are required context and must be included exactly as given below** (body cream background, ink text, the fixed noise overlay `body:after` at `opacity: .055`, `--serif`/`--sans` variables, `.wrap` 1160px). The section renders on top of that noise overlay.
10. **This section has no assets** — no images, no videos, no logos as pictures. The five "Featured in" marks are pure text. Do not invent logos, do not fetch `logoipsum-370.svg` or `bg-card.png` (those belong to other sections).

---

# FONTS

Two Google Fonts, loaded via `@import` as **the very first line of the CSS file** — BEFORE `@import "tailwindcss"` (this matches the production bundle's rule order and avoids the Tailwind "import must precede other rules" warning). NOT `<link>` tags, NOT Tailwind `@theme`:

```css
/* line 1 of the CSS file, before @import "tailwindcss" */
@import "https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap";
```

| Family | Usage | Notes |
|---|---|---|
| **Libre Caslon Text** | `--serif`: blockquote, logo spans 1/3/5 | loaded weights: 400, 700, italic 400 |
| **Instrument Sans** | `--sans`: body default, cite, logo spans 2/4 | variable 400..700 |

Fallbacks: `"Libre Caslon Text", serif` and `"Instrument Sans", sans-serif` exactly as declared in `:root`.

---

# GLOBAL CSS + DESIGN TOKENS — COPY EXACTLY

All values are exact from the production stylesheet. Do not round, do not merge, do not convert `clamp()` to fixed sizes.

## `:root` variables

```css
:root {
  --cream: #f7f2ea;
  --cream-deep: #efe7d9;
  --pine: #1e3a2f;
  --pine-deep: #152a22;
  --pine-soft: #2c4c3e;
  --clay: #c96f4a;
  --clay-soft: #e4b49e;
  --clay-wash: #f0dfd2;
  --ink: #22302a;
  --mist: #1e3a2f24;
  --serif: "Libre Caslon Text", serif;
  --sans: "Instrument Sans", sans-serif;
}
```

## Page base (required context)

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
html, body { overflow-x: clip; }
body {
  font-family: var(--sans);
  background: var(--cream);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.65;
}
body::after {
  content: "";
  pointer-events: none;
  z-index: 2000;
  opacity: 0.055;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  width: 200%;
  height: 200%;
  position: fixed;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
}
section { scroll-margin-top: 84px; }
::selection { background: var(--clay); color: var(--cream); }
a { color: inherit; }
img { max-width: 100%; }
:focus-visible { outline: 3px solid var(--clay); outline-offset: 3px; border-radius: 4px; }
.wrap { width: min(1160px, 92%); margin-inline: auto; }
```

## About-section CSS (verbatim)

```css
.proof { padding: 100px; }

.proof-quote {
  text-align: center;
  max-width: 60rem;
  margin: 0 auto 3.2rem;
}

.proof-quote blockquote {
  font-family: var(--serif);
  color: var(--pine);
  letter-spacing: -0.01em;
  font-size: clamp(1.8rem, 3.8vw, 2.8rem);
  font-style: italic;
  font-weight: 340;
  line-height: 1.4;
}

.proof-quote cite {
  font-style: normal;
  font-family: var(--sans);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--clay);
  margin-top: 1.1rem;
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
}

.proof-logos {
  opacity: 0.55;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1.6rem, 4.5vw, 3.8rem);
  display: flex;
}

.proof-logos span {
  font-family: var(--serif);
  letter-spacing: 0.02em;
  color: var(--pine);
  white-space: nowrap;
  font-size: 1.12rem;
  font-weight: 500;
}

.proof-logos span:nth-child(2) {
  font-family: var(--sans);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
}

.proof-logos span:nth-child(4) {
  font-family: var(--sans);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 300;
}
```

There is NO `.reveal-text` / `.quote-word` / `.reveal-after` CSS — those states live in inline styles + GSAP only. Do not add CSS rules for them.

---

# COMPONENT — COPY THIS EXACTLY

```tsx
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QUOTE =
  "“The first meditation app that doesn't feel like a library. It feels like someone wrote tonight's session while thinking of you — because, in a sense, something did.”";

const LOGOS = [
  'The Slow Review',
  'Wellbeing Weekly',
  'Praxis Journal',
  'Kindred',
  '4.9 ★ · 31,000 ratings',
];

export function Proof() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 80%',
          scrub: true,
        },
      });

      tl.to('.quote-word', { opacity: 1, stagger: 0.1, ease: 'none', duration: 0.1 });
      tl.fromTo(
        '.reveal-after',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: 'power2.out', duration: 1.5 },
        '+=0.5'
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className="proof" aria-label="Press and community praise">
      <div
        ref={sectionRef}
        style={{ height: '300vh', position: 'relative', marginTop: '-5.5rem', marginBottom: '-4.5rem' }}
      >
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="wrap">
            <div className="proof-quote" style={{ margin: '0 auto 3.2rem' }}>
              <blockquote className="reveal-text">
                {QUOTE.split(' ').map((word, i) => (
                  <span key={i}>
                    <span className="quote-word" style={{ opacity: 0.2 }}>{word}</span>{' '}
                  </span>
                ))}
              </blockquote>
              <cite className="reveal-after" style={{ opacity: 0, display: 'block' }}>
                Mindful Living — App of the Year shortlist
              </cite>
            </div>
            <div className="proof-logos" aria-label="Featured in">
              {LOGOS.map((item) => (
                <span key={item} className="reveal-after" style={{ opacity: 0, display: 'inline-block' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# CONTENT — VERBATIM

**Blockquote (28 words, split on single spaces; curly quotes and em dash are part of the data):**

> “The first meditation app that doesn't feel like a library. It feels like someone wrote tonight's session while thinking of you — because, in a sense, something did.”

**Cite:**

> Mindful Living — App of the Year shortlist

**Featured-in row (5 items, `aria-label="Featured in"`):**

| # | Text | CSS class of span |
|---|---|---|
| 1 | `The Slow Review` | serif 1.12rem / 500 / ls 0.02em |
| 2 | `Wellbeing Weekly` | sans .9rem / 600 / ls 0.16em / uppercase |
| 3 | `Praxis Journal` | serif 1.12rem / 500 / ls 0.02em |
| 4 | `Kindred` | sans .85rem / 300 / ls 0.3em / uppercase |
| 5 | `4.9 ★ · 31,000 ratings` | serif 1.12rem / 500 / ls 0.02em |

---

# MOTION — VERBATIM PARAMETERS

| Trigger | Target | From | To | Duration | Stagger | Ease | Position |
|---|---|---|---|---|---|---|---|
| ScrollTrigger, `trigger: <300vh spacer ref>`, `start: 'top 50%'`, `end: 'bottom 80%'`, `scrub: true` | `.quote-word` (28 spans) | inline `opacity: 0.2` | `opacity: 1` | `0.1` | `0.1` | `'none'` | tween 1 |
| same timeline | `.reveal-after` (cite + 5 logos) | `y: 20, opacity: 0` | `y: 0, opacity: 1` | `1.5` | `0.15` | `'power2.out'` | `'+=0.5'` after tween 1 |

Behavior notes:
- The scrub makes word reveal **follow the scrollbar** — scroll down = words brighten progressively; scroll up = they dim back. This must remain scrubbed, not a one-shot play.
- The `.reveal-after` fromTo is appended `0.5s` after the last word tween completes (positional `'+=0.5'`), so logos start rising while the final words are still revealing.
- `useGSAP` is scoped (`{ scope: sectionRef }`) so `.quote-word` / `.reveal-after` selectors only match inside this section.
- Since the tween targets class selectors inside a 300vh sticky stage, the sticky element's `top: 0` keeps the stage centered for the entire scrub range.

---

# SCAFFOLD

- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 (compiled via `@tailwindcss/vite`) + `gsap` + `@gsap/react`.
- **Dependencies:** `react`, `react-dom`, `gsap@^3.15`, `@gsap/react`, `tailwindcss@^4`, `@tailwindcss/vite`.
- The Tailwind import (`@import "tailwindcss";`) must be present in the CSS file but the about section itself uses **no Tailwind utilities** — every style is the custom CSS above. Do not restyle the section with Tailwind classes.
- `index.html` title on the production site is the Google AI Studio default `My Google AI Studio App` — keep a plain title, it does not affect the section.

---

# ⚠️ COMMON MISTAKES TO AVOID

- ❌ Do NOT replace the 300vh+sticky scroll-scrub with a plain centered block, `whileInView`/`useInView` reveals, or CSS `animation-timeline`. The scrub-accompanying word reveal is the signature behavior.
- ❌ Do NOT animate the quote with a single opacity tween on the whole `blockquote` — it must be per-word, `stagger: 0.1`, `ease: 'none'`.
- ❌ Do NOT round `font-weight: 340` to 400, or `marginTop: '-5.5rem'`/`marginBottom: '-4.5rem'` to other values.
- ❌ Do NOT straighten typography: keep `“ ”`, `—`, `★`, `·`. `doesn't` and `tonight's` use a straight ASCII apostrophe — keep them as-is.
- ❌ Do NOT unify the five logo spans into one font style — the nth-child(2)/nth-child(4) sans-serif uppercase overrides are intentional (Wellbeing Weekly uppercase sans; Kindred wide-tracked light sans).
- ❌ Do NOT add responsive rules (`@media(max-width:720px)` etc.) for `.proof` — the original has none; the clamps handle small screens.
- ❌ Do NOT add `mix-blend` modes, shadows, borders, or backgrounds to `.proof` — it sits directly on the cream body background.
- ❌ Do NOT change `opacity: 0.55` on `.proof-logos` (dim by design) or the initial `opacity: 0.2` of quote words.
- ❌ Do NOT convert `var(--serif)`/`var(--sans)` to Tailwind `font-serif`/`font-sans` or to raw font stacks — the variables ARE the token system.
- ❌ Do NOT invent logos or images for the "Featured in" row; the five items are text-only spans.
- ❌ Do NOT put `y`/`transform` in the `.reveal-after` inline styles — only `opacity: 0` (+ `display`), GSAP owns the transform.
- ❌ Do NOT add `data-reveal` or `data-load` attributes to any element in this section — those belong to other sections' reveal systems.

---

# TECH STACK

- React 19 + TypeScript, Vite build, Tailwind CSS v4 (`@tailwindcss/vite`)
- `gsap` 3.15 (bundled `ScrollTrigger` 3.15.0) + `@gsap/react` 2.1.2 (`useGSAP`) — the only animation library in this section
- No framer-motion, no lenis, no image assets, no icon library, no state library
- Fonts: Libre Caslon Text (400/700/italic 400) + Instrument Sans (variable 400..700) via Google Fonts `@import`
- Color system: cream `#f7f2ea` page, pine `#1e3a2f` quote text, clay `#c96f4a` cite accent, ink `#22302a` body text
