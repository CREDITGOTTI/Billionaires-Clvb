/**
 * Free Knowledge Vault access contract. Leave every endpoint empty until the
 * GoHighLevel bridge exists (see RESOURCE-ACCESS.md). Empty values keep the
 * site in preview mode and no request is ever sent.
 *
 * This is separate from site.portalUrl, which is the PAID University course login.
 */
export const resourceAccess = {
  /** Login page for the FREE resource library (not the paid University course). */
  freeResourceLoginUrl: "",
  /** POST { name, email, phone?, marketingConsent, resourceId } → { session } */
  registerEndpoint: "",
  /** GET with cookies → { authenticated: boolean, entitlements: string[] } */
  sessionEndpoint: "",
  /** POST with cookies → ends the free library session */
  logoutEndpoint: "",
  /** POST { resourceId } with cookies → { url } short lived authenticated file link */
  downloadResolverEndpoint: "",
  /** Entitlement id granted once for all free library resources. */
  freeLibraryEntitlement: "free-resource-library",
};

export const isAccessConfigured = (value: string) => value.trim().length > 0;
