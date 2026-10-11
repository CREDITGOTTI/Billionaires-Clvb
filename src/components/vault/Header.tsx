import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { site } from "../../config/site";
import logoAsset from "../../assets/official-company-logo.png.asset.json";

/** On the homepage, scroll smoothly to the top instead of reloading. */
export function useHomeNavigation(after?: () => void) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (event: MouseEvent) => {
    after?.();
    if (pathname !== "/") return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(null, "", "/");
  };
}

type Props = { onCta: () => void; home?: boolean };
export function Header({ onCta, home = true }: Props) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const goHome = useHomeNavigation(closeMenu);
  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  const sections = [
    { label: "Your Path", hash: "your-path" },
    { label: "FAQ", hash: "faq" },
  ];
  const links = (mobile: boolean) => <>
    <Link to="/" onClick={goHome}>Home</Link>
    {sections.map((item) => home
      ? <a key={item.hash} href={`#${item.hash}`} onClick={closeMenu}>{item.label}</a>
      : <Link key={item.hash} to="/" hash={item.hash} onClick={closeMenu}>{item.label}</Link>)}
    <Link to="/shop" onClick={closeMenu}>Shop</Link>
    <Link to="/invest" onClick={closeMenu}>Invest</Link>
    {site.portalUrl
      ? <a className={mobile ? undefined : "nav-utility"} href={site.portalUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>University Login</a>
      : <span className="nav-utility nav-unavailable">University Login · coming soon</span>}
  </>;
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="brand" to="/" onClick={goHome} aria-label="Billionaires Clvb home">
          <img className="brand__logo" src={logoAsset.url} alt="" />
          <span className="brand__name">BILLIONAIRES<br />CLVB</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links(false)}</nav>
        <div className="site-header__actions">
          <Button onClick={onCta} arrow className="header-cta">{site.cta}</Button>
          <Button variant="icon" className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links(true)}
          <Button onClick={() => { closeMenu(); onCta(); }} arrow>{site.cta}</Button>
        </nav>
      )}
    </header>
  );
}
