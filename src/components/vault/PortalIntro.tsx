import { useEffect, useState } from "react";
import portalDesktop from "../../assets/ybc-portal-entrance-desktop.webp.asset.json";
import portalMobile from "../../assets/ybc-portal-entrance-mobile.webp.asset.json";
import { Button } from "./Button";
import { MatrixDecode } from "./MatrixDecode";
import { Stargate } from "./Stargate";
import { usePortalMotion } from "./usePortalMotion";
import { site } from "../../config/site";

/** Decided once per page load so effect re-runs cannot change it. */
let portalDecision: boolean | null = null;

export function PortalIntro() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [cycle] = useState(0);
  const moving = usePortalMotion();
  useEffect(() => {
    // Only a nonpersonal "portalSeen" marker is kept, and only for this browser session.
    if (portalDecision === null) {
      try { portalDecision = window.sessionStorage.getItem("portalSeen") !== "1"; window.sessionStorage.setItem("portalSeen", "1"); } catch { portalDecision = true; }
    }
    const seen = !portalDecision;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setVisible(!seen && !reduced.matches);
    const changed = () => { if (reduced.matches) setVisible(false); };
    reduced.addEventListener("change", changed);
    return () => reduced.removeEventListener("change", changed);
  }, []);
  useEffect(() => {
    if (!visible) return;
    let active = true;
    const source = window.matchMedia("(max-width: 650px)").matches ? portalMobile.url : portalDesktop.url;
    const image = new Image();
    const fallback = window.setTimeout(() => {
      if (active && !image.complete) setVisible(false);
    }, 1200);
    const exit = window.setTimeout(() => setVisible(false), 3000);
    image.onload = () => {
      if (active) setReady(true);
    };
    image.onerror = () => {
      if (active) setVisible(false);
    };
    image.src = source;
    if (image.complete && image.naturalWidth > 0) setReady(true);
    return () => {
      active = false;
      image.onload = null;
      image.onerror = null;
      window.clearTimeout(fallback);
      window.clearTimeout(exit);
    };
  }, [cycle, visible]);
  useEffect(() => {
    if (!visible) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const environment = document.querySelector<HTMLElement>(".site-environment");
    if (environment) environment.inert = true;
    const skip = document.querySelector<HTMLButtonElement>(".portal-intro__skip");
    skip?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
      if (event.key === "Tab") { event.preventDefault(); skip?.focus(); }
    };
    document.addEventListener("keydown", keydown);
    return () => { document.removeEventListener("keydown", keydown); if (environment) environment.inert = false; previous?.focus(); };
  }, [visible, cycle]);
  if (!visible) return null;
  return (
    <div key={cycle} className={`portal-intro${ready ? " is-ready" : ""}${moving ? "" : " is-still"}`} aria-label="Opening the Knowledge Vault" role="dialog" aria-modal="true" onAnimationEnd={(event) => { if (event.animationName === "portal-exit") setVisible(false); }}>
      {ready && <img className="portal-intro__fill" src={portalDesktop.url} alt="" aria-hidden="true" />}
      <div className="portal-intro__stage">
        {ready && <picture><source media="(max-width: 650px)" srcSet={portalMobile.url} /><img className="portal-intro__scene" src={portalDesktop.url} alt="" width={1024} height={1536} /></picture>}
        <MatrixDecode />
        <div className="portal-intro__mist portal-intro__mist--one" aria-hidden="true" />
        <div className="portal-intro__mist portal-intro__mist--two" aria-hidden="true" />
        <Stargate moving={moving} />
      </div>
      <div className="portal-intro__copy"><span>{site.entrance.heading}</span><strong>{site.entrance.status}</strong><div className="portal-intro__progress" aria-hidden="true"><i /></div></div>
      <Button variant="quiet" className="portal-intro__skip" onClick={() => setVisible(false)}>Skip portal <span aria-hidden="true">↗</span></Button>
    </div>
  );
}