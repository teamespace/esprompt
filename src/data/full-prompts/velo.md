# VELO Electric Motorcycles — Reverse Engineering Prompt

Build a pixel-perfect recreation of the **VELO Electric Motorcycles** landing page using the exact stack and implementation details below.

---

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (config entirely in `globals.css` via `@theme {}`, no `tailwind.config.ts`)
- **Animation:** GSAP + `@gsap/react` (`useGSAP` hook), ScrollTrigger plugin
- **Smooth scroll:** Lenis (`lenis` package) via a `LenisProvider` client component wrapping the layout
- **3D Viewer:** `@react-three/fiber` + `@react-three/drei` (`useGLTF`, `OrbitControls`, `Environment`, `ContactShadows`, `Center`)
- **Static export:** `output: "export"` + `images: { unoptimized: true }` in `next.config.ts`

---

## Typography

### Fonts (`app/layout.tsx`)
```ts
import { DM_Sans, Michroma } from "next/font/google";
const dmSans  = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const michroma = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-michroma" });
```
Applied to `<html>` as CSS variables.

### Tailwind theme (`globals.css`)
```css
@theme {
  --font-display: var(--font-michroma);
  --font-body:    var(--font-dm-sans);
}
```
- `font-display` → Michroma (used for logo, nav links, prices, stat values, headings)
- Body default → DM Sans, 18px

### Global heading sizes
```css
@layer base {
  h1 { font-size: 100px; }
  h2 { font-size: 80px; }
  h1, h2, h3, h4 { font-family: var(--font-display); letter-spacing: 0.02em; }
}
```

---

## Global CSS Classes (`globals.css`)

```css
.section-pad { padding: 100px 60px; }
@media (max-width: 768px) { .section-pad { padding: 60px 24px; } }

/* Buttons */
.btn-primary         /* outline black, fills black on hover */
.btn-primary-white   /* outline white, fills white on hover — used on dark/video bg */
.btn-text            /* text-only black with underline on hover */
.btn-text-white      /* text-only white with underline on hover */
/* All buttons have .arrow span that translateX(4px) on hover */
```

---

## Assets

| File | Public URL |
|---|---|
| `hero.mp4` | `https://velo-landing-e1d.pages.dev/assets/hero.mp4` |
| `image-4.png` | `https://velo-landing-e1d.pages.dev/assets/image-4.png` |
| `image-5.png` | `https://velo-landing-e1d.pages.dev/assets/image-5.png` |
| `image-6.png` | `https://velo-landing-e1d.pages.dev/assets/image-6.png` |
| `image-7.png` | `https://velo-landing-e1d.pages.dev/assets/image-7.png` |
| `image-8.png` | `https://velo-landing-e1d.pages.dev/assets/image-8.png` |
| `image-9.png` | `https://velo-landing-e1d.pages.dev/assets/image-9.png` |
| `model-1.glb` | `https://3d-assets-nu.vercel.app/model-1.glb` |
| `model-2.glb` | `https://3d-assets-nu.vercel.app/model-2.glb` |

---

## Page Structure (`app/page.tsx`)

```tsx
<main>
  <Nav />
  <Hero />
  <ProductComparison />
  <FeatureSection />
  <SpeedSection />
  <Newsletter />
  <Footer />
</main>
```

---

## Components

### `Nav.tsx`
- Fixed, `z-50`, 3-column grid layout
- **Left:** links `["One", "Sport", "About"]`
- **Center:** logo `VELO` — `font-display`, links to `/`
- **Right:** links `["Shop", "Test Ride"]`
- All nav links use `font-display text-[11px] font-bold tracking-[0.2em] uppercase`
- **Transparent** over hero (white text), flips to `bg-white border-b border-black/8` + black text when `scrollY > 60`
- On scroll, links gain `hover:text-[#ff0000]`
- GSAP entry: `fromTo` `y: -40, opacity: 0` → `y: 0, opacity: 1`, delay 0.3s
- Mobile: hamburger icon (3 lines, animates to X), fullscreen black overlay menu

### `Hero.tsx`
- Full-viewport section, `min-h-screen`, content anchored bottom-left (`flex-col justify-end`)
- Background: `<video autoPlay muted loop playsInline>` source `/assets/hero.mp4`, `object-cover object-center`
- Overlay: `bg-gradient-to-t from-black/85 via-black/20 to-transparent`
- Content: `px-8 md:px-14 pb-20 pt-40`
- **Headline:** `BORN` / `ELECTRIC` — two words, each in `<span class="block overflow-hidden"><span class="block">` for slide-up reveal
- **h1 classes:** `font-black leading-none tracking-tight mb-6 overflow-hidden text-white`
- **Subtext:** `"High-performance electric motorcycles engineered for the city and beyond."` — `text-sm text-white/60 leading-relaxed mb-8 max-w-sm`
- **CTA:** `btn-primary-white` — "View Models →"
- GSAP timeline (delay 0.6s): words slide up `y:90→0 opacity:0→1`, then subtext, then CTA

