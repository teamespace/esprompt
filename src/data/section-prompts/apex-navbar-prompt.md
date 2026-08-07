Create a React + Vite + TypeScript + Tailwind CSS 4 storefront landing page for "APEX" (Apex Performance Apparel), with a perfect, pixel-perfect focus on the Announcement Bar and the fixed, scroll-reactive Navbar. The page has these parts in order: Announcement Bar (white bar with a centered, static "Free shipping" message enclosed by chevron buttons, and a right-aligned currency selector alongside an English language selector carrying a custom layered circular German flag badge), Navbar (starts as absolute/transparent overlay at `top-0 md:top-[32px]` with white text and a subtle borders-bottom, containing dropdown links, mobile menu button, absolute-centered serif italic logo, and cart status, then transitions dynamically on scroll past 50px into a white, compact fixed bar at `top-0` with black text, bottom border, and shadow), and a high-fidelity scrollable Hero placeholder displaying the athlete photo, large-format uppercase headings, and dual buttons to give the navbar its exact scroll-reactive context. Use `lenis` with `{ autoRaf: true }` for smooth scrolling. No state library, router, or complex custom icons; the icons are standard SVG paths or imported from `lucide-react`. The design is refined, minimalist athletic-editorial: pure white `#ffffff`, deep lab black `#1a1a1a`, slate grey `#551% .027 264.364`, geometric sans-serif Inter Tight typography, and elegant, high-contrast Playfair Display serif italics for the APEX branding.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **THE ENTIRE SITE LIVES IN ONE MAIN FILE: `src/App.tsx`.** The AnnouncementBar, Navbar, Hero placeholder, and scroll-height spacers are all declared and composed within this single file to match the simple, high-fidelity React compilation. Do not split them into structured component directories.
2. **This design is Tailwind CSS 4 utility-heavy.** Every margin, padding, text size, leading, tracking, and border is represented by Tailwind classes with exact arbitrary values where needed (`tracking-[0.15em]`, `text-[11px]`, `md:top-[32px]`, `border-white/10`…). **COPY EVERY CLASS STRING VERBATIM.** Do not simplify or round values (do not change `text-[11px]` to `text-xs` or `py-6` to `py-4` in the base nav).
3. **DO NOT "FIX" THE MOBILE NAVBAR OVERLAP.** On mobile, the un-scrolled transparent Navbar sits at `top-0` and is partially covered by the 31px high `relative z-50` Announcement Bar (the top 11px of the APEX logo text is partially overlapped under the white bar). This is a native quirk of the target site's responsive CSS, and you MUST replicate it exactly for 1:1 fidelity.
4. **THE LOGO FONT WEIGHT MUST COMPUTE TO REGULAR ITALIC (400), NOT BOLD.** The logo class string contains both `font-medium font-bold` (a CSS cascade quirk where `font-medium` defined later in Tailwind v4 wins, resulting in weight 500). Furthermore, because the Google Fonts load only includes weight 400 for the italic style of Playfair Display (`ital,wght@1,400`), the browser falls back to displaying regular weight italic. You must preserve the classes `font-medium font-serif italic font-bold` verbatim to trigger this exact rendering.
5. **REPLICATE THE CUSTOM CSS-LAYERED GERMAN FLAG CIRCULAR BADGE VERBATIM.** Do not replace the flag with a standard country emoji (🇩🇪). The German flag is built using a rounded-full `span` with background `bg-red-600` containing two absolute divs: one top `bg-black w-full h-1/3 absolute top-0` and one bottom `bg-yellow-400 w-full h-1/3 absolute bottom-0`.
6. **THE NAVBAR HAS A LITERAL TIMING CONTEXT ON MOUNT.** The navbar scroll listener sets state on `window.scrollY > 50`. Since there is no immediate initialization invocation of the scroll check inside the `useEffect`, on initial mount (even if the page loads already scrolled down), the navbar will initially mount in its un-scrolled transparent state until the first scroll event fires. Replicate this exact behavior.
7. **THE MOBILE HAMBURGER BUTTON AND CAROUSEL CHEVRONS ARE DECORATIVE.** The chevrons around "Free shipping from €49" and the hamburger icon button on mobile have no active state or onClick handlers in the original. Keep them purely aesthetic and hover-interactive only.
8. **DO NOT USE AN EXTERNAL ICON LIBRARY FOR DROPDOWNS.** The currency and language selectors in the Announcement Bar use inline raw SVG paths (`M19 9l-7 7-7-7` inside `viewBox="0 0 24 24"` with `w-2.5 h-2.5` sizes). Do not replace them with Lucide icons.
9. **LENIS MUST BE INITIALIZED WITH `autoRaf: true`.** The smooth scroll is instantiated inside a single `useEffect` using `new Lenis({ autoRaf: true })`. This utilizes the built-in automatic requestAnimationFrame loop of Lenis v1.1.0+, keeping the code exceptionally clean and bug-free.

