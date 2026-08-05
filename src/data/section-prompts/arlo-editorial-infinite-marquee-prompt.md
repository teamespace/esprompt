Create a React + Vite + TypeScript + Tailwind CSS 4 component for an Infinite Marquee / Logo Strip, inspired by Arlo Editorial.

# ⚠️ IMPLEMENTATION RULES

1. **Infinite CSS Animation:** Use pure CSS `@keyframes` for the most performant scrolling. The container must translate from `0%` to `-50%`.
2. **Duplication for Seamless Loop:** Render the content strip *twice* side-by-side within a `w-max flex` container. When the first block scrolls fully left, the second takes its exact place, creating an infinite loop.
3. **Asset Usage:** Use the exact text from Arlo Editorial ("The Quiet Confidence · Season 26 · Made to Last").

# CSS SETUP (`index.css`)
```css
@layer utilities {
  @keyframes scroll {
    to { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: scroll 15s linear infinite;
  }
}
```

# COMPONENT STRUCTURE

```tsx
export function InfiniteMarquee() {
  const items = [
    "The Quiet Confidence", "·", "Season 26", "·", "Made to Last", "·"
  ];

  return (
    <div className="w-full bg-white text-black py-4 overflow-hidden border-y border-black">
      <div className="flex w-max animate-marquee">
        {/* Render twice for the seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8 px-4 items-center">
            {items.map((item, idx) => (
              <span 
                key={idx} 
                className="font-serif italic text-xl whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
```
