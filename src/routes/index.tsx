import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site, type Interest } from "../config/site";
import { Header } from "../components/vault/Header";
import { PortalIntro } from "../components/vault/PortalIntro";
import { MatrixBackground } from "../components/vault/MatrixBackground";
import { SiteAmbient } from "../components/vault/SiteAmbient";
import { InterestModal } from "../components/vault/InterestModal";
import { Hero } from "../components/vault/Hero";
import { Audience } from "../components/vault/Audience";
import { University } from "../components/vault/University";
import { ResourceVault } from "../components/vault/ResourceVault";
import { Offers } from "../components/vault/Offers";
import { Founder } from "../components/vault/Founder";
import { Testimonials } from "../components/vault/Testimonials";
import { FAQ } from "../components/vault/FAQ";
import { FinalCta } from "../components/vault/FinalCta";
import { Footer } from "../components/vault/Footer";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: site.title }, { name: "description", content: site.description },
    { property: "og:title", content: site.title }, { property: "og:description", content: site.description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.legalName }) }] }),
  component: Index,
});
function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [interest, setInterest] = useState<Interest>("University");
  const openModal = (selection: Interest = "University") => { setInterest(selection); setModalOpen(true); };
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('.section, .final-cta');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><PortalIntro /><MatrixBackground /><div className="site-environment"><SiteAmbient /><Header onCta={() => openModal()} /><main><Hero onCta={openModal} /><University /><ResourceVault /><Audience /><Offers onCta={openModal} /><Founder /><Testimonials /><FAQ /><FinalCta onCta={openModal} /></main><Footer /></div><InterestModal open={modalOpen} interest={interest} onClose={() => setModalOpen(false)} /></>;
}
