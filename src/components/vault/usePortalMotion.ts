import { useEffect, useState } from "react";

/** Shared, in-memory ambient preference; never persists visitor settings. */
export function usePortalMotion() {
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMoving(!reduced.matches && !document.hidden && document.documentElement.dataset["motionPaused"] !== "true");
    sync();
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("ambient:motion", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("ambient:motion", sync);
    };
  }, []);
  return moving;
}