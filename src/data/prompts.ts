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
import voltraPrompt from './full-prompts/voltra.md?raw';
import zenithPrompt from './full-prompts/zenith.md?raw';
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

// Section-tier prompts — single-section rebuilds sourced from the Section
// folder (About, CTA, Feature, Footer, Marque, Navbar, Pricing, Product,
// Testimonials). Imported raw so the library grid can copy them verbatim.
import sahaAboutPrompt from './section-prompts/saha-about-prompt.md?raw';
import stillwaveAboutPrompt from './section-prompts/stillwave-meditation-proof-prompt.md?raw';
import recallCtaPrompt from './section-prompts/recall-cta-magnetic-button-prompt.md?raw';
import sahaCtaPrompt from './section-prompts/saha-cta-prompt.md?raw';
import pylonFeaturePrompt from './section-prompts/pylon-ecosystem-grid-prompt.md?raw';
import recallFeaturePrompt from './section-prompts/recall-feature-cards-spring-prompt.md?raw';
import apexFooterPrompt from './section-prompts/apex-footer-prompt.md?raw';
import auraFooterPrompt from './section-prompts/aura-ecommerce-footer-wipe-prompt.md?raw';
import stillwaveFooterPrompt from './section-prompts/stillwave-meditation-footer-prompt.md?raw';
import arloMarqueePrompt from './section-prompts/arlo-editorial-infinite-marquee-prompt.md?raw';
import elanMarqueePrompt from './section-prompts/elan-model-marquee-prompt.md?raw';
import quorumMarqueePrompt from './section-prompts/quorum-running-logo-prompt.md?raw';
import apexNavbarPrompt from './section-prompts/apex-navbar-prompt.md?raw';
import lumaNavbarPrompt from './section-prompts/luma-lifestyle-sticky-header-prompt.md?raw';
import recallPricingPrompt from './section-prompts/recal-pricing-prompt.md?raw';
import wayfarePricingPrompt from './section-prompts/wayfare-pricing-prompt.md?raw';
import arloProductPrompt from './section-prompts/arlo-editorial-scroll-reveal-grid-prompt.md?raw';
import auraProductPrompt from './section-prompts/aura-ecommerce-cursor-grid-prompt.md?raw';
import beyondHorizonProductPrompt from './section-prompts/beyond-horizon-stacking-prompt.md?raw';
import elanProductPrompt from './section-prompts/elan-moody-drag-carousel-prompt.md?raw';
import sahaTestimonialsPrompt from './section-prompts/saha-testimonials-prompt.md?raw';
import trainfoldTestimonialsPrompt from './section-prompts/trainfold-testimonials-prompt.md?raw';
import { heroAssetPrompts } from './hero-asset-prompts';

// A few Hero thumbnails are animated covers hotlinked from an external CDN
// instead of a local file under /assets/showcase/ — this lets every render
// site (library grid, modal detail view, related-prompts) resolve either
// kind from the same `thumbnail` field without duplicating the branch.
export const thumbUrl = (thumbnail: string) =>
  thumbnail.startsWith('http') || thumbnail.startsWith('/')
    ? thumbnail
    : thumbnail.startsWith('hero-downloads/')
      ? `/assets/${thumbnail}`
      : `/assets/showcase/${thumbnail}`;

// .webm covers are real video files (not CSS-background-friendly GIFs) — every
// render site branches on this to swap in a lazy-started <video> instead of a
// background-image div.
export const isVideoThumb = (thumbnail: string) => /\.(webm|mp4)$/i.test(thumbnail);

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
  heroAssets?: { file: string; type: 'image' | 'video'; name?: string; prompt?: string }[]; // Hero tier only: real downloadable files under /assets/hero-downloads/<slug>/
  free?: boolean; // one of the 6 curated no-paywall samples (figureworld-hero, quorum-ai,
  // curalink-telehealth, thecity-residences, stillwave-meditation, pylon-ai) — everything
  // else in the catalog reads as Premium. Shown on the Hero/Landing library grid cards.
}

