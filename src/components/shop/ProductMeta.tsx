import type { Product } from "../../config/shop";
export function ProductMeta({ product }: { product: Product }) {
  return <div className="product-meta"><span className="product-delivery">{product.deliveryType} concept</span><div className="product-purposes">{product.purposes.map(purpose => <span key={purpose}>{purpose}</span>)}</div></div>;
}
