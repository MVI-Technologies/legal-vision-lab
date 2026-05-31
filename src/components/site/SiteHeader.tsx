import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/atuacao", label: "Expertise" },
  { to: "/sobre", label: "O Escritório" },
  { to: "/resultados", label: "Resultados" },
  { to: "/artigos", label: "Artigos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          MARTINS <span className="text-accent font-light">S.A.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contato"
          className="hidden md:inline-flex bg-foreground text-background px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors duration-300"
        >
          Falar com Especialista
        </Link>
        <button
          aria-label="Abrir menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-5 h-px bg-foreground" />
          <span className="w-5 h-px bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 space-y-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-[11px] uppercase tracking-[0.2em] font-medium hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="block bg-foreground text-background px-5 py-3 text-[11px] uppercase tracking-widest text-center"
          >
            Falar com Especialista
          </Link>
        </div>
      )}
    </nav>
  );
}
