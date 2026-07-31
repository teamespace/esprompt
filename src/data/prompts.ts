// Mock catalog data for Phase 1. Reuses the same showcase thumbnails and
// titles already established on the marketing homepage's showcase grid /
// carousel, so the catalog reads as a natural extension of it rather than
// a different product. Swap this for a real API/CMS later — every consumer
// just imports `prompts` and reads these fields.

// Full-fidelity Full LP prompts supplied via new-prompts/full-landing — each is
// the exact implementation-rules-and-scaffold prompt meant to be copy/pasted
// into an AI coding tool, not a short blurb. Loaded raw so prompts.ts doesn't
// need to escape thousands of lines of embedded backticks/code fences.
import serenityPrompt from './full-prompts/serenity.md?raw';
import elanPrompt from './full-prompts/elan.md?raw';
import kiltPrompt from './full-prompts/kilt.md?raw';
import auraPrompt from './full-prompts/aura.md?raw';
import arloPrompt from './full-prompts/arlo.md?raw';
import lumaPrompt from './full-prompts/luma.md?raw';
import recallPrompt from './full-prompts/recall.md?raw';
import veloPrompt from './full-prompts/velo.md?raw';
import beyondHorizonPrompt from './full-prompts/beyond-horizon.md?raw';
import trainfoldPrompt from './full-prompts/trainfold.md?raw';
import modexPrompt from './full-prompts/modex.md?raw';
import pylonPrompt from './full-prompts/pylon.md?raw';

export type Tier = 'Hero' | 'Section' | 'Full LP';

export interface PromptItem {
  slug: string;
  title: string;
  tier: Tier;
  category: string;
  thumbnail: string; // path under /assets/showcase/
  prompt: string;
  imagePrompt?: string; // Hero tier only: prompt to generate the hero image asset
  videoPrompt?: string; // Hero tier only: prompt to generate the hero video asset
}

