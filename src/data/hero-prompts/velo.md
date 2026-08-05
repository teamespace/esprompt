# VELO — Hero (extracted from full-landing/velo.md)

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4 (`@theme` in `globals.css`, no `tailwind.config.ts`), animated with GSAP + `@gsap/react` (`useGSAP`), smooth-scrolled with Lenis. Static export (`output: "export"`). Fonts: **DM Sans** (body/`--font-dm-sans`) + **Michroma** (display/`--font-michroma`, used for logo, nav, prices, stat values, headings).

Hero (`Hero.tsx`): full-viewport section, content anchored bottom-left (`flex-col justify-end`). Background is an autoplay/muted/looping video with a `bg-gradient-to-t from-black/85 via-black/20 to-transparent` overlay. Headline is two words — "BORN" / "ELECTRIC" — each wrapped in a double `<span class="block overflow-hidden"><span class="block">` for a slide-up reveal. GSAP timeline (0.6s delay): words slide up (`y:90→0`, `opacity:0→1`), then subtext, then the CTA.

## Hero spec (verbatim, `components/Hero.tsx`)

```
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

```

## Assets used in this hero

| File | URL | Content |
|---|---|---|
| `hero.mp4` | `https://velo-landing-e1d.pages.dev/assets/hero.mp4` | Hero background video, autoplay/muted/loop |
