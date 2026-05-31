import { cn } from "@/lib/utils";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-accent transition-transform duration-300 group-hover:rotate-12", className)}
    >
      {/* Central balanced pillar */}
      <path d="M12 3v18" />
      {/* Sleek horizontal scale balance beam */}
      <path d="M4 8h16" />
      {/* Left scale pan supported by geometric lines */}
      <path d="M4 8l3 7H1l3-7" />
      {/* Right scale pan supported by geometric lines */}
      <path d="M20 8l3 7h-6l3-7" />
      {/* Prestige pedestal base */}
      <path d="M8 21h8" />
      {/* Stylized sharp crown peak */}
      <path d="M12 3l-3 2h6l-3-2" />
    </svg>
  );
}

export function Logo({ className, iconSizeClass = "w-6 h-6", textSizeClass = "text-xl" }: { className?: string, iconSizeClass?: string, textSizeClass?: string }) {
  return (
    <div className={cn("group flex items-center gap-3 font-display font-semibold tracking-tight transition-colors", className)}>
      <LogoIcon className={iconSizeClass} />
      <span className={textSizeClass}>
        MARTINS <span className="text-accent font-light">S.A.</span>
      </span>
    </div>
  );
}
