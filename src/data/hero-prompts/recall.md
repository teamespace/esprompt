# Recall — Hero (extracted from full-landing/recall-prompt.md)

Stack: React + Vite + TypeScript + Tailwind CSS 4, animated with `motion` (`motion/react`) + `lenis` smooth scroll. Fonts: **Baloo 2** (400–800, display/headings) + **Karla** (400–800 incl. italics, body) via Google Fonts. Neo-brutalist system: `3px solid #191919` borders, hard offset shadows (no blur — `brutal-shadow` utilities), slight card rotations that straighten on hover.

Hero: two-column layout. Left column is a staggered `motion` entrance (pill → H1 with `TextReveal` + squiggle-underlined "quizzes that stick" → subhead → two CTA buttons → small print). Right column is a rotated, brutal-bordered video card with a **mouse-scrubbed** background video (desktop only — paused and scrubbed by mouse X, autoplays only below 1024px; mirrored via `-scale-x-100`). Below the fold sits a "notes → flashcard" demo row: a highlighted-notes card, a curved-arrow connector, and a flip-on-click flashcard that also auto-flips every 3.4s until the user interacts.

## Hero spec (verbatim, `home/Hero.tsx`)

## HERO (`home/Hero.tsx`)

`<section className="relative pt-[4.2rem] lg:pt-[5rem] pb-[5.5rem] overflow-clip" aria-labelledby="hero-h">`

**Confetti** (6 absolutely-positioned shapes, `pointer-events-none z-0`, via a tiny `Confetti` helper `<span style={{background:color}}>`):
1. pink `w-[16px] h-[16px] rounded-full hidden sm:block` — top 12% left 7%
2. mint `w-[14px] h-[14px] rounded-[4px] rotate-[18deg] hidden sm:block` — top 24% right 9%
3. violet `w-[10px] h-[10px] rounded-full hidden sm:block` — top 8% right 22%
4. yellow `w-[12px] h-[12px] rounded-[4px] rotate-[18deg]` — top 46% left 3%
5. pink `w-[12px] h-[12px] rounded-full` — bottom 14% right 4%
6. mint `w-[8px] h-[8px] rounded-full` — bottom 30% left 12%

**Main row**: `flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[4rem] xl:gap-[6rem]`

**Left column** (`flex-1 w-full text-center lg:text-left max-w-[600px] lg:max-w-[540px]`) — every block is a `motion.*` with `initial={{opacity:0, y:24, scale:0.97}}` → `animate`, `duration:0.7`, `ease:[0.3,1.35,0.45,1]`, delays 0 / 0.2 / 0.3 / 0.4 (H1 word-span delay 0.5):

1. delay 0 — pill: `inline-block bg-white brutal-border rounded-full brutal-shadow-sm px-[1.1rem] py-[0.4rem] font-bold text-[0.9rem] -rotate-[1.5deg] mb-[1.6rem]` — copy: `Used by <b className="text-pink">340,000 students</b> the night before finals`
2. `<h1 id="hero-h" className="text-[clamp(2.5rem,3.8vw,4.5rem)] tracking-tight leading-[1.05] mx-auto lg:mx-0 mb-[1.4rem]">`:
   - `<TextReveal text="Your messy notes, reborn as" />` + `<br className="hidden xl:block" />`
   - `<motion.span>` (delay 0.5) `relative inline-block whitespace-nowrap mt-2 lg:mt-1` — text `quizzes that stick` + squiggle underline SVG: `<svg viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -left-[2%] -bottom-[0.16em] w-[104%] h-[0.3em] overflow-visible"><path d="M3 10 C 30 3, 55 14, 85 8 S 140 2, 170 10 S 235 15, 297 5" fill="none" stroke="var(--color-pink)" strokeWidth="7" strokeLinecap="round"/></svg>`
3. delay 0.2 — sub: `mx-auto lg:mx-0 mb-[2.2rem] text-[1.18rem] text-[#3A3A3A] leading-relaxed` — "Paste anything — lecture scribbles, textbook photos, a 40-page PDF. Recall's AI turns it into flashcards, practice quizzes, and match games in about 20 seconds. Cramming, upgraded."
4. delay 0.3 — actions `flex flex-wrap gap-4 justify-center lg:justify-start mb-4 relative z-10`: `<MagneticButton><Button as="a" href="#cta" variant="pink">Paste my notes — free</Button></MagneticButton>` + `<MagneticButton><Button as="a" href="#how" variant="white">Watch it work</Button></MagneticButton>`
5. delay 0.4 — small print `text-[0.88rem] font-bold text-[#6B6B6B]`: "No signup for your first 3 decks · Works with 27 languages"

**Right column** (`flex-1 w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end relative z-10`): `<motion.figure>` delay 0.5, `relative w-full aspect-square -rotate-[2deg] brutal-border rounded-[22px] brutal-shadow-lg flex items-center justify-center bg-white`:
- `<video src="https://recall-alpha-one.vercel.app/hero-new.mp4" loop muted playsInline preload="auto" className="w-full h-full object-cover rounded-[22px] -scale-x-100" />` (note: mirrored!)
- `<figcaption className="absolute -bottom-[16px] left-1/2 -translate-x-1/2 rotate-[2deg] bg-white brutal-border rounded-full brutal-shadow-sm font-display font-extrabold text-[0.88rem] px-[1rem] py-[0.28rem] whitespace-nowrap">Fresh out of the AI oven</figcaption>`

