import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { filterProducts, categoryDescriptions, canAddToCart, shopConfig, type Product } from "../config/shop";
import { Header } from "../components/vault/Header";
import { Footer } from "../components/vault/Footer";
import { InterestModal } from "../components/vault/InterestModal";
import { Button } from "../components/vault/Button";
import { ProductCard } from "../components/shop/ProductCard";
import { ShopFilters } from "../components/shop/ShopFilters";
import { QuickView } from "../components/shop/QuickView";
import { Cart, type CartItem } from "../components/shop/Cart";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [{ title: shopConfig.title }, { name: "description", content: shopConfig.description }, { property: "og:title", content: shopConfig.title }, { property: "og:description", content: shopConfig.description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Shop,
});

function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Products");
  const [purpose, setPurpose] = useState("All Purposes");
  const [sort, setSort] = useState("featured");
  const [selected, setSelected] = useState<Product | null>(null);
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [interestOpen, setInterestOpen] = useState(false);
  const filtered = useMemo(() => filterProducts({ category, purpose, query, sort }), [category, purpose, query, sort]);
  const clear = () => { setQuery(""); setCategory("All Products"); setPurpose("All Purposes"); setSort("featured"); };
  const add = (product: Product, variant: string, quantity: number) => setItems(previous => {
    if (!canAddToCart(product, variant, quantity)) return previous;
    const exists = previous.some(i => i.productId === product.id && i.variant === variant);
    return exists ? previous.map(i => i.productId === product.id && i.variant === variant ? { ...i, quantity: Math.min(99, i.quantity + quantity) } : i) : [...previous, { productId: product.id, variant, quantity }];
  });
  const update = (id: string, variant: string, quantity: number) => setItems(previous => previous.map(i => i.productId === id && i.variant === variant ? { ...i, quantity } : i).filter(i => i.quantity > 0));
  const count = items.reduce((sum,i) => sum+i.quantity,0);
  return <><Header onCta={() => setInterestOpen(true)} home={false} /><main className="shop-page shell"><div className="shop-heading"><div className="shop-heading__copy"><Link to="/" className="eyebrow">BILLIONAIRES CLVB / THE COLLECTION</Link><h1>Shop</h1><h2>{shopConfig.heading}</h2><p>{shopConfig.intro}</p><span className="shop-muted">{shopConfig.notice}</span></div><Button variant="quiet" onClick={() => setCartOpen(true)} aria-label={`Open cart, ${count} items`}><ShoppingBag size={18} />Cart <span className="cart-count">{count}</span></Button></div><ShopFilters query={query} setQuery={setQuery} category={category} setCategory={setCategory} purpose={purpose} setPurpose={setPurpose} sort={sort} setSort={setSort} onClear={clear} /><div className="shop-collection"><h2>{category}</h2><p>{categoryDescriptions[category as keyof typeof categoryDescriptions]}</p></div><p className="shop-result" role="status">{filtered.length} sample {filtered.length === 1 ? "product" : "products"}</p><div className="shop-grid">{filtered.map(product => <ProductCard key={product.id} product={product} onView={setSelected} />)}</div>{filtered.length === 0 && <div className="cart-empty"><h2>No products match.</h2><Button variant="quiet" onClick={clear}>Clear filters</Button></div>}</main><Footer home={false} /><QuickView product={selected} onClose={() => setSelected(null)} onAdd={add} /><Cart open={cartOpen} items={items} onClose={() => setCartOpen(false)} onUpdate={update} /><InterestModal open={interestOpen} interest="University" onClose={() => setInterestOpen(false)} /></>;
}