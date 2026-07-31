Create a static HTML + CSS + Vanilla JavaScript website for "ARLO — Quiet Editorial Apparel", a minimalist editorial fashion storefront. The page has these sections in order: Utility Bar (removable announcement banner at the top), Site Header (fixed card navigation with logo "ARLO" and actions: ACCOUNT, Search, CART), Hero Carousel (sliding banner with three fashion look background images and textual slide content), Manifesto Section (quote "We believe the best clothes are the ones you reach for without thinking...", with fade-in scroll reveal), Categories Grid (3 image cards representing Shirting, Tailoring, and Accessories), Feature Products / Essentials Scroll (horizontal scrollable list of 6 curated products with hover zoom and a "Shop All Essentials" drawer-trigger button), Collection Showcase (split screen: SS26 description with a product pagination stage on the left, and a full lookbook cover on the right), Lookbook Grid (6 figure columns Look 01 to Look 06), Materials Craft Section (split layout detailing material standards on the left and a fabric card image on the right), Marquee Tagline (infinite horizontal scroll reading "The Quiet Confidence · Season 26 · Made to Last ·"), Journal Slider (horizontal slider of 6 editorial article covers with navigation arrow triggers), and a site Footer (Newsletter form + Link list). In addition, a slide-out Product Drawer must overlay from the bottom on mobile/tablet (or grid format on desktop) when "Shop All Essentials" or "CART" is clicked, allowing size selection and adding items to the cart. The design is quiet luxury: soft off-white background `#F7F5F2`, dark charcoal text `#1A1A1A`, serif headings (Playfair Display), and clean sans-serif body text (Inter), structured with IntersectionObserver scroll reveals.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **FILE ARCHITECTURE — NO FRAMEWORKS:** The entire project must be built as a vanilla static website consisting of: `index.html` (the markup), `styles.css` (verbatim styling), and `script.js` (verbatim state logic), with a simple development config in `package.json` & `vite.config.js`. Do not use React, Vue, Next.js, or Tailwind.
2. **VERBATIM COPYING:** Copy the stylesheet `styles.css` and logic `script.js` provided below exactly as written. Do not refactor the scroll observer, carousels, or drawer state.
3. **FONTS:** Load Inter (weights 300, 400, 500) and Playfair Display (weights 400, 500, 600, including italics) via Google Fonts `<link>` in `index.html`.
4. **ASSET ROBUSTNESS:** All media assets must reference the absolute Vercel/pages.dev paths hosted at `https://ecommerce-landing.pages.dev/`. Do not download or host assets locally.
5. **INTERACTIVE FEATURES & TRANSITIONS:**
   - **Hero Carousel**: Automatic transition every 5 seconds, dot indicators slide toggle, fade-in transition.
   - **Product Drawer**: Slide-up transition (`translateY(100% → 0)`) using `transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Prevent body scroll when active.
   - **Intersection Observer Scroll Reveal**: Elements initialize hidden at `opacity: 0; transform: translateY(24px)` and transition smoothly to `opacity: 1; transform: translateY(0)` on scroll.
   - **Marquee scrolling**: Infinite keyframe animation at `24s linear infinite`.

---

# FONTS

Import Inter and Playfair Display via Google Fonts `<link>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

## `package.json`
```json
{
  "name": "arlo-editorial",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" },
  "devDependencies": { "vite": "^5.0.0" }
}
```

## `vite.config.js`
```js
import { defineConfig } from 'vite';
export default defineConfig({ server: { port: 3000 } });
```

