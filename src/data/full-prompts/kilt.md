Create a static HTML + CSS + Vanilla JavaScript website for "KILT — Technical Apparel", a brutalist technical fashion storefront. The page has these sections in order: Top Announcement Bar ("SYSTEM DROP LIVE — GLOBAL SHIPPING"), Header (sticky navigation bar with links, logo "KILT" centered, and a CART button showing a shopping cart SVG icon + item badge count), Hero Split Section (split layout: left side shows "KI" in giant typography, center shows `kilt-hero-model.png`, and right side shows "LT" in giant typography, with tagline "FUNCTIONAL. MODULAR. WEATHERPROOF.", a circular "play campaign video" toggle button, and a "SHOP NOW" call-to-action button), New Collection Section (4x2 responsive product grid detailing Bomber, Parka, Vest, Hoodie, Tee, Cargo Pant, Balaclava, and Sling Bag, complete with individual radio button size selectors S/M/L/XL and ADD TO CART buttons), Brand Statement Section (huge text block reading "KILT — ENGINEERED FOR MOVEMENT, BUILT FOR THE ELEMENTS, DESIGNED WITHOUT COMPROMISE"), Gallery Section (3-column layout showcasing editorial images), Lookbook Section (2-column layout displaying model fits in motion), Newsletter Section ("GET THE DROP" subscribe form with input field validation), and a site Footer (Social links, contact details, and a giant footer logo "KILT"). The site has a slide-out shopping cart side drawer (`cart-drawer`) that opens from the right with a full-height overlay background, managing cart item additions, quantity modifications, in-memory total calculating, simulated checkout alerts, and empty states. All sections animate on scroll using a custom IntersectionObserver scroll reveal.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **FILE ARCHITECTURE — NO FRAMEWORKS:** Build the project as a vanilla static website: `index.html` (markup), `styles.css` (verbatim styles), and `script.js` (verbatim state logic), dev-scaffolded with Vite. Do not use React or Tailwind.
2. **VERBATIM COPYING:** Copy the stylesheet `styles.css` and logic `script.js` provided below exactly as written.
3. **FONTS:** Load Bebas Neue (weight 400) and Space Mono (weights 400, 700) via Google Fonts `<link>` in `index.html`.
4. **ASSET ROBUSTNESS:** All media assets must reference the absolute remote server paths hosted at `https://ecommerce-landing.pages.dev/generated-assets/kilt/`. Do not host files locally.
5. **INTERACTIVE FEATURES & TRANSITIONS:**
   - **Header Scroll Sticky State**: Header switches to black background (`.scrolled` class) when scroll exceeds the hero height.
   - **Play Button Micro-interaction**: Toggling class `.playing` changes the button shape from play triangle to pause square.
   - **Interactive Side-Drawer Cart**: Opens `.cart-drawer` from the right (`transform: translateX(0)`) and sets body overflow to hidden. Calculates total and manages item listing states.
   - **Intersection Observer Reveal**: Smooth fade-in and slide-up entrance animation using `.reveal` and `.visible` classes.

---

# FONTS

