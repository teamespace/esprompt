Create a React + Vite + TypeScript + Tailwind CSS 4 component for a Drag-to-Scroll Carousel, inspired by Elan Moody's New Arrivals section.

# ⚠️ IMPLEMENTATION RULES

1. **Draggable Constraint:** Use Framer Motion's `drag="x"` functionality on the inner wrapper to simulate native drag scrolling, or use a custom native drag-to-scroll hook. If using Framer Motion, use `dragConstraints` via a `useRef` to bound the track within the container.
2. **Cursor Styling:** Use `cursor-grab` normally, and `cursor-grabbing` when actively dragging.
3. **Layout & Grid:** 
   - On mobile/tablet, the header and carousel stack vertically (`flex-col`).
   - On desktop (`lg`), the section becomes a side-by-side row (`flex-row align-items-center gap-[3rem]`). The header stays fixed on the left (`min-w-[180px]`) while the carousel track takes up the remaining space.
4. **Card Sizing:** Use flex-basis percentages and max-widths for the cards:
   - Mobile: `flex-[0_0_65%] max-w-[260px]`
   - Tablet: `md:flex-[0_0_40%] md:max-w-[280px]`
   - Desktop: `lg:flex-[0_0_22%] lg:max-w-[300px]`
5. **Hover Effect:** The product image inside the card zooms slightly on hover (`scale-103` or `scale-[1.03]`) over `600ms` using a custom ease `cubic-bezier(0.22, 0.61, 0.36, 1)`.

# COMPONENT STRUCTURE

```tsx
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const newArrivals = [
  { id: 1, title: "Vinta Home", price: "€89,00", image: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-new-01.jpg" },
  { id: 2, title: "Marino Home", price: "€95,00", image: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-new-02.jpg" },
  { id: 3, title: "Fjord Home", price: "€102,00", image: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-new-03.jpg" },
  { id: 4, title: "Sovrano Home", price: "€89,00", image: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-new-04.jpg" },
  { id: 5, title: "Nordic Home", price: "€99,00", image: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-new-05.jpg" },
  { id: 6, title: "Aurelia Home", price: "€95,00", image: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-new-06.jpg" },
];

export function DragCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current && trackRef.current) {
        setConstraint(carouselRef.current.offsetWidth - trackRef.current.scrollWidth);
      }
    };
    
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section className="py-16 lg:py-24 px-0 lg:px-10 bg-white text-[#111] overflow-hidden flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12" ref={carouselRef}>
      {/* Header section - side by side on desktop */}
      <div className="shrink-0 px-5 lg:px-0 lg:min-w-[180px]">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] lg:text-[clamp(1.5rem,2.5vw,2rem)] font-semibold tracking-[-0.03em] uppercase mb-2">
          New Arrivals
        </h2>
        <a href="#" className="inline-block text-[0.85rem] font-medium uppercase tracking-[0.05em] border-b border-[#111] pb-[0.15rem] transition-colors hover:text-[#666] hover:border-[#666]">
          Shop now
        </a>
      </div>

      {/* Draggable Track */}
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={{ right: 0, left: constraint }}
        whileDrag={{ cursor: "grabbing" }}
        className="flex gap-3 lg:gap-4 px-5 lg:px-0 cursor-grab active:cursor-grabbing w-max pb-4"
      >
        {newArrivals.map((item) => (
          <motion.article
            key={item.id}
            className="flex-[0_0_65%] max-w-[260px] md:flex-[0_0_40%] md:max-w-[280px] lg:flex-[0_0_22%] lg:max-w-[300px] shrink-0 group pointer-events-none"
          >
            {/* Image Container */}
            <div className="aspect-[3/4] bg-[#f2f2f2] overflow-hidden mb-3">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]" 
              />
            </div>
            {/* Product Info */}
            <div className="flex flex-col">
              <h3 className="text-[0.9rem] font-medium mb-[0.2rem]">{item.title}</h3>
              <p className="text-[0.85rem] text-[#666]">{item.price}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
```
