# Élan — Hero (extracted from full-landing/elan-prompt.md)

Stack: static HTML + CSS + vanilla JS (no framework), Vite-scaffolded. Fonts: **Inter** (300/400/500/600/700) + **Permanent Marker** (400) via Google Fonts.

Hero: full-viewport section with an autoplay/muted/looping background `<video>`, a dark gradient overlay for legibility, and bottom-left content (eyebrow, two-line title, single CTA link).

## Hero markup (verbatim, `index.html`)

```html
    <section class="hero" aria-label="Featured drop">
      <div class="hero-media"><video src="https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-hero.mp4" autoplay muted loop playsinline></video></div>
      <div class="hero-overlay"></div>
      <div class="hero-content"><p class="hero-eyebrow">Online Exclusive</p><h1 class="hero-title">Élan x Legends<br>Collection</h1><a href="#shop" class="hero-cta">Shop</a></div>
    </section>
```

## Related hero styles (verbatim, `styles.css`)

```css
.hero { position: relative; width: 100%; height: 100vh; min-height: 600px; max-height: 100vh; overflow: hidden; }
.hero-media { position: absolute; inset: 0; z-index: 0; background: #1a1a1a; }
.hero-media video { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.6) 100%); }
.hero-content { position: absolute; left: 1.5rem; bottom: 5rem; z-index: 2; color: #fff; max-width: 50ch; }
.hero-eyebrow { font-size: 0.65rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 0.75rem; opacity: 0.8; }
.hero-title { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 600; line-height: 1.0; letter-spacing: -0.04em; margin-bottom: 1.5rem; }
.hero-cta { display: inline-block; padding: 0.85rem 2.25rem; background: #fff; color: var(--text); font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em; transition: background 0.25s ease, transform 0.15s ease; }
.hero-cta:hover { background: var(--surface); }
.hero-cta:active { transform: translateY(1px); }
```

## Assets used in this hero

| Filename | URL | Content |
|---|---|---|
| `elan-hero.mp4` | `https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-hero.mp4` | Looping retro football action video, autoplay/muted hero background |
