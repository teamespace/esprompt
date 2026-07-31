Create a React + Vite + TypeScript + Tailwind CSS 4 single-page website for "Serenity Mental Health". The page has these sections in order: transparent navigation header (fixed, turns solid/translucent with border-gray-100 on scroll), Hero Section (with dark-overlay background `/hero-bg.png`, title "Compassionate care for your mental well-being", "Book a Consultation" call-to-action button, and a 4-item horizontal stats grid), Education Grid (pilled kicker "Education", heading "Comprehensive, evidence-based health education", and a 5-column hoverable grey-masked image grid), Core Differentiators Section (split view: text column + CURRICULUM link on the left, full-cover card image `/cert.png` on the right, followed by a 4-card details grid), Fixed-Background Approach Section (with dark-overlay fixed background `/approach-bg.png`, stats grid, and "Explore our programs" button), Stats & Partners Row (3 stats + 4 bold grayscale "PARTNER" tags), World-Class Faculty Grid (three profiles featuring square cards that zoom on hover, plus "Meet all faculty" button), Your Journey Roadmap (three cards mapping steps "01", "02", and "03"), Call To Action Section (overlay banner `/cta-bg.png` with "Get started now" button), and a 5-column brutalist Footer. Use `lucide-react` for interface icons (Menu and Close X icons) and `aos` (Animate On Scroll) initialized at `{ duration: 800, once: true, easing: "ease-out-cubic" }` for scroll animations (`data-aos="fade-up"` on sections). The page font family is "Space Grotesk".

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **THE ENTIRE SITE LIVES IN ONE FILE: `src/App.tsx` (~450 lines).** The stateful Navigation, mobile slide-over drawer, Hero, Education, Differentiators, Approach, Stats/Partners, Faculty, Journey, CTA, and Footer are all defined in that one file. Do not split into modular component folders.
2. **Tailwind Utility Architecture (Tailwind CSS 4):** All styling must use standard Tailwind classes. For elements that are not defined by standard scale tokens, use custom values verbatim (e.g. `bg-[url('/hero-bg.png')]`, `h-[300px]`, `md:h-[420px]`).
3. **Space Grotesk Font Integration:** The font family must be imported via Google Fonts `<link>` tags in `index.html`. The root container must declare `font-['Space_Grotesk',system-ui,sans-serif]` so it cascades globally.
4. **Local State Transitions (Navigation & Mobile Menu):**
   - Track scroll position: when `window.scrollY > 20`, transition the header background from `bg-transparent border-transparent text-white` to scrolled state: `bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm text-gray-900`. 
   - Logo, mobile menu triggers, and action buttons must switch text and border colors accordingly to preserve visibility.
   - Maintain a boolean `isMenuOpen` state to show/hide the mobile navigation overlay panel with a clean side-drawer or full-screen menu containing Lucide icons for closing (`X`) and opening (`Menu`).
5. **AOS Animation Initialization:** AOS must be imported and initialized exactly inside a React `useEffect` hook:
   ```tsx
   import AOS from 'aos';
   import 'aos/dist/aos.css';
   // inside App Component:
   useEffect(() => {
     AOS.init({
       duration: 800,
       once: true,
       easing: 'ease-out-cubic',
     });
   }, []);
   ```
   Add `data-aos="fade-up"` properties on major layout content wrappers.
6. **Card & Image Hover Interactions:**
   - **Education Grid images** must contain a grey-tinted overlay `<div className="w-full h-full bg-white/20 group-hover:bg-transparent transition-colors text-white"></div>` that fades out on hover.
   - **Differentiators cards** must add `hover:shadow-md transition-shadow`.
   - **Faculty cards** must zoom the profile photo: `group-hover:scale-105 transition-transform duration-500` with `overflow-hidden` on the wrapper, and add `hover:shadow-md transition-shadow`.
7. **Asset Reference Policies:** Images must be fetched from the remote host using their absolute URL paths pointing to `https://mental-health-two-psi.vercel.app/` (e.g. `https://mental-health-two-psi.vercel.app/hero-bg.png`). Do not reference them locally.

---

