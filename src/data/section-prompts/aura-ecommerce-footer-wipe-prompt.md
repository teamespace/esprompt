Create a React + Vite + TypeScript + Tailwind CSS 4 component for an animated brutalist Footer, perfectly matching the Aura eCommerce design.

# ⚠️ IMPLEMENTATION RULES

1. **Wipe & Blur Reveal (`useInView`):**
   - The footer doesn't use sticky/parallax positioning. Instead, the giant headline block reveals itself when scrolled into view using Framer Motion's `useInView` with a margin of `0px 0px -50px 0px`.
   - The animation wipes from left to right while simultaneously un-blurring: `clipPath: inset(-50% 100% -50% -50%) + filter: blur(16px)` → `inset(-50% 0% -50% -50%) + filter: blur(0px)`.
   - *Note:* The negative vertical insets on `clipPath` prevent the large typography from being clipped vertically.
   - Transition is `duration: 1.5, ease: [0.16, 1, 0.3, 1]`.
2. **Typography & Styling:**
   - Background is Bone (`#EAE8E3`), and text is Electric Blue (`#1D4ED8`) or inherited black.
   - The giant headlines use the `Syne` font family inline, sized at `text-[13vw] md:text-[8vw]` with `leading-[0.85] font-black tracking-tighter`.
3. **Layout:**
   - Row 1: "DESIGNED FOR MOTION."
   - Row 2: A flex container holding "BUILT FOR TOMORROW." (in blue) and a right-aligned blurb (`max-w-[400px] text-xs md:text-sm font-bold`).
   - A 2px blue horizontal rule `<hr className="border-t-[2px] border-[#1D4ED8]" />`.
   - A 5-column link grid (`grid-cols-2 md:grid-cols-5 gap-8 md:gap-4`) with heavily structured, uppercase bold text and blue hover states.

# COMPONENT STRUCTURE

```tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AuraFooter() {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <div className="bg-[#EAE8E3] text-black font-sans min-h-screen flex flex-col justify-end">
      {/* Spacer to simulate page content scrolling */}
      <div className="flex-1 min-h-[50vh]"></div>

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
    </div>
  );
}
```
