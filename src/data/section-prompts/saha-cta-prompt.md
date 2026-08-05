Create a React + Vite + TypeScript + Tailwind CSS 3 component for the "Start Your Journey" CTA section, exactly as it appears in the Elux Medical Clinic (Saha Medical) landing page.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** Use a clean, luxury light theme:
   - Section Background: `bg-white` (or `#F8F9FA` if preferred for subtle contrast).
   - Text Primary: `text-primary` (deep navy `#0A1F44`) for the main heading and button.
   - Text Secondary: `text-slate-500` or `#4A5D53` for the body text and eyebrow.
2. **Typography:** 
   - All text uses `Inter Tight` (Sans-serif). No serif fonts.
   - Eyebrow: "START YOUR JOURNEY" (`text-sm font-semibold tracking-[0.2em] uppercase text-[#1A2530]`).
   - Main Heading: "Your Health Is Your Greatest Legacy" (`text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-primary leading-[1.1]`).
   - Body Text: "Protect what matters most. Join an elite community dedicated to proactive health, long-term vitality, and a future without medical friction." (`text-lg text-[#4A5D53] max-w-2xl mx-auto leading-relaxed`).
3. **Layout & Dimensions (The "Sticky Scroll Stage"):**
   - The section wrapper must be extremely tall to allow for a scrolling effect: `min-h-[250vh] relative bg-white`.
   - The central CTA text block is **sticky** in the center of the viewport. Use `sticky top-[50vh] -translate-y-1/2 flex flex-col items-center justify-center text-center z-10 px-8`.
4. **Floating Static Photos:**
   - There are 6 absolutely positioned photos scattered throughout the `250vh` container at exact viewport height offsets (e.g., `top-[10vh] left-[5%]`, `top-[50vh] right-[10%]`, `top-[120vh] left-[15%]`, etc.).
   - **Crucial Rule:** They are 100% static. Do not add GSAP parallax or Framer Motion scroll transforms. They just scroll naturally with the page while the central CTA stays sticky.
   - The images should have sharp corners (`rounded-none`), subtle drop shadows (`shadow-xl`), and varying sizes (e.g., `w-48 h-64`, `w-64 h-80`, `w-56 h-56`).
