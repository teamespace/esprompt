Create a static HTML + CSS + Vanilla JavaScript website for "Modex — Power to run. Freedom to build.", a modern developer-first AI infrastructure landing page. The page has these sections in order: Header (brand logo + "Modex" centered, nav links, and Action buttons: Star button + Get Started), Hero Section (featuring title "Power to run. Freedom to build.", prompt input mockup showing CLI command `npm install -g modex` with copy-to-clipboard button, primary & secondary CTAs, and a metrics stats grid), Trusted Brand Section (logo items for Vercel, Perplexity, Replit, MongoDB, Pinecone, Supabase, and LangChain), Feature Grid Section (4 developer feature cards, plus a "Why Developers Choose Modex" horizontal chain detailing 4 core cells with custom SVG icons), How It Works Section (3-step walkthrough timeline displaying Install, Choose a Model, and Run Anywhere, complete with in-line terminal command copy triggers), Terminal Mockup Section (split screen with descriptive copy on the left and a live terminal panel on the right rendering simulated CLI outputs and an absolute SVG world-map globe backdrop), and a site Footer (Newsletter subscribe form, social icons, product columns, and legal details). All interactive components include hover transitions, clipboard copying events, and terminal blinking animations.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **FILE ARCHITECTURE — NO FRAMEWORKS:** Build the project as a vanilla static website: `index.html` (markup), `styles.css` (verbatim styles), and `script.js` (verbatim state logic), dev-scaffolded with Vite. Do not use React or Tailwind.
2. **VERBATIM COPYING:** Copy the stylesheet `styles.css` and logic `script.js` provided below exactly as written.
3. **FONTS:** Load Geist (weights 400, 500, 600, 700) and Geist Mono (weights 400, 500) via Google Fonts `<link>` in `index.html`.
4. **SELF-CONTAINED VISUALS — HERO IMAGE MUST BE LOCAL:** Download the hero background PNG once into `public/hero.png` before running the site:
   ```
   curl.exe -L -o public/hero.png "https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Modex/Hero/Hero"
   ```
   Verify the file exists and is ~1,853,083 bytes. The source server serves this PNG at an extensionless URL **without a Content-Type header**, so most browsers (strict MIME sniffing) refuse to paint it as a background — never reference the remote URL directly in CSS. The stylesheet must reference the local copy: `url("hero.png")` (Vite serves `public/` at the site root, in both dev and build). Other visuals use inline SVGs.
5. **INTERACTIVE FEATURES & TRANSITIONS:**
   - **Terminal Copy Action**: Clicking `.copy` triggers clipboard API copy on `.cmd-text` and replaces the icon with a checkmark.
   - **Blinking Cursor**: Blinks infinitely inside the terminal panel using `@keyframes blink`.

---

# FONTS

