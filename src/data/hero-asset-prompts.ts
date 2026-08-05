import arlo01 from '../../../Hero-asset/prompt/arlo/01_Minimal_Studio_Casual_Portrait_Prompt.md?raw';
import arlo02 from '../../../Hero-asset/prompt/arlo/02_Minimal_Blazer_Fashion_Prompt.md?raw';
import arlo03 from '../../../Hero-asset/prompt/arlo/03_Luxury_Outdoor_Resort_Portrait_Prompt.md?raw';
import aura01 from '../../../Hero-asset/prompt/aura/01_Streetwear_Campaign_Recreation_Prompt.md?raw';
import aura02 from '../../../Hero-asset/prompt/aura/02_Black_Tshirt_Product_Recreation_Prompt.md?raw';
import aura03 from '../../../Hero-asset/prompt/aura/03_Black_Cap_Fashion_Recreation_Prompt.md?raw';
import aura04 from '../../../Hero-asset/prompt/aura/04_Beanie_Back_Recreation_Prompt.md?raw';
import beyondHorizon from '../../../Hero-asset/prompt/beyond-horizon/hero.md?raw';
import curalinkImage from '../../../Hero-asset/prompt/curalink/image/Cozy_Evening_Smartphone_Lifestyle_Prompt.md?raw';
import curalinkVideo from '../../../Hero-asset/prompt/curalink/video/hero.md?raw';
import figureWorldImage01 from '../../../Hero-asset/prompt/figure-world/image/hero-1-image.md?raw';
import figureWorldVideo01 from '../../../Hero-asset/prompt/figure-world/video/hero-1.md?raw';
import figureWorldImage02 from '../../../Hero-asset/prompt/figure-world/image/hero-2-image.md?raw';
import figureWorldVideo02 from '../../../Hero-asset/prompt/figure-world/video/hero-2.md?raw';
import figureWorldImage03 from '../../../Hero-asset/prompt/figure-world/image/hero-3-image.md?raw';
import figureWorldVideo03 from '../../../Hero-asset/prompt/figure-world/video/hero-3.md?raw';
import figureWorldImage04 from '../../../Hero-asset/prompt/figure-world/image/hero-4-image.md?raw';
import figureWorldVideo04 from '../../../Hero-asset/prompt/figure-world/video/hero-4.md?raw';
import kilt from '../../../Hero-asset/prompt/kilt/Tactical_Techwear_Recreation_Prompt.md?raw';
import luma01 from '../../../Hero-asset/prompt/luma/01_Mediterranean_Villa_Group_Campaign.md?raw';
import luma02 from '../../../Hero-asset/prompt/luma/02_Luxury_Tennis_Lifestyle.md?raw';
import luma03 from '../../../Hero-asset/prompt/luma/03_Mediterranean_Walk_Campaign.md?raw';
import modex from '../../../Hero-asset/prompt/modex/Cinematic_SciFi_Monolith_Prompt.md?raw';
import proxim from '../../../Hero-asset/prompt/proxim/proxim.md?raw';
import quorum from '../../../Hero-asset/prompt/quorum/quorum.md?raw';
import recall from '../../../Hero-asset/prompt/Recall/recall.md?raw';
import serenity from '../../../Hero-asset/prompt/serenity/Wellness_Reception_Recreation_Prompt.md?raw';
import stillwave from '../../../Hero-asset/prompt/stillwave/stillwave.md?raw';
import theCity from '../../../Hero-asset/prompt/the-city/the-city.md?raw';
import trainfold from '../../../Hero-asset/prompt/trainfold/trainfold.md?raw';
import velo from '../../../Hero-asset/prompt/velo/velo.md?raw';

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
