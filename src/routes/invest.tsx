import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Header } from "../components/vault/Header";
import { Footer } from "../components/vault/Footer";
import { InterestModal } from "../components/vault/InterestModal";
import { site } from "../config/site";

const title = "Invest | Lien Phat Capital Private Equity";
const description = "Ready to invest? Explore Lien Phat Capital private equity opportunities, a partner of Billionaires Clvb.";

export const Route = createFileRoute("/invest")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Invest,
});

function Invest() {
  const [open, setOpen] = useState(false);
  const url = site.investUrl;
  return <>
    <Header onCta={() => setOpen(true)} home={false} />
    <main className="shop-page shell">
      <div className="shop-heading"><div className="shop-heading__copy">
        <Link to="/" className="eyebrow">BILLIONAIRES CLVB / INVEST</Link>
        <h1>Invest</h1>
        <h2>Lien Phat Capital private equity</h2>
        <p>For members who are ready to move from learning to investing. Lien Phat Capital hosts our private equity investment opportunities, with full details, eligibility, and next steps on its website.</p>
        <p style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <a className="site-button site-button--primary" href={url} target="_blank" rel="noopener noreferrer">Visit Lien Phat Capital <ArrowUpRight size={18} /></a>
          <Link className="site-button site-button--quiet" to="/">Return to The Vault</Link>
        </p>
        <span className="shop-muted">You will leave Billionaires Clvb in a new tab; this site stays open so you can return anytime. Investing involves risk, including loss of principal. Review all offering materials and consult qualified professionals before investing.</span>
      </div></div>
    </main>
    <Footer home={false} />
    <InterestModal open={open} interest="University" onClose={() => setOpen(false)} />
  </>;
}
