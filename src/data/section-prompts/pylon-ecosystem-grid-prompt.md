Create a React + Vite + TypeScript + Tailwind CSS 4 component for the Platform Ecosystem Grid section, inspired by the PYLON AI landing page.

---

# ⚠️ IMPLEMENTATION RULES

1. **Theme and Colors:** Use exact hex values from the PYLON design system:
   - Text Primary: `#2B2B29`
   - Text Secondary: `#494444`
   - Teal Light (Background): `#C8E1DD`
   - Teal Dark: `#387478`
2. **Typography:** 
   - Headings: `Source Serif 4` (load via Google Fonts).
   - UI/Body text: `DM Sans` (load via Google Fonts).
3. **Animations:**
   - **Hover Effects:** The ecosystem grid cards feature a long `6s ease` zoom on the background image (`scale-105` on hover) and a distinct box-shadow reveal on the visual container (`hover:shadow-[0_24px_64px_rgba(43,43,41,0.18)]`).
   - **Fade Up:** The section heading, subheadings, and individual cards should animate in using Framer Motion `whileInView` (staggered fade-up).
4. **Mockup UI (Glassmorphism):** The mockups inside the images use `bg-white/90 backdrop-blur-md` with strict layouts for Chat, Model Hub, RAG, and Pipelines. Recreate these using Tailwind utility classes.

---

# FONTS

Include this in your `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&display=swap');

@theme {
  --font-sans: "DM Sans", sans-serif;
  --font-serif: "Source Serif 4", serif;
}
```

---

# COMPONENT STRUCTURE

```tsx
import { motion } from "framer-motion";

const cards = [
  {
    id: "chat",
    title: "Chat Interface",
    desc: "ChatGPT-grade UX for every model. Conversation history, multimodal input, voice, and custom system prompts — all offline-capable.",
    img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Pylon-ai/About/about-1.webp",
    delay: 0.1,
    renderMockup: () => (
      <div className="bg-white/90 backdrop-blur-md rounded-[10px] w-full max-w-[380px] shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden">
        <div className="bg-white/95 px-3.5 py-2.5 flex items-center gap-2 border-b border-[#2b2b29]/5">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] font-semibold text-[#494444] tracking-wide ml-1">PYLON Chat</span>
          <span className="ml-auto text-[10px] text-[#387478] font-semibold tracking-wider">● LIVE</span>
        </div>
        <div className="p-3.5">
          <div className="h-[9px] rounded-[5px] bg-[#387478]/25 w-full mb-2" />
          <div className="h-[9px] rounded-[5px] bg-[#2b2b29]/10 w-[75%] mb-2 mt-1.5" />
          <div className="h-[9px] rounded-[5px] bg-[#2b2b29]/10 w-[55%] mb-2" />
          <div className="h-[1px] bg-[#387478]/20 my-2" />
          <div className="h-[9px] rounded-[5px] bg-[#2b2b29]/10 w-[65%] ml-auto mb-2" />
          <div className="h-[9px] rounded-[5px] bg-[#2b2b29]/10 w-[40%] ml-auto mb-2" />
          <div className="mt-3.5 bg-[#2b2b29]/5 border border-[#2b2b29]/10 rounded-full px-3.5 py-2 flex items-center justify-between">
            <span className="text-[11px] text-[#494444]">Ask anything about your models…</span>
            <div className="w-5 h-5 rounded-full bg-[#387478] flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 6L2 2V5.5L7 6L2 6.5V10Z" fill="white"/></svg>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "hub",
    title: "Model Hub",
    desc: "Connect any model — local via Ollama, or cloud via OpenAI-compatible APIs. Switch, compare, and version-control your model stack.",
    img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Pylon-ai/About/about-2.webp",
    delay: 0.2,
    renderMockup: () => (
      <div className="bg-white/90 backdrop-blur-md rounded-[10px] w-full max-w-[380px] shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden">
        <div className="bg-white/95 px-3.5 py-2.5 flex items-center border-b border-[#2b2b29]/5">
          <span className="text-[11px] font-semibold text-[#494444] tracking-wide ml-1">Model Hub</span>
          <span className="ml-auto text-[10px] bg-[#387478]/15 text-[#387478] px-2 py-0.5 rounded-lg font-semibold">4 connected</span>
        </div>
        <div className="p-3.5">
          <div className="flex flex-wrap gap-1 mb-2">
            {["Llama 3.3", "Claude", "Gemini Pro", "Mistral", "DeepSeek", "GPT-4o"].map(tag => (
              <span key={tag} className="inline-block px-2 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#387478]/10 text-[#387478] mb-1.5">{tag}</span>
            ))}
          </div>
          <div className="h-[1px] bg-[#387478]/20 my-2" />
          <div className="flex gap-1 flex-wrap">
            {["LOCAL", "API", "OLLAMA"].map(t => (
              <div key={t} className="px-2 py-0.5 rounded border border-[#387478]/40 bg-[#387478]/10 text-[8px] font-semibold text-[#387478] m-[2px] flex items-center justify-center">{t}</div>
            ))}
          </div>
          <div className="h-1.5 rounded-full bg-[#387478]/25 w-full mt-2.5" />
        </div>
      </div>
    )
  },
  {
    id: "rag",
    title: "RAG Engine",
    desc: "Upload documents, codebases, and internal wikis. Answers from your own data — no cloud required, no data leaving your server.",
    img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Pylon-ai/About/about-3.webp",
    delay: 0.3,
    renderMockup: () => (
      <div className="bg-white/90 backdrop-blur-md rounded-[10px] w-full max-w-[380px] shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden">
        <div className="bg-white/95 px-3.5 py-2.5 flex items-center border-b border-[#2b2b29]/5">
          <span className="text-[11px] font-semibold text-[#494444] tracking-wide ml-1">Knowledge Base</span>
          <span className="ml-auto text-[10px] text-[#494444]">3 sources</span>
        </div>
        <div className="p-3.5">
          <div className="flex flex-col gap-1.5">
            {[ { icon: "📄", w: "w-full" }, { icon: "📁", w: "w-[70%]" }, { icon: "🔗", w: "w-[55%]" } ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-1.5 bg-[#387478]/10 rounded-md">
                <span className="text-[11px]">{item.icon}</span>
                <div className={`h-[7px] rounded-full bg-[#2b2b29]/10 ${item.w}`} />
              </div>
            ))}
          </div>
          <div className="mt-2.5 bg-[#2b2b29]/5 border border-[#2b2b29]/10 rounded-full px-3.5 py-2 flex items-center justify-between">
            <span className="text-[11px] text-[#494444]">Search your knowledge base…</span>
            <div className="w-5 h-5 rounded-full bg-[#387478] flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 6L2 2V5.5L7 6L2 6.5V10Z" fill="white"/></svg>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "api",
    title: "API & Pipelines",
    desc: "Extend with Python. Build custom tools, webhook integrations, multi-step workflows, and function calling — all within your infrastructure.",
    img: "https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Pylon-ai/About/about-4.webp",
    delay: 0.4,
    renderMockup: () => (
      <div className="bg-white/90 backdrop-blur-md rounded-[10px] w-full max-w-[380px] shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden">
        <div className="bg-white/95 px-3.5 py-2.5 flex items-center border-b border-[#2b2b29]/5">
          <span className="text-[11px] font-semibold text-[#494444] tracking-wide ml-1">Pipeline Editor</span>
          <span className="ml-auto text-[10px] text-[#387478] font-semibold">▶ Running</span>
        </div>
        <div className="p-3.5">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="px-2 py-0.5 rounded border border-[#387478]/40 bg-[#387478]/15 text-[8px] font-semibold text-[#387478]">INPUT</div>
            <div className="flex-1 h-[1px] bg-[#387478]/30" />
            <div className="px-2 py-0.5 rounded border border-[#387478]/40 bg-[#387478]/10 text-[8px] font-semibold text-[#387478]">FILTER</div>
            <div className="flex-1 h-[1px] bg-[#387478]/30" />
            <div className="px-2 py-0.5 rounded border border-[#387478]/40 bg-[#387478]/15 text-[8px] font-semibold text-[#387478]">OUTPUT</div>
          </div>
          <div className="bg-[#2b2b29]/5 rounded-md p-2.5">
            <div className="h-1.5 rounded bg-[#387478]/25 w-[55%] mb-1.5" />
            <div className="h-1.5 rounded bg-[#2b2b29]/10 w-[75%] mb-1.5" />
            <div className="h-1.5 rounded bg-[#2b2b29]/10 w-[55%]" />
          </div>
          <div className="h-1.5 rounded-full bg-[#387478]/25 w-full mt-2.5 opacity-60" />
        </div>
      </div>
    )
  }
];

