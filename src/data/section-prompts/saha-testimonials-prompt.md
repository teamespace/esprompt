Create a React + Vite + TypeScript + Tailwind CSS 3 component for the Testimonials section, exactly as it appears in the Elux Medical Clinic (Saha Medical) landing page.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** Use a clean, luxury light theme:
   - Section Background: `bg-white`
   - Card Background: `bg-card-grey` (which maps to `#F8F9FA` or similar light grey).
   - Text Primary: `text-primary` (deep navy `#0A1F44`) for headings, quotes, and names.
   - Text Secondary: `text-slate-500` for locations.
2. **Typography:** 
   - All text uses `Inter Tight` (Sans-serif). No serif fonts.
   - Section Heading: "What Our Clients Say" (`text-5xl md:text-6xl font-normal text-primary tracking-tight`).
   - Testimonial Quotes: Large and readable (`text-3xl md:text-4xl font-normal leading-tight tracking-tight`).
3. **Layout & Dimensions:**
   - The marquee container overflows the bounds to the left and right (`-mx-8 px-8 lg:-mx-16 lg:px-16 overflow-hidden`).
   - Each card is a fixed width block (`w-[380px] md:w-[450px]`) with a minimum height (`min-h-[500px]`).
   - Padding is generous (`p-12`), and borders are sharp (`rounded-none`).
   - The author block sits at the bottom, containing a square-ish avatar (`w-14 h-14 rounded-none object-cover`).
4. **Animations (CSS Only, NO Framer Motion):**
   - The cards translate up on hover (`hover:-translate-y-2 transition-transform duration-300`).
   - The entire track is an infinite CSS marquee (`animate-marquee`).
   - Hovering over the track pauses the animation using native CSS: `hover:[animation-play-state:paused]`.
   - The array of 6 testimonials must be duplicated (`[...testimonials, ...testimonials].map(...)`) to ensure seamless scrolling.

---

# FONTS & ANIMATIONS

