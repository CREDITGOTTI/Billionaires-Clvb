import { z } from "zod";
import { isAccessConfigured, resourceAccess } from "../../../config/resourceAccess";

export const signupSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address.").max(255, "Email must be under 255 characters."),
  phone: z.string().trim().max(30, "Phone must be under 30 characters.").regex(/^[0-9+().\s]*$/, "Phone may contain numbers, spaces, and + ( ) . only.").optional().or(z.literal("")),
  accessConsent: z.literal(true, { errorMap: () => ({ message: "Please agree so we can create your free library access." }) }),
  marketingConsent: z.boolean(),
});
export type SignupInput = z.infer<typeof signupSchema>;

export type AccessSession = { authenticated: boolean; entitlements: string[] };
export type AdapterResult<T> = { status: "not-configured" } | { status: "ok"; data: T } | { status: "error"; message: string };

const sessionSchema = z.object({ authenticated: z.boolean(), entitlements: z.array(z.string()) });

async function call<T>(endpoint: string, init: RequestInit, parse: (value: unknown) => T): Promise<AdapterResult<T>> {
  if (!isAccessConfigured(endpoint)) return { status: "not-configured" };
  try {
    const response = await fetch(endpoint, { credentials: "include", headers: { "Content-Type": "application/json" }, ...init });
    if (!response.ok) return { status: "error", message: "The request could not be completed. Please try again." };
    return { status: "ok", data: parse(await response.json()) };
  } catch {
    return { status: "error", message: "We could not reach the resource library. Please try again." };
  }
}

/** Register once. The server dedupes by email and must not reveal whether an email already exists. */
export const register = (input: SignupInput, resourceId: string) =>
  call(resourceAccess.registerEndpoint, { method: "POST", body: JSON.stringify({ name: input.name, email: input.email, phone: input.phone || undefined, marketingConsent: input.marketingConsent, resourceId }) }, (value) => sessionSchema.parse((value as { session?: unknown }).session));

export const getSession = () => call(resourceAccess.sessionEndpoint, { method: "GET" }, (value) => sessionSchema.parse(value));

export const logout = () => call(resourceAccess.logoutEndpoint, { method: "POST" }, () => true);

/** Server checks the session and returns a short lived authenticated file URL. */
export const resolveDownload = (resourceId: string) =>
  call(resourceAccess.downloadResolverEndpoint, { method: "POST", body: JSON.stringify({ resourceId }) }, (value) => {
    const url = z.object({ url: z.string().url() }).parse(value).url;
    if (!url.startsWith("https://")) throw new Error("Insecure delivery URL");
    return url;
  });

export const hasLibraryEntitlement = (session: AccessSession | null) =>
  Boolean(session?.authenticated && session.entitlements.includes(resourceAccess.freeLibraryEntitlement));
