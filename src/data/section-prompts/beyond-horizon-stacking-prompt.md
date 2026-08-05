Create a React + Vite + TypeScript + Tailwind CSS 4 component for Sticky Stacking Cards, inspired by the Beyond Horizon landing page.

# ⚠️ IMPLEMENTATION RULES

1. **Sticky Stacking Mechanics:** The cards should use `position: sticky` and a calculated `top` value (e.g. `top: 0` or `top: 10dvh`) so that as the user scrolls, each card sticks to the top and the next cards overlap it.
2. **Dynamic Scaling (Optional but recommended):** Use Framer Motion's `useScroll` and `useTransform` to slightly scale down the cards that are stuck behind the current active card, creating a 3D depth effect.
3. **Asset Usage:** Use the exact images and text from the live site (Komodo Islands, Raja Ampat, Phuket, Maldives).

# COMPONENT STRUCTURE

```tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const destinations = [
  { id: 1, title: "Komodo Islands", subtitle: "Indonesia", image: "https://yacht-bgz.pages.dev/images/image-6.png", badge: "Adventure" },
  { id: 2, title: "Raja Ampat", subtitle: "West Papua", image: "https://yacht-bgz.pages.dev/images/image-7.png", badge: "Diving" },
  { id: 3, title: "Phuket", subtitle: "Thailand", image: "https://yacht-bgz.pages.dev/images/image-8.png", badge: "Lifestyle" },
  { id: 4, title: "Maldives", subtitle: "Indian Ocean", image: "https://yacht-bgz.pages.dev/images/image-9.png", badge: "Romance" },
];

export function StackingCards() {
  return (
    <section className="relative w-full bg-[#050b14]">
      {destinations.map((dest, index) => (
        <Card key={dest.id} index={index} total={destinations.length} {...dest} />
      ))}
    </section>
  );
}

function Card({ index, total, title, subtitle, image, badge }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index - 1) * 0.05]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, zIndex: index + 1 }}
      className="sticky top-0 h-[100dvh] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-between px-6 py-16 md:py-24 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-xs font-medium text-white/90 border border-white/20 tracking-wider uppercase">{badge}</span>
          <div className="flex items-center gap-3 text-white/60 text-xs tracking-wider uppercase">
            <span>Destination</span><span className="w-1 h-1 bg-white/40"></span><span>0{index + 1}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-3xl">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]">{title}</h3>
            <p className="text-white/70 text-sm md:text-base tracking-[0.15em] uppercase font-medium">{subtitle}</p>
          </div>
          <div className="w-px h-16 md:h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <button className="group mt-2 inline-flex h-12 items-center gap-3 bg-white px-6 text-sm font-medium text-black transition-all hover:bg-white/90">
            Explore Destination →
          </button>
        </div>
        <div className="h-8"></div>
      </div>
    </motion.div>
  );
}
```