# FONTS

Import Space Grotesk (weights 300 to 700) using Google Fonts `<link>` tags in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
```

Apply Space Grotesk globally in `index.css` or via Tailwind class: `font-['Space_Grotesk',system-ui,sans-serif]`.

---

# SCAFFOLD FILES — COPY EXACTLY

## `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="/vite.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
    <title>Serenity Mental Health</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## `vite.config.ts`
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  background-color: #FAFAFA;
}
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
| Token | Hex/Representation | Usage |
|---|---|---|
| Main Background | `#FAFAFA` | Page container background, alternating bands, footer background |
| White | `#FFFFFF` | Core differentiators bg, journey steps card bg, header scrolled state bg |
| Gray-900 | `oklch(0.21 0.034 264.665)` (`text-gray-900`) | Main content text, primary headings, border-gray-900 |
| Gray-500 | `oklch(0.551 0.027 264.364)` (`text-gray-500`) | Body paragraph text, subcategories, secondary items |
| Gray-400 | `oklch(0.707 0.022 261.325)` (`text-gray-400`) | Grayscale logo placeholders, disabled details |
| Gray-300 | `oklch(0.872 0.01 258.338)` (`text-gray-300`) | Approach subheadings, borders |
| Gray-200 / 100 | `oklch(0.928 0.006 264.531)` / `oklch(96.7% .003 264.542)` | Borders, divider lines, light grey backgrounds |

## Type Sizing
| Element | Tailwind Classes | Equivalent |
|---|---|---|
| Hero Headline | `text-5xl md:text-6xl font-medium leading-tight text-white` | `48px` / `60px` |
| Section Headline H2 | `text-3xl md:text-4xl font-medium text-gray-900` | `30px` / `36px` |
| Feature Block H2 | `text-4xl md:text-5xl font-medium text-white` | `36px` / `48px` |
| Section Kickers (Pills) | `text-xs font-semibold tracking-wider text-gray-500` | `12px` uppercase |
| Paragraph Body text | `text-sm text-gray-500 leading-relaxed` / `text-base md:text-lg text-gray-500` | `14px` / `16px` |

## Spacing & Layout
| Element | Value |
|---|---|
| Section Padding | `py-16 md:py-24` or `py-20 md:py-32` or `py-24 md:py-32` |
| Main Page Wrapper | `max-w-7xl mx-auto px-6 md:px-16` |
| Gaps (Grid & Flex) | `gap-4`, `gap-6`, `gap-8`, `gap-10`, `gap-12`, `gap-16` |
| Layout Borders | `border-y border-gray-100` / `border-t border-gray-200` |

---

# APP STRUCTURE

```
src/
  main.tsx                 — Strictmode configuration + stylesheet import
  index.css                — Global smooth scroll and custom fonts configuration
  App.tsx                  — Full React compilation (verbatim code below)
```

---

# FULL `src/App.tsx` — COPY THIS EXACTLY

```tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Absolute assets hosted on Vercel
const HERO_BG = 'https://mental-health-two-psi.vercel.app/hero-bg.png';
const CERT_IMG = 'https://mental-health-two-psi.vercel.app/cert.png';
const APPROACH_BG = 'https://mental-health-two-psi.vercel.app/approach-bg.png';
const CTA_BG = 'https://mental-health-two-psi.vercel.app/cta-bg.png';

const EDU_IMAGES = [
  'https://mental-health-two-psi.vercel.app/edu-1.png',
  'https://mental-health-two-psi.vercel.app/edu-2.png',
  'https://mental-health-two-psi.vercel.app/edu-3.png',
  'https://mental-health-two-psi.vercel.app/edu-4.png',
  'https://mental-health-two-psi.vercel.app/edu-5.png'
];

const FACULTY_MEMBERS = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Functional Medicine Physician',
    image: 'https://mental-health-two-psi.vercel.app/faculty-1.png'
  },
  {
    name: 'Dr. Michael Torres',
    title: 'Clinical Nutritionist',
    image: 'https://mental-health-two-psi.vercel.app/faculty-2.png'
  },
  {
    name: 'Dr. Emily Watson',
    title: 'Integrative Health Researcher',
    image: 'https://mental-health-two-psi.vercel.app/faculty-3.png'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen font-['Space_Grotesk',system-ui,sans-serif] text-gray-900">
      
      {/* Navigation Header */}
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 flex items-center justify-between">
          <div
            className={`text-xl font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'
            }`}
          >
            Serenity Mental Health
          </div>

          <div className="flex items-center gap-6">
            <button
              className={`hidden md:flex items-center justify-center px-6 py-2 border rounded text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'border-gray-300 text-gray-900 hover:bg-gray-50'
                  : 'border-white/50 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Apply now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] md:top-[72px] z-40 bg-white border-t border-gray-100 flex flex-col p-6 gap-6 md:hidden">
            <a
              href="#education"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Education
            </a>
            <a
              href="#different"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Certification
            </a>
            <a
              href="#approach"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Our Approach
            </a>
            <a
              href="#faculty"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Faculty
            </a>
            <button className="w-full mt-auto py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors">
              Apply now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Header Banner */}
      <header
        className="relative w-full min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-0"></div>
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-16 md:pb-24 flex flex-col justify-between flex-1 gap-20"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-8 max-w-2xl mt-16 md:mt-24">
            <h1 className="text-5xl md:text-6xl font-medium leading-tight text-white drop-shadow-md">
              Compassionate care for your mental well-being
            </h1>
            <button className="h-14 px-8 w-fit flex items-center justify-center bg-white text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors shadow-lg">
              Book a Consultation
            </button>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 md:gap-16 self-start lg:self-end">
            <div className="flex flex-col gap-1 items-start">
              <div className="text-3xl md:text-4xl font-medium text-white drop-shadow-md">10,000+</div>
              <div className="text-sm text-gray-200 font-medium tracking-wide drop-shadow-sm">
                Patients helped
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="text-3xl md:text-4xl font-medium text-white drop-shadow-md">98%</div>
              <div className="text-sm text-gray-200 font-medium tracking-wide drop-shadow-sm">
                Client satisfaction
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="text-3xl md:text-4xl font-medium text-white drop-shadow-md">50+</div>
              <div className="text-sm text-gray-200 font-medium tracking-wide drop-shadow-sm">
                Certified Therapists
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="text-3xl md:text-4xl font-medium text-white drop-shadow-md">24/7</div>
              <div className="text-sm text-gray-200 font-medium tracking-wide drop-shadow-sm">
                Support available
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Education Grid */}
      <section id="education" className="w-full bg-[#FAFAFA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-10" data-aos="fade-up">
          <div className="flex flex-col gap-6 items-start">
            <span className="px-3 py-1.5 bg-gray-100 text-gray-900 text-xs font-medium rounded-full">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-medium max-w-2xl text-gray-900">
              Comprehensive, evidence-based health education
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {EDU_IMAGES.map((url, idx) => (
              <div
                key={idx}
                className="h-48 md:h-64 rounded-lg bg-cover bg-center border border-gray-200 shadow-sm overflow-hidden group"
                style={{ backgroundImage: `url(${url})` }}
              >
                <div className="w-full h-full bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Core Differentiators */}
      <section id="different" className="w-full bg-white py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-12" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
                What makes our certification different
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Our programs combine the latest research in functional medicine with practical clinical training, giving health professionals the tools to deliver personalized, root-cause care.
              </p>
              <a
                href="#"
                className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                View curriculum
              </a>
            </div>
            <div
              className="flex-1 w-full h-[300px] md:h-[420px] rounded-lg bg-cover bg-center border border-gray-200 shadow-sm"
              style={{ backgroundImage: `url(${CERT_IMG})` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900">Evidence-based curriculum</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Courses built on peer-reviewed research and clinical outcomes.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900">Root-cause methodology</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Learn to identify and address the underlying drivers of disease.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900">Flexible online learning</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Study at your own pace with world-class faculty and support.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900">Clinical case studies</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Apply concepts through real patient scenarios and protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach (Fixed Background Overlay) */}
      <section
        id="approach"
        className="relative w-full py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${APPROACH_BG})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-12" data-aos="fade-up">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="text-sm font-medium tracking-widest uppercase text-gray-300">Our Approach</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight drop-shadow-md">
              Functional Medicine is the future of health care.
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed drop-shadow-sm">
              We train practitioners to look beyond symptoms and uncover the root causes of chronic disease — using labs, nutrition, and systems-based thinking.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24 mt-8">
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl font-medium text-white drop-shadow-md">12+</div>
              <div className="text-sm text-gray-300 font-medium drop-shadow-sm">Specialties covered</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl font-medium text-white drop-shadow-md">200+</div>
              <div className="text-sm text-gray-300 font-medium drop-shadow-sm">Hours of curriculum</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl font-medium text-white drop-shadow-md">97%</div>
              <div className="text-sm text-gray-300 font-medium drop-shadow-sm">Practitioner satisfaction</div>
            </div>
          </div>

          <button className="h-14 px-8 w-fit flex items-center justify-center bg-white text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors mt-4">
            Explore our programs
          </button>
        </div>
      </section>

      {/* Section 4: Stats & Partners Row */}
      <section className="w-full bg-[#FAFAFA] border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center lg:justify-start">
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-medium text-gray-900">10,000+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Patients helped</div>
            </div>
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-medium text-gray-900">98%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Client satisfaction</div>
            </div>
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-medium text-gray-900">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Certified Therapists</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 justify-center opacity-60 grayscale">
            <div className="text-sm font-bold text-gray-400 tracking-widest">PARTNER</div>
            <div className="text-sm font-bold text-gray-400 tracking-widest">PARTNER</div>
            <div className="text-sm font-bold text-gray-400 tracking-widest">PARTNER</div>
            <div className="text-sm font-bold text-gray-400 tracking-widest">PARTNER</div>
          </div>
        </div>
      </section>

      {/* Section 5: World-Class Faculty Grid */}
      <section id="faculty" className="w-full py-20 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-16" data-aos="fade-up">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              World-Class Faculty
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
              You're one step closer to becoming the exact home-health pro your clients deserve.
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Learn from leading clinicians, researchers, and educators in functional medicine and nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {FACULTY_MEMBERS.map((fac, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-full aspect-square overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${fac.image})` }}
                  ></div>
                </div>
                <div className="p-6 flex flex-col gap-1 bg-white relative z-10">
                  <h3 className="text-lg font-medium text-gray-900">{fac.name}</h3>
                  <p className="text-sm text-gray-500">{fac.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mx-auto mt-4 h-14 px-8 w-fit flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Meet all faculty
          </button>
        </div>
      </section>

      {/* Section 6: Your Journey Roadmap */}
      <section className="w-full bg-white py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-12" data-aos="fade-up">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
              Becoming the expert your clients need starts here.
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              A clear path from foundational knowledge to advanced clinical confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#FAFAFA] border border-gray-100 rounded-xl flex flex-col gap-4">
              <div className="text-5xl font-medium text-gray-200">01</div>
              <h3 className="text-xl font-medium text-gray-900">Learn the fundamentals</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Build a strong foundation in functional medicine principles, systems biology, and root-cause analysis.
              </p>
            </div>
            <div className="p-8 bg-[#FAFAFA] border border-gray-100 rounded-xl flex flex-col gap-4">
              <div className="text-5xl font-medium text-gray-200">02</div>
              <h3 className="text-xl font-medium text-gray-900">Apply advanced protocols</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Work through real case studies and evidence-based protocols for complex chronic conditions.
              </p>
            </div>
            <div className="p-8 bg-[#FAFAFA] border border-gray-100 rounded-xl flex flex-col gap-4">
              <div className="text-5xl font-medium text-gray-200">03</div>
              <h3 className="text-xl font-medium text-gray-900">Transform your practice</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Implement what you learn with confidence and join a community of forward-thinking practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action Section */}
      <section
        className="relative w-full py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div
          className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white drop-shadow-md">
            Blood work is just the beginning.
          </h2>
          <p className="text-lg text-gray-200 drop-shadow-sm">
            Start your certification today and learn how to interpret labs, design protocols, and change lives.
          </p>
          <button className="h-14 px-8 flex items-center justify-center bg-white text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors mt-4 shadow-lg">
            Get started now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#FAFAFA] pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="text-xl font-medium text-gray-900">Serenity Mental Health</div>
              <p className="text-sm text-gray-500 max-w-xs">
                Evidence-based education for the future of health care.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 text-sm">Programs</h4>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Certification
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Courses
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Specialties
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Continuing Education
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 text-sm">Company</h4>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Faculty
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Careers
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 text-sm">Resources</h4>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Research
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Student Hub
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Support
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Serenity Mental Health. All rights reserved.
            </p>
            <div className="text-sm font-bold text-gray-400 tracking-widest opacity-60">
              PARTNER LOGO
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

---

# COMMON MISTAKES TO AVOID (these break the 1:1 look & feel)

1. ❌ **Rounding custom grid paddings and margins** — Do not replace section paddings like `py-16 md:py-24` / `py-20 md:py-32` with generic ones.
2. ❌ **Swapping the Space Grotesk display font** — Space Grotesk is critical to match the design's typographic identity. Do not fallback to standard sans-serif.
3. ❌ **Missing absolute image URLs** — Ensure images reference `https://mental-health-two-psi.vercel.app/` assets. Re-hosting them locally will cause loading issues unless they are bundled.
4. ❌ **Removing the fixed background class (`bg-fixed`) in Approach Section** — Removing `bg-fixed` removes the parallax-scroll visual effect.
5. ❌ **Forgetting the transparent to solid navigation transformation** — The nav bar must change background color and border style dynamically after scrolling past `scrollY > 20`. Without this transition, header text and controls become invisible when passing white backgrounds.
6. ❌ **Omitting AOS initialization** — Forgetting to run `AOS.init` in `useEffect` leaves elements with `data-aos="fade-up"` completely static or hidden.
7. ❌ **Removing brightness overlays in the Education image grid** — The brightness mask `group-hover:bg-transparent transition-colors` is the key interaction signature.

---

# IMAGES / ASSETS

- Base URL: `https://mental-health-two-psi.vercel.app/`
- Total Count: 12 images

| Const/Name | URL | Content | Where Used |
|---|---|---|---|
| `HERO_BG` | `/hero-bg.png` | Therapist counseling session image | Hero Section Header Background |
| `CERT_IMG` | `/cert.png` | Group of people collaborating in training | Differentiators Columns Right Card |
| `APPROACH_BG` | `/approach-bg.png` | Hands of group coming together in unity | Approach Section Background |
| `CTA_BG` | `/cta-bg.png` | Close-up medical tubes/science background | CTA Banner Background |
| `EDU_IMAGES[0]` | `/edu-1.png` | Medical lab environment | Education Grid Image 1 |
| `EDU_IMAGES[1]` | `/edu-2.png` | Professional studying papers | Education Grid Image 2 |
| `EDU_IMAGES[2]` | `/edu-3.png` | Person doing blood work / clinical training | Education Grid Image 3 |
| `EDU_IMAGES[3]` | `/edu-4.png` | Classroom session | Education Grid Image 4 |
| `EDU_IMAGES[4]` | `/edu-5.png` | Doctor looking at charts | Education Grid Image 5 |
| `FACULTY_MEMBERS[0]` | `/faculty-1.png` | Dr. Sarah Chen portrait | Faculty Grid Card 1 |
| `FACULTY_MEMBERS[1]` | `/faculty-2.png` | Dr. Michael Torres portrait | Faculty Grid Card 2 |
| `FACULTY_MEMBERS[2]` | `/faculty-3.png` | Dr. Emily Watson portrait | Faculty Grid Card 3 |

---

# TECH STACK

- **Framework**: React + Vite + TypeScript (React 19+)
- **Styling**: Tailwind CSS v4
- **Animation**: `aos` (Animate On Scroll) v2
- **Icons**: `lucide-react` (Menu, X)
- **Fonts**: Space Grotesk via Google Fonts