Include this in your `tailwind.config.js`:
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
        'card-grey': '#F8F9FA',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Assuming the track is double width
        }
      }
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
const testimonials = [
  {
    quote: "Being able to access a specialist without waiting weeks has been a game-changer. Saha Medical's service is absolutely top-notch.",
    name: 'Tariq Al-Fayed',
    location: 'Dubai, UAE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkyNRRMNagTr1Cr9jCveI_OzWjN2iWGCqeglIEsLwlUlrm25s8iiLaS3SLQYxumeS5tg8LLGJFv54LbCWdf2UnKaLYtUVTrYAs4UmO8PKiVHFN75wWcARIMlvW0OWVhzU5Nb24vzhmOSSABMy13l35XH2vj2ANSdl0Z7VgdkhcTdvrbPs0xIz09mzTkj6gqmjlRiqih29XoyDPlyWrJXUG8HC8ujnmBdAk7VDNubIKWUCVz8ZIWc-2F8lUnXlYYag3aFysytbJtLQ',
  },
  {
    quote: 'The personalized longevity protocols make me feel more in control of my future. Truly a lifesaver in every sense.',
    name: 'Yasmin Mansour',
    location: 'Abu Dhabi, UAE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjNc-wRRfpaovjug2v99Ycu9S5uSNSReXh4Hci9gBfGmnYg4LE1a1DXuFfHHRe-XOwssycSAIZo2nLZoOcY1LeWGjqBZkU9NdDlHo1_k__GDo17juW5LAtcSzmvGzWOXtitmpuiWCOStfyyhPCfFNrvVG1jptXoEe7Bu6Hcw5cmkaA2kM6f3SsNnAcIeKR3ZGUJRk7G21n9XDQnX_BBE37oFnkQqjaVvXEfZCw4tM6lbEOFgICBTBWAhCP19i9cNW7rlOtVHqetoY',
  },
  {
    quote: 'Exceptional quality across the board. The discretion and proficiency here will save you both time and worry.',
    name: 'Kareem Hassan',
    location: 'Doha, Qatar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd5z1hq5PnsDUSniuqRWx2dikXBF7bxisEzyJf9nkQDbKc9bT2Ctbqfhj-evzpSXSEEqBBHhxTwNBxjR4OXausMqVt5JiFwmkwmqvObUNpa33AxGOLuDSQloyr-MB0l1gvzt3MiIGp6qDX-6JvsHJWDAbe1NFcBMApJl_dAS934a-910EG8hTe9c4ZNp1acveR2w6EJ8fLicynx0_yjEQfS9VkFI7kfsXlvFbZDIVMOYFhKZ6o5Lus-KT8MvyMfVIxY_jWDNvL-xw',
  },
  {
    quote: "I've never experienced medical attention with this degree of precision. It feels like having a private research institute dedicated solely to me.",
    name: 'Layla Rahman',
    location: 'Riyadh, KSA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbzoirvAE6tKBRDVx0Tfl-VBM9hE23WVg_9PndZ5tod4UO0_5B_NfHke-zkGb5IMKgYMzaVXOFW3nuiS5EFqjHDv000VQJbwhQb8BScNN5TQCIJAojgSTfQ2JCSNPxx5ma2v0Y7fnLYMOxyCt3kKU3dyggQ9lgouGZYlAeP-IVxb4E19shUAHf7dzgrUTj7HdauZmC5402Z7qD7Fgn0LeC7UNm4bUP2NLfNwI0qhmf_Lna-0OefqKY1-OS-mdTERv7TwI88IhaMbQ',
  },
  {
    quote: 'From the first consultation, the frictionless concierge experience completely changed my perspective on preventative healthcare.',
    name: 'Omar Al-Sayed',
    location: 'Manama, BH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-2kfYV84N9qWrbj5Mkyz81DOZSCjbVW9C_I7u8iv5yihRbccdM6cLTksjKWmxtK9lBHS185QhTkPjO5XjR29FzC3LThXrfnrY6-KBtO9hjMq6Ckt_fqo0mw2Wzlcb6d4TI8v6HG-hcIsKRzXn_q0yON178JO4VWN_Y-JJpfgpKsZBDd2F2ffFrP26YUKSyQMWkQ31tuUw_NIy8ETGuXvbeRtaAszPQlg8IgqT2s_KFKLZAJNbfg3OmB_YyiuyKrlggY_-zjukGro',
  },
  {
    quote: 'The seamless integration of world-class experts into a unified, actionable health strategy is unparalleled. Breathtaking service.',
    name: 'Fatima Al-Zahra',
    location: 'Amman, JO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtMaenr1pEd7mz66asqnPlfz-18K06fXkuuW0uSk7UJQb0uQPOdx1P3CWHGPBGrc5iKWHzzleMCGI73xdOiEndZhNj9AG9kSGXYDzNDFXEE55nFlASRo0Y9DgVHhjJmt-WV7VWTsCwcZ0lG78jPQLbwBde_v1giQDRZs3WsF2wpDdOoiBcdI5fqp_7tzHZZfBu3gOt-k_4zN-cH-M2CZID33Fv035DbfUu2Uld7gbE37X4yCzN_Qg8vMbIQ8E5K7uR0FxI4DLotw4',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 lg:py-48 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-normal text-primary mb-20 tracking-tight">
          What Our Clients Say
        </h2>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group -mx-8 px-8 lg:-mx-16 lg:px-16">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 pb-12">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={i} 
                className="flex-none w-[380px] md:w-[450px] bg-card-grey rounded-none p-12 flex flex-col justify-between min-h-[500px] hover:-translate-y-2 transition-transform duration-300"
              >
                <p className="text-3xl md:text-4xl font-normal text-primary leading-tight tracking-tight">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-5 mt-10">
                  <img 
                    alt={t.name} 
                    className="w-14 h-14 rounded-none object-cover" 
                    src={t.image} 
                  />
                  <div>
                    <h4 className="text-lg font-normal text-primary">{t.name}</h4>
                    <p className="text-sm font-normal text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
```
