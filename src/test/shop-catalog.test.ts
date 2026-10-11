import { describe, expect, it } from "vitest";
import { products, categories, filterProducts, canAddToCart, purposes } from "../config/shop";

describe("Shop ecosystem catalog", () => {
  it("provides 14 to 18 original concepts with all required distinct categories", () => {
    expect(products.length).toBeGreaterThanOrEqual(14);
    expect(products.length).toBeLessThanOrEqual(18);
    for (const category of ["Apparel", "Backpacks", "Books", "Ebooks", "Events", "Training Packages", "Coaching Packages", "Video Programs", "Workbooks", "Outdoors"]) {
      expect(categories).toContain(category);
      expect(filterProducts({ category }).length).toBeGreaterThan(0);
      expect(filterProducts({ category }).every(p => p.category === category)).toBe(true);
    }
  });
  it("filters overlapping purpose tags within a category and search", () => {
    for (const purpose of purposes) expect(filterProducts({ purpose }).every(p => p.purposes.includes(purpose))).toBe(true);
    expect(filterProducts({ category: "Outdoors", purpose: "Health", query: "bottle" }).map(p => p.id)).toEqual(["daily-bottle"]);
    expect(filterProducts({ category: "Books", query: "bottle" })).toEqual([]);
    expect(filterProducts({ purpose: "Longevity" }).map(p => p.id)).toContain("legacy-notes");
  });
  it("rejects unpriced event and coaching concepts", () => {
    for (const category of ["Events", "Coaching Packages"]) {
      const records = filterProducts({ category });
      expect(records.length).toBeGreaterThan(0);
      for (const p of records) {
        expect(p.samplePrice).toBeNull();
        expect(canAddToCart(p, p.variants[0] ?? "", 1)).toBe(false);
      }
    }
  });
  it("accepts priced variants with quantities 1 to 99 only", () => {
    const tee = products.find(p => p.id === "legacy-tee");
    if (!tee) throw new Error("Missing sample tee");
    expect(tee.samplePrice).toBe(35);
    expect(canAddToCart(tee, "M", 1)).toBe(true);
    expect(canAddToCart(tee, "M", 99)).toBe(true);
    for (const quantity of [0, 100, 1.5]) expect(canAddToCart(tee, "M", quantity)).toBe(false);
    expect(canAddToCart(tee, "missing", 1)).toBe(false);
  });
  it("sorts numeric sample prices while keeping unknown prices last", () => {
    for (const sort of ["price-low", "price-high"]) {
      const sorted = filterProducts({ sort });
      expect(sorted.slice(-2).every(p => p.samplePrice === null)).toBe(true);
      const numeric = sorted.flatMap(p => p.samplePrice === null ? [] : [p.samplePrice]);
      expect(numeric).toEqual([...numeric].sort((a,b) => sort === "price-low" ? a-b : b-a));
    }
  });
  it("does not map retail concepts to protected originals or payment IDs", () => {
    for (const p of products) {
      expect(p.stripePriceIds).toEqual({});
      expect(p).not.toHaveProperty("accessUrl");
      expect(p).not.toHaveProperty("originalFilename");
    }
  });
});