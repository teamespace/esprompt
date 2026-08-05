Create a React + Vite + TypeScript + Tailwind CSS 3 component for the "About Us" section, exactly as it appears in the Elux Medical Clinic (Saha Medical) landing page.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** Use a minimal, luxury light theme:
   - Section Background: `bg-white`
   - Text Primary: `text-primary` (deep navy `#0A1F44`) for the main statement heading.
   - Text Secondary: `text-slate-600` for the body paragraph.
2. **Typography:** 
   - All text uses `Inter Tight` (Sans-serif). No serif fonts.
   - Eyebrow: "ABOUT US" (`text-sm font-semibold tracking-[0.2em] uppercase text-[#1A2530]`). Notice the redundant `text-secondary` class from the original bundle; you can include it but `#1A2530` takes precedence.
   - Main Heading: Large and impactful statement (`text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight max-w-5xl`).
   - Body Text: `text-base lg:text-lg font-normal leading-relaxed`.
3. **Layout & Dimensions:**
   - The section is split into a top header block and a bottom image/text block, constrained by `max-w-[1440px]`.
   - **Bottom Block Structure:** It uses a flex container aligned to the bottom (`items-end`). 
   - The large image takes up 3/4 of the width (`w-full lg:w-3/4`) with an aspect ratio of `16/9`.
   - The caption text takes up the remaining 1/4 width (`w-full lg:w-1/4`) and is padded slightly at the bottom (`pb-4`) to align beautifully with the bottom edge of the image.
4. **Imagery:**
   - The image has sharp corners (`rounded-none`). No rounded corners anywhere in this section.

---

# FONTS & COLORS

Include this in your `tailwind.config.js`:
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
      },
    },
  },
  plugins: [],
};
```

And in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
```

---

# COMPONENT STRUCTURE

```tsx
export default function AboutUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      
      {/* Top Header Block */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 mb-20">
        <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase block mb-8 text-[#1A2530]">
          ABOUT US
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-primary leading-[1.1] tracking-tight max-w-5xl">
          True luxury is the absence of friction. We strip away the unnecessary, leaving only clarity, precision, and profound care.
        </h2>
      </div>

      {/* Bottom Layout (Image + Text aligned to bottom) */}
      <div className="flex flex-col lg:flex-row gap-12 items-end max-w-[1440px] mx-auto px-8 lg:px-16">
        
        {/* 3/4 Width Image */}
        <div className="w-full lg:w-3/4">
          <div className="rounded-none overflow-hidden aspect-[16/9]">
            <img 
              alt="World-class medical team in a luxury clinical setting" 
              className="w-full h-full object-cover" 
              src="https://elux-medical-clinic.vercel.app/assets/about-BWgOQkP5.jpg" 
            />
          </div>
        </div>

        {/* 1/4 Width Caption */}
        <div className="w-full lg:w-1/4 pb-4">
          <div className="max-w-xs">
            <p className="text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
              The Art of Subtraction. Saha Medical was born from a vision to simplify healthcare and make it seamless for the world's most discerning individuals. By removing administrative complexity, we return your most valuable asset: time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
```
