import { useId, useState, type FormEvent } from "react";
import { isAccessConfigured, resourceAccess } from "../../../config/resourceAccess";
import { Button } from "../Button";
import { register, signupSchema } from "./adapter";
import { useResourceAccess } from "./ResourceAccessProvider";

type Errors = Partial<Record<"name" | "email" | "phone" | "accessConsent", string>>;
type State = "idle" | "submitting" | "preview-only" | "error";

export function ResourceAccessForm({ resourceId }: { resourceId: string }) {
  const { setSession, startPreview } = useResourceAccess();
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = signupSchema.safeParse({
      name: String(form.get("name") ?? ""), email: String(form.get("email") ?? ""), phone: String(form.get("phone") ?? ""),
      accessConsent: form.get("accessConsent") === "on", marketingConsent: form.get("marketingConsent") === "on",
    });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) { const key = issue.path[0] as keyof Errors; if (key && !next[key]) next[key] = issue.message; }
      setErrors(next);
      event.currentTarget.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
      return;
    }
    setErrors({});
    setState("submitting");
    const result = await register(parsed.data, resourceId);
    if (result.status === "not-configured") { setState("preview-only"); return; }
    if (result.status === "error") { setState("error"); setMessage(result.message); return; }
    setSession(result.data);
    setState("idle");
  };
  const field = (name: keyof Errors) => ({ "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `${uid}-${name}` : undefined });
  const error = (name: keyof Errors) => errors[name] && <span className="access-form__error" id={`${uid}-${name}`}>{errors[name]}</span>;
  if (state === "preview-only") return <div className="access-preview" role="status">
    <strong>Preview only. Account creation and file delivery are not connected yet.</strong>
    <p>Nothing was sent or saved, no account was created, and no email was delivered. You can review how the unlocked library will look in this browser tab.</p>
    <Button onClick={startPreview} arrow>Preview unlocked library</Button>
  </div>;
  return <form className="access-form" onSubmit={submit} noValidate aria-labelledby={`${uid}-title`}>
    <h3 id={`${uid}-title`}>Unlock the full resource library</h3>
    <p>One free signup opens every resource in The Knowledge Vault. University membership is a separate paid program.</p>
    <label>Name<input name="name" autoComplete="name" maxLength={100} required {...field("name")} />{error("name")}</label>
    <label>Email<input name="email" type="email" autoComplete="email" inputMode="email" maxLength={255} required {...field("email")} />{error("email")}</label>
    <label>Phone <span className="optional">(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} {...field("phone")} />{error("phone")}</label>
    <label className="check-label"><input type="checkbox" name="accessConsent" {...field("accessConsent")} />I agree to create free resource library access with this email.</label>{error("accessConsent")}
    <label className="check-label"><input type="checkbox" name="marketingConsent" />Optional: send me Billionaires Clvb updates and offers.</label>
    {state === "error" && <p className="access-form__error" role="alert">{message}</p>}
    <Button type="submit" arrow disabled={state === "submitting"}>{state === "submitting" ? "Creating access" : "Unlock the library"}</Button>
    <p className="access-form__signin">Already registered? {isAccessConfigured(resourceAccess.freeResourceLoginUrl)
      ? <a href={resourceAccess.freeResourceLoginUrl} target="_blank" rel="noopener noreferrer">Sign in to the free library</a>
      : <span>Sign in · free library login setup pending</span>}</p>
  </form>;
}
