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
import relayPrompt from './full-prompts/relay.md?raw';

// Hero-tier prompts — the hero-section-only excerpt lifted verbatim from each
// matching full-landing prompt above (see new-prompts/hero/<slug>/prompt.md).
// One entry per file in new-prompts/full-landing — keep this set 1:1 with
// that folder's contents.
import serenityHeroPrompt from './hero-prompts/serenity.md?raw';
import elanHeroPrompt from './hero-prompts/elan.md?raw';
import kiltHeroPrompt from './hero-prompts/kilt.md?raw';
import auraHeroPrompt from './hero-prompts/aura.md?raw';
import arloHeroPrompt from './hero-prompts/arlo.md?raw';
import lumaHeroPrompt from './hero-prompts/luma.md?raw';
import recallHeroPrompt from './hero-prompts/recall.md?raw';
import modexHeroPrompt from './hero-prompts/modex.md?raw';
import pylonHeroPrompt from './hero-prompts/pylon.md?raw';
import trainfoldHeroPrompt from './hero-prompts/trainfold.md?raw';
import veloHeroPrompt from './hero-prompts/velo.md?raw';
import beyondHorizonHeroPrompt from './hero-prompts/beyond-horizon.md?raw';

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
  // ---- Section tier: intentionally empty for now (real prompts pending).

  // ---- Hero tier, batch 2: 12 entries, one per file in
  // new-prompts/full-landing — just the hero-section excerpt of each real
  // Full LP build (see the matching Full LP entry below for the whole page).
  // Thumbnails reuse the Full LP counterpart's real screenshot. No
  // imagePrompt/videoPrompt yet (asset download is blocked in this sandbox —
  // see conversation; URLs are documented inside each prompt's Assets table).
  { slug: 'serenity-hero', title: 'Serenity', tier: 'Hero', category: 'Health', thumbnail: 'serenity.jpg',
    prompt: serenityHeroPrompt },
  { slug: 'elan-hero', title: 'Élan', tier: 'Hero', category: 'Ecom', thumbnail: 'elan.png',
    prompt: elanHeroPrompt },
  { slug: 'kilt-hero', title: 'KILT', tier: 'Hero', category: 'Ecom', thumbnail: 'kilt.png',
    prompt: kiltHeroPrompt },
  { slug: 'aura-hero', title: 'Aura', tier: 'Hero', category: 'Ecom', thumbnail: 'aura.png',
    prompt: auraHeroPrompt },
  { slug: 'arlo-hero', title: 'Arlo', tier: 'Hero', category: 'Ecom', thumbnail: 'arlo.png',
    prompt: arloHeroPrompt },
  { slug: 'luma-hero', title: 'LUMA', tier: 'Hero', category: 'Ecom', thumbnail: 'luma.png',
    prompt: lumaHeroPrompt },
  { slug: 'recall-hero', title: 'Recall', tier: 'Hero', category: 'SaaS', thumbnail: 'recall.jpg',
    prompt: recallHeroPrompt },
  { slug: 'modex-hero', title: 'Modex', tier: 'Hero', category: 'Dev', thumbnail: 'modex.png',
    prompt: modexHeroPrompt },
  { slug: 'pylon-hero', title: 'Pylon', tier: 'Hero', category: 'Dev', thumbnail: 'pylon.png',
    prompt: pylonHeroPrompt },
  { slug: 'trainfold-hero', title: 'Trainfold', tier: 'Hero', category: 'Dev', thumbnail: 'trainfold.jpg',
    prompt: trainfoldHeroPrompt },
  { slug: 'velo-hero', title: 'VELO', tier: 'Hero', category: 'Product', thumbnail: 'velo.jpg',
    prompt: veloHeroPrompt },
  { slug: 'beyond-horizon-hero', title: 'Beyond Horizon', tier: 'Hero', category: 'Travel', thumbnail: 'yacht.jpg',
    prompt: beyondHorizonHeroPrompt },

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
    prompt: relayPrompt },
  { slug: 'edgehaul-carry', title: 'Edgehaul', tier: 'Full LP', category: 'Ecom', thumbnail: 'edgehaul.jpg',
    prompt: 'Design a tactical-carry storefront with spec-sheet product cards (capacity, weight, material) and a field-test-proof tone.' },
  { slug: 'lunea-skincare', title: 'Lunéa', tier: 'Full LP', category: 'Ecom', thumbnail: 'lunea.jpg',
    prompt: 'Build a skincare storefront staged in chiaroscuro lighting, with an ingredient explorer and a full face/body range grid.' },
];

export const tiers: Tier[] = ['Hero', 'Section', 'Full LP'];
export const categories: string[] = [...new Set(prompts.map(p => p.category))].sort();