export const prompts: PromptItem[] = [
  // ---- Section tier: 22 single-section prompts sourced from the Section
  // folder (About, CTA, Feature, Footer, Marque, Navbar, Pricing, Product,
  // Testimonials). Thumbnails reuse the matching Full LP / Hero screenshot.
  { slug: 'saha-about', title: 'Saha About', tier: 'Section', category: 'About', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/About/Saha-About.webp', prompt: sahaAboutPrompt },
  { slug: 'stillwave-about', title: 'Stillwave About', tier: 'Section', category: 'About', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/About/Stillwave-About.webm', prompt: stillwaveAboutPrompt },
  { slug: 'recall-cta-magnetic', title: 'Recall CTA Magnetic', tier: 'Section', category: 'CTA', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/CTA/Recall-cta.webm', prompt: recallCtaPrompt },
  { slug: 'saha-cta', title: 'Saha CTA', tier: 'Section', category: 'CTA', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/CTA/Saha-CTA.webm', prompt: sahaCtaPrompt },
  { slug: 'pylon-ecosystem-grid', title: 'Pylon Ecosystem Grid', tier: 'Section', category: 'Feature', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Feature/Pylon-feature.webm', prompt: pylonFeaturePrompt },
  { slug: 'recall-feature-cards', title: 'Recall Feature Cards', tier: 'Section', category: 'Feature', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Feature/Recall-feature.webm', prompt: recallFeaturePrompt },
  { slug: 'apex-footer', title: 'Apex Footer', tier: 'Section', category: 'Footer', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Footer/Apex-footer.webm', prompt: apexFooterPrompt },
  { slug: 'aura-footer-wipe', title: 'Aura Footer Wipe', tier: 'Section', category: 'Footer', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Footer/Aura-footer.webm', prompt: auraFooterPrompt },
  { slug: 'stillwave-footer', title: 'Stillwave Footer', tier: 'Section', category: 'Footer', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Footer/Stillwave-footer.webm', prompt: stillwaveFooterPrompt },
  { slug: 'arlo-infinite-marquee', title: 'Arlo Infinite Marquee', tier: 'Section', category: 'Marque', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Marque/Arlo-marque.webm', prompt: arloMarqueePrompt },
  { slug: 'elan-model-marquee', title: 'Elan Model Marquee', tier: 'Section', category: 'Marque', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Marque/elan-marque.webm', prompt: elanMarqueePrompt },
  { slug: 'quorum-running-logo', title: 'Quorum Running Logo', tier: 'Section', category: 'Marque', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Marque/Qurom-runninglogo.webm', prompt: quorumMarqueePrompt },
  { slug: 'apex-navbar', title: 'Apex Navbar', tier: 'Section', category: 'Navbar', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Navbar/Apex-navbar.webm', prompt: apexNavbarPrompt },
  { slug: 'luma-sticky-header', title: 'Luma Sticky Header', tier: 'Section', category: 'Navbar', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Navbar/Luma-navbar.webm', prompt: lumaNavbarPrompt },
  { slug: 'recall-pricing', title: 'Recall Pricing', tier: 'Section', category: 'Pricing', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Pricing/Recall-pricing.webm', prompt: recallPricingPrompt },
  { slug: 'wayfare-pricing', title: 'Wayfare Pricing', tier: 'Section', category: 'Pricing', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Pricing/Wayfare-pricing.webp', prompt: wayfarePricingPrompt },
  { slug: 'arlo-scroll-reveal-grid', title: 'Arlo Scroll Reveal Grid', tier: 'Section', category: 'Product', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Product/Arlo-product.webm', prompt: arloProductPrompt },
  { slug: 'aura-cursor-grid', title: 'Aura Cursor Grid', tier: 'Section', category: 'Product', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Product/Aura-product.webm', prompt: auraProductPrompt },
  { slug: 'beyond-horizon-stacking', title: 'Beyond Horizon Stacking', tier: 'Section', category: 'Product', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Product/Beyond-product.webm', prompt: beyondHorizonProductPrompt },
  { slug: 'elan-drag-carousel', title: 'Elan Drag Carousel', tier: 'Section', category: 'Product', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Product/elan-product.webm', prompt: elanProductPrompt },
  { slug: 'saha-testimonials', title: 'Saha Testimonials', tier: 'Section', category: 'Testimonials', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Testimonial/Saha-Testimonial.webm', prompt: sahaTestimonialsPrompt },
  { slug: 'trainfold-testimonials', title: 'Trainfold Testimonials', tier: 'Section', category: 'Testimonials', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/Section/Testimonial/Trainfold-testimoni.webp', prompt: trainfoldTestimonialsPrompt },

  // ---- Hero tier, batch 2: 12 entries, one per file in
  // new-prompts/full-landing — just the hero-section excerpt of each real
  // Full LP build (see the matching Full LP entry below for the whole page).
  // Thumbnails reuse the Full LP counterpart's real screenshot. No
  // imagePrompt/videoPrompt yet (asset download is blocked in this sandbox —
  // see conversation; URLs are documented inside each prompt's Assets table).
  { slug: 'serenity-hero', title: 'Serenity', tier: 'Hero', category: 'Health', thumbnail: 'serenity.jpg',
    prompt: serenityHeroPrompt,
    heroAssets: [{ file: 'hero-bg.png', type: 'image', name: 'Serenity Hero Background', prompt: heroAssetPrompts['serenity-hero']['hero-bg.png'] }] },
  { slug: 'elan-hero', title: 'Élan', tier: 'Hero', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/elan.webm',
    prompt: elanHeroPrompt,
    heroAssets: [{ file: 'elan.mp4', type: 'video', name: 'Élan hero video', prompt: 'A group of 6 young men wearing premium vintage football jerseys with fictional club crests and retro-inspired sponsor graphics stand together on concrete steps in a modern urban park surrounded by brutalist architecture and lush trees, all facing directly toward the camera with confident and serious expressions. The camera performs a slow cinematic push-in while subtle wind moves their jerseys and hair naturally. Models make minimal realistic movements such as shifting weight, adjusting sleeves, looking slightly toward each other, and maintaining strong eye contact with the lens. The scene feels like a luxury football fashion campaign inspired by classic European football culture, Adidas Originals, Copa Football, and Aimé Leon Dore, featuring authentic retro collars, embroidered badges, relaxed-fit shorts and trousers, natural overcast lighting, shallow depth of field, cinematic 35mm film texture, premium color grading, ultra-realistic details, high-end editorial photography, smooth motion, no text, no logos from real clubs, no watermarks, 4K commercial-quality fashion advertisement.' }] },
  { slug: 'kilt-hero', title: 'KILT', tier: 'Hero', category: 'Ecom', thumbnail: 'kilt.png',
    prompt: kiltHeroPrompt,
    heroAssets: [{ file: 'kilt-hero-model.png', type: 'image', prompt: heroAssetPrompts['kilt-hero']['kilt-hero-model.png'] }] },
  { slug: 'aura-hero', title: 'Aura', tier: 'Hero', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/aura.webm',
    prompt: auraHeroPrompt,
    heroAssets: [
      { file: 'hero-bg.png', type: 'image', prompt: heroAssetPrompts['aura-hero']['hero-bg.png'] },
      { file: 'hero-txt1.png', type: 'image', prompt: heroAssetPrompts['aura-hero']['hero-txt1.png'] },
      { file: 'hero-txt2.png', type: 'image', prompt: heroAssetPrompts['aura-hero']['hero-txt2.png'] },
      { file: 'hero-txt3.png', type: 'image', prompt: heroAssetPrompts['aura-hero']['hero-txt3.png'] },
    ] },
  { slug: 'arlo-hero', title: 'Arlo', tier: 'Hero', category: 'Ecom', thumbnail: 'arlo.png',
    prompt: arloHeroPrompt,
    heroAssets: [
      { file: 'hero-new-1.png', type: 'image', name: 'Arlo Hero 1', prompt: heroAssetPrompts['arlo-hero']['hero-new-1.png'] },
      { file: 'hero-new-2.png', type: 'image', name: 'Arlo Hero 2', prompt: heroAssetPrompts['arlo-hero']['hero-new-2.png'] },
      { file: 'hero-new-3.png', type: 'image', name: 'Arlo Hero 3', prompt: heroAssetPrompts['arlo-hero']['hero-new-3.png'] },
    ] },
  { slug: 'luma-hero', title: 'LUMA', tier: 'Hero', category: 'Ecom', thumbnail: 'luma.png',
    prompt: lumaHeroPrompt,
    heroAssets: [
      { file: 'luma-hero-1.png', type: 'image', name: 'LUMA Hero 1', prompt: heroAssetPrompts['luma-hero']['luma-hero-1.png'] },
      { file: 'luma-hero-2.png', type: 'image', name: 'LUMA Hero 2', prompt: heroAssetPrompts['luma-hero']['luma-hero-2.png'] },
      { file: 'luma-hero-3.png', type: 'image', name: 'LUMA Hero 3', prompt: heroAssetPrompts['luma-hero']['luma-hero-3.png'] },
    ] },
  { slug: 'recall-hero', title: 'Recall', tier: 'Hero', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/recall.webm',
    prompt: recallHeroPrompt,
    heroAssets: [{ file: 'hero-new.mp4', type: 'video', name: 'Recall hero video', prompt: heroAssetPrompts['recall-hero']['hero-new.mp4'] }] },
  { slug: 'modex-hero', title: 'Modex', tier: 'Hero', category: 'Dev', thumbnail: 'modex.png',
    prompt: modexHeroPrompt,
    heroAssets: [{ file: 'Hero.png', type: 'image', prompt: heroAssetPrompts['modex-hero']['Hero.png'] }] },
  { slug: 'pylon-hero', title: 'Pylon', tier: 'Hero', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/pylon.webm',
    prompt: pylonHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video', prompt: `Cinematic renaissance-meets-modern scene with warm golden candlelight and moody atmosphere, featuring a middle-aged bearded scholar in dark vintage clothing sitting on the right side of the frame, focused on a laptop illuminated by soft candlelight and subtle green screen glow, composition places the subject on the right third while the left side remains clean dark negative space with a soft gradient for text readability, keep the camera completely static with no movement, no zoom, no added cinematic effects, only minimal natural animation including gentle finger typing on the keyboard, subtle breathing and slight micro head movement, realistic candle flame flickering, and a soft consistent glow from the laptop screen casting light on the face and hands, no additional motion in background elements, no particles, no environmental changes, maintain high contrast lighting with warm candle key light and soft green rim light, shallow depth of field with subject in focus and left side slightly defocused, calm, intelligent, and mysterious mood, 16:9 aspect ratio.` }] },
  { slug: 'trainfold-hero', title: 'Trainfold', tier: 'Hero', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/trainfold.webm',
    prompt: trainfoldHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video', prompt: heroAssetPrompts['trainfold-hero']['hero.mp4'] }] },
  { slug: 'velo-hero', title: 'VELO', tier: 'Hero', category: 'Product', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/velo.webm',
    prompt: veloHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video', prompt: heroAssetPrompts['velo-hero']['hero.mp4'] }] },
  { slug: 'beyond-horizon-hero', title: 'Beyond Horizon', tier: 'Hero', category: 'Travel', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/beyond-horizon.webm',
    prompt: beyondHorizonHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video', prompt: heroAssetPrompts['beyond-horizon-hero']['hero.mp4'] }] },

  // ---- Hero tier, batch 3: 6 entries reverse-engineered from the Full LP
  // versions below (see the "Batch 5" import comment above for why altr and
  // zenith aren't part of this set). These use only the local files supplied
  // in Hero-asset, with no remote-derived duplicate hero covers.
  { slug: 'curalink-hero', title: 'Curalink', tier: 'Hero', category: 'Health', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/curalink.webm',
    prompt: curalinkHeroPrompt,
    heroAssets: [
      { file: 'hero-img.png', type: 'image', prompt: heroAssetPrompts['curalink-hero']['hero-img.png'] },
      { file: 'hero-left.mp4', type: 'video', prompt: heroAssetPrompts['curalink-hero']['hero-left.mp4'] },
    ] },
  { slug: 'figureworld-hero', title: 'FigureWorld', tier: 'Hero', category: 'Ecom', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/figure-world.webm',
    prompt: figureworldHeroPrompt, free: true,
    heroAssets: [
      { file: 'hero-1-image.png', type: 'image', prompt: heroAssetPrompts['figureworld-hero']['hero-1-image.png'] },
      { file: 'hero-1-background.mp4', type: 'video', prompt: heroAssetPrompts['figureworld-hero']['hero-1-background.mp4'] },
      { file: 'hero-2-image.png', type: 'image', prompt: heroAssetPrompts['figureworld-hero']['hero-2-image.png'] },
      { file: 'hero-2-background.mp4', type: 'video', prompt: heroAssetPrompts['figureworld-hero']['hero-2-background.mp4'] },
      { file: 'hero-3-image.png', type: 'image', prompt: heroAssetPrompts['figureworld-hero']['hero-3-image.png'] },
      { file: 'hero-3-background.mp4', type: 'video', prompt: heroAssetPrompts['figureworld-hero']['hero-3-background.mp4'] },
      { file: 'hero-4-image.png', type: 'image', prompt: heroAssetPrompts['figureworld-hero']['hero-4-image.png'] },
      { file: 'hero-4-background.mp4', type: 'video', prompt: heroAssetPrompts['figureworld-hero']['hero-4-background.mp4'] },
    ] },
  { slug: 'proxim-hero', title: 'Proxim', tier: 'Hero', category: 'Dev', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/proxim.webm',
    prompt: proximHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video', prompt: heroAssetPrompts['proxim-hero']['hero.mp4'] }] },
  { slug: 'quorum-hero', title: 'Quorum', tier: 'Hero', category: 'SaaS', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/quorum.webm',
    prompt: quorumHeroPrompt,
    heroAssets: [{ file: 'hero-vd.mp4', type: 'video', prompt: heroAssetPrompts['quorum-hero']['hero-vd.mp4'] }] },
  { slug: 'stillwave-hero', title: 'Stillwave', tier: 'Hero', category: 'Wellness', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/stillwave.webm',
    prompt: stillwaveHeroPrompt,
    heroAssets: [{ file: 'hero.mp4', type: 'video', prompt: heroAssetPrompts['stillwave-hero']['hero.mp4'] }] },
  { slug: 'thecity-hero', title: 'The City', tier: 'Hero', category: 'Property', thumbnail: 'http://beige-lemur-872571.hostingersite.com/asset-esprompt/preview-asset/hero/the-city.webm',
    prompt: thecityHeroPrompt,
    heroAssets: [{ file: 'hero-day.mp4', type: 'video', prompt: heroAssetPrompts['thecity-hero']['hero-day.mp4'] }] },

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
  { slug: 'voltra-fitness', title: 'Voltra', tier: 'Full LP', category: 'Product', thumbnail: 'voltra.webp',
    prompt: voltraPrompt },
  { slug: 'zenith-ai', title: 'Zenith', tier: 'Full LP', category: 'Product', thumbnail: 'zenith.webp',
    prompt: zenithPrompt },
  { slug: 'edgehaul-carry', title: 'Edgehaul', tier: 'Full LP', category: 'Ecom', thumbnail: 'edgehaul.jpg',
    prompt: edgehaulPrompt },
  { slug: 'lunea-skincare', title: 'Lunéa', tier: 'Full LP', category: 'Ecom', thumbnail: 'lunea-full.webp',
    prompt: lunea2Prompt },
];

export const tiers: Tier[] = ['Hero', 'Section', 'Full LP'];
export const categories: string[] = [...new Set(prompts.map(p => p.category))].sort();
