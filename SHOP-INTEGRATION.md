# Shop handoff

The Shop is a client-only preview. Catalog and cart do not persist. Checkout does not collect payments.

## Catalog
Edit `src/config/shop.ts` with approved real titles, descriptions, currency/prices, images, categories, stock/fulfillment rules and variants. Every current item and price is a sample. Product art is an original CSS concept featuring the supplied official logo.

Keep this retail catalog separate from `site.resourceLibrary`. All ten uploaded Knowledge Vault PDFs are free through one signup, not retail products; their originals stay outside the client bundle and use the protected resource resolver when connected. University remains a separate paid membership.

## Categories, purpose, and fulfillment
The catalog contains 16 original sample concepts. Map each real product to one category: Apparel, Backpacks, Books, Ebooks, Events, Training Packages, Coaching Packages, Video Programs, Workbooks, Outdoors, Documents, or Resources. All Products is an aggregate view, not a product category. Assign multiple purpose tags from Health, Wealth, Longevity, and Legacy as appropriate. Edit category descriptions alongside records.

Each record carries `deliveryType` (physical, digital, service, event) and `deliveryInfo`. Physical items need materials, variants, shipping and return details. Digital products need approved contents, access duration if applicable, and secure delivery. Coaching services need approved scope, deliverables, provider assignment, scheduling and cancellation policies. Events need confirmed organizer, date, location or access platform, ticket terms and cancellation policy before sale. Nothing in this preview commits a coach or event.

Use `samplePrice: null` for unconfirmed prices; these concepts cannot enter the cart. Both price sorts place these items last. All numeric prices are illustrative, including training and video concepts. Replace sample prices and empty per variant `stripePriceIds` only after approved metadata and secure checkout are supplied.

## Stripe connection (pending)
Payments must first be enabled and securely configured through the Lovable editor. Do not put private keys in browser code. The future multi-item checkout endpoint must authenticate/validate requests as appropriate, validate product IDs, variants and bounded quantities, resolve trusted Stripe PriceIDs on the server, and create a Stripe Checkout session. Never accept browser sample prices, totals or PriceIDs as authoritative charges.

`serverCheckoutEndpoint` is intentionally empty. `Cart.tsx` contains a guarded handoff stub, not an active integration. After setup, replace the stub with the approved server contract, sending only catalog IDs, variants and quantities and redirecting only to a verified returned Checkout URL.

Supply approved StripePriceID mappings for each purchasable variant, currency, physical shipping regions/rates, tax policy, success/cancel URLs, and secure digital delivery. Digital fulfillment must verify paid sessions on the server; no public original-file URLs. No payment form or purchase-success simulation belongs in this prototype.