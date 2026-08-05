Create a React + Vite + TypeScript + Tailwind CSS 4 component for a Footer Section, inspired by the Stillwave Meditation landing page.

---

# ⚠️ IMPLEMENTATION RULES (READ FIRST)

1. **Theme and Colors:** The footer uses a dark pine green theme (`bg-[#182C25]`) with light cream text (`text-[#FDF9F3]`).
2. **Typography:** Use a clean Sans-serif for all UI text, links, and the newsletter, and a Serif font (like 'Instrument Serif' or 'Playfair Display') exclusively for the central "Stillwave" logo.
3. **Borders:** All dividers and borders are subtle translucent lines, e.g., `border-[#FDF9F3]/10` or `border-[#FDF9F3]/20`.
4. **Interactivity:** 
   - Links should smoothly fade (`transition-opacity duration-300 hover:opacity-60`).
   - The newsletter input should have a slight background fill (`bg-[#FDF9F3]/5`) that intensifies on focus with a subtle border (`focus:border-[#FDF9F3]/30 focus:bg-[#FDF9F3]/10`).
5. **Noise Texture (Premium Feel):** Add a subtle noise overlay to the entire footer to match the organic, meditation-focused brand identity.

---

# COMPONENT STRUCTURE

```tsx
import { FormEvent } from "react";

export function StillwaveFooter() {
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="relative bg-[#182C25] text-[#FDF9F3] pt-16 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Main Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-[#FDF9F3]/15">
          
          {/* Left: Newsletter */}
          <div className="flex flex-col items-center justify-center py-16 px-4 md:border-r border-[#FDF9F3]/15">
            <h3 className="text-lg font-medium tracking-wide mb-6">
              Join our healing newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#FDF9F3]/[0.06] border border-transparent focus:border-[#FDF9F3]/30 focus:bg-[#FDF9F3]/10 rounded-full pl-6 pr-28 py-4 text-sm outline-none transition-all placeholder:text-[#FDF9F3]/40"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[0.65rem] font-bold uppercase tracking-widest px-4 py-2 hover:opacity-70 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right: Navigation Grid */}
          <div className="py-16 px-8 md:px-16 lg:px-24 flex items-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                {["Practice", "Philosophy", "Voices", "Pricing"].map((item) => (
                  <a key={item} href="#" className="text-[0.7rem] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                {["Journal", "The Science", "Your First Time", "Contact"].map((item) => (
                  <a key={item} href="#" className="text-[0.7rem] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Middle Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-[#FDF9F3]/15 gap-6 md:gap-0">
          <p className="text-xs opacity-70">
            © 2026 Built by <a href="#" className="underline underline-offset-4 hover:opacity-100 transition-opacity">Stillwave</a>
          </p>
          
          {/* Logo */}
          <a href="#" className="text-4xl md:text-5xl font-serif tracking-wide hover:opacity-80 transition-opacity">
            Stillwave
          </a>

          <div className="flex gap-6 text-xs opacity-70">
            {["Legal", "Style Guide", "Licenses", "Changelog"].map((item) => (
              <a key={item} href="#" className="hover:opacity-100 transition-opacity">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Very Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6 md:gap-0">
          <p className="text-xs opacity-60">
            "Silence is not empty. It is full of answers."
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-5 opacity-70">
            {/* Facebook */}
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
```
