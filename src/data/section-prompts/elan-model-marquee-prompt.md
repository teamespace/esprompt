Create a React + Vite + TypeScript + Tailwind CSS 4 component for the "Model Marquee" section, inspired by the ÉLAN Retro Football Jerseys storefront.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** 
   - Background: `bg-white`
   - Text Primary: `text-[#111111]`
   - Font: `Inter` (sans-serif) for the heading.
2. **Typography:**
   - Section Heading: "Explore our world of retro jerseys and find the perfect fit for your style."
   - Heading Classes: `text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#111111] max-w-2xl leading-tight`.
   - Padding for header: `px-6 md:px-10 mb-10 mx-auto max-w-[1400px]`.
3. **Marquee Layout (CSS Animation):**
   - The track should be an infinite CSS marquee moving left linearly.
   - Use Tailwind 4's `animate-[marquee_30s_linear_infinite]` (you may need to add the keyframes to your global CSS or use an inline style trick, or configure it in Tailwind).
   - The `flex` container must contain duplicated sets of the model cards so the animation loops seamlessly (`[...models, ...models].map(...)`).
4. **Card Hover Effect (Front/Back Swap):**
   - Each model card is fixed size: `w-[220px] h-[320px] md:w-[260px] md:h-[380px] lg:w-[300px] lg:h-[440px] flex-shrink-0 relative group`.
   - The card contains two images: one for the front of the jersey, one for the back.
   - Both images are `absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-in-out`.
   - **Default state:** Front image `opacity-100 group-hover:opacity-0`. Back image `opacity-0 group-hover:opacity-100`.
   - The gap between cards is minimal: `gap-1` (`0.25rem`).

---

# ANIMATION KEYFRAMES (Add to global CSS)

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

# COMPONENT STRUCTURE

```tsx
const models = [
  {
    id: 1,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-01.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-01-back.png"
  },
  {
    id: 2,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-02.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-02-back.png"
  },
  {
    id: 3,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-03.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-03-back.png"
  },
  {
    id: 4,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-04.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-04-back.png"
  },
  {
    id: 5,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-05.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-05-back.png"
  },
  {
    id: 6,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-06.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-06-back.png"
  },
  {
    id: 7,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-07.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-07-back.png"
  },
  {
    id: 8,
    front: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-08.png",
    back: "https://ecommerce-landing.pages.dev/05-elan-moody/assets/elan-model-08-back.png"
  }
];

export default function ModelMarquee() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#111111] max-w-2xl leading-tight">
          Explore our world of retro jerseys and find the perfect fit for your style.
        </h2>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        {/* We use an inline style to apply the animation since Tailwind 4 arbitrary animations can sometimes be tricky without config, or rely on the custom global css keyframe */}
        <div 
          className="flex gap-1"
          style={{ animation: 'marquee 30s linear infinite', willChange: 'transform' }}
        >
          {/* Duplicate the models array to create a seamless infinite loop */}
          {[...models, ...models].map((model, idx) => (
            <div 
              key={idx} 
              className="relative flex-shrink-0 w-[220px] h-[320px] md:w-[260px] md:h-[380px] lg:w-[300px] lg:h-[440px] group cursor-pointer"
            >
              {/* Front Image (Fades out on hover) */}
              <img 
                src={model.front} 
                alt="Model Front" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-in-out opacity-100 group-hover:opacity-0"
                loading="lazy"
              />
              
              {/* Back Image (Fades in on hover) */}
              <img 
                src={model.back} 
                alt="Model Back" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
```
