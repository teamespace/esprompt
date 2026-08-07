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
    image: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-4.webp',
  },
  {
    quote: 'The personalized longevity protocols make me feel more in control of my future. Truly a lifesaver in every sense.',
    name: 'Yasmin Mansour',
    location: 'Abu Dhabi, UAE',
    image: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-1.webp',
  },
  {
    quote: 'Exceptional quality across the board. The discretion and proficiency here will save you both time and worry.',
    name: 'Kareem Hassan',
    location: 'Doha, Qatar',
    image: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-2.webp',
  },
  {
    quote: "I've never experienced medical attention with this degree of precision. It feels like having a private research institute dedicated solely to me.",
    name: 'Layla Rahman',
    location: 'Riyadh, KSA',
    image: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Community/community-1.webp',
  },
  {
    quote: 'From the first consultation, the frictionless concierge experience completely changed my perspective on preventative healthcare.',
    name: 'Omar Al-Sayed',
    location: 'Manama, BH',
    image: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Community/community-2.webp',
  },
  {
    quote: 'The seamless integration of world-class experts into a unified, actionable health strategy is unparalleled. Breathtaking service.',
    name: 'Fatima Al-Zahra',
    location: 'Amman, JO',
    image: 'https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Community/community-3.webp',
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
