Create a React + Vite + TypeScript + Tailwind CSS 4 component for a Custom Cursor and Product Grid, perfectly matching the Aura eCommerce design.

# ⚠️ IMPLEMENTATION RULES

1. **Custom Cursor (`CustomCursor`):** 
   - A `motion.div` fixed at `z-[100]`, `pointer-events-none`, `rounded-full bg-[#1D4ED8] text-white`.
   - Centers on the pointer via `useMotionValue` and `useSpring` (`{ damping: 25, stiffness: 300, mass: 0.5 }`) + `translateX/Y:-50%`.
   - **Default state:** 12x12px dot.
   - **Hover state:** Springs to 100x100px. Fades in white bold 10px `VIEW<br/>MORE` via `AnimatePresence` (`scale 0.5 → 1`).
2. **Product Hover Effect (`ProductCard`):** 
   - Card entrance: `whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}` from `opacity: 0, y: 60, filter: 'blur(4px)'` (1.2s, ease `[0.16, 1, 0.3, 1]`).
   - Hover choreography (`isHovered` state):
     1. Inner wrapper zooms `scale 1 → 1.05` (0.6s, ease `[0.33, 1, 0.68, 1]`).
     2. Hover image layer wipes in from the left: `clipPath: inset(0 100% 0 0) → inset(0 0% 0 0)` (0.5s, ease `[0.65, 0, 0.35, 1]`).
     3. Hover photo flashes `brightness(1.5) → brightness(1)` (0.8s easeOut).
     4. Base and hover photos must use `mix-blend-multiply` on a `#D8D6D0` background so their white studio backgrounds disappear.
   - Caption row: title + category (`text-[10px] uppercase tracking-wider`) on left, price on right. Title and price go `text-black` on hover (`group-hover:text-black`, 300ms).
3. **Grid Layout:**
   - Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-16`.
   - Support `colSpan` (e.g., `md:col-span-2 lg:col-span-2`) for specific larger products.

# COMPONENT STRUCTURE

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const products = [
  { id: 1, title: 'Aura Shirt', price: '$35.00', category: '● APPAREL', image: 'https://aura-ecommerce-landing.vercel.app/assets/sh-D0FCgtva.png', hoverImage: 'https://aura-ecommerce-landing.vercel.app/assets/sh-hover-CAWUcjTm.png', colSpan: 1 },
  { id: 6, title: 'Aura Cap', price: '$25.00', category: '● ACCESSORIES', image: 'https://aura-ecommerce-landing.vercel.app/assets/cp-B_Ka_2N5.png', hoverImage: 'https://aura-ecommerce-landing.vercel.app/assets/cp-hover-WdG_u0e_.png', colSpan: 1 },
  { id: 7, title: 'Aura Backpack', price: '$85.00', category: '● BAGS', image: 'https://aura-ecommerce-landing.vercel.app/assets/bp-CPsZAUoT.png', hoverImage: 'https://aura-ecommerce-landing.vercel.app/assets/bp-hover-uzbpAEzW.png', colSpan: 2 },
  { id: 4, title: 'Aura Hoodie', price: '$65.00', category: '● APPAREL', image: 'https://aura-ecommerce-landing.vercel.app/assets/hd-MEY3UWgC.png', hoverImage: 'https://aura-ecommerce-landing.vercel.app/assets/hd-hover-BSILjcBO.png', colSpan: 1 },
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
    return () => window.removeEventListener('mousemove', moveCursor);
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

const ProductCard = ({ product, setCursorHovering }: any) => {
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
          <h3 className="leading-tight group-hover:text-black transition-colors duration-300 text-[#1D4ED8]">{product.title}</h3>
          <p className="text-[10px] md:text-xs mt-1 uppercase tracking-wider text-[#1D4ED8]">{product.category}</p>
        </div>
        <div className="group-hover:text-black transition-colors duration-300 text-[#1D4ED8]">{product.price}</div>
      </div>
    </motion.div>
  );
}

export function AuraGrid() {
  const [cursorHovering, setCursorHovering] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#EAE8E3] p-8 cursor-none">
      <CustomCursor isHovering={cursorHovering} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-16 items-start max-w-7xl mx-auto mt-24">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} setCursorHovering={setCursorHovering} />
        ))}
      </div>
    </div>
  );
}
```
