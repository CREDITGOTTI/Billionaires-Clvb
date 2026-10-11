import { useEffect, useRef } from "react";
import { Film, X } from "lucide-react";
import { Button } from "./Button";
import { site } from "../../config/site";

export function OverviewVideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    if (!open) videoRef.current?.pause();
  }, [open]);
  return <dialog ref={dialogRef} className="overview-dialog" onClose={onClose} onCancel={onClose} aria-labelledby="overview-title">
    <div className="overview-dialog__head"><div><span className="eyebrow">YBC UNIVERSITY</span><h2 id="overview-title">Watch the University Overview</h2></div><Button variant="icon" onClick={onClose} aria-label="Close University overview"><X size={21} /></Button></div>
    {site.overviewVideo.src ? <video ref={videoRef} src={site.overviewVideo.src} poster={site.overviewVideo.poster || undefined} controls playsInline className="overview-dialog__video" /> : <div className="overview-dialog__placeholder"><Film size={36} aria-hidden="true" /><strong>University Overview · Video coming soon</strong><span>The forthcoming recording will introduce Billionaires Clvb offerings and learning pathways.</span></div>}
  </dialog>;
}