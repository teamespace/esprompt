# Arlo — Hero (extracted from full-landing/arlo-prompt.md)

Stack: static HTML + CSS + vanilla JS (no framework), Vite-scaffolded. Fonts: **Inter** (300/400/500) + **Playfair Display** (400/500/600, incl. italics) via Google Fonts.

Hero: full-viewport auto-advancing carousel (3 slides, 5s interval, fade transition), each slide a full-bleed photo with bottom-left title/subtitle/CTA, plus dot pagination bottom-right.

## Hero markup (verbatim, `index.html`)

```html
    <section class="hero-carousel" aria-label="Hero" aria-roledescription="carousel" aria-live="polite">
      <div class="hero-carousel__track">
        <div class="hero-slide"><img class="hero-slide__media" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-1.png" alt="Shop Collection"><div class="hero-slide__content"><h2 class="hero-slide__title">The Season Ahead</h2><p class="hero-slide__subtitle">Quiet essentials built to last</p><a href="#collection" class="hero-slide__cta">Shop All</a></div></div>
        <div class="hero-slide is-active"><img class="hero-slide__media" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-2.png" alt="Shop Shirting"><div class="hero-slide__content"><h2 class="hero-slide__title">The Perfect Shirt</h2><p class="hero-slide__subtitle">Structure, ease, and natural fiber</p><a href="#shirting" class="hero-slide__cta">Shop Shirting</a></div></div>
        <div class="hero-slide"><img class="hero-slide__media" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-3.png" alt="Shop Tailoring"><div class="hero-slide__content"><h2 class="hero-slide__title">Modern Tailoring</h2><p class="hero-slide__subtitle">Limited run, made to measure</p><a href="#tailoring" class="hero-slide__cta">Shop Tailoring</a></div></div>
      </div>
      <div class="hero-dots" role="tablist" aria-label="Slide navigation"><button class="hero-dot" aria-label="Go to slide 1" aria-selected="false" role="tab"></button><button class="hero-dot is-active" aria-label="Go to slide 2" aria-selected="true" role="tab"></button><button class="hero-dot" aria-label="Go to slide 3" aria-selected="false" role="tab"></button></div>
    </section>
```

## Related hero styles (verbatim, `styles.css`)

```css
.hero-carousel { position: relative; width: 100%; height: 100vh; overflow: hidden; background: var(--text); }
.hero-carousel__track { position: relative; width: 100%; height: 100%; }
.hero-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.9s var(--ease-out); z-index: 0; }
.hero-slide.is-active { opacity: 1; z-index: 1; }
.hero-slide__media { width: 100%; height: 100%; object-fit: cover; object-position: center 65%; filter: grayscale(15%); }
.hero-slide__content { position: absolute; bottom: 4rem; left: 1.5rem; z-index: 2; color: #fff; max-width: 32rem; }
.hero-slide__title { font-family: var(--font-sans); font-size: clamp(1.75rem, 4vw, 3.5rem); font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.1; margin: 0 0 0.5rem; text-shadow: 0 2px 16px rgba(0,0,0,0.45); }
.hero-slide__subtitle { font-family: var(--font-sans); font-size: clamp(0.9rem, 1.5vw, 1.15rem); font-weight: 300; margin: 0 0 1.25rem; text-shadow: 0 1px 8px rgba(0,0,0,0.45); }
.hero-slide__cta { display: inline-block; padding: 0.875rem 1.75rem; font-family: var(--font-sans); font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; background: #fff; color: #1A1A1A; transition: transform 0.2s var(--ease-out), background-color 0.2s; }
.hero-slide__cta:hover { transform: translateY(-1px); background: #f2f2f2; }
.hero-dots { position: absolute; bottom: 2rem; right: 1.5rem; z-index: 2; display: flex; gap: 0.5rem; }
.hero-dot { width: 0.5rem; height: 0.5rem; padding: 0; border: none; border-radius: 50%; background: rgba(255,255,255,0.45); cursor: pointer; transition: background 0.25s, transform 0.25s; }
.hero-dot.is-active { background: #fff; transform: scale(1.2); }
```

Autoplay logic (verbatim, `script.js`):

```js
const slides = document.querySelectorAll('.hero-slide'), dots = document.querySelectorAll('.hero-dot');
if (slides.length && dots.length) {
  let current = 0, interval = 5000;
  function showSlide(index) {
    slides[current].classList.remove('is-active'); dots[current].classList.remove('is-active'); dots[current].setAttribute('aria-selected', 'false');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active'); dots[current].classList.add('is-active'); dots[current].setAttribute('aria-selected', 'true');
  }
  let autoPlay = setInterval(() => showSlide(current + 1), interval);
  dots.forEach((dot, i) => { dot.addEventListener('click', () => { clearInterval(autoPlay); showSlide(i); autoPlay = setInterval(() => showSlide(current + 1), interval); }); });
}
```

## Assets used in this hero

| Filename | URL | Content |
|---|---|---|
| `hero-new-1.png` | `https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-1.png` | Model walking down editorial alleyway — Slide 1 background |
| `hero-new-2.png` | `https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-2.png` | Close-up of clean cotton shirting — Slide 2 background (default active slide) |
| `hero-new-3.png` | `https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-3.png` | Clean tailored gray wool blazer detail — Slide 3 background |
