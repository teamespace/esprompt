# Serenity — Hero (extracted from full-landing/serenity-prompt.md)

Stack: React + Vite + TypeScript + Tailwind CSS 4. Fonts: **Space Grotesk** (300–700) via Google Fonts, applied globally with `font-['Space_Grotesk',system-ui,sans-serif]`.

Hero: full-viewport header with a dark-overlay `bg-cover` background image (`HERO_BG`), a top-to-bottom gradient overlay, a headline + CTA button anchored top-left, and a 4-item stat row anchored bottom. Reveals with `data-aos="fade-up"` (AOS: `{ duration: 800, once: true, easing: "ease-out-cubic" }`).

## Hero markup (verbatim, `src/App.tsx`)

```tsx
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
```

## Assets used in this hero

| Const | URL | Content |
|---|---|---|
| `HERO_BG` | `https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Serenity/Hero/hero-bg.webp` | Therapist counseling session photo, used as the full-bleed hero background (dark gradient overlay on top) |
