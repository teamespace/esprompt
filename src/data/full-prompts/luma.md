Create a static HTML + CSS + Vanilla JavaScript website for "LUMA — Italian Country Club", a vintage sport-lifestyle storefront. The page has these sections in order: Announcement Bar (rotating messages "Free shipping on orders over $150" / "New season drops every Friday" with a close button), Site Header (absolute header with logo "LUMA", main nav links, action icons, and a CART button with quantity badge), Hero Section (fade carousel showing 3 slides: "The Country Club Edit", "The Knit Edit", "Made to Live In" with text sub-details and page dots indicators), Showcase Section (horizontal product list with drag-scroll and quick-view triggers), Editorial Section (centered quote "Italian Country Club" and lifestyle text details), Categories Section (infinite looping marquee of category tiles Tops, Knitwear, Bottoms, Resort, Jackets showing descriptions and call-to-actions on hover), Featured Split (split layout: large lifestyle portrait on the left, copy column and product showcase card on the right), Journal Section (3-column layout mapping entries: "The Morning Ritual", "Train in Tone", "Less, But Better"), Newsletter Section (expandable Sign Up form box with input validation), and a site Footer (Regional selector dropdown, destination maps, customer care links, and social columns). The site has a slide-out shopping cart panel (`cart-drawer`) that opens from the right with background mask, and a Quick View Modal (`quick-view`) that is dynamically populated with custom size options when clicking showcase cards. All elements animate on entrance via custom IntersectionObserver scroll reveals.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **FILE ARCHITECTURE — NO FRAMEWORKS:** Build the project as a vanilla static website: `index.html` (markup), `styles.css` (verbatim styles), and `script.js` (verbatim state logic), dev-scaffolded with Vite. Do not use React or Tailwind.
2. **VERBATIM COPYING:** Copy the stylesheet `styles.css` and logic `script.js` provided below exactly as written.
3. **FONTS:** Load DM Sans (weights 300, 400, 500, 700) via Google Fonts `<link>` in `index.html`.
4. **ASSET ROBUSTNESS:** All media assets must reference the absolute remote server paths hosted at `https://ecommerce-landing.pages.dev/generated-assets/luma/`. Do not host files locally.
5. **INTERACTIVE FEATURES & TRANSITIONS:**
   - **Sticky & Hidden Header**: Sticky when scrolling down past 20px, hides when scrolling down rapidly, shows on scroll up.
   - **Quick View Modal**: Renders product details, handles size picker state, adds to cart drawer on button click.
   - **Cart Drawer**: Slides open from the right, lists items, updates subtotals, manages item quantities.
   - **Intersection Observer Reveal**: Fade-in and slide-up entrance animation using `.fade-in` and `.is-visible` classes.

---

# FONTS

