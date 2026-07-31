Create a React + Vite + TypeScript + Tailwind CSS 4 single-page storefront for an avant-garde streetwear label called "AURA" (Aura Design Labs). The page has these parts in order: Preloader (near-black screen with a stacking deck of product photos between giant split "AU" / "RA®" Syne logotype and a 3-digit mono counter, exits by sliding up), Custom Cursor (small blue dot that springs after the mouse and expands into a 100px "VIEW MORE" circle over product cards), fixed Header (✧ mark left; underlined "Shop", "Bag (0)" and three color-way dots right; turns ochre + blend-difference after the hero), full-screen Hero (fisheye street photograph background, giant white mix-blend-difference "AURA [product photo] LABS" wordmark whose two halves horizontally stretch/squeeze with mouse X and drift ±14vw as one group; the square center photo crossfades when either text half is hovered), Editorial sub-header ("THE VISION" kicker + large statement paragraph + link/copyright columns between two 2px blue rules), Product Grid (13 products, 4 columns, two cards spanning 2 columns; each card reveals a second photo on hover via a left-to-right clip-path wipe with a brightness flash and 1.05 zoom, and hides the OS cursor), and a brutalist Footer (giant two-line Syne headline "DESIGNED FOR MOTION. / BUILT FOR TOMORROW." revealed by a blur + clip-path wipe, then a 5-column link grid). Use motion (imported as `motion/react`) for ALL animation — useMotionValue/useSpring/useTransform for the cursor and hero, useScroll + useMotionValueEvent for the header state, useInView for the footer reveal, whileInView for card entrances, AnimatePresence for the preloader — and lenis (plain `new Lenis`, started only after the preloader finishes) for smooth scrolling. No icon library, no router, no state library. The design is brutalist/editorial: bone background `#EAE8E3`, electric blue `#1D4ED8` text, huge black weight headlines, 2px blue horizontal rules, multiply-blended product photography on warm grey `#D8D6D0` cards, and blend-mode typography.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST — CRITICAL FOR 1:1 FIDELITY)

1. **THE ENTIRE SITE LIVES IN ONE FILE: `src/App.tsx` (~570 lines).** Preloader, CustomCursor, ProductCard, the products array, the Lenis setup, Header, Hero, editorial block, grid and Footer are ALL defined in that one file. **COPY THE FULL FILE PROVIDED BELOW VERBATIM.** Do not split it into components folders, do not "clean it up", do not rename anything.
2. **This design IS Tailwind-utility-heavy** (the opposite of hand-written-CSS architectures). All styling is Tailwind classes with arbitrary values (`text-[12vw]`, `px-[1.5vw]`, `bg-[#EAE8E3]`…) plus inline `style` props only where motion values or font-family overrides are needed. Do not move styles into CSS classes or a config file.
3. **COPY `src/index.css` EXACTLY** (it is 13 lines). Its `@theme` sets `--font-sans: "Inter Tight"…`, and it hides the OS cursor globally: `body { cursor: none }` and `a, button { cursor: none }`. **Do not remove those rules** — the blue CustomCursor replaces the native cursor; leaving `cursor:auto` anywhere breaks the effect. Product cards additionally set `cursor-none` themselves.
4. **Fonts load in `index.html` via two Google Fonts `<link>` tags** (Inter Tight full axis range + Syne 400–800) — NOT via CSS `@import`. Title is `AURA - Apparel`.
5. **`mix-blend-multiply` and `mix-blend-difference` are load-bearing, not decorative.** Product images sit on `#D8D6D0` and blend with `mix-blend-multiply` (their white studio backgrounds disappear into the grey). The hero "AURA"/"LABS" and the preloader "AU"/"RA" are `text-white mix-blend-difference` so they invert over photography. Do not remove these classes.
6. **Lenis must start ONLY after the preloader completes.** The `useEffect` that creates `new Lenis({...})` is gated on `isLoading` and the root div gets `h-screen overflow-hidden` while loading, so the page cannot scroll during the intro.
7. **All 30 images are hosted at `https://aura-ecommerce-landing.vercel.app/assets/`** (13 product pairs + `hero-bg` + 3 `hero-txt` variants). They are declared as URL `const`s at the top of `App.tsx` — reference them directly, do NOT download, re-host, or rewrite them as local `import ... from './Image/...'` statements.
8. **Motion values drive several inline styles** (`x`, `y`, `scaleX`, `translateX/-50%`, `mixBlendMode`, `perspective`). Those must stay as `style={{ ... }}` props on `motion.*` elements — do not convert them to classes.
9. Keep every animation parameter exactly as written: spring `{ damping: 25, stiffness: 300, mass: 0.5 }` for the cursor, `{ damping: 30, stiffness: 200, mass: 0.5 }` for the hero, easings `[0.76, 0, 0.24, 1]`, `[0.16, 1, 0.3, 1]`, `[0.65, 0, 0.35, 1]`, `[0.33, 1, 0.68, 1]`. These ARE the feel of the site.
10. `lucide-react`, `@google/genai`, `express`, `dotenv` may exist in package.json from scaffolding — **the page imports none of them**. Only `react`, `react-dom`, `motion/react`, and `lenis` are used.

---

# FONTS

