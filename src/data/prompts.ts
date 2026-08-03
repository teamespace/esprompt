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
import proximPrompt from './full-prompts/proxim.md?raw';

// Batch 3 — reverse-engineered from 13 live reference URLs (see conversation
// for the source list). Real Full LP rebuild prompts (MotionSites-style:
// GLOBAL + per-SECTION layout/content/assets/motion + INTERACTIONS + RULES),
// synthesized from live DOM capture (get_page_text + accessibility tree +
// computed-style probes), not short blurbs. arlo/vox share the same
// generator family (ecommerce-landing.pages.dev) as the existing arlo entry.
import thecityPrompt from './full-prompts/thecity.md?raw';
import sahaMedicalPrompt from './full-prompts/saha-medical.md?raw';
import edgehaulPrompt from './full-prompts/edgehaul.md?raw';
import storefrontV1Prompt from './full-prompts/storefront-v1.md?raw';
import storefrontV2Prompt from './full-prompts/storefront-v2.md?raw';
import warebotics2Prompt from './full-prompts/warebotics.md?raw';
import lunea2Prompt from './full-prompts/lunea.md?raw';
import vox2Prompt from './full-prompts/vox.md?raw';
import altrPrompt from './full-prompts/altr.md?raw';
import aetheraPrompt from './full-prompts/aethera.md?raw';
import apexPrompt from './full-prompts/apex.md?raw';

// Batch 4 — reverse-engineered from 8 additional live reference URLs (Quorum,
// Curalink, Curalink Medic AI, Vellum, Wayfare, Candor, Stillwave,
// FigureWorld). Same MotionSites-style rebuild-prompt format as batch 3.
import quorumPrompt from './full-prompts/quorum.md?raw';
import curalinkPrompt from './full-prompts/curalink.md?raw';
import curalinkMedicAiPrompt from './full-prompts/curalink-medic-ai.md?raw';
import vellumPrompt from './full-prompts/vellum.md?raw';
import wayfarePrompt from './full-prompts/wayfare.md?raw';
import candorPrompt from './full-prompts/candor.md?raw';
import stillwavePrompt from './full-prompts/stillwave.md?raw';

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

// Batch 5 — 6 more Hero-tier excerpts, same "lifted verbatim from the
// matching Full LP prompt" rule as above, this time sourced from the batch
// 3/4 MotionSites-style prompts (curalink/quorum/stillwave/figureworld/
// thecity) or the long-form proxim brief. altr-watches and a from-scratch
// "zenith" brand were left out of this batch — neither has an identifiable
// hero section (or, for zenith, any prompt content) to extract from.
import curalinkHeroPrompt from './hero-prompts/curalink.md?raw';
import figureworldHeroPrompt from './hero-prompts/figureworld.md?raw';
import proximHeroPrompt from './hero-prompts/proxim.md?raw';
import quorumHeroPrompt from './hero-prompts/quorum.md?raw';
import stillwaveHeroPrompt from './hero-prompts/stillwave.md?raw';
import thecityHeroPrompt from './hero-prompts/thecity.md?raw';

// A few Hero thumbnails are animated covers hotlinked from an external CDN
// instead of a local file under /assets/showcase/ — this lets every render
// site (library grid, detail page, modal, related-prompts) resolve either
// kind from the same `thumbnail` field without duplicating the branch.
export const thumbUrl = (thumbnail: string) =>
  thumbnail.startsWith('http') ? thumbnail : `/assets/showcase/${thumbnail}`;

