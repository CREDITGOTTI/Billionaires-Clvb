import { describe, expect, it } from "vitest";
import { site } from "../config/site";

describe("Approved education and member destinations", () => {
  it("sends member access to the exact authenticated course product", () => {
    expect(site.portalUrl).toBe("https://billionairesclvb.app.clientclub.net/courses/products/6fefe905-f9fc-41fb-ab0a-ee36d361cfe5");
  });
  it("uses the requested Cornell Chapter 41 source", () => {
    expect(site.mission.sourceUrl).toBe("https://www.law.cornell.edu/uscode/text/15/chapter-41");
  });
});