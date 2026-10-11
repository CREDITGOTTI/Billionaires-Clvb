import portraitAsset from "../../assets/antonio-cuevas.png.asset.json";
import villageArtwork from "../../assets/heritage/pueblo-village-art.webp.asset.json";
import ceremonialArtwork from "../../assets/heritage/pueblo-ceremonial-art.webp.asset.json";
import symbolArtwork from "../../assets/heritage/pueblo-symbol-reference.webp.asset.json";
import { site } from "../../config/site";
import { SocialLinks } from "./SocialLinks";

export function Founder() {
  return <section className="section section--founder"><div className="heritage-backdrop" aria-hidden="true"><img src={villageArtwork.url} alt="" loading="lazy" /><img src={ceremonialArtwork.url} alt="" loading="lazy" /><img src={symbolArtwork.url} alt="" loading="lazy" /></div><div className="shell founder-layout"><div className="founder-visual"><img src={portraitAsset.url} alt="Antonio Cuevas, founder of Billionaires Clvb" width={768} height={1024} /><span>ANTONIO CUEVAS · FOUNDER & CEO</span></div><div className="founder-copy"><p className="eyebrow eyebrow--accent">THE PEOPLE BEHIND THE PURPOSE / 05</p><h2>Build with intention.<br /><em>Build with community.</em></h2><p className="ownership-statement">{site.foundedBy}.</p>{site.founderBio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className="founder-memory">Honoring knowledge carried across generations. Building with stewardship for those who come next.</p><div className="founder-signoff"><span>Antonio Cuevas</span><span>FOUNDER & CEO, BILLIONAIRES CLVB</span></div><SocialLinks /></div></div></section>;
}
