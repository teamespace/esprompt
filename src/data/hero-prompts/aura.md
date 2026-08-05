# Aura — Hero (extracted from full-landing/aura-prompt.md)

Stack: React + Vite + TypeScript + Tailwind CSS 4, animated with `motion` (`motion/react`). Fonts: **Inter Tight** (global sans) + **Syne** (400–800, used inline for display moments) via Google Fonts.

Hero: full-viewport, background photo crossfades in on load; a mouse-driven interactive layer holds "AURA" / center image / "LABS" as ONE flex group that drifts ±14vw with mouse X (spring `{damping:30,stiffness:200,mass:0.5}`); "AURA" and "LABS" stretch/squeeze via `scaleX` driven by the same mouse X; the center image crossfades between 3 stills depending on which side (AURA/LABS/neither) is hovered. Both headline halves are `text-white mix-blend-difference` over the photo — do not drop that class, it's load-bearing.

## Hero markup (verbatim, `src/App.tsx`)

```tsx
        {/* Hero Section */}
        <div
          className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden bg-[#EAE8E3] pb-16 md:pb-20 lg:pb-24"
          style={{ perspective: 1200 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={isLoading ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={heroBg}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Hero Content - Unified Layout for perfectly consistent gaps */}
          <div 
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
            className="relative z-10 flex items-center justify-center w-full max-w-[100vw] overflow-hidden py-[100px] translate-y-[10vh] md:translate-y-[15vh]"
          >

            {/* The unified moving group */}
            <motion.div
              className="flex items-center"
              style={{ x: groupX }}
            >

              {/* Left Squeezable Text */}
              <div
                className="cursor-pointer px-[1vw] md:px-[1.5vw]"
                onMouseEnter={() => setHoveredSide('left')}
                onMouseLeave={() => setHoveredSide('none')}
              >
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={isLoading ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[12vw] md:text-[11vw] lg:text-[11.5vw] font-black tracking-tight leading-[0.8] text-white mix-blend-difference whitespace-nowrap z-10"
                  style={{ fontFamily: "'Inter', sans-serif", scaleX: leftTextScaleX, transformOrigin: 'right center' }}
                >
                  AURA
                </motion.h1>
              </div>

              {/* Static Interactive Center Image */}
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={isLoading ? { y: 50, opacity: 0, scale: 0.8 } : { y: 0, opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, delay: isLoading ? 0.4 : 0, ease: [0.76, 0, 0.24, 1] }}
                className="relative w-[10vw] md:w-[9vw] lg:w-[9vw] aspect-square overflow-hidden z-20 rounded-xl md:rounded-2xl shadow-2xl shrink-0 pointer-events-auto"
              >
                {heroImagesData.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img.src}
                    alt={`Hero Center ${idx}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeImageIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
              </motion.div>

              {/* Right Squeezable Text */}
              <div
                className="cursor-pointer px-[1vw] md:px-[1.5vw]"
                onMouseEnter={() => setHoveredSide('right')}
                onMouseLeave={() => setHoveredSide('none')}
              >
                <motion.h1
                  initial={{ x: 50, opacity: 0 }}
                  animate={isLoading ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[12vw] md:text-[11vw] lg:text-[11.5vw] font-black tracking-tight leading-[0.8] text-white mix-blend-difference whitespace-nowrap z-10"
                  style={{ fontFamily: "'Inter', sans-serif", scaleX: rightTextScaleX, transformOrigin: 'left center' }}
                >
                  LABS
                </motion.h1>
              </div>

            </motion.div>
          </div>
        </div>
```

## Assets used in this hero

| Const | URL | Content |
|---|---|---|
| `heroBg` | `https://aura-ecommerce-landing.vercel.app/assets/hero-bg-P2mzmULA.png` | 16:9 fisheye street photograph, three models in oversized faded-black streetwear — hero background |
| `heroTxt1` | `https://aura-ecommerce-landing.vercel.app/assets/hero-txt1-Be79_yCj.png` | Square flat-lay tee on blue — default center tile (no hover) |
| `heroTxt2` | `https://aura-ecommerce-landing.vercel.app/assets/hero-txt2-BbghUJQJ.png` | Square portrait, model in cap — center tile shown while hovering "AURA" |
| `heroTxt3` | `https://aura-ecommerce-landing.vercel.app/assets/hero-txt3-Dn8T-mbk.png` | Square back-of-head portrait, model in beanie — center tile shown while hovering "LABS" |
