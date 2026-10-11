import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import { site, type Interest } from "../../config/site";

type Props = { open: boolean; interest: Interest; onClose: () => void };
export function InterestModal({ open, interest, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Interest>(interest);
  const [previewed, setPreviewed] = useState(false);
  useEffect(() => { if (open) { setSelected(interest); setPreviewed(false); ref.current?.showModal(); } else ref.current?.close(); }, [open, interest]);
  return <dialog ref={ref} className="interest-dialog" onClose={onClose} onCancel={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
    <div className="interest-dialog__top"><span className="eyebrow">THE NEXT MOVE STARTS HERE</span><Button variant="icon" onClick={onClose} aria-label="Close interest form"><X size={22} /></Button></div>
    <h2 id="modal-title">Let’s map your next move.</h2><p id="modal-description">Tell us what you are working toward so our team can identify the right starting point.</p>
    {previewed && <div className="preview-notice" role="status"><strong>This is a preview. Your information has not been submitted.</strong><span>The interest form will be connected when the production workflow is ready.</span></div>}
    <form onSubmit={e => { e.preventDefault(); setPreviewed(true); }}>
      <div className="form-row"><label>First name <input name="firstName" autoComplete="given-name" required placeholder="Your first name" /></label><label>Email <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
      <label>Phone <span className="optional">(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" /></label>
      <fieldset><legend>Primary interest</legend><div className="interest-options">{site.interests.map(item => <label key={item} className={selected === item ? "selected" : ""}><input type="radio" name="interest" value={item} checked={selected === item} onChange={() => setSelected(item)} />{item}</label>)}</div></fieldset>
      {selected === "Business Funding" && <p className="form-note">A separate qualification questionnaire is required before eligibility can be evaluated. Please do not include sensitive financial information here.</p>}
      <label>What would you like help with?<textarea name="message" rows={3} placeholder="Tell us a little about your goals" /></label>
      <label className="check-label"><input type="checkbox" name="blueprint" />I’m interested in The Credit &amp; Business Foundation Blueprint when available.</label>
      <label className="check-label"><input type="checkbox" name="marketingConsent" />I agree to receive optional marketing emails.</label>
      <Button type="submit" arrow className="form-submit">Submit My Interest</Button>
      <p className="form-disclaimer">Prototype only. Nothing entered here is stored or sent.</p>
    </form>
  </dialog>;
}
