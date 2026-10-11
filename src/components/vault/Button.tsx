import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: "primary" | "quiet" | "icon"; arrow?: boolean };
export function Button({ children, variant = "primary", arrow = false, className = "", ...props }: Props) {
  return <button className={`site-button site-button--${variant} ${className}`} {...props}>{children}{arrow && <ArrowUpRight size={17} aria-hidden="true" />}</button>;
}
