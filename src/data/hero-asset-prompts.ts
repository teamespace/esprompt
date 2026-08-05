import arlo01 from './hero-asset-source/arlo/01_Minimal_Studio_Casual_Portrait_Prompt.md?raw';
import arlo02 from './hero-asset-source/arlo/02_Minimal_Blazer_Fashion_Prompt.md?raw';
import arlo03 from './hero-asset-source/arlo/03_Luxury_Outdoor_Resort_Portrait_Prompt.md?raw';
import aura01 from './hero-asset-source/aura/01_Streetwear_Campaign_Recreation_Prompt.md?raw';
import aura02 from './hero-asset-source/aura/02_Black_Tshirt_Product_Recreation_Prompt.md?raw';
import aura03 from './hero-asset-source/aura/03_Black_Cap_Fashion_Recreation_Prompt.md?raw';
import aura04 from './hero-asset-source/aura/04_Beanie_Back_Recreation_Prompt.md?raw';
import beyondHorizon from './hero-asset-source/beyond-horizon/hero.md?raw';
import curalinkImage from './hero-asset-source/curalink/image/Cozy_Evening_Smartphone_Lifestyle_Prompt.md?raw';
import curalinkVideo from './hero-asset-source/curalink/video/hero.md?raw';
import figureWorldImage01 from './hero-asset-source/figure-world/image/hero-1-image.md?raw';
import figureWorldVideo01 from './hero-asset-source/figure-world/video/hero-1.md?raw';
import figureWorldImage02 from './hero-asset-source/figure-world/image/hero-2-image.md?raw';
import figureWorldVideo02 from './hero-asset-source/figure-world/video/hero-2.md?raw';
import figureWorldImage03 from './hero-asset-source/figure-world/image/hero-3-image.md?raw';
import figureWorldVideo03 from './hero-asset-source/figure-world/video/hero-3.md?raw';
import figureWorldImage04 from './hero-asset-source/figure-world/image/hero-4-image.md?raw';
import figureWorldVideo04 from './hero-asset-source/figure-world/video/hero-4.md?raw';
import kilt from './hero-asset-source/kilt/Tactical_Techwear_Recreation_Prompt.md?raw';
import luma01 from './hero-asset-source/luma/01_Mediterranean_Villa_Group_Campaign.md?raw';
import luma02 from './hero-asset-source/luma/02_Luxury_Tennis_Lifestyle.md?raw';
import luma03 from './hero-asset-source/luma/03_Mediterranean_Walk_Campaign.md?raw';
import modex from './hero-asset-source/modex/Cinematic_SciFi_Monolith_Prompt.md?raw';
import proxim from './hero-asset-source/proxim/proxim.md?raw';
import quorum from './hero-asset-source/quorum/quorum.md?raw';
import recall from './hero-asset-source/Recall/recall.md?raw';
import serenity from './hero-asset-source/serenity/Wellness_Reception_Recreation_Prompt.md?raw';
import stillwave from './hero-asset-source/stillwave/stillwave.md?raw';
import theCity from './hero-asset-source/the-city/the-city.md?raw';
import trainfold from './hero-asset-source/trainfold/trainfold.md?raw';
import velo from './hero-asset-source/velo/velo.md?raw';

const promptText = (markdown: string) => {
  const promptBlock = markdown.match(/## Prompt\s+```[^\n]*\n([\s\S]*?)```/);
  return (promptBlock?.[1] ?? markdown)
    .replace(/^>\s?/gm, '')
    .replace(/\*\*/g, '')
    .trim();
};

export const heroAssetPrompts = {
  'arlo-hero': {
    'hero-new-1.png': promptText(arlo01),
    'hero-new-2.png': promptText(arlo02),
    'hero-new-3.png': promptText(arlo03),
  },
  'aura-hero': {
    'hero-bg.png': promptText(aura01),
    'hero-txt1.png': promptText(aura02),
    'hero-txt2.png': promptText(aura03),
    'hero-txt3.png': promptText(aura04),
  },
  'beyond-horizon-hero': { 'hero.mp4': promptText(beyondHorizon) },
  'curalink-hero': {
    'hero-img.png': promptText(curalinkImage),
    'hero-left.mp4': promptText(curalinkVideo),
  },
  'figureworld-hero': {
    'hero-1-image.png': promptText(figureWorldImage01),
    'hero-1-background.mp4': promptText(figureWorldVideo01),
    'hero-2-image.png': promptText(figureWorldImage02),
    'hero-2-background.mp4': promptText(figureWorldVideo02),
    'hero-3-image.png': promptText(figureWorldImage03),
    'hero-3-background.mp4': promptText(figureWorldVideo03),
    'hero-4-image.png': promptText(figureWorldImage04),
    'hero-4-background.mp4': promptText(figureWorldVideo04),
  },
  'kilt-hero': { 'kilt-hero-model.png': promptText(kilt) },
  'luma-hero': {
    'luma-hero-1.png': promptText(luma01),
    'luma-hero-2.png': promptText(luma02),
    'luma-hero-3.png': promptText(luma03),
  },
  'modex-hero': { 'Hero.png': promptText(modex) },
  'proxim-hero': { 'hero.mp4': promptText(proxim) },
  'quorum-hero': { 'hero-vd.mp4': promptText(quorum) },
  'recall-hero': { 'hero-new.mp4': promptText(recall) },
  'serenity-hero': { 'hero-bg.png': promptText(serenity) },
  'stillwave-hero': { 'hero.mp4': promptText(stillwave) },
  'thecity-hero': { 'hero-day.mp4': promptText(theCity) },
  'trainfold-hero': { 'hero.mp4': promptText(trainfold) },
  'velo-hero': { 'hero.mp4': promptText(velo) },
} as const;
