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
    <nav className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-white/10 text-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-white hover:text-accent transition-colors">
          MARTINS <span className="text-accent font-light">S.A.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-300">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent font-bold" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contato"
          className="hidden md:inline-flex bg-[#F5F0EB] text-[#1C1C1C] px-5 py-2.5 text-[11px] uppercase tracking-widest hover:bg-accent hover:text-white font-bold transition-all duration-300"
        >
          Falar com Especialista
        </Link>
        <button
          aria-label="Abrir menu"
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-5 h-px bg-white" />
          <span className="w-5 h-px bg-white" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#1A1A1A] px-6 py-6 space-y-4 text-zinc-300">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-[11px] uppercase tracking-[0.2em] font-medium hover:text-accent"
              activeProps={{ className: "text-accent font-bold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="block bg-[#F5F0EB] text-[#1C1C1C] px-5 py-3 text-[11px] uppercase tracking-widest text-center font-bold hover:bg-accent hover:text-white transition-colors"
          >
            Falar com Especialista
          </Link>
        </div>
      )}
    </nav>
  );
}
