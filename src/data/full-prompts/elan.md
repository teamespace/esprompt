Create a static HTML + CSS + Vanilla JavaScript website for "ÉLAN — Retro Football Jerseys", a premium sports heritage storefront. The page has these sections in order: Header (fixed transparent header that becomes translucent white on scroll, with logo "Élan" in Permanent Marker font and actions for Account, Favourites, and Cart), Hero Section (with autoplay looping muted background video `elan-hero.mp4`, and title "Élan x Legends Collection"), Marquee Info Bar (infinite scrolling horizontal announcement loop), Model Marquee (horizontal gallery displaying 8 model cards showing jerseys; hovering over any model transitions the image to show the back of the jersey), Collections Section (horizontal drag-to-scroll carousel of 6 categories: Jerseys, Training, Accessories, Lifestyle, National Teams, and Club Teams), New Arrivals Section (horizontal drag-to-scroll product row of 6 retro jersey items), Editorial Section (split screen featuring an editorial action photo on the left and typography column on the right), Trending Now Section (2x2 grid of 4 product tiles with hover scale zoom and a clickable wishlist toggle), and a site Footer (Newsletter form + Link list + huge central logo text "ÉLAN"). All elements animate on entrance via custom IntersectionObserver scroll reveals.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **FILE ARCHITECTURE — NO FRAMEWORKS:** Build the project as a vanilla static website: `index.html` (markup), `styles.css` (verbatim styles), and `script.js` (verbatim state logic), dev-scaffolded with Vite. Do not use React or Tailwind.
2. **VERBATIM COPYING:** Copy the stylesheet `styles.css` and logic `script.js` provided below exactly as written.
3. **FONTS:** Load Inter (weights 300, 400, 500, 600, 700) and Permanent Marker (weight 400) via Google Fonts `<link>` in `index.html`.
4. **ASSET ROBUSTNESS:** All media assets must reference the absolute remote server paths hosted at `https://ecommerce-landing.pages.dev/05-elan-moody/`. Do not host files locally.
5. **INTERACTIVE FEATURES & TRANSITIONS:**
   - **Header State Scroll**: Adds `.is-scrolled` to `.site-header` when scrolled (`window.scrollY > 50`), transitioning style from transparent to white background.
   - **Mobile Menu**: Setting `mobileMenu.hidden = false/true` on click, lock body scroll.
   - **Model Hover Card**: Model cards toggle `.model-front` and `.model-back` opacity on hover to display jersey details.
   - **Drag-to-Scroll Carousels**: Custom mouse gesture bindings allow drag scroll on collection and new arrival tracks.
   - **Wishlist Toggle**: Clicking the heart button toggles `.is-active` and swaps character from `♡` to `♥`.
   - **Intersection Observer Reveal**: Fade-in and slide-up entrance animation using `.reveal` and `.is-visible` classes.

---

# FONTS

