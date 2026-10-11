import { ArrowUpRight } from "lucide-react";
import { type Product, productPrice } from "../../config/shop";
import { Button } from "../vault/Button";
import { ProductArt } from "./ProductArt";
import { ProductMeta } from "./ProductMeta";
export function ProductCard({ product, onView }: { product: Product; onView: (p: Product) => void }) {
  return <article className="product-card"><ProductArt product={product} /><div className="product-card__body"><span className="eyebrow">{product.category} · DEMO</span><h2>{product.title}</h2><ProductMeta product={product} /><p className="product-description">{product.description}</p><p>{productPrice(product)} {product.samplePrice !== null && <small>sample price</small>}</p><Button variant="quiet" onClick={() => onView(product)}>Quick View <ArrowUpRight size={16} /></Button></div></article>;
}
