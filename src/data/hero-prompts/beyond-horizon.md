# Beyond Horizon — Hero (extracted from full-landing/beyond-horizon.md)

Stack: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui, static export (`output: "export"`). Animation: GSAP + ScrollTrigger for the hero morph, Framer Motion for the floating-image parallax further down the section. Fonts: **Cormorant Garamond** (300–700, headings/serif) + **Inter** (body).

Hero (`sections/hero.tsx`, layer 2a of the pinned `#experiences` section): fullscreen autoplay/muted/looping background video with a `bg-black/20` overlay, bottom-left hero copy — "Beyond Horizon **is** pioneering the future of luxury yachting." (the word "is" colored gold), each word wrapped in `<span class="inline-flex items-center">`, `font-serif text-3xl md:text-5xl lg:text-6xl`, max width `max-w-xl md:max-w-2xl`. On scroll (GSAP ScrollTrigger, `scrub: 1.2`) the hero text fades out over the first 25% of scroll and the video shrinks via `clipPath` only (no scale) from fullscreen `inset(0% 0% 0% 0%)` to a centered landscape rectangle `inset(32% 30% 32% 30%)`, revealing the "Our Story" content underneath.

## Hero spec (verbatim, section 2a of `sections/hero.tsx`)

Outer wrapper (the whole pinned section this hero sits inside):
```
<section id="experiences" class="relative z-50 mb-[-75vh] h-[250vh] w-full">
  <div class="relative h-full w-full">
    <div class="sticky top-0 left-0 h-svh w-full bg-[#050b14]">
```

Hero layer:

#### 2a. Hero Layer
- Fullscreen autoplay video (`hero.mp4`), muted, loop, playsInline
- Dark overlay: `bg-black/20`
- Hero text bottom-left aligned inside `h-svh` container:
  > "Beyond Horizon **is** pioneering the future of luxury yachting."
  - "is" is colored `text-gold`
  - Each word wrapped in `<span class="inline-flex items-center">`
  - Font: `font-serif text-3xl md:text-5xl lg:text-6xl`
  - Max width: `max-w-xl md:max-w-2xl`


## Assets used in this hero

| File | URL | Content |
|---|---|---|
| `hero.mp4` | `https://yacht-bgz.pages.dev/images/hero.mp4` | Hero background video, autoplay/muted/loop, later clip-path-shrunk on scroll |

> Sandbox note: this session's network allowlist blocks direct fetches to `yacht-bgz.pages.dev`, so the actual video file could not be downloaded and attached here. The URL above is exact — drop the real file in this folder (or send it to me) and I'll wire it into the catalog's Assets tab.