5. **Button:**
   - "Book Your Private Session" must be a deep navy button (`bg-primary text-white`) with rounded corners (`rounded-2xl` - 16px). Do not use fully rounded pill shapes.

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
const floatingImages = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkyNRRMNagTr1Cr9jCveI_OzWjN2iWGCqeglIEsLwlUlrm25s8iiLaS3SLQYxumeS5tg8LLGJFv54LbCWdf2UnKaLYtUVTrYAs4UmO8PKiVHFN75wWcARIMlvW0OWVhzU5Nb24vzhmOSSABMy13l35XH2vj2ANSdl0Z7VgdkhcTdvrbPs0xIz09mzTkj6gqmjlRiqih29XoyDPlyWrJXUG8HC8ujnmBdAk7VDNubIKWUCVz8ZIWc-2F8lUnXlYYag3aFysytbJtLQ", classes: "top-[15vh] left-[5%] md:left-[10%] w-40 md:w-56 aspect-square" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjNc-wRRfpaovjug2v99Ycu9S5uSNSReXh4Hci9gBfGmnYg4LE1a1DXuFfHHRe-XOwssycSAIZo2nLZoOcY1LeWGjqBZkU9NdDlHo1_k__GDo17juW5LAtcSzmvGzWOXtitmpuiWCOStfyyhPCfFNrvVG1jptXoEe7Bu6Hcw5cmkaA2kM6f3SsNnAcIeKR3ZGUJRk7G21n9XDQnX_BBE37oFnkQqjaVvXEfZCw4tM6lbEOFgICBTBWAhCP19i9cNW7rlOtVHqetoY", classes: "top-[40vh] right-[5%] md:right-[15%] w-48 md:w-64 aspect-[3/4]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd5z1hq5PnsDUSniuqRWx2dikXBF7bxisEzyJf9nkQDbKc9bT2Ctbqfhj-evzpSXSEEqBBHhxTwNBxjR4OXausMqVt5JiFwmkwmqvObUNpa33AxGOLuDSQloyr-MB0l1gvzt3MiIGp6qDX-6JvsHJWDAbe1NFcBMApJl_dAS934a-910EG8hTe9c4ZNp1acveR2w6EJ8fLicynx0_yjEQfS9VkFI7kfsXlvFbZDIVMOYFhKZ6o5Lus-KT8MvyMfVIxY_jWDNvL-xw", classes: "top-[110vh] left-[10%] md:left-[20%] w-56 md:w-72 aspect-[4/5]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbzoirvAE6tKBRDVx0Tfl-VBM9hE23WVg_9PndZ5tod4UO0_5B_NfHke-zkGb5IMKgYMzaVXOFW3nuiS5EFqjHDv000VQJbwhQb8BScNN5TQCIJAojgSTfQ2JCSNPxx5ma2v0Y7fnLYMOxyCt3kKU3dyggQ9lgouGZYlAeP-IVxb4E19shUAHf7dzgrUTj7HdauZmC5402Z7qD7Fgn0LeC7UNm4bUP2NLfNwI0qhmf_Lna-0OefqKY1-OS-mdTERv7TwI88IhaMbQ", classes: "top-[150vh] right-[10%] md:right-[25%] w-40 md:w-48 aspect-square" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2kfYV84N9qWrbj5Mkyz81DOZSCjbVW9C_I7u8iv5yihRbccdM6cLTksjKWmxtK9lBHS185QhTkPjO5XjR29FzC3LThXrfnrY6-KBtO9hjMq6Ckt_fqo0mw2Wzlcb6d4TI8v6HG-hcIsKRzXn_q0yON178JO4VWN_Y-JJpfgpKsZBDd2F2ffFrP26YUKSyQMWkQ31tuUw_NIy8ETGuXvbeRtaAszPQlg8IgqT2s_KFKLZAJNbfg3OmB_YyiuyKrlggY_-zjukGro", classes: "top-[190vh] left-[5%] md:left-[15%] w-60 md:w-80 aspect-[4/3]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtMaenr1pEd7mz66asqnPlfz-18K06fXkuuW0uSk7UJQb0uQPOdx1P3CWHGPBGrc5iKWHzzleMCGI73xdOiEndZhNj9AG9kSGXYDzNDFXEE55nFlASRo0Y9DgVHhjJmt-WV7VWTsCwcZ0lG78jPQLbwBde_v1giQDRZs3WsF2wpDdOoiBcdI5fqp_7tzHZZfBu3gOt-k_4zN-cH-M2CZID33Fv035DbfUu2Uld7gbE37X4yCzN_Qg8vMbIQ8E5K7uR0FxI4DLotw4", classes: "top-[210vh] right-[5%] md:right-[15%] w-48 md:w-64 aspect-[3/4]" }
];

export default function CTAJourney() {
  return (
    <section className="relative w-full min-h-[250vh] bg-white overflow-hidden">
      
      {/* Absolute Floating Static Photos */}
      {floatingImages.map((img, idx) => (
        <div 
          key={idx} 
          className={`absolute ${img.classes} rounded-none shadow-xl bg-slate-100 z-0 transition-transform duration-[2s] hover:scale-105`}
        >
          <img 
            src={img.src} 
            alt="Medical Expert" 
            className="w-full h-full object-cover" 
          />
        </div>
      ))}

      {/* Sticky Centered CTA Block */}
      <div className="sticky top-[50vh] -translate-y-1/2 w-full px-8 lg:px-16 flex flex-col items-center justify-center text-center z-10">
        <div className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-2xl shadow-2xl border border-white max-w-4xl mx-auto">
          <span className="block text-[#1A2530] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            START YOUR JOURNEY
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[64px] font-normal text-primary tracking-tight leading-[1.1] mb-6">
            Your Health Is Your Greatest Legacy
          </h2>
          <p className="text-lg text-[#4A5D53] font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Protect what matters most. Join an elite community dedicated to proactive health, long-term vitality, and a future without medical friction.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-primary text-white px-10 py-4 rounded-2xl text-base font-medium tracking-wide transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            Book Your Private Session
          </a>
        </div>
      </div>

    </section>
  );
}
```