### `ProductComparison.tsx`
- Scroll-pinned section using `ScrollTrigger.create({ pin: true, pinSpacing: true, scrub: 2 })`
- `end: "+=1400vh"` (2 models × 700vh each)
- `h-screen flex flex-col bg-white`
- **Two models:**
  ```
  ONE   — Urban Commuter — From $3,499 — 80mi range — 65mph — 1 passenger — 3.5hrs charge
  SPORT — City Sport     — From $4,299 — 95mi range — 75mph — 1 passenger — 2.5hrs charge
  ```
- **Left panel:** progress bar (left edge, `scaleY` via GSAP `onUpdate`) → index counter → category badge (border) → `h2` name → red accent `w-10 h-1 bg-[#ff0000]` → description → price (`font-display text-2xl`) → feature stats (flat layout, thin `w-px bg-black/10` vertical dividers) → filled black CTA button
- **Right panel:** `ModelViewer` component (dynamically imported `ssr: false`)
- Transition between models: fade out left+right panels `opacity:0 y:-16`, call `setActive`, fade back in
- **Bottom bar:** "Our Models" label | model dots with red/gray lines | "01 of 2" counter
- Stats use `font-display text-sm font-bold`; range stat uses `text-[#ff0000]`

### `ModelViewer.tsx`
- Wraps `<Canvas>` in an `ErrorBoundary` class component (catches load errors silently)
- Camera: `position: [0, 0.5, 4]`, `fov: 16`
- Lights: `ambientLight intensity={1.5}` + `directionalLight [5,8,5] intensity={2}` + `directionalLight [-5,3,-5] intensity={0.5}`
- Inside `<Suspense fallback={null}>`: `<Model>` + `<Environment preset="city">` + `<ContactShadows position={[0,-1,0]} opacity={0.15} scale={8} blur={4} far={2} />`
- `<OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} minPolarAngle={PI/6} maxPolarAngle={PI/2.2} />`
- `useGLTF.preload(...)` called at module level for both GLB URLs
- "Drag to rotate" label bottom-right, `text-[10px] text-black/25`

### `FeatureSection.tsx`
- `bg-black pt-32 pb-20 overflow-hidden`
- **Header:** `h2` with two `<span class="block">` lines — "Precision Built" / "For Every Ride" — `font-black uppercase leading-none tracking-tight text-white`
- **Carousel:** 4 images, `SLIDE_W = 52vw`, `GAP = 0.5vw`, centered via `OFFSET = (100 - SLIDE_W) / 2`
- Track shifts with `gsap.to(track, { x: targetX + "vw", duration: 0.55, ease: "power3.inOut" })`
- Arrow buttons: `w-10 h-10 border border-white/40`, hover fills white/black
- Below carousel: counter `01 / 04` + feature title (`text-xl font-black uppercase`) + description
- Features: Precision Controls, Signature Lighting, Smart Display, Fast Charging
- Images: `image-4.png` to `image-7.png`

### `SpeedSection.tsx`
- `h-screen bg-[#080808] overflow-hidden border-t border-white/5`
- **Sticky pinned:** `start: "top top"`, `end: "+=220vh"`, `scrub: 1.5`
- **Two-column layout** (`grid-cols-2 items-center px-16 gap-10`)
- **Left:** headline "Zero hesitation." (`font-black uppercase text-white`, `clamp(40px, 5vw, 72px)`) + description + stats row
- Stats: `3.8s` 0–65mph | `6.1s` 0–90mph | `180` Top Speed mph — all `font-display text-2xl font-black text-white`
- **Right:** SVG speedometer — `viewBox="0 0 400 310"`, center `(200, 215)`, radius `160`
- Arc: 220° sweep, drawn with `<path>` using `sweep-flag=1 large-arc=1` (over the top, NOT through bottom)
- Arc stroke-dasharray animated from `"0 ${ARC_LEN}"` to `"${ARC_LEN} 0"` via `setAttribute` in `onUpdate`
- Needle: `<g transform="rotate(deg 200 215)"><line x1=200 y1=215 x2=200 y2=85>` — initial `-110deg`, animates to `+110deg`
- Ticks: 10 major (longer, brighter) + 4 minor between each — rendered as SVG `<line>` elements
- Speed counter div (absolute positioned at 69.35% from top): `font-display font-black text-white text-4xl md:text-5xl`
- Glow filter on arc: `feGaussianBlur stdDeviation="3.5"` merged with source