Import DM Sans via Google Fonts `<link>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

## `package.json`
```json
{
  "name": "luma-lifestyle",
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
  <title>LUMA — Italian Country Club</title>
  <meta name="description" content="LUMA — premium country club essentials and tennis-golf lifestyle pieces made to live in.">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="announcement-bar" id="announcement-bar" role="banner" aria-label="Promotions">
    <div class="announcement-bar__inner">
      <div class="announcement-bar__messages">
        <p class="announcement-bar__message is-active" data-index="0">Free shipping on orders over $150</p>
        <p class="announcement-bar__message" data-index="1">New season drops every Friday</p>
      </div>
      <button class="announcement-bar__close" id="announcement-close" aria-label="Close announcement bar">×</button>
    </div>
  </div>
  <header class="site-header" id="site-header">
    <div class="header-inner container">
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open mobile menu"><span></span><span></span><span></span></button>
      <nav class="main-nav" aria-label="Main navigation"><ul class="main-nav__list"><li><a href="#men" class="nav-link">Men</a></li><li><a href="#women" class="nav-link">Women</a></li><li><a href="#journey" class="nav-link">Journey</a></li></ul></nav>
      <a href="#" class="logo" aria-label="LUMA home">LUMA</a>
      <div class="header-actions">
        <a href="#" class="header-actions__btn" aria-label="Account"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path></svg></a>
        <button class="header-actions__btn" aria-label="Search"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg></button>
        <button class="cart-toggle" id="cart-toggle" aria-expanded="false" aria-controls="cart-drawer" aria-label="Open cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"></path><circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M6 6 5 3H2"></path></svg>
          <span class="cart-badge" id="cart-badge" data-count="0" aria-label="Items in cart">0</span>
        </button>
      </div>
    </div>
  </header>
  <main>
    <section class="hero" id="hero" aria-label="Featured collections">
      <div class="hero__slider" id="hero-slider">
        <article class="hero__slide" data-index="0">
          <div class="hero__media"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Hero/luma-hero-1.webp" alt="Man and woman in cream tennis sweaters beside a vintage convertible" loading="eager"></div>
          <div class="hero__content"><p class="hero__kicker">New Arrivals</p><h1 class="hero__title">The Country Club Edit</h1><p class="hero__sub">Timeless pieces for tennis mornings and garden evenings.</p><a href="#women" class="hero__cta">Explore Now</a></div>
        </article>
        <article class="hero__slide" data-index="1">
          <div class="hero__media"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Hero/luma-hero-2.webp" alt="Models in relaxed knit layers on a sun-bleached terrace" loading="lazy"></div>
          <div class="hero__content"><p class="hero__kicker">Seasonal</p><h1 class="hero__title">The Knit Edit</h1><p class="hero__sub">Soft layers in warm ivory, sage and clay.</p><a href="#men" class="hero__cta">Explore Now</a></div>
        </article>
        <article class="hero__slide is-active" data-index="2">
          <div class="hero__media"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Hero/luma-hero-3.webp" alt="A couple in tailored sportswear walking through an Italian garden" loading="lazy"></div>
          <div class="hero__content"><p class="hero__kicker">Lifestyle</p><h1 class="hero__title">Made to Live In</h1><p class="hero__sub">From the court to the clubhouse and everywhere between.</p><a href="#featured" class="hero__cta">Explore Now</a></div>
        </article>
      </div>
      <div class="hero__pagination" id="hero-pagination" role="tablist" aria-label="Hero slides">
        <button class="hero__dot" data-slide="0" aria-label="Show slide 1" aria-selected="false" role="tab"></button>
        <button class="hero__dot" data-slide="1" aria-label="Show slide 2" aria-selected="false" role="tab"></button>
        <button class="hero__dot is-active" data-slide="2" aria-label="Show slide 3" aria-selected="true" role="tab"></button>
      </div>
    </section>
    <section class="section showcase" id="showcase" aria-labelledby="showcase-heading">
      <div class="container">
        <div class="showcase__header"><div><h2 class="section-title" id="showcase-heading">Built to Move. Easy to Wear.</h2><p>Cooling active sets, lightweight linen pieces, and easy everyday layers built for the many ways you move through summer.</p></div><a href="#featured" class="showcase__cta">Shop Now</a></div>
        <div class="showcase__slider"><div class="showcase__grid" id="showcase-grid"></div></div>
        <div class="showcase__controls"><button class="showcase__arrow showcase__arrow--prev" id="showcase-prev" aria-label="Previous products">←</button><button class="showcase__arrow showcase__arrow--next" id="showcase-next" aria-label="Next products">→</button></div>
      </div>
    </section>
    <section class="section editorial" id="editorial" aria-labelledby="editorial-heading">
      <div class="container"><p class="eyebrow">LUMA Lifestyle</p><h2 class="section-title" id="editorial-heading">Italian Country Club</h2><p>Sun-faded essentials built for long lunches, warm courts and slow drives. Natural fibres, vintage tones and a relaxed fit that feels like summer every day.</p></div>
    </section>
    <section class="section category-tiles" id="women" aria-label="Shop by category">
      <h2 class="visually-hidden">Shop by category</h2>
      <div class="category-tiles__track" id="category-track">
        <a href="#" class="category-tile"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Category/luma-category-1.webp" alt="Tops category"><span class="category-tile__label">Tops</span><span class="category-tile__overlay"><span class="category-tile__desc">Polos, tees and knit tops made for warm days.</span><span class="category-tile__cta">Shop Now</span></span></a>
        <a href="#" class="category-tile"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Category/luma-category-2.webp" alt="Knitwear category"><span class="category-tile__label">Knitwear</span><span class="category-tile__overlay"><span class="category-tile__desc">Cable-knit sweaters and soft layers for the clubhouse.</span><span class="category-tile__cta">Shop Now</span></span></a>
        <a href="#" class="category-tile"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Category/luma-category-3.webp" alt="Bottoms category"><span class="category-tile__label">Bottoms</span><span class="category-tile__overlay"><span class="category-tile__desc">Tailored shorts and pleated trousers with a relaxed fit.</span><span class="category-tile__cta">Shop Now</span></span></a>
        <a href="#" class="category-tile"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Category/luma-category-4.webp" alt="Resort category"><span class="category-tile__label">Resort</span><span class="category-tile__overlay"><span class="category-tile__desc">Effortless resort pieces from court to garden party.</span><span class="category-tile__cta">Shop Now</span></span></a>
        <a href="#" class="category-tile"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Category/luma-category-5.webp" alt="Jackets category"><span class="category-tile__label">Jackets</span><span class="category-tile__overlay"><span class="category-tile__desc">Lightweight layers for cool mornings and evenings.</span><span class="category-tile__cta">Shop Now</span></span></a>
      </div>
    </section>
    <section class="featured-split" id="featured" aria-labelledby="featured-heading">
      <div class="featured-split__media"><img id="featured-main-img" src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Featured/luma-featured.webp" alt="Model wearing LUMA cream knit and tailored trousers in warm sunlight"></div>
      <div class="featured-split__content"><p class="eyebrow">The Wardrobe</p><h2 class="section-title" id="featured-heading">Featured Pieces</h2><div class="featured-split__portrait"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Featured/luma-category-2.webp" alt="Male model in a navy tennis sweater at the country club"></div><p>Curated staples with a sun-faded finish. Designed to be worn together from the court to the clubhouse.</p><a href="#" class="featured-split__cta">Explore the Collection</a></div>
    </section>
    <section class="section journey-blocks" id="journey" aria-labelledby="journey-heading">
      <div class="container">
        <div class="journey-blocks__head"><p class="eyebrow">The Journal</p><h2 class="section-title" id="journey-heading">Journey</h2></div>
        <div class="journey-blocks__grid">
          <article class="journey-block fade-in"><div class="journey-block__content"><span class="journey-block__badge">Lifestyle</span><h3>The Morning Ritual</h3><p>How the right layers turn slow mornings into intentional starts.</p><a href="#" class="journey-block__link">Read More</a></div><div class="journey-block__media"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Journal/journal-1.webp" alt="A couple in cream tennis sweaters beside a vintage car"></div></article>
          <article class="journey-block fade-in"><div class="journey-block__content"><span class="journey-block__badge">Movement</span><h3>Train in Tone</h3><p>Tennis whites and warm knits that move from warm-up to clubhouse.</p><a href="#" class="journey-block__link">Read More</a></div><div class="journey-block__media"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Journal/journal-2.webp" alt="Models in relaxed knit layers on a sun-bleached terrace"></div></article>
          <article class="journey-block fade-in"><div class="journey-block__content"><span class="journey-block__badge">Design</span><h3>Less, But Better</h3><p>Inside our process for building a wardrobe that outlasts seasons.</p><a href="#" class="journey-block__link">Read More</a></div><div class="journey-block__media"><img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Journal/journal-3.webp" alt="A couple in tailored sportswear walking through an Italian garden"></div></article>
        </div>
      </div>
    </section>
    <section class="section newsletter" aria-labelledby="newsletter-heading">
      <div class="container newsletter__inner"><div class="newsletter__text"><p class="eyebrow">Newsletter</p><h2 class="section-title" id="newsletter-heading">Be the first to know about upcoming drops, events and deals.</h2></div><button class="newsletter__cta" id="newsletter-toggle" type="button" aria-expanded="false" aria-controls="newsletter-form">Sign Up</button></div>
      <div class="newsletter__form-wrapper" id="newsletter-form-wrapper" hidden><div class="container"><form class="newsletter__form" id="newsletter-form" action="#" method="post"><label for="email" class="visually-hidden">Email address</label><input class="newsletter__input" type="email" id="email" name="email" placeholder="Your email" required><button class="btn" type="submit">Subscribe</button></form><p class="form-note" id="form-note" role="status" aria-live="polite"></p></div></div>
    </section>
  </main>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__shipping"><span class="footer__label">Shipping to:</span><button class="footer__region" type="button" aria-haspopup="listbox" aria-expanded="false">Rest of the World</button></div>
      <div class="footer__grid">
        <div class="footer__menu footer__menu--large"><ul><li><a href="#">Destination Everywhere</a></li><li><a href="#">Sponsored Teams</a></li><li><a href="#">Find Stores</a></li></ul></div>
        <div class="footer__menu"><h3>Customer Care</h3><ul><li><a href="#">Get in Touch</a></li><li><a href="#">Gift Guide</a></li><li><a href="#">FAQ</a></li><li><a href="#">Returns</a></li><li><a href="#">Shipping</a></li><li><a href="#">Care Guide</a></li></ul></div>
        <div class="footer__menu"><h3>About LUMA</h3><ul><li><a href="#">About</a></li><li><a href="#">Press</a></li><li><a href="#">Career</a></li><li><a href="#">Stores</a></li><li><a href="#">Sustainability</a></li><li><a href="#">Journal</a></li></ul></div>
      </div>
      <div class="footer__legal">
        <ul class="footer__legal-links"><li><a href="#">Terms &amp; Conditions</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Cookie Policy</a></li><li><a href="#">Cookie Setting</a></li></ul>
        <ul class="footer__socials"><li><a href="#" aria-label="Instagram">Instagram</a></li><li><a href="#" aria-label="YouTube">YouTube</a></li><li><a href="#" aria-label="TikTok">TikTok</a></li><li><a href="#" aria-label="Pinterest">Pinterest</a></li></ul>
        <p>© LUMA 2026</p>
      </div>
    </div>
  </footer>
  <div class="cart-drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" hidden>
    <div class="cart-drawer__overlay" data-close aria-hidden="true"></div>
    <div class="cart-drawer__panel">
      <div class="cart-drawer__header"><h2 id="cart-title">Your Cart</h2><button class="cart-drawer__close" data-close aria-label="Close cart">×</button></div>
      <div class="cart-list"></div>
      <div class="cart-total"><span>Subtotal</span><span class="cart-total__price">$0.00</span></div>
      <button type="button" class="btn btn--wide checkout-btn">Checkout</button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" hidden>
    <div class="mobile-menu__overlay" data-close aria-hidden="true"></div>
    <div class="mobile-menu__panel">
      <div class="mobile-menu__header"><span class="logo" id="mobile-menu-title">LUMA</span><button class="mobile-menu__close" data-close aria-label="Close menu">×</button></div>
      <nav class="mobile-menu__nav" aria-label="Mobile navigation">
        <div class="accordion">
          <button class="accordion__trigger" aria-expanded="false" aria-controls="acc-women">Women</button>
          <div class="accordion__panel" id="acc-women" hidden><a href="#">Activewear</a><a href="#">Knitwear</a><a href="#">Essentials</a><a href="#">Loungewear</a></div>
          <button class="accordion__trigger" aria-expanded="false" aria-controls="acc-men">Men</button>
          <div class="accordion__panel" id="acc-men" hidden><a href="#">Activewear</a><a href="#">Knitwear</a><a href="#">Essentials</a><a href="#">Loungewear</a></div>
          <a href="#journey" class="accordion__link">Journey</a><a href="#" class="accordion__link">Account</a>
        </div>
      </nav>
    </div>
  </div>
  <div class="modal" id="quick-view" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
    <div class="modal-backdrop" data-close></div>
    <div class="modal-panel">
      <button class="modal-close" data-close aria-label="Close quick view">×</button>
      <div class="modal-layout">
        <img id="modal-img" src="" alt="">
        <div class="modal-info">
          <h2 id="modal-title" class="section-title"></h2><p id="modal-price" class="modal-price"></p><p id="modal-desc"></p>
          <fieldset class="size-options"><legend>Select size</legend><div class="sizes" id="modal-sizes"></div></fieldset>
          <button class="btn" id="add-to-bag">Add to Bag</button>
        </div>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## `styles.css`
```css
:root { --color-white: #fff; --color-grey: #f6f6f8; --color-medium-grey: #e6e6e6; --color-dark-grey: #9d9d9d; --color-black: #000; --color-error: #ed0000; --color-overlay: rgba(0, 0, 0, 0.2); --font: 'DM Sans', system-ui, sans-serif; --radius: 0; --gutter: 15px; --gutter-lg: 40px; --container-max: 1400px; --section-py: 20px; --header-height: 60px; --announcement-height: 36px; --transition: 0.25s ease; --transition-slow: 0.45s ease; }
@media (min-width: 768px) { :root { --gutter: 40px; --section-py: 70px; --header-height: 72px; } }
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: var(--font); font-weight: 400; font-size: 0.95rem; line-height: 1.5; color: var(--color-black); background: var(--color-white); -webkit-font-smoothing: antialiased; }
img, button, input, textarea, select { border-radius: 0; }
img { display: block; max-width: 100%; height: auto; }
button { font-family: inherit; cursor: pointer; }
a { color: inherit; text-decoration: none; }
h1, h2, h3, h4, h5, h6, p { margin: 0; }
h1, h2, h3, h4, h5, h6 { font-weight: 400; line-height: 1.1; text-transform: uppercase; letter-spacing: 0.02em; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.container { width: 100%; max-width: var(--container-max); margin-inline: auto; padding-inline: var(--gutter); }
.section { padding-block: var(--section-py); }
.section-title { font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.02em; margin-bottom: 1.25rem; }
@media (min-width: 768px) { .section-title { font-size: 2rem; margin-bottom: 1.5rem; } }
.eyebrow { display: block; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-dark-grey); margin-bottom: 0.5rem; }
.btn, button.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.85rem 1.75rem; font-size: 0.85rem; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1; background: var(--color-black); color: var(--color-white); border: 1px solid var(--color-black); cursor: pointer; transition: background var(--transition), color var(--transition), border-color var(--transition); }
.btn:hover, .btn:focus-visible { background: var(--color-white); color: var(--color-black); }
.btn:disabled { background: var(--color-medium-grey); border-color: var(--color-medium-grey); color: var(--color-dark-grey); cursor: default; }
.btn-wide, .btn--wide { width: 100%; }
.link-underline, .hero__cta, .journey-block__link, .footer__menu a, .footer a { position: relative; display: inline-block; padding-bottom: 2px; }
.link-underline::after, .hero__cta::after, .journey-block__link::after, .footer__menu a::after, .footer a::after { content: ''; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: currentColor; transform: scaleX(0); transform-origin: right; transition: transform var(--transition); }
.link-underline:hover::after, .link-underline:focus-visible::after, .hero__cta:hover::after, .hero__cta:focus-visible::after, .journey-block__link:hover::after, .journey-block__link:focus-visible::after, .footer__menu a:hover::after, .footer__menu a:focus-visible::after, .footer a:hover::after, .footer a:focus-visible::after { transform: scaleX(1); transform-origin: left; }
.announcement-bar { background: var(--color-grey); padding: 8px var(--gutter); font-size: 0.75rem; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; text-align: center; }
.announcement-bar__inner { display: flex; align-items: center; justify-content: center; gap: 1rem; max-width: var(--container-max); margin-inline: auto; }
.announcement-bar__messages { position: relative; overflow: hidden; height: 1.4em; }
.announcement-bar__message { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; text-align: center; opacity: 0; transform: translateY(100%); transition: opacity 0.5s ease, transform 0.5s ease; }
.announcement-bar__message.is-active { opacity: 1; transform: translateY(0); }
.announcement-bar__close { background: transparent; border: 0; font-size: 1.1rem; line-height: 1; color: var(--color-black); }
.site-header { position: absolute; top: 0; left: 0; right: 0; z-index: 100; background: var(--color-white); border-bottom: 1px solid var(--color-medium-grey); transition: transform 0.3s ease; }
.site-header--sticky { position: fixed; top: 0; left: 0; right: 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.site-header--hidden { transform: translateY(-100%); }
.header-inner { position: relative; display: flex; align-items: center; justify-content: space-between; min-height: var(--header-height); padding-block: 0.5rem; }
.logo { position: absolute; left: 50%; transform: translateX(-50%); font-size: 1.25rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; line-height: 1; text-align: center; }
.main-nav { display: none; align-items: center; gap: 2rem; }
.main-nav__list { display: flex; align-items: center; gap: 1.75rem; list-style: none; margin: 0; padding: 0; }
.main-nav a { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; }
.nav-toggle { display: inline-flex; flex-direction: column; justify-content: center; gap: 5px; width: 2.5rem; height: 2.5rem; padding: 0.4rem; background: transparent; border: 0; color: var(--color-black); }
.nav-toggle span { display: block; width: 100%; height: 2px; background: currentColor; transition: transform var(--transition), opacity var(--transition); }
.nav-toggle[aria-expanded='true'] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle[aria-expanded='true'] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded='true'] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.header-actions { display: flex; align-items: center; gap: 0.75rem; }
.header-actions__btn, .cart-toggle { position: relative; display: inline-flex; align-items: center; justify-content: center; background: transparent; border: 0; color: var(--color-black); padding: 0; }
.header-actions__btn svg, .cart-toggle svg { display: block; width: 20px; height: 20px; }
.cart-badge { position: absolute; top: -0.2rem; right: -0.2rem; min-width: 1rem; height: 1rem; padding: 0 0.2rem; font-size: 0.625rem; font-weight: 500; line-height: 1rem; text-align: center; background: var(--color-black); color: var(--color-white); opacity: 0; transform: scale(0.8); transition: opacity var(--transition), transform var(--transition); }
.cart-badge:not(:empty):not([data-count='0']) { opacity: 1; transform: scale(1); }
@media (min-width: 768px) { .nav-toggle { display: none; } .main-nav { display: flex; } .header-actions { gap: 1.5rem; } .header-actions__btn svg, .cart-toggle svg { display: none; } .header-actions__btn::after { content: attr(aria-label); font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; } .cart-toggle::after { content: 'CART'; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; } .cart-badge { position: static; display: inline-block; margin-left: 0.25rem; opacity: 1; transform: none; } .cart-badge::before { content: '('; } .cart-badge::after { content: ')'; } }
.mobile-menu { position: fixed; inset: 0; z-index: 110; pointer-events: none; }
.mobile-menu[hidden] { display: none; }
.mobile-menu.is-open { pointer-events: auto; }
.mobile-menu__overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.2); opacity: 0; transition: opacity var(--transition); }
.mobile-menu.is-open .mobile-menu__overlay { opacity: 1; }
.mobile-menu__panel { position: absolute; top: 0; left: 0; bottom: 0; width: min(360px, 85%); background: var(--color-white); transform: translateX(-100%); transition: transform var(--transition); padding: 1.25rem; overflow-y: auto; }
.mobile-menu.is-open .mobile-menu__panel { transform: translateX(0); }
.mobile-menu__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
.mobile-menu__close { width: auto; height: auto; padding: 0; background: transparent; border: 0; font-size: 1.5rem; line-height: 1; color: var(--color-black); }
.mobile-menu__nav a, .accordion__trigger, .accordion__link { display: block; width: 100%; padding: 1rem 0; font-size: 1.25rem; font-weight: 400; letter-spacing: 0.02em; text-transform: uppercase; text-align: left; background: transparent; border: 0; border-bottom: 1px solid var(--color-medium-grey); color: inherit; }
.accordion__trigger { display: flex; justify-content: space-between; align-items: center; }
.accordion__panel[hidden] { display: none; }
.accordion__panel a { font-size: 1rem; color: var(--color-dark-grey); padding-left: 1rem; }
.hero { position: relative; padding-top: 0; }
.hero__slider { position: relative; width: 100%; height: calc(100vh - var(--announcement-height)); min-height: 600px; overflow: hidden; }
.hero__slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.6s ease; }
.hero__slide.is-active { opacity: 1; z-index: 1; }
.hero__slide::before { content: ''; position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%); pointer-events: none; }
.hero__media { position: absolute; inset: 0; }
.hero__media img { width: 100%; height: 100%; object-fit: cover; }
.hero__content { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: 1.5rem; color: var(--color-white); }
@media (min-width: 768px) { .hero__content { padding: 3rem; } }
.hero__kicker { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 0.5rem; opacity: 0.85; }
.hero__title { font-size: 1.6rem; font-weight: 400; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1.1; margin-bottom: 0.75rem; }
@media (min-width: 768px) { .hero__title { font-size: 2.6rem; } }
.hero__sub { font-size: 0.95rem; font-weight: 300; line-height: 1.5; margin-bottom: 1rem; max-width: 420px; opacity: 0.9; }
.hero__cta { font-size: 0.85rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-white); }
.hero__pagination { position: absolute; right: 1.5rem; bottom: 1.5rem; z-index: 5; display: flex; gap: 0.5rem; }
.hero__dot { width: 8px; height: 8px; padding: 0; border: 0; background: rgba(255, 255, 255, 0.45); transition: background var(--transition); cursor: pointer; }
.hero__dot.is-active { background: var(--color-white); }
.editorial { text-align: center; max-width: 780px; margin-inline: auto; }
.editorial h2 { font-size: 1.6rem; margin-bottom: 1rem; }
@media (min-width: 768px) { .editorial h2 { font-size: 2.6rem; } }
.editorial p { font-size: 1rem; font-weight: 300; color: var(--color-dark-grey); max-width: 560px; margin-inline: auto; }
.category-tiles { padding: 0; overflow: hidden; }
.category-tiles__track { display: flex; width: max-content; animation: category-marquee 28s linear infinite; }
.category-tiles__track:hover { animation-play-state: paused; }
@keyframes category-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .category-tiles__track { animation: none; } }
.category-tile { position: relative; display: block; flex: 0 0 auto; width: 50vw; aspect-ratio: 3 / 4; overflow: hidden; }
@media (min-width: 768px) { .category-tile { width: 28vw; max-width: 360px; } }
.category-tile img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.45s ease; }
.category-tile:hover img { transform: scale(1.04); }
.category-tile__label { position: absolute; bottom: 1rem; left: 1rem; z-index: 2; font-size: 0.95rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-white); text-shadow: 0 1px 4px rgba(0, 0, 0, 0.35); transition: opacity var(--transition); }
.category-tile:hover .category-tile__label { opacity: 0; }
.category-tile__overlay { position: absolute; inset: 0; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; padding: 1.5rem; text-align: center; background: rgba(0, 0, 0, 0.45); color: var(--color-white); opacity: 0; transition: opacity var(--transition); pointer-events: none; }
.category-tile:hover .category-tile__overlay { opacity: 1; }
.category-tile__desc { font-size: 0.95rem; font-weight: 300; line-height: 1.5; max-width: 240px; }
.category-tile__cta { display: inline-block; padding: 0.65rem 1.35rem; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-black); background: var(--color-white); border: 1px solid var(--color-white); transition: background var(--transition), color var(--transition); pointer-events: auto; }
.category-tile__cta:hover { background: transparent; color: var(--color-white); }
.featured-split { display: grid; gap: 0; overflow: hidden; margin-top: calc(var(--gutter-lg) * 2); }
@media (min-width: 768px) { .featured-split { grid-template-columns: 1fr 1fr; min-height: 80vh; } }
.featured-split__media { position: relative; min-height: 50vh; }
.featured-split__media > img { width: 100%; height: 100%; object-fit: cover; }
.featured-split__content { background: #f3efe9; padding: var(--section-py) var(--gutter); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.featured-split__content .section-title { font-size: clamp(1.8rem, 4vw, 3rem); margin-bottom: 1.5rem; }
.featured-split__content > p { color: var(--color-dark-grey); max-width: 420px; margin-bottom: 1.75rem; }
.featured-split__portrait { width: 100%; max-width: 280px; margin-bottom: 1.5rem; overflow: hidden; }
.featured-split__portrait img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.featured-split__cta { display: inline-block; padding-bottom: 4px; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-black); border-bottom: 1px solid var(--color-black); transition: opacity var(--transition); }
.featured-split__cta:hover { opacity: 0.6; }
.product-card { background: var(--color-white); overflow: hidden; cursor: pointer; transition: transform var(--transition); }
.product-card:hover { transform: translateY(-3px); }
.product-card__images { position: relative; display: block; overflow: hidden; }
.product-card__img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.product-card__img--secondary { position: absolute; inset: 0; opacity: 0; transition: opacity var(--transition); }
@media (hover: hover) and (pointer: fine) { .product-card:hover .product-card__img--secondary { opacity: 1; } .product-card:hover .product-card__img--primary { opacity: 0; } }
.product-card__meta { padding: 1rem; }
.product-card__meta h3 { font-size: 0.9rem; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; margin-bottom: 0.25rem; }
.product-card__meta p { font-size: 0.9rem; color: var(--color-dark-grey); }
.showcase { background: var(--color-white); }
.showcase__header { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
.showcase__header .section-title { margin-bottom: 0.5rem; }
.showcase__header p { max-width: 620px; color: var(--color-dark-grey); font-weight: 300; }
.showcase__cta { align-self: flex-start; font-size: 0.85rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap; border-bottom: 1px solid var(--color-black); padding-bottom: 2px; }
@media (min-width: 768px) { .showcase__header { flex-direction: row; align-items: flex-start; justify-content: space-between; margin-bottom: 2rem; } .showcase__cta { align-self: flex-start; margin-top: 0.5rem; } }
.showcase__slider { margin-inline: calc(-1 * var(--gutter)); padding-inline: var(--gutter); overflow: hidden; }
.showcase__grid { display: flex; flex-wrap: nowrap; gap: 1rem; overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; }
.showcase__grid::-webkit-scrollbar { display: none; }
@media (min-width: 768px) { .showcase__grid { gap: 1.25rem; } }
.showcase-card { flex: 0 0 50%; padding-inline: 0.5rem; cursor: pointer; transition: transform var(--transition); }
@media (min-width: 768px) { .showcase-card { flex: 0 0 25%; padding-inline: 0.625rem; } }
.showcase-card:hover { transform: translateY(-3px); }
.showcase-card__media { position: relative; overflow: hidden; background: #f0f0f2; }
.showcase-card__media img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; transition: transform var(--transition); }
.showcase-card:hover .showcase-card__media img { transform: scale(1.03); }
.showcase-card__meta { padding: 0.75rem 0 0; }
.showcase-card__meta h3 { font-size: 0.9rem; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; margin-bottom: 0.25rem; }
.showcase-card__meta p { font-size: 0.9rem; color: var(--color-dark-grey); }
.showcase-card__colors { display: flex; flex-wrap: wrap; gap: 0.375rem; margin-top: 0.5rem; }
.showcase-card__color { width: 16px; height: 16px; border: 1px solid var(--color-medium-grey); border-radius: 50%; }
.showcase__controls { display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem; }
.showcase__arrow { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--color-black); border-radius: 50%; background: var(--color-white); color: var(--color-black); font-size: 1rem; transition: background var(--transition), color var(--transition); }
.showcase__arrow:hover { background: var(--color-black); color: var(--color-white); }
.journey-blocks__head { text-align: center; margin-bottom: 1.5rem; }
.journey-blocks__grid { display: grid; gap: var(--gutter); }
@media (min-width: 768px) { .journey-blocks__grid { grid-template-columns: repeat(3, 1fr); } }
.journey-block { background: var(--color-white); overflow: hidden; display: flex; flex-direction: column-reverse; }
.journey-block__media { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; }
.journey-block__media img { width: 100%; height: 100%; object-fit: cover; }
.journey-block__content { padding: 1.5rem; }
.journey-block__badge { display: inline-block; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-dark-grey); margin-bottom: 0.5rem; }
.journey-block__content h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
.journey-block__content p { font-size: 0.95rem; font-weight: 300; color: var(--color-dark-grey); margin-bottom: 1rem; }
.journey-block__link { font-size: 0.85rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-black); }
.newsletter { border-top: 1px solid var(--color-medium-grey); border-bottom: 1px solid var(--color-medium-grey); }
.newsletter__inner { display: flex; flex-direction: column; align-items: flex-start; gap: 1.5rem; padding: var(--section-py) var(--gutter); }
@media (min-width: 768px) { .newsletter__inner { flex-direction: row; align-items: center; justify-content: space-between; gap: 2rem; } }
.newsletter__text { max-width: 620px; }
.newsletter__text .eyebrow { margin-bottom: 0.75rem; }
.newsletter__text h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); text-transform: none; letter-spacing: -0.01em; line-height: 1.15; margin-bottom: 0; }
.newsletter__cta { flex: 0 0 auto; min-width: 160px; padding: 0.85rem 2rem; font-size: 0.85rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; text-align: center; background: var(--color-white); color: var(--color-black); border: 1px solid var(--color-black); transition: background var(--transition), color var(--transition); }
.newsletter__cta:hover { background: var(--color-black); color: var(--color-white); }
.newsletter__form-wrapper { background: var(--color-grey); padding: 1.5rem var(--gutter); }
.newsletter__form-wrapper[hidden] { display: none; }
.newsletter__form { display: flex; flex-direction: column; gap: 0.75rem; max-width: 480px; }
@media (min-width: 640px) { .newsletter__form { flex-direction: row; } }
.newsletter__input { flex: 1; padding: 0.85rem 1rem; font-size: 1rem; font-family: inherit; border: 1px solid var(--color-medium-grey); background: var(--color-white); }
.form-note { min-height: 1.5rem; font-size: 0.875rem; margin: 0.75rem 0 0; }
.footer { background: var(--color-white); color: var(--color-black); padding: 2rem var(--gutter) 1.5rem; }
.footer__shipping { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2.5rem; }
.footer__label, .footer__region { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; }
.footer__region { background: transparent; border: 0; border-bottom: 1px solid var(--color-black); padding-bottom: 2px; }
.footer__grid { display: grid; gap: 2.5rem; margin-bottom: 3rem; }
@media (min-width: 768px) { .footer__grid { grid-template-columns: 1.5fr 1fr 1fr; } }
.footer__menu ul { list-style: none; margin: 0; padding: 0; }
.footer__menu li { margin-bottom: 0.75rem; }
.footer__menu a { font-size: 0.95rem; color: var(--color-black); transition: opacity var(--transition); }
.footer__menu a:hover { opacity: 0.6; }
.footer__menu h3 { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 1.25rem; }
.footer__menu--large a { font-size: 1.5rem; font-weight: 400; letter-spacing: -0.01em; text-transform: none; line-height: 1.3; }
.footer__legal { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; border-top: 1px solid var(--color-medium-grey); padding-top: 1.5rem; }
@media (min-width: 768px) { .footer__legal { flex-direction: row; justify-content: space-between; align-items: center; } }
.footer__legal p { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-black); margin: 0; }
.footer__legal-links, .footer__socials { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem; list-style: none; margin: 0; padding: 0; }
.footer__legal-links a, .footer__socials a { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-black); transition: opacity var(--transition); }
.footer__legal-links a:hover, .footer__socials a:hover { opacity: 0.6; }
.cart-drawer { position: fixed; inset: 0; z-index: 200; pointer-events: none; }
.cart-drawer[hidden] { display: none; }
.cart-drawer.is-open { pointer-events: auto; }
.cart-drawer__overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.2); opacity: 0; transition: opacity var(--transition); }
.cart-drawer.is-open .cart-drawer__overlay { opacity: 1; }
.cart-drawer__panel { position: absolute; top: 0; right: 0; bottom: 0; width: min(420px, 100%); background: var(--color-white); box-shadow: -4px 0 24px rgba(0, 0, 0, 0.08); transform: translateX(100%); transition: transform var(--transition-slow); display: flex; flex-direction: column; }
.cart-drawer.is-open .cart-drawer__panel { transform: translateX(0); }
.cart-drawer__header { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem; border-bottom: 1px solid var(--color-medium-grey); }
.cart-drawer__header h2 { font-size: 1rem; text-transform: uppercase; }
.cart-drawer__close { background: transparent; border: 0; font-size: 1.5rem; line-height: 1; }
.cart-list { flex: 1; overflow-y: auto; padding: 1.25rem; }
.cart-empty { padding: 2rem 1.25rem; text-align: center; color: var(--color-dark-grey); }
.cart-item { display: grid; grid-template-columns: 4rem 1fr auto; gap: 1rem; padding: 1.25rem 0; border-bottom: 1px solid var(--color-medium-grey); align-items: center; }
.cart-item img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.cart-item__info { display: flex; flex-direction: column; gap: 0.25rem; }
.cart-item__name { font-size: 0.9rem; font-weight: 500; }
.cart-item__meta { font-size: 0.8rem; color: var(--color-dark-grey); }
.cart-item__qty { display: flex; align-items: center; gap: 0.75rem; margin-top: 0.25rem; }
.qty-btn { width: 20px; height: 20px; border: 1px solid var(--color-medium-grey); background: transparent; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }
.cart-item__remove { background: transparent; border: 0; font-size: 1.25rem; color: var(--color-dark-grey); align-self: center; }
.cart-total { display: flex; justify-content: space-between; padding: 1.25rem; border-top: 1px solid var(--color-medium-grey); font-weight: 700; font-size: 1.1rem; text-transform: uppercase; }
.mobile-menu { position: fixed; inset: 0; z-index: 110; pointer-events: none; }
.mobile-menu[hidden] { display: none; }
.mobile-menu.is-open { pointer-events: auto; }
.mobile-menu__overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.2); opacity: 0; transition: opacity var(--transition); }
.mobile-menu.is-open .mobile-menu__overlay { opacity: 1; }
.mobile-menu__panel { position: absolute; top: 0; left: 0; bottom: 0; width: min(360px, 85%); background: var(--color-white); transform: translateX(-100%); transition: transform var(--transition); padding: 1.25rem; overflow-y: auto; }
.mobile-menu.is-open .mobile-menu__panel { transform: translateX(0); }
.mobile-menu__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
.mobile-menu__close { background: transparent; border: 0; font-size: 1.5rem; }
.mobile-menu__nav a, .accordion__trigger, .accordion__link { display: block; width: 100%; padding: 1rem 0; font-size: 1.25rem; font-weight: 400; text-transform: uppercase; text-align: left; background: transparent; border: 0; border-bottom: 1px solid var(--color-medium-grey); }
.accordion__trigger { display: flex; justify-content: space-between; align-items: center; }
.accordion__panel[hidden] { display: none; }
.accordion__panel a { font-size: 1rem; color: var(--color-dark-grey); padding-left: 1rem; }
.modal { position: fixed; inset: 0; z-index: 300; display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
.modal[hidden] { display: none; }
.modal-backdrop { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4); }
.modal-panel { position: relative; z-index: 2; background: var(--color-white); width: 100%; max-width: 680px; padding: 2rem; max-height: 90vh; overflow-y: auto; }
.modal-close { position: absolute; top: 1rem; right: 1rem; background: transparent; border: 0; font-size: 1.5rem; }
.modal-layout { display: grid; gap: 1.5rem; }
@media (min-width: 640px) { .modal-layout { grid-template-columns: 1fr 1fr; } }
.modal-layout img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.modal-info { display: flex; flex-direction: column; gap: 0.75rem; }
.modal-price { font-size: 1.25rem; font-weight: 700; color: var(--color-black); }
.size-options { border: 0; padding: 0; margin: 0; }
.size-options legend { font-size: 0.8rem; font-weight: 500; text-transform: uppercase; margin-bottom: 0.5rem; }
.sizes { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.size-option input { position: absolute; opacity: 0; }
.size-option label { display: block; border: 1px solid var(--color-medium-grey); padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 700; cursor: pointer; text-align: center; }
.size-option input:checked + label { background: var(--color-black); color: var(--color-white); border-color: var(--color-black); }
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity var(--transition-slow), transform var(--transition-slow); }
.fade-in.is-visible { opacity: 1; transform: translateY(0); }
```

## `script.js`
```js
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const products = [
  { id: 1, name: 'Cotton Tennis Sweater', price: 98, image1: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-1a.png?v=3', image2: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-1b.png?v=3', showcaseImage: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Showcase/luma-showcase-1.webp', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#f5f0e6', '#1a2744', '#8b9a6d'] },
  { id: 2, name: 'Pleated Linen Trouser', price: 128, image1: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-2a.png?v=3', image2: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-2b.png?v=3', showcaseImage: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Showcase/luma-showcase-2.webp', sizes: ['XS', 'S', 'M', 'L'], colors: ['#e8e0d5', '#3d4a3a', '#722f37'] },
  { id: 3, name: 'Cable Knit Vest', price: 110, image1: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-3a.png?v=3', image2: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-3b.png?v=3', showcaseImage: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Showcase/luma-showcase-3.webp', sizes: ['S', 'M', 'L', 'XL'], colors: ['#f4f1ea', '#2c3e50', '#a98c7b'] },
  { id: 4, name: 'Silk Club Bandana', price: 48, image1: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-4a.png?v=3', image2: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-4b.png?v=3', showcaseImage: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Showcase/luma-showcase-4.webp', sizes: ['One Size'], colors: ['#faf8f3', '#1f2d3d', '#6b7c4e', '#d4c5b5'] },
  { id: 5, name: 'Relaxed Knit Polo', price: 88, image1: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-5a.png?v=3', image2: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-5b.png?v=3', showcaseImage: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Showcase/luma-showcase-5.webp', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#efebe4', '#273043', '#556b2f'] },
  { id: 6, name: 'Vintage Cardigan', price: 145, image1: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-6a.png?v=3', image2: 'https://ecommerce-landing.pages.dev/generated-assets/luma/luma-product-6b.png?v=3', showcaseImage: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Luma/Showcase/luma-showcase-6.webp', sizes: ['S', 'M', 'L', 'XL'], colors: ['#f7f5ef', '#24344d', '#7a8450', '#c9b8a8'] }
];
const cart = [];
const formatPrice = (n) => '$' + n.toFixed(2);
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0), badge = $('#cart-badge');
  if (badge) { badge.textContent = count; badge.setAttribute('data-count', count); }
}
function addToCart(product, size) {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) existing.qty += 1; else cart.push({ id: product.id, name: product.name, price: product.price, image1: product.image1, size, qty: 1 });
  updateCartCount(); renderCart();
}
function removeFromCart(id, size) {
  const idx = cart.findIndex(i => i.id === id && i.size === size); if (idx > -1) cart.splice(idx, 1);
  updateCartCount(); renderCart();
}
function updateQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size); if (!item) return;
  item.qty += delta; if (item.qty <= 0) removeFromCart(id, size); else { updateCartCount(); renderCart(); }
}
const cartSubtotal = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);
function renderCart() {
  const drawer = $('#cart-drawer'); if (!drawer) return;
  const list = drawer.querySelector('.cart-list'), totalEl = drawer.querySelector('.cart-total__price'); if (!list) return;
  if (!cart.length) list.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
  else list.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}" data-size="${item.size}"><img src="${item.image1}" alt="${item.name}" loading="lazy">
      <div class="cart-item__info"><p class="cart-item__name">${item.name}</p><p class="cart-item__meta">${item.size} &middot; ${formatPrice(item.price)}</p>
        <div class="cart-item__qty"><button class="qty-btn qty-minus">-</button><span>${item.qty}</span><button class="qty-btn qty-plus">+</button></div>
      </div><button class="cart-item__remove">&times;</button>
    </div>`).join('');
  if (totalEl) totalEl.textContent = formatPrice(cartSubtotal());
  list.querySelectorAll('.qty-minus').forEach(b => b.addEventListener('click', () => { const el = b.closest('.cart-item'); updateQty(Number(el.dataset.id), el.dataset.size, -1); }));
  list.querySelectorAll('.qty-plus').forEach(b => b.addEventListener('click', () => { const el = b.closest('.cart-item'); updateQty(Number(el.dataset.id), el.dataset.size, 1); }));
  list.querySelectorAll('.cart-item__remove').forEach(b => b.addEventListener('click', () => { const el = b.closest('.cart-item'); removeFromCart(Number(el.dataset.id), el.dataset.size); }));
}
function lockScroll() { const sw = window.innerWidth - document.documentElement.clientWidth; document.body.style.overflow = 'hidden'; if (sw > 0) document.body.style.paddingRight = sw + 'px'; }
function unlockScroll() { document.body.style.overflow = ''; document.body.style.paddingRight = ''; }
function openCart() { const drawer = $('#cart-drawer'); if (!drawer) return; renderCart(); drawer.hidden = false; drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); const t = $('#cart-toggle'); if (t) t.setAttribute('aria-expanded', 'true'); lockScroll(); }
function closeCart() { const drawer = $('#cart-drawer'); if (!drawer) return; drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); setTimeout(() => { drawer.hidden = true; }, 300); const t = $('#cart-toggle'); if (t) t.setAttribute('aria-expanded', 'false'); unlockScroll(); }
function initCartDrawer() { const d = $('#cart-drawer'); if (!d) return; const o = d.querySelector('.cart-drawer__overlay'), c = d.querySelector('.cart-drawer__close'); if (o) o.addEventListener('click', closeCart); if (c) c.addEventListener('click', closeCart); const t = $('#cart-toggle'); if (t) t.addEventListener('click', openCart); }
function openQuickView(product) {
  const modal = $('#quick-view'), mImg = $('#modal-img'), mTitle = $('#modal-title'), mPrice = $('#modal-price'), mDesc = $('#modal-desc'), mSizes = $('#modal-sizes'), addToBag = $('#add-to-bag'); if (!modal || !mImg || !mTitle || !mPrice || !mSizes || !addToBag) return;
  mImg.src = product.image1; mImg.alt = product.name; mTitle.textContent = product.name; mPrice.textContent = formatPrice(product.price); if (mDesc) mDesc.textContent = 'Premium cotton fabric with relaxed silhouette.';
  mSizes.innerHTML = product.sizes.map((s, i) => `<div class="size-option"><input type="radio" name="size" id="size-${s}" value="${s}" ${i === 0 ? 'checked' : ''}><label for="size-${s}">${s}</label></div>`).join('');
  addToBag.textContent = 'Add to Bag'; addToBag.disabled = false;
  addToBag.onclick = () => { const sel = mSizes.querySelector('input[name="size"]:checked'); addToCart(product, sel ? sel.value : product.sizes[0]); addToBag.textContent = 'Added'; addToBag.disabled = true; setTimeout(() => { addToBag.textContent = 'Add to Bag'; addToBag.disabled = false; }, 1200); };
  modal.hidden = false; lockScroll(); const c = modal.querySelector('.modal-close'); if (c) c.focus();
}
function closeQuickView() { const modal = $('#quick-view'); if (modal) modal.hidden = true; unlockScroll(); }
function initQuickView() {
  const modal = $('#quick-view'); if (modal) modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeQuickView(); });
}
function initAnnouncementBar() {
  const bar = $('.announcement-bar'); if (!bar) return; const msgs = $$('.announcement-bar__message', bar); if (msgs.length < 2) return;
  let idx = msgs.findIndex(m => m.classList.contains('is-active')); if (idx < 0) { idx = 0; msgs.forEach((m, i) => m.classList.toggle('is-active', i === 0)); }
  const interval = setInterval(() => { msgs[idx].classList.remove('is-active'); idx = (idx + 1) % msgs.length; msgs[idx].classList.add('is-active'); }, 4000);
  const close = $('#announcement-close'); if (close) close.addEventListener('click', () => { clearInterval(interval); bar.style.display = 'none'; });
}
function initHeaderScroll() {
  const header = $('.site-header'); if (!header) return; let lastY = window.scrollY, ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { const y = window.scrollY; header.classList.toggle('site-header--sticky', y > 20); if (y > lastY && y > 80) header.classList.add('site-header--hidden'); else header.classList.remove('site-header--hidden'); lastY = y; ticking = false; });
      ticking = true;
    }
  }, { passive: true });
}
function initHeroCarousel() {
  const hero = $('.hero'), slides = $$('.hero__slide'); if (!slides.length) return; let curr = 2;
  const pagination = $('.hero__pagination'), dots = $$('.hero__dot', pagination);
  slides.forEach((s, i) => { s.classList.remove('active'); s.classList.toggle('is-active', i === curr); });
  dots.forEach((d, i) => { d.classList.remove('active'); d.classList.toggle('is-active', i === curr); d.setAttribute('aria-selected', String(i === curr)); });
  const setSlide = (next) => { if (next === curr) return; slides[curr].classList.remove('is-active'); slides[next].classList.add('is-active'); if (dots[curr]) { dots[curr].classList.remove('is-active'); dots[curr].setAttribute('aria-selected', 'false'); } if (dots[next]) { dots[next].classList.add('is-active'); dots[next].setAttribute('aria-selected', 'true'); } curr = next; };
  let timer = null; const start = () => { if (!prefersReducedMotion) timer = setInterval(() => setSlide((curr + 1) % slides.length), 5000); };
  if (pagination) pagination.addEventListener('click', (e) => { const dot = e.target.closest('.hero__dot'); if (!dot) return; const idx = Number(dot.dataset.slide); if (!isNaN(idx)) { setSlide(idx); clearInterval(timer); start(); } });
  if (hero) { hero.addEventListener('mouseenter', () => clearInterval(timer)); hero.addEventListener('mouseleave', start); }
  start();
}
function initFadeIn() {
  const els = $$('.fade-in'); if (prefersReducedMotion) { els.forEach(el => el.classList.add('is-visible')); return; }
  const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}
