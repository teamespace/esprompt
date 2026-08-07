# Landing Page Reverse Engineering Prompt

## Project Overview
Build a luxury yacht charter landing page called **"Beyond the Horizon"** using **Next.js 16 + React + TypeScript + Tailwind CSS v4 + shadcn/ui**. The page must be a **static export** (`output: "export"`, `images.unoptimized: true`).

Deploy target: **Cloudflare Pages** (drag-and-drop static folder).

---

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- GSAP + ScrollTrigger (hero morph)
- Swiper.js (horizontal carousel)
- Framer Motion (scroll reveals, auto-rotating concierge)
- next-themes (dark/light toggle)

---

## Fonts
- **Headings:** Cormorant Garamond (weights: 300, 400, 500, 600, 700)
- **Body:** Inter
- Configure as CSS variables: `--font-inter`, `--font-cormorant`

---

## Global Design Tokens

### Colors
| Token | Light | Dark |
|---|---|---|
| `--background` | `#FAFAFA` | `#101010` |
| `--foreground` | `#101010` | `#FFFFFF` |
| `--card` | `#FFFFFF` | `#1A1A1A` |
| `--muted` | `#F5F5F5` | `#1A1A1A` |
| `--muted-foreground` | `#555555` | `#A0A0A0` |
| `--border` | `#E5E5E5` | `#2A2A2A` |
| `--gold` | `#C6A76A` | `#C6A76A` |
| `--gold-foreground` | `#101010` | `#101010` |

### Typography Scale
- **H1/H2 site-wide:** `64px` (`lg:text-[64px]`)
- **H3:** `font-serif text-2xl md:text-3xl`
- **Hero text:** `text-3xl md:text-5xl lg:text-6xl`
- **Eyebrow/label:** `text-sm font-medium text-gold uppercase tracking-widest`
- **Body:** `text-lg text-muted-foreground leading-relaxed`

### Border Radius
**ALL border-radius must be 0.** Override globally in CSS:
```css
* {
  border-radius: 0 !important;
}
```
Also set all `--radius-*` tokens to `0`.

### Buttons
- **Primary:** `bg-gold text-gold-foreground`, rectangular, no radius
- **Secondary/Outline:** `border border-border/30` or `border border-white/30`, rectangular

---

## Assets (Download from live site)

All assets are hosted at `https://yacht-bgz.pages.dev/`. Download each and place into `public/images/`:

| File | URL | Used In |
|---|---|---|
| `hero.mp4` | `https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Beyond-horizon/Hero/hero.mp4` | Hero background video |
| `image-1.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/About/image-1.webp` | Floating image (Our Story) |
| `image-2.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/About/image-2.webp` | Floating image (Our Story) |
| `image-3.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/About/image-3.webp` | Floating image (Our Story) |
| `image-4.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/About/image-4.webp` | Floating image (Our Story) |
| `image-6.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Destinations/komodo.webp` | Destination: Komodo Islands |
| `image-7.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Destinations/raja-ampat.webp` | Destination: Raja Ampat |
| `image-8.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Destinations/phuket.webp` | Destination: Phuket |
| `image-9.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Destinations/maldives.webp` | Destination: Maldives |
| `image-10.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Package/romantic.webp` | Journey: Romantic Escape |
| `image-11.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Package/family.webp` | Journey: Family Adventure |
| `image-12.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Package/celebration.webp` | Journey: Celebration Charter |
| `image-13.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Package/wellness.webp` | Journey: Wellness Retreat |
| `image-14.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Package/corporate.webp` | Journey: Corporate Escape |
| `image-15.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Fleet/fleet-1.webp` | Fleet: Serenity |
| `image-16.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Fleet/fleet-2.webp` | Fleet: Odyssey |
| `image-17.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Fleet/fleet-3.webp` | Fleet: Voyager |
| `image-18.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Footer/image-18.webp` | Final CTA carousel |
| `image-19.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Footer/image-19.webp` | Final CTA carousel |
| `image-20.png` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Beyond-horizon/Footer/image-20.webp` | Final CTA carousel |

---

## Page Structure (Exact Order)

### 1. Navbar (`<header>`)
- Fixed top, `z-[500]`
- Transparent initially, transitions to `bg-background/80 backdrop-blur-md` on scroll
- Logo: "Beyond" (semibold) + "Horizon" (light, `text-gold`)
- Links: Experiences, Destinations, Journeys, Fleet, Concierge → smooth scroll anchors
- Right: Theme toggle button + "Plan My Journey" CTA (gold bg) + hamburger (mobile)
- Mobile menu: collapsible overlay with same links

---

### 2. Hero + Our Story (`<section id="experiences">`)

This is the **most critical section**. It must be built as a **single pinned-scroll section** (`h-[250vh]`) containing both the hero and the Our Story content.

#### Outer Wrapper
```
<section id="experiences" class="relative z-50 mb-[-75vh] h-[250vh] w-full">
  <div class="relative h-full w-full">
    <div class="sticky top-0 left-0 h-svh w-full bg-[#050b14]">
