# Modex — Hero (extracted from full-landing/modex-prompt.md)

Stack: static HTML + CSS + vanilla JS (no framework), Vite-scaffolded. Fonts: **Geist** (400/500/600/700) + **Geist Mono** (400/500) via Google Fonts.

Hero: dark developer-first hero with a right-anchored background photo faded into the dark bg via a two-axis gradient overlay, a left-aligned eyebrow/H1/lede, an `npm install` command mockup with copy-to-clipboard button, primary+ghost CTAs, and a 5-stat row.

⚠️ Important asset-handling rule from the source prompt: the hero background PNG must be **downloaded locally** (`public/hero.png`) before running the site — the source server returns it without a `Content-Type` header, so browsers refuse to paint it as a CSS background if referenced remotely. Reference it locally as `url("hero.png")`, never the raw remote URL.

## Hero markup (verbatim, `index.html`)

```html
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
```

## Related hero styles (verbatim, `styles.css`)

```css
.hero-wrap { position: relative; margin-top: 24px; overflow: hidden; isolation: isolate; }
.hero-bg { position: absolute; inset: 0; background-image: url("hero.png"); background-size: cover; background-position: center right; background-repeat: no-repeat; z-index: 0; }
.hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5,9,18,.96) 0%, rgba(5,9,18,.82) 30%, rgba(5,9,18,.35) 55%, rgba(5,9,18,0) 75%), linear-gradient(180deg, rgba(5,9,18,.55) 0%, rgba(5,9,18,0) 25%, rgba(5,9,18,0) 70%, rgba(5,9,18,.95) 100%); }
.hero { position: relative; z-index: 1; padding: 80px 0 96px; }
.hero-grid { display: grid; grid-template-columns: minmax(0, 560px); gap: 56px; align-items: center; }
.eyebrow { color: var(--blue-2); font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 24px; }
h1.title { font-size: 64px; line-height: 1.05; letter-spacing: -0.025em; font-weight: 700; margin: 0 0 24px; }
.lede { color: #aab6d3; font-size: 16px; line-height: 1.55; max-width: 440px; margin-bottom: 28px; }
.cmd { display: flex; align-items: center; gap: 12px; background: #0a1224; border: 1px solid #1a2542; border-radius: 10px; padding: 12px 14px; max-width: 420px; margin-bottom: 22px; }
.cta-row { display: flex; gap: 12px; margin-bottom: 48px; }
.stats { display: grid; grid-template-columns: repeat(5, max-content); gap: 44px; }
```

Copy-to-clipboard logic (verbatim, `script.js`):

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

## Assets used in this hero

| URL | Content |
|---|---|
| `https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Modex/Hero/Hero` | Hero background photo (~1,853,083 bytes), served extensionless with no Content-Type header — must be downloaded and referenced locally as `public/hero.png`, never linked remotely |
