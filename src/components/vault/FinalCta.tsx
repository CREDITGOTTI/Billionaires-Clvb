import { Button } from "./Button";
import { site } from "../../config/site";
import type { Cta } from "./types";

export function FinalCta({ onCta }: { onCta: Cta }) {
  return <section className="final-cta"><div className="shell"><p className="eyebrow">THE NEXT CHAPTER STARTS HERE</p><h2>Your next move deserves <em>a blueprint.</em></h2><p>Start with your goals. Build your understanding. Find the support that fits where you are today.</p><Button onClick={() => onCta()} arrow>{site.cta}</Button></div></section>;
}
