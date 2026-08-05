Create a React + Vite + TypeScript + Tailwind CSS 4 component for the Logo Marquee section (Running Logo), exactly as it appears in the Quorum AI Meeting Assistant landing page.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** Use a clean, light editorial theme:
   - Background: `bg-white`
   - Label Text ("IN CIRCULATION AT"): `text-gray-400`, highly spaced out (`tracking-[0.25em]`), small and bold (`text-[10px] font-bold uppercase`).
   - Logos/Brand Names: `text-gray-400` with `hover:text-gray-900 transition-colors`.
2. **Typography:** 
   - All text uses `Inter` (sans-serif).
   - Some brand names are stylized natively with text utilities: e.g., "Arcadia Labs" and "Standard Atlas" use `italic font-medium`.
3. **Layout:**
   - The label is pinned to the left on desktop (`flex-col md:flex-row items-center justify-between`).
   - The marquee track takes up the remaining flexible space (`flex-1 w-full overflow-hidden`).
4. **Animations:**
   - Use `motion/react` (Framer Motion) to drive the continuous seamless marquee animation.
   - The inner wrapper animates `x: ['0%', '-50%']` infinitely with a linear easing.
   - To achieve seamless looping, the content children must be duplicated exactly once (the second set wrapped with `aria-hidden="true"`).

---

# FONTS

Include this in your `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@theme {
  --font-sans: "Inter", sans-serif;
}
```

---

# COMPONENT STRUCTURE

First, build the reusable `Marquee` UI component:

```tsx
// components/ui/Marquee.tsx
import { motion } from 'motion/react';

export default function Marquee({ 
  children, 
  speed = 20, 
  className = '', 
  gap = 'gap-16' 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string; 
  gap?: string 
}) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className={`flex shrink-0 ${gap} pr-16`}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
      >
        <div className={`flex items-center ${gap}`}>{children}</div>
        <div className={`flex items-center ${gap}`} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
```

Next, implement the actual `LogoMarquee` section:

```tsx
// components/home/LogoMarquee.tsx
import Marquee from '../ui/Marquee.tsx';

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase whitespace-nowrap">
          In circulation at
        </span>
        
        <div className="flex-1 w-full overflow-hidden text-gray-400 font-semibold text-lg md:text-xl">
          <Marquee speed={25} gap="gap-10 md:gap-16">
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Fieldnote</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer italic font-medium">Arcadia Labs</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Bluepeak</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer italic font-medium">Standard Atlas</span>
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Hem & Co.</span>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
```