Import Geist and Geist Mono via Google Fonts `<link>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

## `package.json`
```json
{
  "name": "modex-website",
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
  <meta charset="utf-8"><meta name="viewport" content="width=1280">
  <title>Modex — Power to run. Freedom to build.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <symbol id="modex-m" viewBox="0 0 32 32"><path d="M3 27 L3 5 L8 5 L16 18 L24 5 L29 5 L29 27 L24 27 L24 13 L18 22 L14 22 L8 13 L8 27 Z" fill="url(#mGrad)"></path><linearGradient id="mGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#5aa0ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient></symbol>
      <symbol id="i-terminal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 10l3 2-3 2M13 14h4"></path></symbol>
      <symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M13 2 L4 14 H11 L9 22 L20 9 H13 Z"></path></symbol>
      <symbol id="i-cube" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z"></path><path d="M3 7 L12 12 L21 7"></path><path d="M12 12 V22"></path></symbol>
      <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11 V8 a4 4 0 0 1 8 0 V11"></path></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M12 2 L20 5 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V5 Z"></path></symbol>
      <symbol id="i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15 V5 a2 2 0 0 1 2 -2 H15"></path></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M5 12 H19 M13 6 L19 12 L13 18"></path></symbol>
      <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.6 8.6 L21.6 9.2 L16.3 13.9 L17.9 20.8 L12 17.2 L6.1 20.8 L7.7 13.9 L2.4 9.2 L9.4 8.6 Z"></path></symbol>
      <symbol id="b-vercel" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 L22 21 H2 Z"></path></symbol>
      <symbol id="b-perp" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"></circle><path d="M12 3 V21 M3 12 H21 M6 6 L18 18 M18 6 L6 18" stroke-width="1"></path></symbol>
      <symbol id="b-replit" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="9" height="6" rx="1.5"></rect><rect x="3" y="11" width="9" height="6" rx="1.5"></rect><rect x="13" y="11" width="9" height="6" rx="1.5"></rect></symbol>
      <symbol id="b-mongo" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 C8 8 8 16 12 22 C16 16 16 8 12 2 Z"></path><path d="M12 22 V14" stroke="#050912" stroke-width="1"></path></symbol>
      <symbol id="b-pine" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"></circle><path d="M12 3 V21 M5.5 6.5 L18.5 17.5 M18.5 6.5 L5.5 17.5"></path></symbol>
      <symbol id="b-supa" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2 L3 13 H11 V22 L21 11 H13 V2 Z"></path></symbol>
      <symbol id="b-lang" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M8 12 a4 4 0 0 1 4 -4 h2"></path><path d="M16 12 a4 4 0 0 1 -4 4 h-2"></path><path d="M8 12 a4 4 0 0 0 4 4"></path><path d="M16 12 a4 4 0 0 0 -4 -4"></path></symbol>
      <symbol id="s-github" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"></path></symbol>
      <symbol id="s-discord" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5.3A17 17 0 0 0 16 4l-.2.3a13 13 0 0 0-7.6 0L8 4a17 17 0 0 0-4 1.3C1.5 9 .8 12.6 1.2 16a17 17 0 0 0 5 2.4c.4-.5.7-1 1-1.5-.5-.2-1-.5-1.5-.8l.4-.3a12 12 0 0 0 11 0l.4.3-1.5.8c.3.5.6 1 1 1.5a17 17 0 0 0 5-2.4c.5-3.5-.3-7.1-2.8-10.7zM8.5 14c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2zm7 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2z"></path></symbol>
      <symbol id="s-twitter" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 3H21l-6.5 7.4L22 21h-6l-4.7-6.1L5.9 21H3.2l7-7.9L2.5 3h6.1l4.2 5.6L18.3 3zm-1 16h1.6L7 4.8H5.3L17.3 19z"></path></symbol>
      <symbol id="s-linkedin" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zM10 9.5h3.8v1.6h.05c.53-1 1.8-2.05 3.7-2.05 3.95 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.36-2 2.76V21H10V9.5z"></path></symbol>
    </defs>
  </svg>
  <header class="wrap">
    <nav class="top">
      <div class="brand"><span class="logo"><svg width="26" height="26"><use href="#modex-m"></use></svg></span><span>Modex</span></div>
      <div class="nav-links"><a href="#">Models</a><a href="#">Docs</a><a href="#">Pricing</a><a href="#">Enterprise</a><a href="#">Changelog</a></div>
      <div class="nav-right">
        <button class="star-btn"><svg width="13" height="13" style="color:#cfd9ef"><use href="#i-star"></use></svg><span>Star</span><span class="sep"></span><span class="count">25.6k</span></button>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </nav>
  </header>
  <section class="hero-wrap">
    <div class="hero-bg"></div>
    <div class="wrap hero">
      <div class="hero-grid">
        <div>
          <div class="eyebrow">OPEN SOURCE <span class="dot"></span> DEV FIRST</div>
          <h1 class="title">Power to run.<br>Freedom to build.</h1>
          <p class="lede">Modex gives you the infrastructure to run open models anywhere—without limits.</p>
          <div class="cmd mono"><span class="prompt">$</span><span class="cmd-text">npm install -g modex</span><span class="copy"><svg width="15" height="15"><use href="#i-copy"></use></svg></span></div>
          <div class="cta-row"><button class="btn btn-primary-lg">Get Started <svg width="14" height="14"><use href="#i-arrow"></use></svg></button><button class="btn btn-ghost">Explore Models</button></div>
          <div class="stats">
            <div class="stat"><div class="n">150K+</div><div class="l">Developers</div></div>
            <div class="stat"><div class="n">12K+</div><div class="l">Organizations</div></div>
            <div class="stat"><div class="n">1.2M+</div><div class="l">Models Run</div></div>
            <div class="stat"><div class="n">99.99%</div><div class="l">Uptime</div></div>
            <div class="stat"><div class="n">50+</div><div class="l">Regions</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <main class="wrap">
    <section class="trusted">
      <div class="trusted-label">TRUSTED BY DEVELOPERS AT</div>
      <div class="logo-row">
        <div class="logo-item"><svg width="20" height="20"><use href="#b-vercel"></use></svg> Vercel</div>
        <div class="logo-item"><svg width="20" height="20"><use href="#b-perp"></use></svg> Perplexity</div>
        <div class="logo-item"><svg width="20" height="20"><use href="#b-replit"></use></svg> Replit</div>
        <div class="logo-item"><svg width="20" height="20"><use href="#b-mongo"></use></svg> MongoDB</div>
        <div class="logo-item"><svg width="20" height="20"><use href="#b-pine"></use></svg> Pinecone</div>
        <div class="logo-item"><svg width="20" height="20"><use href="#b-supa"></use></svg> Supabase</div>
        <div class="logo-item"><svg width="20" height="20"><use href="#b-lang"></use></svg> LangChain</div>
      </div>
    </section>
    <section class="features">
      <div class="card-grid">
        <div class="card"><div class="icon-tile"><svg width="20" height="20"><use href="#i-terminal"></use></svg></div><h3>Run Anywhere</h3><p>Run models on your machine, on-prem, or in the cloud. One CLI. Any environment.</p><a class="learn">Learn more <svg width="12" height="12"><use href="#i-arrow"></use></svg></a></div>
        <div class="card"><div class="icon-tile"><svg width="20" height="20"><use href="#i-bolt"></use></svg></div><h3>Blazing Fast</h3><p>Optimized runtimes, GPU acceleration, and smart scheduling for low latency.</p><a class="learn">Learn more <svg width="12" height="12"><use href="#i-arrow"></use></svg></a></div>
        <div class="card"><div class="icon-tile"><svg width="20" height="20"><use href="#i-cube"></use></svg></div><h3>Open &amp; Flexible</h3><p>100% open-source. Use any model, any format, any inference engine.</p><a class="learn">Learn more <svg width="12" height="12"><use href="#i-arrow"></use></svg></a></div>
        <div class="card"><div class="icon-tile"><svg width="20" height="20"><use href="#i-lock"></use></svg></div><h3>Private by Default</h3><p>Your data stays yours. Secure, isolated, and built for production.</p><a class="learn">Learn more <svg width="12" height="12"><use href="#i-arrow"></use></svg></a></div>
      </div>
      <div class="why">
        <div class="why-head">WHY DEVELOPERS CHOOSE MODEX</div>
        <div class="why-row">
          <div class="why-line"></div><div class="why-dot" style="left:12.5%"></div><div class="why-dot" style="left:37.5%"></div><div class="why-dot" style="left:62.5%"></div><div class="why-dot" style="left:87.5%"></div>
          <div class="why-cell"><div class="why-icon-wrap"><svg width="56" height="56" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="gB1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient></defs><path d="M32 6 L54 17 V46 L32 58 L10 46 V17 Z" stroke="url(#gB1)" stroke-width="1.5" fill="rgba(47,123,255,0.10)"></path><path d="M10 17 L32 28 L54 17 M32 28 V58" stroke="url(#gB1)" stroke-width="1.2" opacity=".6"></path><circle cx="32" cy="32" r="6" fill="#7fb4ff" opacity=".7"></circle></svg></div><h4>Developer First</h4><p>Designed by developers, for developers.</p></div>
          <div class="why-cell"><div class="why-icon-wrap"><svg width="56" height="56" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="gB2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient></defs><path d="M36 6 L14 36 H30 L26 58 L50 26 H34 Z" stroke="url(#gB2)" stroke-width="1.6" fill="rgba(47,123,255,0.10)" stroke-linejoin="round"></path></svg></div><h4>High Performance</h4><p>Optimized runtimes and GPU acceleration.</p></div>
          <div class="why-cell"><div class="why-icon-wrap"><svg width="64" height="64" viewBox="0 0 72 72" fill="none"><defs><linearGradient id="gB3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient></defs><g stroke="url(#gB3)" stroke-width="1.3"><circle cx="36" cy="36" r="10" fill="rgba(47,123,255,.18)"></circle><circle cx="36" cy="10" r="4" fill="rgba(47,123,255,.25)"></circle><circle cx="36" cy="62" r="4" fill="rgba(47,123,255,.25)"></circle><circle cx="12" cy="22" r="4" fill="rgba(47,123,255,.25)"></circle><circle cx="60" cy="22" r="4" fill="rgba(47,123,255,.25)"></circle><circle cx="12" cy="50" r="4" fill="rgba(47,123,255,.25)"></circle><circle cx="60" cy="50" r="4" fill="rgba(47,123,255,.25)"></circle><path d="M36 14 V26 M36 46 V58 M16 24 L29 31 M56 24 L43 31 M16 48 L29 41 M56 48 L43 41"></path></g></svg></div><h4>Open Ecosystem</h4><p>100% open-source with active community.</p></div>
          <div class="why-cell"><div class="why-icon-wrap"><svg width="56" height="56" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="gB4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient></defs><path d="M32 6 L52 12 V32 C52 46 42 56 32 60 C22 56 12 46 12 32 V12 Z" stroke="url(#gB4)" stroke-width="1.6" fill="rgba(47,123,255,0.10)"></path><path d="M22 32 L29 39 L43 25" stroke="url(#gB4)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4>Enterprise Ready</h4><p>Secure, reliable, and built for scale.</p></div>
        </div>
      </div>
    </section>
    <section class="how">
      <div class="how-eyebrow">HOW IT WORKS</div><h2>From local to limitless in 3 steps</h2>
      <div class="how-row">
        <div class="how-line"></div><div class="how-dot" style="left:16.7%"></div><div class="how-dot" style="left:50%"></div><div class="how-dot" style="left:83.3%"></div>
        <div class="step">
          <div class="step-illu"><svg viewBox="0 0 220 200" width="220" height="180"><defs><linearGradient id="iso1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient><radialGradient id="ring1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2f7bff" stop-opacity=".55"></stop><stop offset="100%" stop-color="#2f7bff" stop-opacity="0"></stop></radialGradient></defs><ellipse cx="110" cy="158" rx="78" ry="22" fill="url(#ring1)"></ellipse><ellipse cx="110" cy="158" rx="78" ry="22" stroke="#3b7ed8" stroke-width=".8" fill="none" opacity=".5"></ellipse><ellipse cx="110" cy="158" rx="56" ry="14" stroke="#3b7ed8" stroke-width=".8" fill="none" opacity=".8"></ellipse><g stroke="url(#iso1)" fill="none" stroke-width="1.3" stroke-linejoin="round"><path d="M110 50 L160 80 L160 130 L110 160 L60 130 L60 80 Z" fill="rgba(47,123,255,.10)"></path><path d="M60 80 L110 110 L160 80 M110 110 L110 160"></path><g opacity=".5" stroke-width=".7"><path d="M75 89 L125 119 M90 98 L140 128 M105 107 L155 137"></path><path d="M85 80 L135 110 M70 88 L120 118"></path></g></g><circle cx="110" cy="106" r="10" fill="#7fb4ff" opacity=".7"></circle><g fill="#9bbeff" opacity=".7"><circle cx="30" cy="40" r="1"></circle><circle cx="190" cy="50" r="1"></circle><circle cx="200" cy="120" r="1"></circle><circle cx="20" cy="120" r="1"></circle></g></svg></div>
          <div class="step-meta"><span class="step-num mono">01</span><span class="step-title">Install</span></div><p class="step-desc">Install Modex CLI<br>in seconds.</p>
          <div class="step-cmd mono"><span class="cmd-text">npm install -g modex</span><span class="copy"><svg width="14" height="14"><use href="#i-copy"></use></svg></span></div>
        </div>
        <div class="step">
          <div class="step-illu"><svg viewBox="0 0 220 200" width="220" height="180"><defs><linearGradient id="iso2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient><radialGradient id="ring2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2f7bff" stop-opacity=".55"></stop><stop offset="100%" stop-color="#2f7bff" stop-opacity="0"></stop></radialGradient></defs><ellipse cx="110" cy="158" rx="78" ry="22" fill="url(#ring2)"></ellipse><ellipse cx="110" cy="158" rx="78" ry="22" stroke="#3b7ed8" stroke-width=".8" fill="none" opacity=".5"></ellipse><ellipse cx="110" cy="158" rx="56" ry="14" stroke="#3b7ed8" stroke-width=".8" fill="none" opacity=".8"></ellipse><g stroke="url(#iso2)" fill="none" stroke-width="1.3" stroke-linejoin="round"><path d="M110 40 L165 70 L165 130 L110 160 L55 130 L55 70 Z" fill="rgba(47,123,255,.10)"></path><path d="M55 70 L110 100 L165 70 M110 100 L110 160"></path></g><g stroke="url(#iso2)" fill="rgba(127,180,255,.4)" stroke-width="1"><path d="M110 80 L132 92 L132 118 L110 130 L88 118 L88 92 Z"></path><path d="M88 92 L110 104 L132 92 M110 104 L110 130"></path></g><circle cx="110" cy="100" r="12" fill="#7fb4ff" opacity=".8"></circle><circle cx="110" cy="100" r="22" fill="#2f7bff" opacity=".18"></circle><g fill="#9bbeff" opacity=".7"><circle cx="200" cy="40" r="1"></circle><circle cx="20" cy="60" r="1"></circle><circle cx="190" cy="130" r="1"></circle></g></svg></div>
          <div class="step-meta"><span class="step-num mono">02</span><span class="step-title">Choose a Model</span></div><p class="step-desc">Pull any open model<br>with one command.</p>
          <div class="step-cmd mono"><span class="cmd-text">modex pull llama3:70b</span><span class="copy"><svg width="14" height="14"><use href="#i-copy"></use></svg></span></div>
        </div>
        <div class="step">
          <div class="step-illu"><svg viewBox="0 0 220 200" width="220" height="180"><defs><linearGradient id="iso3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7fb4ff"></stop><stop offset="100%" stop-color="#1f6bff"></stop></linearGradient><radialGradient id="ring3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2f7bff" stop-opacity=".55"></stop><stop offset="100%" stop-color="#2f7bff" stop-opacity="0"></stop></radialGradient></defs><ellipse cx="110" cy="170" rx="88" ry="22" fill="url(#ring3)"></ellipse><ellipse cx="110" cy="170" rx="88" ry="22" stroke="#3b7ed8" stroke-width=".8" fill="none" opacity=".5"></ellipse><g stroke="url(#iso3)" fill="rgba(47,123,255,.15)" stroke-width="1.1" stroke-linejoin="round"><path d="M70 130 L100 145 L70 160 L40 145 Z"></path><path d="M40 145 L40 160 L70 175 L70 160 M70 160 L100 145 L100 160 L70 175" fill="rgba(47,123,255,.25)"></path><path d="M150 130 L180 145 L150 160 L120 145 Z"></path><path d="M120 145 L120 160 L150 175 L150 160 M150 160 L180 145 L180 160 L150 175" fill="rgba(47,123,255,.25)"></path><path d="M110 110 L140 125 L110 140 L80 125 Z"></path><path d="M80 125 L80 140 L110 155 L110 140 M110 140 L140 125 L140 140 L110 155" fill="rgba(47,123,255,.25)"></path><path d="M110 60 L140 75 L110 90 L80 75 Z"></path><path d="M80 75 L80 90 L110 105 L110 90 M110 90 L140 75 L140 90 L110 105" fill="rgba(47,123,255,.35)"></path></g><g stroke="#5aa0ff" stroke-width=".8" opacity=".6"><path d="M110 95 L70 145 M110 95 L110 130 M110 95 L150 145"></path></g><circle cx="110" cy="80" r="8" fill="#7fb4ff" opacity=".9"></circle><g fill="#9bbeff" opacity=".7"><circle cx="20" cy="40" r="1"></circle><circle cx="200" cy="50" r="1"></circle><circle cx="200" cy="120" r="1"></circle></g></svg></div>
          <div class="step-meta"><span class="step-num mono">03</span><span class="step-title">Run Anywhere</span></div><p class="step-desc">Run locally or scale<br>to the cloud.</p>
          <div class="step-cmd mono"><span class="cmd-text">modex run llama3:70b</span><span class="copy"><svg width="14" height="14"><use href="#i-copy"></use></svg></span></div>
        </div>
      </div>
    </section>
    <section class="built">
      <div><div class="built-eyebrow">BUILT FOR DEVELOPERS</div><h2>Everything you need.<br>In your terminal.</h2><p>Manage models, runtimes, and deployments with a powerful CLI built for speed and control.</p><a class="docs-link">View CLI docs <svg width="14" height="14"><use href="#i-arrow"></use></svg></a></div>
      <div class="term">
        <div class="term-head"><span class="red"></span><span class="name mono">modex</span><span class="ver mono">v0.2.1</span></div>
        <svg class="globe-bg" viewBox="0 0 300 300" aria-hidden="true"><defs><radialGradient id="globeBg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1f6bff" stop-opacity=".25"></stop><stop offset="100%" stop-color="#1f6bff" stop-opacity="0"></stop></radialGradient></defs><circle cx="150" cy="150" r="135" fill="url(#globeBg)"></circle><circle cx="150" cy="150" r="118" fill="none" stroke="#2f7bff" stroke-width=".5" opacity=".5"></circle><g stroke="#2f7bff" stroke-width=".5" fill="none" opacity=".6"><ellipse cx="150" cy="150" rx="118" ry="40"></ellipse><ellipse cx="150" cy="150" rx="118" ry="80"></ellipse><ellipse cx="150" cy="150" rx="40" ry="118"></ellipse><ellipse cx="150" cy="150" rx="80" ry="118"></ellipse><path d="M32 150 H268 M150 32 V268"></path></g><g fill="#5aa0ff" opacity=".8"><circle cx="80" cy="100" r="1"></circle><circle cx="86" cy="110" r="1"></circle><circle cx="92" cy="120" r="1"></circle><circle cx="86" cy="130" r="1"></circle><circle cx="92" cy="140" r="1"></circle><circle cx="86" cy="150" r="1"></circle><circle cx="92" cy="160" r="1"></circle><circle cx="98" cy="170" r="1"></circle><circle cx="104" cy="180" r="1"></circle><circle cx="110" cy="190" r="1"></circle><circle cx="116" cy="200" r="1.2"></circle><circle cx="100" cy="110" r="1"></circle><circle cx="106" cy="120" r="1"></circle><circle cx="112" cy="130" r="1"></circle><circle cx="140" cy="100" r="1"></circle><circle cx="146" cy="110" r="1.2"></circle><circle cx="152" cy="120" r="1"></circle><circle cx="158" cy="130" r="1"></circle><circle cx="152" cy="140" r="1"></circle><circle cx="158" cy="150" r="1"></circle><circle cx="164" cy="160" r="1"></circle><circle cx="158" cy="170" r="1"></circle><circle cx="152" cy="180" r="1"></circle><circle cx="164" cy="120" r="1"></circle><circle cx="170" cy="130" r="1"></circle><circle cx="176" cy="140" r="1"></circle><circle cx="200" cy="110" r="1.2"></circle><circle cx="206" cy="120" r="1"></circle><circle cx="212" cy="130" r="1"></circle><circle cx="200" cy="120" r="1"></circle><circle cx="206" cy="130" r="1"></circle><circle cx="212" cy="140" r="1"></circle><circle cx="218" cy="150" r="1"></circle><circle cx="206" cy="150" r="1"></circle><circle cx="200" cy="160" r="1"></circle><circle cx="212" cy="160" r="1"></circle><circle cx="218" cy="180" r="1"></circle><circle cx="224" cy="186" r="1"></circle><circle cx="212" cy="186" r="1"></circle><circle cx="116" cy="200" r="2" fill="#a9caff"></circle><circle cx="200" cy="110" r="2" fill="#a9caff"></circle><circle cx="146" cy="110" r="2" fill="#a9caff"></circle></g></svg>
        <div class="term-body">
          <div class="row"><span class="dollar">$</span><span class="kw">modex</span> pull <span class="dim">llama3:70b</span></div><div class="row"><span class="ok">✓</span> Pulled <span>128.4 GB</span> in 48s</div><span class="ws"></span>
          <div class="row"><span class="dollar">$</span><span class="kw">modex</span> run <span class="dim">llama3:70b</span> --gpu</div><div class="row"><span class="ok">✓</span> Running on <span class="dim">NVIDIA A100</span></div><div class="row"><span class="ok">•</span> <span class="url">http://localhost:11434</span></div><span class="ws"></span>
          <div class="row"><span class="dollar">$</span><span class="kw">modex</span> ps</div><div class="row table-row table-head"><span>MODEL</span><span>STATUS</span><span>GPU</span><span>VRAM</span><span>LATENCY</span></div>
          <div class="row table-row"><span>llama3:70b</span><span class="ok">Running</span><span>A100</span><span class="am">67%</span><span class="am">212ms</span></div><div class="row table-row"><span>mistral:large2</span><span class="ok">Running</span><span>A100</span><span class="am">54%</span><span class="am">198ms</span></div><span class="ws"></span>
          <div class="row"><span class="dollar">$</span><span class="cursor"></span></div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand"><div class="brand"><span class="logo"><svg width="26" height="26"><use href="#modex-m"></use></svg></span><span>Modex</span></div><p>The open platform for running open-source AI models anywhere. Built for developers, by developers.</p><div class="socials"><a href="#"><svg width="18" height="18"><use href="#s-github"></use></svg></a><a href="#"><svg width="18" height="18"><use href="#s-discord"></use></svg></a><a href="#"><svg width="18" height="18"><use href="#s-twitter"></use></svg></a><a href="#"><svg width="18" height="18"><use href="#s-linkedin"></use></svg></a></div></div>
        <div class="foot-col"><h5>Product</h5><ul><li><a>Features</a></li><li><a>Models</a></li><li><a>Pricing</a></li><li><a>Changelog</a></li><li><a>Roadmap</a></li></ul></div>
        <div class="foot-col"><h5>Developers</h5><ul><li><a>Docs</a></li><li><a>CLI Reference</a></li><li><a>API Reference</a></li><li><a>Examples</a></li><li><a>Integrations</a></li></ul></div>
        <div class="foot-col"><h5>Resources</h5><ul><li><a>Blog</a></li><li><a>Guides</a></li><li><a>Community</a></li><li><a>Support</a></li><li><a>Status</a></li></ul></div>
        <div class="foot-col"><h5>Company</h5><ul><li><a>About</a></li><li><a>Careers</a></li><li><a>Contact</a></li><li><a>Privacy</a></li><li><a>Terms</a></li></ul></div>
        <div class="stay"><h5>Stay in the loop</h5><p>Get updates on new models, features, and releases.</p><form class="email" onsubmit="event.preventDefault()"><input type="email" placeholder="Enter your email"><button class="send" type="submit"><svg width="14" height="14"><use href="#i-arrow"></use></svg></button></form></div>
      </div>
      <div class="foot-bottom"><span>© 2024 Modex Labs Inc. All rights reserved.</span><span class="made">Made with <span class="bolt"><svg width="12" height="12"><use href="#i-bolt"></use></svg></span> by developers, for developers.</span></div>
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

## `styles.css`
```css
:root { --bg: #050912; --bg-2: #070c17; --panel: #0a1120; --panel-2: #0b1322; --border: #15203a; --border-2: #1b2747; --text: #e8eefc; --text-dim: #8a97b3; --text-faint: #5e6b88; --blue: #2f7bff; --blue-2: #4f96ff; --blue-glow: #1f6bff; --accent: #69a6ff; --green: #38d27b; --amber: #f0b853; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { background: var(--bg); color: var(--text); font-family: 'Geist', ui-sans-serif, system-ui, sans-serif; font-feature-settings: 'ss01','cv11'; -webkit-font-smoothing: antialiased; line-height: 1.4; }
.mono { font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; }
.wrap { max-width: 1180px; margin: 0 auto; padding: 0 32px; }
nav.top { display: flex; align-items: center; justify-content: space-between; padding: 22px 0 0; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 18px; letter-spacing: -0.01em; }
.brand .logo { width: 30px; height: 30px; display: grid; place-items: center; }
.nav-links { display: flex; gap: 36px; font-size: 14px; color: #cdd6ea; }
.nav-links a { color: #c6d0e8; }
.nav-links a:hover { color: #fff; }
.nav-right { display: flex; align-items: center; gap: 12px; }
.star-btn { display: inline-flex; align-items: center; gap: 10px; background: #0f1830; border: 1px solid #1b2747; color: #d6deef; padding: 7px 12px 7px 10px; border-radius: 8px; font-size: 13px; font-weight: 500; }
.star-btn .count { color: #fff; font-weight: 600; }
.star-btn .sep { width: 1px; height: 14px; background: #243153; }
.btn { display: inline-flex; align-items: center; gap: 8px; border-radius: 8px; font-weight: 500; cursor: pointer; border: 1px solid transparent; transition: transform .12s ease, background .12s ease; }
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: linear-gradient(180deg, #3a86ff 0%, #1f6bff 100%); color: #fff; padding: 9px 16px; font-size: 14px; box-shadow: 0 4px 14px -4px rgba(47,123,255,.55), inset 0 1px 0 rgba(255,255,255,.18); }
.btn-ghost { background: transparent; color: #e6ecf9; border: 1px solid #2a3760; padding: 11px 18px; font-size: 14px; }
.btn-ghost:hover { background: #0f1830; }
.btn-primary-lg { background: linear-gradient(180deg, #3a86ff 0%, #1f6bff 100%); color: #fff; padding: 12px 20px; font-size: 14px; box-shadow: 0 6px 20px -6px rgba(47,123,255,.6), inset 0 1px 0 rgba(255,255,255,.18); }
.hero-wrap { position: relative; margin-top: 24px; overflow: hidden; isolation: isolate; }
.hero-bg { position: absolute; inset: 0; background-image: url("hero.png"); background-size: cover; background-position: center right; background-repeat: no-repeat; z-index: 0; }
.hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5,9,18,.96) 0%, rgba(5,9,18,.82) 30%, rgba(5,9,18,.35) 55%, rgba(5,9,18,0) 75%), linear-gradient(180deg, rgba(5,9,18,.55) 0%, rgba(5,9,18,0) 25%, rgba(5,9,18,0) 70%, rgba(5,9,18,.95) 100%); }
.hero { position: relative; z-index: 1; padding: 80px 0 96px; }
.hero-grid { display: grid; grid-template-columns: minmax(0, 560px); gap: 56px; align-items: center; }
.eyebrow { color: var(--blue-2); font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 24px; }
.eyebrow .dot { display: inline-block; width: 3px; height: 3px; background: var(--blue-2); border-radius: 999px; vertical-align: middle; margin: 0 10px 3px; }
h1.title { font-size: 64px; line-height: 1.05; letter-spacing: -0.025em; font-weight: 700; margin: 0 0 24px; }
.lede { color: #aab6d3; font-size: 16px; line-height: 1.55; max-width: 440px; margin-bottom: 28px; }
.cmd { display: flex; align-items: center; gap: 12px; background: #0a1224; border: 1px solid #1a2542; border-radius: 10px; padding: 12px 14px; max-width: 420px; margin-bottom: 22px; }
.cmd .prompt { color: var(--green); }
.cmd .cmd-text { color: #cfd9ef; font-size: 14px; flex: 1; }
.cmd .copy { color: #6a778f; cursor: pointer; }
.cmd .copy:hover { color: #cfd9ef; }
.cta-row { display: flex; gap: 12px; margin-bottom: 48px; }
.stats { display: grid; grid-template-columns: repeat(5, max-content); gap: 44px; }
.stat .n { font-size: 26px; font-weight: 700; letter-spacing: -0.02em; color: #f3f6ff; }
.stat .l { color: #7a87a4; font-size: 12px; margin-top: 4px; }
.trusted { padding: 28px 0 8px; }
.trusted-label { font-size: 11px; letter-spacing: 0.22em; color: #6e7b98; margin-bottom: 22px; font-weight: 600; }
.logo-row { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; align-items: center; }
.logo-item { display: flex; align-items: center; gap: 8px; color: #cfd6e9; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; opacity: .85; }
.features { padding: 48px 0 24px; }
.card-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.card { background: linear-gradient(180deg, #0a1224 0%, #07101f 100%); border: 1px solid #14203a; border-radius: 14px; padding: 22px; min-height: 240px; display: flex; flex-direction: column; }
.icon-tile { width: 38px; height: 38px; border-radius: 8px; background: rgba(47,123,255,.10); border: 1px solid rgba(47,123,255,.25); display: grid; place-items: center; color: var(--blue-2); margin-bottom: 28px; }
.card h3 { font-size: 17px; font-weight: 600; margin: 0 0 10px; letter-spacing: -0.01em; }
.card p { color: #8693b1; font-size: 13.5px; line-height: 1.55; margin: 0 0 auto; }
.learn { color: var(--blue-2); font-size: 13px; font-weight: 500; margin-top: 18px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
.why { margin-top: 24px; background: linear-gradient(180deg, #08101f 0%, #060b18 100%); border: 1px solid #14203a; border-radius: 14px; padding: 56px 40px 52px; position: relative; }
.why-head { text-align: center; color: var(--blue-2); font-size: 11px; letter-spacing: 0.22em; font-weight: 600; margin-bottom: 40px; }
.why-row { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.why-line { position: absolute; top: 44px; left: 12%; right: 12%; height: 1px; background: linear-gradient(90deg, transparent, rgba(110,160,255,.35) 12%, rgba(110,160,255,.35) 88%, transparent); z-index: 0; }
.why-dot { position: absolute; top: 41px; width: 7px; height: 7px; background: #6ea0ff; border-radius: 999px; box-shadow: 0 0 10px 2px rgba(110,160,255,.7); transform: translateX(-50%); z-index: 1; }
.why-cell { position: relative; z-index: 2; text-align: center; display: flex; flex-direction: column; align-items: center; }
.why-icon-wrap { width: 88px; height: 88px; display: grid; place-items: center; background: radial-gradient(circle at 50% 50%, rgba(47,123,255,.12), transparent 65%); border-radius: 999px; margin-bottom: 18px; }
.why-cell h4 { font-size: 16px; font-weight: 600; letter-spacing: -0.01em; margin: 0 0 8px; }
.why-cell p { color: #8693b1; font-size: 13px; line-height: 1.5; margin: 0; max-width: 200px; }
.how { padding: 70px 0 24px; text-align: center; }
.how-eyebrow { color: var(--blue-2); font-size: 11px; letter-spacing: 0.22em; font-weight: 600; margin-bottom: 14px; }
.how h2 { font-size: 32px; font-weight: 700; letter-spacing: -0.02em; margin: 0 0 56px; }
.how-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; position: relative; text-align: left; }
.how-line { position: absolute; top: 96px; left: 14%; right: 14%; height: 1px; background: linear-gradient(90deg, transparent, rgba(110,160,255,.4) 12%, rgba(110,160,255,.4) 88%, transparent); z-index: 0; }
.how-dot { position: absolute; top: 93px; width: 7px; height: 7px; background: #6ea0ff; border-radius: 999px; box-shadow: 0 0 10px 2px rgba(110,160,255,.7); transform: translateX(-50%); z-index: 1; }
.step { display: flex; flex-direction: column; align-items: flex-start; }
.step-illu { align-self: center; width: 200px; height: 180px; display: grid; place-items: center; margin-bottom: 18px; }
.step-meta { display: flex; align-items: baseline; gap: 14px; margin-bottom: 8px; padding-left: 30px; }
.step-num { font-size: 28px; font-weight: 700; color: var(--blue-2); letter-spacing: -0.02em; line-height: 1; }
.step-title { font-size: 18px; font-weight: 600; letter-spacing: -0.01em; }
.step-desc { color: #8693b1; font-size: 13.5px; line-height: 1.5; margin: 0 0 18px; padding-left: 78px; }
.step-cmd { align-self: stretch; margin: 0 22px; background: #0a1224; border: 1px solid #1a2542; border-radius: 8px; padding: 10px 12px; display: flex; align-items: center; gap: 10px; font-size: 13px; }
.step-cmd .cmd-text { flex: 1; color: #cfd9ef; }
.step-cmd .copy { color: #6a778f; cursor: pointer; }
.built { margin-top: 56px; background: linear-gradient(180deg, #08101f 0%, #060b18 100%); border: 1px solid #14203a; border-radius: 14px; padding: 44px; display: grid; grid-template-columns: 1fr 1.25fr; gap: 40px; align-items: center; }
.built-eyebrow { color: var(--blue-2); font-size: 11px; letter-spacing: 0.22em; font-weight: 600; margin-bottom: 18px; }
.built h2 { font-size: 28px; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 18px; font-weight: 700; }
.built p { color: #8a97b3; font-size: 14px; line-height: 1.6; margin: 0 0 22px; max-width: 360px; }
.built .docs-link { color: var(--blue-2); font-size: 13.5px; font-weight: 500; display: inline-flex; gap: 6px; align-items: center; cursor: pointer; }
.term { position: relative; background: linear-gradient(180deg, #050a17 0%, #03070f 100%); border: 1px solid #14203a; border-radius: 10px; overflow: hidden; min-height: 320px; }
.term-head { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid #14203a; background: rgba(8,14,26,.6); }
.term-head .red { width: 9px; height: 9px; border-radius: 999px; background: #e64a5a; box-shadow: 0 0 8px rgba(230,74,90,.5); }
.term-head .name { color: #b9c4dd; font-size: 12px; }
.term-head .ver { margin-left: auto; color: #5e6b88; font-size: 12px; }
.term-body { position: relative; padding: 18px 18px 22px; font-family: 'Geist Mono', ui-monospace, monospace; font-size: 12.5px; line-height: 1.7; z-index: 1; }
.term-body .row { white-space: pre; }
.term-body .dollar { color: #6e7b98; margin-right: 8px; }
.term-body .kw { color: #4f96ff; }
.term-body .ok { color: #38d27b; }
.term-body .am { color: #f0b853; }
.term-body .dim { color: #6e7b98; }
.term-body .ws { display: block; height: 8px; }
.term-body .url { color: #4f96ff; text-decoration: underline; text-decoration-color: rgba(79,150,255,.4); }
.table-row { display: grid; grid-template-columns: 110px 70px 60px 60px 60px; gap: 12px; }
.table-head { color: #6e7b98; }
.globe-bg { position: absolute; right: -40px; bottom: -40px; width: 320px; height: 320px; opacity: .55; pointer-events: none; z-index: 0; }
.cursor { display: inline-block; width: 7px; height: 14px; background: #cfd9ef; vertical-align: -2px; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
footer { margin-top: 64px; padding: 56px 0 28px; border-top: 1px solid #0f1830; }
.foot-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr 1.3fr; gap: 28px; }
.foot-brand p { color: #8a97b3; font-size: 13.5px; line-height: 1.55; margin: 16px 0 22px; max-width: 240px; }
.socials { display: flex; gap: 14px; color: #6e7b98; }
.socials a:hover { color: #cfd9ef; }
.foot-col h5 { font-size: 14px; font-weight: 600; margin: 0 0 14px; }
.foot-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.foot-col a { color: #8a97b3; font-size: 13.5px; cursor: pointer; }
.foot-col a:hover { color: #e6ecf9; }
.stay h5 { font-size: 14px; font-weight: 600; margin: 0 0 8px; }
.stay p { color: #8a97b3; font-size: 13px; line-height: 1.55; margin: 0 0 14px; }
.email { display: flex; background: #0a1224; border: 1px solid #1a2542; border-radius: 8px; overflow: hidden; }
.email input { flex: 1; background: transparent; border: 0; outline: 0; padding: 10px 12px; color: #cfd9ef; font-family: inherit; font-size: 13px; }
.email input::placeholder { color: #5e6b88; }
.email .send { background: linear-gradient(180deg, #3a86ff 0%, #1f6bff 100%); width: 40px; display: grid; place-items: center; color: #fff; cursor: pointer; border: 0; }
.foot-bottom { margin-top: 56px; display: flex; justify-content: space-between; align-items: center; color: #5e6b88; font-size: 12.5px; }
.foot-bottom .made { display: inline-flex; align-items: center; gap: 6px; }
.foot-bottom .made .bolt { color: var(--blue-2); }
```

## `script.js`
```js
document.querySelectorAll('.copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.parentElement.querySelector('.cmd-text').textContent;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = '<span style="color:#38d27b;font-size:12px;font-weight:600">✓</span>';
      setTimeout(() => { btn.innerHTML = orig; }, 1500);
    });
  });
});
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
- Main Background: `#050912` (deep dark blue-black)
- Secondary Background: `#070C17`
- Panel Background: `#0A1120`
- Active Accent: `#2F7BFF` (glowing electric blue)
- Green Accent: `#38D27B` (terminal checkmark)
- Amber Accent: `#F0B853` (terminal warning highlights)
- Borders: `1px solid #15203A`

---

# TECH STACK

- **Type**: hand-written static
- **Dev Tool**: Vite (Vanilla configuration)
- **Styling**: Vanilla CSS (Variables, keyframe animations)
- **Javascript**: Vanilla ES6 DOM selector bindings for clipboard copy trigger
- **Fonts**: Geist and Geist Mono loaded via Google Fonts