export function PlatformEcosystemGrid() {
  return (
    <section className="bg-[#C8E1DD] pt-32 pb-24 px-6 md:px-10 lg:px-12 relative overflow-hidden font-sans text-[#2B2B29]">
      
      {/* Optional: Halftone dots overlay at the top edge can go here */}

      <div className="max-w-7xl mx-auto">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[2px] uppercase text-[#387478] font-semibold mb-5"
        >
          The Platform
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-[42px] md:text-[64px] leading-[1.05] tracking-tight mb-4"
        >
          Meet the PYLON ecosystem
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base text-[#494444] max-w-xl mb-16"
        >
          Four pillars of sovereign AI infrastructure — built for developers, trusted by enterprises.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: card.delay }}
              className="group cursor-pointer"
            >
              {/* Visual Container */}
              <div className="relative h-[320px] overflow-hidden transition-shadow duration-300 ease-in-out group-hover:shadow-[0_24px_64px_rgba(43,43,41,0.18)]">
                
                {/* Background Image with slow zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-[6s] ease-in-out group-hover:scale-[1.04]" 
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[#0a0805]/40" />
                </div>

                {/* Floating Mockup */}
                <div className="absolute inset-0 flex items-center justify-center p-7 z-10">
                  {card.renderMockup()}
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-4 px-1 pb-2">
                <h3 className="font-sans text-2xl font-bold text-[#2B2B29] mb-1.5">{card.title}</h3>
                <p className="text-[13px] leading-5 text-[#494444] mb-3.5">
                  {card.desc}
                </p>
                <a href="#" className="text-[13px] font-medium text-[#2B2B29] flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5">
                  Read the docs <span className="transition-transform duration-200">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```
