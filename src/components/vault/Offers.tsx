import { Button } from "./Button";
import { site, type Interest } from "../../config/site";
import type { Cta } from "./types";

export function Offers({ onCta }: { onCta: Cta }) {
  const offers: { number: string; title: Interest; tagline: string; description: string; points: string[] }[] = [
    { number: "01", title: "University", tagline: "Learn at your own pace. Build your foundation.", description: "Billionaires Clvb University", points: ["Hundreds of hours of educational content", "Recorded training & monthly live call", "Templates, ebooks & included AI resources"] },
    { number: "02", title: "Credit Advisory", tagline: "Bring your situation into focus.", description: "One on one Credit Advisory", points: ["Personalized educational guidance", "Centered on your goals and priorities", "Available to members and to people who are not members"] },
    { number: "03", title: "Business Funding", tagline: "Find out where your business stands.", description: "Business Funding", points: ["Begin with an interest form", "Complete a qualification questionnaire", "Eligibility evaluated before options are discussed"] },
  ];
  return <section id="your-path" className="section section--offers"><div className="shell"><div className="section-heading"><p className="eyebrow eyebrow--accent">YOUR PATH / 04</p><h2>Choose the support that fits your next move.</h2></div><div className="offer-grid">{offers.map((offer, i) => <article className={`offer-card ${i === 1 ? "offer-card--featured" : ""}`} key={offer.title}><div className="offer-card__top"><span>{offer.number} / 03</span>{i === 1 && <span>PERSONALIZED SUPPORT</span>}</div><div><p className="offer-card__kicker">{offer.description}</p><h3>{offer.tagline}</h3><ul>{offer.points.map(point => <li key={point}>{point}</li>)}</ul></div><div className="offer-card__bottom">{i === 0 ? <div className="offer-price"><strong>{site.university.firstMonth}</strong><span>for your first month<br /><b>Renews at {site.university.renewal}</b></span></div> : <p>{i === 1 ? "OPEN TO MEMBERS & NON MEMBERS" : "SUBJECT TO PROVIDER REQUIREMENTS"}</p>}<Button onClick={() => onCta(offer.title)} arrow>{site.cta}</Button></div></article>)}</div><p className="offer-disclaimer">Funding availability, approval, amounts, and terms depend on provider requirements. Education and participation do not guarantee outcomes.</p></div></section>;
}