---

# FONTS

Two Google Fonts, loaded via `<link>` tags in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

- **Inter Tight** — global sans-serif display and body typeface. Applied to body and all standard navigation texts (`font-sans`).
- **Playfair Display** — elegant editorial serif. The italic style is loaded *only* at weight 400 (`ital,wght@1,400`), which is used for the APEX branding logo.

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
| Token | Hex | Usage |
|---|---|---|
| White | `#ffffff` | Announcement bar background, scrolled navbar background, text contrast |
| Lab Black | `#1a1a1a` | Hero overlay text, dark sections, announcement center text |
| Gray Text | `oklch(0.551 0.027 264.364)` | Announcement bar selectors, chevron buttons |
| Border White | `rgba(255, 255, 255, 0.1)` | Navbar transparent state bottom border |
| Border Black | `rgba(0, 0, 0, 0.1)` | Navbar scrolled state bottom border |

## Typography
| Element | Font | Size | Weight | Tracking | Case / Style |
|---|---|---|---|---|---|
| Logo ("APEX") | Playfair Display | `text-2xl` (24px) | 400 (falls back) | `tracking-[0.2em]` | uppercase italic |
| Nav Links | Inter Tight | `text-[11px]` | 500 (medium) | `tracking-[0.15em]` | uppercase |
| Announcement | Inter Tight | `text-[10px] sm:text-xs` (12px) | 500 (medium) | `tracking-widest` | uppercase |

## Spacing & Spans
| Element | Value |
|---|---|
| Max Container | `max-w-7xl` (1280px) with `px-6` padding |
| Announcement Bar | `py-2 px-4` (height exactly 31px on mobile, 32px on desktop) |
| Navbar Base (py) | `py-6` (height 65.5px on desktop, 73px on mobile un-scrolled) |
| Navbar Scrolled (py) | `py-4` (height 49.5px on desktop, 57px on mobile scrolled) |
| Transition Duration | `duration-300` on navbar top, padding, background, text color |

---

# SCAFFOLD FILES — COPY EXACTLY

## `index.html`
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
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## `vite.config.ts`
```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
```

## `src/main.tsx`
```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

## `src/index.css`
```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
  --color-lab-black: #1a1a1a;
  --color-lab-gray-light: #f3f3f3;
  --color-lab-gray-dark: #2a2c2b;
  --color-lab-sand: #f8f7f5;
}

body {
  @apply bg-white antialiased text-black overflow-x-hidden;
}

.lenis.lenis-autoToggle {
  transition-property: overflow;
  transition-duration: 1ms;
  transition-behavior: allow-discrete;
}
```

---

# APP STRUCTURE

```
src/
  main.tsx              — React 19 root, imports index.css
  index.css             — Tailwind imports + theme variables (verbatim)
  App.tsx               — All components (AnnouncementBar, Navbar, Hero, Spacer) combined
```

---

# FULL `src/App.tsx` — COPY THIS EXACTLY

```tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Menu } from 'lucide-react';
import Lenis from 'lenis';

