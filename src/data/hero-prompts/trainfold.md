# Trainfold — Hero (extracted from full-landing/trainfold-prompt.md)

Stack: static HTML + CSS + vanilla JS (`trainfold-viz.js`), Vite-scaffolded. Fonts: **DM Sans** (400/500/600/700) + **JetBrains Mono** (400/500/600) via Google Fonts.

Hero: fullscreen, bottom-anchored content (`align-items: flex-end`) over an autoplaying muted/looping background video, with a radial+linear gradient scrim for legibility. Eyebrow, serif-free bold H1 with an orange `.accent` span, sub, and two CTAs (filled + ghost with a play-triangle icon).

## Hero markup (verbatim, `index.html`)

```html
  <header class="hero">
    <video class="hero-video" autoplay muted loop playsinline><source src="https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Trainfold/Hero/hero.mp4" type="video/mp4"></video>
    <div class="wrap" style="width: 717px;">
      <span class="eyebrow" style="color:#ffd9b8">Scale & Visibility</span>
      <h1>Every fine-tuning run,<br><span class="accent">fully visible</span></h1>
      <p class="hero-sub" style="font-size: 16px; margin: 0px auto 24px">Trainfold gives ML engineers real-time visibility into loss curves, GPU utilization, layer gradients, and training checkpoints — all in one dense, signal-rich dashboard.</p>
      <div class="hero-ctas">
        <a href="#" class="btn btn-primary btn-lg" style="padding: 12px 30px; height: 48px; border-radius: 500px; color: #fff;">Start Monitoring</a>
        <a href="#dashboard" class="btn btn-ghost btn-lg" style="height: 48px; border-radius: 500px; color: #fff;"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M5 3.5v9l7-4.5z" fill="currentColor"></path></svg>View Demo</a>
      </div>
    </div>
  </header>
```

## Related hero styles (verbatim, `styles.css`)

```css
.hero { text-align: center; min-height: 100vh; display: flex; align-items: flex-end; padding: 140px 0 52px; position: relative; overflow: hidden; background: #0A0A0A; }
.hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.hero::after { content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none; background-image: radial-gradient(ellipse 80% 50% at 50% 88%, rgba(10,10,10,0.62) 0%, rgba(10,10,10,0.22) 55%, transparent 80%), linear-gradient(180deg, rgba(10,10,10,0.18) 0%, transparent 22%, transparent 55%, rgba(10,10,10,0.6) 84%, #0A0A0A 100%); }
.hero .wrap { position: relative; z-index: 1; }
.hero h1 { font-size: clamp(36px, 4.5vw, 56px); font-weight: 800; margin: 24px auto 24px; max-width: 880px; letter-spacing: -0.035em; text-shadow: 0 2px 40px rgba(0,0,0,0.5); }
.hero h1 .accent { color: var(--accent); text-shadow: 0 2px 30px rgba(249,115,22,0.455); }
.hero-sub { color: #e0e0e0; font-size: 19px; max-width: 620px; margin: 0 auto 36px; text-shadow: 0 1px 22px rgba(0,0,0,0.85); }
.hero-ctas { display: flex; gap: 14px; justify-content: center; margin-bottom: 0; }
```

Colors: `--accent: #F97316` (warm orange), `--accent-2: #FACC15` (helper yellow), page bg `#0A0A0A`.

## Assets used in this hero

| URL | Content |
|---|---|
| `https://beige-lemur-872571.hostingersite.com/asset-esprompt/Landing/Trainfold/Hero/hero.mp4` | Hero background video, autoplay/muted/loop |
