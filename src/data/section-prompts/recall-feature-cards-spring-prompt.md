Create a React + Vite + TypeScript + Tailwind CSS 4 component for Feature Cards with a bouncy Spring entrance, inspired by the Recall landing page.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR A 1:1 RESULT)

1. **This design IS Tailwind-utility-heavy — but with arbitrary values everywhere.** Every spacing, radius, rotation, and shadow is an exact arbitrary value like `p-[1.9rem]`, `rounded-[22px]`, `-rotate-[1.3deg]`, `shadow-[4px_4px_0_var(--color-black)]`. **COPY EVERY CLASS STRING VERBATIM.** Do not round or simplify arbitrary values to default Tailwind utility classes.
2. **COPY THE FULL CSS FILE BELOW VERBATIM as `src/index.css`.** It defines the `@theme` tokens (colors, fonts, shadows) and the `.brutal-border`/`.brutal-shadow*` utilities. Everything else is Tailwind v4 utilities in JSX.
3. **Neo-brutalist shadows are hard offsets — zero blur.** Use the `brutal-shadow`, `brutal-shadow-sm`, and `brutal-shadow-lg` utilities.
4. **Every border is `3px solid #191919`** via the `.brutal-border` utility.
5. **Spring Mechanics:** Use Framer Motion `motion.article` with `whileInView`, `initial={{opacity:0, y:50, scale:0.95}}`. The transition MUST use a bouncy spring: `type: "spring", damping: 14, stiffness: 100`.
6. **Staggered Entrances:** Use `viewport={{ once: true, margin: "-10%" }}` and apply a delay calculated by the index modulo 3: `delay: (index % 3) * 0.1` so rows stagger consistently.
7. **Hover Logic:** Feature cards must use `hover:!rotate-0` to straighten on hover, overriding the base utility rotation.

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
import { motion } from "framer-motion";

const features = [
  { id: 1, title: "Flashcards, auto-written", desc: "The AI pulls out every testable fact and writes clean question–answer pairs — including the ones hiding in your margin scribbles.", img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/Toolbox/Flashcards.webp", emojiBg: "bg-yellow-soft", rotate: "-rotate-[1.3deg]" },
  { id: 2, title: "Quizzes that feel like the real test", desc: "Multiple choice, fill-in-the-blank, and short answer — weighted toward whatever your professor said is 'definitely on the exam.'", img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/Toolbox/Quizzes.webp", emojiBg: "bg-pink-soft", rotate: "rotate-[1.1deg]", pill: "Exam mode" },
  { id: 3, title: "Spaced repetition, zero setup", desc: "Recall schedules each card for the moment you're about to forget it. Five minutes a day beats five hours the night before.", img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/Toolbox/Spaced.webp", emojiBg: "bg-[#E9E6FF]", rotate: "-rotate-[0.8deg]" },
  { id: 4, title: "Photos & PDFs welcome", desc: "Snap the whiteboard before it's erased. Upload the 60-slide deck. Handwriting, diagrams, tables — it reads them all.", img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/Toolbox/Photos.webp", emojiBg: "bg-[#E4F7EF]", rotate: "rotate-[1.4deg]" },
  { id: 5, title: "Battle your study group", desc: "Turn any deck into a live quiz battle. Winner picks the pizza toppings; everyone's grades win either way.", img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/Toolbox/Battle.webp", emojiBg: "bg-yellow-soft", rotate: "-rotate-[1deg]" },
  { id: 6, title: "Weak-spot radar", desc: "See exactly which topics keep tripping you up, and get a fresh mini-quiz targeting just those before the exam.", img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Recall/Toolbox/radar.webp", emojiBg: "bg-pink-soft", rotate: "rotate-[0.9deg]", pill: "New" },
];

export function FeatureCardsSpring() {
  return (
    <section id="features" className="py-[5.5rem] pb-[5rem] relative" aria-labelledby="features-h">
      {/* Background Confetti */}
      <span className="absolute top-[6%] left-[5%] w-[12px] h-[12px] rounded-full bg-violet pointer-events-none" aria-hidden="true" />
      <span className="absolute top-[12%] right-[6%] w-[14px] h-[14px] rounded-[4px] rotate-[18deg] bg-pink pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.3, 1.2, 0.45, 1] }}
        className="text-center mb-[3.4rem]"
      >
        <span className="inline-block bg-pink text-white font-display font-extrabold text-[0.85rem] tracking-[0.08em] uppercase rounded-full shadow-[3px_3px_0_var(--color-black)] px-[1rem] py-[0.3rem] mb-[1.2rem] -rotate-[1.2deg] brutal-border">
          The toolbox
        </span>
        <h2 id="features-h" className="text-[clamp(2.15rem,5vw,3.6rem)] max-w-[24ch] mx-auto">
          One paste. Six ways to actually learn it.
        </h2>
        <p className="text-[#3A3A3A] max-w-[36rem] mx-auto mt-[0.9rem] text-[1.1rem]">
          Recall doesn't just quiz you — it schedules the reviews, finds your weak spots, and turns them into tomorrow's warm-up.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.8rem] md:max-w-none max-w-[24rem] mx-auto w-[calc(100%-2.5rem)] max-w-[1120px]">
        {features.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              type: "spring",
              damping: 14,
              stiffness: 100,
              delay: (i % 3) * 0.1
            }}
            className={`bg-white brutal-border rounded-[22px] brutal-shadow p-[1.9rem] px-[1.7rem] relative transition-transform transition-shadow duration-[0.18s] ease-out hover:!rotate-0 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_var(--color-black)] ${s.rotate}`}
          >
            {/* Optional Pill */}
            {s.pill && (
              <span className="absolute -top-[14px] right-[16px] font-display font-extrabold text-[0.7rem] uppercase tracking-[0.07em] bg-yellow brutal-border rounded-full px-[0.7rem] py-[0.2rem] shadow-[2px_2px_0_var(--color-black)] rotate-[3deg]">
                {s.pill}
              </span>
            )}
            
            {/* Icon */}
            <span className={`w-[86px] h-[86px] brutal-border rounded-[18px] grid place-items-center mb-[1.2rem] shadow-[4px_4px_0_var(--color-black)] overflow-hidden ${s.emojiBg}`}>
              <img src={s.img} alt="" className="w-full h-full object-cover" />
            </span>
            
            {/* Content */}
            <h3 className="text-[1.4rem] mb-[0.55rem]">{s.title}</h3>
            <p className="text-[0.95rem] text-[#3A3A3A]">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
