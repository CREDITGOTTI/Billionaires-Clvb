import { afterEach, describe, expect, it, vi } from "vitest";
import { site } from "../config/site";
import { resourceAccess } from "../config/resourceAccess";
import { getSession, hasLibraryEntitlement, register, resolveDownload, signupSchema } from "../components/vault/resourceAccess/adapter";

afterEach(() => vi.restoreAllMocks());

describe("Free Knowledge Vault signup", () => {
  it("classifies all ten uploaded PDFs as free signup resources", () => {
    const pdfs = site.resourceLibrary.filter((item) => item.fileType === "PDF");
    expect(pdfs).toHaveLength(10);
    expect(pdfs.every((item) => item.visibility === "signup" && item.accessUrl === "")).toBe(true);
  });
  it("keeps the free library login separate from the paid University course", () => {
    expect(resourceAccess.freeResourceLoginUrl).not.toBe(site.portalUrl);
  });
  it("requires name, email, and access consent but not marketing consent", () => {
    const base = { name: "Ana", email: "ana@example.com", phone: "", accessConsent: true, marketingConsent: false };
    expect(signupSchema.safeParse(base).success).toBe(true);
    expect(signupSchema.safeParse({ ...base, email: "nope" }).success).toBe(false);
    expect(signupSchema.safeParse({ ...base, name: " " }).success).toBe(false);
    expect(signupSchema.safeParse({ ...base, accessConsent: false }).success).toBe(false);
  });
  it("sends no request while endpoints are empty", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const input = { name: "Ana", email: "ana@example.com", phone: "", accessConsent: true as const, marketingConsent: false };
    expect((await register(input, "net-30")).status).toBe("not-configured");
    expect((await getSession()).status).toBe("not-configured");
    expect((await resolveDownload("net-30")).status).toBe("not-configured");
    expect(fetchSpy).not.toHaveBeenCalled();
  });
  it("grants library access only from a verified session entitlement", () => {
    expect(hasLibraryEntitlement(null)).toBe(false);
    expect(hasLibraryEntitlement({ authenticated: false, entitlements: [resourceAccess.freeLibraryEntitlement] })).toBe(false);
    expect(hasLibraryEntitlement({ authenticated: true, entitlements: [resourceAccess.freeLibraryEntitlement] })).toBe(true);
  });
});