export function AnnouncementBar() {
  return (
    <div className="bg-white text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center relative z-50 text-gray-500 font-medium select-none">
      {/* Spacer to align center content perfectly on larger screens */}
      <div className="hidden sm:block opacity-0 select-none pointer-events-none">Spacer</div>
      
      {/* Center Carousel Block (Decorative) */}
      <div className="flex items-center gap-4 mx-auto text-gray-500 uppercase tracking-widest text-[11px] sm:text-xs font-semibold">
        <button className="hover:text-black transition-colors focus:outline-none" aria-label="Previous announcement">
          <ChevronLeft className="w-3 h-3" />
        </button>
        <span className="tracking-[1.2px]">Free shipping from €49</span>
        <button className="hover:text-black transition-colors focus:outline-none" aria-label="Next announcement">
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Right Selector Block */}
      <div className="flex items-center gap-4 text-gray-500 font-medium">
        <button className="flex items-center gap-1 hover:text-black transition-colors focus:outline-none">
          EUR €{" "}
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button className="flex items-center gap-1 hover:text-black transition-colors focus:outline-none">
          {/* Custom layered German flag dot badge */}
          <span className="relative w-3 h-3 rounded-full bg-red-600 block shadow-sm border border-black/10 flex items-center justify-center overflow-hidden">
            <div className="w-full h-1/3 bg-black absolute top-0" />
            <div className="w-full h-1/3 bg-yellow-400 absolute bottom-0" />
          </span>{" "}
          EN{" "}
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? "top-0 bg-white py-4 text-black border-b border-black/10 shadow-sm" 
          : "top-0 md:top-[32px] bg-transparent py-6 text-white border-b border-white/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Side (Desktop menu) */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.15em] font-medium uppercase">
          <a href="#" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
            GEAR <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
            ABOUT <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            STORIES
          </a>
        </div>

        {/* Left Side (Mobile menu button) */}
        <div className="lg:hidden flex items-center">
          <button className="hover:opacity-70 transition-opacity focus:outline-none" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Logo (Centered absolutely) */}
        <a 
          href="#" 
          className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-[0.2em] font-medium font-serif italic font-bold"
        >
          APEX
        </a>

        {/* Right Side (Desktop links) */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.15em] font-medium uppercase">
          <a href="#" className="hover:opacity-70 transition-opacity">
            ACCOUNT
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            SHOPPING CART [0]
          </a>
        </div>

        {/* Right Side (Mobile Cart status) */}
        <div className="lg:hidden flex items-center gap-4 text-[11px] tracking-[0.15em] font-medium uppercase">
          <a href="#" className="hover:opacity-70 transition-opacity">
            CART [0]
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  useEffect(() => {
    // Standard Lenis initialization with auto-RAF loop
    const lenis = new Lenis({ autoRaf: true });
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section Backdrop Context */}
      <section className="relative h-[95vh] w-full bg-lab-black overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Apex/Hero/Hero.webp"
            alt="Elite running athlete"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white pt-20">
          <div className="max-w-2xl text-left">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-white/90 mb-4">
              RATED 4.9 BY ELITE ATHLETES
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold uppercase tracking-tight mb-8 leading-[1.05]">
              Performance Gear.<br />Athlete Approved.
            </h1>
            <div className="flex gap-4">
              <button className="bg-white text-black text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">
                SHOP COLLECTION
              </button>
              <button className="border border-white/40 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
                FOOTWEAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Scroll Context for verification */}
      <div className="h-[150vh] bg-lab-sand flex flex-col items-center justify-center text-gray-400">
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 animate-pulse">
          Scroll down to test scrolled navbar states
        </p>
        <div className="w-1 h-12 bg-gray-300 mt-4 rounded-full" />
      </div>
    </div>
  );
}
```

---

# SECTIONS — STRUCTURE, CONTENT & ANIMATION SPEC

## 1. ANNOUNCEMENT BAR
- **HTML Element:** `div` with exact class `bg-white text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center relative z-50 text-gray-500 font-medium select-none`.
- **Spacer:** Left child `div` hidden on mobile (`hidden sm:block opacity-0`) holding string "Spacer" to ensure horizontal alignment scales perfectly across viewports.
- **Center Carousel block:** `div` with class `flex items-center gap-4 mx-auto text-gray-500 uppercase tracking-widest text-[11px] sm:text-xs font-semibold`.
  - Left Button: `hover:text-black transition-colors focus:outline-none` holding Lucide `<ChevronLeft className="w-3 h-3" />`.
  - Center text: `Free shipping from €49` (verbatim).
  - Right Button: `hover:text-black transition-colors focus:outline-none` holding Lucide `<ChevronRight className="w-3 h-3" />`.
- **Right Selectors block:** `div` with class `flex items-center gap-4 text-gray-500 font-medium`.
  - Currency selector button: `flex items-center gap-1 hover:text-black transition-colors` holding text "EUR €" and raw downward chevron SVG.
  - Language selector button: `flex items-center gap-1 hover:text-black transition-colors` holding custom German flag, "EN", and raw downward chevron SVG.
  - Custom Flag structure: Rounded span (`relative w-3 h-3 rounded-full bg-red-600 block shadow-sm border border-black/10 flex items-center justify-center overflow-hidden`) containing black stripe absolute div (`w-full h-1/3 bg-black absolute top-0`) and yellow stripe absolute div (`w-full h-1/3 bg-yellow-400 absolute bottom-0`). Red base forms the middle stripe.

## 2. NAVBAR
- **HTML Element:** `nav` with responsive class structure. Note the literal newline and indentation mapping the original compiled template string:
  ```
  fixed left-0 right-0 z-40 transition-all duration-300
          ${isScrolled 
            ? "top-0 bg-white py-4 text-black border-b border-black/10 shadow-sm" 
            : "top-0 md:top-[32px] bg-transparent py-6 text-white border-b border-white/10"
          }
  ```
- **Max container:** Inner `div` with class `max-w-7xl mx-auto px-6 flex justify-between items-center`.
- **Left layout links (Desktop only):** `div` with class `hidden lg:flex items-center gap-8 text-[11px] tracking-[0.15em] font-medium uppercase`.
  - Link 1: "GEAR " (trailing space) + Lucide `<ChevronDown className="w-3 h-3" />`.
  - Link 2: "ABOUT " (trailing space) + Lucide `<ChevronDown className="w-3 h-3" />`.
  - Link 3: "STORIES" (no icon).
  - All links have classes: `flex items-center gap-1 hover:opacity-70 transition-opacity`.
- **Left layout button (Mobile only):** `div` with class `lg:hidden flex items-center`. Button inside has class `hover:opacity-70 transition-opacity` and holds Lucide `<Menu className="w-6 h-6" />`.
- **Logo (Absolute centered):** Anchor `a` with class `absolute left-1/2 -translate-x-1/2 text-2xl tracking-[0.2em] font-medium font-serif italic font-bold`. Holds text "APEX".
- **Right layout links (Desktop only):** `div` with class `hidden lg:flex items-center gap-8 text-[11px] tracking-[0.15em] font-medium uppercase`. Links: "ACCOUNT", "SHOPPING CART [0]", carrying `hover:opacity-70 transition-opacity`.
- **Right layout links (Mobile only):** `div` with class `lg:hidden flex items-center gap-4 text-[11px] tracking-[0.15em] font-medium uppercase` holding single link "CART [0]" with `hover:opacity-70 transition-opacity`.

---

# COMMON MISTAKES TO AVOID (these break the 1:1 look)

1. ❌ **"Fixing" the mobile overlapping of the announcement bar and transparent navbar.** Do not attempt to add padding or offset margins on mobile to separate them. On mobile viewport, the transparent navbar is at `top-0` (instead of `md:top-[32px]`), causing it to overlap underneath the `relative z-50` Announcement Bar (partially cutting off the logo's top 11px). Replicate this design quirk exactly.
2. ❌ **Swapping the German flag layers for a unicode flag emoji.** Country flags render differently on Android, iOS, Windows, and Linux. Rebuilding the flag using custom divs inside an overflow-hidden rounded `span` is the only way to achieve identical visual rendering across all systems.
3. ❌ **Adding onClick handlers, menu states, or slide-outs to the mobile hamburger.** The original hamburger and CART buttons are entirely decorative links/buttons with no script actions. Implementing active overlay states breaks the static behavior.
4. ❌ **Using standard Lucide icons for the currency/language chevrons.** They must be built using raw SVG paths (`M19 9l-7 7-7-7`) inside small `w-2.5 h-2.5` viewport canvases.
5. ❌ **Simplifying the transition-all timeline.** The transitions of padding, top positioning, text color, and background must all slide synchronously using standard Tailwind transitions (`transition-all duration-300`).
6. ❌ **"Cleaning up" the APEX logo class weight.** Keep `font-medium` and `font-bold` both in the class string. Do not simplify it to `font-bold` as it ruins the font-medium cascade-override and Playfair Display regular italic fallback.
7. ❌ **Initializing Lenis scroll handlers in secondary files.** Lenis must be loaded once using `{ autoRaf: true }` in the root mount hook of `App.tsx` and cleaned up appropriately via `.destroy()`.

---

# ASSETS

The hero section placeholder references a high-quality remote athlete photography background to test the navbar visibility over dark imagery:

- **Base URL:** `https://apex-sport-ecommerce-landing.vercel.app/`
- **Asset URL:** `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Apex/Hero/Hero.webp`
- **Content:** Cinematic side-profile of a female East-Asian athlete running in a high-contrast urban environment at sunset, dark modern high-rises and blurred cityscape trees in the background, sharp evening backlighting casting warm edge glow.

---

# TECH STACK

- Vite 6 + React 19 + TypeScript (`vite.config.ts` using `@tailwindcss/vite` plugin)
- Tailwind CSS 4 (direct configuration inside `index.css`, **no tailwind.config.js**)
- `lenis` smooth scroll (instantiated with `autoRaf: true` options)
- `lucide-react` (imported directly for `ChevronLeft`, `ChevronRight`, `ChevronDown`, `Menu` components)
- Zero external CSS frameworks, state stores, routers, or third-party UI design libraries
