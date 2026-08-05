# KILT — Hero (extracted from full-landing/kilt-prompt.md)

Stack: static HTML + CSS + vanilla JS (no framework), Vite-scaffolded. Fonts: **Bebas Neue** (400) + **Space Mono** (400/700) via Google Fonts.

Hero: split layout — giant "KI" typography on the left, a center product-model image, giant "LT" typography on the right, a tagline + CTA under the left/center, and a circular play button (toggles a play/pause glyph) floating bottom-right.

## Hero markup (verbatim, `index.html`)

```html
    <section class="hero-split" aria-label="Campaign hero">
      <div class="hero-text-left">KI</div>
      <div class="hero-model"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-hero-model.png" alt="Model in technical outerwear with modular layers" loading="eager"></div>
      <div class="hero-text-right">LT</div>
      <div class="hero-tagline"><p>FUNCTIONAL. MODULAR. WEATHERPROOF.</p><a href="#shop" class="hero-cta">SHOP NOW</a></div>
      <button class="play-btn" id="play-btn" aria-label="Play campaign video"><span class="play-triangle" aria-hidden="true"></span></button>
    </section>
    <section class="new-collection reveal" id="shop" aria-labelledby="shop-heading">
```

## Related hero styles (verbatim, `styles.css`)

```css
.hero-split { position: relative; display: grid; grid-template-columns: 1fr; min-height: 100vh; padding-bottom: 6rem; background: var(--off-white); color: var(--black); overflow: hidden; }
.hero-text-left, .hero-text-right { font-family: var(--font-display); font-size: 22vw; line-height: 0.82; text-transform: uppercase; text-align: center; padding: 0 1rem; }
.hero-text-left { padding-top: 5rem; align-self: end; }
.hero-text-right { align-self: start; }
.hero-model { width: 100%; height: 55vh; min-height: 20rem; overflow: hidden; }
.hero-model img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }
.hero-tagline { padding: 1.5rem 1rem 2rem; max-width: 320px; font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5; color: var(--black); }
.hero-cta { display: inline-block; margin-top: 1rem; padding: 1rem 2.5rem; border-radius: 999px; background: var(--black); color: var(--off-white); font-family: var(--font-mono); font-weight: 700; text-transform: uppercase; text-decoration: none; border: none; transition: background 0.2s ease, color 0.2s ease; }
.hero-cta:hover { background: var(--lime); color: var(--black); }
.play-btn { position: absolute; bottom: 3rem; right: 1.5rem; z-index: 3; display: inline-grid; place-items: center; width: 4rem; height: 4rem; border: 2px solid var(--black); background: transparent; color: var(--black); }
.play-btn:hover, .play-btn.playing { background: var(--lime); border-color: var(--lime); color: var(--black); }
.play-triangle { width: 0; height: 0; margin-left: 0.25rem; border-left: 1rem solid currentColor; border-top: 0.6rem solid transparent; border-bottom: 0.6rem solid transparent; }
.play-btn.playing .play-triangle { width: 1rem; height: 1rem; margin-left: 0; border: 0; background: currentColor; }
```

Colors: black `#000000` bg, off-white `#F2F2F2` text/lines, neon lime `#C8FF00` accent.

## Assets used in this hero

| Filename | URL | Content |
|---|---|---|
| `kilt-hero-model.png` | `https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-hero-model.png` | Model in modular technical outerwear, center of the hero split |
