import type { LucideIcon } from "lucide-react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description: string; actions?: ReactNode }) {
  return <div className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
    <div>{eyebrow && <p className="mb-2 text-[11px] font-semibold uppercase tracking-[.18em] text-muted-foreground">{eyebrow}</p>}<h1 className="text-2xl font-semibold tracking-[-.03em] md:text-[32px]">{title}</h1><p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">{description}</p></div>
    {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
  </div>;
}

export function Stat({ label, value, note, icon: Icon, tone = "neutral" }: { label: string; value: string; note: string; icon: LucideIcon; tone?: "neutral" | "good" | "warn" }) {
  return <div className="group rounded-lg border bg-card p-4 transition-colors hover:border-foreground/25">
    <div className="flex items-center justify-between"><span className="text-xs font-medium text-muted-foreground">{label}</span><Icon className="size-4 text-muted-foreground" /></div>
    <div className="mt-5 text-3xl font-semibold tabular-nums tracking-[-.04em]">{value}</div>
    <p className={cn("mt-1 text-xs", tone === "good" && "text-emerald-700 dark:text-emerald-400", tone === "warn" && "text-amber-700 dark:text-amber-400", tone === "neutral" && "text-muted-foreground")}>{note}</p>
  </div>;
}

export function StatusBadge({ children, tone }: { children: ReactNode; tone?: "good" | "warn" | "bad" | "neutral" }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium", tone === "good" && "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300", tone === "warn" && "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300", tone === "bad" && "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300", (!tone || tone === "neutral") && "bg-muted text-muted-foreground")}>{children}</span>;
}

export function ToolBar({ placeholder = "Cari data...", children }: { placeholder?: string; children?: ReactNode }) {
  return <div className="flex flex-col gap-2 sm:flex-row"><div className="relative flex-1 sm:max-w-sm"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><Input aria-label={placeholder} placeholder={placeholder} className="pl-9"/></div><Button variant="outline"><SlidersHorizontal className="size-4"/> Filter</Button>{children}</div>;
}

export function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
 return <div className="mb-4 flex items-center justify-between gap-4"><div><h2 className="text-base font-semibold tracking-tight">{title}</h2>{subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}</div>{action}</div>;
}