Import Inter and Permanent Marker via Google Fonts `<link>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Permanent+Marker&display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

## `package.json`
```json
{
  "name": "elan-retro-jerseys",
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
  <title>ÉLAN — Retro Football Jerseys</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Permanent+Marker&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header class="site-header" id="top">
    <div class="header-inner">
      <nav class="main-nav" aria-label="Primary"><a href="#shop">Shop</a><a href="#exclusives">Exclusives</a><a href="#community">Community</a></nav>
      <a class="logo" href="#top" aria-label="ÉLAN home">Élan</a>
      <div class="header-actions"><button class="icon-btn" aria-label="Account">Account</button><button class="icon-btn" aria-label="Favourites">Favourites<sup>0</sup></button><button class="icon-btn cart-btn" aria-label="Cart">Cart<sup>0</sup></button></div>
      <button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg></button>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu__header"><a class="logo" href="#top">Élan</a><button class="menu-close" id="menu-close" aria-label="Close menu"><svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></button></div>
      <nav class="mobile-nav" aria-label="Mobile primary"><a href="#shop">Shop</a><a href="#exclusives">Exclusives</a><a href="#community">Community</a></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero" aria-label="Featured drop">
      <div class="hero-media"><video src="https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Elan/Hero/elan.mp4" autoplay muted loop playsinline></video></div>
      <div class="hero-overlay"></div>
      <div class="hero-content"><p class="hero-eyebrow">Online Exclusive</p><h1 class="hero-title">Élan x Legends<br>Collection</h1><a href="#shop" class="hero-cta">Shop</a></div>
    </section>
    <div class="marquee-bar" aria-hidden="true">
      <div class="marquee-track">
        <span>Free shipping on orders above €250</span><span>Free shipping on orders above €250</span><span>Free shipping on orders above €250</span><span>Free shipping on orders above €250</span>
        <span>Free shipping on orders above €250</span><span>Free shipping on orders above €250</span><span>Free shipping on orders above €250</span><span>Free shipping on orders above €250</span>
      </div>
    </div>
    <section class="model-marquee" aria-label="Styled by ÉLAN">
      <div class="model-marquee__header reveal"><h2>Explore our world of retro jerseys and find the perfect fit for your style.</h2></div>
      <div class="model-marquee__track" aria-hidden="true">
        <div class="model-marquee__inner">
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-01.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-01-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-02.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-02-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-03.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-03-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-04.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-04-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-05.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-05-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-06.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-06-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-07.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-07-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-08.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-08-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-01.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-01-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-02.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-02-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-03.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-03-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-04.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-04-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-05.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-05-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-06.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-06-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-07.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-07-back.webp" alt="" loading="lazy"></div>
          <div class="model-marquee__model"><img class="model-front" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-08.webp" alt="" loading="lazy"><img class="model-back" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Product-running/elan-model-08-back.webp" alt="" loading="lazy"></div>
        </div>
      </div>
    </section>
    <section class="collection-section" id="collections" aria-labelledby="collections-title">
      <div class="section-header reveal"><h2 id="collections-title">Collections</h2></div>
      <div class="collection-scroll" id="collection-scroll">
        <a href="#" class="collection-card"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Collection/elan-cat-jerseys.webp" alt="Jerseys" loading="lazy"><div class="collection-card__overlay"><span class="collection-card__cta">Shop now</span><span class="collection-card__title">Jerseys</span></div></a>
        <a href="#" class="collection-card"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Collection/elan-cat-training.webp" alt="Training" loading="lazy"><div class="collection-card__overlay"><span class="collection-card__cta">Shop now</span><span class="collection-card__title">Training</span></div></a>
        <a href="#" class="collection-card"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Collection/elan-cat-accessories.webp" alt="Accessories" loading="lazy"><div class="collection-card__overlay"><span class="collection-card__cta">Shop now</span><span class="collection-card__title">Accessories</span></div></a>
        <a href="#" class="collection-card"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Collection/elan-cat-lifestyle.webp" alt="Lifestyle" loading="lazy"><div class="collection-card__overlay"><span class="collection-card__cta">Shop now</span><span class="collection-card__title">Lifestyle</span></div></a>
        <a href="#" class="collection-card"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Collection/elan-cat-national.webp" alt="National Teams" loading="lazy"><div class="collection-card__overlay"><span class="collection-card__cta">Shop now</span><span class="collection-card__title">National Teams</span></div></a>
        <a href="#" class="collection-card"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Collection/elan-cat-club.webp" alt="Club Teams" loading="lazy"><div class="collection-card__overlay"><span class="collection-card__cta">Shop now</span><span class="collection-card__title">Club Teams</span></div></a>
      </div>
    </section>
    <section class="new-arrivals" id="shop" aria-labelledby="new-title">
      <div class="new-arrivals__header reveal"><h2 id="new-title">New Arrivals</h2><a href="#" class="new-arrivals__cta">Shop now</a></div>
      <div class="new-arrivals__scroll" id="new-arrivals-scroll">
        <article class="new-arrivals__card reveal"><div class="new-arrivals__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/New/elan-new-01.webp" alt="Vinta Home Jersey" loading="lazy"></div><div class="new-arrivals__info"><h3>Vinta Home</h3><p class="price">€89,00</p></div></article>
        <article class="new-arrivals__card reveal"><div class="new-arrivals__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/New/elan-new-02.webp" alt="Marino Home Jersey" loading="lazy"></div><div class="new-arrivals__info"><h3>Marino Home</h3><p class="price">€95,00</p></div></article>
        <article class="new-arrivals__card reveal"><div class="new-arrivals__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/New/elan-new-03.webp" alt="Fjord Home Jersey" loading="lazy"></div><div class="new-arrivals__info"><h3>Fjord Home</h3><p class="price">€102,00</p></div></article>
        <article class="new-arrivals__card reveal"><div class="new-arrivals__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/New/elan-new-04.webp" alt="Sovrano Home Jersey" loading="lazy"></div><div class="new-arrivals__info"><h3>Sovrano Home</h3><p class="price">€89,00</p></div></article>
        <article class="new-arrivals__card reveal"><div class="new-arrivals__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/New/elan-new-05.webp" alt="Nordic Home Jersey" loading="lazy"></div><div class="new-arrivals__info"><h3>Nordic Home</h3><p class="price">€99,00</p></div></article>
        <article class="new-arrivals__card reveal"><div class="new-arrivals__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/New/elan-new-06.webp" alt="Aurelia Home Jersey" loading="lazy"></div><div class="new-arrivals__info"><h3>Aurelia Home</h3><p class="price">€95,00</p></div></article>
      </div>
    </section>
    <section class="editorial-section" id="exclusives" aria-labelledby="exclusives-title">
      <div class="editorial-image reveal"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/CTA/elan-editorial-lifestyle.webp" alt="Élan exclusive editorial" loading="lazy"></div>
      <div class="editorial-text reveal"><h2 id="exclusives-title">The beautiful game,<br>reborn.</h2><p>Authentic retro kits from the golden era. Hand-picked, premium quality, made to stand out on and off the pitch.</p><a href="#" class="text-link">Explore the collection</a></div>
    </section>
    <section class="product-section" aria-labelledby="trending-title">
      <div class="section-header reveal"><h2 id="trending-title">Trending Now</h2></div>
      <div class="product-grid">
        <article class="product-tile reveal"><div class="product-tile__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Trending/elan-product-05.webp" alt="Nordic Home Jersey" loading="lazy"><button class="wishlist-btn" aria-label="Add to favourites">♡</button></div><div class="product-tile__info"><h3>Nordic Home</h3><p class="price">€98,00</p></div></article>
        <article class="product-tile reveal"><div class="product-tile__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Trending/elan-product-07.webp" alt="Sovrano Home Jersey" loading="lazy"><button class="wishlist-btn" aria-label="Add to favourites">♡</button></div><div class="product-tile__info"><h3>Sovrano Home</h3><p class="price">€110,00</p></div></article>
        <article class="product-tile reveal"><div class="product-tile__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Trending/elan-product-04.webp" alt="Aurelia Home Jersey" loading="lazy"><button class="wishlist-btn" aria-label="Add to favourites">♡</button></div><div class="product-tile__info"><h3>Aurelia Home</h3><p class="price">€102,00</p></div></article>
        <article class="product-tile reveal"><div class="product-tile__image"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Elan/Trending/elan-product-08.webp" alt="Cirrus Home Jersey" loading="lazy"><button class="wishlist-btn" aria-label="Add to favourites">♡</button></div><div class="product-tile__info"><h3>Cirrus Home</h3><p class="price">€95,00</p></div></article>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-logo-big">ÉLAN</div>
    <div class="footer-inner">
      <div class="footer-col"><h3>Services</h3><a href="#">Contact</a><a href="#">FAQ</a><a href="#">Shipping &amp; Returns</a></div>
      <div class="footer-col"><h3>About</h3><a href="#">Our Story</a><a href="#">Sustainability</a><a href="#">Gift Card</a></div>
      <div class="footer-col"><h3>Legal</h3><a href="#">Terms &amp; Conditions</a><a href="#">Privacy Policy</a><a href="#">Refund Policy</a></div>
      <div class="footer-col footer-col--wide">
        <h3>Newsletter</h3>
        <form class="footer-newsletter" onsubmit="event.preventDefault();"><label for="footer-email" class="visually-hidden">Email address</label><input id="footer-email" type="email" placeholder="Your email address" required autocomplete="email"><button type="submit">Send <span aria-hidden="true">↗</span></button></form>
        <div class="footer-socials">
          <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"></circle></svg></a>
          <a href="#" target="_blank" rel="noopener" aria-label="TikTok"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg></a>
          <a href="#" target="_blank" rel="noopener" aria-label="X / Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom"><p>© 2026 ÉLAN. Made with intention.</p><p>ÉLAN, Amsterdam, The Netherlands</p></div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

## `styles.css`
```css
:root { --bg: #FFFFFF; --text: #111111; --text-muted: #666666; --border: #E5E5E5; --surface: #F5F5F5; --accent: #111111; --max-width: 1400px; --ease: cubic-bezier(0.22, 0.61, 0.36, 1); }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 3.5rem; }
body { font-family: 'Inter', system-ui, sans-serif; font-weight: 400; line-height: 1.5; color: var(--text); background: var(--bg); }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.skip-link { position: absolute; top: -100%; left: 1rem; z-index: 200; padding: 0.5rem 1rem; background: var(--accent); color: #fff; font-size: 0.8rem; }
.skip-link:focus { top: 1rem; }
.site-header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: transparent; color: #fff; transition: background 0.3s ease, color 0.3s ease; }
.site-header.is-scrolled { background: rgba(255,255,255,0.96); backdrop-filter: blur(8px); color: var(--text); border-bottom: 1px solid var(--border); }
.header-inner { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; max-width: var(--max-width); margin: 0 auto; padding: 1rem 1.25rem; }
.logo { font-family: 'Permanent Marker', cursive; font-size: 1.75rem; font-weight: 400; grid-column: 2; justify-self: center; white-space: nowrap; }
.main-nav { display: none; gap: 1.5rem; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }
.main-nav a { opacity: 0.85; transition: opacity 0.2s ease; }
.main-nav a:hover { opacity: 1; }
.header-actions { grid-column: 3; justify-self: end; display: flex; align-items: center; gap: 1rem; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }
.icon-btn { display: inline-flex; align-items: center; gap: 0.15rem; opacity: 0.85; transition: opacity 0.2s ease; background: none; border: none; }
.icon-btn:hover { opacity: 1; }
.icon-btn sup { font-size: 0.6rem; font-weight: 600; vertical-align: super; }
.menu-toggle { grid-column: 1; justify-self: start; display: block; padding: 0.25rem; opacity: 0.85; }
.menu-toggle:hover { opacity: 1; }
.mobile-menu { position: fixed; inset: 0; z-index: 150; background: var(--bg); color: var(--text); padding: 1.25rem; display: flex; flex-direction: column; gap: 2rem; }
.mobile-menu[hidden] { display: none; }
.mobile-menu__header { display: flex; align-items: center; justify-content: space-between; }
.menu-close { padding: 0.25rem; }
.mobile-nav { display: flex; flex-direction: column; gap: 1rem; font-size: 1.5rem; font-weight: 500; }
.mobile-nav a { padding-bottom: 0.75rem; border-bottom: 1px solid var(--border); }
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
.hero-product-card { position: absolute; right: 1.5rem; bottom: 5rem; z-index: 2; display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); padding: 0.75rem; max-width: 240px; }
.product-card__prev, .product-card__next { width: 1.5rem; height: 1.5rem; display: grid; place-items: center; font-size: 0.7rem; color: var(--text-muted); transition: color 0.2s ease; }
.product-card__prev:hover, .product-card__next:hover { color: var(--text); }
.product-card__slides { position: relative; width: 120px; height: 140px; overflow: hidden; }
.product-card__slide { position: absolute; inset: 0; display: flex; flex-direction: column; gap: 0.5rem; opacity: 0; pointer-events: none; transition: opacity 0.4s ease; }
.product-card__slide.is-active { opacity: 1; pointer-events: auto; }
.product-card__slide img { width: 100%; height: 100px; object-fit: cover; background: var(--surface); }
.product-card__label { font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
.product-card__name { font-size: 0.8rem; font-weight: 500; }
.marquee-bar { background: var(--text); color: #fff; padding: 0.6rem 0; overflow: hidden; white-space: nowrap; }
.marquee-track { display: inline-flex; gap: 3rem; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; animation: marquee 20s linear infinite; }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.product-section { padding: 4rem 1.25rem; max-width: var(--max-width); margin: 0 auto; }
.section-header { margin-bottom: 2rem; }
.section-header h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 600; letter-spacing: -0.03em; }
.product-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
.product-tile { cursor: pointer; }
.product-tile__image { position: relative; aspect-ratio: 3 / 4; overflow: hidden; background: var(--surface); }
.product-tile__image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s var(--ease); }
.product-tile:hover .product-tile__image img { transform: scale(1.04); }
.wishlist-btn { position: absolute; top: 0.75rem; right: 0.75rem; width: 2rem; height: 2rem; border-radius: 50%; background: rgba(255,255,255,0.9); color: var(--text); display: grid; place-items: center; font-size: 1rem; transition: background 0.2s ease; }
.wishlist-btn:hover { background: #fff; }
.wishlist-btn.is-active { color: #E10A0A; }
.product-tile__info { padding-top: 0.75rem; }
.product-tile__info h3 { font-size: 0.85rem; font-weight: 500; margin-bottom: 0.2rem; }
.price { font-size: 0.8rem; color: var(--text-muted); }
.editorial-section { padding: 4rem 1.25rem; max-width: var(--max-width); margin: 0 auto; }
.editorial-image { overflow: hidden; margin-bottom: 2rem; }
.editorial-image img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: var(--surface); }
.editorial-text { max-width: 48ch; }
.editorial-text h2 { font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 600; line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 1rem; }
.editorial-text p { color: var(--text-muted); margin-bottom: 1.25rem; }
.text-link { display: inline-block; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid var(--text); padding-bottom: 0.15rem; transition: color 0.2s ease, border-color 0.2s ease; }
.text-link:hover { color: var(--text-muted); border-color: var(--text-muted); }
.site-footer { background: #000; color: #fff; padding: 3rem 1.25rem 1.5rem; }
.footer-logo-big { font-family: 'Permanent Marker', cursive; font-size: clamp(3.5rem, 12vw, 9rem); font-weight: 400; line-height: 0.9; margin-bottom: 3rem; max-width: var(--max-width); margin-left: auto; margin-right: auto; }
.footer-inner { display: grid; grid-template-columns: 1fr; gap: 2.5rem; max-width: var(--max-width); margin: 0 auto 3rem; }
.footer-col { display: flex; flex-direction: column; gap: 0.6rem; }
.footer-col h3 { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; opacity: 0.7; }
.footer-col a { font-size: 0.95rem; color: #fff; opacity: 0.85; transition: opacity 0.2s ease; }
.footer-col a:hover { opacity: 1; }
.footer-col--wide { grid-column: 1 / -1; }
.footer-newsletter { display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 0.5rem; margin-bottom: 1rem; }
.footer-newsletter input { flex: 1; background: transparent; border: none; color: #fff; font: inherit; font-size: 0.95rem; outline: none; }
.footer-newsletter input::placeholder { color: rgba(255,255,255,0.5); }
.footer-newsletter button { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: #fff; display: inline-flex; align-items: center; gap: 0.35rem; opacity: 0.9; transition: opacity 0.2s ease; }
.footer-newsletter button:hover { opacity: 1; }
.footer-socials { display: flex; gap: 1rem; }
.footer-socials a { width: 2.25rem; height: 2.25rem; display: grid; place-items: center; border: 1px solid rgba(255,255,255,0.4); border-radius: 50%; color: #fff; opacity: 0.85; transition: opacity 0.2s ease, border-color 0.2s ease; }
.footer-socials a:hover { opacity: 1; border-color: #fff; }
.footer-bottom { display: flex; flex-direction: column; gap: 0.5rem; max-width: var(--max-width); margin: 0 auto; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.15); font-size: 0.8rem; color: rgba(255,255,255,0.55); }
.model-marquee { background: transparent; padding: 4rem 0 3rem; overflow: hidden; }
.model-marquee__header { max-width: var(--max-width); margin: 0 auto; padding: 0 1.25rem 2.5rem; }
.model-marquee__header h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 600; line-height: 1.1; letter-spacing: -0.03em; max-width: 32ch; }
.model-marquee__track { display: flex; overflow: hidden; }
.model-marquee__inner { display: flex; gap: 0.25rem; animation: modelScroll 30s linear infinite; will-change: transform; }
.model-marquee__model { position: relative; flex-shrink: 0; width: 220px; height: 320px; background: transparent; }
.model-marquee__model img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity 0.4s ease; }
.model-marquee__model .model-back { opacity: 0; }
.model-marquee__model:hover .model-front { opacity: 0; }
.model-marquee__model:hover .model-back { opacity: 1; }
@keyframes modelScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.new-arrivals { display: flex; flex-direction: column; gap: 2rem; padding: 4rem 0; }
.new-arrivals__header { flex-shrink: 0; padding: 0 1.25rem; }
.new-arrivals__header h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 600; letter-spacing: -0.03em; text-transform: uppercase; margin-bottom: 0.5rem; }
.new-arrivals__cta { display: inline-block; font-size: 0.85rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--text); padding-bottom: 0.15rem; transition: color 0.2s ease, border-color 0.2s ease; }
.new-arrivals__cta:hover { color: var(--text-muted); border-color: var(--text-muted); }
.new-arrivals__scroll { display: flex; gap: 0.75rem; overflow-x: auto; scroll-snap-type: x mandatory; padding: 0 1.25rem 1rem; cursor: grab; }
.new-arrivals__scroll::-webkit-scrollbar { height: 3px; }
.new-arrivals__scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
.new-arrivals__scroll.is-dragging { cursor: grabbing; }
.new-arrivals__card { flex: 0 0 65%; scroll-snap-align: start; max-width: 260px; cursor: pointer; }
.new-arrivals__image { aspect-ratio: 3 / 4; overflow: hidden; background: #f2f2f2; margin-bottom: 0.75rem; }
.new-arrivals__image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s var(--ease); }
.new-arrivals__card:hover .new-arrivals__image img { transform: scale(1.03); }
.new-arrivals__info h3 { font-size: 0.9rem; font-weight: 500; margin-bottom: 0.2rem; }
.new-arrivals__info .price { font-size: 0.85rem; color: var(--text-muted); }
.collection-section { padding: 4rem 0; }
.collection-section .section-header { max-width: var(--max-width); margin: 0 auto 2rem; padding: 0 1.25rem; }
.collection-scroll { display: flex; gap: 0.5rem; overflow-x: auto; scroll-snap-type: x mandatory; padding: 0 1.25rem 1rem; cursor: grab; }
.collection-scroll::-webkit-scrollbar { height: 3px; }
.collection-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
.collection-scroll.is-dragging { cursor: grabbing; }
.collection-card { position: relative; flex: 0 0 75%; scroll-snap-align: start; max-width: 320px; aspect-ratio: 3 / 4; overflow: hidden; }
.collection-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s var(--ease); }
.collection-card:hover img { transform: scale(1.04); }
.collection-card__overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem; color: #fff; background: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.35)); }
.collection-card__cta { font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.12em; align-self: flex-start; border-bottom: 1px solid #fff; padding-bottom: 0.2rem; }
.collection-card__title { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; }
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s var(--ease), transform 0.6s var(--ease); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
@media (min-width: 640px) { .product-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; } .hero-content { left: 2.5rem; bottom: 6rem; } .hero-product-card { right: 2.5rem; bottom: 6rem; } .model-marquee__model { width: 260px; height: 380px; } .model-marquee__header { padding-left: 2.5rem; padding-right: 2.5rem; } .collection-card { flex: 0 0 45%; max-width: 340px; } .collection-card__title { font-size: 1.5rem; } .new-arrivals__card { flex: 0 0 40%; max-width: 280px; } }
@media (min-width: 900px) { .menu-toggle { display: none; } .main-nav { display: flex; grid-column: 1; justify-self: start; } .logo { grid-column: 2; justify-self: center; } .header-actions { grid-column: 3; justify-self: end; } .header-inner { padding: 1rem 2.5rem; gap: 2rem; } .hero-content, .hero-product-card { left: 3rem; bottom: 7rem; } .hero-product-card { right: 3rem; } .product-section { padding: 6rem 2.5rem; } .product-grid { grid-template-columns: repeat(4, 1fr); gap: 1.25rem; } .editorial-section { padding: 6rem 2.5rem; display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center; } .editorial-image { margin-bottom: 0; } .editorial-image img { aspect-ratio: 4 / 3; } .footer-inner { grid-template-columns: repeat(4, 1fr); gap: 2rem; } .site-footer { padding: 4rem 2.5rem 2rem; } .footer-col--wide { grid-column: auto; } .footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; } .model-marquee { padding: 6rem 0 4rem; } .model-marquee__header h2 { font-size: clamp(2rem, 3.5vw, 3rem); max-width: 28ch; } .model-marquee__model { width: 300px; height: 440px; } .collection-section { padding: 6rem 0; } .collection-section .section-header { margin-bottom: 2.5rem; padding: 0 2.5rem; } .collection-scroll { padding: 0 2.5rem 1rem; gap: 0.75rem; } .collection-card { flex: 0 0 30%; max-width: 380px; } .new-arrivals { flex-direction: row; align-items: center; gap: 3rem; padding: 6rem 2.5rem; } .new-arrivals__header { padding: 0; min-width: 180px; } .new-arrivals__header h2 { font-size: clamp(1.5rem, 2.5vw, 2rem); } .new-arrivals__scroll { padding: 0 0 1rem; gap: 1rem; } .new-arrivals__card { flex: 0 0 22%; max-width: 300px; } }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .marquee-track, .model-marquee__inner { animation: none; } .reveal { opacity: 1; transform: none; transition: none; } .product-tile__image img { transition: none; } }
```

## `script.js`
```js
(function () {
  'use strict';
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }, { passive: true });
  const menuToggle = document.getElementById('menu-toggle'), menuClose = document.getElementById('menu-close'), mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => { mobileMenu.hidden = false; menuToggle.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; });
  }
  if (menuClose && mobileMenu) {
    const closeMenu = () => { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
    menuClose.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }
  const slides = document.querySelectorAll('.product-card__slide'), prevBtn = document.querySelector('.product-card__prev'), nextBtn = document.querySelector('.product-card__next');
  let current = 0;
  function showSlide(i) {
    if (!slides.length) return;
    slides[current].classList.remove('is-active'); current = (i + slides.length) % slides.length; slides[current].classList.add('is-active');
  }
  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(current + 1));
  if (slides.length > 1) setInterval(() => showSlide(current + 1), 4000);
  const setupDragScroll = (el) => {
    if (!el) return;
    let isDown = false, startX, scrollLeft;
    el.addEventListener('mousedown', (e) => { isDown = true; el.classList.add('is-dragging'); startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; });
    el.addEventListener('mouseleave', () => { isDown = false; el.classList.remove('is-dragging'); });
    el.addEventListener('mouseup', () => { isDown = false; el.classList.remove('is-dragging'); });
    el.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX) * 1.5; });
  };
  setupDragScroll(document.getElementById('collection-scroll'));
  setupDragScroll(document.getElementById('new-arrivals-scroll'));
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); const active = btn.classList.toggle('is-active'); btn.textContent = active ? '♥' : '♡'; });
  });
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
  revealEls.forEach(el => observer.observe(el));
})();
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
- Main Background: `#FFFFFF`
- Accent & Titles: `#111111`
- Text Muted: `#666666`
- Borders: `#E5E5E5`
- Light Surfaces: `#F5F5F5`

---

# IMAGES / ASSETS

- Base URL: `https://ecommerce-landing.pages.dev/05-elan-moody/`

| Filename | URL | Description | Where Used |
|---|---|---|---|
| `elan-hero.mp4` | `assets/elan-hero.mp4` | Looping retro football action video | Hero Section Background |
| `elan-model-01.png` | `assets/elan-model-01.png` | Green retro jersey model front | Model Marquee Card 1 Front |
| `elan-model-01-back.png` | `assets/elan-model-01-back.png` | Green retro jersey model back | Model Marquee Card 1 Back |
| `elan-model-02.png` | `assets/elan-model-02.png` | White jersey red stripe model front | Model Marquee Card 2 Front |
| `elan-model-02-back.png` | `assets/elan-model-02-back.png` | White jersey red stripe model back | Model Marquee Card 2 Back |
| `elan-model-03.png` | `assets/elan-model-03.png` | Dark navy jersey model front | Model Marquee Card 3 Front |
| `elan-model-03-back.png` | `assets/elan-model-03-back.png` | Dark navy jersey model back | Model Marquee Card 3 Back |
| `elan-model-04.png` | `assets/elan-model-04.png` | Yellow jersey model front | Model Marquee Card 4 Front |
| `elan-model-04-back.png` | `assets/elan-model-04-back.png` | Yellow jersey model back | Model Marquee Card 4 Back |
| `elan-model-05.png` | `assets/elan-model-05.png` | Red white striped model front | Model Marquee Card 5 Front |
| `elan-model-05-back.png` | `assets/elan-model-05-back.png` | Red white striped model back | Model Marquee Card 5 Back |
| `elan-model-06.png` | `assets/elan-model-06.png` | White jersey collar model front | Model Marquee Card 6 Front |
| `elan-model-06-back.png` | `assets/elan-model-06-back.png` | White jersey collar model back | Model Marquee Card 6 Back |
| `elan-model-07.png` | `assets/elan-model-07.png` | Light blue jersey model front | Model Marquee Card 7 Front |
| `elan-model-07-back.png` | `assets/elan-model-07-back.png` | Light blue jersey model back | Model Marquee Card 7 Back |
| `elan-model-08.png` | `assets/elan-model-08.png` | Orange purple jersey model front | Model Marquee Card 8 Front |
| `elan-model-08-back.png` | `assets/elan-model-08-back.png` | Orange purple jersey model back | Model Marquee Card 8 Back |
| `elan-cat-jerseys.jpg` | `assets/elan-cat-jerseys.jpg` | Retro jersey fold stack | Collections Jerseys Card |
| `elan-cat-training.jpg` | `assets/elan-cat-training.jpg` | Track jacket training gear | Collections Training Card |
| `assets/elan-cat-accessories.jpg` | `assets/elan-cat-accessories.jpg` | Sports socks and cap close-up | Collections Accessories Card |
| `elan-cat-lifestyle.jpg` | `assets/elan-cat-lifestyle.jpg` | Lifestyle model styling | Collections Lifestyle Card |
| `elan-cat-national.jpg` | `assets/elan-cat-national.jpg` | Vintage national flag jersey fold | Collections National Teams Card |
| `elan-cat-club.jpg` | `assets/elan-cat-club.jpg` | Retro stripes club jerseys | Collections Club Teams Card |
| `elan-new-01.jpg` | `assets/elan-new-01.jpg` | Green Vinta jersey details | New Arrivals Card 1 |
| `elan-new-02.jpg` | `assets/elan-new-02.jpg` | White Marino jersey details | New Arrivals Card 2 |
| `elan-new-03.jpg` | `assets/elan-new-03.jpg` | Yellow Fjord jersey details | New Arrivals Card 3 |
| `elan-new-04.jpg` | `assets/elan-new-04.jpg` | Dark Sovrano jersey details | New Arrivals Card 4 |
| `elan-new-05.jpg` | `assets/elan-new-05.jpg` | Striped Nordic jersey details | New Arrivals Card 5 |
| `elan-new-06.jpg` | `assets/elan-new-06.jpg` | Blue Aurelia jersey details | New Arrivals Card 6 |
| `elan-editorial-lifestyle.jpg`| `assets/elan-editorial-lifestyle.jpg`| Pitch side retro editorial | Editorial Left Image |
| `elan-product-05.jpg` | `assets/elan-product-05.jpg` | Nordic Home Jersey texture | Trending Card 1 |
| `elan-product-07.jpg` | `assets/elan-product-07.jpg` | Sovrano Home Jersey detail | Trending Card 2 |
| `elan-product-04.jpg` | `assets/elan-product-04.jpg` | Aurelia Home Jersey detail | Trending Card 3 |
| `elan-product-08.jpg` | `assets/elan-product-08.jpg` | Cirrus Home Jersey detail | Trending Card 4 |

---

# TECH STACK

- **Type**: hand-written static
- **Dev Tool**: Vite (Vanilla configuration)
- **Styling**: Vanilla CSS (variables, custom ease cubic-bezier)
- **Javascript**: Vanilla ES6 DOM selector bindings & IntersectionObserver callbacks
- **Fonts**: Inter & Permanent Marker loaded via Google Fonts