export const prompts: PromptItem[] = [
  { slug: 'aurora-hero', title: 'Aurora Hero', tier: 'Hero', category: 'Hero', thumbnail: 'candor.png',
    prompt: 'Create a modern hero section with a soft aurora gradient, bold two-line headline, two CTA buttons, and subtle animated blobs in the background.',
    imagePrompt: 'A soft aurora-gradient background image, purple to teal blend, subtle grain, 1920x1080, ready for a website hero section.',
    videoPrompt: 'A 6-second seamless looping video of a soft aurora gradient shifting slowly, purple to teal, subtle grain, 1920x1080.' },
  { slug: 'pricing-pro', title: 'Pricing Pro', tier: 'Section', category: 'Pricing', thumbnail: 'wellspring.png',
    prompt: 'Build a 3-column pricing table with a highlighted middle plan, feature checklists, and a monthly/annual toggle.' },
  { slug: 'fintech-hero', title: 'Fintech Hero', tier: 'Hero', category: 'Hero', thumbnail: 'pylon.png',
    prompt: 'Create a fintech hero with a dashboard mockup floating on the right, trust badges below the fold, and a single primary CTA.',
    imagePrompt: 'A fintech dashboard mockup screenshot showing charts and balances, dark UI, floating at an angle, transparent background.',
    videoPrompt: 'A 5-second seamless looping video of a fintech dashboard UI animating in, charts drawing, dark theme, subtle motion.' },
  { slug: 'bento-feat', title: 'Bento Feat', tier: 'Section', category: 'Features', thumbnail: 'modex.png',
    prompt: 'Build a bento-grid feature section with 5 asymmetric cards, each with an icon, short title, and one-line description.' },
  { slug: 'cta-glow', title: 'CTA Glow', tier: 'Section', category: 'CTA', thumbnail: 'vox.png',
    prompt: 'Build a closing CTA section with an animated glowing border, centered headline, and one primary button.' },
  { slug: 'minimal-saas', title: 'Minimal SaaS', tier: 'Hero', category: 'Hero', thumbnail: 'proxim.png',
    prompt: 'Create a minimal SaaS hero with a plain background, large centered headline, and a product screenshot below.',
    imagePrompt: 'A clean product UI screenshot mockup in a browser frame, light theme, centered composition, soft shadow.',
    videoPrompt: 'A 6-second seamless looping video of a SaaS product UI being scrolled through smoothly, light theme, subtle cursor movement.' },
  { slug: 'glass-pricing', title: 'Glass Pricing', tier: 'Section', category: 'Pricing', thumbnail: 'luma.png',
    prompt: 'Build a glassmorphism pricing section with frosted cards over a gradient background.' },
  { slug: 'newsletter-cta', title: 'Newsletter CTA', tier: 'Section', category: 'CTA', thumbnail: 'stillwave.png',
    prompt: 'Build a newsletter signup section with an inline email field, subtle illustration, and social proof line.' },
  { slug: 'startup-hero', title: 'Startup Hero', tier: 'Hero', category: 'Hero', thumbnail: 'apex.png',
    prompt: 'Create a startup hero with an announcement badge, bold headline, and two stacked CTAs for mobile.',
    imagePrompt: 'An announcement badge graphic with a bold two-line headline overlay, soft gradient background, startup aesthetic.',
    videoPrompt: 'A 5-second seamless looping video of a subtle gradient background shifting behind bold startup headline text.' },
  { slug: 'product-launch', title: 'Product Launch', tier: 'Section', category: 'Announcement', thumbnail: 'aura.png',
    prompt: 'Build a product launch section with a countdown timer, product render, and an early-access form.' },
  { slug: 'testimonial-wall', title: 'Testimonial Wall', tier: 'Hero', category: 'Testimonial', thumbnail: 'elan.png',
    prompt: 'Create a testimonial wall with a masonry layout of quote cards, avatars, and star ratings.',
    imagePrompt: 'A masonry grid of testimonial quote cards with avatars and star ratings, clean light background.',
    videoPrompt: 'A 6-second seamless looping video of testimonial cards gently fading and shifting position in a masonry grid.' },

  // ---- Full LP tier: 35 entries, one per real Elux Space portfolio build
  // (https://elux-vibe-portfolio.ahrasya.workers.dev/), minus the 2 internal
  // dashboard apps (not landing pages). Prompts are original descriptions of
  // each site's structure, not copied marketing copy. Every entry now has a
  // real screenshot in /assets/showcase (the 20 that used to point at
  // placeholder-portfolio.png were backfilled from the portfolio site's own
  // /thumbs/*.jpg — see the download command in conversation).
  { slug: 'quorum-ai', title: 'Quorum', tier: 'Full LP', category: 'SaaS', thumbnail: 'quorum.jpg',
    prompt: 'Design an AI meeting-assistant landing page: dashboard preview of live transcription, integration logos row (Slack, Linear, Asana), and a three-step "how it works" flow.' },
  { slug: 'curalink-telehealth', title: 'Curalink', tier: 'Full LP', category: 'Health', thumbnail: 'curalink.jpg',
    prompt: 'Build a telehealth landing page with a same-day-visit CTA, an AI symptom-intake mockup, and licensed-physician trust badges.' },
  { slug: 'curalink-medic-ai', title: 'Curalink - Medic AI', tier: 'Full LP', category: 'Health', thumbnail: 'curalink-medic-ai.jpg',
    prompt: 'Design an alternate telehealth hero with a warm photographic banner and a split-screen chat demo showing AI triage handing off to a doctor.' },
  { slug: 'vellum-legal', title: 'Vellum', tier: 'Full LP', category: 'SaaS', thumbnail: 'vellum.jpg',
    prompt: 'Create a legal-tech landing page for contract review: a redlined document preview, risk-flag callouts, and a benchmarking stat strip.' },
  { slug: 'recall-edtech', title: 'Recall', tier: 'Full LP', category: 'SaaS', thumbnail: 'recall.jpg',
    prompt: recallPrompt },
  { slug: 'wayfare-trip', title: 'Wayfare', tier: 'Full LP', category: 'Travel', thumbnail: 'wayfare.jpg',
    prompt: 'Design an AI trip-planner hero with a day-by-day itinerary preview, map pins clustered by neighborhood, and a single "where are you going" input.' },
  { slug: 'candor-hrtech', title: 'Candor', tier: 'Full LP', category: 'SaaS', thumbnail: 'candor.png',
    prompt: 'Build a recruitment-intelligence landing page: candidate scorecards, ATS integration logos, and a pipeline-bottleneck chart.' },
  { slug: 'stillwave-meditation', title: 'Stillwave', tier: 'Full LP', category: 'Wellness', thumbnail: 'stillwave.png',
    prompt: 'Design a meditation-app landing page with a daily-session player mockup, a breath-paced waveform animation, and a calming gradient hero.' },
  { slug: 'aura-apparel', title: 'Aura', tier: 'Full LP', category: 'Ecom', thumbnail: 'aura.png',
    prompt: auraPrompt },
  { slug: 'serenity-health-ed', title: 'Serenity', tier: 'Full LP', category: 'Health', thumbnail: 'serenity.jpg',
    prompt: serenityPrompt },
  { slug: 'apex-sportswear', title: 'Apex', tier: 'Full LP', category: 'Ecom', thumbnail: 'apex.png',
    prompt: 'Build a performance-apparel storefront with athlete hero photography, a free-shipping threshold banner, and scannable product cards.' },
  { slug: 'aethera-studio', title: 'Aethera', tier: 'Full LP', category: 'Studio', thumbnail: 'aethera.png',
    prompt: 'Design a cinematic 3D/CGI studio portfolio: full-bleed project stills, a slow scroll rhythm, and a minimal service list.' },
  { slug: 'altr-watches', title: 'ALTR', tier: 'Full LP', category: 'Ecom', thumbnail: 'altr.png',
    prompt: 'Build a watch-brand storefront with low-lit product photography, a vertical side-nav, and a "Daylight to Nightfall" collection edit.' },
  { slug: 'arlo-editorial', title: 'Arlo', tier: 'Full LP', category: 'Ecom', thumbnail: 'arlo.png',
    prompt: arloPrompt },
  { slug: 'vox-streetwear', title: 'VOX', tier: 'Full LP', category: 'Ecom', thumbnail: 'vox.png',
    prompt: 'Build a streetwear drop page with marquee tape graphics, street photography, and a limited-run countdown timer.' },
  { slug: 'luma-lifestyle', title: 'LUMA', tier: 'Full LP', category: 'Ecom', thumbnail: 'luma.png',
    prompt: lumaPrompt },
  { slug: 'kilt-techwear', title: 'KILT', tier: 'Full LP', category: 'Ecom', thumbnail: 'kilt.png',
    prompt: kiltPrompt },
  { slug: 'elan-football', title: 'Élan', tier: 'Full LP', category: 'Ecom', thumbnail: 'elan.png',
    prompt: elanPrompt },
  { slug: 'modex-infra', title: 'Modex', tier: 'Full LP', category: 'Dev', thumbnail: 'modex.png',
    prompt: modexPrompt },
  { slug: 'pylon-ai', title: 'Pylon', tier: 'Full LP', category: 'Dev', thumbnail: 'pylon.png',
    prompt: pylonPrompt },
  { slug: 'proxim-router', title: 'Proxim', tier: 'Full LP', category: 'Dev', thumbnail: 'proxim.png',
    prompt: 'Build an AI-router landing page: a provider-logo grid, an auto-fallback diagram, and a painterly landscape hero contrasted with hard routing lines.' },
  { slug: 'trainfold-ml', title: 'Trainfold', tier: 'Full LP', category: 'Dev', thumbnail: 'trainfold.jpg',
    prompt: trainfoldPrompt },
  { slug: 'vris-suv', title: 'VRIS R1', tier: 'Full LP', category: 'Product', thumbnail: 'vris-r1.png',
    prompt: 'Build an EV reveal page with an x-ray cutaway hero, a spec ticker (range, 0-60, charge time), and a neon night-street backdrop.' },
  { slug: 'velo-moto', title: 'VELO', tier: 'Full LP', category: 'Product', thumbnail: 'velo.jpg',
    prompt: veloPrompt },
  { slug: 'figureworld-collectibles', title: 'FigureWorld', tier: 'Full LP', category: 'Ecom', thumbnail: 'figureworld.jpg',
    prompt: 'Build a collectibles storefront staged in a neon skyline, with oversized display type and limited-drop urgency badges.' },
  { slug: 'thecity-residences', title: 'The City', tier: 'Full LP', category: 'Property', thumbnail: 'thecity.jpg',
    prompt: 'Design a residential-development landing page: a cinematic curtain intro, a day/night skyline toggle, and a from-price unit grid.' },
  { slug: 'beyond-horizon-yacht', title: 'Beyond Horizon', tier: 'Full LP', category: 'Travel', thumbnail: 'yacht.jpg',
    prompt: beyondHorizonPrompt },
  { slug: 'saha-medical-clinic', title: 'Saha Medical', tier: 'Full LP', category: 'Health', thumbnail: 'saha-medical.jpg',
    prompt: 'Design a concierge-clinic landing page: a cinematic video hero, service pillars (longevity, genomics, aesthetics), and a resort-grade tone.' },
  { slug: 'zenith-ops', title: 'Zenith', tier: 'Full LP', category: 'SaaS', thumbnail: 'zenith.jpg',
    prompt: 'Build an ops-automation landing page for an AI agent team: a dark aurora-lit hero, a task-handling feature grid, and a YC-style launch CTA.' },
  { slug: 'storefront-v1-skincare', title: 'StoreFront - V1', tier: 'Full LP', category: 'Ecom', thumbnail: 'storefront-v1.jpg',
    prompt: 'Design a ready-to-brand skincare storefront: a warm terracotta palette, a bestseller grid, and a natural-ingredients pitch.' },
  { slug: 'storefront-v2-wellness', title: 'StoreFront - V2', tier: 'Full LP', category: 'Ecom', thumbnail: 'storefront-v2.jpg',
    prompt: 'Build a wellness-supplement storefront: a soft neutral palette, a hand-holding-serum hero, and a bestseller carousel.' },
  { slug: 'warebotics-robotics', title: 'Warebotics', tier: 'Full LP', category: 'Product', thumbnail: 'warebotics.jpg',
    prompt: 'Design a warehouse-robotics landing page with a boot-sequence loading screen, live efficiency counters, and industrial-grade visuals.' },
  { slug: 'relay-backend', title: 'Relay', tier: 'Full LP', category: 'Dev', thumbnail: 'relay.jpg',
    prompt: 'Build a realtime-backend landing page: a data-sync diagram, a function/presence feature grid, and a retro CRT-terminal hero.' },
  { slug: 'edgehaul-carry', title: 'Edgehaul', tier: 'Full LP', category: 'Ecom', thumbnail: 'edgehaul.jpg',
    prompt: 'Design a tactical-carry storefront with spec-sheet product cards (capacity, weight, material) and a field-test-proof tone.' },
  { slug: 'lunea-skincare', title: 'Lunéa', tier: 'Full LP', category: 'Ecom', thumbnail: 'lunea.jpg',
    prompt: 'Build a skincare storefront staged in chiaroscuro lighting, with an ingredient explorer and a full face/body range grid.' },
];

export const tiers: Tier[] = ['Hero', 'Section', 'Full LP'];
export const categories: string[] = [...new Set(prompts.map(p => p.category))].sort();
