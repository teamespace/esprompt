Create a static HTML + CSS + Vanilla JavaScript website for "Trainfold — Train smarter, not longer", a real-time ML model training monitoring landing page. The page features a floating blur pill navigation header, a Hero Section with an autoplaying background video (`https://trainfold.netlify.app/assets/hero-bg.mp4`), a Product Features Grid (detailed into Live Loss Curves, Hardware Telemetry, and Gradient Heatmaps), a dense Dashboard Preview (surfacing live metrics, loss charts, GPU/VRAM dials, gradient heatmaps, and step logs), a Setup steps walk-through (timeline steps showing pip/python integration, a live-streaming log animation, and run iterations comparisons), a metrics strip detailing scale stats, a testimonials quote/logo/stat cards carousel track (with sliding controls), a bottom CTA banner, and a site footer. All SVG logo marks, dials, and curves are styled and animated.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **FILE ARCHITECTURE — NO FRAMEWORKS:** Build the project as a static site: `index.html` (markup), `styles.css` (verbatim styles), and `trainfold-viz.js` (verbatim logic), dev-scaffolded with Vite. Do not use React or Tailwind.
2. **VERBATIM COPYING:** Copy the stylesheet `styles.css` and logic `trainfold-viz.js` provided below exactly as written.
3. **FONTS:** Load DM Sans (weights 400, 500, 600, 700) and JetBrains Mono (weights 400, 500, 600) via Google Fonts `<link>` in `index.html`.
4. **ASSET ROBUSTNESS:** All media assets must reference the absolute Netlify paths: `https://trainfold.netlify.app/assets/`.
5. **INTERACTIVE METRICS & SLIDERS:**
   - **Live Loss Curves & Dials**: SVGs must render dynamic paths and circular progress dashes driven by JS loops.
   - **Hardware Telemetry Bar Grids**: Periodic intervals update heights to simulate active hardware cycles.
   - **Live Logs Streaming**: An interval adds new terminal rows with animated offsets.
   - **Testimonials sliding carousel**: Click events on prev/next arrows translate the card row.

---

# FONTS