## `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARLO — Quiet Editorial Apparel</title>
  <meta name="description" content="ARLO — quiet, monochrome editorial apparel built to last.">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="utility-bar" id="utility-bar"><p>Free shipping on orders over $250</p><button class="utility-close" id="utility-close" aria-label="Close message">×</button></div>
  <header class="site-header" role="banner">
    <nav class="main-nav" aria-label="Primary"><a href="#shirting">Shirting</a><a href="#tailoring">Tailoring</a><a href="#collection">Collection</a><a href="#journal">Journal</a></nav>
    <a href="#" class="logo" aria-label="ARLO home">ARLO</a>
    <div class="header-actions"><button class="text-btn" aria-label="Account">ACCOUNT</button><button class="icon-btn" aria-label="Search">⌕</button><button class="text-btn" id="bag-btn" aria-label="Shopping bag">CART (<span id="bag-count">0</span>)</button></div>
  </header>
  <main id="main-content">
    <section class="hero-carousel" aria-label="Hero" aria-roledescription="carousel" aria-live="polite">
      <div class="hero-carousel__track">
        <div class="hero-slide"><img class="hero-slide__media" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-1.png" alt="Shop Collection"><div class="hero-slide__content"><h2 class="hero-slide__title">The Season Ahead</h2><p class="hero-slide__subtitle">Quiet essentials built to last</p><a href="#collection" class="hero-slide__cta">Shop All</a></div></div>
        <div class="hero-slide is-active"><img class="hero-slide__media" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-2.png" alt="Shop Shirting"><div class="hero-slide__content"><h2 class="hero-slide__title">The Perfect Shirt</h2><p class="hero-slide__subtitle">Structure, ease, and natural fiber</p><a href="#shirting" class="hero-slide__cta">Shop Shirting</a></div></div>
        <div class="hero-slide"><img class="hero-slide__media" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/hero-new-3.png" alt="Shop Tailoring"><div class="hero-slide__content"><h2 class="hero-slide__title">Modern Tailoring</h2><p class="hero-slide__subtitle">Limited run, made to measure</p><a href="#tailoring" class="hero-slide__cta">Shop Tailoring</a></div></div>
      </div>
      <div class="hero-dots" role="tablist" aria-label="Slide navigation"><button class="hero-dot" aria-label="Go to slide 1" aria-selected="false" role="tab"></button><button class="hero-dot is-active" aria-label="Go to slide 2" aria-selected="true" role="tab"></button><button class="hero-dot" aria-label="Go to slide 3" aria-selected="false" role="tab"></button></div>
    </section>
    <section class="manifesto" aria-labelledby="manifesto-heading"><div class="manifesto__inner"><p class="manifesto__label">Our point of view</p><h2 id="manifesto-heading" class="manifesto__quote">"We believe the best clothes are the ones you reach for without thinking. The ones that improve with wear, and never need to announce themselves."</h2><p class="manifesto__sig">— The ARLO Atelier</p></div></section>
    <section class="categories" id="collection" aria-labelledby="categories-heading">
      <div class="section-header"><p class="eyebrow">The Collection</p><h2 id="categories-heading" class="section-title">Shop by Edit</h2></div>
      <div class="categories__grid">
        <a href="#shirting" class="category-card" id="shirting-card"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-cat-shirting.png" alt="Male model in cream overshirt"><div class="category-card__overlay"><span class="category-card__title">Shirting</span><span class="category-card__cta">Explore →</span></div></a>
        <a href="#tailoring" class="category-card" id="tailoring-card"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-cat-tailoring.png" alt="Male model in black blazer"><div class="category-card__overlay"><span class="category-card__title">Tailoring</span><span class="category-card__cta">Explore →</span></div></a>
        <a href="#" class="category-card"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-cat-accessories.png" alt="Minimalist accessories still life"><div class="category-card__overlay"><span class="category-card__title">Accessories</span><span class="category-card__cta">Explore →</span></div></a>
      </div>
    </section>
    <section class="feature-products" aria-labelledby="feature-products-heading">
      <div class="feature-products__header"><div><p class="eyebrow">Essentials</p><h2 id="feature-products-heading" class="section-title">The Quiet Edit</h2></div><button class="btn btn--ghost" id="open-drawer">Shop All Essentials</button></div>
      <div class="feature-products__scroll" id="feature-scroll">
        <article class="feature-product"><div class="feature-product__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-1.png" alt="Linen trench coat"></div><h3>Linen Trench</h3><p class="feature-product__price">$340</p></article>
        <article class="feature-product"><div class="feature-product__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-2.png" alt="Cashmere knit"></div><h3>Cashmere Knit</h3><p class="feature-product__price">$260</p></article>
        <article class="feature-product"><div class="feature-product__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-3.png" alt="Wide-leg trousers"></div><h3>Wide-Leg Trousers</h3><p class="feature-product__price">$195</p></article>
        <article class="feature-product"><div class="feature-product__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-4.png" alt="Silk shirt"></div><h3>Silk Shirt</h3><p class="feature-product__price">$225</p></article>
        <article class="feature-product"><div class="feature-product__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-5.png" alt="Merino scarf"></div><h3>Merino Scarf</h3><p class="feature-product__price">$95</p></article>
        <article class="feature-product"><div class="feature-product__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-6.png" alt="Tailored blazer"></div><h3>Tailored Blazer</h3><p class="feature-product__price">$420</p></article>
      </div>
    </section>
    <section class="collection-showcase" aria-labelledby="collection-showcase-heading">
      <div class="collection-showcase__product">
        <div class="collection-showcase__text"><h2 id="collection-showcase-heading" class="collection-showcase__title">Spring Summer 2026 Collection</h2><p class="collection-showcase__desc">Where performance meets personality, SS26 delivers effortless elegance with a playful edge.</p></div>
        <div class="collection-showcase__stage"><img id="showcase-img" src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-3.png" alt="Wide-leg trousers"></div>
        <div class="collection-showcase__meta"><span class="collection-showcase__name">Wide-Leg Trousers</span><span class="collection-showcase__price">$195</span></div>
        <a href="#" class="collection-showcase__link">View Product</a>
        <div class="collection-showcase__dots" role="tablist" aria-label="Product carousel">
          <button class="showcase-dot is-active" aria-label="Product 1" aria-selected="true" role="tab" data-index="0"></button>
          <button class="showcase-dot" aria-label="Product 2" aria-selected="false" role="tab" data-index="1"></button>
          <button class="showcase-dot" aria-label="Product 3" aria-selected="false" role="tab" data-index="2"></button>
          <button class="showcase-dot" aria-label="Product 4" aria-selected="false" role="tab" data-index="3"></button>
          <button class="showcase-dot" aria-label="Product 5" aria-selected="false" role="tab" data-index="4"></button>
          <button class="showcase-dot" aria-label="Product 6" aria-selected="false" role="tab" data-index="5"></button>
        </div>
      </div>
      <div class="collection-showcase__model"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-hero.png" alt="Model wearing ARLO SS26 collection"></div>
    </section>
    <section class="lookbook" aria-labelledby="lookbook-heading">
      <div class="lookbook__header"><p class="eyebrow">Lookbook</p><h2 id="lookbook-heading" class="section-title">Season 26</h2></div>
      <div class="lookbook__grid">
        <figure class="lookbook__item"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-1.png" alt="Look 1"><figcaption>Look 01</figcaption></figure>
        <figure class="lookbook__item"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-2.png" alt="Look 2"><figcaption>Look 02</figcaption></figure>
        <figure class="lookbook__item"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-3.png" alt="Look 3"><figcaption>Look 03</figcaption></figure>
        <figure class="lookbook__item"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-4.png" alt="Look 4"><figcaption>Look 04</figcaption></figure>
        <figure class="lookbook__item"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-5.png" alt="Look 5"><figcaption>Look 05</figcaption></figure>
        <figure class="lookbook__item"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-6.png" alt="Look 6"><figcaption>Look 06</figcaption></figure>
      </div>
    </section>
    <section class="craft" aria-labelledby="craft-heading">
      <div class="craft__inner">
        <div class="craft__text">
          <p class="eyebrow">Materials</p><h2 id="craft-heading" class="section-title">Made to Last</h2>
          <p>We work with family-run mills in Portugal, Italy, and Japan to source natural fibers that age gracefully. Every seam is considered, every button is corozo, and every garment is finished by hand.</p>
          <ul class="craft__list"><li>100% natural fibers</li><li>Corozo buttons</li><li>Small-batch production</li><li>Plastic-free packaging</li></ul>
        </div>
        <div class="craft__media"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-craft.png" alt="Natural fabric texture detail"></div>
      </div>
    </section>
    <section class="marquee" aria-label="Scrolling tagline"><div class="marquee-track"><span>The Quiet Confidence</span><span>·</span><span>Season 26</span><span>·</span><span>Made to Last</span><span>·</span><span>The Quiet Confidence</span><span>·</span><span>Season 26</span><span>·</span><span>Made to Last</span><span>·</span></div></section>
    <section class="journal" id="journal" aria-labelledby="journal-heading">
      <h2 id="journal-heading" class="journal__heading">We create, you wear.</h2>
      <div class="journal__slider">
        <button class="journal__arrow journal__arrow--left" aria-label="Previous journal entries"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
        <div class="journal__scroll" tabindex="0" role="list" aria-label="Journal entries">
          <article class="journal-card journal-card--wide" role="listitem"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-journal-1.png" alt="On the Art of Restraint"><div class="journal-card__overlay"><p class="journal-card__date">June 2026</p><h3>On the Art of Restraint</h3></div></article>
          <article class="journal-card journal-card--narrow" role="listitem"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-journal-2.png" alt="A Guide to Linen"></article>
          <article class="journal-card journal-card--wide" role="listitem"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-journal-3.png" alt="The Perfect White Shirt"><div class="journal-card__overlay"><p class="journal-card__date">April 2026</p><h3>The Perfect White Shirt</h3></div></article>
          <article class="journal-card journal-card--narrow" role="listitem"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-1.png" alt="Look 01"></article>
          <article class="journal-card journal-card--wide" role="listitem"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-2.png" alt="Look 02"><div class="journal-card__overlay"><p class="journal-card__date">Season 26</p><h3>Quiet Confidence</h3></div></article>
          <article class="journal-card journal-card--narrow" role="listitem"><img src="https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-look-3.png" alt="Look 03"></article>
        </div>
        <button class="journal__arrow journal__arrow--right" aria-label="Next journal entries"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
      </div>
    </section>
  </main>
  <footer class="site-footer" role="contentinfo">
    <div class="site-footer__grid">
      <div><p class="footer-logo">ARLO</p><p class="footer-tagline">Quiet editorial apparel.</p></div>
      <nav class="footer-links" aria-label="Footer"><a href="#shirting">Shirting</a><a href="#tailoring">Tailoring</a><a href="#collection">Collection</a><a href="#journal">Journal</a><a href="#">Shipping</a><a href="#">Returns</a><a href="#">Care</a><a href="#">Contact</a></nav>
      <form class="newsletter" onsubmit="event.preventDefault();"><label for="newsletter-email">Newsletter</label><div class="newsletter__row"><input id="newsletter-email" type="email" placeholder="your@email.com" autocomplete="email"><button type="submit" class="btn">Subscribe</button></div></form>
    </div>
    <p class="copyright">© 2026 ARLO. All rights reserved.</p>
  </footer>
  <div class="drawer-backdrop" id="drawer-backdrop" aria-hidden="true"></div>
  <aside class="product-drawer" id="product-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-hidden="true">
    <div class="drawer-header"><h2 id="drawer-title">Essentials</h2><button class="drawer-close" id="drawer-close" aria-label="Close drawer">×</button></div>
    <div class="drawer-grid" id="drawer-grid"></div>
  </aside>
  <button id="theme-toggle" style="display: none;" aria-hidden="true">Theme Toggle</button>
  <script src="script.js"></script>
