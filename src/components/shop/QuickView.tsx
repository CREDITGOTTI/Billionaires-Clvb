import { useEffect, useRef, useState } from "react";
import { X, ShoppingBag } from "lucide-react";
import { type Product, productPrice, canAddToCart } from "../../config/shop";
import { Button } from "../vault/Button";
import { ProductArt } from "./ProductArt";
import { ProductMeta } from "./ProductMeta";

export function QuickView({ product, onClose, onAdd }: { product: Product | null; onClose: () => void; onAdd: (p: Product, variant: string, quantity: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [variant, setVariant] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => { const dialog = ref.current; if (!dialog) return; if (product) { setVariant(product.variants[0] ?? "Standard"); setQuantity(1); if (!dialog.open) dialog.showModal(); } else if (dialog.open) dialog.close(); }, [product]);
  return <dialog ref={ref} className="shop-dialog quick-view" aria-label="Product quick view" onCancel={onClose} onClose={onClose}>{product && <><div className="shop-dialog__bar"><span className="eyebrow">PREVIEW PRODUCT</span><Button variant="icon" aria-label="Close quick view" onClick={onClose}><X size={20} /></Button></div><div className="quick-view__grid"><ProductArt product={product} /><div><span className="eyebrow">{product.category}</span><h2>{product.title}</h2><ProductMeta product={product} /><p>{product.description}</p><p>{product.deliveryInfo}</p><p className="shop-price">{productPrice(product)} {product.samplePrice !== null && <small>sample price</small>}</p><label className="shop-field">Variant<select aria-label="Variant" value={variant} onChange={e => setVariant(e.target.value)}>{product.variants.map(v => <option key={v}>{v}</option>)}</select></label><label className="shop-field">Quantity<input type="number" min={1} max={99} value={quantity} onChange={e => setQuantity(Math.min(99, Math.max(1, Number(e.target.value) || 1)))} /></label><Button disabled={!canAddToCart(product, variant, quantity)} onClick={() => { if (!canAddToCart(product, variant, quantity)) return; onAdd(product, variant, quantity); onClose(); }}><ShoppingBag size={17} />{product.samplePrice === null ? "Details pending" : "Add to cart"}</Button><p className="shop-muted">Demo item · Final catalog and fulfillment pending.</p></div></div></>}</dialog>;
}