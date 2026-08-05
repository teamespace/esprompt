Create a React + Vite + TypeScript + Tailwind CSS 4 component for the Testimonials Carousel section, inspired by the Trainfold landing page.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** Use the exact dark theme from Trainfold:
   - Primary Background: `#0A0A0A`
   - Card Background: `#111111` (with subtle hover or default border `#222222` / `border-white/5`)
   - Accent Color (Orange): `#F97316`
   - Text Primary: `#E5E5E5`
   - Text Secondary (Muted): `#6B7280` or `text-white/40`
2. **Typography:** 
   - All text uses `DM Sans` (Google Fonts).
   - "Testimonials" eyebrow has an orange dot `w-1.5 h-1.5 rounded-full bg-[#F97316]` and orange text.
   - Section heading "What ML engineers say" uses `text-4xl` to `text-5xl` tracking-tight.
3. **Card Layouts (Glass/Dark UI):**
   - **Quote Cards:** 
     - *Header:* Organization tag with initials in a small orange-tinted box (`bg-[#F97316]/10 text-[#F97316] rounded`), plus a "Verified" pill with an orange dot.
     - *Body:* The quote in `text-[17px] leading-[1.6] text-white/90`.
     - *Footer:* Separated by a subtle `border-t border-white/5`. Contains the author's initials in a circular avatar (`bg-[#161616] border border-white/10 text-[#F97316]`), name (`text-sm font-semibold text-white`), and role (`text-[13px] text-white/40`).
   - **Logo Card (Center Branding):**
     - A distinct card displaying the Trainfold logo (SVG) inside a large orange rounded box, with the brand name and tagline "Train smarter, not longer." centered.
4. **Interactivity:**
   - Create a horizontal flex container (`overflow-x-auto snap-x snap-mandatory no-scrollbar` or a custom slider logic using Framer Motion `x` transforms).
   - Include bottom navigation buttons: Previous (dark) and Next (orange fill).

---

# FONTS

Include this in your `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

@theme {
  --font-sans: "DM Sans", sans-serif;
}

/* Hide scrollbar for carousel */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

# COMPONENT STRUCTURE

```tsx
import { useRef } from "react";

export function TrainfoldTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#0A0A0A] text-[#E5E5E5] py-24 px-6 md:px-12 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]"></span>
            <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#F97316]">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-[42px] font-medium tracking-tight text-white leading-[1.08]">
            What ML engineers say
          </h2>
        </div>
        
        {/* Carousel Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
        >
          {/* Card 1: Quote */}
          <article className="shrink-0 w-[320px] md:w-[340px] bg-[#111111] border border-white/5 rounded-3xl p-8 flex flex-col justify-between snap-start">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5 font-medium text-sm text-white/90">
                  <span className="bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 rounded-md px-1.5 py-0.5 text-[11px] tracking-wide">
                    RL
                  </span>
                  Research Lab
                </div>
                <div className="flex items-center gap-2 bg-[#161616] border border-white/5 rounded-full px-2.5 py-1 text-[11px] text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  Verified
                </div>
              </div>
              <p className="text-[17px] leading-[1.6] text-white/90 font-medium">
                “Trainfold caught an overfitting spike at step 3,200 that I would have missed for hours. Saved an entire training run.”
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#161616] border border-[#F97316]/20 text-[#F97316] flex items-center justify-center text-sm font-semibold tracking-wide">
                AK
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Alex K.</div>
                <div className="text-[12px] text-white/40 mt-0.5">ML Engineer, Research Lab</div>
              </div>
            </div>
          </article>

          {/* Card 2: Logo / Brand */}
          <article className="shrink-0 w-[320px] md:w-[340px] bg-[#111111] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center snap-start text-center">
            <svg className="w-16 h-16 mb-6" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#F97316" strokeWidth="1.4"></rect>
              <path d="M6 15.5 L9.5 10 L13 13 L18 6.5" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
              <circle cx="18" cy="6.5" r="1.6" fill="#FACC15"></circle>
            </svg>
            <div className="text-2xl font-bold text-white tracking-tight mb-2">Trainfold</div>
            <div className="text-sm text-white/40">Train smarter, not longer.</div>
          </article>

          {/* Card 3: Quote */}
          <article className="shrink-0 w-[320px] md:w-[340px] bg-[#111111] border border-white/5 rounded-3xl p-8 flex flex-col justify-between snap-start">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5 font-medium text-sm text-white/90">
                  <span className="bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 rounded-md px-1.5 py-0.5 text-[11px] tracking-wide">
                    UL
                  </span>
                  University Lab
                </div>
                <div className="flex items-center gap-2 bg-[#161616] border border-white/5 rounded-full px-2.5 py-1 text-[11px] text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  Verified
                </div>
              </div>
              <p className="text-[17px] leading-[1.6] text-white/90 font-medium">
                “The layer heatmap alone is worth it. I finally understand what's happening inside my model during fine-tuning.”
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#161616] border border-[#F97316]/20 text-[#F97316] flex items-center justify-center text-sm font-semibold tracking-wide">
                SM
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Sarah M.</div>
                <div className="text-[12px] text-white/40 mt-0.5">AI Researcher, University Lab</div>
              </div>
            </div>
          </article>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 text-white flex items-center justify-center hover:bg-[#161616] transition-colors"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-[#F97316] text-[#1a0a00] flex items-center justify-center hover:bg-[#fb8534] transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
```