</body>
</html>
```

## `styles.css`
```css
:root { --bg: #F7F5F2; --text: #1A1A1A; --text-inverse: #F7F5F2; --accent: #E8DDD3; --muted: #888888; --surface: #FFFFFF; --surface-raised: #FFFFFF; --border: rgba(26, 26, 26, 0.10); --overlay: rgba(26, 26, 26, 0.35); --shadow: rgba(26, 26, 26, 0.06); --font-serif: "Playfair Display", Georgia, serif; --font-sans: "Inter", system-ui, sans-serif; --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94); --header-height: 4rem; }
[data-theme="dark"] { --bg: #1A1A1A; --text: #F7F5F2; --text-inverse: #1A1A1A; --accent: #2A2A2A; --muted: #999999; --surface: #222222; --surface-raised: #2A2A2A; --border: rgba(247, 245, 242, 0.10); --overlay: rgba(0, 0, 0, 0.55); --shadow: rgba(0, 0, 0, 0.35); }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: var(--font-sans); font-weight: 300; color: var(--text); background: var(--bg); line-height: 1.6; transition: background-color 0.35s var(--ease-out), color 0.35s var(--ease-out); }
img { display: block; max-width: 100%; height: auto; }
button { font: inherit; cursor: pointer; }
a { color: inherit; text-decoration: none; }
:focus-visible { outline: 2px solid var(--text); outline-offset: 2px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.utility-bar { position: relative; display: flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase; background: var(--text); color: var(--text-inverse); transition: margin 0.3s var(--ease-out), opacity 0.3s var(--ease-out); }
.utility-bar.is-hidden { opacity: 0; margin-top: -2rem; pointer-events: none; }
.utility-bar p { margin: 0; }
.utility-close { position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: transparent; border: none; color: inherit; font-size: 1.25rem; line-height: 1; padding: 0.25rem 0.5rem; }
.site-header { position: absolute; top: 1rem; left: 1rem; right: 1rem; z-index: 100; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; height: var(--header-height); padding: 0 1rem; background: #FFFFFF; border-radius: 8px; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08); }
.logo { font-family: var(--font-sans); font-size: 1.25rem; font-weight: 500; letter-spacing: 0.14em; justify-self: center; }
.main-nav { display: none; gap: 2rem; font-size: 0.875rem; }
.main-nav a { position: relative; padding: 0.25rem 0; }
.main-nav a::after { content: ""; position: absolute; left: 0; bottom: 0; width: 0; height: 1px; background: currentColor; transition: width 0.25s var(--ease-out); }
.main-nav a:hover::after, .main-nav a:focus-visible::after { width: 100%; }
.header-actions { display: flex; align-items: center; justify-content: flex-end; gap: 0.25rem; }
.icon-btn, .text-btn { background: transparent; border: none; color: var(--text); padding: 0.5rem; line-height: 1; cursor: pointer; transition: opacity 0.2s; }
.icon-btn { font-size: 1rem; }
.text-btn { font-family: var(--font-sans); font-size: 0.75rem; font-weight: 500; letter-spacing: 0.05em; }
.icon-btn:hover, .text-btn:hover { opacity: 0.6; }
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.875rem 1.75rem; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid var(--text); background: var(--text); color: var(--text-inverse); transition: transform 0.2s var(--ease-out), background-color 0.2s, color 0.2s; }
.btn:hover { transform: translateY(-1px); }
.btn--ghost { background: transparent; color: var(--text); border-color: var(--border); }
.btn--ghost:hover { background: var(--text); color: var(--text-inverse); }
.section-header { padding: 0 1.5rem 2.5rem; text-align: center; }
.section-title { font-family: var(--font-sans); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 400; line-height: 1; margin: 0; }
.eyebrow { margin: 0 0 0.75rem; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); }
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
.manifesto { padding: 5rem 1.5rem; background: var(--accent); text-align: center; }
.manifesto__inner { max-width: 58rem; margin: 0 auto; }
.manifesto__label { font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin: 0 0 1.5rem; }
.manifesto__quote { font-family: var(--font-sans); font-size: clamp(1.75rem, 5vw, 3.25rem); font-weight: 400; line-height: 1.15; margin: 0 0 1.5rem; }
.manifesto__sig { font-size: 0.9rem; color: var(--muted); margin: 0; }
.categories { padding: 5rem 1rem; }
.categories__grid { display: grid; gap: 1rem; max-width: 72rem; margin: 0 auto; }
.category-card { position: relative; display: block; aspect-ratio: 2 / 3; overflow: hidden; }
.category-card img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(25%); transition: transform 0.7s var(--ease-out); }
.category-card:hover img { transform: scale(1.05); }
.category-card__overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; background: linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%); color: #fff; }
.category-card__title { font-family: var(--font-sans); font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 400; margin-bottom: 0.5rem; }
.category-card__cta { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; transform: translateY(0.5rem); opacity: 0; transition: all 0.35s var(--ease-out); }
.category-card:hover .category-card__cta { transform: translateY(0); opacity: 1; }
.feature-products { padding: 5rem 0 5rem 1rem; }
.feature-products__header { display: flex; flex-direction: column; gap: 1.25rem; padding: 0 1.5rem 2.5rem 0.5rem; }
.feature-products__scroll { display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 1rem; padding-right: 1rem; }
.feature-products__scroll::-webkit-scrollbar { height: 2px; }
.feature-products__scroll::-webkit-scrollbar-thumb { background: var(--border); }
.feature-product { flex: 0 0 75%; scroll-snap-align: start; max-width: 280px; }
.feature-product__media { aspect-ratio: 2 / 3; overflow: hidden; margin-bottom: 1rem; background: var(--surface); }
.feature-product__media img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); transition: transform 0.5s var(--ease-out); }
.feature-product:hover .feature-product__media img { transform: scale(1.04); }
.feature-product h3 { font-size: 0.95rem; font-weight: 400; margin: 0 0 0.25rem; }
.feature-product__price { margin: 0; font-size: 0.85rem; color: var(--muted); }
.collection-showcase { display: grid; grid-template-columns: 1fr; background: var(--surface); }
.collection-showcase__product { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem 1.5rem; text-align: center; background: #F0EEEB; }
.collection-showcase__title { font-family: var(--font-sans); font-size: clamp(1.1rem, 2.5vw, 1.5rem); font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; margin: 0 0 0.75rem; line-height: 1.2; }
.collection-showcase__desc { font-size: clamp(0.85rem, 1.2vw, 1rem); color: var(--muted); max-width: 28rem; margin: 0 0 2rem; line-height: 1.5; }
.collection-showcase__stage { width: 100%; max-width: 280px; margin-bottom: 1.5rem; aspect-ratio: 2 / 3; overflow: hidden; }
.collection-showcase__stage img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(10%); }
.collection-showcase__meta { display: flex; align-items: center; justify-content: center; gap: 1.25rem; margin-bottom: 0.75rem; }
.collection-showcase__name { font-size: 0.85rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; }
.collection-showcase__price { font-size: 0.85rem; color: var(--muted); }
.collection-showcase__link { display: inline-block; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.04em; border-bottom: 1px solid var(--text); padding-bottom: 0.15rem; margin-bottom: 1.5rem; transition: opacity 0.2s; }
.collection-showcase__link:hover { opacity: 0.6; }
.collection-showcase__dots { display: flex; gap: 0.5rem; }
.showcase-dot { width: 0.6rem; height: 0.6rem; padding: 0; border: none; border-radius: 50%; background: #d4d4d4; cursor: pointer; transition: background 0.25s, transform 0.25s; }
.showcase-dot.is-active { background: var(--text); transform: scale(1.15); }
.collection-showcase__model { aspect-ratio: 2 / 3; overflow: hidden; }
.collection-showcase__model img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); }
.lookbook { padding: 3.5rem 1rem; background: var(--surface); }
.lookbook__header { text-align: center; padding-bottom: 1.75rem; }
.lookbook__grid { display: grid; gap: 0.75rem; max-width: 64rem; margin: 0 auto; }
.lookbook__item { position: relative; margin: 0; overflow: hidden; aspect-ratio: 2 / 3; }
.lookbook__item img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); }
.lookbook__item figcaption { position: absolute; left: 1rem; bottom: 1rem; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; background: rgba(0,0,0,0.45); padding: 0.35rem 0.75rem; }
.craft { padding: 5rem 1.5rem; }
.craft__inner { display: grid; gap: 2.5rem; max-width: 72rem; margin: 0 auto; }
.craft__text { display: flex; flex-direction: column; justify-content: center; }
.craft__text p { color: var(--muted); max-width: 34rem; }
.craft__list { list-style: none; padding: 0; margin: 1.5rem 0 0; font-size: 0.85rem; letter-spacing: 0.04em; text-transform: uppercase; }
.craft__list li { padding: 0.75rem 0; border-bottom: 1px solid var(--border); }
.craft__media { aspect-ratio: 2 / 3; overflow: hidden; }
.craft__media img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(15%); }
.marquee { overflow: hidden; padding: 1.25rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.marquee-track { display: flex; gap: 2rem; width: max-content; font-family: var(--font-sans); font-size: clamp(1.25rem, 3vw, 2rem); font-style: italic; letter-spacing: 0.02em; white-space: nowrap; animation: marquee 24s linear infinite; }
.marquee-track span { opacity: 0.85; }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.journal { padding: 5rem 1rem; }
.journal__heading { font-family: var(--font-sans); font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 500; letter-spacing: -0.02em; text-transform: uppercase; text-align: center; color: var(--text); margin: 0 0 3rem; line-height: 1.1; }
.journal__slider { position: relative; max-width: 90rem; margin: 0 auto; }
.journal__scroll { display: flex; gap: 1rem; overflow-x: auto; scroll-behavior: smooth; scroll-snap-type: x mandatory; padding: 0 1rem 1.5rem; scrollbar-width: none; -ms-overflow-style: none; }
.journal__scroll::-webkit-scrollbar { display: none; }
.journal-card { position: relative; flex: 0 0 auto; scroll-snap-align: start; overflow: hidden; }
.journal-card--wide { width: clamp(300px, 40vw, 480px); }
.journal-card--narrow { width: clamp(220px, 28vw, 340px); }
.journal-card img { width: 100%; aspect-ratio: 2 / 3; object-fit: cover; filter: grayscale(15%); display: block; }
.journal-card__overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; background: linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%); color: #fff; }
.journal-card__date { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.85; margin: 0 0 0.5rem; }
.journal-card__overlay h3 { font-family: var(--font-sans); font-size: 1.5rem; font-weight: 400; margin: 0; line-height: 1.2; }
.journal__arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 10; display: none; align-items: center; justify-content: center; width: 3rem; height: 3rem; border: none; border-radius: 50%; background: #fff; color: #1A1A1A; box-shadow: 0 2px 12px rgba(0,0,0,0.12); cursor: pointer; transition: transform 0.2s var(--ease-out), box-shadow 0.2s; }
.journal__arrow:hover { transform: translateY(-50%) scale(1.08); box-shadow: 0 4px 16px rgba(0,0,0,0.18); }
.journal__arrow--left { left: 0.5rem; }
.journal__arrow--right { right: 0.5rem; }
.site-footer { padding: 4rem 1.5rem 2rem; border-top: 1px solid var(--border); }
.site-footer__grid { display: grid; gap: 2.5rem; max-width: 72rem; margin: 0 auto 3rem; }
.footer-logo { font-size: 1.5rem; font-weight: 500; letter-spacing: 0.14em; margin: 0 0 0.5rem; }
.footer-tagline { font-size: 0.9rem; color: var(--muted); margin: 0; }
.footer-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem 1.5rem; font-size: 0.85rem; }
.footer-links a { color: var(--muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--text); }
.newsletter label { display: block; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.75rem; }
.newsletter__row { display: flex; flex-direction: column; gap: 0.75rem; }
.newsletter__row input { width: 100%; padding: 0.875rem 1rem; font-size: 0.875rem; background: var(--surface); color: var(--text); border: 1px solid var(--border); }
.newsletter__row input::placeholder { color: var(--muted); }
.copyright { text-align: center; font-size: 0.75rem; color: var(--muted); margin: 0; }
.drawer-backdrop { position: fixed; inset: 0; z-index: 150; background: rgba(0, 0, 0, 0.4); opacity: 0; pointer-events: none; transition: opacity 0.35s var(--ease-out); }
.drawer-backdrop.is-visible { opacity: 1; pointer-events: auto; }
.product-drawer { position: fixed; left: 0; right: 0; bottom: 0; z-index: 200; max-height: 85vh; background: var(--surface); border-top: 1px solid var(--border); box-shadow: 0 -8px 40px var(--shadow); transform: translateY(100%); transition: transform 0.4s var(--ease-out); overflow-y: auto; }
.product-drawer.is-open { transform: translateY(0); }
.drawer-header { position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; background: var(--surface); border-bottom: 1px solid var(--border); z-index: 1; }
.drawer-header h2 { font-family: var(--font-sans); font-size: 1.5rem; font-weight: 400; margin: 0; }
.drawer-close { background: transparent; border: none; color: var(--text); font-size: 1.75rem; line-height: 1; padding: 0.25rem 0.5rem; }
.drawer-grid { display: grid; gap: 1.5rem; padding: 1.5rem; }
.product-card { display: grid; gap: 0.75rem; }
.product-card img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: grayscale(15%); }
.product-card h3 { font-size: 0.9375rem; font-weight: 400; margin: 0; }
.product-price { margin: 0; font-size: 0.875rem; color: var(--muted); }
.size-picker { display: flex; gap: 0.5rem; }
.size-picker button { flex: 1; padding: 0.5rem; font-size: 0.75rem; background: transparent; color: var(--text); border: 1px solid var(--border); transition: background-color 0.2s, border-color 0.2s; }
.size-picker button.selected { background: var(--text); color: var(--text-inverse); border-color: var(--text); }
.add-to-bag { width: 100%; margin-top: 0.25rem; }
.add-to-bag.is-added { background: var(--surface); color: var(--text); }
@media (min-width: 640px) { .main-nav { display: flex; } .hero-slide__content { left: 2.5rem; bottom: 5rem; } .hero-dots { right: 2.5rem; bottom: 3rem; } .categories__grid { grid-template-columns: repeat(3, 1fr); } .feature-product { flex: 0 0 45%; } .collection-showcase { grid-template-columns: 1fr 1fr; } .collection-showcase__product { padding: 4rem 2rem; } .collection-showcase__model { aspect-ratio: 2 / 3; } .lookbook__grid { grid-template-columns: repeat(3, 1fr); } .craft__inner { grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; } .craft__media img { height: 100%; min-height: 32rem; } .journal__arrow { display: flex; } .site-footer__grid { grid-template-columns: 1fr 2fr 1.5fr; align-items: start; } .newsletter__row { flex-direction: row; } .drawer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .site-header { left: 2.5rem; right: 2.5rem; } .manifesto { padding: 8rem 4rem; } .categories, .craft, .journal { padding: 7rem 2.5rem; } .lookbook { padding: 5rem 2.5rem; } .feature-products { padding: 7rem 0 7rem 2.5rem; } .feature-products__header { flex-direction: row; justify-content: space-between; align-items: flex-end; } .feature-product { flex: 0 0 30%; max-width: 320px; } .drawer-grid { grid-template-columns: repeat(4, 1fr); padding: 2rem; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } html { scroll-behavior: auto; } }
```

## `script.js`
```js
(function () {
  'use strict';
  const products = [
    { id: 1, name: 'Linen Trench', price: 340, image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-1.png', sizes: ['XS', 'S', 'M', 'L'], selected: 'S' },
    { id: 2, name: 'Cashmere Knit', price: 260, image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-2.png', sizes: ['XS', 'S', 'M', 'L'], selected: 'S' },
    { id: 3, name: 'Wide-Leg Trousers', price: 195, image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-3.png', sizes: ['XS', 'S', 'M', 'L'], selected: 'M' },
    { id: 4, name: 'Silk Shirt', price: 225, image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-4.png', sizes: ['XS', 'S', 'M', 'L'], selected: 'S' },
    { id: 5, name: 'Merino Scarf', price: 95, image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-5.png', sizes: ['One Size'], selected: 'One Size' },
    { id: 6, name: 'Tailored Blazer', price: 420, image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-6.png', sizes: ['XS', 'S', 'M', 'L'], selected: 'S' }
  ];
  let bagCount = 0;
  const utilityBar = document.getElementById('utility-bar'), utilityClose = document.getElementById('utility-close');
  if (utilityClose && utilityBar) utilityClose.addEventListener('click', () => utilityBar.classList.add('is-hidden'));
  const themeToggle = document.getElementById('theme-toggle'), savedTheme = localStorage.getItem('arlo-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme'), next = current === 'dark' ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next); else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('arlo-theme', next);
  });
  const drawer = document.getElementById('product-drawer'), backdrop = document.getElementById('drawer-backdrop'), drawerClose = document.getElementById('drawer-close'), drawerGrid = document.getElementById('drawer-grid'), bagBtn = document.getElementById('bag-btn'), bagCountEl = document.getElementById('bag-count');
  function openDrawer() { drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); backdrop.classList.add('is-visible'); backdrop.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); backdrop.classList.remove('is-visible'); backdrop.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  function renderDrawer() {
    if (!drawerGrid) return;
    drawerGrid.innerHTML = products.map(p => `
      <article class="product-card" data-id="${p.id}"><img src="${p.image}" alt="${p.name}" /><h3>${p.name}</h3><p class="product-price">$${p.price}</p>
        <div class="size-picker" role="group" aria-label="Select size for ${p.name}">
          ${p.sizes.map(s => `<button type="button" data-size="${s}" aria-pressed="${s === p.selected}">${s}</button>`).join('')}
        </div><button class="btn add-to-bag">Add to Bag</button>
      </article>`).join('');
    drawerGrid.querySelectorAll('.size-picker button').forEach(btn => {
      btn.addEventListener('click', function () {
        const card = this.closest('.product-card'), id = Number(card.dataset.id), size = this.dataset.size, product = products.find(p => p.id === id);
        if (product) product.selected = size;
        card.querySelectorAll('.size-picker button').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
    drawerGrid.querySelectorAll('.add-to-bag').forEach(btn => {
      btn.addEventListener('click', function () {
        bagCount++; if (bagCountEl) bagCountEl.textContent = bagCount;
        this.textContent = 'Added'; this.classList.add('is-added');
        setTimeout(() => { this.textContent = 'Add to Bag'; this.classList.remove('is-added'); }, 1200);
      });
    });
  }
  document.querySelectorAll('#open-drawer, #hero-cta, #story-cta').forEach(btn => { if (btn) btn.addEventListener('click', openDrawer); });
  if (bagBtn) bagBtn.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
  const journalScroll = document.querySelector('.journal__scroll'), journalLeft = document.querySelector('.journal__arrow--left'), journalRight = document.querySelector('.journal__arrow--right');
  if (journalScroll && journalLeft && journalRight) {
    journalLeft.addEventListener('click', () => { journalScroll.scrollBy({ left: -journalScroll.clientWidth * 0.75, behavior: 'smooth' }); });
    journalRight.addEventListener('click', () => { journalScroll.scrollBy({ left: journalScroll.clientWidth * 0.75, behavior: 'smooth' }); });
  }
  renderDrawer();
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
  const showcaseImg = document.getElementById('showcase-img'), showcaseDots = document.querySelectorAll('.showcase-dot');
  const showcaseProducts = [
    { image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-3.png', alt: 'Wide-leg trousers', name: 'Wide-Leg Trousers', price: '$195' },
    { image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-1.png', alt: 'Linen trench coat', name: 'Linen Trench', price: '$340' },
    { image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-2.png', alt: 'Cashmere knit', name: 'Cashmere Knit', price: '$260' },
    { image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-4.png', alt: 'Silk shirt', name: 'Silk Shirt', price: '$225' },
    { image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-5.png', alt: 'Merino scarf', name: 'Merino Scarf', price: '$95' },
    { image: 'https://ecommerce-landing.pages.dev/generated-assets/arlo/arlo-product-6.png', alt: 'Tailored blazer', name: 'Tailored Blazer', price: '$420' }
  ];
  if (showcaseImg && showcaseDots.length) {
    showcaseDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const product = showcaseProducts[i]; if (!product) return;
        showcaseImg.src = product.image; showcaseImg.alt = product.alt;
        const nameEl = document.querySelector('.collection-showcase__name'), priceEl = document.querySelector('.collection-showcase__price');
        if (nameEl) nameEl.textContent = product.name; if (priceEl) priceEl.textContent = product.price;
        showcaseDots.forEach(d => d.classList.remove('is-active')); dot.classList.add('is-active');
      });
    });
  }
  const revealEls = document.querySelectorAll('.category-card, .feature-product, .lookbook__item, .craft__inner, .journal-card, .manifesto__inner');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; observer.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(24px)'; el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'; observer.observe(el); });
})();
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
| Token | Hex/Representation | Usage |
|---|---|---|
| Main Background | `#F7F5F2` | Page container background, alternating sections background, footer background |
| White | `#FFFFFF` | Core surface container, headers background, drawer card background |
| Text Color | `#1A1A1A` | General charcoal body copy |
| Text Accent | `#E8DDD3` | Background highlights, select indicators |
| Border | `rgba(26, 26, 26, 0.10)` | Card outlines, gutters |

---

# IMAGES / ASSETS

- Base URL: `https://ecommerce-landing.pages.dev/generated-assets/arlo/`
- Total Count: 18 images

| Name/Path | URL | Description | Where Used |
|---|---|---|---|
| `hero-new-1.png` | `hero-new-1.png` | Model walking down editorial alleyway | Hero Slide 1 |
| `hero-new-2.png` | `hero-new-2.png` | Close-up details of clean cotton shirting | Hero Slide 2 |
| `hero-new-3.png` | `hero-new-3.png` | Clean tailored gray wool blazer detail | Hero Slide 3 |
| `arlo-cat-shirting.png` | `arlo-cat-shirting.png` | Male model in cream overshirt | Categories Card 1 |
| `arlo-cat-tailoring.png` | `arlo-cat-tailoring.png` | Male model in black tailored suit jacket | Categories Card 2 |
| `arlo-cat-accessories.png` | `arlo-cat-accessories.png` | Minimal collection still-life | Categories Card 3 |
| `arlo-product-1.png` | `arlo-product-1.png` | Beige linen trench coat profile | Essentials Product 1 / Drawer card 1 |
| `arlo-product-2.png` | `arlo-product-2.png` | Grey cashmere knit | Essentials Product 2 / Drawer card 2 |
| `arlo-product-3.png` | `arlo-product-3.png` | Wide-leg pleated trousers | Essentials Product 3 / Showcase |
| `arlo-product-4.png` | `arlo-product-4.png` | Beige silk shirt | Essentials Product 4 / Drawer card 4 |
| `arlo-product-5.png` | `arlo-product-5.png` | Charcoal grey merino wool scarf | Essentials Product 5 / Drawer card 5 |
| `arlo-product-6.png` | `arlo-product-6.png` | Double-breasted charcoal blazer | Essentials Product 6 / Drawer card 6 |
| `arlo-hero.png` | `arlo-hero.png` | Model sitting looking aside in ARLO outfit | Showcase Model Right Column |
| `arlo-look-1.png` | `arlo-look-1.png` | Look 01 coat display | Lookbook Item 1 |
| `arlo-look-2.png` | `arlo-look-2.png` | Look 02 blazer pants | Lookbook Item 2 |
| `arlo-look-3.png` | `arlo-look-3.png` | Look 03 overshirt look | Lookbook Item 3 |
| `arlo-look-4.png` | `arlo-look-4.png` | Look 04 heavy knit | Lookbook Item 4 |
| `arlo-look-5.png` | `arlo-look-5.png` | Look 05 formal suit | Lookbook Item 5 |
| `arlo-look-6.png` | `arlo-look-6.png` | Look 06 scarf model | Lookbook Item 6 |
| `arlo-craft.png` | `arlo-craft.png` | Woven canvas texture | Craft Column Right Card |
| `arlo-journal-1.png` | `arlo-journal-1.png` | Look sketch art | Journal Card 1 |
| `arlo-journal-2.png` | `arlo-journal-2.png` | Raw linen sheet texture | Journal Card 2 |
| `arlo-journal-3.png` | `arlo-journal-3.png` | White shirt flat-lay | Journal Card 3 |

---

# TECH STACK

- **Type**: hand-written static
- **Dev Tool**: Vite (Vanilla configuration)
- **Styling**: Vanilla CSS (variables, custom ease)
- **Javascript**: Vanilla ES6 DOM selector bindings & IntersectionObserver callbacks
- **Fonts**: Inter & Playfair Display loaded via Google Fonts
