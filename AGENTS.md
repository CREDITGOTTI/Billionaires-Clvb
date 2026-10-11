<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Keep editable site copy, prices, and external integration URLs in `src/config/site.ts` because this prototype must remain easy to connect without changing presentation components.
- Keep visitor interactions in client state; the only browser storage is the nonpersonal sessionStorage `portalSeen` marker, because no personal data may persist client side.
- Keep the University preview educational and client-only; do not add chatbots, live AI, downloads, progress, or unverified curriculum claims.
- Keep the entrance eagle media optional through central config so no placeholder renders until the user supplies the realistic asset.
- Build the single sales page from focused section components under `src/components/vault` because its interactive parts are edited and verified independently.
- Add actual University video and resource URLs only through `src/config/site.ts`; leave unavailable records marked coming soon so visitors never receive fake or broken files.
- Keep document originals outside the client bundle; free library files are delivered only through the server resolver in `src/config/resourceAccess.ts`, because client flags are not entitlement.
- Keep the supplied fantasy portal artwork confined to the opening sequence; use the supplied ruins panorama as hero and neutral site ambience, and keep complete cultural artwork as noninteractive decorative layers.

- Keep Shop catalog separate from member resources in `src/config/shop.ts`; retail preview items never expose authenticated University originals.
- Render the Stargate only in the first home entry per session, because other screens must open instantly.
- Keep Shop dialogs and cart in focused modules with client state only; checkout remains a guarded stub until trusted server PriceID validation is connected.
- Keep Shop taxonomy, purpose tags, delivery metadata, filtering, and price eligibility in the catalog module; shared rules prevent null price purchases and keep browsing consistent across views.
- Keep free resource access behind `ResourceAccessProvider` and the adapter in `src/components/vault/resourceAccess`, because endpoints connect later without UI changes.
- Reuse the config driven SocialLinks component in Founder and Footer so founder destinations and accessible outbound behavior remain consistent.
