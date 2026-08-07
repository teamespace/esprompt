Rebuild this website 1:1 according to the following exact specifications.
I am attaching a full-page screenshot — match it for anything not specified here.

=== GLOBAL ===
- Page background: #FFFFFF, default text: #0A1F44 (deep navy)
- Fonts: headings and body "Inter Tight"
- Type scale: h1 72px/72px line-height, weight 400
- Button: bg #FFFFFF, text #0A1F44, radius 16px, padding 12px 32px
- Nav background: rgba(255,255,255,0.1) — glass/frosted over the hero photo
- Container: wide, generous vertical rhythm between sections
- Animation library: not detected — carousels for hero background, specialties, and experts; likely CSS/JS-driven with no named library

=== SECTION 1: Nav ===
Layout & structure: fixed, glass background rgba(255,255,255,0.1)
Content (copy verbatim):
- Icon "ecg_heart" + "Saha Medical"
- Links: "Specialties", "Concierge", "Experts"
- Button "Book Now"

=== SECTION 2: Hero ===
Layout & structure: full-bleed photographic hero (rotating background), centered/left content
Content (copy verbatim):
- H1: "Exquisite healthcare, redefined for you." — 72px, weight 400
- Body: "Immediate access to world-class specialists in an environment of absolute tranquility and bespoke medical excellence."
- Links: "Book your visit" (primary), "Discover more"
- "Scroll Down" indicator
- Social links: X (Twitter), Instagram, Facebook
- Slide counter: "01 / 03"
Assets: hero-1.jpg, hero-2.jpg, hero-3.jpg (https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Hero/hero-1.webp etc.) — rotating/carousel background, 3 slides matching the "01/03" counter

=== SECTION 3: About us ===
Content (copy verbatim):
- Eyebrow: "About Us"
- Heading/quote: "True luxury is the absence of friction. We strip away the unnecessary, leaving only clarity, precision, and profound care."
- Body: "The Art of Subtraction. Saha Medical was born from a vision to simplify healthcare and make it seamless for the world's most discerning individuals. By removing administrative complexity, we return your most valuable asset: time."
Assets: about image ("World-class medical team in a luxury clinical setting")

=== SECTION 4: Specialties ===
Content (copy verbatim):
- Eyebrow: "What We Do" · H2: "Our Specialties"
- Body: "We bring together leading professionals from every medical discipline to provide your family a cohesive, deeply personalized care plan."
- Tab/list items: "Longevity", "Aesthetics", "Concierge", "Diagnostics", "Preventative Care" (5 items, each with its own image; the active/expanded one shown is "Preventative Care")
- Active panel copy: "Advanced diagnostics and preventative genomics designed to extend your healthspan. Our protocols anticipate future needs." — link "Learn More"

=== SECTION 5: Concierge doctors (feature grid) ===
Content (copy verbatim):
- Eyebrow: "Concierge Doctors" · H2: "Reimagining the Concierge Standard"
- Body: "We don't just treat symptoms; we curate vitality. Our approach combines cutting-edge longevity science with the hospitality of a world-class resort."
- 4 feature cards (icon + heading + body): "schedule / 24/7 Elite Access / Unrestricted access to world-class specialists, any time, anywhere." · "vital_signs / Bespoke Wellness / Genomic-based protocols tailored exclusively to your biology." · "group / Your Care Medical Team / A dedicated team of experts constantly monitoring your health." · "shield_plus / Preventative Care / Proactive measures to stop illnesses before they start."

=== SECTION 6: Our Experts (carousel) ===
Content (copy verbatim, 4 doctor cards with prev/next arrows):
- Dr. Tariq Al-Fayed — Senior Cardiologist — "World-renowned specialist with over 20 years of experience in preventative cardiovascular medicine and longevity science." — Mar 28 · Cardiology
- Dr. Yasmin Mansour — Neurology Director — "Pioneer in neuro-regenerative therapies and cognitive optimization, specializing in early detection and prevention protocols." — Apr 02 · Neurology
- Dr. Kareem Hassan — Integrative Medicine — "Expert in holistic wellness and hormonal optimization, focusing on personalized biological protocols for high-performance individuals." — Mar 25 · Integrative
- Dr. Layla Rahman — Genetic Specialist — "Leading the frontier of genomic diagnostics and CRISPR-based preventative assessments for generational health planning." — Apr 10 · Genomics