**Video mouse-scrub logic** (useEffect on mount, `videoRef`):
- Desktop only (`window.innerWidth < 1024` → skip): track `mousemove`; `targetTime = video.currentTime + (deltaX / window.innerWidth) * 0.8 * video.duration`, clamped to `[0, duration]`; set `video.currentTime = targetTime` guarded by an `isSeeking` flag; on `seeked`, if `|currentTime - targetTime| > 0.05` seek again.
- On resize / mount: `<1024px` → `video.play()`, `>=1024px` → `video.pause()`. Clean up all three listeners.

**Demo row** (`motion.div` delay 0.6, `relative z-10 mt-[4rem] lg:mt-[6.5rem] grid lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1fr)] grid-cols-1 gap-[1.4rem] items-center text-left lg:max-w-none max-w-[480px] mx-auto`):

1. **Notes file card** — `bg-white brutal-border rounded-[20px] brutal-shadow-lg -rotate-[1.4deg] w-full`:
   - Title bar: `flex items-center gap-[0.6rem] border-b-[3px] border-black px-[1.1rem] py-[0.75rem] font-display font-extrabold text-[1rem] bg-yellow-soft rounded-t-[17px]` — text `bio-201-lecture-9.txt` + 3 dots (`ml-auto flex gap-[0.35rem]`, each `w-[11px] h-[11px] rounded-full border-[2.5px] border-black block` in `bg-pink`, `bg-yellow`, `bg-mint`)
   - Body `px-[1.25rem] py-[1.15rem] pb-[1.3rem] text-[0.92rem] text-[#4A4A4A] space-y-[0.55rem]`:
     - `mitochondria = <HL yellow>powerhouse</HL>, makes ATP via <HL pink-soft>cellular respiration</HL>` — highlight classes: `bg-yellow px-[0.25em] rounded-[4px] font-bold text-black` (or `bg-pink-soft`)
     - `krebs cycle happens in the <HL yellow>matrix</HL> — 2 ATP + NADH + FADH2 per glucose??`
     - `<p className="text-[#8A8A8A] italic">(prof said this is DEFINITELY on the exam)</p>`
     - `electron transport chain → inner membrane → ~34 ATP`
   - Footer `px-[1.25rem] pb-[1.25rem]`: `<Button variant="pink" className="w-full" onClick={handleRegenClick}>✦ Generate my study set</Button>`
2. **Middle connector** (`flex flex-col items-center gap-[0.4rem] font-display font-extrabold text-[0.85rem] text-black`, `aria-hidden`):
   - Curved arrow SVG: `<svg viewBox="0 0 64 46" className="w-[48px] h-[40px] lg:w-[64px] lg:h-[46px] lg:rotate-0 rotate-[80deg]"><path d="M4 10 C 22 2, 44 12, 56 28 M56 28l-12-3 M56 28l2-12" fill="none" stroke="var(--color-black)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>` (rotated 80° on mobile, horizontal on lg)
   - Pill: `<span className="bg-mint brutal-border rounded-full shadow-[3px_3px_0_var(--color-black)] px-[0.85rem] py-[0.3rem] rotate-[2deg] whitespace-nowrap">18 cards · 20 sec</span>`
3. **Flashcard** (`flex flex-col items-center gap-4 w-full`):
   - `<button className="w-[min(340px,100%)] h-[230px] perspective-1200 bg-transparent border-0 p-0 cursor-pointer block group" + conditional 'flipped' class`, `aria-pressed={flipped}`, `aria-label={`Flashcard. Question: ${flips[idx].q} Press to flip and reveal the answer.`}`
   - Inner: `block relative w-full h-full transform-style-3d transition-transform duration-[650ms] ease-[cubic-bezier(0.35,1.4,0.45,1)] group-[.flipped]:rotate-y-180`
   - **Front**: `absolute inset-0 backface-hidden brutal-border rounded-[20px] brutal-shadow-lg flex flex-col p-[1.2rem] pb-[1.3rem] text-left bg-white rotate-[1.6deg]` — tag `self-start font-display font-extrabold text-[0.72rem] tracking-[0.1em] uppercase border-[2.5px] border-current rounded-full px-[0.7rem] py-[0.18rem] mb-auto text-pink` ("Question · Bio 201"), question `font-display font-extrabold text-[1.5rem] leading-[1.15] mb-auto text-black`, hint `text-[0.85rem] font-bold text-[#8A8A8A] flex items-center gap-[0.4rem]` ("👆 Tap to flip")
   - **Back**: same shell but `bg-pink text-white rotate-y-180 -rotate-[1.6deg]` — tag "Answer", answer text, footer `text-pink-soft` ("Nice — marked as known ✓")
   - Counter pill below: `font-display font-extrabold text-[0.9rem] bg-black text-yellow rounded-full px-[1rem] py-[0.3rem] shadow-[3px_3px_0_rgba(25,25,25,0.25)] -rotate-[1deg]` showing `flips[idx].n`
   - **Card data** (`flips` array):
     1. q "Where in the cell does the Krebs cycle take place?" / a "The mitochondrial matrix — yielding 2 ATP plus NADH & FADH₂ per glucose." / n "Card 7 of 18"
     2. q "Roughly how many ATP does the electron transport chain produce?" / a "About 34 ATP, along the inner mitochondrial membrane." / n "Card 8 of 18"
     3. q "What process do mitochondria use to make ATP?" / a "Cellular respiration — the reason they're called the cell's powerhouse." / n "Card 9 of 18"
   - **Behavior**: auto-flip every 3400ms until `userTouched`; when un-flipping, advance `idx` after 330ms (`setTimeout`). Card click and "Generate my study set" both set `userTouched=true` and use the same 330ms advance.


## Assets used in this hero

| File | Content |
|---|---|
| `hero-new.mp4` | Square 3D claymation loop (~5–8s, no audio) of the pink-brain mascot on a cream studio backdrop — mirrored and mouse-scrubbed on desktop |
