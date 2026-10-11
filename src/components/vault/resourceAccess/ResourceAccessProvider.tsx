import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getSession, hasLibraryEntitlement, logout as adapterLogout, type AccessSession } from "./adapter";

type Access = {
  /** Real, server verified entitlement for every free library resource. */
  authenticated: boolean;
  /** Review only simulation for this page session. Never grants real files. */
  preview: boolean;
  setSession: (session: AccessSession | null) => void;
  startPreview: () => void;
  signOut: () => Promise<void>;
};

const Ctx = createContext<Access | null>(null);

/** Holds access state in memory only. Nothing personal is stored in the browser. */
export function ResourceAccessProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AccessSession | null>(null);
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    let active = true;
    void getSession().then((result) => { if (active && result.status === "ok") setSession(result.data); });
    return () => { active = false; };
  }, []);
  const startPreview = useCallback(() => setPreview(true), []);
  const signOut = useCallback(async () => { await adapterLogout(); setSession(null); setPreview(false); }, []);
  const value = useMemo(() => ({ authenticated: hasLibraryEntitlement(session), preview, setSession, startPreview, signOut }), [session, preview, startPreview, signOut]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useResourceAccess() {
  const value = useContext(Ctx);
  if (!value) throw new Error("useResourceAccess must be used inside ResourceAccessProvider");
  return value;
}