### `Newsletter.tsx`
- `section-pad border-t border-[#e8e8e8]`
- `max-w-xl mx-auto text-center`
- **Headline:** "STAY UP TO DATE`<br />`WITH VELO" — `font-black tracking-tight uppercase`, `fontSize: "clamp(22px, 2.8vw, 40px)"`
- Subtext: `text-sm text-[#666] leading-relaxed mb-10`
- Form: First Name + Last Name (2-col grid) → Email → Phone → Subscribe button (`btn-primary justify-center w-full`)
- Inputs: `border border-[#ccc] px-4 py-3 text-sm outline-none focus:border-black transition-colors`
- GSAP scroll-triggered fade-up on `.nl-item` elements

### `Footer.tsx`
- `bg-black text-white section-pad`
- **Brand block (centered):** `font-display text-4xl tracking-[0.15em] uppercase` "VELO" + description `text-sm text-white/50 max-w-xs mx-auto`
- **Nav grid:** `grid-cols-2 md:grid-cols-4 gap-10 text-center` — 4 columns: Connect, Explore, Sales, Legal
- Section labels: `text-xs font-bold tracking-[0.2em] uppercase text-white/40`
- Links: `text-sm text-white/70 hover:text-white transition-colors duration-200`
- **Bottom bar:** `border-t border-white/10 pt-8 flex justify-between` — "© 2025 VELO Electric Inc." | "Made with obsession in NYC."
- Explore links: VELO ONE, VELO SPORT, About Us, Test Ride

---

## Key Implementation Notes

1. **Tailwind v4** — no `tailwind.config.ts`, all custom tokens in `globals.css` `@theme {}`
2. **SpeedSection arc** — MUST use `<path>` with `sweep-flag=1, large-arc=1`, never `<circle>` (circle fills through bottom)
3. **SpeedSection arc initial state** — set via SVG attribute `strokeDasharray="0 ${ARC_LEN}"` to prevent flash; animation via `onUpdate → setAttribute` for bidirectional scrub
4. **ModelViewer** — dynamically imported with `ssr: false`; wrapped in `ErrorBoundary` so GLB load failures don't crash the page
5. **ProductComparison** — `ScrollTrigger` with `pin: true, pinSpacing: true` on the section itself; no wrapper div needed
6. **Hydration fix** — `pt` function in SpeedSection uses `.toFixed(4)` to prevent SSR/client floating-point mismatch
7. **React key fix** — `.map()` with fragment uses `<React.Fragment key={...}>` not `<>`
8. **h2 overrides** — SpeedSection uses `style={{ fontSize: "clamp(40px, 5vw, 72px)" }}`; Newsletter uses `style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}`

---

## ⚠️ Critical: Fixing FeatureSection Between Two Pinned Sections

FeatureSection sits between ProductComparison (pinned) and SpeedSection (pinned). Without proper z-index and `anticipatePin`, FeatureSection will visually glitch — it may appear behind the pinned sections or cause scroll jank.

### Fix 1 — Add `anticipatePin: 1` to both pinned ScrollTriggers

In **ProductComparison.tsx**:
```ts
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: `+=${N * VH_PER_MODEL}vh`,
  pin: true,
  pinSpacing: true,
  anticipatePin: 1, // ← required
  scrub: 2,
  onUpdate(self) { ... },
});
```

In **SpeedSection.tsx**:
```ts
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: "+=220vh",
  pin: true,
  pinSpacing: true,
  anticipatePin: 1, // ← required
  scrub: 1.5,
  onUpdate(self) { ... },
});
```

### Fix 2 — Give FeatureSection explicit z-index and position

```tsx
<section
  ref={containerRef}
  className="bg-black pt-32 pb-20 overflow-hidden relative"
  style={{ zIndex: 2 }}
>
```

### Fix 3 — Give SpeedSection explicit z-index so it covers FeatureSection when pinned

```tsx
<section
  ref={sectionRef}
  className="h-screen bg-[#080808] overflow-hidden border-t border-white/5 relative"
  style={{ zIndex: 3 }}
>
```

### Why this works
- GSAP sets pinned elements to `position: fixed` during scroll. Without `anticipatePin: 1`, GSAP doesn't prepare the layout in advance and FeatureSection jumps.
- The z-index stack ensures: ProductComparison (z:auto) → FeatureSection (z:2) → SpeedSection (z:3), so each section correctly covers the one before it when entering the viewport.

---

## Brand Colors

| Token | Value |
|---|---|
| Red accent | `#ff0000` |
| Black | `#000000` |
| Dark bg (Speed) | `#080808` |
| Gray text | `#666666` |
| Border | `#cccccc` |