Import Bebas Neue and Space Mono via Google Fonts `<link>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

## `package.json`
```json
{
  "name": "kilt-brutalist",
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
  <title>KILT — Technical Apparel</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="grain"></div>
  <div class="cart-overlay" id="cart-overlay" hidden></div>
  <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping cart" aria-hidden="true">
    <div class="cart-header"><h2>CART</h2><button class="cart-close" aria-label="Close cart">CLOSE</button></div>
    <div class="cart-body" id="cart-body"><p class="cart-empty">Your cart is empty.</p></div>
    <div class="cart-footer"><div class="cart-total"><span>TOTAL</span><span id="cart-total">$0.00</span></div><button class="checkout" id="checkout-btn">CHECKOUT</button></div>
  </aside>
  <div class="top-bar">SYSTEM DROP LIVE — GLOBAL SHIPPING</div>
  <header class="site-header">
    <nav aria-label="Primary"><a href="#shop">SHOP</a><a href="#lookbook">COLLECTION</a><a href="#manifesto">MANIFESTO</a><a href="#contact">CONTACT</a></nav>
    <a href="#" class="logo">KILT</a>
    <button class="cart-toggle" aria-label="Open cart" aria-controls="cart-drawer" aria-expanded="false">
      <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"></path><circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none"></circle><circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none"></circle><path d="M6 6L5 3H2"></path></svg>
      <span>CART</span><span class="cart-badge" id="cart-badge" aria-label="Cart items">0</span>
    </button>
  </header>
  <main>
    <section class="hero-split" aria-label="Campaign hero">
      <div class="hero-text-left">KI</div>
      <div class="hero-model"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-hero-model.png" alt="Model in technical outerwear with modular layers" loading="eager"></div>
      <div class="hero-text-right">LT</div>
      <div class="hero-tagline"><p>FUNCTIONAL. MODULAR. WEATHERPROOF.</p><a href="#shop" class="hero-cta">SHOP NOW</a></div>
      <button class="play-btn" id="play-btn" aria-label="Play campaign video"><span class="play-triangle" aria-hidden="true"></span></button>
    </section>
    <section class="new-collection reveal" id="shop" aria-labelledby="shop-heading">
      <h2 id="shop-heading" class="section-title">NEW COLLECTION</h2>
      <div class="product-grid" id="product-grid"></div>
    </section>
    <section class="brand-statement reveal" id="manifesto" aria-labelledby="manifesto-heading">
      <p id="manifesto-heading">KILT — ENGINEERED FOR MOVEMENT, BUILT FOR THE ELEMENTS, DESIGNED WITHOUT COMPROMISE</p>
    </section>
    <section class="gallery reveal" aria-label="Gallery">
      <div class="gallery-grid">
        <figure class="gallery-item"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-gallery-1.png" alt="Technical outerwear editorial with utility details" loading="lazy"></figure>
        <figure class="gallery-item"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-gallery-2.png" alt="Urban techwear layer system monochrome" loading="lazy"></figure>
        <figure class="gallery-item"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-gallery-3.png" alt="Technical shell coat editorial monochrome" loading="lazy"></figure>
      </div>
    </section>
    <section class="lookbook reveal" id="lookbook" aria-labelledby="lookbook-heading">
      <h2 id="lookbook-heading" class="section-title">LOOKBOOK</h2>
      <div class="lookbook-grid">
        <figure class="lookbook-item"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-look-1.png" alt="Techwear lookbook full kit system" loading="lazy"></figure>
        <figure class="lookbook-item"><img src="https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-look-2.png" alt="Technical layers in motion lookbook" loading="lazy"></figure>
      </div>
    </section>
    <section class="newsletter reveal" id="newsletter" aria-labelledby="newsletter-heading">
      <h2 id="newsletter-heading" class="section-title">GET THE DROP</h2>
      <form class="signup" id="signup-form" novalidate>
        <label for="email">EMAIL ADDRESS</label><input type="email" id="email" name="email" placeholder="you@example.com" required><button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  </main>
  <footer class="site-footer" id="contact">
    <div class="footer-top">
      <div class="footer-social"><a href="https://instagram.com" target="_blank" rel="noopener">INSTAGRAM</a><a href="https://telegram.org" target="_blank" rel="noopener">TELEGRAM</a><a href="https://whatsapp.com" target="_blank" rel="noopener">WHATSAPP</a><a href="#contact">CONTACT</a></div>
      <div class="footer-contact"><p>+1 (555) 000-0000</p><p>hello@kilt.studio</p></div>
    </div>
    <div class="footer-giant">KILT</div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

## `styles.css`
```css
:root { --black: #000000; --lime: #C8FF00; --off-white: #F2F2F2; --gray: #888888; --border: 1px solid var(--off-white); --font-display: 'Bebas Neue', Impact, sans-serif; --font-mono: 'Space Mono', monospace; }
* { box-sizing: border-box; margin: 0; }
html { scroll-behavior: smooth; }
body { background: var(--black); color: var(--off-white); font-family: var(--font-mono); font-size: 14px; line-height: 1.45; }
img { max-width: 100%; display: block; }
button, a, input { color: inherit; font-family: inherit; }
button, input { border-radius: 0; }
button { cursor: pointer; background: transparent; border: var(--border); }
a:focus-visible, button:focus-visible, input:focus-visible { outline: 2px solid var(--lime); outline-offset: 2px; }
.grain { position: absolute; inset: 0; pointer-events: none; z-index: 2; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E"); opacity: 0.5; }
.top-bar { padding: 0.5rem 1rem; text-align: center; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border-bottom: var(--border); background: var(--black); }
.site-header { position: sticky; top: 0; z-index: 100; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 1rem; padding: 0.75rem 1rem; background: var(--off-white); color: var(--black); }
.logo { font-family: var(--font-display); font-size: 2rem; line-height: 1; letter-spacing: 0.04em; color: var(--black); text-decoration: none; }
.site-header nav { display: none; gap: 1.25rem; }
.site-header nav a { text-decoration: none; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--black); border-bottom: 1px solid transparent; transition: border-color 0.15s ease; }
.site-header nav a:hover { border-bottom-color: var(--black); }
.cart-toggle { display: inline-flex; align-items: center; justify-self: end; gap: 0.5rem; padding: 0.5rem 0.75rem; font-weight: 700; font-family: var(--font-mono); border: 1px solid var(--black); background: transparent; color: var(--black); transition: background 0.15s ease, color 0.15s ease; }
.cart-toggle:hover { background: var(--lime); color: var(--black); border-color: var(--lime); }
.cart-icon { width: 1.1rem; height: 1.1rem; }
.cart-badge { display: inline-flex; align-items: center; justify-content: center; min-width: 1.25rem; padding: 0 0.25rem; background: var(--lime); color: var(--black); font-size: 0.75rem; }
.site-header.scrolled { background: var(--black); color: var(--off-white); border-bottom: var(--border); }
.site-header.scrolled .logo { color: var(--lime); }
.site-header.scrolled nav a { color: var(--off-white); }
.site-header.scrolled nav a:hover { border-bottom-color: var(--lime); }
.site-header.scrolled .cart-toggle { border-color: var(--off-white); color: var(--off-white); }
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
.new-collection { background: var(--black); }
.section-title { margin: 0; padding: 1rem; font-family: var(--font-display); font-size: clamp(2.5rem, 10vw, 6rem); line-height: 0.9; letter-spacing: 0.02em; text-transform: uppercase; border-bottom: var(--border); color: var(--off-white); }
.product-grid { display: grid; grid-template-columns: 1fr; }
.product-card { padding: 1rem; border-bottom: var(--border); }
.product-image { aspect-ratio: 3 / 4; overflow: hidden; border: var(--border); background: #111; }
.product-image img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.1); }
.product-meta { margin-top: 1rem; display: grid; gap: 0.5rem; }
.product-name { margin: 0; font-family: var(--font-display); font-size: 1.9rem; line-height: 1; text-transform: uppercase; }
.product-price { margin: 0; font-weight: 700; color: var(--lime); }
.size-picker { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
.size-picker label { cursor: pointer; }
.size-picker input { position: absolute; opacity: 0; width: 0; height: 0; }
.size-picker span { display: block; min-width: 2.25rem; padding: 0.35rem 0.5rem; border: var(--border); text-align: center; font-weight: 700; }
.size-picker input:checked + span { background: var(--lime); color: var(--black); }
.size-picker input:focus-visible + span { outline: 2px solid var(--lime); outline-offset: 2px; }
.add-to-cart { margin-top: 1rem; width: 100%; padding: 0.75rem; border: var(--border); background: transparent; color: var(--off-white); font-weight: 700; text-transform: uppercase; transition: background 0.15s ease, color 0.15s ease; }
.add-to-cart:hover { background: var(--off-white); color: var(--black); }
.brand-statement { padding: 4rem 1rem; background: var(--black); border-top: var(--border); border-bottom: var(--border); }
.brand-statement p { margin: 0; font-family: var(--font-display); font-size: clamp(2.5rem, 8vw, 7rem); line-height: 0.92; color: var(--off-white); text-transform: uppercase; }
.gallery { background: var(--black); }
.gallery-grid { display: grid; grid-template-columns: 1fr; }
.gallery-item { overflow: hidden; border-bottom: var(--border); }
.gallery-item img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; filter: grayscale(100%) contrast(1.1); }
.lookbook { background: var(--black); }
.lookbook-grid { display: grid; grid-template-columns: 1fr; }
.lookbook-item { margin: 0; height: 60vh; min-height: 24rem; overflow: hidden; border-bottom: var(--border); }
.lookbook-item img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.1); }
.newsletter { padding: 1rem; border-top: var(--border); border-bottom: var(--border); }
.newsletter h2 { margin: 0 0 1rem; font-family: var(--font-display); font-size: clamp(2rem, 7vw, 4.5rem); line-height: 0.95; color: var(--off-white); }
.signup { display: flex; flex-direction: column; gap: 0.75rem; }
.signup label { font-weight: 700; letter-spacing: 0.05em; }
.signup input { padding: 0.75rem; border: var(--border); background: var(--black); color: var(--off-white); }
.signup button { padding: 0.75rem 1.25rem; background: var(--lime); color: var(--black); font-weight: 700; border: none; transition: background 0.15s ease; }
.signup button:hover { background: var(--off-white); }
.site-footer { background: var(--black); color: var(--off-white); }
.footer-top { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 2rem; padding: 2rem 1rem; border-top: var(--border); font-family: var(--font-mono); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; }
.footer-social { display: flex; flex-wrap: wrap; gap: 1.5rem; }
.footer-social a { color: var(--off-white); text-decoration: none; transition: color 0.15s ease; }
.footer-social a:hover { color: var(--lime); }
.footer-contact p { margin: 0; line-height: 1.6; }
.footer-giant { font-family: var(--font-display); font-size: 20vw; line-height: 0.8; letter-spacing: -0.02em; text-transform: uppercase; color: var(--off-white); text-align: center; overflow: hidden; white-space: nowrap; padding-bottom: 2vw; }
.cart-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); z-index: 150; }
.cart-drawer { position: fixed; top: 0; right: 0; width: min(100%, 28rem); height: 100vh; background: var(--black); border-left: var(--border); z-index: 200; display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.25s ease; }
.cart-drawer.open { transform: translateX(0); }
.cart-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem; border-bottom: var(--border); }
.cart-header h2 { margin: 0; font-family: var(--font-display); font-size: 2rem; }
.cart-close { padding: 0.5rem 0.75rem; font-weight: 700; }
.cart-close:hover { background: var(--lime); color: var(--black); }
.cart-body { flex: 1; overflow-y: auto; padding: 1rem; }
.cart-empty { margin: 0; color: var(--gray); }
.cart-item { display: grid; grid-template-columns: 4rem 1fr auto; gap: 1rem; padding: 1rem 0; border-bottom: var(--border); }
.cart-item img { width: 100%; height: 5rem; object-fit: cover; filter: grayscale(100%) contrast(1.1); border: var(--border); }
.cart-item-info h3 { margin: 0 0 0.25rem; font-family: var(--font-display); font-size: 1.25rem; line-height: 1; }
.cart-item-info p { margin: 0; font-size: 0.75rem; color: var(--gray); }
.cart-item-qty { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; }
.cart-item-qty button { width: 1.75rem; height: 1.75rem; padding: 0; display: grid; place-items: center; color: var(--off-white); }
.cart-item-qty button:hover { background: var(--lime); color: var(--black); }
.cart-item-qty span { min-width: 1.25rem; text-align: center; font-weight: 700; }
.cart-item-remove { align-self: start; padding: 0.35rem 0.5rem; font-size: 0.75rem; }
.cart-item-remove:hover { background: var(--off-white); color: var(--black); }
.cart-footer { padding: 1rem; border-top: var(--border); }
.cart-total { display: flex; justify-content: space-between; font-family: var(--font-display); font-size: 1.75rem; margin-bottom: 1rem; }
.checkout { width: 100%; padding: 1rem; background: var(--lime); color: var(--black); font-weight: 700; }
.checkout:hover { background: var(--off-white); }
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
@media (min-width: 640px) { .site-header nav { display: flex; } .product-grid { grid-template-columns: repeat(2, 1fr); } .product-card:nth-child(odd) { border-right: var(--border); } .signup { flex-direction: row; align-items: flex-end; } .signup input { flex: 1; } }
@media (min-width: 768px) { .hero-split { grid-template-columns: 1fr auto 1fr; grid-template-rows: 1fr; align-items: center; min-height: 100vh; padding-bottom: 0; } .hero-text-left { grid-column: 1; grid-row: 1; align-self: center; text-align: right; padding: 0 1vw 0 1rem; font-size: 18vw; } .hero-model { grid-column: 2; grid-row: 1; align-self: center; width: 26vw; height: 85vh; max-width: 380px; } .hero-text-right { grid-column: 3; grid-row: 1; align-self: center; text-align: left; padding: 0 1rem 0 1vw; font-size: 18vw; } .hero-tagline { position: absolute; bottom: 3rem; left: 1.5rem; z-index: 3; padding: 0; } .gallery-grid { grid-template-columns: repeat(3, 1fr); } .gallery-item { border-bottom: none; } .gallery-item:not(:last-child) { border-right: var(--border); } .lookbook-grid { grid-template-columns: repeat(2, 1fr); } .lookbook-item { border-bottom: none; } .lookbook-item:first-child { border-right: var(--border); } }
@media (min-width: 1024px) { .product-grid { grid-template-columns: repeat(4, 1fr); } .product-card:nth-child(odd) { border-right: none; } .product-card:not(:nth-child(4n)) { border-right: var(--border); } }
```

## `script.js`
```js
const products = [
  { id: 'p1', name: 'Shell Bomber', price: 245, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-1.png', alt: 'Technical shell bomber jacket with water-resistant membrane' },
  { id: 'p2', name: 'Hard Shell Parka', price: 320, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-2.png', alt: 'Full-length hard shell parka with sealed seams' },
  { id: 'p3', name: 'Modular Vest', price: 185, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-3.png', alt: 'Utility modular vest with MOLLE-compatible panels' },
  { id: 'p4', name: 'Tech Hoodie', price: 160, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-4.png', alt: 'Mid-layer tech hoodie with articulated sleeves' },
  { id: 'p5', name: 'Base Layer Tee', price: 95, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-5.png', alt: 'Merino-blend base layer tee for moisture management' },
  { id: 'p6', name: 'Cargo Pant', price: 210, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-6.png', alt: 'Technical cargo pant with articulated knees and taped pockets' },
  { id: 'p7', name: 'Tactical Balaclava', price: 65, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-7.png', alt: 'Technical balaclava face mask with breathable mesh panel' },
  { id: 'p8', name: 'Crossbody Sling', price: 175, image: 'https://ecommerce-landing.pages.dev/generated-assets/kilt/kilt-product-8.png', alt: 'Tactical crossbody sling bag with multiple compartments' }
];
const sizes = ['S', 'M', 'L', 'XL'];
let cart = [];
const productGrid = document.getElementById('product-grid'), cartDrawer = document.getElementById('cart-drawer'), cartOverlay = document.getElementById('cart-overlay'), cartBody = document.getElementById('cart-body'), cartBadge = document.getElementById('cart-badge'), cartTotal = document.getElementById('cart-total'), cartToggle = document.querySelector('.cart-toggle'), cartClose = document.querySelector('.cart-close'), checkoutBtn = document.getElementById('checkout-btn'), signupForm = document.getElementById('signup-form'), playBtn = document.getElementById('play-btn');
const formatMoney = (a) => '$' + a.toFixed(2);
function renderProducts() {
  productGrid.innerHTML = products.map(p => `
    <article class="product-card" data-id="${p.id}"><div class="product-image"><img src="${p.image}" alt="${p.alt}" loading="lazy" /></div>
      <div class="product-meta"><h3 class="product-name">${p.name}</h3><p class="product-price">${formatMoney(p.price)}</p>
        <div class="size-picker" role="group" aria-label="Select size for ${p.name}">
          ${sizes.map((s, i) => `<label><input type="radio" name="size-${p.id}" value="${s}" ${i === 1 ? 'checked' : ''} /><span>${s}</span></label>`).join('')}
        </div><button class="add-to-cart" data-id="${p.id}">ADD TO CART</button>
      </div></article>`).join('');
}
const getSelectedSize = (id) => { const input = document.querySelector(`input[name="size-${id}"]:checked`); return input ? input.value : 'M'; };
function addToCart(id) {
  const product = products.find(p => p.id === id), size = getSelectedSize(id), existing = cart.find(item => item.id === id && item.size === size);
  if (existing) existing.qty += 1;
  else cart.push({ key: `${id}-${size}`, id, name: product.name, price: product.price, size, qty: 1, image: product.image, alt: product.alt });
  updateCart(); openCart();
}
const removeFromCart = (key) => { cart = cart.filter(item => item.key !== key); updateCart(); };
function changeQty(key, delta) {
  const item = cart.find(item => item.key === key); if (!item) return;
  item.qty += delta; if (item.qty <= 0) removeFromCart(key); else updateCart();
}
const getTotalItems = () => cart.reduce((sum, item) => sum + item.qty, 0);
const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);
function updateCart() {
  cartBadge.textContent = getTotalItems(); cartTotal.textContent = formatMoney(getTotalPrice());
  if (cart.length === 0) { cartBody.innerHTML = '<p class="cart-empty">Your cart is empty.</p>'; return; }
  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item" data-key="${item.key}"><img src="${item.image}" alt="${item.alt}" />
      <div class="cart-item-info"><h3>${item.name}</h3><p>SIZE ${item.size} — ${formatMoney(item.price)}</p>
        <div class="cart-item-qty"><button class="qty-dec" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button class="qty-inc" aria-label="Increase quantity">+</button></div>
      </div><button class="cart-item-remove" aria-label="Remove ${item.name} size ${item.size}">REMOVE</button>
    </div>`).join('');
}
function openCart() { cartDrawer.classList.add('open'); cartDrawer.setAttribute('aria-hidden', 'false'); cartOverlay.hidden = false; cartToggle.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; }
function closeCart() { cartDrawer.classList.remove('open'); cartDrawer.setAttribute('aria-hidden', 'true'); cartOverlay.hidden = true; cartToggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
productGrid.addEventListener('click', (e) => { if (e.target.classList.contains('add-to-cart')) addToCart(e.target.dataset.id); });
cartBody.addEventListener('click', (e) => {
  const item = e.target.closest('.cart-item'); if (!item) return;
  const key = item.dataset.key;
  if (e.target.classList.contains('qty-dec')) changeQty(key, -1);
  else if (e.target.classList.contains('qty-inc')) changeQty(key, 1);
  else if (e.target.classList.contains('cart-item-remove')) removeFromCart(key);
});
cartToggle.addEventListener('click', openCart); cartClose.addEventListener('click', closeCart); cartOverlay.addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && cartDrawer.classList.contains('open')) closeCart(); });
checkoutBtn.addEventListener('click', () => { if (cart.length === 0) return; alert('Checkout is simulated. Your total: ' + formatMoney(getTotalPrice())); });
signupForm.addEventListener('submit', (e) => { e.preventDefault(); const email = signupForm.email.value.trim(); if (!email) return; alert('Subscribed: ' + email); signupForm.reset(); });
playBtn.addEventListener('click', () => { playBtn.classList.toggle('playing'); playBtn.setAttribute('aria-label', playBtn.classList.contains('playing') ? 'Pause campaign video' : 'Play campaign video'); });
renderProducts(); updateCart();
const revealObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const header = document.querySelector('.site-header') || document.querySelector('header'), hero = document.querySelector('.hero-split');
if (header && hero) {
  const onScroll = () => { const pastHero = window.scrollY > hero.offsetHeight - header.offsetHeight; header.classList.toggle('scrolled', pastHero); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
}
const marquee = document.querySelector('.marquee-track') || document.querySelector('.marquee');
if (marquee) {
  const parent = marquee.parentElement;
  parent.addEventListener('mouseenter', () => { marquee.style.animationPlayState = 'paused'; });
  parent.addEventListener('mouseleave', () => { marquee.style.animationPlayState = ''; });
}
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
- Main Background: `#000000` (deep pitch black)
- Text and Lines: `#F2F2F2` (soft off-white)
- Main Accent: `#C8FF00` (neon brutalist lime)
- Muted Grey: `#888888`
- Borders: `1px solid var(--off-white)`

---

# IMAGES / ASSETS

- Base URL: `https://ecommerce-landing.pages.dev/generated-assets/kilt/`

| Filename | URL | Description | Where Used |
|---|---|---|---|
| `kilt-hero-model.png` | `kilt-hero-model.png` | Model in modular technical wear | Hero Split Section Center |
| `kilt-product-1.png` | `kilt-product-1.png` | Shell Bomber Jacket | New Collection Card 1 |
| `kilt-product-2.png` | `kilt-product-2.png` | Hard Shell Parka Jacket | New Collection Card 2 |
| `kilt-product-3.png` | `kilt-product-3.png` | Modular Pocket Vest | New Collection Card 3 |
| `kilt-product-4.png` | `kilt-product-4.png` | Tech Mid-Layer Hoodie | New Collection Card 4 |
| `kilt-product-5.png` | `kilt-product-5.png` | Base Layer Tee | New Collection Card 5 |
| `kilt-product-6.png` | `kilt-product-6.png` | Technical Cargo Pant | New Collection Card 6 |
| `kilt-product-7.png` | `kilt-product-7.png` | Tactical Balaclava Mask | New Collection Card 7 |
| `kilt-product-8.png` | `kilt-product-8.png` | Crossbody Sling Bag | New Collection Card 8 |
| `kilt-gallery-1.png` | `kilt-gallery-1.png` | Technical outerwear detail crop | Gallery Card 1 |
| `kilt-gallery-2.png` | `kilt-gallery-2.png` | Layer system layout overview | Gallery Card 2 |
| `kilt-gallery-3.png` | `kilt-gallery-3.png` | Shell coat profile detail | Gallery Card 3 |
| `kilt-look-1.png` | `kilt-look-1.png` | Full apparel system lookup view | Lookbook Card 1 |
| `kilt-look-2.png` | `kilt-look-2.png` | Outerwear layer fit in movement | Lookbook Card 2 |

---

# TECH STACK

- **Type**: hand-written static
- **Dev Tool**: Vite (Vanilla configuration)
- **Styling**: Vanilla CSS (CSS custom variables, font scales)
- **Javascript**: Vanilla ES6 DOM selector bindings & IntersectionObserver callbacks
- **Fonts**: Bebas Neue & Space Mono loaded via Google Fonts
