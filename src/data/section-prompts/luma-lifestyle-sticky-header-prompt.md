Create a React + Vite + TypeScript + Tailwind CSS 4 component for a Sticky Hide-on-Scroll Header, inspired by Luma Lifestyle.

# ⚠️ IMPLEMENTATION RULES

1. **Scroll Direction Tracking:** Use Framer Motion's `useScroll` and `useMotionValueEvent` to track scroll velocity/direction.
2. **Hide/Show Logic:** 
   - Scrolling down (past 50px): Header translates out of view (`y: -100%`).
   - Scrolling up: Header translates back into view (`y: 0%`) and gains a shadow (`box-shadow: 0 2px 10px rgba(0,0,0,0.05)`).
   - *Note:* The header does not have a transparent state. It is always `bg-white` with a `border-b border-gray-200`.
3. **Responsive Actions & Layout:**
   - On Desktop (`md`): The header actions (Account, Search, Cart) must display as uppercase TEXT (e.g., "ACCOUNT", "SEARCH", "CART (0)"). The hamburger icon is hidden.
   - On Mobile: The header actions must display as minimalist SVG icons (user, search, shopping bag/cart). The hamburger menu toggle is visible on the left.
4. **Asset Usage:** Use the exact navigation links (Men, Women, Journey) and brand (LUMA).

# COMPONENT STRUCTURE

```tsx
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function LumaHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest <= 50) {
      setIsSticky(false);
      setHidden(false);
    } else {
      setIsSticky(true);
      if (latest > previous && latest > 150) {
        // Scrolling down past threshold
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300 ${
        isSticky ? "shadow-[0_2px_10px_rgba(0,0,0,0.05)]" : "shadow-none"
      }`}
    >
      <div className="flex items-center justify-between min-h-[60px] md:min-h-[72px] px-4 md:px-10 max-w-[1400px] mx-auto relative">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2 text-black" aria-label="Open mobile menu">
          <span className="block w-full h-[2px] bg-current"></span>
          <span className="block w-full h-[2px] bg-current"></span>
          <span className="block w-full h-[2px] bg-current"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <a href="#men" className="text-[0.8rem] font-medium tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">Men</a>
          <a href="#women" className="text-[0.8rem] font-medium tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">Women</a>
          <a href="#journey" className="text-[0.8rem] font-medium tracking-[0.05em] uppercase hover:opacity-60 transition-opacity">Journey</a>
        </nav>

        {/* Center Logo */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2 text-[1.25rem] font-bold tracking-[0.12em] uppercase leading-none">
          LUMA
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-6 text-[0.8rem] font-medium tracking-[0.05em] uppercase">
          <button className="relative flex items-center justify-center p-1 md:p-0 text-black hover:opacity-60 transition-opacity" aria-label="Account">
            <span className="hidden md:inline">Account</span>
            <svg className="md:hidden w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path></svg>
          </button>
          
          <button className="relative flex items-center justify-center p-1 md:p-0 text-black hover:opacity-60 transition-opacity" aria-label="Search">
            <span className="hidden md:inline">Search</span>
            <svg className="md:hidden w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg>
          </button>
          
          <button className="relative flex items-center justify-center p-1 md:p-0 text-black hover:opacity-60 transition-opacity" aria-label="Open cart">
            <span className="hidden md:inline">Cart (0)</span>
            <svg className="md:hidden w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"></path><circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M6 6 5 3H2"></path></svg>
            <span className="md:hidden absolute -top-1 -right-1 min-w-[1rem] h-4 bg-black text-white text-[10px] leading-4 text-center">0</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
```
