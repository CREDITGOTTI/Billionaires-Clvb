import { Link } from "@tanstack/react-router";
import { site } from "../../config/site";
import logoAsset from "../../assets/official-company-logo.png.asset.json";
import { useHomeNavigation } from "./Header";
import { SocialLinks } from "./SocialLinks";

export function Footer({ home = true }: { home?: boolean }) {
  const goHome = useHomeNavigation();
  const section = (hash: string, label: string) => home ? <a href={`#${hash}`}>{label}</a> : <Link to="/" hash={hash}>{label}</Link>;
  return <footer className="site-footer"><div className="shell"><div className="site-footer__main"><div><p>Education for the foundation.<br />Intention for the future.</p><span className="footer-ownership">{site.foundedBy.toUpperCase()}</span><SocialLinks /></div><div><span>EXPLORE</span><Link to="/" onClick={goHome}>Home</Link>{section("university", "The University")}{section("your-path", "Your Path")}{section("faq", "FAQ")}<Link to="/shop">Shop</Link></div><div><span>UNIVERSITY ACCESS</span>{site.portalUrl ? <a href={site.portalUrl} target="_blank" rel="noopener noreferrer">University Login ↗</a> : <span>Portal link coming soon</span>}</div></div><p className="site-footer__disclosure">Content and tools are provided for educational purposes only. They do not replace individualized legal, tax, investment, or financial advice. Credit and funding outcomes are not guaranteed.</p><div className="site-footer__bottom"><Link className="brand brand--footer" to="/" onClick={goHome} aria-label="Billionaires Clvb home"><img className="brand__logo brand__logo--footer" src={logoAsset.url} alt="Billionaires Clvb official company logo" width={88} height={88} /><span className="brand__name">BILLIONAIRES<br />CLVB</span></Link><span>© {new Date().getFullYear()} {site.legalName}</span><span>BUILT FOR WHAT’S NEXT</span></div></div></footer>;
}
