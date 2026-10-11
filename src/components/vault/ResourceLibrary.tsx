import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, BookOpen, Download, FileText, Search, Unlock, X } from "lucide-react";
import { Button } from "./Button";
import { site } from "../../config/site";
import { isAccessConfigured, resourceAccess } from "../../config/resourceAccess";
import { ResourceAccessForm } from "./resourceAccess/ResourceAccessForm";
import { useResourceAccess } from "./resourceAccess/ResourceAccessProvider";
import { resolveDownload } from "./resourceAccess/adapter";
import type { Cta } from "./types";

const categories = ["All", "PDFs", "Ebooks", "Templates", "Guides", "Recordings"];
const topics = ["All topics", "Credit Foundations", "Consumer Law", "Business Credit", "Privacy & Consumer Law", "Consumer Credit"];
type Resource = (typeof site.resourceLibrary)[number];
type Offer = "none" | "delivered" | "preview";

export function ResourceLibrary({ open, onClose, onCta }: { open: boolean; onClose: () => void; onCta: Cta }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const access = useResourceAccess();
  const unlocked = access.authenticated || access.preview;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [topic, setTopic] = useState("All topics");
  const [selected, setSelected] = useState<Resource | null>(null);
  const [offer, setOffer] = useState<Offer>("none");
  const [delivery, setDelivery] = useState<"idle" | "working" | "error">("idle");
  const filtered = useMemo(() => site.resourceLibrary.filter((item) => {
    const categoryMatch = category === "All" || item.category === category || (category === "PDFs" && item.fileType === "PDF");
    const topicMatch = topic === "All topics" || item.topicTags.includes(topic);
    const queryMatch = `${item.title} ${item.description} ${item.topicTags.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
    return categoryMatch && topicMatch && queryMatch;
  }), [category, query, topic]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) { dialog.close(); setSelected(null); }
  }, [open]);
  useEffect(() => { setOffer("none"); setDelivery("idle"); }, [selected]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog?.open && !dialog.contains(document.activeElement)) dialog.querySelector<HTMLElement>("button, input, a")?.focus();
  }, [open, selected]);
  const close = () => { setSelected(null); onClose(); };
  const startEnrollment = () => {
    const dialog = dialogRef.current;
    setSelected(null);
    if (dialog?.open) dialog.close();
    onClose();
    window.setTimeout(() => onCta("University"), 0);
  };
  const canDeliver = access.authenticated && isAccessConfigured(resourceAccess.downloadResolverEndpoint);
  const download = async (resource: Resource) => {
    if (!canDeliver) return;
    const tab = window.open("", "_blank");
    setDelivery("working");
    const result = await resolveDownload(resource.id);
    if (result.status === "ok" && tab) { tab.opener = null; tab.location.href = result.data; setDelivery("idle"); setOffer("delivered"); return; }
    tab?.close();
    setDelivery("error");
  };
  const isSignup = selected?.visibility === "signup";
  return <dialog ref={dialogRef} className="library-dialog" onClose={onClose} onCancel={onClose} aria-label="The Knowledge Vault">
    {selected ? <section className="resource-detail" aria-labelledby="resource-detail-title">
      <div className="resource-detail__bar"><Button variant="quiet" onClick={() => setSelected(null)}><ArrowLeft size={16} />Back to library</Button><Button variant="icon" onClick={close} aria-label="Close resource library"><X size={21} /></Button></div>
      <div className="resource-detail__layout">
        <div className="resource-detail__cover">{selected.thumbnail ? <img src={selected.thumbnail} alt={`${selected.title} cover`} loading="lazy" /> : <BookOpen size={42} aria-hidden="true" />}</div>
        <div className="resource-detail__copy"><span className="eyebrow">{selected.category} · {selected.fileType}{selected.pageCount ? ` · ${selected.pageCount} PAGES` : ""}</span><h2 id="resource-detail-title">{selected.title}</h2><p>{selected.description}</p><div className="library-topic-tags">{selected.topicTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {!isSignup ? <p className="resource-status">Coming soon</p> : !unlocked ? <ResourceAccessForm resourceId={selected.id} /> : <div className="access-unlocked">
          {access.preview && !access.authenticated && <span className="preview-marker">PREVIEW · NOT A REAL ACCOUNT</span>}
          <strong><Unlock size={16} aria-hidden="true" /> Free library access {access.preview && !access.authenticated ? "previewed" : "active"}</strong>
          {canDeliver ? <Button onClick={() => void download(selected)} disabled={delivery === "working"}><Download size={16} />{delivery === "working" ? "Preparing secure link" : "Download"}</Button>
            : <><Button disabled aria-describedby="download-pending-reason"><Download size={16} />Download pending</Button><p id="download-pending-reason" className="access-unlocked__reason">Secure file delivery is not connected yet, so no file is available in this preview.</p></>}
          {delivery === "error" && <p className="access-form__error" role="alert">The secure link could not be created. Please try again.</p>}
          {!canDeliver && offer === "none" && <Button variant="quiet" onClick={() => setOffer("preview")}>Preview the University offer</Button>}
        </div>}
        {offer !== "none" && <div className="university-offer" role="status">
          {offer === "preview" ? <span className="preview-marker">PREVIEW OF THE AFTER DOWNLOAD STEP</span> : <span className="university-offer__note">Your download link opened in a new tab.</span>}
          <h3>Keep building with Billionaires Clvb University</h3>
          <ul><li>Step by step courses</li><li>Live call recordings</li><li>Monthly community meetup and live call</li><li>Templates and ebooks</li><li>A community building together</li></ul>
          <p className="university-offer__price"><strong>{site.university.firstMonth}</strong> first month, then $149 monthly</p>
          <Button arrow onClick={startEnrollment}>{site.cta}</Button>
        </div>}
        </div>
      </div>
    </section> : <>
      <div className="library-dialog__head"><div><span className="eyebrow">FREE RESOURCE LIBRARY</span><h2 id="library-title">The Knowledge Vault</h2><p>A place for your PDFs, ebooks, guides, and practical resources. One free signup unlocks the full collection.</p>{access.preview && !access.authenticated && <span className="preview-marker">PREVIEW ACCESS · THIS TAB ONLY</span>}</div><Button variant="icon" onClick={close} aria-label="Close resource library"><X size={21} /></Button></div>
      <div className="library-controls"><label className="library-search"><Search size={16} aria-hidden="true" /><span className="sr-only">Search resources</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, topics, and descriptions" /></label><label className="library-topic"><span>Topic</span><select value={topic} onChange={(event) => setTopic(event.target.value)}>{topics.map((item) => <option key={item}>{item}</option>)}</select></label></div>
      <div className="library-filters" aria-label="Filter resources by format">{categories.map((item) => <Button type="button" variant={category === item ? "primary" : "quiet"} key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div>
      <p className="library-results" role="status">{filtered.length} {filtered.length === 1 ? "resource" : "resources"}</p>
      <div className="library-grid">{filtered.map((item) => <article className="library-item" key={item.id}><div className="library-item__cover">{item.thumbnail ? <img src={item.thumbnail} alt="" loading="lazy" /> : item.fileType === "Video" ? <BookOpen size={28} /> : <FileText size={28} />}{item.visibility === "signup" && <span>{unlocked ? <Unlock size={14} aria-hidden="true" /> : null}{unlocked ? "UNLOCKED" : "FREE WITH SIGNUP"}</span>}</div><span>{item.category} · {item.fileType}{item.pageCount ? ` · ${item.pageCount} pages` : ""}</span><h3>{item.title}</h3><p>{item.description}</p><div className="library-topic-tags">{item.topicTags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>{item.visibility === "signup" ? <Button variant="quiet" onClick={() => setSelected(item)}>View details</Button> : <small>Coming soon</small>}</article>)}</div>
      {filtered.length === 0 && <div className="library-empty">No resources match these filters.</div>}
    </>}
  </dialog>;
}
