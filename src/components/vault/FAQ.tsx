import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "../../config/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="section section--faq"><div className="shell faq-layout"><div><p className="eyebrow eyebrow--accent">GOOD TO KNOW / 07</p><h2>Questions worth asking.</h2><p>Clarity starts with the right information.</p></div><div className="faq-list">{site.faqs.map((item, i) => <div className="faq-item" key={item.q}><h3><button type="button" aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? null : i)}>{item.q}<ChevronDown size={19} /></button></h3><div id={`faq-answer-${i}`} hidden={open !== i}><p>{item.a}</p></div></div>)}</div></div></section>;
}