=== SECTION 7: Testimonials (looping strip) ===
Content (copy verbatim, 6 quotes each with name + city, looped twice in DOM = infinite marquee):
- "Being able to access a specialist without waiting weeks has been a game-changer. Saha Medical's service is absolutely top-notch." — Tariq Al-Fayed, Dubai, UAE
- "The personalized longevity protocols make me feel more in control of my future. Truly a lifesaver in every sense." — Yasmin Mansour, Abu Dhabi, UAE
- "Exceptional quality across the board. The discretion and proficiency here will save you both time and worry." — Kareem Hassan, Doha, Qatar
- "I've never experienced medical attention with this degree of precision. It feels like having a private research institute dedicated solely to me." — Layla Rahman, Riyadh, KSA
- "From the first consultation, the frictionless concierge experience completely changed my perspective on preventative healthcare." — Omar Al-Sayed, Manama, BH
- "The seamless integration of world-class experts into a unified, actionable health strategy is unparalleled. Breathtaking service." — Fatima Al-Zahra, Amman, JO

=== SECTION 8: Closing CTA ===
Content (copy verbatim):
- Eyebrow: "Start Your Journey" · H2: "Your Health Is Your Greatest Legacy"
- Body: "Protect what matters most. Join an elite community dedicated to proactive health, long-term vitality, and a future without medical friction."
- Button: "Book Your Private Session"

=== SECTION 9: Contact + newsletter + footer ===
Content (copy verbatim):
- Clinic Address: "DIFC, Gate Village 5, Dubai, United Arab Emirates"
- Phone: "+971 4 000 0000 / +971 50 000 0000"
- Email: "concierge@vvipclinic.com / medical@vvipclinic.com"
- "Sign up to Newsletter!" (arrow button)
- Columns: "Pages" (Home, Services, Company), "Specialties" (Longevity, Aesthetics, Diagnostics), "Utility" (Privacy Policy, License)
- "© Copyright 2024 | Saha Medical Medical Group | UAE & Global" · "Designed & Developed By Saha Medical Creative"

=== INTERACTIONS (global) ===
- Hero background is a 3-slide carousel (matches "01/03" counter) — auto-advance likely, exact interval not captured.
- Experts section has manual prev/next carousel controls (chevron_left / chevron_right).
- Testimonials render as a doubled list in the DOM, implying an infinite horizontal marquee/scroll loop.

=== ASSETS (confirmed URLs) ===
Reference build: https://elux-medical-clinic.vercel.app/

Section 2 — Hero (3 slides):
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Hero/hero-1.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Hero/hero-2.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Hero/hero-3.webp

Section 3 — About us:
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/About/about.webp

Section 4 — Specialties (5 tiles, in order Longevity / Aesthetics / Concierge / Diagnostics / Preventative Care):
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/About/about.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-2.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Why/why.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-4.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-3.webp

Section 5 — Concierge doctors (feature grid visual):
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-1.webp

Section 6 — Our Experts carousel (Dr. Tariq / Dr. Yasmin / Dr. Kareem / Dr. Layla):
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-1.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-2.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-3.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-4.webp

Section 7 — Testimonials (6 avatars) & Section 8 — Closing CTA gallery — live site reuses the same 6 images for both:
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-4.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-1.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Doctor/doctor-2.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Community/community-1.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Community/community-2.webp
- https://pub-feae39876d254fb88aeeecd320e67d2c.r2.dev/Landing/Saha-medical/Community/community-3.webp
=== RULES ===
- Use only the colors, fonts, and sizes specified above; do not invent new ones.
- Keep all copy exactly as quoted.
- Use the asset URLs as-is (hotlink) unless told otherwise.
- After building, compare against the attached screenshot and fix any differences in proportion, spacing, or color.