// .webm covers are real video files (not CSS-background-friendly GIFs) — every
// render site branches on this to swap in a lazy-started <video> instead of a
// background-image div.
export const isVideoThumb = (thumbnail: string) => /\.webm$/i.test(thumbnail);

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
  heroAssets?: { file: string; type: 'image' | 'video' }[]; // Hero tier only: real downloadable files under /assets/hero-downloads/<slug>/
  free?: boolean; // one of the 6 curated no-paywall samples (figureworld-hero, quorum-ai,
  // curalink-telehealth, thecity-residences, stillwave-meditation, pylon-ai) — everything
  // else in the catalog reads as Premium. Shown on the Hero/Landing library grid cards.
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
    prompt: serenityHeroPrompt,
    heroAssets: [{ file: 'hero-bg.png', type: 'image' }] },
  { slug: 'elan-hero', title: 'Élan', tier: 'Hero', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/elan.webm',
    prompt: elanHeroPrompt,
    heroAssets: [{ file: 'elan.mp4', type: 'video' }] },
  { slug: 'kilt-hero', title: 'KILT', tier: 'Hero', category: 'Ecom', thumbnail: 'kilt.png',
    prompt: kiltHeroPrompt,
    heroAssets: [{ file: 'kilt-hero-model.png', type: 'image' }] },
  { slug: 'aura-hero', title: 'Aura', tier: 'Hero', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/aura.webm',
    prompt: auraHeroPrompt,
    heroAssets: [{ file: 'hero-bg.png', type: 'image' }] },
  { slug: 'arlo-hero', title: 'Arlo', tier: 'Hero', category: 'Ecom', thumbnail: 'arlo.png',
    prompt: arloHeroPrompt,
    heroAssets: [
      { file: 'hero-new-1.png', type: 'image' },
      { file: 'hero-new-2.png', type: 'image' },
      { file: 'hero-new-3.png', type: 'image' },
    ] },
  { slug: 'luma-hero', title: 'LUMA', tier: 'Hero', category: 'Ecom', thumbnail: 'luma.png',
    prompt: lumaHeroPrompt,
    heroAssets: [
      { file: 'luma-hero-1.png', type: 'image' },
      { file: 'luma-hero-2.png', type: 'image' },
      { file: 'luma-hero-3.png', type: 'image' },
    ] },
  { slug: 'recall-hero', title: 'Recall', tier: 'Hero', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/recall.webm',
    prompt: recallHeroPrompt,
    heroAssets: [{ file: 'hero-new.mp4', type: 'video' }] },
  { slug: 'modex-hero', title: 'Modex', tier: 'Hero', category: 'Dev', thumbnail: 'modex.png',
    prompt: modexHeroPrompt,
    heroAssets: [{ file: 'Hero.png', type: 'image' }] },
  { slug: 'pylon-hero', title: 'Pylon', tier: 'Hero', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/pylon.webm',
    prompt: pylonHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video' }] },
  { slug: 'trainfold-hero', title: 'Trainfold', tier: 'Hero', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/trainfold.webm',
    prompt: trainfoldHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video' }] },
  { slug: 'velo-hero', title: 'VELO', tier: 'Hero', category: 'Product', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/velo.webm',
    prompt: veloHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video' }] },
  { slug: 'beyond-horizon-hero', title: 'Beyond Horizon', tier: 'Hero', category: 'Travel', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/beyond-horizon.webm',
    prompt: beyondHorizonHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video' }] },

  // ---- Hero tier, batch 3: 6 entries reverse-engineered from the Full LP
  // versions below (see the "Batch 5" import comment above for why altr and
  // zenith aren't part of this set). No heroAssets — no downloadable file for
  // these was ever captured, only the animated GIF used as the thumbnail.
  { slug: 'curalink-hero', title: 'Curalink', tier: 'Hero', category: 'Health', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/curalink.webm',
    prompt: curalinkHeroPrompt },
  { slug: 'figureworld-hero', title: 'FigureWorld', tier: 'Hero', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/figure-world.webm',
    prompt: figureworldHeroPrompt, free: true },
  { slug: 'proxim-hero', title: 'Proxim', tier: 'Hero', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/proxim.webm',
    prompt: proximHeroPrompt },
  { slug: 'quorum-hero', title: 'Quorum', tier: 'Hero', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/quorum.webm',
    prompt: quorumHeroPrompt },
  { slug: 'stillwave-hero', title: 'Stillwave', tier: 'Hero', category: 'Wellness', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/stillwave.webm',
    prompt: stillwaveHeroPrompt },
  { slug: 'thecity-hero', title: 'The City', tier: 'Hero', category: 'Property', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/the-city.webm',
    prompt: thecityHeroPrompt },

  // ---- Full LP tier: 35 entries, one per real Elux Space portfolio build
  // (https://elux-vibe-portfolio.ahrasya.workers.dev/), minus the 2 internal
  // dashboard apps (not landing pages). Prompts are original descriptions of
  // each site's structure, not copied marketing copy. Every entry now has a
  // real screenshot in /assets/showcase (the 20 that used to point at
  // placeholder-portfolio.png were backfilled from the portfolio site's own
  // /thumbs/*.jpg — see the download command in conversation).
  { slug: 'quorum-ai', title: 'Quorum', tier: 'Full LP', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/quorum.webm',
    prompt: quorumPrompt, free: true },
  { slug: 'curalink-telehealth', title: 'Curalink', tier: 'Full LP', category: 'Health', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/curalink.webm',
    prompt: curalinkPrompt, free: true },
  { slug: 'curalink-medic-ai', title: 'Curalink - Medic AI', tier: 'Full LP', category: 'Health', thumbnail: 'curalink-medic-ai.webp',
    prompt: curalinkMedicAiPrompt },
  { slug: 'vellum-legal', title: 'Vellum', tier: 'Full LP', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/full-landing/vellum.gif',
    prompt: vellumPrompt },
  { slug: 'recall-edtech', title: 'Recall', tier: 'Full LP', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/recall.webm',
    prompt: recallPrompt },
  { slug: 'wayfare-trip', title: 'Wayfare', tier: 'Full LP', category: 'Travel', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/wayfare.webm',
    prompt: wayfarePrompt },
  { slug: 'candor-hrtech', title: 'Candor', tier: 'Full LP', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/candor.webm',
    prompt: candorPrompt },
  { slug: 'stillwave-meditation', title: 'Stillwave', tier: 'Full LP', category: 'Wellness', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/stillwave.webm',
    prompt: stillwavePrompt, free: true },
  { slug: 'aura-apparel', title: 'Aura', tier: 'Full LP', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/aura.webm',
    prompt: auraPrompt },
  { slug: 'serenity-health-ed', title: 'Serenity', tier: 'Full LP', category: 'Health', thumbnail: 'serenity.webp',
    prompt: serenityPrompt },
  { slug: 'apex-sportswear', title: 'Apex', tier: 'Full LP', category: 'Ecom', thumbnail: 'apex.webp',
    prompt: apexPrompt },
  { slug: 'aethera-studio', title: 'Aethera', tier: 'Full LP', category: 'Studio', thumbnail: 'aethera.webp',
    prompt: aetheraPrompt },
  { slug: 'altr-watches', title: 'ALTR', tier: 'Full LP', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/altr.webm',
    prompt: altrPrompt },
  { slug: 'arlo-editorial', title: 'Arlo', tier: 'Full LP', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/arlo.webm',
    prompt: arloPrompt },
  { slug: 'vox-streetwear', title: 'VOX', tier: 'Full LP', category: 'Ecom', thumbnail: 'vox.webp',
    prompt: vox2Prompt },
  { slug: 'luma-lifestyle', title: 'LUMA', tier: 'Full LP', category: 'Ecom', thumbnail: 'luma.webp',
    prompt: lumaPrompt },
  { slug: 'kilt-techwear', title: 'KILT', tier: 'Full LP', category: 'Ecom', thumbnail: 'kilt-techwear.webp',
    prompt: kiltPrompt },
  { slug: 'elan-football', title: 'Élan', tier: 'Full LP', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/elan.webm',
    prompt: elanPrompt },
  { slug: 'modex-infra', title: 'Modex', tier: 'Full LP', category: 'Dev', thumbnail: 'modex.webp',
    prompt: modexPrompt },
  { slug: 'pylon-ai', title: 'Pylon', tier: 'Full LP', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/pylon.webm',
    prompt: pylonPrompt, free: true },
  { slug: 'proxim-router', title: 'Proxim', tier: 'Full LP', category: 'Dev', thumbnail: 'proxim.webp',
    prompt: proximPrompt },
  { slug: 'trainfold-ml', title: 'Trainfold', tier: 'Full LP', category: 'Dev', thumbnail: 'trainfold.webp',
    prompt: trainfoldPrompt },
  { slug: 'velo-moto', title: 'VELO', tier: 'Full LP', category: 'Product', thumbnail: 'velo.webp',
    prompt: veloPrompt },
  { slug: 'thecity-residences', title: 'The City', tier: 'Full LP', category: 'Property', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/the-city.webm',
    prompt: thecityPrompt, free: true },
  { slug: 'beyond-horizon-yacht', title: 'Beyond Horizon', tier: 'Full LP', category: 'Travel', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/beyond-horizon.webm',
    prompt: beyondHorizonPrompt },
  { slug: 'saha-medical-clinic', title: 'Saha Medical', tier: 'Full LP', category: 'Health', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/landing/saha.webm',
    prompt: sahaMedicalPrompt },
  { slug: 'storefront-v1-skincare', title: 'StoreFront - V1', tier: 'Full LP', category: 'Ecom', thumbnail: 'storefront-v1.jpg',
    prompt: storefrontV1Prompt },
  { slug: 'storefront-v2-wellness', title: 'StoreFront - V2', tier: 'Full LP', category: 'Ecom', thumbnail: 'storefront-v2.webp',
    prompt: storefrontV2Prompt },
  { slug: 'warebotics-robotics', title: 'Warebotics', tier: 'Full LP', category: 'Product', thumbnail: 'warebotics.webp',
    prompt: warebotics2Prompt },
  { slug: 'relay-backend', title: 'Relay', tier: 'Full LP', category: 'Dev', thumbnail: 'relay.webp',
    prompt: relayPrompt },
  { slug: 'edgehaul-carry', title: 'Edgehaul', tier: 'Full LP', category: 'Ecom', thumbnail: 'edgehaul.jpg',
    prompt: edgehaulPrompt },
  { slug: 'lunea-skincare', title: 'Lunéa', tier: 'Full LP', category: 'Ecom', thumbnail: 'lunea-full.webp',
    prompt: lunea2Prompt },
];

export const tiers: Tier[] = ['Hero', 'Section', 'Full LP'];
export const categories: string[] = [...new Set(prompts.map(p => p.category))].sort();
