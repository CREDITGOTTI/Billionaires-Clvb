# Vault Eagle, University Explorer, and AI Demo

## Build
- Extend the existing vault entrance to about three seconds: mechanical unlock, eagle emergence, wingbeat flight, bounded green numeral trails, upward exit, and clean reveal. Add a discreet replay control and keep Skip and reduced-motion behavior.
- Create `EagleFlight` as a separate lightweight SVG/CSS component with no audio, video, network calls, or persistent animation.
- Replace the current resource navigator with a `UniversityExplorer` that provides keyboard-accessible campus navigation, lesson previews, Tools & Materials, onboarding guidance, dashboard context, and explicit illustrative-preview labels for all seven requested campuses.
- Add a separate `DebtTerminatorPreview` inside the University experience with selectable prompts, volatile local transcript state, predefined educational routing, a safe fallback, Enter/Shift+Enter behavior, and the exact external ChatGPT utility link.
- Keep pricing, the single “Start My Blueprint” sales action, modal behavior, branding, existing major section files, and all front-end-only constraints unchanged.

## Content and safeguards
- Centralize the GPT URL and new editable University campus content in the existing site configuration.
- Keep demonstrations educational and generic; never imply legal, credit, investment, debt-removal, download, progress, enrollment, or personalized outcomes.
- Clearly distinguish the website demo from the real GPT and note that ChatGPT sign-in may be required.

## Validation
- Verify desktop and 390px mobile rendering, no horizontal overflow, entrance timing/Skip/replay/reduced motion, every campus and view, lesson/material panels, prompt responses and fallback, external GPT URL, and existing sales modal.
- Check project tests, lint/type/build signals, then report the preview link and current commit SHA without publishing or changing DNS.

## Technical details
- Use the existing React/TanStack structure and semantic design tokens.
- Install and compose the documented AI Elements transcript/message/input primitives for the local chat demo; retain all logic in browser component state.
- Add only focused component files and update the existing University/resource composition rather than introducing new pages or services.
