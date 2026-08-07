Create a React + Vite + TypeScript + Tailwind CSS 4 component for a Scroll Reveal Grid, perfectly matching the provided design.

# ⚠️ IMPLEMENTATION RULES

1. **Scroll Reveal:** Use Framer Motion's `whileInView` for the grid items to reveal them smoothly as the user scrolls down the page.
2. **Staggered Animation:** Wrap the grid in a `motion.div` configured with `variants` to orchestrate a `staggerChildren` effect.
3. **Pixel Perfect Design:**
   - The header text "LOOKBOOK" must be small, gray, uppercase, and have wide tracking (`tracking-[0.2em]`).
   - The header text "Season 26" must be centered and large (`text-4xl` or `text-5xl`).
   - The grid must be 3 columns wide on large screens (`lg:grid-cols-3`).
   - The images must have a 3:4 aspect ratio (`aspect-[3/4]`), acting as a relative container.
   - The look label (e.g. "LOOK 01") must be an absolute positioned element in the bottom-left corner of the image, with a dark background.

# COMPONENT STRUCTURE

```tsx
import { motion } from "framer-motion";

const looks = [
  { id: 1, title: "LOOK 01", image: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Arlo/Look/arlo-look-1.webp" },
  { id: 2, title: "LOOK 02", image: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Arlo/Look/arlo-look-2.webp" },
  { id: 3, title: "LOOK 03", image: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Arlo/Look/arlo-look-3.webp" },
  { id: 4, title: "LOOK 04", image: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Arlo/Look/arlo-look-4.webp" },
  { id: 5, title: "LOOK 05", image: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Arlo/Look/arlo-look-5.webp" },
  { id: 6, title: "LOOK 06", image: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Arlo/Look/arlo-look-6.webp" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function ScrollRevealGrid() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Lookbook</span>
        <h2 className="text-4xl md:text-5xl font-normal text-gray-900">Season 26</h2>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {looks.map((look) => (
          <motion.figure key={look.id} variants={itemVariants} className="group relative cursor-pointer m-0 overflow-hidden bg-gray-100 aspect-[3/4]">
            <img 
              src={look.image} 
              alt={look.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Tag */}
            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 text-white text-xs font-medium tracking-widest">
              {look.title}
            </div>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
```