Import DM Sans and JetBrains Mono via Google Fonts `<link>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

---

# SCAFFOLD FILES — COPY EXACTLY

## `package.json`
```json
{
  "name": "trainfold-landing",
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
  <title>Trainfold — Train smarter, not longer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav>
    <div class="wrap nav-inner">
      <a class="brand" href="#">
        <svg class="logo-mark" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#F97316" stroke-width="1.6"></rect><path d="M6 15.5 L9.5 10 L13 13 L18 6.5" stroke="#F97316" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="18" cy="6.5" r="1.6" fill="#FACC15"></circle></svg>
        Trainfold
      </a>
      <div class="nav-links">
        <a href="#features">Product<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <a href="#dashboard">Dashboard</a>
        <a href="#how">Resources<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <a href="#pricing">Pricing</a>
      </div>
      <div class="nav-cta"><a href="#" class="signin">Login</a><a href="#" class="btn btn-primary" style="padding: 10px 18px; font-size: 14px; border-radius: 500px; color: #fff">Start Monitoring</a></div>
    </div>
  </nav>
  <header class="hero">
    <video class="hero-video" autoplay muted loop playsinline><source src="https://trainfold.netlify.app/assets/hero-bg.mp4" type="video/mp4"></video>
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
  <section id="features">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Features</span><h2>Everything you need to monitor a training run</h2></div>
      <div class="feat-grid">
        <div class="feat">
          <div class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l5-6 4 3 7-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></div>
          <h3>Live Loss Curves</h3><p>Monitor training and validation loss in real-time. Catch overfitting early with automatic divergence detection and checkpoint markers on every step.</p>
          <svg class="feat-viz" id="featChart" viewBox="0 0 320 64" preserveAspectRatio="none" style="height: 84px;"></svg>
        </div>
        <div class="feat">
          <div class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.8"></rect><rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="currentColor"></rect><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></div>
          <h3>Hardware Telemetry</h3><p>Track GPU utilization, VRAM consumption, temperature, and power draw. Never get surprised by an OOM crash mid-run again.</p>
          <div class="feat-viz" id="featBars" style="display:flex;align-items:flex-end;gap:5px;"></div>
        </div>
        <div class="feat">
          <div class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"></rect><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"></rect><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"></rect><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"></rect></svg></div>
          <h3>Gradient Heatmaps</h3><p>Visualize gradient magnitude per layer across training steps. Identify dead neurons, vanishing gradients, and unstable layers at a glance.</p>
          <div class="feat-viz" id="featHeat" style="display:grid;gap:3px;"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="dashboard" class="preview">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Dashboard</span><h2>One screen. Every signal.</h2><p>The Trainfold dashboard surfaces the metrics that matter — without the noise.</p></div>
      <div class="mock big-dash">
        <div class="mock-bar">
          <span class="traffic"><i></i><i></i><i></i></span>
          <span class="chip mono">run_8f3a2c</span><span class="chip accent mono">llama-3-8b</span><span class="chip mono" style="color:var(--muted);">batch 16 · fp16</span>
          <span class="status-live" style="margin-left:auto;"><span class="status-dot"></span>TRAINING</span>
        </div>
        <div class="bd-grid">
          <div class="bd-col">
            <div class="bd-stat"><span class="metric-label">Epoch</span><span class="metric-value">12 / 50</span><div class="progress"><i style="width:24%"></i></div></div>
            <div class="bd-stat"><span class="metric-label">Global Step</span><span class="metric-value">4,824</span></div>
            <div class="bd-stat"><span class="metric-label">Learning Rate</span><span class="metric-value">2.00e-4</span></div>
            <div class="bd-stat"><span class="metric-label">Throughput</span><span class="metric-value">3,210 tok/s</span></div>
            <div class="bd-stat"><span class="metric-label">Train Loss</span><span class="metric-value" style="color:var(--accent)">0.412</span></div>
          </div>
          <div class="bd-center">
            <div class="hd-chart-head">
              <span class="metric-label">Loss &nbsp;·&nbsp; step 0 → 4,824</span>
              <div class="legend"><span><i style="background:#F97316;"></i>Training 0.412</span><span><i style="background:#FACC15;"></i>Validation 0.481</span></div>
            </div>
            <svg id="bigChart" viewBox="0 0 640 300" preserveAspectRatio="none" style="width:100%;height:300px;display:block;"></svg>
          </div>
          <div class="bd-col">
            <div class="gauge-wrap" style="height:auto;"><svg id="bigGauge" viewBox="0 0 160 160" style="width:130px;height:130px;"></svg><span class="gauge-cap">GPU · 87%</span></div>
            <div class="bar-meter"><div class="row"><span>VRAM</span><span>18.2 / 24 GB</span></div><div class="track"><div class="fill" style="width:76%"></div></div></div>
            <div class="bar-meter"><div class="row"><span>Temp</span><span>72°C</span></div><div class="track"><div class="fill" style="width:72%"></div></div></div>
            <div class="bar-meter"><div class="row"><span>Power</span><span>310 / 350 W</span></div><div class="track"><div class="fill" style="width:88%"></div></div></div>
          </div>
        </div>
        <div class="bd-bottom">
          <div><div class="panel-title">Gradient Magnitude · per layer</div><div class="heatmap" id="bigHeat"></div></div>
          <div>
            <div class="panel-title">Checkpoint Log</div>
            <div class="log">
              <div class="line"><span class="t">14:22:08</span><span class="ok">✓ ckpt</span><span class="v">step 4800 · loss 0.418</span></div>
              <div class="line"><span class="t">14:18:41</span><span class="ok">✓ ckpt</span><span class="v">step 4600 · loss 0.431</span></div>
              <div class="line"><span class="t">14:15:12</span><span class="ok">✓ ckpt</span><span class="v">step 4400 · loss 0.447</span></div>
              <div class="line"><span class="t">14:11:50</span><span class="ok">✓ ckpt</span><span class="v">step 4200 · loss 0.459</span></div>
              <div class="line"><span class="t">14:08:23</span><span class="v">eval val_loss 0.481</span></div>
              <div class="line"><span class="t">14:04:55</span><span class="ok">✓ ckpt</span><span class="v">step 4000 · loss 0.472</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="how">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Setup</span><h2>Up and running in 3 steps</h2></div>
      <div class="steps">
        <div class="step">
          <div class="step-num">01</div><h3>Connect your run</h3><p>Add two lines of code to your training script. Trainfold auto-detects your framework — PyTorch, HuggingFace Transformers, or Unsloth.</p>
          <pre class="code"><span class="k">import</span> trainfold
trainfold.<span class="fn">init</span>(<span class="p">project</span>=<span class="s">"my-finetune"</span>)</pre>
        </div>
        <div class="step">
          <div class="step-num">02</div><h3>Train as usual</h3><p>Run your training script normally. Trainfold streams metrics in real-time to your dashboard — no batching, no delay.</p>
          <div class="step-viz stream"><div class="stream-head"><span class="stream-dot"></span> streaming · live</div><div class="stream-log" id="streamLog"></div></div>
        </div>
        <div class="step">
          <div class="step-num">03</div><h3>Monitor and iterate</h3><p>Watch your loss curves, hardware, and layer gradients live. Export checkpoints, compare runs, and ship your best model.</p>
          <div class="step-viz runs" id="stepRuns"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="metrics-strip">
    <div class="wrap">
      <div class="ms-grid">
        <div class="ms-item"><div class="ms-value">2.4<span class="u">M+</span></div><div class="ms-label">Runs monitored</div></div>
        <div class="ms-item"><div class="ms-value">18<span class="u">%</span></div><div class="ms-label">Avg GPU savings</div></div>
        <div class="ms-item"><div class="ms-value">12<span class="u">+</span></div><div class="ms-label">Frameworks supported</div></div>
        <div class="ms-item"><div class="ms-value">1,200<span class="u">+</span></div><div class="ms-label">Engineers using Trainfold</div></div>
      </div>
    </div>
  </section>
  <section id="testimonials">
    <div class="wrap">
      <div class="tcar-head"><div class="section-head"><span class="eyebrow">Testimonials</span><h2>What ML engineers say</h2></div></div>
      <div class="tcar-viewport">
        <div class="tcar-track" id="tcarTrack">
          <article class="tcard quote-card">
            <div class="tcard-top"><div class="org"><span class="org-mark">RL</span> Research Lab</div><span class="vpill"><i></i> Verified</span></div>
            <p class="tquote">Trainfold caught an overfitting spike at step 3,200 that I would have missed for hours. Saved an entire training run.</p>
            <div class="tauthor"><span class="tava">AK</span><div><div class="tname">Alex K.</div><div class="trole">ML Engineer, Research Lab</div></div></div>
          </article>
          <article class="tcard logo-card">
            <svg class="lmark" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#F97316" stroke-width="1.4"></rect><path d="M6 15.5 L9.5 10 L13 13 L18 6.5" stroke="#F97316" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="18" cy="6.5" r="1.6" fill="#FACC15"></circle></svg>
            <div class="lname">Trainfold</div><div class="ltag">Train smarter, not longer.</div>
          </article>
          <article class="tcard quote-card">
            <div class="tcard-top"><div class="org"><span class="org-mark">UL</span> University Lab</div><span class="vpill"><i></i> Verified</span></div>
            <p class="tquote">The layer heatmap alone is worth it. I finally understand what's happening inside my model during fine-tuning.</p>
            <div class="tauthor"><span class="tava">SM</span><div><div class="tname">Sarah M.</div><div class="trole">AI Researcher, University Lab</div></div></div>
          </article>
          <article class="tcard stat-card"><span class="scap">Avg GPU savings</span><div class="sbig"><span class="arrow">↓</span>18%</div><div class="sdesc">Engineers cut average GPU spend per run by catching divergence and stopping dead runs early.</div></article>
          <article class="tcard fw-card">
            <div class="fwt">Drops into your stack</div>
            <div class="fw-list">
              <div class="fw"><span class="dot"></span> PyTorch</div><div class="fw"><span class="dot"></span> HF Transformers</div>
              <div class="fw"><span class="dot"></span> Unsloth</div><div class="fw"><span class="dot"></span> + 9 more frameworks</div>
            </div>
            <div class="trole">Auto-detected · two lines of code</div>
          </article>
        </div>
      </div>
      <div class="tcar-nav">
        <button class="tarrow prev" id="tcarPrev" aria-label="Previous"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        <button class="tarrow next" id="tcarNext" aria-label="Next"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
      </div>
    </div>
  </section>
  <section class="cta-banner">
    <div class="wrap">
      <div class="cta-box">
        <h2>Start monitoring your next fine-tune</h2><p>Free for solo researchers. No credit card required.</p>
        <a href="#" class="btn btn-primary btn-lg" style="height: 48px; border-radius: 500px; color: #fff;">Get started free</a>
        <div class="cta-sec">Already have an account? <a href="#">Sign in</a></div>
      </div>
      <div class="mock hero-dash">
        <div class="mock-bar">
          <span class="traffic"><i></i><i></i><i></i></span>
          <span class="chip mono">run_8f3a2c</span><span class="chip accent mono">llama-3-8b</span>
          <span class="status-live" style="margin-left:auto;"><span class="status-dot"></span>TRAINING</span>
        </div>
        <div class="hd-grid">
          <div class="hd-cell">
            <div class="hd-chart-head"><span class="metric-label">Loss</span><div class="legend"><span><i style="background:#F97316;"></i>Training</span><span><i style="background:#FACC15;"></i>Validation</span></div></div>
            <svg id="heroChart" viewBox="0 0 520 220" preserveAspectRatio="none" style="width:100%;height:200px;display:block;"></svg>
          </div>
          <div class="hd-cell"><div class="gauge-wrap"><span class="gauge-cap">GPU Utilization</span><svg id="heroGauge" viewBox="0 0 160 160" style="width:150px;height:150px;"></svg></div></div>
        </div>
        <div class="hd-stats">
          <div class="hd-stat"><span class="metric-label">Current Epoch</span><span class="metric-value">12 / 50</span></div>
          <div class="hd-stat"><span class="metric-label">Global Step</span><span class="metric-value">4,824</span></div>
          <div class="hd-stat"><span class="metric-label">Learning Rate</span><span class="metric-value">2.00e-4</span></div>
          <div class="hd-stat"><span class="metric-label">ETA</span><span class="metric-value">1h 42m</span></div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-brand">
          <a class="brand" href="#">
            <svg class="logo-mark" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#F97316" stroke-width="1.6"></rect><path d="M6 15.5 L9.5 10 L13 13 L18 6.5" stroke="#F97316" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="18" cy="6.5" r="1.6" fill="#FACC15"></circle></svg>
            Trainfold
          </a><div class="tag">Train smarter, not longer.</div>
        </div>
        <div class="foot-links"><a href="#docs">Docs</a><a href="#pricing">Pricing</a><a href="#changelog">Changelog</a><a href="#status">Status</a></div>
        <div class="foot-social">
          <a href="#" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"></path></svg></a>
          <a href="#" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
        </div>
      </div>
      <div class="foot-bottom">© 2026 Trainfold. Built for ML engineers.</div>
    </div>
  </footer>
  <script src="trainfold-viz.js"></script>
</body>
</html>
```

## `styles.css`
```css
:root { --bg: #0A0A0A; --surface: #111111; --surface-2: #161616; --border: rgba(255,255,255,0.07); --border-strong: rgba(255,255,255,0.12); --accent: #F97316; --accent-2: #FACC15; --text: #E5E5E5; --muted: #6B7280; --glow: rgba(249,115,22,0.12); --cold: #1E3A5F; --sans: 'DM Sans', -apple-system, system-ui, sans-serif; --heading: 'BlauerNue', -apple-system, system-ui, sans-serif; --mono: 'JetBrains Mono', ui-monospace, monospace; --maxw: 1200px; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: var(--sans); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; overflow-x: hidden; }
::selection { background: rgba(249,115,22,0.3); color: #fff; }
a { color: inherit; text-decoration: none; }
.wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 32px; }
section { padding: 120px 0; position: relative; }
.eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); font-family: var(--sans); display: inline-flex; align-items: center; gap: 8px; }
.eyebrow.muted { color: var(--muted); }
.eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent); }
.eyebrow.muted::before { background: var(--muted); box-shadow: none; }
h1, h2 { line-height: 1.08; letter-spacing: -0.02em; font-weight: 500; font-family: var(--sans); }
h3 { line-height: 1.2; letter-spacing: -0.01em; font-weight: 600; font-family: 'DM Sans', sans-serif; }
.section-head { max-width: 680px; margin-bottom: 64px; }
.section-head h2 { font-size: clamp(32px, 4vw, 42px); margin: 18px 0 16px; }
.section-head p { color: var(--muted); font-size: 18px; max-width: 580px; }
.mono { font-family: var(--mono); }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 9px; font-family: var(--sans); font-weight: 600; font-size: 15px; padding: 13px 22px; border-radius: 8px; border: 1px solid transparent; cursor: pointer; transition: all .18s ease; white-space: nowrap; }
.btn-primary { background: var(--accent); color: #1a0a00; box-shadow: 0 0 0 0 var(--glow); }
.btn-primary:hover { background: #fb8534; box-shadow: 0 8px 30px -6px rgba(249,115,22,0.5); transform: translateY(-1px); }
.btn-ghost { background: transparent; color: var(--text); border-color: var(--border-strong); }
.btn-ghost:hover { border-color: rgba(255,255,255,0.28); background: rgba(255,255,255,0.03); }
.btn-lg { padding: 16px 30px; font-size: 16px; }
.card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; }
nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 20px 0; font-family: var(--sans); }
nav .wrap { max-width: 1080px; }
.nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 28px; height: 58px; padding: 0 10px 0 22px; background: rgba(17,17,17,0.74); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid var(--border-strong); border-radius: 999px; box-shadow: 0 14px 44px -14px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02) inset; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 18px; letter-spacing: -0.02em; font-family: var(--sans); }
.logo-mark { width: 24px; height: 24px; flex: none; }
.nav-links { display: flex; align-items: center; gap: 26px; margin: 0 auto; }
.nav-links a { font-size: 14.5px; font-weight: 400; color: #c8c8c8; transition: color .15s; display: inline-flex; align-items: center; gap: 5px; }
.nav-links a:hover { color: #fff; }
.nav-links a svg { opacity: 0.6; }
.nav-cta { display: flex; align-items: center; gap: 16px; }
.nav-cta .signin { font-size: 14.5px; font-weight: 400; color: #c8c8c8; }
.nav-cta .signin:hover { color: #fff; }
.hero { text-align: center; min-height: 100vh; display: flex; align-items: flex-end; padding: 140px 0 52px; position: relative; overflow: hidden; background: #0A0A0A; }
.hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.hero::after { content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none; background-image: radial-gradient(ellipse 80% 50% at 50% 88%, rgba(10,10,10,0.62) 0%, rgba(10,10,10,0.22) 55%, transparent 80%), linear-gradient(180deg, rgba(10,10,10,0.18) 0%, transparent 22%, transparent 55%, rgba(10,10,10,0.6) 84%, #0A0A0A 100%); }
.hero .wrap { position: relative; z-index: 1; }
.hero h1 { font-size: clamp(36px, 4.5vw, 56px); font-weight: 800; margin: 24px auto 24px; max-width: 880px; letter-spacing: -0.035em; text-shadow: 0 2px 40px rgba(0,0,0,0.5); }
.hero h1 .accent { color: var(--accent); text-shadow: 0 2px 30px rgba(249,115,22,0.455); }
.hero-sub { color: #e0e0e0; font-size: 19px; max-width: 620px; margin: 0 auto 36px; text-shadow: 0 1px 22px rgba(0,0,0,0.85); }
.hero-ctas { display: flex; gap: 14px; justify-content: center; margin-bottom: 0; }
.mock { background: linear-gradient(180deg, #131313, #0e0e0e); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; box-shadow: 0 40px 100px -40px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.02) inset; }
.mock-bar { display: flex; align-items: center; gap: 14px; padding: 12px 18px; border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.015); }
.traffic { display: flex; gap: 7px; }
.traffic i { width: 11px; height: 11px; border-radius: 50%; background: #2a2a2a; display: block; }
.chip { font-family: var(--mono); font-size: 12px; padding: 4px 10px; border-radius: 6px; background: var(--surface-2); border: 1px solid var(--border); color: var(--text); display: inline-flex; align-items: center; gap: 7px; }
.chip.accent { color: var(--accent); border-color: rgba(249,115,22,0.25); background: rgba(249,115,22,0.06); }
.status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); animation: pulse 1.8s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
.status-live { color: var(--accent); font-family: var(--mono); font-size: 12px; display: inline-flex; align-items: center; gap: 7px; }
.metric-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 600; }
.metric-value { font-family: var(--mono); font-weight: 600; color: var(--text); }
.hero-dash { margin-top: 56px; text-align: left; }
.hd-grid { display: grid; grid-template-columns: 1.7fr 1fr; gap: 1px; background: var(--border); }
.hd-cell { background: #0f0f0f; padding: 20px; }
.hd-chart-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.legend { display: flex; gap: 16px; }
.legend span { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; color: var(--muted); font-family: var(--mono); }
.legend i { width: 16px; height: 3px; border-radius: 2px; display: block; }
.gauge-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; height: 100%; }
.gauge-cap { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
.hd-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border-top: 1px solid var(--border); }
.hd-stat { background: #0f0f0f; padding: 16px 20px; }
.hd-stat .metric-value { font-size: 20px; display: block; margin-top: 6px; }
.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.feat { padding: 30px; border-radius: 14px; background: var(--surface); border: 1px solid var(--border); transition: border-color .2s, transform .2s; position: relative; overflow: hidden; }
.feat:hover { border-color: var(--border-strong); transform: translateY(-3px); }
.feat-icon { width: 46px; height: 46px; border-radius: 11px; display: grid; place-items: center; background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.18); color: var(--accent); margin-bottom: 22px; }
.feat h3 { font-size: 20px; margin-bottom: 10px; }
.feat p { color: var(--muted); font-size: 15px; }
.feat-viz { margin-top: 22px; height: 64px; }
.preview { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.preview .section-head { text-align: center; margin: 0 auto 56px; }
.preview .section-head p { margin: 0 auto; }
.big-dash .mock-bar { padding: 14px 20px; }
.bd-grid { display: grid; grid-template-columns: 220px 1fr 240px; gap: 1px; background: var(--border); }
.bd-col { background: #0f0f0f; padding: 20px; display: flex; flex-direction: column; gap: 18px; }
.bd-stat .metric-value { font-size: 24px; display: block; margin-top: 6px; }
.progress { height: 6px; border-radius: 4px; background: rgba(255,255,255,0.06); overflow: hidden; margin-top: 10px; }
.progress i { display: block; height: 100%; background: var(--accent); border-radius: 4px; }
.bd-center { background: #0f0f0f; padding: 20px; }
.bar-meter { margin-top: 8px; }
.bar-meter .track { height: 8px; border-radius: 5px; background: rgba(255,255,255,0.06); overflow: hidden; }
.bar-meter .fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: 5px; }
.bar-meter .row { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 12px; color: var(--muted); margin-bottom: 7px; }
.bd-bottom { display: grid; grid-template-columns: 1.5fr 1fr; gap: 1px; background: var(--border); border-top: 1px solid var(--border); }
.bd-bottom > div { background: #0f0f0f; padding: 20px; }
.panel-title { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 600; margin-bottom: 16px; }
.heatmap { display: grid; gap: 3px; }
.heatmap .hrow { display: grid; grid-template-columns: 64px 1fr; gap: 10px; align-items: center; }
.heatmap .hlabel { font-family: var(--mono); font-size: 11px; color: var(--muted); text-align: right; }
.heatmap .cells { display: grid; gap: 3px; }
.heatmap .cell { aspect-ratio: 1.6; border-radius: 2px; }
.log { font-family: var(--mono); font-size: 12px; line-height: 1.9; }
.log .line { display: flex; gap: 10px; color: var(--muted); }
.log .t { color: #4b4b4b; }
.log .ok { color: var(--accent); }
.log .v { color: var(--text); }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.step { padding: 30px; border-radius: 14px; background: var(--surface); border: 1px solid var(--border); position: relative; }
.step-num { font-family: var(--mono); font-size: 13px; font-weight: 600; color: var(--accent); width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.2); margin-bottom: 20px; }
.step h3 { font-size: 19px; margin-bottom: 10px; }
.step p { color: var(--muted); font-size: 14.5px; }
.code { margin-top: 18px; background: #0b0b0b; border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; font-family: var(--mono); font-size: 13px; line-height: 1.8; overflow-x: auto; }
.code .k { color: var(--accent-2); }
.code .fn { color: var(--accent); }
.code .s { color: #8fbf7f; }
.step-viz { margin-top: 20px; }
.stream { background: #0b0b0b; border: 1px solid var(--border); border-radius: 10px; padding: 12px 14px; }
.stream-head { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
.stream-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); animation: pulse 1.6s ease-in-out infinite; }
.stream-log { font-family: var(--mono); font-size: 12.5px; line-height: 1.85; height: 92px; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; }
.stream-log .sline { white-space: nowrap; color: var(--muted); opacity: 0; transform: translateY(7px); animation: streamIn .45s cubic-bezier(.4,0,.2,1) forwards; }
.stream-log .sline .sstep { color: #4b4b4b; }
.stream-log .sline .sval { color: #c8c8c8; }
.stream-log .sline.fresh .sval { color: var(--accent); }
@keyframes streamIn { to { opacity: 1; transform: none; } }
.runs { display: flex; flex-direction: column; gap: 8px; }
.run-row { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 9px; background: #0d0d0d; border: 1px solid var(--border); }
.run-row.best { border-color: rgba(249,115,22,0.32); background: rgba(249,115,22,0.06); }
.run-id { font-family: var(--mono); font-size: 12px; color: var(--text); flex: none; }
.run-spark { flex: 1; height: 22px; }
.run-loss { font-family: var(--mono); font-size: 12px; color: var(--muted); width: 36px; text-align: right; flex: none; }
.run-row.best .run-loss { color: var(--accent); }
.run-badge { font-family: var(--mono); font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); border: 1px solid rgba(249,115,22,0.32); border-radius: 5px; padding: 3px 6px; flex: none; }
.metrics-strip { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 72px 0; }
.ms-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.ms-item { text-align: center; padding: 0 20px; position: relative; }
.ms-item + .ms-item::before { content: ""; position: absolute; left: 0; top: 12%; height: 76%; width: 1px; background: var(--border); }
.ms-value { font-family: var(--mono); font-size: clamp(34px, 4vw, 46px); font-weight: 600; color: var(--text); letter-spacing: -0.02em; }
.ms-value .u { color: var(--accent); }
.ms-label { color: var(--muted); font-size: 14px; margin-top: 8px; }
.tcar-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 44px; }
.tcar-viewport { overflow: hidden; }
.tcar-track { display: flex; gap: 20px; transition: transform .5s cubic-bezier(.4,0,.2,1); will-change: transform; }
.tcard { flex: 0 0 358px; width: 358px; min-height: 462px; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column; position: relative; }
.quote-card { background: var(--surface); border: 1px solid var(--border); padding: 28px; justify-content: space-between; }
.tcard-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.org { display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 14px; color: var(--text); }
.org-mark { width: 30px; height: 30px; border-radius: 8px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.22); color: var(--accent); display: grid; place-items: center; font-family: var(--mono); font-size: 12px; font-weight: 600; }
.vpill { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 500; color: #d6d6d6; background: rgba(255,255,255,0.06); border: 1px solid var(--border); padding: 6px 12px; border-radius: 999px; }
.vpill i { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }
.tquote { font-size: 22px; line-height: 1.42; letter-spacing: -0.015em; color: var(--text); font-weight: 500; }
.tquote::before { content: "\201C"; }
.tquote::after { content: "\201D"; }
.tauthor { display: flex; align-items: center; gap: 13px; padding-top: 22px; border-top: 1px solid var(--border); }
.tava { width: 42px; height: 42px; border-radius: 50%; background: var(--surface-2); border: 1px solid var(--border-strong); display: grid; place-items: center; font-weight: 600; font-size: 14px; color: var(--accent); flex: none; }
.tname { font-size: 15px; font-weight: 600; }
.trole { font-size: 13px; color: var(--muted); }
.logo-card { background: #0c0c0c; border: 1px solid var(--border); align-items: center; justify-content: center; gap: 16px; }
.logo-card .lmark { width: 64px; height: 64px; }
.logo-card .lname { font-family: var(--sans); font-weight: 700; font-size: 30px; letter-spacing: -0.03em; }
.logo-card .ltag { color: var(--muted); font-size: 14px; }
.stat-card { background: linear-gradient(160deg, rgba(249,115,22,0.16), rgba(249,115,22,0.04)); border: 1px solid rgba(249,115,22,0.22); padding: 30px; justify-content: space-between; }
.stat-card .scap { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); }
.stat-card .sbig { font-family: var(--mono); font-size: 76px; font-weight: 600; letter-spacing: -0.03em; line-height: 1; color: #fff; }
.stat-card .sbig .arrow { color: var(--accent); }
.stat-card .sdesc { color: #d6d6d6; font-size: 16px; line-height: 1.5; }
.fw-card { background: var(--surface); border: 1px solid var(--border); padding: 28px; justify-content: space-between; }
.fw-card .fwt { font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 600; }
.fw-list { display: flex; flex-direction: column; gap: 14px; }
.fw-list .fw { display: flex; align-items: center; gap: 12px; font-family: var(--mono); font-size: 17px; color: var(--text); padding-bottom: 14px; border-bottom: 1px solid var(--border); }
.fw-list .fw:last-child { border-bottom: none; padding-bottom: 0; }
.fw-list .fw .dot { width: 8px; height: 8px; border-radius: 2px; background: var(--accent); }
.tcar-nav { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 32px; }
.tarrow { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; cursor: pointer; transition: all .18s ease; background: transparent; color: var(--text); border: 1px solid var(--border-strong); }
.tarrow:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }
.tarrow.next { background: var(--accent); border-color: var(--accent); color: #1a0a00; }
.tarrow.next:hover { background: #fb8534; }
.tarrow:disabled { opacity: 0.32; cursor: default; }
.tarrow:disabled:hover { background: transparent; border-color: var(--border-strong); }
.tarrow.next:disabled { background: var(--accent); border-color: var(--accent); }
.cta-banner { padding: 130px 0; }
.cta-box { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 72px 40px; text-align: center; position: relative; overflow: hidden; }
.cta-box::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 60% 90% at 50% 0%, var(--glow), transparent 70%); }
.cta-box > * { position: relative; z-index: 1; }
.cta-box h2 { font-size: clamp(32px, 4.5vw, 46px); letter-spacing: -0.03em; margin-bottom: 16px; }
.cta-box p { color: var(--muted); font-size: 18px; margin-bottom: 32px; }
.cta-sec { margin-top: 22px; font-size: 14px; color: var(--muted); }
.cta-sec a { color: var(--accent); }
footer { border-top: 1px solid var(--border); padding: 56px 0 40px; }
.foot-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 40px; flex-wrap: wrap; padding-bottom: 40px; }
.foot-brand { max-width: 260px; }
.foot-brand .tag { color: var(--muted); font-size: 14px; margin-top: 12px; }
.foot-links { display: flex; gap: 30px; }
.foot-links a { font-size: 14px; color: var(--muted); transition: color .15s; }
.foot-links a:hover { color: var(--text); }
.foot-social { display: flex; gap: 12px; }
.foot-social a { width: 38px; height: 38px; border-radius: 9px; border: 1px solid var(--border); display: grid; place-items: center; color: var(--muted); transition: all .15s; }
.foot-social a:hover { color: var(--text); border-color: var(--border-strong); }
.foot-bottom { border-top: 1px solid var(--border); padding-top: 28px; font-family: var(--mono); font-size: 13px; color: var(--muted); }
@media (max-width: 940px) { section { padding: 88px 0; } .feat-grid, .steps { grid-template-columns: 1fr; } .tcard { flex-basis: 300px; width: 300px; min-height: 430px; } .ms-grid { grid-template-columns: 1fr 1fr; gap: 40px 0; } .ms-item:nth-child(3)::before, .ms-item:nth-child(1)::before { display: none; } .hd-grid { grid-template-columns: 1fr; } .bd-grid { grid-template-columns: 1fr; } .hd-stats { grid-template-columns: 1fr 1fr; } .nav-links { display: none; } }
@media (max-width: 560px) { .wrap { padding: 0 20px; } .hero-ctas { flex-direction: column; } .hd-stats { grid-template-columns: 1fr; } .ms-grid { grid-template-columns: 1fr; } .ms-item::before { display: none !important; } .foot-top { flex-direction: column; } }
```

## `trainfold-viz.js`
```js
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const featChart = $('#featChart');
if (featChart) {
  featChart.innerHTML = `
    <path d="M 0 50 Q 80 10 160 30 T 320 15" stroke="var(--accent)" stroke-width="2" fill="none" />
    <path d="M 0 55 Q 80 15 160 40 T 320 30" stroke="var(--accent-2)" stroke-width="1.5" stroke-dasharray="4" fill="none" />
  `;
}
const featBars = $('#featBars');
if (featBars) {
  const heights = [40, 55, 30, 70, 85, 60, 45, 90, 75, 50];
  featBars.innerHTML = heights.map(h => `<div style="flex:1; height:${h}%; background:var(--accent); border-radius:2px; opacity:0.85; min-height:4px; transition: height 0.3s ease;"></div>`).join('');
  if (!prefersReducedMotion) {
    setInterval(() => { Array.from(featBars.children).forEach(bar => { bar.style.height = `${Math.floor(Math.random() * 70) + 20}%`; }); }, 1000);
  }
}
const featHeat = $('#featHeat');
if (featHeat) {
  featHeat.style.gridTemplateColumns = 'repeat(20, 1fr)';
  let html = ''; for (let i = 0; i < 120; i++) html += `<div style="aspect-ratio:1; background:var(--accent); opacity:${Math.random()}; border-radius:1px;"></div>`;
  featHeat.innerHTML = html;
  if (!prefersReducedMotion) {
    setInterval(() => { Array.from(featHeat.children).forEach(cell => { if (Math.random() > 0.7) cell.style.opacity = Math.random(); }); }, 500);
  }
}
const bigChart = $('#bigChart');
if (bigChart) {
  bigChart.innerHTML = `
    <line x1="0" y1="50" x2="640" y2="50" stroke="var(--border)" stroke-width="1" />
    <line x1="0" y1="120" x2="640" y2="120" stroke="var(--border)" stroke-width="1" />
    <line x1="0" y1="200" x2="640" y2="200" stroke="var(--border)" stroke-width="1" />
    <line x1="0" y1="270" x2="640" y2="270" stroke="var(--border)" stroke-width="1" />
    <path d="M 0 250 L 100 200 L 200 150 L 300 110 L 400 90 L 500 70 L 640 50" stroke="var(--accent)" stroke-width="2.5" fill="none" />
    <path d="M 0 270 L 100 220 L 200 180 L 300 150 L 400 140 L 500 135 L 640 130" stroke="var(--accent-2)" stroke-width="2" stroke-dasharray="6" fill="none" />
  `;
}
const drawGauge = (id, percent) => {
  const el = document.getElementById(id); if (!el) return;
  const circ = 2 * Math.PI * 55, offset = circ * (1 - percent / 100);
  el.innerHTML = `
    <circle cx="80" cy="80" r="55" stroke="rgba(255,255,255,0.05)" stroke-width="12" fill="none" />
    <circle cx="80" cy="80" r="55" stroke="url(#gaugeGrad)" stroke-width="12" fill="none" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round" transform="rotate(-90 80 80)" />
    <text x="80" y="88" fill="#fff" font-size="24" font-weight="700" text-anchor="middle" font-family="var(--mono)">${percent}%</text>
    <defs><linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--accent)" /><stop offset="100%" stop-color="var(--accent-2)" /></linearGradient></defs>
  `;
};
drawGauge('bigGauge', 87); drawGauge('heroGauge', 87);
const bigHeat = $('#bigHeat');
if (bigHeat) {
  let html = ''; const layers = ['attn_q', 'attn_k', 'attn_v', 'mlp_gate', 'mlp_down'];
  layers.forEach(layer => {
    let cells = ''; for (let i = 0; i < 40; i++) cells += `<div style="aspect-ratio:1.6; background:var(--accent); opacity:${Math.random() * 0.85 + 0.15}; border-radius:1px;"></div>`;
    html += `<div class="hrow"><span class="hlabel">${layer}</span><div class="cells" style="grid-template-columns: repeat(40, 1fr);">${cells}</div></div>`;
  });
  bigHeat.innerHTML = html;
  if (!prefersReducedMotion) {
    setInterval(() => { $$('#bigHeat .cells').forEach(row => { Array.from(row.children).forEach(cell => { if (Math.random() > 0.8) cell.style.opacity = Math.random() * 0.85 + 0.15; }); }); }, 700);
  }
}
const streamLog = $('#streamLog');
if (streamLog) {
  const logs = [
    { step: '120', loss: '1.241', lr: '2.00e-4' }, { step: '240', loss: '0.985', lr: '2.00e-4' },
    { step: '360', loss: '0.841', lr: '2.00e-4' }, { step: '480', loss: '0.762', lr: '2.00e-4' },
    { step: '600', loss: '0.710', lr: '2.00e-4' }, { step: '720', loss: '0.675', lr: '2.00e-4' },
    { step: '840', loss: '0.648', lr: '1.98e-4' }, { step: '960', loss: '0.621', lr: '1.98e-4' }
  ];
  let curr = 0;
  const addLine = () => {
    const l = logs[curr]; const line = document.createElement('div'); line.className = 'sline fresh';
    line.innerHTML = `<span class="sstep">[step ${l.step}]</span> loss: <span class="sval">${l.loss}</span> &middot; lr: <span class="sval">${l.lr}</span>`;
    streamLog.appendChild(line);
    if (streamLog.children.length > 4) streamLog.removeChild(streamLog.firstChild);
    setTimeout(() => { Array.from(streamLog.children).forEach(c => { if (c !== line) c.classList.remove('fresh'); }); }, 500);
    curr = (curr + 1) % logs.length;
  };
  for (let i = 0; i < 3; i++) addLine();
  if (!prefersReducedMotion) setInterval(addLine, 1800);
}
const stepRuns = $('#stepRuns');
if (stepRuns) {
  stepRuns.innerHTML = `
    <div class="run-row best"><span class="run-id">run_best</span><div class="run-spark"><svg viewBox="0 0 100 20" style="width:100%;height:100%;"><path d="M0 15 L20 12 L40 10 L60 8 L80 5 L100 3" stroke="var(--accent)" stroke-width="1.5" fill="none"/></svg></div><span class="run-loss">0.412</span><span class="run-badge">best</span></div>
    <div class="run-row"><span class="run-id">run_8f3a</span><div class="run-spark"><svg viewBox="0 0 100 20" style="width:100%;height:100%;"><path d="M0 16 L20 14 L40 13 L60 12 L80 11 L100 10" stroke="var(--muted)" stroke-width="1.5" fill="none"/></svg></div><span class="run-loss">0.481</span></div>
    <div class="run-row"><span class="run-id">run_2b9c</span><div class="run-spark"><svg viewBox="0 0 100 20" style="width:100%;height:100%;"><path d="M0 18 L20 17 L40 15 L60 16 L80 18 L100 19" stroke="#ef4444" stroke-width="1.5" fill="none"/></svg></div><span class="run-loss" style="color:#ef4444;">1.102</span><span class="run-badge" style="color:#ef4444;border-color:rgba(239,68,68,0.3)">diverged</span></div>
  `;
}
const heroChart = $('#heroChart');
if (heroChart) {
  heroChart.innerHTML = `
    <path d="M 0 180 L 100 140 L 200 110 L 300 80 L 400 65 L 520 50" stroke="var(--accent)" stroke-width="2.5" fill="none" />
    <path d="M 0 190 L 100 160 L 200 130 L 300 115 L 400 105 L 520 100" stroke="var(--accent-2)" stroke-width="2" stroke-dasharray="5" fill="none" />
  `;
}
const track = $('#tcarTrack'), prev = $('#tcarPrev'), next = $('#tcarNext');
if (track && prev && next) {
  let offset = 0; const step = 378; // 358 + 20 gap
  const max = step * (track.children.length - 2.5);
  const update = () => { prev.disabled = offset === 0; next.disabled = offset >= max; };
  prev.addEventListener('click', () => { offset = Math.max(0, offset - step); track.style.transform = `translateX(-${offset}px)`; update(); });
  next.addEventListener('click', () => { offset = Math.min(max, offset + step); track.style.transform = `translateX(-${offset}px)`; update(); });
  update();
}
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET

## Colors
- Main Background: `#0A0A0A` (deep charcoal black)
- Surface Cards: `#111111`
- Active Accent: `#F97316` (warm orange)
- Helper Yellow: `#FACC15` (warning accent)
- Dimmed Text: `#6B7280`
- Cold Blue highlight: `#1E3A5F`
- Borders: `rgba(255, 255, 255, 0.07)`

---

# TECH STACK

- **Type**: hand-written static
- **Dev Tool**: Vite (Vanilla configuration)
- **Styling**: Vanilla CSS (Variables, responsive grids, custom metrics strips)
- **Javascript**: Custom visualization file `trainfold-viz.js` (driving charts, heatmaps, hardware metrics grids, logs stream, and quotes slider)
- **Fonts**: DM Sans & JetBrains Mono loaded via Google Fonts
