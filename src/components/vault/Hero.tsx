import { Button } from "./Button";
import { site } from "../../config/site";
import type { Cta } from "./types";
import ruins from "../../assets/ruins-ambient.webp.asset.json";
import logoAsset from "../../assets/official-company-logo.png.asset.json";
import { LearningSpacePreview } from "./LearningSpacePreview";

export function Hero({ onCta }: { onCta: Cta }) {
  return <section className="hero" id="top"><img className="hero__image" src={ruins.url} alt="Supplied stone ruins panorama" width={1600} height={839} /><img className="hero__watermark" src={logoAsset.url} alt="" aria-hidden="true" /><div className="hero__scrim" /><div className="shell hero__inner"><div className="hero__copy"><p className="eyebrow eyebrow--accent">BILLIONAIRES CLVB UNIVERSITY</p><h1>Reclaim your knowledge.<br /><em>Build your legacy.</em></h1><p className="hero__lead">{site.heroLead}</p><p className="hero__sub">{site.heroSupporting}</p><Button onClick={() => onCta()} arrow>{site.cta}</Button><p className="hero__footnote">Educational pathways for consumers, entrepreneurs, and growing businesses.</p></div><LearningSpacePreview onCta={onCta} /></div><div className="hero__provenance shell"><span>KNOWLEDGE CARRIED FORWARD.</span><span>SCROLL TO EXPLORE ↓</span></div></section>;
}