Two Google Fonts, loaded via `<link>` tags in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">
```

- **Inter Tight** — global sans via `@theme { --font-sans: "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif; }` (body, nav, product captions, editorial text, hero is styled `'Inter', sans-serif` inline — keep that inline value verbatim even though only Inter Tight is loaded).
- **Syne** — used inline via `style={{ fontFamily: "'Syne', sans-serif" }}"` for the preloader "AU"/"RA" and the footer giant headlines only.

---

# SCAFFOLD FILES — COPY EXACTLY

## `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AURA - Apparel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## `vite.config.ts`

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
```

## `src/main.tsx`

```tsx
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

## `src/index.css`

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body {
  cursor: none;
}

a, button {
  cursor: none;
}
```

---

# FULL `src/App.tsx` — COPY THIS EXACTLY

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent, useInView } from 'motion/react';
import Lenis from 'lenis';

// All 30 images are hosted on Vercel — reference them directly by URL.
// Do NOT download, re-host, or rewrite these as local imports.
const sh = 'https://aura-ecommerce-landing.vercel.app/assets/sh-D0FCgtva.png';
const shHover = 'https://aura-ecommerce-landing.vercel.app/assets/sh-hover-CAWUcjTm.png';
const sh2 = 'https://aura-ecommerce-landing.vercel.app/assets/sh2-CrDT5Rh_.png';
const sh2Hover = 'https://aura-ecommerce-landing.vercel.app/assets/sh2-hover-DHiGFNHz.png';
const sh3 = 'https://aura-ecommerce-landing.vercel.app/assets/sh3-C3IVrhnj.png';
const sh3Hover = 'https://aura-ecommerce-landing.vercel.app/assets/sh3-hover-DH9JpIOp.png';
const hd = 'https://aura-ecommerce-landing.vercel.app/assets/hd-MEY3UWgC.png';
const hdHover = 'https://aura-ecommerce-landing.vercel.app/assets/hd-hover-BSILjcBO.png';
const hd2 = 'https://aura-ecommerce-landing.vercel.app/assets/hd2-DIyPjyXt.png';
const hd2Hover = 'https://aura-ecommerce-landing.vercel.app/assets/hd2-hover-CllXoBTl.png';
const cp = 'https://aura-ecommerce-landing.vercel.app/assets/cp-B_Ka_2N5.png';
const cpHover = 'https://aura-ecommerce-landing.vercel.app/assets/cp-hover-WdG_u0e_.png';
const cp2 = 'https://aura-ecommerce-landing.vercel.app/assets/cp2-CEn-CmuU.png';
const cp2Hover = 'https://aura-ecommerce-landing.vercel.app/assets/cp2-hover-C0Gvhfbw.png';
const bp = 'https://aura-ecommerce-landing.vercel.app/assets/bp-CPsZAUoT.png';
const bpHover = 'https://aura-ecommerce-landing.vercel.app/assets/bp-hover-uzbpAEzW.png';
const bn = 'https://aura-ecommerce-landing.vercel.app/assets/bn-DsXSaRqF.png';
const bnHover = 'https://aura-ecommerce-landing.vercel.app/assets/bn-hover-DN163fkN.png';
const bg = 'https://aura-ecommerce-landing.vercel.app/assets/bg-KkjR9Z0O.png';
const bgHover = 'https://aura-ecommerce-landing.vercel.app/assets/bg-hover-DOJED06E.png';
const tb = 'https://aura-ecommerce-landing.vercel.app/assets/tb-uboJw3tx.png';
const tbHover = 'https://aura-ecommerce-landing.vercel.app/assets/tb-hover-Dqis1yPr.png';
const tb2 = 'https://aura-ecommerce-landing.vercel.app/assets/tb2-BshQFmiO.png';
const tb2Hover = 'https://aura-ecommerce-landing.vercel.app/assets/tb2-hover-BnQ1tk7d.png';
const eye = 'https://aura-ecommerce-landing.vercel.app/assets/eye-BaXdsfwW.png';
const eyeHover = 'https://aura-ecommerce-landing.vercel.app/assets/eye-hover-B7LchLz6.png';
const heroBg = 'https://aura-ecommerce-landing.vercel.app/assets/hero-bg-P2mzmULA.png';
const heroTxt1 = 'https://aura-ecommerce-landing.vercel.app/assets/hero-txt1-Be79_yCj.png';
const heroTxt2 = 'https://aura-ecommerce-landing.vercel.app/assets/hero-txt2-BbghUJQJ.png';
const heroTxt3 = 'https://aura-ecommerce-landing.vercel.app/assets/hero-txt3-Dn8T-mbk.png';

const PRELOADER_IMAGES = [
  sh,
  cpHover,
  hd,
  tbHover,
  bp,
  bnHover,
];

const products = [
  { id: 1, title: 'Aura Shirt', price: '$35.00', category: '● APPAREL', image: sh, hoverImage: shHover, colSpan: 1 },
  { id: 2, title: 'Aura Shirt 2', price: '$35.00', category: '● APPAREL', image: sh2, hoverImage: sh2Hover, colSpan: 1 },
  { id: 3, title: 'Aura Shirt 3', price: '$35.00', category: '● APPAREL', image: sh3, hoverImage: sh3Hover, colSpan: 1 },
  { id: 4, title: 'Aura Hoodie', price: '$65.00', category: '● APPAREL', image: hd, hoverImage: hdHover, colSpan: 1 },
  { id: 5, title: 'Aura Hoodie 2', price: '$65.00', category: '● APPAREL', image: hd2, hoverImage: hd2Hover, colSpan: 1 },
  { id: 6, title: 'Aura Cap', price: '$25.00', category: '● ACCESSORIES', image: cp, hoverImage: cpHover, colSpan: 1 },
  { id: 7, title: 'Aura Backpack', price: '$85.00', category: '● BAGS', image: bp, hoverImage: bpHover, colSpan: 2 },
  { id: 8, title: 'Aura Beanie', price: '$20.00', category: '● ACCESSORIES', image: bn, hoverImage: bnHover, colSpan: 1 },
  { id: 9, title: 'Aura Bag', price: '$45.00', category: '● BAGS', image: bg, hoverImage: bgHover, colSpan: 1 },
  { id: 10, title: 'Aura Tote Bag', price: '$30.00', category: '● BAGS', image: tb, hoverImage: tbHover, colSpan: 1 },
  { id: 11, title: 'Aura Cap 2', price: '$25.00', category: '● ACCESSORIES', image: cp2, hoverImage: cp2Hover, colSpan: 2 },
  { id: 12, title: 'Aura Tote Bag 2', price: '$30.00', category: '● BAGS', image: tb2, hoverImage: tb2Hover, colSpan: 1 },
  { id: 13, title: 'Aura Eye', price: '$15.00', category: '● ACCESSORIES', image: eye, hoverImage: eyeHover, colSpan: 1 },
];

function CustomCursor({ isHovering }: { isHovering: boolean }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center overflow-hidden bg-[#1D4ED8] text-white font-bold text-[10px] tracking-wider"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ width: 12, height: 12 }}
      animate={{
        width: isHovering ? 100 : 12,
        height: isHovering ? 100 : 12,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-center leading-none"
          >
            VIEW<br />MORE
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ProductCardProps {
  product: any;
  setCursorHovering: (val: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, setCursorHovering }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col group cursor-none ${product.colSpan === 2 ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorHovering(false);
      }}
    >
      <div className="relative overflow-hidden bg-[#D8D6D0] aspect-[4/5] w-full">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full relative"
        >
          {/* Base Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover mix-blend-multiply absolute inset-0"
          />
          {/* Hover Image Reveal */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-[#D8D6D0]"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: isHovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <motion.img
              src={product.hoverImage}
              alt={`${product.title} alternate`}
              className="w-full h-full object-cover mix-blend-multiply"
              animate={{ filter: isHovered ? ['brightness(1.5)', 'brightness(1)'] : 'brightness(1)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-between items-start mt-3 text-sm md:text-base font-medium">
        <div>
          <h3 className="leading-tight group-hover:text-black transition-colors duration-300">{product.title}</h3>
          <p className="text-[10px] md:text-xs mt-1 uppercase tracking-wider">{product.category}</p>
        </div>
        <div className="group-hover:text-black transition-colors duration-300">{product.price}</div>
      </div>
    </motion.div>
  );
}

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stack, setStack] = useState<{ id: number, url: string, rot: number }[]>([]);

  useEffect(() => {
    let step = 0;
    const totalSteps = 40;
    const interval = setInterval(() => {
      step++;
      const newProgress = Math.min(100, Math.floor((step / totalSteps) * 100));
      setProgress(newProgress);

      if (step % 2 === 0 && newProgress < 100) {
        setStack(prev => {
          const nextImg = PRELOADER_IMAGES[(step / 2) % PRELOADER_IMAGES.length];
          const rot = (Math.random() - 0.5) * 40;
          const newStack = [...prev, { id: step, url: nextImg, rot }];
          if (newStack.length > 6) newStack.shift();
          return newStack;
        });
      }

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 600);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 bg-[#0A0A0A] text-[#EAE8E3] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-full h-full max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-[18vw] md:text-[14vw] font-black tracking-tighter z-30 mix-blend-difference leading-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          AU
        </motion.div>

        <div className="absolute w-[35vw] h-[45vw] md:w-[16vw] md:h-[20vw] flex items-center justify-center z-20">
          {stack.map((img) => (
            <motion.div
              key={img.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: img.rot }}
              className="absolute w-full h-full"
            >
              <img src={img.url} className="w-full h-full object-cover" alt="" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-[18vw] md:text-[14vw] font-black tracking-tighter z-30 mix-blend-difference flex items-start leading-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          RA
          <span className="text-[3vw] md:text-[1.5vw] ml-1 md:ml-2 mt-[2vw] md:mt-[1.5vw] border-[2px] md:border-[3px] border-white rounded-full w-[4vw] h-[4vw] md:w-[2.5vw] md:h-[2.5vw] flex items-center justify-center font-bold tracking-normal leading-none">
            R
          </span>
        </motion.div>

        <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 font-mono text-sm md:text-xl font-medium tracking-widest z-10">
          {progress.toString().padStart(3, '0')}
        </div>
      </div>
    </motion.div>
  );
}



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorHovering, setCursorHovering] = useState(false);

  // Hero Interaction State
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, { once: true, margin: "0px 0px -50px 0px" });
  
  const [hoveredSide, setHoveredSide] = useState<'none' | 'left' | 'right'>('none');

  const heroImagesData = [
    { src: heroTxt1 }, // 0: Default
    { src: heroTxt2 }, // 1: Left Hover
    { src: heroTxt3 }, // 2: Right Hover
  ];

  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };

  // Gepeng/Stretch effect (scaleX) and Image movement
  const leftTextScaleX = useSpring(useTransform(heroMouseX, [-0.5, 0.5], [0.5, 1.5]), springConfig);
  const rightTextScaleX = useSpring(useTransform(heroMouseX, [-0.5, 0.5], [1.5, 0.5]), springConfig);

  const groupX = useSpring(useTransform(heroMouseX, [-0.5, 0.5], ['-14vw', '14vw']), springConfig);

  const { scrollY } = useScroll();
  const [isPastHero, setIsPastHero] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.8) {
      setIsPastHero(true);
    } else {
      setIsPastHero(false);
    }
  });

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    heroMouseX.set(nx);
    heroMouseY.set(ny);
  };

  const handleHeroMouseLeave = () => {
    heroMouseX.set(0);
    heroMouseY.set(0);
  };

  const activeImageIndex = hoveredSide === 'left' ? 1 : hoveredSide === 'right' ? 2 : 0;

  useEffect(() => {
    if (isLoading) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <CustomCursor isHovering={cursorHovering} />
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-[#EAE8E3] text-[#1D4ED8] font-sans overflow-clip selection:bg-[#1D4ED8] selection:text-[#EAE8E3] ${isLoading ? 'h-screen overflow-hidden' : ''} cursor-default`}>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20, color: '#FFFFFF' }}
          animate={isLoading ? { opacity: 0, y: -20 } : { opacity: 1, y: 0, color: isPastHero ? '#C58500' : '#FFFFFF' }}
          transition={{ duration: 0.8, delay: isLoading ? 0.4 : 0, ease: "easeOut" }}
          style={{ mixBlendMode: isPastHero ? 'difference' : 'normal' }}
          className="p-4 md:p-6 lg:p-8 flex justify-between items-start fixed top-0 left-0 w-full z-50"
        >
          <div className="text-2xl font-bold tracking-tighter leading-none mt-1">✧</div>
          <div className="flex gap-8 lg:gap-16 items-center">
            <a href="#" className="underline underline-offset-4 decoration-1 font-medium text-lg hover:opacity-80 transition-opacity">Shop</a>
            <a href="#" className="font-medium text-lg hover:opacity-80 transition-opacity">Bag (0)</a>
            <div className="flex gap-2 items-center ml-2">
              <div className="w-5 h-5 rounded-full bg-white"></div>
              <div className="w-5 h-5 rounded-full bg-black border border-white"></div>
              <div className="w-5 h-5 rounded-full bg-[#C58500] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <div
          className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden bg-[#EAE8E3] pb-16 md:pb-20 lg:pb-24"
          style={{ perspective: 1200 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={isLoading ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={heroBg}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Hero Content - Unified Layout for perfectly consistent gaps */}
          <div 
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
            className="relative z-10 flex items-center justify-center w-full max-w-[100vw] overflow-hidden py-[100px] translate-y-[10vh] md:translate-y-[15vh]"
          >

            {/* The unified moving group */}
            <motion.div
              className="flex items-center"
              style={{ x: groupX }}
            >

              {/* Left Squeezable Text */}
              <div
                className="cursor-pointer px-[1vw] md:px-[1.5vw]"
                onMouseEnter={() => setHoveredSide('left')}
                onMouseLeave={() => setHoveredSide('none')}
              >
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={isLoading ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[12vw] md:text-[11vw] lg:text-[11.5vw] font-black tracking-tight leading-[0.8] text-white mix-blend-difference whitespace-nowrap z-10"
                  style={{ fontFamily: "'Inter', sans-serif", scaleX: leftTextScaleX, transformOrigin: 'right center' }}
                >
                  AURA
                </motion.h1>
              </div>

              {/* Static Interactive Center Image */}
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={isLoading ? { y: 50, opacity: 0, scale: 0.8 } : { y: 0, opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, delay: isLoading ? 0.4 : 0, ease: [0.76, 0, 0.24, 1] }}
                className="relative w-[10vw] md:w-[9vw] lg:w-[9vw] aspect-square overflow-hidden z-20 rounded-xl md:rounded-2xl shadow-2xl shrink-0 pointer-events-auto"
              >
                {heroImagesData.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img.src}
                    alt={`Hero Center ${idx}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeImageIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
              </motion.div>

              {/* Right Squeezable Text */}
              <div
                className="cursor-pointer px-[1vw] md:px-[1.5vw]"
                onMouseEnter={() => setHoveredSide('right')}
                onMouseLeave={() => setHoveredSide('none')}
              >
                <motion.h1
                  initial={{ x: 50, opacity: 0 }}
                  animate={isLoading ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[12vw] md:text-[11vw] lg:text-[11.5vw] font-black tracking-tight leading-[0.8] text-white mix-blend-difference whitespace-nowrap z-10"
                  style={{ fontFamily: "'Inter', sans-serif", scaleX: rightTextScaleX, transformOrigin: 'left center' }}
                >
                  LABS
                </motion.h1>
              </div>

            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
          animate={isLoading ? { opacity: 0, y: 50, filter: 'blur(5px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-4 md:px-6 lg:px-8 mt-8 md:mt-12">
            <hr className="border-t-[2px] border-[#1D4ED8]" />
          </div>

          {/* Sub-header Editorial Layout */}
          <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
            <div className="md:w-2/3">
              <div className="uppercase text-[10px] md:text-xs mb-6 font-bold tracking-widest flex items-center gap-3 text-[#1D4ED8]">
                <span className="w-2 h-2 bg-[#1D4ED8] rounded-full"></span>
                THE VISION
              </div>
              <p className="text-xl md:text-2xl lg:text-4xl font-medium leading-[1.1] tracking-tight">
                Created by the <span className="font-black italic">Aura Design Labs</span>, this signature collection celebrates our collective creativity and passion for apparel. Carefully engineered for tomorrow.
              </p>
            </div>

            <div className="md:w-1/3 flex flex-col sm:flex-row md:flex-col gap-8 md:gap-12 text-[10px] md:text-xs font-bold uppercase tracking-wider md:text-right md:items-end">
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">VISIT ✧ WEBSITE</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">SHIPPING &amp; RETURNS</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">TERMS OF SERVICE</a>
              </div>

              <div className="flex flex-col gap-3">
                <div>AURA APPAREL</div>
                <div className="text-[#1D4ED8]">© 2026</div>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-6 lg:px-8 mb-8">
            <hr className="border-t-[2px] border-[#1D4ED8]" />
          </div>

          {/* Product Grid */}
          <main className="px-4 md:px-6 lg:px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-16 items-start">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} setCursorHovering={setCursorHovering} />
              ))}
            </div>
          </main>

          {/* Minimalist Brutalist Footer */}
          <footer ref={footerRef} className="pt-16 md:pt-24 pb-12 px-4 md:px-6 lg:px-8 overflow-hidden flex flex-col">
            <motion.div
              initial={{ clipPath: "inset(-50% 100% -50% -50%)", filter: "blur(16px)" }}
              animate={footerInView ? { 
                clipPath: "inset(-50% 0% -50% -50%)",
                filter: "blur(0px)"
              } : {}}
              transition={{ 
                duration: 1.5, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col mb-16 md:mb-32"
            >
              <h2 className="text-[13vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
                DESIGNED FOR MOTION.
              </h2>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mt-2 md:mt-0 gap-6">
                <h2 className="text-[13vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter text-[#1D4ED8]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  BUILT FOR TOMORROW.
                </h2>
                <div className="max-w-[400px] shrink lg:text-right text-xs md:text-sm font-bold leading-snug">
                  Created by the Aura Design Labs, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully engineered.
                </div>
              </div>
            </motion.div>
            <hr className="border-t-[2px] border-[#1D4ED8] mb-8" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-[10px] md:text-[11px] lg:text-xs font-bold">
              <div className="col-span-2 md:col-span-1">
                <div className="font-black text-sm mb-2 text-[#1D4ED8]">AURA DESIGN LABS</div>
                <div className="opacity-60">All rights reserved © 2026</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div>Libertad 2529</div>
                <div>Office 102</div>
                <div>Montevideo, Uruguay</div>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Dribbble</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Twitter (X)</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Work</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Services</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">About</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Careers</a>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#1D4ED8] transition-colors">Terms of Service</a>
                <a href="#" className="text-[#1D4ED8] mt-4">Let's talk ↗</a>
              </div>
            </div>
          </footer>
        </motion.div>
      </div>
    </>
  );
}
```

---

# DESIGN TOKENS & LAYOUT CHEAT-SHEET (quick reference — all already in the code above)

## Colors
| Token | Hex | Usage |
|---|---|---|
| Bone | `#EAE8E3` | Page background, preloader text, selection text |
| Blue | `#1D4ED8` | ALL body text, rules, kickers, links, cursor, selection bg |
| Card grey | `#D8D6D0` | Product image well background (base + hover wipe layer) |
| Preloader black | `#0A0A0A` | Preloader background |
| Ochre | `#C58500` | Header color after 80% of hero scrolled; 3rd color dot |
| White | `#FFFFFF` | Hero + preloader display type (with `mix-blend-difference`), header before fold |

## Type
| Element | Classes |
|---|---|
| Hero "AURA"/"LABS" | `text-[12vw] md:text-[11vw] lg:text-[11.5vw] font-black tracking-tight leading-[0.8] text-white mix-blend-difference whitespace-nowrap`, inline `fontFamily:'Inter',sans-serif` |
| Preloader "AU"/"RA" | `text-[18vw] md:text-[14vw] font-black tracking-tighter mix-blend-difference leading-none`, Syne inline |
| Footer headlines | `text-[13vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter`, Syne inline; line 2 is `text-[#1D4ED8]` |
| Editorial statement | `text-xl md:text-2xl lg:text-4xl font-medium leading-[1.1] tracking-tight` |
| Kickers / meta | `text-[10px] md:text-xs font-bold uppercase tracking-widest` |
| Nav links | `font-medium text-lg` ("Shop" also `underline underline-offset-4 decoration-1`) |

## Spacing
| Element | Value |
|---|---|
| Global page gutter | `px-4 md:px-6 lg:px-8` (header uses same scale as `p-*`) |
| Hero | `h-screen`, bottom-anchored content, `pb-16 md:pb-20 lg:pb-24`, inner group `py-[100px] translate-y-[10vh] md:translate-y-[15vh]` |
| Rules | `<hr className="border-t-[2px] border-[#1D4ED8]">`, wrapped in guttered divs (`mt-8 md:mt-12` above the first, `mb-8` on the second/third) |
| Editorial block | `py-8 md:py-12`, `gap-12 md:gap-24`, left col `md:w-2/3`, right col `md:w-1/3` |
| Product grid | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-16 items-start`, container `pb-24` |
| Product image well | `aspect-[4/5]`, caption row `mt-3` |
| Footer | `pt-16 md:pt-24 pb-12`, headline block `mb-16 md:mb-32`, link grid `grid-cols-2 md:grid-cols-5 gap-8 md:gap-4` |

---

# SECTIONS — STRUCTURE, CONTENT & ANIMATION SPEC

Everything below is already in the verbatim `App.tsx` above; this is the behavioral contract to verify against.

## 1. PRELOADER (`Preloader`)
- Fixed `inset-0 z-50 bg-[#0A0A0A] text-[#EAE8E3] flex items-center justify-center overflow-hidden`; exits with `y:"-100%"`, `duration:0.8`, ease `[0.76,0,0.24,1]`.
- Timer: `setInterval` 60ms × 40 steps → progress 0→100; every 2nd step pushes the next of `PRELOADER_IMAGES` (`[sh, cpHover, hd, tbHover, bp, bnHover]`) into a stack capped at 6 (oldest shifted out) with random rotation `±20deg`; at 100, waits 600ms then calls `onComplete`.
- Layout: giant "AU" (left, slides in from x:-50) and "RA" (right, from x:50) in Syne at `18vw/14vw`, `mix-blend-difference`, sandwiching the absolute-centered image stack (`w-[35vw] h-[45vw] md:w-[16vw] md:h-[20vw]`, images scale 0.8→1 + rotate in). "RA" carries a circular ® badge: bordered white circle containing "R" (`w-[4vw] md:w-[2.5vw]`). Counter sits vertically centered at the right edge: `font-mono`, `progress.padStart(3,'0')` → renders `000`…`100`.
- Root page div is `h-screen overflow-hidden` while loading — no scroll possible.

## 2. CUSTOM CURSOR (`CustomCursor`)
- `motion.div` fixed, `z-[100]`, `pointer-events-none`, `rounded-full bg-[#1D4ED8]`, centered on the pointer via springs (`damping:25, stiffness:300, mass:0.5`) + `translateX/Y:-50%`.
- Resting size 12×12px; over any product card it springs to 100×100px and fades in white bold 10px `VIEW<br/>MORE` (AnimatePresence, scale 0.5→1).
- `isHovering` is lifted state (`cursorHovering` in `App`), toggled by ProductCard mouse enter/leave.

## 3. HEADER
- `motion.header` `fixed top-0 left-0 w-full z-50 p-4 md:p-6 lg:p-8 flex justify-between items-start`.
- Left: `✧` glyph (`text-2xl font-bold tracking-tighter mt-1`).
- Right row (`gap-8 lg:gap-16 items-center`): `Shop` (underlined), `Bag (0)`, then three 20px dots: white / black with white border / `#C58500` containing a 6px black dot.
- Behavior: fades/slides in after preloader (`y:-20→0, 0.8s`). Color is white over the hero; once `scrollY > 0.8 × innerHeight` it animates to `#C58500` and `mixBlendMode` flips to `difference` (normal before). Driven by `useScroll` + `useMotionValueEvent`.

## 4. HERO
- Wrapper: `relative w-full h-screen flex flex-col items-center justify-end overflow-hidden bg-[#EAE8E3] pb-16 md:pb-20 lg:pb-24`, inline `perspective:1200`.
- Background: absolute `motion.img` (`heroBg`) scale 1.1→1 over 1.5s after load + `bg-black/10` overlay.
- Interactive layer tracks the mouse: normalized `nx, ny ∈ [-0.5, 0.5]`; resets to 0 on leave. Springs: `{ damping:30, stiffness:200, mass:0.5 }`.
  - `groupX = [-0.5,0.5] → ['-14vw','14vw']` applied to the flex group holding all three children.
  - `leftTextScaleX = [0.5 → 1.5]`, origin `right center`; `rightTextScaleX = [1.5 → 0.5]`, origin `left center` — moving the mouse right stretches AURA and squeezes LABS, and vice-versa.
- "AURA" and "LABS" `<motion.h1>`s: white, `mix-blend-difference`, `whitespace-nowrap`, enter from `x:∓50` (1.2s, delay 0.2, ease `[0.76,0,0.24,1]`). Each wrapped in a hover pad (`px-[1vw] md:px-[1.5vw]`, `cursor-pointer`) that sets `hoveredSide`.
- Center image block: `w-[10vw] md:w-[9vw] aspect-square rounded-xl md:rounded-2xl shadow-2xl overflow-hidden`, enters `y:50, scale:0.8 → 0/1`, `whileHover scale:1.05`. Inside, three stacked photos crossfade (`opacity`, 0.5s): index 0 = `hero-txt1` (default), 1 = `hero-txt2` (hovering AURA), 2 = `hero-txt3` (hovering LABS).

## 5. EDITORIAL SUB-HEADER
- The whole post-hero flow is wrapped in one `motion.div` that enters once after loading: `opacity:0, y:50, blur(5px)` → clear, 1.2s, delay 0.2, ease `[0.16,1,0.3,1]`.
- 2px blue rule → two-column block: left kicker `● THE VISION` (2px blue dot + bold tracking-widest) and the statement "Created by the **Aura Design Labs** *(font-black italic)*, this signature collection celebrates our collective creativity and passion for apparel. Carefully engineered for tomorrow."; right column (right-aligned on md+): links `VISIT ✧ WEBSITE` / `SHIPPING & RETURNS` / `TERMS OF SERVICE`, then `AURA APPAREL` / `© 2026` (blue). → second 2px rule (`mb-8`).

## 6. PRODUCT GRID + CARD (`ProductCard`)
- Grid: 1/2/4 columns, two products span 2 (`md:col-span-2 lg:col-span-2`): **Aura Backpack** (#7) and **Aura Cap 2** (#11).
- Card entrance: `whileInView` once, `margin:"-50px"`: `opacity:0, y:60, blur(4px)` → clear, 1.2s, ease `[0.16,1,0.3,1]`.
- Hover choreography (state `isHovered`):
  1. Inner wrapper zooms `scale 1 → 1.05` (0.6s, ease `[0.33,1,0.68,1]`).
  2. Hover layer (same `#D8D6D0` bg) wipes in from the left: `clipPath inset(0 100% 0 0) → inset(0 0% 0 0)` (0.5s, ease `[0.65,0,0.35,1]`), wipes back on leave.
  3. Hover photo flashes `brightness(1.5) → brightness(1)` (0.8s easeOut).
  4. Both photos `object-cover mix-blend-multiply`; card sets `cursor-none` and pings the CustomCursor into "VIEW MORE".
- Caption row: title + `● CATEGORY` left, price right; title/price go `text-black` on hover (`group-hover:text-black`, 300ms).

## 7. FOOTER
- `footerRef` + `useInView({ once:true, margin:"0px 0px -50px 0px" })`.
- Headline block reveal: `clipPath inset(-50% 100% -50% -50%) + blur(16px)` → `inset(-50% 0% -50% -50%) + blur(0)`, 1.5s, ease `[0.16,1,0.3,1]` (the negative vertical insets intentionally bleed the huge type).
- Line 1 "DESIGNED FOR MOTION." bone-on-blue-inherited color; row with line 2 "BUILT FOR TOMORROW." (blue) + right-aligned 400px blurb: "Created by the Aura Design Labs, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully engineered."
- 2px rule, then 5-column grid: **AURA DESIGN LABS** / All rights reserved © 2026 (opacity-60) · Libertad 2529 / Office 102 / Montevideo, Uruguay · Dribbble / Instagram / LinkedIn / Twitter (X) · Work / Services / About / Careers · Privacy Policy / Terms of Service / **Let's talk ↗** (blue, `mt-4`).

## 8. SMOOTH SCROLL (Lenis)
- Instantiated in `useEffect` gated on `isLoading` (starts only when the preloader finishes), exact options: `duration:1.2`, `easing:(t)=>Math.min(1, 1.001 - Math.pow(2, -10*t))`, `orientation:'vertical'`, `gestureOrientation:'vertical'`, `smoothWheel:true`, `wheelMultiplier:1`, `touchMultiplier:2`. Own `requestAnimationFrame` loop; `lenis.destroy()` on cleanup.

---

# PRODUCT DATA (exact)

| # | Title | Price | Category | Image consts | Span |
|---|---|---|---|---|---|
| 1 | Aura Shirt | $35.00 | ● APPAREL | `sh` / `shHover` | 1 |
| 2 | Aura Shirt 2 | $35.00 | ● APPAREL | `sh2` / `sh2Hover` | 1 |
| 3 | Aura Shirt 3 | $35.00 | ● APPAREL | `sh3` / `sh3Hover` | 1 |
| 4 | Aura Hoodie | $65.00 | ● APPAREL | `hd` / `hdHover` | 1 |
| 5 | Aura Hoodie 2 | $65.00 | ● APPAREL | `hd2` / `hd2Hover` | 1 |
| 6 | Aura Cap | $25.00 | ● ACCESSORIES | `cp` / `cpHover` | 1 |
| 7 | Aura Backpack | $85.00 | ● BAGS | `bp` / `bpHover` | **2** |
| 8 | Aura Beanie | $20.00 | ● ACCESSORIES | `bn` / `bnHover` | 1 |
| 9 | Aura Bag | $45.00 | ● BAGS | `bg` / `bgHover` | 1 |
| 10 | Aura Tote Bag | $30.00 | ● BAGS | `tb` / `tbHover` | 1 |
| 11 | Aura Cap 2 | $25.00 | ● ACCESSORIES | `cp2` / `cp2Hover` | **2** |
| 12 | Aura Tote Bag 2 | $30.00 | ● BAGS | `tb2` / `tb2Hover` | 1 |
| 13 | Aura Eye | $15.00 | ● ACCESSORIES | `eye` / `eyeHover` | 1 |

Note the `●` character is part of the category string.

---

# COMMON MISTAKES TO AVOID (these break the 1:1 look & feel)

1. ❌ Removing `cursor:none` from `body`/`a,button` in `index.css` or from the product card — the OS cursor must never double-render next to the blue custom cursor.
2. ❌ Dropping `mix-blend-multiply` on product images or `mix-blend-difference` on hero/preloader type — the images will show white boxes and the headline will turn invisible-white over the photo.
3. ❌ Starting Lenis on mount — it MUST wait for `isLoading === false`, and the root div must keep `h-screen overflow-hidden` during the intro, otherwise the preloader scrolls.
4. ❌ Swapping the preloader's interval logic for a fake timeout — progress is `Math.floor((step/40)*100)` rendered with `padStart(3,'0')`, images push every 2nd step, cap 6.
5. ❌ Rendering "AURA", the center image and "LABS" as separate absolute elements — they are ONE flex group translated by `groupX` (±14vw); the gap consistency depends on it.
6. ❌ Applying `scaleX` without the matching `transformOrigin` (`right center` on AURA, `left center` on LABS) — the stretch must grow toward/away from the center image.
7. ❌ Forgetting `overflow-hidden` + same-bg (`#D8D6D0`) on the hover wipe layer — the clip-path wipe reveals a second blended photo, not a solid card.
8. ❌ Using `hover:scale-105` Tailwind classes instead of the motion `animate` props — all hover motion is JS-driven with specific easings; CSS transitions will fight it.
9. ❌ Replacing `<hr>` elements with `<div className="h-[2px] bg-...">` — they are literal `<hr className="border-t-[2px] border-[#1D4ED8]" />` inside guttered wrappers.
10. ❌ Changing viewport breakpoints or the two `col-span-2` products (#7 Backpack, #11 Cap 2) — the grid rhythm (1/2/4 cols, `gap-y-16`) is part of the design.
11. ❌ Importing an icon library or adding a router/cart state — this is a single static page; links are all `href="#"`.
12. ❌ "Fixing" the inline `fontFamily: "'Inter', sans-serif"` on the hero h1s or the mojibake-free but unusual one-file architecture — copy verbatim.
13. ❌ Downloading, re-hosting, or regenerating the images, or rewriting the hosted URL constants as local `import` statements — use the 30 Vercel URLs exactly as declared at the top of `App.tsx`.

---

# IMAGES

All 30 images are hosted on Vercel — reference them directly by URL. **No local files, no downloads, no regeneration needed.** The exact `const` mapping at the top of `App.tsx` (see the verbatim file above) is canonical; this table documents what each asset is. Art direction, for context only: washed/faded black grunge streetwear with a gothic lowercase "aura" logotype and cut-out panel construction; two photo styles — **(A) model studio shots on a pure WHITE background** (card bases, so `mix-blend-multiply` melts them into the grey well) and **(B) flat-lay / detail shots on a deep royal BLUE background** (hover reveals and hero center tiles).

Base URL: `https://aura-ecommerce-landing.vercel.app/assets/`

| Const | URL (append to base URL) | Content |
|---|---|---|
| `heroBg` | `hero-bg-P2mzmULA.png` | 16:9 fisheye-lens street photograph: three young models in oversized faded-black streetwear standing in the middle of an empty Tokyo-like intersection, glass buildings, clear blue sky |
| `heroTxt1` | `hero-txt1-Be79_yCj.png` | Square flat-lay of the faded black acid-wash cut-out "aura" tee on deep blue (default hero center tile) |
| `heroTxt2` | `hero-txt2-BbghUJQJ.png` | Square portrait: female model in black tank top wearing a faded black "aura" cap pulled over her eyes, deep blue (AURA-hover tile) |
| `heroTxt3` | `hero-txt3-Dn8T-mbk.png` | Square back-of-head portrait: model in a distressed beige corduroy "aura" beanie and black tee, deep blue (LABS-hover tile) |
| `sh` / `shHover` | `sh-D0FCgtva.png` / `sh-hover-CAWUcjTm.png` | Product 1 "Aura Shirt": model on white / flat-lay on blue |
| `sh2` / `sh2Hover` | `sh2-CrDT5Rh_.png` / `sh2-hover-DHiGFNHz.png` | Product 2 "Aura Shirt 2", same pattern |
| `sh3` / `sh3Hover` | `sh3-C3IVrhnj.png` / `sh3-hover-DH9JpIOp.png` | Product 3 "Aura Shirt 3", same pattern |
| `hd` / `hdHover` | `hd-MEY3UWgC.png` / `hd-hover-BSILjcBO.png` | Product 4 "Aura Hoodie", same pattern |
| `hd2` / `hd2Hover` | `hd2-DIyPjyXt.png` / `hd2-hover-CllXoBTl.png` | Product 5 "Aura Hoodie 2", same pattern |
| `cp` / `cpHover` | `cp-B_Ka_2N5.png` / `cp-hover-WdG_u0e_.png` | Product 6 "Aura Cap", same pattern |
| `bp` / `bpHover` | `bp-CPsZAUoT.png` / `bp-hover-uzbpAEzW.png` | Product 7 "Aura Backpack" (wide card), same pattern |
| `bn` / `bnHover` | `bn-DsXSaRqF.png` / `bn-hover-DN163fkN.png` | Product 8 "Aura Beanie", same pattern |
| `bg` / `bgHover` | `bg-KkjR9Z0O.png` / `bg-hover-DOJED06E.png` | Product 9 "Aura Bag", same pattern |
| `tb` / `tbHover` | `tb-uboJw3tx.png` / `tb-hover-Dqis1yPr.png` | Product 10 "Aura Tote Bag", same pattern |
| `cp2` / `cp2Hover` | `cp2-CEn-CmuU.png` / `cp2-hover-C0Gvhfbw.png` | Product 11 "Aura Cap 2" (wide card), same pattern |
| `tb2` / `tb2Hover` | `tb2-BshQFmiO.png` / `tb2-hover-BnQ1tk7d.png` | Product 12 "Aura Tote Bag 2", same pattern |
| `eye` / `eyeHover` | `eye-BaXdsfwW.png` / `eye-hover-B7LchLz6.png` | Product 13 "Aura Eye": spiky thorn-like black gothic sunglasses (model in studded hoodie on white / still-life on blue) |

Preloader cycles these six: `sh`, `cpHover`, `hd`, `tbHover`, `bp`, `bnHover`.

---

# TECH STACK

- Vite 6 + React 19 + TypeScript (`--port=3000 --host=0.0.0.0` dev script)
- Tailwind CSS 4 via `@tailwindcss/vite` (CSS-first `@theme` in `index.css` — NO tailwind.config.js)
- `motion` (imported as `motion/react`) — every animation: springs, transforms, scroll/in-view triggers, AnimatePresence
- `lenis` — vanilla `new Lenis(...)` + manual RAF loop (NOT the React wrapper), started post-preloader
- No icon library, no router, no state library, no backend calls
- `vite.config.ts`: `plugins:[react(), tailwindcss()]`, alias `'@' → project root`
