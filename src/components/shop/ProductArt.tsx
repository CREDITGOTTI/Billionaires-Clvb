import { Play, MessagesSquare, CalendarDays, Layers3 } from "lucide-react";
import logo from "../../assets/official-company-logo.png.asset.json";
import type { Product } from "../../config/shop";
export function ProductArt({ product }: { product: Product }) {
  const Symbol = product.art === "video" ? Play : product.art === "coaching" ? MessagesSquare : product.art === "event" ? CalendarDays : product.art === "training" ? Layers3 : null;
  return <div className={`product-art product-art--${product.art}`} aria-label={`${product.title} sample artwork`} role="img"><div className="product-art__object"><img src={logo.url} alt="" />{Symbol && <Symbol className="product-art__symbol" size={30} aria-hidden="true" />}<span>{["shirt", "tote", "backpack", "bottle"].includes(product.art) ? "BILLIONAIRES CLVB" : product.title}</span></div><small>SAMPLE CONCEPT</small></div>;
}
