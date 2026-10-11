import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Compass, Sparkles } from "lucide-react";

export function Audience() {
  const [active, setActive] = useState(0);
  const cards = [{ icon: Compass, title: "Your credit", copy: "Learn how your credit profile works and organize the next steps in your financial education." }, { icon: BriefcaseBusiness, title: "Your business", copy: "Build your understanding of business structure, credit, systems, and funding readiness." }, { icon: Sparkles, title: "Your legacy", copy: "Explore ownership, real estate, and long term planning with greater intention." }];
  return <section className="section section--audience"><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">THE STARTING POINT / 01</p><h2>A stronger foundation changes what comes next.</h2></div><p>Whether you are starting fresh or building a business generating up to $1 million annually, your next move deserves a clear foundation.</p></div><div className="audience-grid">{cards.map((item, i) => <button type="button" onClick={() => setActive(i)} className={`audience-card ${active === i ? "is-active" : ""}`} key={item.title} aria-pressed={active === i}><span className="audience-card__top"><item.icon size={23} strokeWidth={1.4} /><span>0{i + 1}</span></span><span className="audience-card__bottom"><strong>{item.title}</strong><span>{item.copy}</span><ArrowUpRight size={19} /></span></button>)}</div></div></section>;
}