function openMobileMenu() { const menu = $('#mobile-menu'), t = $('#nav-toggle'); if (menu) { menu.hidden = false; menu.classList.add('is-open'); menu.setAttribute('aria-hidden', 'false'); } if (t) t.setAttribute('aria-expanded', 'true'); lockScroll(); }
function closeMobileMenu() { const menu = $('#mobile-menu'), t = $('#nav-toggle'); if (menu) { menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); setTimeout(() => { menu.hidden = true; }, 300); } if (t) t.setAttribute('aria-expanded', 'false'); unlockScroll(); }
function initMobileMenu() {
  const toggle = $('#nav-toggle'); if (!toggle) return; toggle.addEventListener('click', () => { const menu = $('#mobile-menu'); menu && menu.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu(); });
  const menu = $('#mobile-menu'); if (menu) {
    const o = menu.querySelector('.mobile-menu__overlay'), c = menu.querySelector('.mobile-menu__close');
    if (o) o.addEventListener('click', closeMobileMenu); if (c) c.addEventListener('click', closeMobileMenu);
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
  }
  $$('.accordion__trigger').forEach(trigger => {
    const content = document.getElementById(trigger.getAttribute('aria-controls')); if (!content) return;
    trigger.addEventListener('click', () => { const exp = trigger.getAttribute('aria-expanded') === 'true'; trigger.setAttribute('aria-expanded', String(!exp)); content.hidden = exp; });
  });
}
function initNewsletter() {
  const toggle = $('#newsletter-toggle'), wrapper = $('#newsletter-form-wrapper'), form = $('#newsletter-form'), note = $('#form-note');
  if (toggle && wrapper) toggle.addEventListener('click', () => { const exp = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!exp)); wrapper.hidden = exp; if (!exp) setTimeout(() => wrapper.querySelector('input')?.focus(), 100); });
  if (form && note) form.addEventListener('submit', (e) => { e.preventDefault(); note.textContent = 'Thank you for subscribing to LUMA.'; form.reset(); if (wrapper) wrapper.hidden = true; if (toggle) toggle.setAttribute('aria-expanded', 'false'); });
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const d = $('#cart-drawer'); if (d && d.classList.contains('is-open')) closeCart(); const m = $('#mobile-menu'); if (m && m.classList.contains('is-open')) closeMobileMenu(); const q = $('#quick-view'); if (q && !q.hidden) closeQuickView(); } });
function initShowcase() {
  const container = $('#showcase-grid'); if (!container) return;
  container.addEventListener('click', (e) => { const card = e.target.closest('.showcase-card'); if (!card) return; const p = products.find(p => p.id === Number(card.dataset.id)); if (p) openQuickView(p); });
}
function initShowcaseSlider() {
  const grid = $('#showcase-grid'), prev = $('#showcase-prev'), next = $('#showcase-next'); if (!grid || !prev || !next) return;
  const getStep = () => { const card = grid.querySelector('.showcase-card'), gap = parseInt(getComputedStyle(grid).gap || '0', 10) || 0; return card ? card.offsetWidth + gap : grid.clientWidth; };
  prev.addEventListener('click', () => grid.scrollBy({ left: -getStep(), behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
  next.addEventListener('click', () => grid.scrollBy({ left: getStep(), behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
}
function initCategoryMarquee() {
  const track = $('#category-track'); if (!track) return;
  Array.from(track.children).forEach(tile => { const clone = tile.cloneNode(true); clone.removeAttribute('id'); track.appendChild(clone); });
}
function init() {
  renderShowcase(); initAnnouncementBar(); initHeaderScroll(); initHeroCarousel(); initFadeIn(); initMobileMenu(); initNewsletter(); initCartDrawer(); initQuickView(); initShowcase(); initShowcaseSlider(); initCategoryMarquee(); updateCartCount();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
- Main Background: `#FFFFFF`
- Announcement Bar: `#F6F6F8` (soft light grey)
- Action Borders / Lines: `#E6E6E6`
- Dark Grey Text: `#9D9D9D`
- Black Text/Accents: `#000000`

---

# IMAGES / ASSETS

- Base URL: `https://ecommerce-landing.pages.dev/generated-assets/luma/`

| Filename | URL | Description | Where Used |
|---|---|---|---|
| `luma-hero-1.png` | `luma-hero-1.png?v=3` | Couple in tennis sweaters beside vintage convertible | Hero slide 1 |
| `luma-hero-2.png` | `luma-hero-2.png?v=3` | Models in relaxed knit on terrace | Hero slide 2 |
| `luma-hero-3.png` | `luma-hero-3.png?v=3` | Couple walking in Italian garden | Hero slide 3 |
| `luma-showcase-1.png` | `luma-showcase-1.png?v=3` | Cotton Tennis Sweater | Showcase item 1 |
| `luma-showcase-2.png` | `luma-showcase-2.png?v=3` | Pleated Linen Trouser | Showcase item 2 |
| `luma-showcase-3.png?v=3` | `luma-showcase-3.png?v=3` | Cable Knit Vest | Showcase item 3 |
| `luma-showcase-4.png?v=3` | `luma-showcase-4.png?v=3` | Silk Club Bandana | Showcase item 4 |
| `luma-showcase-5.png?v=3` | `luma-showcase-5.png?v=3` | Relaxed Knit Polo | Showcase item 5 |
| `luma-showcase-6.png?v=3` | `luma-showcase-6.png?v=3` | Vintage Cardigan | Showcase item 6 |
| `luma-category-1.png` | `luma-category-1.png?v=3` | Tops category card | Category list tile 1 |
| `luma-category-2.png` | `luma-category-2.png?v=3` | Knitwear category card | Category list tile 2 / Featured small portrait |
| `luma-category-3.png` | `luma-category-3.png?v=3` | Bottoms category card | Category list tile 3 |
| `luma-category-4.png` | `luma-category-4.png?v=3` | Resort category card | Category list tile 4 |
| `luma-category-5.png` | `luma-category-5.png?v=3` | Jackets category card | Category list tile 5 |
| `luma-featured.png` | `luma-featured.png?v=3` | Model in cream knit and trousers | Featured Split Main media |
| `journal-1.png` | `journal-1.png` | Retro vintage car scene | Journal Card 1 |
| `journal-2.png` | `journal-2.png` | Terrace knit layers scene | Journal Card 2 |
| `journal-3.png` | `journal-3.png` | Italian garden walk scene | Journal Card 3 |

---

# TECH STACK

- **Type**: hand-written static
- **Dev Tool**: Vite (Vanilla configuration)
- **Styling**: Vanilla CSS (CSS custom variables, media queries)
- **Javascript**: Vanilla ES6 DOM selector bindings & IntersectionObserver callbacks
- **Fonts**: DM Sans loaded via Google Fonts
