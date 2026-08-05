# LUMA — Hero (extracted from full-landing/luma-prompt.md)

Stack: static HTML + CSS + vanilla JS (no framework), Vite-scaffolded. Fonts: **DM Sans** (300/400/500/700) via Google Fonts.

Hero: full-viewport auto-advancing carousel (3 slides, 5s interval, fade transition, pauses on hover), each slide a full-bleed photo with bottom content (kicker, title, subtitle, CTA), plus dot pagination bottom-right. Starts on slide index 2 ("Made to Live In").

## Hero markup (verbatim, `index.html`)

```html
    <section class="hero" id="hero" aria-label="Featured collections">
      <div class="hero__slider" id="hero-slider">
        <article class="hero__slide" data-index="0">
          <div class="hero__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/luma/luma-hero-1.png?v=3" alt="Man and woman in cream tennis sweaters beside a vintage convertible" loading="eager"></div>
          <div class="hero__content"><p class="hero__kicker">New Arrivals</p><h1 class="hero__title">The Country Club Edit</h1><p class="hero__sub">Timeless pieces for tennis mornings and garden evenings.</p><a href="#women" class="hero__cta">Explore Now</a></div>
        </article>
        <article class="hero__slide" data-index="1">
          <div class="hero__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/luma/luma-hero-2.png?v=3" alt="Models in relaxed knit layers on a sun-bleached terrace" loading="lazy"></div>
          <div class="hero__content"><p class="hero__kicker">Seasonal</p><h1 class="hero__title">The Knit Edit</h1><p class="hero__sub">Soft layers in warm ivory, sage and clay.</p><a href="#men" class="hero__cta">Explore Now</a></div>
        </article>
        <article class="hero__slide is-active" data-index="2">
          <div class="hero__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/luma/luma-hero-3.png?v=3" alt="A couple in tailored sportswear walking through an Italian garden" loading="lazy"></div>
          <div class="hero__content"><p class="hero__kicker">Lifestyle</p><h1 class="hero__title">Made to Live In</h1><p class="hero__sub">From the court to the clubhouse and everywhere between.</p><a href="#featured" class="hero__cta">Explore Now</a></div>
        </article>
      </div>
      <div class="hero__pagination" id="hero-pagination" role="tablist" aria-label="Hero slides">
        <button class="hero__dot" data-slide="0" aria-label="Show slide 1" aria-selected="false" role="tab"></button>
        <button class="hero__dot" data-slide="1" aria-label="Show slide 2" aria-selected="false" role="tab"></button>
        <button class="hero__dot is-active" data-slide="2" aria-label="Show slide 3" aria-selected="true" role="tab"></button>
      </div>
    </section>
```

## Related hero styles (verbatim, `styles.css`)

```css
.hero { position: relative; padding-top: 0; }
.hero__slider { position: relative; width: 100%; height: calc(100vh - var(--announcement-height)); min-height: 600px; overflow: hidden; }
.hero__slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.6s ease; }
.hero__slide.is-active { opacity: 1; z-index: 1; }
.hero__slide::before { content: ''; position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%); pointer-events: none; }
.hero__media { position: absolute; inset: 0; }
.hero__media img { width: 100%; height: 100%; object-fit: cover; }
.hero__content { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: 1.5rem; color: var(--color-white); }
.hero__kicker { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 0.5rem; opacity: 0.85; }
.hero__title { font-size: 1.6rem; font-weight: 400; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1.1; margin-bottom: 0.75rem; }
.hero__sub { font-size: 0.95rem; font-weight: 300; line-height: 1.5; margin-bottom: 1rem; max-width: 420px; opacity: 0.9; }
.hero__cta { font-size: 0.85rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-white); }
.hero__pagination { position: absolute; right: 1.5rem; bottom: 1.5rem; z-index: 5; display: flex; gap: 0.5rem; }
.hero__dot { width: 8px; height: 8px; padding: 0; border: 0; background: rgba(255, 255, 255, 0.45); transition: background var(--transition); cursor: pointer; }
.hero__dot.is-active { background: var(--color-white); }
```

## Assets used in this hero

| Filename | URL | Content |
|---|---|---|
| `luma-hero-1.png` | `https://ecommerce-landing.pages.dev/generated-assets/luma/luma-hero-1.png?v=3` | Couple in cream tennis sweaters beside a vintage convertible — Slide 1 |
| `luma-hero-2.png` | `https://ecommerce-landing.pages.dev/generated-assets/luma/luma-hero-2.png?v=3` | Models in relaxed knit layers on a sun-bleached terrace — Slide 2 |
| `luma-hero-3.png` | `https://ecommerce-landing.pages.dev/generated-assets/luma/luma-hero-3.png?v=3` | Couple walking in an Italian garden — Slide 3 (default active slide) |
