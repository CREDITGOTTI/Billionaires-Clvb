export const categories = ["All Products", "Apparel", "Backpacks", "Books", "Ebooks", "Events", "Training Packages", "Coaching Packages", "Video Programs", "Workbooks", "Outdoors", "Documents", "Resources"] as const;
export type ShopCategory = Exclude<typeof categories[number], "All Products">;
export const purposes = ["Health", "Wealth", "Longevity", "Legacy"] as const;
export type Purpose = typeof purposes[number];
export type DeliveryType = "physical" | "digital" | "service" | "event";
export type Product = { id: string; title: string; category: ShopCategory; description: string; samplePrice: number | null; art: "shirt" | "tote" | "backpack" | "book" | "ebook" | "workbook" | "bottle" | "video" | "training" | "coaching" | "event" | "folio"; variants: string[]; stripePriceIds: Record<string, string>; purposes: Purpose[]; deliveryType: DeliveryType; deliveryInfo: string };
export const categoryDescriptions: Record<typeof categories[number], string> = {
  "All Products": "Everyday essentials and learning concepts for a purposeful life and lasting legacy.",
  Apparel: "Wear your intention with original Billionaires Clvb apparel concepts.",
  Backpacks: "Carry your everyday essentials with purpose, from learning days to outdoor time.",
  Books: "Printed reading concepts that connect financial understanding with everyday practice.",
  Ebooks: "Digital reading concepts for reflection, learning, and thoughtful decisions.",
  Events: "Community gathering concepts for shared learning. Dates, locations, and pricing are pending.",
  "Training Packages": "Structured practice concepts for building useful habits and business foundations.",
  "Coaching Packages": "Guided conversation concepts for personal and business planning. Scope, scheduling, and pricing are pending.",
  "Video Programs": "Video learning concepts for exploring ideas at your own pace. Recordings are not yet available.",
  Workbooks: "Practical writing and reflection concepts to turn learning into thoughtful next steps.",
  Outdoors: "Simple essentials for time outside and everyday movement.",
  Documents: "Original organization concepts for records and questions, separate from the free Knowledge Vault.",
  Resources: "Original reflection resources for connecting your priorities and long term intentions.",
};
export const shopConfig = {
  title: "Shop | Billionaires Clvb",
  description: "Explore Billionaires Clvb sample collections for Health, Wealth, Longevity, and Legacy. Final catalog and checkout pending.",
  heading: "Health. Wealth. Longevity. Legacy.",
  intro: "Explore tools, learning, coaching, and everyday essentials for building a purposeful life and lasting legacy.",
  serverCheckoutEndpoint: "",
  currency: "USD",
  notice: "Preview catalog · Sample prices only · Final products and fulfillment pending",
  checkoutNotice: "Checkout connection pending. No payment has been collected. Final products, pricing, shipping, taxes, and delivery are still being configured.",
};
const concept = (product: Omit<Product, "stripePriceIds" | "deliveryInfo">): Product => ({ ...product, stripePriceIds: {}, deliveryInfo: product.deliveryType === "physical" ? "Materials, production, and shipping details pending." : product.deliveryType === "digital" ? "Contents and digital delivery pending. No file or recording is available." : "Details pending. Scope, deliverables, scheduling, and pricing are not confirmed." });
export const products: Product[] = [
  concept({ id: "legacy-tee", title: "Legacy Seal Tee", category: "Apparel", samplePrice: 35, art: "shirt", variants: ["S", "M", "L", "XL", "2XL"], purposes: ["Legacy"], deliveryType: "physical", description: "An everyday tee concept carrying the official seal and a shared sense of purpose." }),
  concept({ id: "purpose-tee", title: "Build With Purpose Tee", category: "Apparel", samplePrice: 38, art: "shirt", variants: ["S", "M", "L", "XL"], purposes: ["Health", "Legacy"], deliveryType: "physical", description: "A relaxed apparel concept for everyday movement and intentional living." }),
  concept({ id: "community-tote", title: "Community Carry Tote", category: "Outdoors", samplePrice: 28, art: "tote", variants: ["Standard"], purposes: ["Health", "Legacy"], deliveryType: "physical", description: "A simple carryall concept for your books, daily essentials, and time outdoors." }),
  concept({ id: "purpose-pack", title: "Purpose Daypack", category: "Backpacks", samplePrice: 64, art: "backpack", variants: ["Standard"], purposes: ["Health", "Legacy"], deliveryType: "physical", description: "A branded backpack concept for keeping learning materials and everyday essentials together." }),
  concept({ id: "purpose-paperback", title: "A Life With Intention", category: "Books", samplePrice: 24, art: "book", variants: ["Paperback concept"], purposes: ["Longevity", "Legacy"], deliveryType: "physical", description: "An original paperback concept exploring personal priorities, learning habits, and legacy." }),
  concept({ id: "knowledge-practice", title: "Knowledge Into Practice", category: "Ebooks", samplePrice: 22, art: "ebook", variants: ["Digital concept"], purposes: ["Wealth", "Legacy"], deliveryType: "digital", description: "An original ebook concept about financial learning habits and thoughtful questions." }),
  concept({ id: "living-intentionally", title: "Everyday Balance", category: "Ebooks", samplePrice: 16, art: "ebook", variants: ["Digital concept"], purposes: ["Health", "Longevity"], deliveryType: "digital", description: "A general wellness reading concept about making room for rest, movement, and reflection. Not medical advice." }),
  concept({ id: "legacy-gathering", title: "Shared Purpose Gathering", category: "Events", samplePrice: null, art: "event", variants: ["Event concept"], purposes: ["Health", "Wealth", "Longevity", "Legacy"], deliveryType: "event", description: "A community learning event concept. No date, location, ticket, or attendance commitment is confirmed." }),
  concept({ id: "business-training", title: "Business Foundations Practice", category: "Training Packages", samplePrice: 85, art: "training", variants: ["Digital concept"], purposes: ["Wealth", "Legacy"], deliveryType: "digital", description: "A structured training concept for organizing business questions and practicing planning skills. Content and scope pending." }),
  concept({ id: "habits-training", title: "Intentional Habits Practice", category: "Training Packages", samplePrice: 55, art: "training", variants: ["Digital concept"], purposes: ["Health", "Longevity"], deliveryType: "digital", description: "A general lifestyle training concept for reflection and everyday routines. No health outcomes are promised." }),
  concept({ id: "purpose-coaching", title: "Purpose Planning Conversations", category: "Coaching Packages", samplePrice: null, art: "coaching", variants: ["Coaching concept"], purposes: ["Wealth", "Legacy"], deliveryType: "service", description: "A coaching package concept for discussing priorities and planning questions. No coach, session schedule, or deliverables are committed." }),
  concept({ id: "financial-video", title: "Financial Learning Sessions", category: "Video Programs", samplePrice: 45, art: "video", variants: ["Digital concept"], purposes: ["Wealth", "Legacy"], deliveryType: "digital", description: "An original video program concept exploring financial vocabulary and informed decision making. Content pending, with no promised returns." }),
  concept({ id: "legacy-workbook", title: "Legacy Reflection Workbook", category: "Workbooks", samplePrice: 19, art: "workbook", variants: ["Printed concept"], purposes: ["Longevity", "Legacy"], deliveryType: "physical", description: "A workbook concept for writing down values, priorities, and questions for the future." }),
  concept({ id: "daily-bottle", title: "Everyday Trail Bottle", category: "Outdoors", samplePrice: 32, art: "bottle", variants: ["Standard"], purposes: ["Health", "Longevity"], deliveryType: "physical", description: "A reusable bottle concept for your daily routine and time outside. Materials and dimensions pending." }),
  concept({ id: "report-planner", title: "Credit Report Organizer", category: "Documents", samplePrice: 12, art: "folio", variants: ["Digital concept"], purposes: ["Wealth"], deliveryType: "digital", description: "An original document concept for organizing report review questions. Separate from all ten free Knowledge Vault PDFs." }),
  concept({ id: "legacy-notes", title: "Legacy Learning Notes", category: "Resources", samplePrice: 15, art: "folio", variants: ["Digital concept"], purposes: ["Health", "Wealth", "Longevity", "Legacy"], deliveryType: "digital", description: "An original reflection resource concept for connecting learning with your personal priorities. No download is available." }),
];
export const sampleMoney = (amount: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: shopConfig.currency }).format(amount);
export const productPrice = (product: Product) => product.samplePrice === null ? "Pricing coming soon" : sampleMoney(product.samplePrice);
export const canAddToCart = (product: Product, variant: string, quantity: number) => product.samplePrice !== null && product.samplePrice > 0 && product.variants.includes(variant) && Number.isInteger(quantity) && quantity >= 1 && quantity <= 99;
export function filterProducts({ category = "All Products", purpose = "All Purposes", query = "", sort = "featured" }: { category?: string; purpose?: string; query?: string; sort?: string }) {
  const result = products.filter(p => (category === "All Products" || p.category === category) && (purpose === "All Purposes" || p.purposes.some(tag => tag === purpose)) && `${p.title} ${p.description} ${p.category} ${p.purposes.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  if (sort === "price-low" || sort === "price-high") result.sort((a, b) => a.samplePrice === null ? (b.samplePrice === null ? 0 : 1) : b.samplePrice === null ? -1 : sort === "price-low" ? a.samplePrice - b.samplePrice : b.samplePrice - a.samplePrice);
  if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
  return result;
}
