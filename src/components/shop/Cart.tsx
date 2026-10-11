import { useEffect, useRef, useState } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { products, sampleMoney, shopConfig } from "../../config/shop";
import { Button } from "../vault/Button";
export type CartItem = { productId: string; variant: string; quantity: number };

export function Cart({ open, items, onClose, onUpdate }: { open: boolean; items: CartItem[]; onClose: () => void; onUpdate: (id: string, variant: string, quantity: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [pending, setPending] = useState(false);
  useEffect(() => { const dialog = ref.current; if (!dialog) return; if (open && !dialog.open) { setPending(false); dialog.showModal(); } else if (!open && dialog.open) dialog.close(); }, [open]);
  const subtotal = items.reduce((sum, item) => sum + (products.find(p => p.id === item.productId)?.samplePrice ?? 0) * item.quantity, 0);
  // Future secure adapter: the owner supplies a server endpoint which validates product/variant IDs,
  // maps trusted Stripe PriceIDs, and creates Checkout. Sample prices are NEVER sent as charges.
  const checkout = () => {
    if (!shopConfig.serverCheckoutEndpoint) { setPending(true); return; }
    // Connection deliberately disabled until secure payment setup and a server contract are approved.
    setPending(true);
  };
  return <dialog ref={ref} className="shop-dialog cart-dialog" aria-label="Shopping cart" onClose={onClose} onCancel={onClose}><div className="shop-dialog__bar"><h2>Your cart</h2><Button variant="icon" aria-label="Close cart" onClick={onClose}><X size={20} /></Button></div><p className="shop-muted">Preview cart · Sample prices only</p>{items.length === 0 ? <div className="cart-empty"><h3>Your cart is empty.</h3><Button variant="quiet" onClick={onClose}>Explore the collection</Button></div> : <><div className="cart-items">{items.map(item => { const product = products.find(p => p.id === item.productId); if (!product || product.samplePrice === null) return null; return <article className="cart-item" key={`${item.productId}:${item.variant}`}><div><h3>{product.title}</h3><p>{item.variant} · {sampleMoney(product.samplePrice)} sample</p></div><div className="cart-quantity"><Button variant="icon" aria-label={`Decrease ${product.title}`} onClick={() => onUpdate(item.productId, item.variant, item.quantity - 1)}><Minus size={15} /></Button><span>{item.quantity}</span><Button variant="icon" disabled={item.quantity >= 99} aria-label={`Increase ${product.title}`} onClick={() => onUpdate(item.productId, item.variant, item.quantity + 1)}><Plus size={15} /></Button><Button variant="icon" aria-label={`Remove ${product.title}`} onClick={() => onUpdate(item.productId, item.variant, 0)}><Trash2 size={16} /></Button></div><strong>{sampleMoney(product.samplePrice * item.quantity)}</strong></article>; })}</div><div className="cart-subtotal"><span>Sample subtotal</span><strong>{sampleMoney(subtotal)}</strong></div><p className="shop-muted">Shipping and taxes pending final setup. Digital delivery not connected.</p><Button onClick={checkout}>Checkout</Button>{pending && <div className="checkout-pending" role="status"><h3>Checkout connection pending</h3><p>{shopConfig.checkoutNotice}</p></div>}</>}</dialog>;
}