Create a React + Vite + TypeScript + Tailwind CSS 4 component for a CTA section with a Magnetic Button, inspired by the Recall landing page.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR A 1:1 RESULT)

1. **This design IS Tailwind-utility-heavy — but with arbitrary values everywhere.** Every spacing, radius, rotation, and shadow is an exact arbitrary value like `p-[4rem]`, `rounded-[28px]`, `-rotate-[4deg]`, `shadow-[3px_3px_0_var(--color-black)]`. **COPY EVERY CLASS STRING VERBATIM.** Do not round or simplify arbitrary values to default Tailwind utility classes.
2. **COPY THE FULL CSS FILE BELOW VERBATIM as `src/index.css`.** It defines the `@theme` tokens (colors, fonts, shadows) and the `.brutal-border`/`.brutal-shadow*` utilities. Everything else is Tailwind v4 utilities in JSX.
3. **Neo-brutalist shadows are hard offsets — zero blur.** Use the `brutal-shadow`, `brutal-shadow-sm`, and `brutal-shadow-lg` utilities.
4. **Every border is `3px solid #191919`** via the `.brutal-border` utility.
5. **Magnetic Button Logic:** A wrapper `motion.div` tracks `onMouseMove`. It calculates the distance of the cursor from the center of the button, and applies `* 0.3` to the `x` and `y` properties using a stiff spring.

---

# FONTS

Two Google Fonts, loaded via `@import` at the very top of `src/index.css` (already included in the CSS below):
- **Baloo 2** (400–800) — display font for ALL headings, buttons, pills. Applied via `font-display`.
- **Karla** (400–800, normal + italic) — body text. Applied to `body`.

---

# FULL CSS FILE — COPY THIS EXACTLY AS `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Karla:ital,wght@0,400..800;1,400..800&display=swap');
@import "tailwindcss";

@theme {
  --color-yellow: #FFD53D;
  --color-yellow-soft: #FFF3C4;
  --color-black: #191919;
  --color-white: #FFFFFF;
  --color-pink: #FF5C8A;
  --color-pink-soft: #FFE1EA;
  --color-mint: #4ECBA5;
  --color-violet: #7C6CFF;
  --color-paper: #FFFBEE;
  
  --font-display: "Baloo 2", "Comic Sans MS", cursive;
  --font-body: "Karla", "Trebuchet MS", sans-serif;
  
  --shadow-brutal: 6px 6px 0 var(--color-black);
  --shadow-brutal-sm: 4px 4px 0 var(--color-black);
  --shadow-brutal-lg: 10px 10px 0 var(--color-black);
}

@layer base {
  html { scroll-behavior: smooth; }
  body {
    @apply font-body bg-paper text-black antialiased leading-relaxed text-[1.05rem];
    overflow-x: clip;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight leading-tight font-extrabold;
  }
}

@layer utilities {
  .brutal-border { border: 3px solid var(--color-black); }
  .brutal-shadow { box-shadow: var(--shadow-brutal); }
  .brutal-shadow-sm { box-shadow: var(--shadow-brutal-sm); }
  .brutal-shadow-lg { box-shadow: var(--shadow-brutal-lg); }
}
```

---

# COMPONENT STRUCTURE

```tsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function MagneticButtonCTA() {
  return (
    <section id="cta" className="pt-[1rem] pb-[6rem]" aria-labelledby="cta-h">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.3, 1.2, 0.45, 1] }}
        className="relative bg-yellow brutal-border rounded-[28px] brutal-shadow-lg p-[4rem] px-[clamp(1.5rem,6vw,4.5rem)] text-center overflow-hidden max-w-[1120px] w-[calc(100%-2.5rem)] mx-auto"
      >
        {/* Confetti */}
        <span className="absolute top-[18%] left-[8%] w-[14px] h-[14px] rounded-full bg-pink pointer-events-none" aria-hidden="true" />
        <span className="absolute top-[26%] right-[10%] w-[16px] h-[16px] rounded-[4px] rotate-[18deg] bg-violet pointer-events-none" aria-hidden="true" />
        <span className="absolute bottom-[20%] left-[16%] w-[10px] h-[10px] rounded-full bg-white pointer-events-none" aria-hidden="true" />
        <span className="absolute bottom-[26%] right-[18%] w-[12px] h-[12px] rounded-[4px] rotate-[18deg] bg-mint pointer-events-none" aria-hidden="true" />

        {/* Mascot */}
        <div className="relative z-10 w-[124px] h-[124px] mx-auto mb-[1.1rem] brutal-border rounded-full brutal-shadow-sm bg-pink-soft -rotate-[4deg] overflow-hidden flex items-center justify-center">
          <img src="https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/CTA/CTA.webp" alt="Call to action mascot" className="w-full h-full object-cover" />
        </div>
        
        {/* Kicker Pill */}
        <p className="mb-0 relative z-10">
          <span className="inline-block bg-pink text-white font-display font-extrabold text-[0.78rem] uppercase tracking-[0.06em] px-[1rem] py-[0.32rem] rounded-full brutal-border shadow-[3px_3px_0_var(--color-black)] rotate-[1.5deg]">
            Your study buddy
          </span>
        </p>
        
        {/* Heading */}
        <h2 id="cta-h" className="text-[clamp(2.2rem,5.4vw,3.8rem)] max-w-[20ch] mx-auto mb-[1rem] relative z-10">
          Your notes are sitting right there. Quiz them.
        </h2>
        
        {/* Subtitle */}
        <p className="max-w-[32rem] mx-auto mb-[2rem] text-[1.12rem] relative z-10 text-black">
          Paste one lecture's worth of notes and see your first deck in 20 seconds. Free, no signup, no card — just fewer all-nighters.
        </p>

        {/* Action */}
        <div className="relative z-10">
          <MagneticButton>
            <a 
              href="#main"
              className="inline-flex items-center justify-center gap-2 font-display font-extrabold text-[1.15rem] px-[2.3rem] py-[1rem] brutal-border rounded-xl cursor-pointer brutal-shadow-sm transition-transform transition-shadow transition-colors bg-black text-yellow hover:bg-[#000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_var(--color-black)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--color-black)] focus-visible:outline-[4px] focus-visible:outline-pink focus-visible:outline-offset-[3px] no-underline"
            >
              Turn my notes into a quiz
            </a>
          </MagneticButton>
        </div>
        
        {/* Footnote */}
        <p className="mt-[1rem] text-[0.85rem] font-bold text-[#5A5A00] relative z-10">
          First 3 decks free · Cancel anytime · Your notes are never used to train ads
        </p>
      </motion.div>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    setPosition({
      x: (clientX - centerX) * 0.3,
      y: (clientY - centerY) * 0.3,
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block relative z-10"
    >
      {children}
    </motion.div>
  );
}
```
