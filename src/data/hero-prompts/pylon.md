# Pylon — Hero (extracted from full-landing/pylon-prompt.md)

Stack: static HTML+CSS+JS, single `index.html` with inline `<style>`/`<script>`, Vite-scaffolded. Fonts: **Source Serif 4** (ital, 300–900) + **DM Sans** (300–700) via Google Fonts.

Hero: fullscreen section with an autoplaying muted/looping background video, a left-to-right dark gradient overlay for text legibility, and left-aligned content (uppercase tag, serif H1, sub, two CTAs) that staggers in with `fadeUp` keyframe delays (0.1s/0.2s/0.35s/0.5s). A bookmark-ribbon nav sits fixed top-left and a transparent→solid nav bar toggles `.scrolled` past `scrollY > 20`.

## Hero markup (verbatim, `index.html`)

```html
<section class="hero">
  <div class="hero-bg"><video autoplay muted loop playsinline><source src="video/heroo.mp4" type="video/mp4"></video></div>
  <div class="hero-left">
    <p class="hero-tag">Self-Hosted AI Platform</p>
    <h1 class="hero-h1">Every model.<br>Your infrastructure.</h1>
    <p class="hero-sub">One interface for every LLM — local or cloud. Run Llama, Claude, Gemini, Mistral, and any OpenAI-compatible model on your own terms. No vendor lock-in. Complete data sovereignty.</p>
    <div class="hero-btns">
      <a class="btn-dark" href="#deploy" style="background:var(--white);color:var(--text);">Deploy in 60s</a>
      <a class="btn-ghost" href="#features" style="border-color:rgba(255,255,255,.5);color:var(--white);">Explore Features</a>
    </div>
  </div>
</section>
```

## Related hero styles (verbatim, inline `<style>`)

```css
.hero{width:100%;height:100vh;position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;z-index:0;}
.hero-bg video,.hero-bg img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(to right,rgba(10,8,5,0.62) 0%,rgba(10,8,5,0.35) 45%,rgba(10,8,5,0.0) 100%);}
.hero-left{display:flex;flex-direction:column;justify-content:center;padding:154px 60px 80px 60px;position:relative;z-index:2;min-height:100vh;max-width:620px;}
.hero-tag{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);font-weight:600;margin-bottom:28px;opacity:0;transform:translateY(16px);animation:fadeUp 0.6s ease 0.1s forwards;}
.hero-h1{font-family:var(--font-serif);font-size:72px;line-height:1.0;letter-spacing:-2.5px;font-weight:400;color:var(--white);margin-bottom:28px;opacity:0;transform:translateY(20px);animation:fadeUp 0.7s ease 0.2s forwards;}
.hero-sub{font-size:16px;line-height:26px;color:rgba(255,255,255,0.72);max-width:400px;margin-bottom:40px;opacity:0;transform:translateY(20px);animation:fadeUp 0.7s ease 0.35s forwards;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;opacity:0;transform:translateY(20px);animation:fadeUp 0.7s ease 0.5s forwards;}
@keyframes fadeUp{to{opacity:1;transform:translateY(0);}}
nav{position:fixed;top:0;left:0;right:0;height:63px;display:flex;align-items:center;justify-content:space-between;padding:0 40px 0 78px;z-index:100;transition:background 0.4s ease,backdrop-filter 0.4s ease,border-color 0.4s ease;}
nav.scrolled{background:rgba(250,249,245,0.94);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(43,43,41,0.07);}
```

Nav-scroll logic (verbatim, inline `<script>`):

```js
const nav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>20);},{passive:true});
```

## Assets used in this hero

| Path | URL (live site) | Content |
|---|---|---|
| `video/heroo.mp4` | `https://pylon-ai.netlify.app/video/heroo.mp4` | Hero background video, autoplay/muted/loop |