```

#### 2a. Hero Layer
- Fullscreen autoplay video (`hero.mp4`), muted, loop, playsInline
- Dark overlay: `bg-black/20`
- Hero text bottom-left aligned inside `h-svh` container:
  > "Beyond Horizon **is** pioneering the future of luxury yachting."
  - "is" is colored `text-gold`
  - Each word wrapped in `<span class="inline-flex items-center">`
  - Font: `font-serif text-3xl md:text-5xl lg:text-6xl`
  - Max width: `max-w-xl md:max-w-2xl`

#### 2b. Scroll Morph Animation (GSAP ScrollTrigger)
Inside the **same** sticky container, animate on scroll (`scrub: 1.2`):

1. **Hero text** fades out (`opacity: 1 → 0`, `y: 0 → -30`) during first 25% of scroll
2. **Video** shrinks via `clipPath`:
   - Start: `inset(0% 0% 0% 0%)` (fullscreen)
   - End: `inset(32% 30% 32% 30%)` (landscape rectangle, centered, smaller)
   - No `scale` transform — use only `clipPath`
   - Ease: `power2.inOut`
3. **Section 2 content** slides up from below (`y: 0 → -100vh`, starting at 30% scroll progress)

#### 2c. Our Story Content (inside sticky container, below viewport initially)
Positioned at `absolute top-full left-0 z-20`. Contains:

**Floating Images (4 total)** with mouse parallax:
| # | src | position | size | parallax |
|---|---|---|---|---|
| 1 | image-1.png | `left: 86%`, `top: 10%` | 120×90 | moveX: -80, moveY: 50 |
| 2 | image-2.png | `left: 4%`, `top: 72%` | 110×80 | moveX: 70, moveY: -60 |
| 3 | image-3.png | `left: 80%`, `top: 76%` | 140×110 | moveX: -100, moveY: -70 |
| 4 | image-4.png | `left: 6%`, `top: 14%` | 130×100 | moveX: 50, moveY: -40 |

- Each floating image: `absolute`, `border border-white/10`, `overflow-hidden`
- Use Framer Motion `useMotionValue` + `useSpring` for smooth mouse parallax
- `initial={{ opacity: 0, scale: 0.9 }}` → `animate={{ opacity: 1, scale: 1 }}`

**Top text block** (centered, near top):
- Eyebrow: "OUR STORY" — `text-gold uppercase tracking-widest text-sm`
- Heading: "More Than Just a *Vessel*" — `font-serif text-4xl md:text-5xl lg:text-[64px] font-light`
- "Vessel" in `font-medium italic`

**Bottom text block** (centered, near bottom):
- Paragraph 1:
  > "With years of experience and a deep-rooted passion for the sea, we help our clients find more than just a yacht. We help them discover their next adventure. Whether you are seeking an intimate escape or a grand celebration, we know that yachting is about creating extraordinary moments on board that last a lifetime."
- Paragraph 2:
  > "Every charter is a story waiting to be written — of sun-drenched afternoons on the open water, of private dinners under a canopy of stars, of waking up to horizons that stretch beyond imagination."
- Button: "Explore Our World" — outline style, `border-white/30`, hover: `bg-white text-[#050b14]`
- Text color: `text-white/70`

---

### 3. Featured Destinations (`<section id="destinations">`)

#### Section Header
- Eyebrow: "DESTINATIONS"
- Heading: "Where Your Journey *Begins*" ("Begins" italic)
- Subtext:
  > "People often choose the destination first and the yacht second. Let these extraordinary places inspire your next escape."

#### Sticky Stack Cards (4 cards)
Each card is `sticky top-0 h-[100dvh] w-full` with incrementing `z-index`.

**Card structure:**
- Full-bleed background image (see asset mapping)
- Overlay layers:
  - `bg-black/30`
  - `bg-gradient-to-t from-black/70 via-transparent to-black/20`
- Content layout: `flex flex-col items-center justify-between px-6 py-16 md:py-24 text-center`

**Top:** Tag pill + metadata row
- Tag: inline pill, `bg-white/10 backdrop-blur-md border-white/20`, uppercase, `text-xs tracking-wider`
- Row: `Destination` • dot • `01` (zero-padded index)

**Center:**
- Destination name: `font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white`
- Location: `text-white/70 text-sm tracking-[0.15em] uppercase`
- Decorative vertical line: `w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent`
- Description: `text-white/70 text-base md:text-lg leading-relaxed max-w-lg`
- CTA: "Explore Destination" — `bg-white text-black`, with ArrowRight icon

**Destinations data:**
| # | Name | Location | Tag | Description | Image |
|---|---|---|---|---|---|
| 01 | Komodo Islands | Indonesia | Adventure | Meet legendary dragons and explore iconic pink beaches. A realm where ancient creatures roam and untouched shores await your discovery. | image-6.png |
| 02 | Raja Ampat | West Papua | Diving | Discover one of the world's richest marine ecosystems. Beneath these turquoise waters lies a kaleidoscope of life found nowhere else on Earth. | image-7.png |
| 03 | Phuket | Thailand | Lifestyle | Luxury island hopping with vibrant nightlife and secluded bays. Where golden temples meet hidden coves and the Andaman Sea sparkles endlessly. | image-8.png |
| 04 | Maldives | Indian Ocean | Romance | Experience ultimate privacy in paradise. Crystal lagoons, overwater serenity, and moments of pure tranquility crafted just for you. | image-9.png |

---

### 4. Signature Journeys (`<section id="journeys">`)

#### Header
- Eyebrow: "SIGNATURE JOURNEYS"
- Heading: "Crafted for Freedom. Designed for You."
- Subtext: "Every journey is designed around the moments that matter most. Let's make your dream charter a reality."

#### Horizontal Swiper Carousel
- Module: Swiper with `Navigation`
- `slidesPerView: 1.2` mobile → up to `3.2` on `1280px`
- `spaceBetween: 16` → `24`
- Padding: `!pl-6 !pr-6 lg:!pl-8 lg:!pr-8`

**Slide card structure:**
- Height: `h-[420px] md:h-[520px]`
- Full image background (see asset mapping)
- Bottom gradient overlay: `bg-gradient-to-t from-black/70 via-black/20 to-transparent`
- Top-left tag: `bg-white/10 backdrop-blur-md border-white/20 text-white text-xs`
- Bottom caption:
  - Subtitle: `text-white/80 text-sm md:text-base font-medium`
  - Caption: `font-serif text-2xl md:text-3xl font-medium text-white`

**Journeys data:**
| # | Title | Subtitle | Caption | Image |
|---|---|---|---|---|
| 1 | Romantic Escape | 2 Days / 1 Night | Private sunset dinner on deck | image-10.png |
| 2 | Family Adventure | 3 Days / 2 Nights | Island hopping & water sports | image-11.png |
| 3 | Celebration Charter | Custom Duration | Bespoke events & fine dining | image-12.png |
| 4 | Wellness Retreat | 4 Days / 3 Nights | Spa, yoga & serene waters | image-13.png |
| 5 | Corporate Escape | Custom Duration | Team bonding at sea | image-14.png |

#### Bottom Bar
- Progress line: `h-px bg-border` with animated fill `bg-foreground`
- Prev/Next arrows: `w-12 h-12 border border-border bg-background`, hover: `bg-foreground text-background`

---

### 5. The Fleet (`<section id="fleet">`)

#### Header
- Eyebrow: "THE FLEET"
- Heading: "Vessels Designed for *Dreams*" ("Dreams" italic)
- Subtext: "Presenting only our finest flagship yachts. Each vessel is more than a boat — it is your gateway to extraordinary experiences."

#### 3-Column Grid (`grid-cols-1 md:grid-cols-3 gap-8`)

**Card structure:**
- Top image area: `h-64 relative`
  - Image fill, `object-cover`
  - Overlay: `bg-black/20`
- Card body: `p-8`, `border border-border bg-card`
  - Type label: `text-gold uppercase tracking-wider text-xs`
  - Yacht name: `font-serif text-2xl font-medium`
  - Tags: small pills, `bg-muted text-muted-foreground border border-border`
  - Link: "View Details" with ArrowRight, `text-gold`

**Yacht data:**
| Name | Type | Capacity | Perfect For | Image |
|---|---|---|---|---|
| Serenity | Luxury Catamaran | Up to 12 Guests | Family Escapes, Island Hopping, Multi-Day Cruises | image-15.png |
| Odyssey | Motor Yacht | Up to 8 Guests | Romantic Getaways, Celebrations, Coastal Cruises | image-16.png |
| Voyager | Sailing Yacht | Up to 6 Guests | Adventure Sailing, Wellness Retreats, Private Escapes | image-17.png |

---

### 6. Concierge Experience (`<section id="concierge">`)

#### Layout: 2-column grid (`lg:grid-cols-2`)

**Left column:**
- Eyebrow: "CONCIERGE"
- Heading: "Time to value."
- Subtext: "Beyond Horizon starts working for you immediately."
- Service list (6 items, stacked vertically):
  - Each item has a thin vertical progress bar (`w-1.5 h-12 bg-muted`) on the left
  - Active item: bar fills with `bg-foreground` over 5 seconds
  - Title: `font-serif text-xl`
  - Active item shows description below
  - Clicking an item switches the active state
  - Auto-rotate every 5 seconds

**Service data:**
| # | Title | Description |
|---|---|---|
| 1 | Airport Transfers | Seamless luxury transfers from airport to marina. Your journey begins the moment you land. |
| 2 | Private Chef | World-class cuisine tailored to your preferences. Michelin-level dining on the open sea. |
| 3 | Event Planning | Bespoke celebrations and corporate events. From intimate dinners to grand galas. |
| 4 | Water Toys | Jet skis, paddleboards, kayaks, and more. The ocean is your playground. |
| 5 | Luxury Accommodation | Pre and post-cruise villa and hotel arrangements. Complete the journey in style. |
| 6 | Dedicated Host | A personal concierge available around the clock. Every request, effortlessly handled. |

**Right column:**
- Large square image (`aspect-square max-w-lg`)
- Image changes based on active service
- Images: reuse image-1.png through image-6.png (1 per service)
- NO text overlay on image (clean image only)
- `AnimatePresence` fade transition between images

---

### 7. Final CTA (`<section id="contact">`)

- Background: `bg-[#0a1628]`
- Centered content:
  - Eyebrow: "BEGIN YOUR JOURNEY"
  - Heading: "Set Sail on Your *Dream Journey*" ("Dream Journey" italic)
  - Button: "REQUEST YOUR CHARTER" — `bg-white text-[#0a1628]`
  - Subtext: "Tell us your destination and we'll craft the perfect voyage."

#### Infinite Image Carousel (below text)
- Horizontal auto-scrolling track
- Images: image-18.png, image-19.png, image-20.png (duplicated 3× for seamless loop)
- Image size: `w-[200px] h-[140px] md:w-[280px] md:h-[200px]`
- Gap: `gap-3`
- Animation: CSS `@keyframes marquee` — `translateX(0)` → `translateX(-33.33%)`, `40s linear infinite`
- Pause on hover
- Hover: `scale-105`, overlay darkens slightly

---

### 8. Footer
- Background: `bg-[#0a1628]`
- 4-column grid on desktop:
  1. **WhatsApp CTA:** "Contact us on WhatsApp" + phone number
  2. **Address:** Singapore office address
  3. **Email:** "We respond within a few hours" + email
  4. **Links:** FAQs, Privacy Policy, Terms & Conditions, Advisor Access
- Bottom bar: "Crafted with care"

---

## Global CSS Requirements

```css
/* globals.css */
@layer base {
  * {
    border-radius: 0 !important;
  }
  body {
    @apply bg-background text-foreground transition-colors duration-300;
  }
  html {
    @apply font-sans scroll-smooth;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }
}
```

All `--radius-*` tokens must be `0`.

---

## Build Configuration

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

---

## Key Behaviors to Preserve

1. **Dark mode first** — default to dark, but support light mode toggle via `next-themes`
2. **Navbar** — transparent → solid on scroll (40px threshold)
3. **Hero morph** — single video, shrinks via `clipPath` only (no duplicate video elements)
4. **Floating images** — mouse parallax via Framer Motion spring physics
5. **Sticky stack destinations** — each card sticks, creating a deck effect
6. **Swiper carousel** — progress bar updates in real time
7. **Concierge auto-rotate** — 5-second intervals, progress bar fills, click to override
8. **Marquee** — pure CSS animation, pause on hover
9. **No border radius anywhere** — strictly 0px
10. **All images** — `quality={100}` for sharpness

---

## File Structure
```
app/
  sections/
    hero.tsx              ← Hero + Our Story (pinned morph)
    featured-destinations.tsx
    signature-journeys.tsx
    fleet-showcase.tsx
    concierge-experience.tsx
    final-cta.tsx
  page.tsx
  layout.tsx
  globals.css
components/
  navbar.tsx
  footer.tsx
  theme-toggle.tsx
  section-wrapper.tsx
providers/
  theme-provider.tsx
public/
  images/
    hero.mp4
    image-1.png ... image-20.png
```

---

## Output
Build the project, run `npm run build` to generate the `dist/` folder, then drag-and-drop `dist/` into Cloudflare Pages.
