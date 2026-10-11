# Free Knowledge Vault access (setup guide)

The site shows a complete free signup flow, but nothing is connected yet. With empty
endpoints in `src/config/resourceAccess.ts` the form only validates and then shows
"Preview only. Account creation and file delivery are not connected yet." No request is sent.

## What GoHighLevel needs (owner setup)
1. A FREE resource library product/offer in GHL containing all 10 PDF originals, hosted gated in GHL (never public URLs).
2. A signup form, embed, or secure server bridge. One signup creates or updates the contact by email and the account, and grants the whole free collection once.
3. GHL sends a real login / magic link / credential setup email with the free library URL. No plaintext password is emailed or created in the browser.
4. Tags: `library-lead` and the selected resource id. Optional marketing consent drives a separate automation only when checked.
5. Track: confirmed form submission and "file link issued" (not proven download).
6. University upsell stays a distinct paid offer (`site.portalUrl`, $97 first month then $149 monthly).

## Server bridge contract (credentials stored as secrets, never in the browser)
| Config field | Request | Response |
| --- | --- | --- |
| `registerEndpoint` | POST `{ name, email, phone?, marketingConsent, resourceId }` | `{ session: { authenticated, entitlements[] } }` plus httpOnly session cookie. Must not reveal whether the email already existed. |
| `sessionEndpoint` | GET with cookie | `{ authenticated, entitlements[] }` |
| `logoutEndpoint` | POST with cookie | any 2xx |
| `downloadResolverEndpoint` | POST `{ resourceId }` with cookie | `{ url }` short lived https link, issued only after the server verifies the entitlement |
| `freeResourceLoginUrl` | link | Free library sign in page (not the paid course) |

`freeLibraryEntitlement` must match the entitlement id the server returns. The client never
grants access from a typed email or a local flag. The "Preview unlocked library" button is a
review only simulation held in memory for the current tab.
